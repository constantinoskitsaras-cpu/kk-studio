---
name: KK Studio — Konstantinos Kitsaras
description: Cinematic automotive CGI portfolio — dark, precise, one lime cue.
colors:
  accent-lime: "#AAEE00"
  accent-dim: "#7AAA00"
  bg-black: "#090909"
  surface: "#111111"
  raised: "#181818"
  border-subtle: "#1A1A1A"
  border-mid: "#262626"
  border-active: "#3A3A3A"
  text-primary: "#EDEAE4"
  text-secondary: "#7A7A7A"
  text-muted: "#3D3D3D"
typography:
  display:
    fontFamily: "Bebas Neue, 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.25rem, 5.5vw, 5rem)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bebas Neue, 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.5rem, 2.5vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Inter, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-lead:
    fontFamily: "Inter, sans-serif"
    fontSize: "clamp(1.375rem, 2.4vw, 2rem)"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.01em"
  label:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  none: "0px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  section: "clamp(6rem, 12vw, 10rem)"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.accent-lime}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.accent-lime}"
    textColor: "{colors.bg-black}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "14px 32px"
  button-secondary-hover:
    textColor: "{colors.text-primary}"
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.none}"
    padding: "16px 20px"
---

# Design System: KK Studio — Konstantinos Kitsaras

## 1. Overview

**Creative North Star: "The Night Showroom"**

The site is a premium automotive stage at night: a near-black room where a single machine is lit with intent, and everything else recedes into controlled darkness. The work is the only thing in the light. Surfaces are deep black (`#090909`), type is warm-white (`#EDEAE4`), and a single electric lime (`#AAEE00`) appears like a key-light cue — a 2px bar, a drawn hairline, one focus ring — never as decoration. The mood is cinematic, precise, and confident: a visitor should think *"how was this made?"* before they read a word.

This system serves a portfolio whose primary visitor is a **studio or recruiter evaluating Konstantinos for hire**, with automotive brands and agencies second. It is built for fast judgment — clear hierarchy, large deliberate project frames, visible role/tooling — and it leads with imagery, because the work is the argument. Restraint here is confidence, not emptiness: the page commits to black and to one accent, and lets bold condensed headlines and disciplined motion carry the weight.

It explicitly rejects the things that read as cheap, generic, or templated. **No ArtStation-style thumbnail walls** (the work is curated into large framed windows, not an undifferentiated grid). **No SaaS/startup scaffolding** — no card grids, no hero-metric template, no tiny tracked eyebrow above every section. And no hobbyist finish: every detail is premium or it doesn't ship.

**Key Characteristics:**
- Near-black canvas; warm-white type; a single lime accent used at ≤10% of any screen.
- Condensed display caps (Bebas Neue) for headings, technical sans labels (Space Grotesk), humanist body (Inter).
- Sharp corners everywhere (0px radius) — no rounding, no soft cards.
- Hairlines and vignettes instead of boxes and shadows; depth from light and tone, not elevation.
- Motion is choreographed but quiet: expo ease-outs, staggered reveals, one drawn lime trace.

## 2. Colors

A near-monochrome black-and-warm-white system with exactly one saturated voice — electric lime — held in deliberate reserve.

### Primary
- **Electric Lime** (`#AAEE00`): The studio's single voice. A key-light cue, not a fill: the 2px hero bar, the drawn hairline trace on section openers, focus rings, primary-button outline, hover states, the counter. Its rarity is the entire point.
- **Lime Dim** (`#7AAA00`): The muted partner for the accent, reserved for low-emphasis or pressed states where full lime would shout.

### Neutral
- **Showroom Black** (`#090909`): The dominant surface. The room. ~90% of every screen.
- **Surface** (`#111111`): Raised bands and panels — the Contact CTA band, form inputs, the store notify section. A barely-lifted plane that reads as a second wall, not a card.
- **Raised** (`#181818`): The next tonal step for nested surfaces; used sparingly.
- **Hairline Subtle** (`#1A1A1A`): Section dividers and the default 1px rule between blocks.
- **Border Mid** (`#262626`): Resting borders on inputs and secondary buttons; the SectionLabel ticks.
- **Border Active** (`#3A3A3A`): Hover/active border state; the scrollbar thumb.
- **Warm White** (`#EDEAE4`): All primary text and headings. Warm, not clinical — paper under tungsten.
- **Smoke Gray** (`#7A7A7A`): Secondary body copy and supporting prose. The floor for readable text on black.
- **Muted Gray** (`#3D3D3D`): Decorative and quiet-label use only — eyebrow labels, the footer monogram, counters at rest, scroll hints. **Never** load-bearing body text.

### Named Rules
**The One Light Rule.** Lime is the key light. It appears on ≤10% of any screen and only to direct the eye — a bar, a trace, a ring, a hover. Lime fills (the primary-button hover, `::selection`) are momentary, never resting. If a screen reads as "lime-accented," there is too much of it.

**The Floor Rule.** `#3D3D3D` is decoration. Real body text is `#EDEAE4` or, at minimum, `#7A7A7A` on black. Never set readable copy in muted gray "for elegance."

## 3. Typography

**Display Font:** Bebas Neue (with Arial Narrow fallback)
**Body Font:** Inter (sans-serif)
**Label/UI Font:** Space Grotesk (sans-serif)

**Character:** A three-voice system paired on a contrast axis. Bebas Neue is a tall, condensed display caps face — single weight, all-caps presence, dramatic at hero scale, the "title card." Space Grotesk is a technical, slightly mechanical sans, used only for small uppercase labels — the "spec stencil." Inter is the neutral humanist workhorse for reading. Condensed display + humanist body + technical label keeps each voice unmistakable; nothing is "two sans-serifs that look almost alike." Bebas ships one weight, so heading bold classes are neutralized with `font-synthesis: none` to avoid faux-bold.

