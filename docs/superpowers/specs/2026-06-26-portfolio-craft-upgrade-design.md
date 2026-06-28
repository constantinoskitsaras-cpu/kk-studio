# KK Studio — Craft-Proof Upgrade

**Date:** 2026-06-26
**Goal:** Make the portfolio read as *employable craft* to the #1 visitor — a studio/recruiter judging the work for hire.
**Constraint:** Current assets only (final WebP renders + Vimeo embeds). No breakdown frames, before/after, or new projects available.

## Strategic line
The copy is commission-facing, but the primary judge is a studio evaluating craft. Every change must show employable craft without dropping commission-readiness. Restraint over flash — taste is part of the proof.

## Scope (implementation order: 1 → 6 → 4 → 2 → 3 → 5)

### 1. Lightbox — full-res inspection
The centerpiece. Recruiters judge CGI by *detail* (reflections, surface, grain), and there is currently no way to inspect a render.

- New client components: `src/components/work/Lightbox.tsx` + `src/components/work/GalleryGrid.tsx`.
- The detail page gallery becomes a client island (`GalleryGrid`) wrapping the existing reveal + grid; each image is a button that opens the lightbox at its index.
- Lightbox: full-screen fixed overlay, `rgba(9,9,9,0.96)` + backdrop blur; image centered `object-contain` at full resolution (`quality=100`, `sizes="100vw"`) — **never cropped**.
- Controls: prev / next, counter `03 / 11`, project title, lime-accented controls, close (✕).
- Keyboard: `←` `→` navigate, `Esc` closes. Focus trapped; body scroll locked while open.
- `AnimatePresence` fade; respects `prefers-reduced-motion`.
- The gallery grid itself stays `object-cover` (the look the user approved) — the lightbox is where the uncropped truth lives, resolving the cropping concern without letterboxing the wall.

### 6. Lime consistency
DESIGN.md mandates ONE lime (`#AAEE00`). `ProjectFrame.tsx` title hover uses `#BEFF00`.
- Replace `group-hover:text-[#BEFF00]` → `group-hover:text-[#AAEE00]`.

### 4. Page transitions (signature motion, restrained)
- Add `src/app/template.tsx` (client) — App Router re-mounts `template` on every navigation. Apply a soft fade-up (opacity + small translateY, expo-out) site-wide.
- `prefers-reduced-motion` → no transform, instant.

### 2. Detail page → case-study narrative
Restructure `src/app/work/[slug]/page.tsx` reading order:
1. Hero video (unchanged).
2. Title + category + a one-line **Contribution** (new optional `contribution?` field on `Project`, populated conservatively from existing role/approach; render only if present).
3. Metadata strip — **drop the Year column** (all 2025, low value; consistent with removing dates elsewhere) → Role / Software / Client (`md:grid-cols-3`).
4. Overview (description + approach), sticky marker.
5. **Gallery with lightbox** (from §1).
6. **Pull-quote** — large lime-trace statement (new optional `pullQuote?` field, short lines lifted from each project's authored `approach`).
7. Process — **remove** the generic "Built in {software}, graded frame by frame." line.
8. Next project (unchanged).

### 3. /work — remove filter
With 3 projects the tag filter is noise ("3D Rendering" already equals All).
- Remove the filter strip, `allTags`, filter state, and the AnimatePresence keyed by filter.
- Render all projects as the full-bleed `ProjectFrameFull` frames (already in place); keep header + a small count label. Page can return to a server component.

### 5. Cursor affordance on frames
The one "signature" interaction, desktop/hover-only.
- In `ProjectFrameFull`, a follow-cursor "View" pill that fades in while hovering a frame (lime text). Gated to hover-capable pointers; `prefers-reduced-motion` → static/none. Applies on home + /work for consistency.

## Out of scope (future backlog — needs assets/content)
- Breakdown sliders (wireframe / clay / lighting / AOV).
- Before/after (raw→graded, plate→comp) interactive sliders.
- Per-image captions.
- Professional work from Three Deers / Floating House (portfolio currently shows only personal UE pieces — a strategic content gap to close when assets allow).

## Acceptance
- `npm run build` clean after each step.
- Lightbox keyboard + reduced-motion verified.
- One lime across the site.
- Detail page reads as a guided case study; /work has no dead filter.
