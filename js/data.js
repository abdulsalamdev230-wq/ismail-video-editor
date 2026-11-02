/* ═══════════════════════════════════════════════════════════════
   ISMAIL VISUALS — MUHAMMAD ISMAIL
   Professional Video Editor & CapCut Specialist
   ─────────────────────────────────────────────────────────────
   ⭐ THIS IS THE ONLY FILE YOU EDIT. The whole website renders
      itself from the data below — no other file needs touching.

   ── CATEGORIES ────────────────────────────────────────────────
   "cinematic"  → Cinematic Editing
   "reels"      → Reels & Shorts
   "youtube"    → YouTube Videos
   "ads"        → Social Media Ads
   "grading"    → Color Grading
   "motion"     → Motion Graphics

   ── HOW TO ADD A VIDEO PROJECT ────────────────────────────────
   Copy any object inside PROJECTS, paste it at the end of the
   list (before `];`) and change the values:

   {
     id:          "unique-slug",                // must be unique
     title:       "Wedding Cinematic Highlight",
     category:    "cinematic",                  // see list above
     description: "1–2 sentences shown on the card.",
     duration:    "2:47",                       // shown as a badge (optional)
     thumbnail:   "images/my-cover.jpg",        // "" = generated neon placeholder
     mp4:         "video/my-video.mp4",         // "" if not available
     youtube:     "https://www.youtube.com/watch?v=VIDEO_ID", // "" if not applicable
   }

   Both mp4 and youtube may be set — the player prefers MP4.
   Put media inside the /images and /video folders.
   ✦ Empty fields show elegant labelled placeholders — never faked.
   ═══════════════════════════════════════════════════════════════ */

/* ── YOUR PROFILE ─────────────────────────────────────────────
   Drop your real portrait at  images/profile.png  — the hero and
   the about section will pick it up automatically (see step 1
   below for exact size guidance). Portrait ~1:1.3 works best.  */
const PROFILE = {
  image: "images/profile.png",   // ← replace this file with YOUR photo
  signature: "Muhammad Ismail",
  studio: "ISMAIL VISUALS",
  role: "Professional Video Editor & CapCut Specialist",
};

/* ── 1. FEATURED SHOWREEL ───────────────────────────────────── */
const SHOWREEL = {
  title: "2026 — The Showreel",
  description:
    "One screen. Every skill. A fast-cut journey through my editing — pacing, transitions, colour and sound working as one.",
  duration: "",    // e.g. "1:52" (optional)
  thumbnail: "",   // e.g. "images/showreel-cover.jpg"
  mp4: "",         // e.g. "video/showreel.mp4"
  youtube: "",     // or a YouTube watch link
};

/* ── 2. VIDEO PROJECTS ──────────────────────────────────────── */
const PROJECTS = [
  // ✦✦✦ PLACEHOLDER ENTRIES — replace with your real work ✦✦✦
  {
    id: "ph-cinematic",
    placeholder: true,
    title: "Cinematic Short Film Cut",
    category: "cinematic",
    description: "Story-driven sequencing, graded frames and emotional pacing — editing that serves the feeling.",
    duration: "", thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "ph-reels-01",
    placeholder: true,
    title: "Reel — Lifestyle Edit",
    category: "reels",
    description: "Vertical, fast and rhythmic — punchy cuts, trending sound sync and captions that move.",
    duration: "", thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "ph-reels-02",
    placeholder: true,
    title: "Reel — Product Promo",
    category: "reels",
    description: "Commercial-ready vertical cut with kinetic text and seamless beat-matched transitions.",
    duration: "", thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "ph-youtube",
    placeholder: true,
    title: "YouTube — Long-Form Edit",
    category: "youtube",
    description: "Retention-focused edit: strong hooks, b-roll overlays, sound design and clean pacing.",
    duration: "", thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "ph-ads",
    placeholder: true,
    title: "Social Media Ad Campaign",
    category: "ads",
    description: "Scroll-stopping ad cut — bold first three seconds, product-forward structure, polished finish.",
    duration: "", thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "ph-grading",
    placeholder: true,
    title: "Color Grade — Before & After",
    category: "grading",
    description: "Balanced exposure, filmic tonality and mood-driven grading — the same shot, a different feeling.",
    duration: "", thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "ph-motion",
    placeholder: true,
    title: "Motion Graphics Titles",
    category: "motion",
    description: "Animated titles, transitions and clean graphic moments that make an edit feel finished.",
    duration: "", thumbnail: "", mp4: "", youtube: "",
  },
];

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

/* ── 4. CapCut SKILLS ─────────────────────────────────────────
   ✦ Intentionally NON-NUMERIC: no invented percentages or levels.
     Elegant chips only — real, honest capability indicators.   */
const SKILLS = [
  "Video Editing",
  "Cinematic Transitions",
  "Color Grading",
  "Motion Graphics",
  "Sound Design",
  "Storytelling",
];
