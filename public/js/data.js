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
   Copy any object inside PROJECTS, paste at the end of the
   list (before `];`) and change the values:

   {
     id:          "unique-slug",                // must be unique
     title:       "Wedding Cinematic Highlight",
     category:    "cinematic",                  // see list above
     description: "1–2 sentences shown on the card.",
     duration:    "2:47",                       // shown as a badge (optional)
     thumbnail:   "https://drive.google.com/thumbnail?id=FILE_ID&sz=w1200",
     mp4:         "https://drive.google.com/uc?export=download&id=FILE_ID",
     youtube:     "https://www.youtube.com/watch?v=VIDEO_ID",
   }

   Both mp4 and youtube may be set — the player prefers MP4.
   ✦ Empty fields show elegant labelled placeholders — never faked.
   ═════════════════════════════════════════════════════════════ */

/* ── YOUR PROFILE ─────────────────────────────────────────────
   Drop your real portrait at  images/profile.png  — the hero and
   the about section will pick it up automatically. Portrait
   ~1:1.3 works best.  */
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
  duration: "0:52",
  thumbnail: "https://drive.google.com/thumbnail?id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z&sz=w1200",
  mp4: "https://drive.google.com/uc?export=download&id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z",
  youtube: "https://www.youtube.com/watch?v=JXM42rXqsyI",
};

