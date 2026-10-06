@AGENTS.md

# zaryab-portfolio — Zaryab Ahmad's portfolio

Personal portfolio for **Zaryab Ahmad**, Senior Software Engineer (AI-native front-ends — streaming LLM UIs,
tool-call rendering, data-dense interfaces — on Next.js / React / TypeScript, plus NestJS / Prisma / PostgreSQL).
Public repo: `github.com/zaryaaab/zaryab-portfolio`. Deploy target is Vercel; no custom domain yet.

Started from Usama Riasat's MIT-licensed `usama-dev` template (keep his copyright line in LICENSE).
The goal is a showcase-grade, interactive site where **projects are the most prominent thing**.
Dark-first, **amber** accent (`#ffb547` dark / `#b45309` light) on warm charcoal, precise "engineering" feel.

## Commands

```bash
npm run dev        # dev server (Turbopack) → http://localhost:3000
npm run build      # production build — every page is statically generated
npm run start      # serve the build
npm run lint       # ESLint (must pass)
npx tsc --noEmit   # type-check (must pass)
npm run shots      # regenerate README screenshots (needs `next start -p 3124` running — see below)
```

Before calling any change done: `npx eslint . && npx tsc --noEmit && npm run build`, then check it visually
(see "Visual verification").

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 (CSS-first config) ·
`motion` (import from `motion/react`) · `lenis` smooth scroll · `cmdk` command palette · `lucide-react` icons ·
`clsx`. Dev-only: `puppeteer-core` for screenshots.

- **Next 16 has breaking changes** — read `node_modules/next/dist/docs/` before using unfamiliar APIs (see AGENTS.md).
  Route `params` are a Promise; type pages with the global `PageProps<"/route/[slug]">` / `LayoutProps<"/">` helpers.
- `lucide-react` (v1.x) has **no brand icons** — GitHub/LinkedIn live in `components/ui/BrandIcons.tsx`.
- Tailwind v4: theme tokens are declared in `app/globals.css` under `@theme inline`; there is no tailwind.config.

## Layout of the code

```
app/
  layout.tsx               fonts, metadata, flash-free theme boot script, Nav, CommandPalette, CursorGlow, SmoothScroll
  page.tsx                 home: Hero → Stats → Capabilities → Projects → Approach → Experience → Skills → Contact (+ JSON-LD)
  projects/[slug]/page.tsx case study (generateStaticParams, dynamicParams = false)
  opengraph-image.tsx      generated social card · sitemap.ts · robots.ts · not-found.tsx · icon.svg
  globals.css              design tokens (dark default + [data-theme="light"]), grain, grid, marquee, reduced-motion
components/
  Nav.tsx                  navItems (section ids) + openPalette(); active-section pill via IntersectionObserver
  CommandPalette.tsx       ⌘K — sections, projects, actions
  sections/                Hero, NodeGraph (canvas), Typewriter, Stats, Capabilities, Approach, Experience, Skills, Contact
  projects/                Projects (filters), ProjectCard, ProjectVisual (browser frame), ProjectMock (illustrated UIs), Gallery (lightbox)
  ui/                      Reveal, SectionHeading, SmoothScroll (scrollToTarget), CursorGlow, ThemeToggle (toggleTheme), BrandIcons
content/                   ALL copy lives here — edit content, not components
  profile.ts               name, tagline, intro, typewriter phrases, stats, links, certificates, education
  projects.ts              Project type, projects[] (array order = display order), categories, getProject()
  experience.ts            timeline; wrap numbers in [[...]] to render them as highlighted metrics
  skills.ts                skills bento groups
scripts/readme-shots.mjs   README screenshot capture
public/                    Zaryab-Ahmad-Resume.pdf, projects/<slug>/ screenshot folders
.github/assets/            README screenshots (JPEG)
```

## Content model & how to change things

**Projects** (`content/projects.ts`) — each has slug, title, tagline, summary, categories, role, optional
`link` / `period` / `confidential`, stack, metrics (first 3 show on the home card, all on the case study),
problem, solution, architecture (flow steps), features, `images`, `mock`, `hue`.

- `images: { cover?, full?, mobile?, gallery? }` — paths under `/projects/<slug>/`. Sizes: cover 1920×1080,
  full = 1440px-wide full-page capture (pans top→bottom on hover), mobile 390×844, gallery 1920×1080.
  With no `cover`/`full`, `ProjectMock` renders an illustrated, always-dark UI for that project.
- `mock` picks the illustration: tutor (streaming AI chat) · quiz (video + checkpoint quiz, interactive) ·
  classroom (course-grounded quiz generator) · delivery (menu + order tracker) · portfolio (crypto dashboard) ·
  market (candles + order book + wallet). Add a new kind in the `MockKind` type and the `Body` map.
- `host` sets the browser-frame address for projects without a public `link` (never invent a domain).
- `hue` (0–360) tints the mock, glow and metric colour for that project.
- `categories` drive the filter tabs; the `categories` array sets tab order.
- **Stack names must match skill names in `content/skills.ts` exactly** (case/punctuation-insensitive) —
  that's how hovering a skill links to the projects that use it.
