# MEMORY.md

## Project
- Name: oc-portfolio
- Goal: Personal portfolio for Oleg Chsherbakov — AI fullstack developer. Showcases his web, AI and Web3 projects.
- Current stage: 3D Creator-style redesign (Vite + React + Tailwind + framer-motion).

## Current Status
- What is already working:
  - 5-section landing: Hero, Marquee, About, Services, Projects.
  - Tailwind v3 + Kanit font + global gradient text class `.hero-heading`.
  - Framer Motion: FadeIn helper, scroll-driven AnimatedText, sticky-stacking project cards with scale-down on scroll.
  - Reusable UI: `ContactButton`, `LiveProjectButton`, `Magnet`, `FadeIn`, `AnimatedText`.
  - 6 real projects rendered with live screenshots via `image.thum.io`:
    - 01 chsh studio (chsh.online)
    - 02 azyktulyk (azyktulyk.site)
    - 03 agri-subsidy (agri-subsidy.vercel.app)
    - 04 cortex (cortex-six-rosy.vercel.app)
    - 05 Beast Mode Tom (musclecat.vercel.app)
    - 06 NE JEYMIZ (nejemyz.vercel.app)
- What was recently finished:
  - Removed old bilingual `LanguageContext`, old `Hero`, `AiProduction`, `WebDevServices`, `Services`, `Cases`, `Footer`, `Header`, `UGCVideos`, `Marquee` components.
  - Removed ~262 MB of unused `src/assets/*` media (kept `react.svg`).
- What is currently in progress: none — feature work complete for this PR.

## Decisions
- [2026-05-12] Keep JS (not TS) to match the existing Vite + React 19 setup. The 3D Creator spec mentioned TS but the repo is JS — minimal-churn redesign over framework switch.
- [2026-05-12] Use `image.thum.io` for project screenshots (free, no key) instead of static images so screenshots stay live.
- [2026-05-12] English-only copy (Hero / About / Services). Bilingual support removed to match the new minimal aesthetic.

## Constraints
- Repo uses ESLint flat config with `no-unused-vars: { varsIgnorePattern: '^[A-Z_]' }`. JSX usage is not counted, so framer-motion is imported as `motion as Motion` and used as `<Motion.div>` / `<Motion.span>` to satisfy the rule.
- Tailwind v3 is used (not v4) to keep the PostCSS pipeline simple.
- No new production deps without a clear need.

## Open Issues
- Project screenshots depend on `image.thum.io` availability; some free shots may show a watermark or take a few seconds to warm up on first load.
- Mobile breakpoint of the Hero portrait is centered absolutely — keep an eye on it on very small screens.

## Next Steps
- 1. Optionally add a small RU/EN language toggle in the nav (was removed in this redesign).
- 2. Replace the decorative `motionsites.ai` marquee GIFs with the user's own showreel later if desired.
- 3. Capture custom screenshots for each project (or use `og:image` from each live site) to drop the `image.thum.io` dependency.

## Last Session
- Date: 2026-05-12
- Summary: Full 3D Creator-style redesign of the portfolio. Replaced old bilingual cyberpunk layout with the new dark Kanit-driven layout. Added 6 real projects with live screenshots. Removed unused legacy components and 262 MB of unused media. Lint + build green.
- Primary signal: `npm run lint` clean; `npm run build` succeeds (vite build, 342 kB JS, 12.8 kB CSS).
- Secondary signals: dev server boots; no console errors in initial smoke test.
