/* ═══════════════════════════════════════════════════════════════
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
  image: "images/profile.jpg",
  signature: "Muhammad Ismail",
  studio: "ISMAIL VISUALS",
  role: "Professional Video Editor & CapCut Specialist",
};

/* ── 1. FEATURED SHOWREEL ───────────────────────────────────── */
const SHOWREEL = {
  title: "2026 — The Showreel",
  description:
    "One screen. Every skill. A fast-cut journey through my editing — pacing, transitions, colour and sound working as one.",
  thumbnail: "https://drive.google.com/thumbnail?id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z&sz=w1200",
  mp4: "https://drive.google.com/uc?export=download&id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z",
};

/* ── 1b. CAPCUT SKILLS DEMO (shows in the About / Skills area) ──
   Change which video is featured: set "skillVideo": true in
   scripts/drive-descriptions.json on the file you want.        */
const SKILL_VIDEO = {
  title: "Animation Showcase",
  description: "Motion-graphics style edit with animated energy from start to finish.",
  thumbnail: "https://drive.google.com/thumbnail?id=1lknfYgwPXlHYyHldIDYTcpKMizvjpg0c&sz=w1200",
  mp4: "https://drive.google.com/uc?export=download&id=1lknfYgwPXlHYyHldIDYTcpKMizvjpg0c",
};

