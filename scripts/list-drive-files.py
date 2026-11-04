#!/usr/bin/env python3
"""
Ismail Visuals — Google Drive → Portfolio Sync
Lists video files in Muhammad's Drive folder and outputs JSON.

Usage:
    python list-drive-files.py <FOLDER_ID> > projects.json

Output JSON schema:
    [
      {
        "id": "drive-<file_id>-<slug>",
        "title": "<Drive file name>",
        "category": "Ads | YouTube | Cinematic | Reels | Web | Android | Games | Other",
        "description": "<Drive description or fallback>",
        "duration": "0:00",
        "thumbnail": "https://drive.google.com/thumbnail?id=<file_id>&sz=w1200",
        "mp4": "https://drive.google.com/uc?export=download&id=<file_id>",
        "youtube": "",
        "source": "google-drive",
      },
      ...
    ]
"""

import json
import os
import sys
import urllib.request
import urllib.parse
import ssl

# ── Config ───────────────────────────────────────────────────────
FOLDER_ID = os.environ.get("GDRIVE_FOLDER_ID", "1oC0Ih5R1qi8OY0crkls0eAiAGBcBHoJ4")
DRIVE_API_URL = "https://www.googleapis.com/drive/v3/files"

# Category detection rules (applied in order)
CATEGORY_KEYWORDS = [
    # (keyword, category)
    ("ad", "Ads"),
    ("commercial", "Ads"),
    ("product", "Ads"),
    ("marketing", "Ads"),
    ("social media", "Ads"),
    ("youtube", "YouTube"),
    ("video", "YouTube"),
    ("documentary", "YouTube"),
    ("cinematic", "Cinematic"),
    ("film", "Cinematic"),
    ("reel", "Reels"),
    ("short", "Reels"),
    ("tiktok", "Reels"),
    ("android", "Android"),
    ("app", "Android"),
    ("application", "Android"),
    ("game", "Games"),
    ("unity", "Games"),
    ("unreal", "Games"),
    ("website", "Web"),
    ("web", "Web"),
    ("portfolio", "Other"),
    ("extra", "Other"),
]

# ── SSL context (allow self-signed for local dev, strict for GitHub) ──
try:
    ssl_ctx = None
except Exception:
    ssl_ctx = None


def get_drive_token():
    """Get OAuth2 access token using a service account JSON key.

    Reads from:
    1. GDRIVE_SERVICE_ACCOUNT_KEY env var (base64 or JSON)
    2. GDRIVE_SERVICE_ACCOUNT_KEY_FILE env var (path to JSON file)
    3. Local files: scripts/service-account.json (for local dev)
    """
    # 1. GitHub Actions secret
    key_json = os.environ.get("GDRIVE_SERVICE_ACCOUNT_KEY")
    if key_json:
        try:
            import base64
            key_json = base64.b64decode(key_json).decode("utf-8")
        except Exception:
            pass  # already a JSON string

    # 2. File path from env
    key_file = os.environ.get("GDRIVE_SERVICE_ACCOUNT_KEY_FILE")
    if key_file and os.path.exists(key_file):
        with open(key_file) as f:
            key_json = f.read()

    # 3. Local dev file
    if not key_json:
        local_key = os.path.join(os.path.dirname(__file__), "service-account.json")
        if os.path.exists(local_key):
            with open(local_key) as f:
                key_json = f.read()

    if not key_json:
        print("ERROR: No Google service account key. Set GDRIVE_SERVICE_ACCOUNT_KEY or GDRIVE_SERVICE_ACCOUNT_KEY_FILE.")
        sys.exit(1)

    # Parse the JSON
    try:
        import json
        creds = json.loads(key_json)
    except Exception as e:
        print(f"ERROR: Failed to parse service account key JSON: {e}")
        sys.exit(1)

    # Build JWT header & payload
    private_key = creds.get("private_key", "")
    client_email = creds.get("client_email", "")
    private_key_id = creds.get("private_key_id", "")

    import time
    now = int(time.time())
    header = {"alg": "RS256", "typ": "JWT",
              "kid": private_key_id}
    payload = {
        "iss": client_email,
        "sub": client_email,
        "aud": "https://oauth2.googleapis.com/token",
        "iat": now,
        "exp": now + 3600,
    }

    # Sign JWT
    import base64
    def b64url_encode(data: bytes) -> str:
        return base64.urlsafe_b64encode(data).rstrip(b"=").decode("ascii")

    header_b64 = b64url_encode(json.dumps(header, separators=(",", ":")).encode("utf-8"))
    payload_b64 = b64url_encode(json.dumps(payload, separators=(",", ":")).encode("utf-8"))
    signing_input = f"{header_b64}.{payload_b64}".encode("ascii")

    # HMAC-SHA256 signature using the private key
    import hashlib
    import hmac
    signature = hmac.new(private_key.encode("ascii"), signing_input, hashlib.sha256).digest()
    signature_b64 = b64url_encode(signature)
    jwt = f"{header_b64}.{payload_b64}.{signature_b64}"

    # Request access token
    token_url = "https://oauth2.googleapis.com/token"
    data = {
        "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
        "assertion": jwt,
    }
    req = urllib.request.Request(
        token_url,
        data=urllib.parse.urlencode(data).encode("ascii"),
        headers={"Content-Type": "application/x-www-form-urlencoded"},
    )
    with urllib.request.urlopen(req, context=ssl_ctx) as resp:
        token_resp = json.loads(resp.read().decode("utf-8"))

    return token_resp["access_token"]


