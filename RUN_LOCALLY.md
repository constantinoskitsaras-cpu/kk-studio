# KK Studio — Run Locally

The latest locked version of the Konstantinos Kitsaras portfolio site.

## Requirements
- **Node.js 20+** (built and verified on Node v20.20.2)
- npm (ships with Node)

No `.env` file is needed. The hero video is a public Vimeo background embed — no API keys, no secrets.

## Setup

```bash
# 1. Install dependencies (node_modules is not included in the zip)
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:3000  (or the next free port, e.g. 3001)
```

## Verify the production build end-to-end

```bash
npm run build   # type-checks + static-generates all 12 pages
npm run start   # serves the production build
```

A clean build prints all routes as `○ (Static)` / `● (SSG)` with no errors.

## What's in here
- `src/app` — App Router pages (home, work index, work/[slug], contact)
- `src/components/home` — homepage sections (Hero, HeroHeadline, SelectedWork, ProjectFrame, Discipline, StudioBrief, ContactCTA)
- `src/components/ui` — motion + shared primitives (ScrollReveal, Button, SectionLabel)
- `src/app/globals.css` — Tailwind v4 `@theme` design tokens + motion keyframes
- `public/` — static assets (favicon + default SVGs; real project imagery not yet added)

## Notes on the locked state
- **Live homepage flow:** Hero → Headline → Selected Work → Discipline → Studio Brief → Contact CTA
- **LogoMarquee** is built but **dormant** — intentionally not rendered until real client logos exist (see the re-entry note in `src/app/page.tsx`). Placeholder names are not shown on the live page.
- Project frames use gradient placeholders; drop real images in later without layout changes.
- Hero video swap: change `VIMEO_ID` at the top of `src/components/home/Hero.tsx`.

## Stack
Next.js 16 (App Router, Turbopack) · React 19 · Tailwind CSS v4 · next/font (Syne, Space Grotesk, Inter)