/* ── 2. VIDEO PROJECTS (auto-synced) ────────────────────────── */
const PROJECTS = [
  {
    id: "ads-sample-brand-reel",
    title: "Ads Sample — Brand Reel",
    category: "ads",
    description: "A sample ad reel showing brand-forward cuts and pacing.",
    thumbnail: "https://drive.google.com/thumbnail?id=1ZpivQ-Gl1RK4V_Ft0bPv69EUI4dRn600&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1ZpivQ-Gl1RK4V_Ft0bPv69EUI4dRn600",
  },
  {
    id: "animation-showcase",
    title: "Animation Showcase",
    category: "motion",
    description: "Motion-graphics style edit with animated energy from start to finish.",
    thumbnail: "https://drive.google.com/thumbnail?id=1lknfYgwPXlHYyHldIDYTcpKMizvjpg0c&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1lknfYgwPXlHYyHldIDYTcpKMizvjpg0c",
  },
  {
    id: "blend-smart-product-ad",
    title: "Blend Smart — Product Ad",
    category: "ads",
    description: "Product-forward ad cut with a clean hook and crisp finish.",
    thumbnail: "https://drive.google.com/thumbnail?id=1EwKIcCVA-2OJ9oOAEJ-4dxf_2k48WMv2&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1EwKIcCVA-2OJ9oOAEJ-4dxf_2k48WMv2",
  },
  {
    id: "c-socks-product-ad",
    title: "C.Socks — Product Ad",
    category: "ads",
    description: "Playful apparel promo built around quick, rhythmic product shots.",
    thumbnail: "https://drive.google.com/thumbnail?id=1TiB1u3xVnwrs8slDsJ7AUpXZ7mWrz_15&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1TiB1u3xVnwrs8slDsJ7AUpXZ7mWrz_15",
  },
  {
    id: "car-wash-ad-version-1",
    title: "Car Wash Ad — Version 1",
    category: "ads",
    description: "High-gloss automotive service ad with punchy service callouts.",
    thumbnail: "https://drive.google.com/thumbnail?id=1Q45ym55o94obSiNHnTpHHPGA11YDi3F2&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1Q45ym55o94obSiNHnTpHHPGA11YDi3F2",
  },
  {
    id: "car-wash-ad-version-2",
    title: "Car Wash Ad — Version 2",
    category: "ads",
    description: "Alternate cut of the car wash ad with a different pacing arc.",
    thumbnail: "https://drive.google.com/thumbnail?id=1BYMzZmjagMEGVvJvgaynnlmDtzcSRKSD&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1BYMzZmjagMEGVvJvgaynnlmDtzcSRKSD",
  },
  {
    id: "corvael-product-ad",
    title: "Corvael — Product Ad",
    category: "ads",
    description: "Sleek commercial edit — premium look, snappy transitions.",
    thumbnail: "https://drive.google.com/thumbnail?id=1_mPqd8Nap_WcgxniaEF6UHF3Fu1RFI4a&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1_mPqd8Nap_WcgxniaEF6UHF3Fu1RFI4a",
  },
  {
    id: "creatine-fitness-video-ad",
    title: "Creatine — Fitness Video Ad",
    category: "ads",
    description: "Energetic supplement promo tuned for short-form feeds.",
    thumbnail: "https://drive.google.com/thumbnail?id=1L4aAx1zaIrR6PTNPNgEOHJXmVddEcGQP&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1L4aAx1zaIrR6PTNPNgEOHJXmVddEcGQP",
  },
  {
    id: "deep-collagen-ai-video-ad",
    title: "Deep Collagen — AI Video Ad",
    category: "ads",
    description: "AI-assisted skincare ad with a smooth, texture-led edit.",
    thumbnail: "https://drive.google.com/thumbnail?id=1SqiKN-UFtKMNVUF6_e1BGGLAiLfiKbWC&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1SqiKN-UFtKMNVUF6_e1BGGLAiLfiKbWC",
  },
  {
    id: "female-weight-loss-belly-ad",
    title: "Female Weight Loss — Belly Ad",
    category: "ads",
    description: "Direct-response style ad with a clear before/after arc.",
    thumbnail: "https://drive.google.com/thumbnail?id=1T0-QhgMMKhTJWj3B7vrsvqcafzjDXw1m&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1T0-QhgMMKhTJWj3B7vrsvqcafzjDXw1m",
  },
  {
    id: "french-ad-cut",
    title: "French — Ad Cut",
    category: "ads",
    description: "Stylish short-form cut with an international feel.",
    thumbnail: "https://drive.google.com/thumbnail?id=1tZvrkR6JJqFc6C-u43pRKtX0LuFP9Ojj&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1tZvrkR6JJqFc6C-u43pRKtX0LuFP9Ojj",
  },
  {
    id: "kaliqo-ai-video-ad",
    title: "Kaliqo — AI Video Ad",
    category: "ads",
    description: "Neon-lit AI campaign ad made for algorithmic feeds.",
    thumbnail: "https://drive.google.com/thumbnail?id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1nCeusNztcXw1BTb-2wYA6flzuvN_zO9z",
  },
  {
    id: "mana-gummies-product-ad",
    title: "Mana Gummies — Product Ad",
    category: "ads",
    description: "Colorful gummies promo with playful transitions and a sweet finish.",
    thumbnail: "https://drive.google.com/thumbnail?id=1UlJQXdH78fAC3G4tosu1WvERq1uTs3Y4&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1UlJQXdH78fAC3G4tosu1WvERq1uTs3Y4",
  },
  {
    id: "oregano-ai-video-ad",
    title: "Oregano — AI Video Ad",
    category: "ads",
    description: "Food-forward AI ad with appetite-driven pacing.",
    thumbnail: "https://drive.google.com/thumbnail?id=1qHKuipWG08jDgfXfq3AH07HwPY1XVoTa&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1qHKuipWG08jDgfXfq3AH07HwPY1XVoTa",
  },
  {
    id: "oregano-ai-video-ad-cut-2",
    title: "Oregano — AI Video Ad Cut 2",
    category: "ads",
    description: "Second delivery of the oregano campaign — new rhythm, tighter cut.",
    thumbnail: "https://drive.google.com/thumbnail?id=15pV203op-r68xWoKcI3ago4d-yko1gw7&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=15pV203op-r68xWoKcI3ago4d-yko1gw7",
  },
  {
    id: "parasite-gut-lining-ad",
    title: "Parasite — Gut Lining Ad",
    category: "ads",
    description: "Wellness explainer ad with clean on-screen information hierarchy.",
    thumbnail: "https://drive.google.com/thumbnail?id=1D7PRUusrHm9EB35WSzgYak_yUuV-LiaE&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1D7PRUusrHm9EB35WSzgYak_yUuV-LiaE",
  },
  {
    id: "ryze-ai-video-ad",
    title: "Ryze — AI Video Ad",
    category: "ads",
    description: "Bold AI-assisted promo with a hypnotic, cinematic rhythm.",
    thumbnail: "https://drive.google.com/thumbnail?id=1DiZBPvMOv9NgbIcYSmDfcjkH5qXuVjsa&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1DiZBPvMOv9NgbIcYSmDfcjkH5qXuVjsa",
  },
  {
    id: "script-01-cinematic-test",
    title: "Script 01 — Cinematic Test",
    category: "cinematic",
    description: "Scripted cinematic test edit — graded frames and emotional pacing.",
    thumbnail: "https://drive.google.com/thumbnail?id=1taUhOqrMxd8CNfjM8dagVdvBdbRDEp6N&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1taUhOqrMxd8CNfjM8dagVdvBdbRDEp6N",
  },
  {
    id: "shilajit-product-ad",
    title: "Shilajit — Product Ad",
    category: "ads",
    description: "Earthy, texture-led supplement ad built for social feeds.",
    thumbnail: "https://drive.google.com/thumbnail?id=1h1X4fOkgskb88T4JbV3obmvT8-au8naN&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1h1X4fOkgskb88T4JbV3obmvT8-au8naN",
  },
  {
    id: "sima-towel-product-ad",
    title: "Sima Towel — Product Ad",
    category: "ads",
    description: "Soft-goods promo showing the fabric quality up close.",
    thumbnail: "https://drive.google.com/thumbnail?id=1AztTrIyz9ScgQ7UhU5_R2wdR6dx_qHK3&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1AztTrIyz9ScgQ7UhU5_R2wdR6dx_qHK3",
  },
  {
    id: "srene-ai-video",
    title: "SRENE AI Video",
    category: "cinematic",
    description: "AI-assisted visual with a hypnotic, cinematic rhythm.",
    thumbnail: "https://drive.google.com/thumbnail?id=1dS6vYLUI-nI09A6hADNt_Fv4Y7PK4zcs&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1dS6vYLUI-nI09A6hADNt_Fv4Y7PK4zcs",
  },
  {
    id: "t-shirt-product-cinematic",
    title: "T-shirt 👕 — Product Cinematic",
    category: "cinematic",
    description: "A clean, product-forward cinematic look for apparel.",
    thumbnail: "https://drive.google.com/thumbnail?id=1S3WDoac-jEoDwY59RT5uG8_ZESg_COGL&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1S3WDoac-jEoDwY59RT5uG8_ZESg_COGL",
  },
  {
    id: "the-ancient-lime-clove-tonic",
    title: "The Ancient ‘Lime & Clove’ Tonic 🍋☕️",
    category: "cinematic",
    description: "A bold, texture-led cinematic edit with a flavorful arc.",
    thumbnail: "https://drive.google.com/thumbnail?id=1jDz_10J83SejZpcPZP50nraZ0ASKPbpF&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1jDz_10J83SejZpcPZP50nraZ0ASKPbpF",
  },
  {
    id: "vayora-pillow-elevate-the-moment",
    title: "Vayora Pillow — Elevate the Moment",
    category: "cinematic",
    description: "Product cinematography that makes comfort feel premium.",
    thumbnail: "https://drive.google.com/thumbnail?id=1XA_ITqpbQHQpOopnlN-_IesD6n58a8zM&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1XA_ITqpbQHQpOopnlN-_IesD6n58a8zM",
  },
  {
    id: "ventora-modular-sofa-cinematic-room-tour",
    title: "Ventora Modular Sofa — Cinematic Room Tour",
    category: "cinematic",
    description: "Product styling, clean pacing and moody lighting for an e-commerce showcase.",
    thumbnail: "https://drive.google.com/thumbnail?id=10XVKqP1Jf06lab3e6IfPZRJTeXuVCi0W&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=10XVKqP1Jf06lab3e6IfPZRJTeXuVCi0W",
  },
  {
    id: "vorrax-vacuum-product-ad",
    title: "Vorrax Vacuum — Product Ad",
    category: "ads",
    description: "Power-forward appliance ad with sharp product beats.",
    thumbnail: "https://drive.google.com/thumbnail?id=1Mz4pQopWkzh3aTHRlCO49yH5q9ibHEvR&sz=w1200",
    mp4: "https://drive.google.com/uc?export=download&id=1Mz4pQopWkzh3aTHRlCO49yH5q9ibHEvR",
  },
];;

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
