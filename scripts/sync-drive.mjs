#!/usr/bin/env node
/**
 * ISMAIL VISUALS ── Google Drive → Portfolio auto-sync (zero dependencies)
 *
 * Scans the PUBLIC Google Drive folder and regenerates js/data.js +
 * public/js/data.js so every new upload appears on the website
 * automatically — title from the file name, category & description auto.
 *
 * ✦ Custom title/description overrides live in scripts/drive-descriptions.json
 *   (key = Drive file ID). Anything not overridden gets a sensible default.
 * ✦ Skills-demo video slot: set "skillVideo": true on any file entry
 *   (or simply name the file anything containing "skill"), and it is
 *   featured in the About / CapCut skills section automatically.
 *
 * Folder must be shared as "Anyone with the link can view".
 *
 * Run locally:   node scripts/sync-drive.mjs
 * Runs hourly on GitHub Actions (see .github/workflows/sync-drive.yml).
 */

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE  = dirname(fileURLToPath(import.meta.url));
const ROOT  = join(HERE, "..");
const FOLDER_ID = process.env.GDRIVE_FOLDER_ID || "1oC0Ih5R1qi8OY0crkls0eAiAGBcBHoJ4";
const DESC_FILE = join(HERE, "drive-descriptions.json");

/* ── 1. Scan the folder page ─────────────────────────────────── */

async function fetchFolderItems(folderId) {
  const url = `https://drive.google.com/drive/folders/${folderId}`;
  const res = await fetch(url, {
    headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) portfolio-sync/1.0" },
  });
  if (!res.ok) throw new Error(`Drive folder HTTP ${res.status}`);
  const html = await res.text();

  // Each item tile: aria-label="<name> Video [Shared]" ... ssk='5:<token>:<FILE_ID>-0-16'
  const seen = new Map();
  const re = /aria-label="([^"]+?) Video(?: Shared)?"/g;
  let m;
  while ((m = re.exec(html))) {
    if (seen.has(m[1])) continue;
    const after = html.slice(m.index, m.index + 500);
    const id = (after.match(/ssk='5:[^:]+:([-\w]+?)-0-\d+'/) || [])[1];
    if (id) seen.set(m[1], id);
    else console.warn(`  ! no file id resolved for "${decodeEntities(m[1])}"`);
  }
  return [...seen].map(([rawName, driveId]) => ({
    driveId,
    fileName: decodeEntities(rawName),
  }));
}

function decodeEntities(s) {
  return s
    .replace(/\\u0026/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\r?\n/g, " ")
    .trim();
}

/* ── 2. Title / category / description ───────────────────────── */