- `confidential: true` shows an NDA badge and "internal · confidential" in the frame (unused for now).

**Adding a home-page section:** add the component to `app/page.tsx`, give it an `id`, add the id to `navItems`
in `Nav.tsx`, and **renumber** the `index` props on `SectionHeading` (currently Capabilities 01, Work 02,
Approach 03, Experience 04, Skills 05) plus the hard-coded `06` in `Contact.tsx`.

## Design system & conventions

- Colours are CSS variables (`--bg`, `--bg-elev`, `--surface`, `--line`, `--line-strong`, `--fg`, `--muted`,
  `--faint`, `--accent` #ffb547, `--accent-ink`, `--accent-soft`) exposed as Tailwind colours (`bg-bg`,
  `text-muted`, `border-line`, `bg-accent`…). Never hard-code theme colours in components; mocks are the
  exception (they're intentionally always dark, like screenshots).
- Theme: `data-theme` on `<html>`, dark by default, persisted in localStorage `theme`; the inline script in
  `layout.tsx` applies it before paint. Tailwind `dark:` variant maps to `[data-theme="dark"]`.
- Fonts: Geist (sans), Geist Mono (labels, chips, eyebrows), Instrument Serif **italic only** (accent words
  like "*AI-native*", "*built.*"). Headline pattern: `title` + serif-italic amber `accent` via `SectionHeading`.
- Motion: use `Reveal` for scroll-in; keep animations transform/opacity-only. Everything must respect
  `prefers-reduced-motion`, and continuous animations must pause off-screen / when idle (NodeGraph uses
  IntersectionObserver + ResizeObserver, CursorGlow stops its rAF when settled, Approach autoplay pauses
  off-screen, Stats counters write to the DOM instead of re-rendering).
- Only mark components `"use client"` when they need state, effects or motion.
- **User decisions — don't reintroduce:** no logo in the navbar; no 3D tilt / pointer glare on project frames.
- Mobile matters: check 390px width; keep mocks legible (hide secondary mock panels below `sm`).

## Visual verification

Headless Chrome's CLI `--screenshot` does **not** finish motion animations — use puppeteer-core:
run `npm run build && npx next start -p 3124`, then drive `/Applications/Google Chrome.app` with
puppeteer-core (see `scripts/readme-shots.mjs` for the pattern: set localStorage theme with
`evaluateOnNewDocument`, scroll element into view, wait ~1.8s for reveals, screenshot). Scroll offsets need
≈ −110 to −150px so content isn't hidden under the fixed nav.

`npm run shots` rewrites `.github/assets/*.jpg`; commit them only when the UI actually changed
(re-runs produce animation-timing noise otherwise — `git checkout -- .github/assets` to discard).

## Environment gotchas (this machine)

- `pnpm` via corepack fails with EACCES on `~/.cache` — use **npm**. If npm's cache is not writable, set
  `npm_config_cache` to a writable temp dir.
- macOS has no `timeout`; use `perl -e 'alarm 60; exec @ARGV' <cmd>`.
- `gh` CLI is not installed; the git remote is SSH via host alias `zaryab` (`git@zaryab:zaryaaab/zaryab-portfolio.git`).

## Git & publishing rules

- The repo is **public**. Commits are authored **Zaryab Ahmad <zaryabahmad454@gmail.com>** — set per commit/repo,
  the machine's global git user is someone else.
- **Never add Claude attribution** (no `Co-Authored-By: Claude`, no "Generated with Claude Code") to commits or PRs.
- Only commit/push when asked. Keep commit messages short, imperative, with a bulleted body. Default branch: `main`.

## Facts & decisions

- Name is spelled **Zaryab Ahmad** (the résumé file name says "Ahmed" — that's wrong).
- LinkedIn `linkedin.com/in/zaryabahmad28`, GitHub `zaryaaab`, email `zaryabahmad454@gmail.com` (public on the site).
- Phone number is **not** shown on the site; the public résumé PDF does contain it.
- Projects (all illustrated mocks, by choice — no real screenshots): Tutorly AI, Puzzicle, Edvisor AI, MenuClick
  (from the résumé, no public link), DASH crypto tracker, Dopewarz (dopewarz.io was down, so no live link).
- Don't reuse projects from Usama's portfolio (DeftGPT, LeadFlow AI, Clinical AI, etc.) — DeftGPT was explicitly skipped.
- Impact numbers (50K+ daily requests, 30% latency, <1 hr deploys, 15+ releases, 10K+ users, 18%, 8s→5s) come from the résumé.

## Open items

- Possibly more case studies later (Insurify quote experience, Toptal AI app under NDA) — user said six for now.
- Deploy to Vercel; once a domain exists set `NEXT_PUBLIC_SITE_URL` (used by metadataBase, sitemap, robots).
