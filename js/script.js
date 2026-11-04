/* ═══════════════════════════════════════════════════════════════
   ISMAIL VISUALS — portfolio engine (Google Drive sync v2.0)
   Fetches projects from the secure API (worker/projects.json)
   Renders everything · zero dependencies · no hard-coded lists
   ═══════════════════════════════════════════════════════════════ */

(() => {
  "use strict";

  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];

  const EMAIL     = "muahammadismail310@gmail.com";
  const WA_NUMBER = "923122303851";
  const HOVER_OK  = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const CATS = {
    cinematic: "Cinematic Films",
    reels:     "Reels & Shorts",
    youtube:   "YouTube Videos",
    ads:       "Social Media Ads",
    web:       "Websites",
    android:   "Android Apps",
    games:     "Games",
    other:     "Other Projects",
  };

  const ICON_PLAY = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M8 5.5v13l11-6.5z" fill="currentColor"/></svg>';
  const CLAP_ICON = '<svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true"><path d="M3 9h18v10a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19V9zm1-4 3.2 4H10L6.8 5H3.5zm6.5 0H14l3.2 4h-3.2L10.5 5zm7 0h3.6L21 9h-.8L17.5 5z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/></svg>';

  const SERVICE_ICONS = {
    reel:    '<path d="M4 4h7v16H4zM13 7h7v10h-7z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6.5 9l-2 3 2 3M16.5 9l-2 3 2 3" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>',
    tube:    '<rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
    film:    '<path d="M3 5h18v14H3zM3 9h18M3 15h18M7.5 5v4M7.5 15v4M16.5 5v4M16.5 15v4" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/>',
    ads:     '<path d="M5 5h11l4 4.5V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19V6.5A1.5 1.5 0 0 1 5.5 5z" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"/><path d="M8 10h6M8 13.5h6M8 17h3.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>',
    promo:   '<path d="M12 4l2.4 5.6L20 14l-5.6 2.4L12 22l-2.4-5.6L4 14l5.6-4.4z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    color:   '<path d="M12 3.5a8.5 8.5 0 1 0 0 17c1.3 0 2-1 2-2 0-1.6.6-2.5 2.6-2.5h1.9a2 2 0 0 0 2-2A8.5 8.5 0 0 0 12 3.5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><circle cx="8" cy="10" r="1.1" fill="currentColor"/><circle cx="12" cy="7.5" r="1.1" fill="currentColor"/><circle cx="16" cy="10" r="1.1" fill="currentColor"/>',
    motion:  '<path d="M9 8.5v7l6.5-3.5z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.5"/>',
    wedding: '<path d="M12 21s-7.5-4.8-9.4-9.6C1.3 8.1 4 5 6.8 5c2 0 3.6 1.1 5.2 3 1.6-1.9 3.2-3 5.2-3 2.8 0 5.5 3.1 4.2 6.4C19.5 16.2 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>',
    travel:  '<path d="M12 20v-5.5L6 5.5 12 8l6-2.5-6 9V20z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M12 8V4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
    caption: '<path d="M3.5 5.5h17v13h-17z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/><path d="M6.5 10h5M14 10h3.5M6.5 13.5h2.5M11 13.5h6.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',
  };

  const esc = (str = "") =>
    String(str).replace(/[&<>"'']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));

  /* ────────────────────────────────────────────────────────────
     Todo toast
  ──────────────────────────────────────────────────────────── */
  const toastEl = $("#toast");
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.hidden = false;
    requestAnimationFrame(() => toastEl.classList.add("is-visible"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastEl.classList.remove("is-visible");
      setTimeout(() => (toastEl.hidden = true), 400);
    }, 3600);
  }

  /* ────────────────────────────────────────────────────────────
     Video modal (MP4 + YouTube, fullscreen-ready)
     Supports Drive preview iframes too.
  ──────────────────────────────────────────────────────────── */
  let activeModal = null;
  let lastFocused = null;

  function openModal(modal) {
    lastFocused = document.activeElement;
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    activeModal = modal;
    $(".modal__close", modal).focus();
  }

  function closeModal(modal) {
    modal.hidden = true;
    document.body.style.overflow = "";
    const videos = modal.querySelectorAll("video");
    const iframes = modal.querySelectorAll("iframe");
    videos.forEach((el) => {
      if (el.pause) el.pause();
    });
    iframes.forEach((el) => {
      if (el.tagName === "IFRAME") el.src = el.src;
    });
    activeModal = null;
    if (lastFocused) lastFocused.focus({ preventScroll: true });
  }

  const videoModal = $("#videoModal");
  videoModal.addEventListener("click", (e) => {
    if (e.target.closest("[data-close]")) closeModal(videoModal);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && activeModal) closeModal(activeModal);
  });

  function ytId(src) {
    const m = String(src || "").match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{6,})/);
    return m ? m[1] : (/^[\w-]{6,}$/.test(String(src || "").trim()) ? String(src).trim() : null);
  }

  // Google Drive file IDs may come from item.drive OR inside the legacy
  // "mp4" field as a drive.google.com/uc?export=download&id=FILE_ID URL.
  function driveId(item) {
    const raw = String(item.drive || "").trim();
    if (raw) return raw;
    const mp4 = String(item.mp4 || "").trim();
    const m = mp4.match(/drive\.google\.com\/(?:uc\?export=download&(?:amp;)?id=|file\/d\/)([\w-]{10,})/);
    return m ? m[1] : null;
  }

  function playItem(item) {
    const yt  = String(item.youtube || "").trim();
    const di  = driveId(item);
    const mp4 = di ? "" : String(item.mp4 || "").trim(); // drive links need the preview iframe path

    if (!mp4 && !yt && !di) {
      toast("This video isn’t added yet — add your video in js/data.js.");
      return;
    }

    // Clean up any existing video elements in the modal first
    $("#vmBody").querySelectorAll("video, iframe").forEach((el) => el.remove());

    let player;
    if (di) {
      // Google Drive player: the /preview iframe streams the file correctly,
      // whereas uc?export=download gets blocked by Google's redirect page.
      player = `<iframe src="https://drive.google.com/file/d/${esc(di)}/preview"
        title="${esc(item.title)}" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    } else if (mp4) {
      // MP4 player: autoplay, muted (to bypass autoplay restrictions),
      // playsinline (for mobile Safari/iPad), and error handler
      player = `<video src="${esc(mp4)}" controls playsinline autoplay muted preload="metadata"></video>`;
    } else {
      const id = ytId(yt);
      if (!id) { toast("YouTube link format not recognised — use a normal YouTube watch link."); return; }
      // mute=1 is required — browsers block unmuted autoplay inside iframes.
      // The viewer can unmute with the player's volume control.
      player = `<iframe src="https://www.youtube-nocookie.com/embed/${esc(id)}?autoplay=1&mute=1&playsinline=1&rel=0"
        title="${esc(item.title)}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
    }

    $("#vmBody").innerHTML = `
      <div class="vm-player">${player}</div>
      <div class="vm-meta">
        <div class="vm-meta__top">
          <h3>${esc(item.title)}</h3>
          ${item.duration ? `<span class="vm-dur mono">${esc(item.duration)}</span>` : ""}
          <span class="vm-dur mono" style="color:var(--muted)">${esc(CATS[item.category] || "")}</span>
        </div>
        <p>${esc(item.description || "")}</p>
      </div>`;
    openModal(videoModal);
  }

  /* ────────────────────────────────────────────────────────────
     Profile — real photo whenever images/profile.png exists
  ──────────────────────────────────────────────────────────── */
  const PROFILE_CFG = typeof PROFILE !== "undefined" ? PROFILE : { image: "images/profile.png" };

  function injectIntoPortraitFrames() {
    const frames = $$(".portrait-frame");
    const img = document.createElement("img");
    img.className = "portrait-img";
    img.alt = "";
    img.loading = "eager";
    img.decoding = "async";
    img.addEventListener("load", () => {
      frames.forEach((f) => f.prepend(img.cloneNode(true)));
      const mini = $("#heroMini");
      mini.removeAttribute("data-mini-out");
      mini.src = PROFILE_CFG.image + "?v=" + Date.now();
    });
    img.addEventListener("error", () => {
      document.body.setAttribute("data-mini-hidden", "");
    });
    img.src = PROFILE_CFG.image;
  }
  injectIntoPortraitFrames();

  /* ────────────────────────────────────────────────────────────
     Showreel stage
  ──────────────────────────────────────────────────────────── */
  const SR = typeof SHOWREEL !== "undefined" ? SHOWREEL : {};
  const stage = $("#showreelStage");
  const srReady = !!(String(SR.mp4 || "").trim() || String(SR.youtube || "").trim());

  $("#showreelMedia").innerHTML = SR.thumbnail
    ? `<img src="${esc(SR.thumbnail)}" alt="Showreel cover" />`
    : `<div class="ph-art" aria-hidden="true"><span class="ph-art__glyph">${ICON_PLAY.replace('width="20" height="20"', 'width="34" height="34"')}</span></div>`;
  $("#showreelDesc").textContent = SR.description || "";
  if (SR.duration) $("#showreelDuration").textContent = SR.duration;
  $("#showreelNote").hidden = srReady;

  function openShowreel() {
    if (!srReady) { toast("Your showreel isn’t added yet — set its mp4 or youtube link in js/data.js."); return; }
    playItem({ title: SR.title || "Showreel", category: "", description: SR.description || "", mp4: SR.mp4, youtube: SR.youtube, duration: SR.duration });
  }
  stage.addEventListener("click", openShowreel);
  stage.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openShowreel(); }
  });
  $("#heroShowreelBtn").addEventListener("click", () => {
    $("#showreel").scrollIntoView({ behavior: "smooth" });
    if (srReady) setTimeout(openShowreel, 700);
  });

  /* ────────────────────────────────────────────────────────────
     Portfolio (filterable) — fetches from API
  ──────────────────────────────────────────────────────────── */
  // PROJECTS is loaded from js/data.js (committed to the repo).
  // On GitHub Pages there is no /api/projects.json route, so we
  // read the global PROJECTS array that data.js defines instead.
  let isLoading = false;

  function fetchProjects() {
    if (isLoading) return;
    isLoading = true;
    renderPortfolio();
    isLoading = false;
  }

  function renderPortfolio() {
    const grid = $("#portfolioGrid");
    const empty = $("#gridEmpty");
    if (!PROJECTS || PROJECTS.length === 0) {
      grid.innerHTML = `<p class="grid-empty">No videos found yet. Your first upload will appear automatically.</p>`;
      empty.hidden = false;
      return;
    }
    grid.innerHTML = PROJECTS.map(car).join("");
    empty.hidden = true;
  }

  function car(p) {
    const playable = String(p.mp4 || "").trim() || String(p.youtube || "").trim();
    const drivePlayable = String(p.drive || "").trim();
    const playable2 = playable || drivePlayable;
    return `
      <article class="film-card" data-id="${esc(p.id)}" tabindex="0" role="button"
               data-playable="${playable2 ? "play video" : "video coming soon"}">
        <div class="film-card__thumb">
          ${
            p.thumbnail
              ? `<img src="${esc(p.thumbnail)}" alt="${esc(p.title)} — video thumbnail" loading="lazy" />`
              : `<div class="ph-art" aria-hidden="true"><span class="ph-art__glyph">${CLAP_ICON}</span></div>`
          }
          <div class="film-card__badges">
            <span class="badge badge--neon">${esc(CATS[p.category] || p.category)}</span>
            ${p.duration ? `<span class="badge mono">${esc(p.duration)}</span>` : ""}
            ${p.placeholder ? `<span class="badge badge--ph">Placeholder</span>` : ""}
          </div>
          <span class="film-card__centerplay" aria-hidden="true"></span>
        </div>
        <div class="film-card__body">
          <span class="film-card__cat">${esc(CATS[p.category] || p.category)}</span>
          <h3 class="film-card__title">${esc(p.title)}</h3>
          <p class="film-card__desc">${esc(p.description || "")}</p>
          <div class="film-card__row">
            <span class="film-card__play">${ICON_PLAY} ${playable2 ? "Play Video" : "Video Soon"}</span>
            ${p.duration ? `<span class="film-card__dur mono">${esc(p.duration)}</span>` : ""}
          </div>
        </div>
      </article>`;
  }

  const portfolioGrid = $("#portfolioGrid");
  portfolioGrid.addEventListener("click", (e) => {
    const card = e.target.closest(".film-card");
    if (!card) return;
    const item = PROJECTS.find((x) => x.id === card.dataset.id);
    if (item) playItem(item);
  });
  portfolioGrid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const card = e.target.closest(".film-card");
      if (!card) return;
      e.preventDefault();
      const item = PROJECTS.find((x) => x.id === card.dataset.id);
      if (item) playItem(item);
    }
  });

  /* hover silent mp4 preview (desktop) */
  if (HOVER_OK) {
    portfolioGrid.addEventListener("mouseover", (e) => {
      const card = e.target.closest(".film-card");
      if (!card) return;
      const item = PROJECTS.find((x) => x.id === card.dataset.id);
      if (!item) return;
      const mp4 = String(item.mp4 || "").trim();
      if (!mp4 || /drive\.google\.com/.test(mp4)) return; // Drive links can't stream inline
      const thumb = $(".film-card__thumb", card);
      if (!thumb || $(".film-card__thumb video", card)) return;
      const v = document.createElement("video");
      v.src = mp4; v.muted = true; v.loop = false;
      v.playsInline = true; v.autoplay = false;
      v.preload = "none";
      v.setAttribute("aria-hidden", "true");
      thumb.appendChild(v);
      const p = v.play(); if (p && p.catch) p.catch(() => v.remove());
    });
    portfolioGrid.addEventListener("mouseout", (e) => {
      const card = e.target.closest(".film-card");
      if (!card || card.contains(e.relatedTarget)) return;
      const v = $(".film-card__thumb video", card);
      if (v) v.remove();
    });
  }

  /* filters */
  $("#portfolio").addEventListener("click", (e) => {
    const chip = e.target.closest(".chip--filter");
    if (!chip) return;
    $$(".chip--filter").forEach((c) => c.classList.remove("is-active"));
    chip.classList.add("is-active");
    const f = chip.dataset.filter;
    let visible = 0;
    $$(".film-card", portfolioGrid).forEach((card, i) => {
      const item = PROJECTS.find((x) => x.id === card.dataset.id);
      const show = f === "all" || (item && item.category === f);
      card.classList.toggle("is-filtered", !show);
      if (show) {
        visible++;
        card.style.animation = "none";
        void card.offsetWidth;
        card.style.setProperty("--cd", `${i * 0.05}s`);
        card.style.animation = "";
      }
    });
    $("#gridEmpty").hidden = visible !== 0;
  });

  /* ────────────────────────────────────────────────────────────
     Services
  ──────────────────────────────────────────────────────────── */
  const SERVICES_CFG = typeof SERVICES !== "undefined" ? SERVICES : [];
  $("#servicesGrid").innerHTML = SERVICES_CFG.map((s, i) => `
    <article class="service reveal" tabindex="0" style="--rd:${(i % 6) * 0.06}s">
      <span class="service__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22">${SERVICE_ICONS[s.icon] || SERVICE_ICONS.promo}</svg>
      </span>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.text)}</p>
    </article>`).join("");

  /* ────────────────────────────────────────────────────────────
     CapCut skill chips
  ──────────────────────────────────────────────────────────── */
  const SKILLS_CFG = typeof SKILLS !== "undefined" ? SKILLS : [];
  $("#skillChips").innerHTML = SKILLS_CFG.map((s) => `<li class="chip">${esc(s)}</li>`).join("");

  /* Skills demo video — auto-synced slot (SKILL_VIDEO comes from js/data.js) */
  const SKV     = typeof SKILL_VIDEO !== "undefined" ? SKILL_VIDEO : null;
  const svStage = $("#skillVideoStage");
  if (SKV && (String(SKV.mp4 || "").trim() || String(SKV.youtube || "").trim()) && svStage) {
    $("#skillVideoThumb").innerHTML = SKV.thumbnail
      ? `<img src="${esc(SKV.thumbnail)}" alt="${esc(SKV.title || "Skills demo")} cover" />`
      : `<div class="ph-art" aria-hidden="true"><span class="ph-art__glyph">${ICON_PLAY.replace('width="20" height="20"', 'width="34" height="34"')}</span></div>`;
    svStage.hidden = false;
    const openSkill = () => playItem({
      title: SKV.title || "CapCut Skills Demo",
      category: "motion",
      description: SKV.description || "A demo of my editing skills — cuts, motion and grade.",
      mp4: SKV.mp4, youtube: SKV.youtube, duration: SKV.duration,
    });
    svStage.addEventListener("click", openSkill);
    svStage.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openSkill(); }
    });
  } else if (svStage) {
    svStage.hidden = true;
  }

  /* ────────────────────────────────────────────────────────────
     Hero timecode (decorative clock)
  ──────────────────────────────────────────────────────────── */
  const tcNum = $("#tcNum");
  (function tickTC() {
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const frames = Math.floor((d.getMilliseconds() / 1000) * 24);
    tcNum.textContent = `${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}:${pad(frames)}`;
    requestAnimationFrame(tickTC);
  })();

  /* ────────────────────────────────────────────────────────────
     Navigation
  ──────────────────────────────────────────────────────────── */
  const nav = $("#nav");
  const navLinks = $$("#navLinks .nav__link");
  const toTop = $("#toTop");

  function onScroll() {
    nav.classList.toggle("is-scrolled", window.scrollY > 30);
    if (window.scrollY > 600) {
      toTop.hidden = false;
      requestAnimationFrame(() => toTop.classList.add("is-visible"));
    } else {
      toTop.classList.remove("is-visible");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  toTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  toTop.addEventListener("transitionend", () => {
    if (!toTop.classList.contains("is-visible")) toTop.hidden = true;
  });

  const spy = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        navLinks.forEach((l) =>
          l.classList.toggle("is-active", l.getAttribute("href") === `#${en.target.id}`));
      }
    });
  }, { rootMargin: "-38% 0px -55% 0px" });
  ["showreel", "portfolio", "services", "about", "contact"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) spy.observe(el);
  });

  /* mobile menu */
  const navToggle = $("#navToggle");
  const mobileMenu = $("#mobileMenu");
  function setMenu(open) {
    mobileMenu.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", String(open));
    navToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  }
  navToggle.addEventListener("click", () => setMenu(!mobileMenu.classList.contains("is-open")));
  mobileMenu.addEventListener("click", (e) => { if (e.target.closest("a")) setMenu(false); });

  /* button glow cursor-follow */
  $$(".btn").forEach((btn) => {
    btn.addEventListener("pointermove", (e) => {
      const r = btn.getBoundingClientRect();
      btn.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    });
  });

  /* ────────────────────────────────────────────────────────────
     Scroll reveal
  ──────────────────────────────────────────────────────────── */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add("in-view");
        revealObserver.unobserve(en.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px 0px" });
  $$(".reveal").forEach((el) => revealObserver.observe(el));

  /* ────────────────────────────────────────────────────────────
     Contact form (mailto + WhatsApp)
  ──────────────────────────────────────────────────────────── */
  const form = $("#contactForm");
  const fields = {
    name:    $("#cf-name"),
    email:   $("#cf-email"),
    message: $("#cf-message"),
  };

  function setInvalid(input, msg) {
    const field = input.closest(".form-field");
    const err = field.querySelector(".form-error");
    field.classList.toggle("is-invalid", !!msg);
    err.textContent = msg || "";
  }

  function validate() {
    let ok = true;
    if (fields.name.value.trim().length < 2) {
      setInvalid(fields.name, "Please enter your name."); ok = false;
    } else setInvalid(fields.name, "");

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(fields.email.value.trim())) {
      setInvalid(fields.email, "Please enter a valid email address."); ok = false;
    } else setInvalid(fields.email, "");

    if (fields.message.value.trim().length < 10) {
      setInvalid(fields.message, "Please describe your project (10+ characters)."); ok = false;
    } else setInvalid(fields.message, "");

    return ok;
  }

  ["input", "blur"].forEach((evt) =>
    Object.values(fields).forEach((input) =>
      input.addEventListener(evt, () => {
        if (input.closest(".form-field").classList.contains("is-invalid")) validate();
      })
    )
  );

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validate()) { toast("Please fix the highlighted fields."); return; }
    const subject = $("#cf-subject").value;
    const body =
      `Name: ${fields.name.value.trim()}\n` +
      `Email: ${fields.email.value.trim()}\n\n` +
      fields.message.value.trim();
    window.location.href =
      `mailto:${EMAIL}?subject=${encodeURIComponent(`[Edit Request] ${subject}`)}` +
      `&body=${encodeURIComponent(body)}`;
    toast("Opening your email app with the brief pre-filled ✦");
  });

  $("#whatsappFromForm").addEventListener("click", () => {
    if (!validate()) { toast("Please fill in your name, email and project details first."); return; }
    const subject = $("#cf-subject").value;
    const text =
      `Hello Ismail! I'm ${fields.name.value.trim()}.\n` +
      `(Project: ${subject})\n` +
      `${fields.message.value.trim()}\n\n` +
      `My email: ${fields.email.value.trim()}`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });

  form.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "Enter") form.requestSubmit();
  });

  $$(".social-btn.is-placeholder").forEach((btn) => {
    btn.addEventListener("click", () => toast(btn.dataset.placeholder));
  });

  $("#year").textContent = new Date().getFullYear();

  // Start the sync engine on page load.
  fetchProjects();
})();
