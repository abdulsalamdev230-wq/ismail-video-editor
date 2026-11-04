#!/usr/bin/env python3
"""
Ismail Visuals — Generate js/projects.js from Google Drive API JSON.

Usage:
    python gen-data-js.py projects.json > js/projects.js

Reads the JSON produced by list-drive-files.py and emits a JS array of
project objects that the portfolio site renders.
"""

import json
import sys

# Category label map
CATEGORY_LABELS = {
    "Ads": "Social Media Ads",
    "YouTube": "YouTube Videos",
    "Cinematic": "Cinematic Films",
    "Reels": "Reels & Shorts",
    "Web": "Websites",
    "Android": "Android Apps",
    "Games": "Games",
    "Other": "Other Projects",
}


def esc_js(value: str) -> str:
    """Escape a string for safe insertion into JS."""
    return (
        value
        .replace("\\", "\\\\")
        .replace("'", "\\'")
        .replace('"', '\\"')
        .replace("\n", "\\n")
        .replace("\r", "\\r")
        .replace("\t", "\\t")
    )


def build_project_js(p):
    """Build a JS object literal for a project."""
    title = esc_js(p.get("title", ""))
    category = esc_js(p.get("category", ""))
    description = esc_js(p.get("description", ""))
    duration = esc_js(p.get("duration", "0:00"))
    thumbnail = esc_js(p.get("thumbnail", ""))
    mp4 = esc_js(p.get("mp4", ""))
    youtube = esc_js(p.get("youtube", ""))
    id_ = esc_js(p.get("id", ""))

    return (
        '  {\n'
        f'    id: "{id_}",\n'
        f'    title: "{title}",\n'
        f'    category: "{category}",\n'
        f'    description: "{description}",\n'
        f'    duration: "{duration}",\n'
        f'    thumbnail: "{thumbnail}",\n'
        f'    mp4: "{mp4}",\n'
        f'    youtube: "{youtube}",\n'
        f'    source: "{p.get("source", "google-drive")}",\n'
        f'    importedAt: new Date("{p.get("importedAt", "")}"),\n'
        '  },'
    )


def main():
    if len(sys.argv) < 2:
        print("Usage: python gen-data-js.py <projects.json>")
        sys.exit(1)

    with open(sys.argv[1]) as f:
        projects = json.load(f)

    if not projects:
        print("/* No videos found — the folder is empty. */")
        print("const PROJECTS = [];")
        return

    print("/* ═══════════════════════════════════════════════════════════════")
    print("   ISMAIL VISUALS — Google Drive sync (auto-generated)")
    print("   Run: python list-drive-files.py <FOLDER_ID> | python gen-data-js.py > js/projects.js")
    print("   ═══════════════════════════════════════════════════════════════ */")
    print("")
    print("/* ⚠️  This file is auto-generated — do not edit. To update,")
    print("   run the sync action or the local script. */")
    print("const PROJECTS = [")
    for i, p in enumerate(projects):
        print(build_project_js(p))
        if i < len(projects) - 1:
            print(",")
    print("];")
    print("")
    print("/* Sync trigger: the GitHub Action regenerates this file on")
    print("   every schedule (hourly) — no manual edits needed. */")


if __name__ == "__main__":
    main()