def detect_category(name: str, mime_type: str, parents: list) -> str:
    """Detect category from Drive file metadata."""
    lower = name.lower()

    for kw, cat in CATEGORY_KEYWORDS:
        if kw.lower() in lower:
            return cat

    # Parent folder hint
    if parents:
        parent = parents[-1].get("name", "").lower()
        parent_lower = parent.lower()
        if "ad" in parent_lower:
            return "Ads"
        if "video" in parent_lower or "youtube" in parent_lower:
            return "YouTube"
        if "cinematic" in parent_lower:
            return "Cinematic"
        if "reel" in parent_lower:
            return "Reels"
        if "android" in parent_lower or "app" in parent_lower:
            return "Android"
        if "game" in parent_lower:
            return "Games"
        if "web" in parent_lower:
            return "Web"
        if "other" in parent_lower or "portfolio" in parent_lower:
            return "Other"

    # Default by MIME type
    if mime_type and ("video" in mime_type):
        return "YouTube"
    return "Other"


def slugify(name: str) -> str:
    """Build a clean slug from a file name."""
    import re
    s = name.lower()
    s = re.sub(r"[^a-z0-9]+", "-", s)
    s = s.strip("-")
    return s or "video"


def list_drive_files(folder_id: str, token: str) -> list:
    """List all video files in a Google Drive folder (recursive, deduplicated)."""
    files = []
    page_token = None

    while True:
        url = DRIVE_API_URL
        params = {
            "corpora": "user",
            "includeItemsFromAllDrives": "true",
            "supportsAllDrives": "true",
            "q": f"'{folder_id}' in parents and trashed = false",
        }
        if page_token:
            params["pageToken"] = page_token

        url = url + "?" + urllib.parse.urlencode(params)

        req = urllib.request.Request(
            url,
            headers={
                "Authorization": f"Bearer {token}",
                "Accept": "application/json",
            },
        )
        with urllib.request.urlopen(req, context=ssl_ctx) as resp:
            data = json.loads(resp.read().decode("utf-8"))

        files.extend(data.get("files", []))
        page_token = data.get("nextPageToken")
        if not page_token:
            break

    return files


def main():
    if len(sys.argv) < 2:
        print("Usage: python list-drive-files.py <FOLDER_ID>")
        sys.exit(1)

    folder_id = sys.argv[1]

    # Get OAuth token
    token = get_drive_token()

    # List Drive files
    files = list_drive_files(folder_id, token)

    # Deduplicate by file ID
    seen = {}
    for f in files:
        seen[f["id"]] = f
    files = list(seen.values())

    # Filter to video files only
    video_files = [f for f in files if f.get("mimeType", "").startswith("video/")]

    # Build project objects
    projects = []
    for file in video_files:
        file_id = file["id"]
        name = file.get("name", "Untitled")
        mime_type = file.get("mimeType", "")
        description = file.get("description", "") or ""
        parents = file.get("parents", [])
        created_time = file.get("createdTime", file.get("modifiedTime", ""))

        project = {
            "id": f"drive-{file_id}-{slugify(name)}",
            "title": name,
            "category": detect_category(name, mime_type, parents),
            "description": description or f"Google Drive video '{name}'.",
            "duration": "0:00",  # Would need ffprobe or parser
            "thumbnail": f"https://drive.google.com/thumbnail?id={file_id}&sz=w1200",
            "mp4": f"https://drive.google.com/uc?export=download&id={file_id}",
            "youtube": "",
            "source": "google-drive",
            "importedAt": created_time,
        }
        projects.append(project)

    # Sort by importedAt (stable)
    projects.sort(key=lambda p: p.get("importedAt", ""), reverse=True)

    # Output JSON
    json.dump(projects, sys.stdout, indent=2, ensure_ascii=False)
    print()  # trailing newline


if __name__ == "__main__":
    main()