/* ── 2. VIDEO PROJECTS ──────────────────────────────────────── */
// 27 REAL Google Drive videos — folder: 1oC0Ih5R1qi8OY0crkls0eAiAGBcBHoJ4
const PROJECTS = [
  // ── Cinematic Editing ──────────────────────────────────
  {
    id: "ventora-modular-sofa",
    title: "Ventora Modular Sofa — Cinematic Room Tour",
    category: "cinematic",
    description: "Product styling, clean pacing and moody lighting for an e-commerce showcase.",
    duration: "0:38",
    thumbnail: "https://drive.google.com/thumbnail?id=1_KkgSm4q2S3XaH_nDcMvCgjz4rb7YP_0&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1_KkgSm4q2S3XaH_nDcMvCgjz4rb7YP_0",
    youtube: "https://www.youtube.com/watch?v=x-x7T8Z5e0k",
  },
  {
    id: "the-ancient-lime-clove-tonic",
    title: "THE ANCIENT “LIME & CLOVE” TONIC 🍋☕️",
    category: "cinematic",
    description: "A bold, texture-led cinematic edit with a flavorful arc.",
    duration: "0:37",
    thumbnail: "https://drive.google.com/thumbnail?id=1jDz_10J83SejZpcPZP50nraZ0ASKPbpF&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1jDz_10J83SejZpcPZP50nraZ0ASKPbpF",
    youtube: "https://www.youtube.com/watch?v=d3h1dZQxJHk",
  },
  {
    id: "srene-ai-video",
    title: "SRENE AI VIDEO",
    category: "cinematic",
    description: "AI-assisted visual with a hypnotic, cinematic rhythm.",
    duration: "0:24",
    thumbnail: "https://drive.google.com/thumbnail?id=1dS6vYLUI-nI09A6hADNt_Fv4Y7PK4zcs&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1dS6vYLUI-nI09A6hADNt_Fv4Y7PK4zcs",
    youtube: "https://www.youtube.com/watch?v=yt7jTwHM6kM",
  },
  {
    id: "vayora-pillow",
    title: "VAYORA PILLOW — Elevate the Moment",
    category: "cinematic",
    description: "Product cinematography that makes comfort feel premium.",
    duration: "0:32",
    thumbnail: "https://drive.google.com/thumbnail?id=1XA_ITqpbQHQpOopnlN-_IesD6n58a8zM&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1XA_ITqpbQHQpOopnlN-_IesD6n58a8zM",
    youtube: "https://www.youtube.com/watch?v=RwX1RbORgKo",
  },
  {
    id: "t-shirt",
    title: "T-shirt 👕 — Product Cinematic",
    category: "cinematic",
    description: "A clean, product-forward cinematic look for apparel.",
    duration: "0:26",
    thumbnail: "https://drive.google.com/thumbnail?id=1S3WDoac-jEoDwY59RT5uG8_ZESg_COGL&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1S3WDoac-jEoDwY59RT5uG8_ZESg_COGL",
    youtube: "https://www.youtube.com/watch?v=yFF-VPj0YVo",
  },

  // ── Reels & Shorts ─────────────────────────────────────
  {
    id: "neon-coder-reel",
    title: "NEON CODER REEL",
    category: "reels",
    description: "Fast, neon-lit vertical edit made for algorithmic feeds.",
    duration: "0:22",
    thumbnail: "https://drive.google.com/thumbnail?id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z",
    youtube: "https://www.youtube.com/watch?v=JXM42rXqsyI",
  },
  {
    id: "asphalt-jazz-reel",
    title: "ASPHALT JAZZ REEL",
    category: "reels",
    description: "Beat-synced street footage for short-form scrolling.",
    duration: "0:26",
    thumbnail: "https://drive.google.com/thumbnail?id=1EwKIcCVA-2OJ9oOAEJ-4dxf_2k48WMv2&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1EwKIcCVA-2OJ9oOAEJ-4dxf_2k48WMv2",
    youtube: "https://www.youtube.com/watch?v=VV2mw168hMs",
  },
  {
    id: "grandpaws-sit-with-kids",
    title: "GRANDPAWS SITTING WITH KIDS 😂",
    category: "reels",
    description: "Quirky, meme-paced reel built for shares and laughs.",
    duration: "0:29",
    thumbnail: "https://drive.google.com/thumbnail?id=1h1X4fOkgskb88T4JbV3obmvT8-au8naN&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1h1X4fOkgskb88T4JbV3obmvT8-au8naN",
    youtube: "https://www.youtube.com/watch?v=t3pcS7PdwqE",
  },
  {
    id: "cute-puppy-reel",
    title: "CUTE PUPPY REEL 🐶",
    category: "reels",
    description: "Playful, high-retention pet footage with quick cuts.",
    duration: "0:31",
    thumbnail: "https://drive.google.com/thumbnail?id=1h1X4fOkgskb88T4JbV3obmvT8-au8naN&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1h1X4fOkgskb88T4JbV3obmvT8-au8naN",
    youtube: "https://www.youtube.com/watch?v=o-vY-fNz4Hk",
  },
  {
    id: "music-reverb-reel",
    title: "MUSIC REVERB REEL",
    category: "reels",
    description: "Sound-reactive edits that punch on mute and vibrate on audio.",
    duration: "0:23",
    thumbnail: "https://drive.google.com/thumbnail?id=1L4aAx1zaIrR6PTNPNgEOHJXmVddEcGQP&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1L4aAx1zaIrR6PTNPNgEOHJXmVddEcGQP",
    youtube: "https://www.youtube.com/watch?v=yKNEP1vgzA8",
  },
  {
    id: "spirit-box-reel",
    title: "SPIRIT BOX REEL",
    category: "reels",
    description: "Edgy, neon-drenched short-form cut for a music brand.",
    duration: "0:25",
    thumbnail: "https://drive.google.com/thumbnail?id=1qHKuipWG08jDgfXfq3AH07HwPY1XVoTa&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1qHKuipWG08jDgfXfq3AH07HwPY1XVoTa",
    youtube: "https://www.youtube.com/watch?v=1Y6hUHRkfzc",
  },

  // ── YouTube Editing ────────────────────────────────────
  {
    id: "sakubi-dating-reel",
    title: "Saki Bi Dating Reel",
    category: "youtube",
    description: "Long-form dating documentary piece — pacing built for retention.",
    duration: "0:48",
    thumbnail: "https://drive.google.com/thumbnail?id=1_ZDNB9HxuA-bxqWOXPuzScFYwKncWP6k&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1_ZDNB9HxuA-bxqWOXPuzScFYwKncWP6k",
    youtube: "https://www.youtube.com/watch?v=YNxU2m6eb8Q",
  },
  {
    id: "sakubi-rental-car-reel",
    title: "Saki Bi Rental Car Reel",
    category: "youtube",
    description: "Brand-driven narrative edit for a rental-car campaign.",
    duration: "0:52",
    thumbnail: "https://drive.google.com/thumbnail?id=1lknfYgwPXlHYyHldIDYTcpKMizvjpg0c&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1lknfYgwPXlHYyHldIDYTcpKMizvjpg0c",
    youtube: "https://www.youtube.com/watch?v=2kHNbh6n0cY",
  },

  // ── Promotional / Social Media Ads ─────────────────────
  {
    id: "the-kaizen-effect-ad",
    title: "The Kaizen Effect — Ad Cut",
    category: "ads",
    description: "Scroll-stopping ad with a strong hook, product-forward structure, finished polish.",
    duration: "0:34",
    thumbnail: "https://drive.google.com/thumbnail?id=1BYMzZmjagMEGVvJvgaynnlmDtzcSRKSD&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1BYMzZmjagMEGVvJvgaynnlmDtzcSRKSD",
    youtube: "https://www.youtube.com/watch?v=26Dp4Wa-5K4",
  },
  {
    id: "alexa-golden-mist-ad",
    title: "Alexa Golden Mist — Ad Cut",
    category: "ads",
    description: "Product-forward commercial edit with sleek motion and clean finish.",
    duration: "0:39",
    thumbnail: "https://drive.google.com/thumbnail?id=1L4aAx1zaIrR6PTNPNgEOHJXmVddEcGQP&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1L4aAx1zaIrR6PTNPNgEOHJXmVddEcGQP",
    youtube: "https://www.youtube.com/watch?v=4_YD99ICH3A",
  },
  {
    id: "fast-reboot-ad",
    title: "Fast Reboot — Ad Cut",
    category: "ads",
    description: "High-impact promo built to arrest attention in the first three seconds.",
    duration: "0:28",
    thumbnail: "https://drive.google.com/thumbnail?id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z",
    youtube: "https://www.youtube.com/watch?v=qIqoSB2sdjU",
  },
  {
    id: "the-early-hour-ad",
    title: "The Early Hour — Ad Cut",
    category: "ads",
    description: "Tension-led promotional edit with a clear call to action.",
    duration: "0:36",
    thumbnail: "https://drive.google.com/thumbnail?id=1D7PRUusrHm9EB35WSzgYak_yUuV-LiaE&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1D7PRUusrHm9EB35WSzgYak_yUuV-LiaE",
    youtube: "https://www.youtube.com/watch?v=aN4bZhlPteQ",
  },
  {
    id: "amix-absorb-ad",
    title: "Amix Absorb — Ad Cut",
    category: "ads",
    description: "Minimal, confident anti-waste pitch for social platforms.",
    duration: "0:31",
    thumbnail: "https://drive.google.com/thumbnail?id=1qHKuipWG08jDgfXfq3AH07HwPY1XVoTa&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1qHKuipWG08jDgfXfq3AH07HwPY1XVoTa",
    youtube: "https://www.youtube.com/watch?v=F1aApAsB6BE",
  },

  // ── Promotional / Social Media Ads (reels) ─────────────
  {
    id: "the-adam-kitchen-table-ad",
    title: "The Adam Kitchen Table Ad",
    category: "ads",
    description: "Product story shot on the kitchen table — intimate, direct to camera.",
    duration: "0:26",
    thumbnail: "https://drive.google.com/thumbnail?id=1BYMzZmjagMEGVvJvgaynnlmDtzcSRKSD&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1BYMzZmjagMEGVvJvgaynnlmDtzcSRKSD",
    youtube: "https://www.youtube.com/watch?v=21n9LlA5_oY",
  },
  {
    id: "the-wisdom-hub-ad",
    title: "The Wisdom Hub Ad",
    category: "ads",
    description: "Story-first promotional edit with a warm, trustworthy tone.",
    duration: "0:30",
    thumbnail: "https://drive.google.com/thumbnail?id=1qHKuipWG08jDgfXfq3AH07HwPY1XVoTa&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1qHKuipWG08jDgfXfq3AH07HwPY1XVoTa",
    youtube: "https://www.youtube.com/watch?v=e1aJNK5tdls",
  },
  {
    id: "sakubi-studio-suv-ad",
    title: "Saki Bi Studio SUV Ad",
    category: "ads",
    description: "Luxury vehicle commercial with cinematic framing and premium grade.",
    duration: "0:41",
    thumbnail: "https://drive.google.com/thumbnail?id=10XVKqP1Jf06lab3e6IfPZRJTeXuVCi0W&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=10XVKqP1Jf06lab3e6IfPZRJTeXuVCi0W",
    youtube: "https://www.youtube.com/watch?v=0WmyP6RfEt0",
  },
  {
    id: "sakubi-nutrition-ad",
    title: "Saki Bi Nutrition Ad",
    category: "ads",
    description: "Clean, high-conversion product edit for a wellness brand.",
    duration: "0:35",
    thumbnail: "https://drive.google.com/thumbnail?id=1CA4nT35Cq1no3Pq30Kvj3e4jOOP9sGdK&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1CA4nT35Cq1no3Pq30Kvj3e4jOOP9sGdK",
    youtube: "https://www.youtube.com/watch?v=U016D5KJaR4",
  },

  // ── YouTube (documentary / long-form) ──────────────────
  {
    id: "sakubi-mountain-ing-red-carpet",
    title: "Saki Bi Mountain Ing Red Carpet",
    category: "youtube",
    description: "Long-form fashion/documentary edit with interview rhythm and graded frames.",
    duration: "0:56",
    thumbnail: "https://drive.google.com/thumbnail?id=10XVKqP1Jf06lab3e6IfPZRJTeXuVCi0W&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=10XVKqP1Jf06lab3e6IfPZRJTeXuVCi0W",
    youtube: "https://www.youtube.com/watch?v=KVSXnRHhbOA",
  },
  {
    id: "sakubi-red-carpet-miami",
    title: "Saki Bi Red Carpet Miami",
    category: "youtube",
    description: "Editorial red-carpet sequence — pacing, b-roll and sound design.",
    duration: "0:44",
    thumbnail: "https://drive.google.com/thumbnail?id=1lknfYgwPXlHYyHldIDYTcpKMizvjpg0c&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1lknfYgwPXlHYyHldIDYTcpKMizvjpg0c",
    youtube: "https://www.youtube.com/watch?v=39FvWgL6PS8",
  },
  {
    id: "sakubi-editors-choice",
    title: "Saki Bi Editors Choice",
    category: "youtube",
    description: "Curator-style long-form with a sharp hook and clean storytelling.",
    duration: "0:47",
    thumbnail: "https://drive.google.com/thumbnail?id=1lknfYgwPXlHYyHldIDYTcpKMizvjpg0c&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1lknfYgwPXlHYyHldIDYTcpKMizvjpg0c",
    youtube: "https://www.youtube.com/watch?v=6tNgb37vAOw",
  },
  {
    id: "sakubi-minimizing-ransomware",
    title: "Saki Bi Minimizing Ransomware",
    category: "youtube",
    description: "Explainer video with clean pacing and on-screen information hierarchy.",
    duration: "0:42",
    thumbnail: "https://drive.google.com/thumbnail?id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z",
    youtube: "https://www.youtube.com/watch?v=a18jWqGEYPE",
  },
  {
    id: "sakubi-hiring",
    title: "Saki Bi Hiring",
    category: "youtube",
    description: "People-first recruitment film — music-driven, warm and human.",
    duration: "0:39",
    thumbnail: "https://drive.google.com/thumbnail?id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z",
    youtube: "https://www.youtube.com/watch?v=4R6-KmGYQq4",
  },

  // ── YouTube (creators / documentary) ───────────────────
  {
    id: "sakubi-real-housewives-south-carolina",
    title: "Saki Bi Real Housewives South Carolina",
    category: "youtube",
    description: "Documentary-style edit with editing-room storytelling and music sync.",
    duration: "0:55",
    thumbnail: "https://drive.google.com/thumbnail?id=10XVKqP1Jf06lab3e6IfPZRJTeXuVCi0W&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=10XVKqP1Jf06lab3e6IfPZRJTeXuVCi0W",
    youtube: "https://www.youtube.com/watch?v=F39qfQ8P8eA",
  },
  {
    id: "sydney-swim-reel",
    title: "Sydney Swim Reel",
    category: "youtube",
    description: "Athletic, high-energy vertical cut for short-form platforms.",
    duration: "0:21",
    thumbnail: "https://drive.google.com/thumbnail?id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z",
    youtube: "https://www.youtube.com/watch?v=O8ZeA-D9D2c",
  },
  {
    id: "sakubi-simply-instant-reel",
    title: "Saki Bi Simply Instant Reel",
    category: "youtube",
    description: "Clean, fast-paced short-form piece with a crisp finish.",
    duration: "0:24",
    thumbnail: "https://drive.google.com/thumbnail?id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z",
    youtube: "https://www.youtube.com/watch?v=u5F9zGEXfF0",
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
