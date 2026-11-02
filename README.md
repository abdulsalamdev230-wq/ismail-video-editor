# Ismail Visuals — Muhammad Ismail
## Premium Video Editor Portfolio (neon purple · glassmorphism)

Pure **HTML5 + CSS3 + vanilla JavaScript** — no frameworks, no build step.
Same static file structure as before; drop it on GitHub Pages / Vercel / Netlify as-is.

## Structure

```
index.html      → hero (portrait + headline), showreel, portfolio, services,
                  about + CapCut skills, contact
css/style.css   → cinematic neon design system (tokens at the top)
js/data.js      → ⭐ YOUR CONTENT — the only file you edit
js/script.js    → rendering, video player, filters, nav, form
images/         → profile.png + your thumbnails
video/          → your MP4 edits (create folders as you go)
```

## 📸 Your profile photo (IMPORTANT)

Save your professional portrait as:

```
images/profile.png
```

The moment that file exists, it automatically appears in:
- the **hero** (right side, cinematic purple lighting + glowing frame),
- the **about** section (same glow treatment),
- the small **avatar** next to "Video Editor & Visual Storyteller".

Guidance: ~1000×1220px or 1:1.2 portrait ratio, PNG or JPG.
Until then the site shows a clearly-labelled dashed placeholder — nothing fake.

## ✏️ Adding a video project

Open **`js/data.js`** inside `PROJECTS`, copy any object, paste at the end:

```js
{
  id:          "wedding-highlight",          // unique
  title:       "Wedding Cinematic Highlight",
  category:    "cinematic",   // "cinematic" | "reels" | "youtube" | "ads" | "grading" | "motion"
  description: "1–2 sentences shown on the card.",
  duration:    "2:47",
  thumbnail:   "images/cover.jpg",           // "" = generated neon placeholder
  mp4:         "video/final.mp4",            // "" if not available
  youtube:     "https://www.youtube.com/watch?v=VIDEO_ID",
}
```

Both `mp4` and `youtube` may be set — MP4 is preferred in the player and the
YouTube embed is used automatically otherwise. Delete `placeholder: true` when
it's real work. Portfolio grid + category filters + modal update automatically.

## ✏️ Showreel / Services / Skills / Socials

Everything (showreel links, the 10 service cards, CapCut skill chips) lives in
`js/data.js`. Social icons (Instagram / YouTube / TikTok) are dashed placeholders
in `index.html` — replace them with `<a href="…">` when you have the URLs.

## Already tested

- Modal video player: MP4 + YouTube (nocookie embed, fullscreen, ESC close)
- Category filters, scroll-spy nav, mobile menu
- Silent hover preview on cards (desktop, when MP4 exists)
- Contact form → pre-filled email app; one-tap WhatsApp (wa.me/923122303851)
- Reduced motion, keyboard access, skip link, focus states
- Live SMPTE-style timecode (decorative clock — not a metric)

## Design language

Black `#050505` · glass panels `#101014` · neon purple `#B026FF` → `#8B00FF`
· white type · muted gray `#A1A1AA` · rounded glassmorphism · soft purple glows.