function titleFromFileName(name) {
  return decodeURIComponent(
    String(name)
      .replace(/\.mp4$/i, "")
      .replace(/[_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim()
  );
}

function categoryFromName(name) {
  const n = name.toLowerCase();
  if (/animat|motion|graphic/.test(n))          return "motion";
  if (/\breel\b|short-form|short\b/.test(n))    return "reels";
  if (/youtube|vlog|documentary/.test(n))       return "youtube";
  if (/grade|grading/.test(n))                  return "grading";
  if (/sofa|pillow|tonic|t-shirt|shirt|srene|cinematic|film|room tour/.test(n)) return "cinematic";
  return "ads";
}

function loadOverrides() {
  if (!existsSync(DESC_FILE)) return {};
  try { return JSON.parse(readFileSync(DESC_FILE, "utf8")); } catch { return {}; }
}

function saveOverrides(ov) {
  const sorted = {};
  for (const k of Object.keys(ov).sort()) sorted[k] = ov[k];
  writeFileSync(DESC_FILE, JSON.stringify(sorted, null, 2) + "\n", "utf8");
}

/* ── 3. Generate the final data.js ───────────────────────────── */

function chooseSkillVideo(items, overrides) {
  // 1) explicit "skillVideo": true flag  2) file name containing "skill"
  const flagged = items.find(i => (overrides[i.driveId] || {}).skillVideo);
  const named   = items.find(i => /skill/i.test(i.fileName));
  return flagged || named || null;
}

let skillVideoId = "";

function skillVideoConst(items, overrides) {
  const chosen = chooseSkillVideo(items, overrides);
  if (!chosen) return "const SKILL_VIDEO = null;";
  const ov = overrides[chosen.driveId] || {};
  skillVideoId = chosen.driveId;
  return `const SKILL_VIDEO = {
  title: ${JSON.stringify(ov.title || titleFromFileName(chosen.fileName) || "CapCut Skills Demo")},
  description: ${JSON.stringify(ov.description || "A demo of my editing skills — cuts, motion and grade.")},
  thumbnail: "https://drive.google.com/thumbnail?id=${chosen.driveId}&sz=w1200",
  mp4: "https://drive.google.com/uc?export=download&id=${chosen.driveId}",
};`;
}

function buildProjects(items, overrides) {
  return items.map(({ driveId, fileName }) => {
    const ov = overrides[driveId] || {};
    const title = ov.title || titleFromFileName(fileName);
    return {
      id: title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || driveId,
      title,
      category: ov.category || categoryFromName(title),
      description: ov.description ||
        "Fresh upload straight from my Drive folder — auto-synced to this portfolio.",
      thumbnail: `https://drive.google.com/thumbnail?id=${driveId}&sz=w1200`,
      mp4: `https://drive.google.com/uc?export=download&id=${driveId}`,
    };
  });
}

const showreelFallback = (items) => {
  const wanted = "1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z"; // current showreel file
  const found = items.find(i => i.driveId === wanted) || items[0];
  return found ? found.driveId : "";
};

function dataJs(projects, items, overrides) {
  const arr =
    "[\n" + projects.map(p =>
      "  {\n" +
      `    id: ${JSON.stringify(p.id)},\n` +
      `    title: ${JSON.stringify(p.title)},\n` +
      `    category: ${JSON.stringify(p.category)},\n` +
      `    description: ${JSON.stringify(p.description)},\n` +
      `    thumbnail: ${JSON.stringify(p.thumbnail)},\n` +
      `    mp4: ${JSON.stringify(p.mp4)},\n` +
      "  },"
    ).join("\n") + "\n];";

  const sr = showreelId;
  const sv = skillVideoConst(items, overrides);
  return `/* ═══════════════════════════════════════════════════════════════
   ISMAIL VISUALS — MUHAMMAD ISMAIL
   Professional Video Editor & CapCut Specialist
   ─────────────────────────────────────────────────────────────
   ⚡ AUTO-GENERATED file — synced from the public Google Drive
      folder every hour by .github/workflows/sync-drive.yml.
      Do NOT hand-edit PROJECTS: they will be overwritten.
      ✦ Custom titles / categories / descriptions for any video:
        edit  scripts/drive-descriptions.json  (key = Drive file ID)
        then it survives every sync.

   ── CATEGORIES ────────────────────────────────────────────────
   "cinematic"  → Cinematic Editing
   "reels"      → Reels & Shorts
   "youtube"    → YouTube Videos
   "ads"        → Social Media Ads
   "grading"    → Color Grading
   "motion"     → Motion Graphics
   ═════════════════════════════════════════════════════════════ */

const PROFILE = {
  image: "images/profile.png",
  signature: "Muhammad Ismail",
  studio: "ISMAIL VISUALS",
  role: "Professional Video Editor & CapCut Specialist",
};

/* ── 1. FEATURED SHOWREEL ───────────────────────────────────── */
const SHOWREEL = {
  title: "2026 — The Showreel",
  description:
    "One screen. Every skill. A fast-cut journey through my editing — pacing, transitions, colour and sound working as one.",
  thumbnail: "https://drive.google.com/thumbnail?id=${sr}&sz=w1200",
  mp4: "https://drive.google.com/uc?export=download&id=${sr}",
};

/* ── 1b. CAPCUT SKILLS DEMO (shows in the About / Skills area) ──
   Change which video is featured: set "skillVideo": true in
   scripts/drive-descriptions.json on the file you want.        */
${sv}

/* ── 2. VIDEO PROJECTS (auto-synced) ────────────────────────── */
const PROJECTS = ${arr};

/* ── 3. SERVICES ────────────────────────────────────────────── */
const SERVICES = [
  { icon: "reel",    title: "Reels & Shorts Editing",        text: "Fast, trendy vertical edits engineered for the first three seconds." },
  { icon: "tube",    title: "YouTube Video Editing",         text: "Retention-first long-form edits — hooks, b-roll, patterns and rhythm." },
  { icon: "film",    title: "Cinematic Video Editing",       text: "Story-driven sequencing with graded frames and emotional pacing." },
  { icon: "ads",     title: "Social Media Advertisements",   text: "Scroll-stopping ad cuts that carry brand and message in seconds." },
  { icon: "promo",   title: "Product Promotional Videos",    text: "Product-forward commercial edits with sleek motion and polish." },
  { icon: "color",   title: "Color Grading",                 text: "Balanced, filmic grades — consistent tone across whole sequences." },
  { icon: "motion",  title: "Motion Graphics",               text: "Animated titles, transitions and clean graphic moments." },
  { icon: "wedding", title: "Wedding & Event Editing",       text: "Emotional event films with music-driven cuts and highlights." },
  { icon: "travel",  title: "Travel Videos",                 text: "Energetic travel stories — maps, moments and momentum." },
  { icon: "caption", title: "Captions & Subtitles",          text: "Clean, rhythmic animated captions synced word by word." },
];

/* ── 4. CapCut SKILLS ───────────────────────────────────────── */
const SKILLS = [
  "Video Editing",
  "Cinematic Transitions",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
  "Storytelling",
];
`;
}

/* ── 4. Main ─────────────────────────────────────────────────── */

let showreelId = "";

const overrides = loadOverrides();
console.log(`Scanning Drive folder ${FOLDER_ID} …`);
const items = await fetchFolderItems(FOLDER_ID);
console.log(`Found ${items.length} videos in the folder.`);

for (const { driveId } of items) if (!overrides[driveId]) overrides[driveId] = {};
saveOverrides(overrides);

const projects = buildProjects(items, overrides);
showreelId = showreelFallback(items);

const out = dataJs(projects, items, overrides);
writeFileSync(join(ROOT, "js", "data.js"), out, "utf8");
writeFileSync(join(ROOT, "public", "js", "data.js"), out, "utf8");
console.log(`✅ js/data.js & public/js/data.js updated — ${projects.length} projects.`);
items.slice(0, 3).forEach(i => console.log("   •", titleFromFileName(i.fileName) || i.fileName));
if (showreelId) console.log(`   Showreel file: ${showreelId}`);
