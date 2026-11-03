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

   ── HOW TO ADD A VIDEO PROJECT ────────────────────────────────
   Copy any object inside PROJECTS, paste at the end of the
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
   ═════════════════════════════════════════════════════════════ */

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
  duration: "",   // e.g. "0:52"
  thumbnail: "", // e.g. "images/showreel-cover.jpg"
  mp4: "",       // e.g. "video/showreel.mp4"
  youtube: "",   // or a YouTube watch link
};

/* ── 2. VIDEO PROJECTS ──────────────────────────────────────── */
const PROJECTS = [
  // ═══════════════════════════════════════════════════════
  // REAL VIDEOS — Muhammad Ismail's Google Drive,
  // folder: 1oC0Ih5R1qi8OY0crkls0eAiAGBcBHoJ4
  // ═══════════════════════════════════════════════════════

  // ── Cinematic Editing ──────────────────────────────────
  {
    id: "ventora-modular-sofa",
    title: "Ventora Modular Sofa — Cinematic Room Tour",
    category: "cinematic",
    description: "Product styling, clean pacing and moody lighting for an e-commerce showcase.",
    duration: "0:38",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "the-ancient-lime-clove-tonic",
    title: "THE ANCIENT “LIME & CLOVE” TONIC 🍋☕️",
    category: "cinematic",
    description: "A bold, texture-led cinematic edit with a flavorful arc.",
    duration: "0:37",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "srene-ai-video",
    title: "SRENE AI VIDEO",
    category: "cinematic",
    description: "AI-assisted visual with a hypnotic, cinematic rhythm.",
    duration: "0:24",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "vayora-pillow",
    title: "VAYORA PILLOW — Elevate the Moment",
    category: "cinematic",
    description: "Product cinematography that makes comfort feel premium.",
    duration: "0:32",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "t-shirt",
    title: "T-shirt 👕 — Product Cinematic",
    category: "cinematic",
    description: "A clean, product-forward cinematic look for apparel.",
    duration: "0:26",
    thumbnail: "", mp4: "", youtube: "",
  },

  // ── Reels & Shorts ─────────────────────────────────────
  {
    id: "neon-coder-reel",
    title: "NEON CODER REEL",
    category: "reels",
    description: "Fast, neon-lit vertical edit made for algorithmic feeds.",
    duration: "0:22",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "asphalt-jazz-reel",
    title: "ASPHALT JAZZ REEL",
    category: "reels",
    description: "Beat-synced street footage for short-form scrolling.",
    duration: "0:26",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "grandpaws-sit-with-kids",
    title: "GRANDPAWS SITTING WITH KIDS 😂",
    category: "reels",
    description: "Quirky, meme-paced reel built for shares and laughs.",
    duration: "0:29",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "cute-puppy-reel",
    title: "CUTE PUPPY REEL 🐶",
    category: "reels",
    description: "Playful, high-retention pet footage with quick cuts.",
    duration: "0:31",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "music-reverb-reel",
    title: "MUSIC REVERB REEL",
    category: "reels",
    description: "Sound-reactive edits that punch on mute and vibrate on audio.",
    duration: "0:23",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "spirit-box-reel",
    title: "SPIRIT BOX REEL",
    category: "reels",
    description: "Edgy, neon-drenched short-form cut for a music brand.",
    duration: "0:25",
    thumbnail: "", mp4: "", youtube: "",
  },

  // ── YouTube Editing ────────────────────────────────────
  {
    id: "sakubi-dating-reel",
    title: "Saki Bi Dating Reel",
    category: "youtube",
    description: "Long-form dating documentary piece — pacing built for retention.",
    duration: "0:48",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "sakubi-rental-car-reel",
    title: "Saki Bi Rental Car Reel",
    category: "youtube",
    description: "Brand-driven narrative edit for a rental-car campaign.",
    duration: "0:52",
    thumbnail: "", mp4: "", youtube: "",
  },

  // ── Promotional / Social Media Ads ─────────────────────
  {
    id: "the-kaizen-effect-ad",
    title: "The Kaizen Effect — Ad Cut",
    category: "ads",
    description: "Scroll-stopping ad with a strong hook, product-forward structure, finished polish.",
    duration: "0:34",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "alexa-golden-mist-ad",
    title: "Alexa Golden Mist — Ad Cut",
    category: "ads",
    description: "Product-forward commercial edit with sleek motion and clean finish.",
    duration: "0:39",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "fast-reboot-ad",
    title: "Fast Reboot — Ad Cut",
    category: "ads",
    description: "High-impact promo built to arrest attention in the first three seconds.",
    duration: "0:28",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "the-early-hour-ad",
    title: "The Early Hour — Ad Cut",
    category: "ads",
    description: "Tension-led promotional edit with a clear call to action.",
    duration: "0:36",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "amix-absorb-ad",
    title: "Amix Absorb — Ad Cut",
    category: "ads",
    description: "Minimal, confident anti-waste pitch for social platforms.",
    duration: "0:31",
    thumbnail: "", mp4: "", youtube: "",
  },

  // ── Promotional / Social Media Ads (reels) ─────────────
  {
    id: "the-adam-kitchen-table-ad",
    title: "The Adam Kitchen Table Ad",
    category: "ads",
    description: "Product story shot on the kitchen table — intimate, direct to camera.",
    duration: "0:26",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "the-wisdom-hub-ad",
    title: "The Wisdom Hub Ad",
    category: "ads",
    description: "Story-first promotional edit with a warm, trustworthy tone.",
    duration: "0:30",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "sakubi-studio-suv-ad",
    title: "Saki Bi Studio SUV Ad",
    category: "ads",
    description: "Luxury vehicle commercial with cinematic framing and premium grade.",
    duration: "0:41",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "sakubi-nutrition-ad",
    title: "Saki Bi Nutrition Ad",
    category: "ads",
    description: "Clean, high-conversion product edit for a wellness brand.",
    duration: "0:35",
    thumbnail: "", mp4: "", youtube: "",
  },

  // ── YouTube (documentary / long-form) ──────────────────
  {
    id: "sakubi-mountain-ing-red-carpet",
    title: "Saki Bi Mountain Ing Red Carpet",
    category: "youtube",
    description: "Long-form fashion/documentary edit with interview rhythm and graded frames.",
    duration: "0:56",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "sakubi-red-carpet-miami",
    title: "Saki Bi Red Carpet Miami",
    category: "youtube",
    description: "Editorial red-carpet sequence — pacing, b-roll and sound design.",
    duration: "0:44",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "sakubi-editors-choice",
    title: "Saki Bi Editors Choice",
    category: "youtube",
    description: "Curator-style long-form with a sharp hook and clean storytelling.",
    duration: "0:47",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "sakubi-minimizing-ransomware",
    title: "Saki Bi Minimizing Ransomware",
    category: "youtube",
    description: "Explainer video with clean pacing and on-screen information hierarchy.",
    duration: "0:42",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "sakubi-hiring",
    title: "Saki Bi Hiring",
    category: "youtube",
    description: "People-first recruitment film — music-driven, warm and human.",
    duration: "0:39",
    thumbnail: "", mp4: "", youtube: "",
  },

  // ── YouTube (creators / documentary) ───────────────────
  {
    id: "sakubi-real-housewives-south-carolina",
    title: "Saki Bi Real Housewives South Carolina",
    category: "youtube",
    description: "Documentary-style edit with editing-room storytelling and music sync.",
    duration: "0:55",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "sydney-swim-reel",
    title: "Sydney Swim Reel",
    category: "youtube",
    description: "Athletic, high-energy vertical cut for short-form platforms.",
    duration: "0:21",
    thumbnail: "", mp4: "", youtube: "",
  },
  {
    id: "sakubi-simply-instant-reel",
    title: "Saki Bi Simply Instant Reel",
    category: "youtube",
    description: "Clean, fast-paced short-form piece with a crisp finish.",
    duration: "0:24",
    thumbnail: "", mp4: "", youtube: "",
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