### Hierarchy
- **Display** (Bebas Neue 400, `clamp(2.25rem, 5.5vw, 5rem)`, line-height 0.94, tracking -0.02em): Hero and page H1s. The title card; one per fold.
- **Headline** (Bebas Neue 400, `clamp(1.5rem, 2.5vw, 2rem)`, line-height 1.1, tracking -0.01em): Section and project headings, pillar titles.
- **Body Lead** (Inter 400, `clamp(1.375rem, 2.4vw, 2rem)`, line-height 1.5): The single strong statement paragraph (Studio Brief, About lede). Capped ~46ch.
- **Body** (Inter 400, `1rem`, line-height 1.65): Standard prose. Cap 65–75ch (`max-w-prose`).
- **Label** (Space Grotesk 500, `0.6875rem`, tracking 0.12em, UPPERCASE): Section labels, meta, nav, button text. The spec stencil — short strings only.

### Named Rules
**The Title-Card Rule.** Bebas Neue is for headings only. It never sets body copy or runs longer than a few lines; its drama depends on scale and scarcity.

**The Stencil Rule.** Space Grotesk is uppercase, tracked (0.08–0.12em), and short. Never set a sentence or paragraph in it — caps body copy is forbidden.

## 4. Elevation

This system is **flat by tone, not by shadow.** There are no drop shadows on surfaces, no glassmorphism, no lifted cards. Depth comes from three things: tonal stacking of near-blacks (`#090909` → `#111111` → `#181818`), 1px hairlines (`#1A1A1A`/`#262626`) that separate bands, and cinematic gradient vignettes in the hero (top/bottom scrims over the video). The only "glow" in the system is the deliberate lime drop-shadow on icon/name hover — a light cue, not an elevation.

### Named Rules
**The No-Box Rule.** Surfaces are separated by hairlines, tonal shift, or space — never by a shadowed card. If a block needs to feel distinct, change its background one tonal step or rule it off; do not float it.

**The Glow-Is-A-Cue Rule.** The only shadow permitted is the lime hover glow (`drop-shadow(0 0 6px rgba(170,238,0,0.45))`) on interactive icons and labels. It signals interactivity; it is never ambient or decorative.

## 5. Components

### Buttons
- **Shape:** Sharp rectangles (0px radius). Padding `14px 32px`, label typography (Space Grotesk, uppercase, tracking 0.08em, 0.8125rem).
- **Primary:** Transparent fill, lime text, 1px lime border. **Hover:** fills lime, text flips to Showroom Black (`#090909`). `transition: all 200ms`.
- **Secondary:** Transparent, smoke-gray text, 1px `#262626` border. **Hover:** border → `#3A3A3A`, text → warm white.
- **Focus:** 2px outline offset 3px — lime for primary, warm-white for secondary.

### Inputs / Fields
- **Style:** `#111111` surface, 1px `#262626` border, 0px radius, warm-white text, padding `16px 20px`. Placeholder is `#3D3D3D`.
- **Focus:** border shifts to lime (`#AAEE00`); no glow, no fill.

### Navigation
- Fixed top bar, ~72px offset. Monogram glyph left (warm-white, dims on hover), label-styled links. Scrolled state uses a `rgba(9,9,9,0.78)` backdrop-blur (12px) with a solid `rgba(9,9,9,0.95)` fallback. Links and logo use the lime hover treatment.

### Section Label (signature)
- A centered or left-aligned row: 24px hairline tick (`#262626`) — lime uppercase label (Space Grotesk, tracking 0.12em) — 24px hairline tick. The studio's recurring section-marker. Used as voice, not as a per-section eyebrow reflex.

### Project Frame (signature)
- Large full-width "window" (~70vh) per featured project, self-animating on scroll (fade + slight scale "opening"). Real render or dark gradient fallback; heading flips to lime on hover. This is the deliberate alternative to a thumbnail grid.

### Hover Interaction (signature)
- Icons and labels: color → lime, `translateY(-2px)`, soft lime `drop-shadow` glow, 200ms expo. Note: `@custom-variant hover (&:hover)` is set in globals so hover fires regardless of `@media (hover:hover)`.

## 6. Do's and Don'ts

### Do:
- **Do** keep lime to ≤10% of any screen — bar, trace, ring, hover, one fill at most. (The One Light Rule.)
- **Do** set all readable copy in `#EDEAE4` or `#7A7A7A`; reserve `#3D3D3D` for decoration. Verify body ≥4.5:1, large/bold ≥3:1 on black (WCAG AA target).
- **Do** lead with real project imagery in large framed windows — the work is the argument.
- **Do** use sharp 0px corners, hairlines, and tonal shifts to structure the page.
- **Do** pair the three voices on their contrast axis: Bebas Neue (display) / Inter (body) / Space Grotesk (labels).
- **Do** honor `prefers-reduced-motion` with crossfade/instant fallbacks for every reveal and hover.

### Don't:
- **Don't** present work as an ArtStation-style thumbnail grid — curate into large, deliberate frames with identity.
- **Don't** ship SaaS/template scaffolding: no card grids, no hero-metric template, no tiny uppercase tracked eyebrow above every section, no numbered `01/02/03` section markers by reflex.
- **Don't** let anything read amateur or cheap — premium finish in every detail or it doesn't ship.
- **Don't** add drop shadows, glassmorphism, or floating cards. (The No-Box Rule.) The only shadow is the lime hover cue.
- **Don't** round corners, gradient-fill text, or use side-stripe (`border-left`/`-right` > 1px) accents.
- **Don't** set body copy in Space Grotesk or in all-caps; labels only, short strings.
