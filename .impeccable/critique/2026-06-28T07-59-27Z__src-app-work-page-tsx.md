---
target: work
total_score: 33
p0_count: 0
p1_count: 0
timestamp: 2026-06-28T07-59-27Z
slug: src-app-work-page-tsx
---
# Critique — Work surface (re-run, post-imagery)

## Design Health Score: 33/40 (Good)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Video/hover/lightbox feedback good; video buffer has no loading hint |
| 2 | Match System / Real World | 4 | Role/Software/category language fits the audience |
| 3 | User Control & Freedom | 3 | Lightbox + next-project + nav; no explicit back-to-work |
| 4 | Consistency & Standards | 3 | Glass cards (rounded-2xl + backdrop-blur) contradict the DESIGN.md sharp/hairline system |
| 5 | Error Prevention | 3 | n/a-heavy |
| 6 | Recognition vs Recall | 4 | Everything visible; lightbox is discoverable |
| 7 | Flexibility & Efficiency | 3 | Lightbox keyboard nav to verify |
| 8 | Aesthetic & Minimalist | 4 | Real cinematic renders + video + lightbox; genuinely strong now |
| 9 | Error Recovery | 3 | n/a-heavy |
| 10 | Help & Documentation | 2 | None (fine for portfolio) |

## Anti-Patterns Verdict
Detector clean (detect.mjs []). The P1 blocker from the last run — no actual work shown — is resolved: real renders + autoplay video covers + a full-res lightbox now let a recruiter judge craft directly. Main remaining issue is internal design-system drift (glass cards vs the stated sharp/hairline system), not an outsider-facing slop tell.

## What's Working
1. Full-bleed cinematic frames with autoplay video on entry — resists the ArtStation grid.
2. GalleryGrid → Lightbox: full-resolution craft-proof inspection, the key moment for the hire audience.
3. Real per-project copy + metadata (Role/Software) at AA contrast (#7A7A7A labels).

## Priority Issues
- [P2] Design-system drift: glass cards (rounded-2xl + backdrop-blur) on the detail metadata strip and the Services section contradict DESIGN.md (sharp 0px corners, hairlines, No-Box, no glassmorphism). Pick one direction and apply consistently. Cmd: polish or document (to re-baseline DESIGN.md if glass is now intended).
- [P2] Work index header copy mismatch: "a curated selection of studio and commissioned work" but all projects are Personal Work / 3D Rendering. Tighten. Cmd: clarify.
- [P3] Grayscale-by-default covers: the AMG (no video) sits grayscale until hover; consider full-colour default for a portfolio. Taste.
- [P3] approach is now a "·"-separated spec list rendered as a flowing paragraph; consider rendering as an actual list for scannability. Cmd: layout/clarify.
- [P3] Verify Lightbox keyboard a11y (Esc to close, arrow nav, focus trap/restore).

## Persona Red Flags
- Mara (Studio Recruiter): now CAN judge craft — real renders, video, full-res lightbox. The glass-vs-sharp inconsistency is a subtle "two hands" tell to a sharp eye, but minor.
- Riley (Stress Tester): AMG has no video → static (intended). Lightbox edge cases (first/last image nav, rapid open/close) worth a pass.
- Casey (Mobile): videos fall back to static posters on mobile (good); verify lightbox pinch/scroll on touch.

## Minor Observations
- Count rule ("All Work / 04") is a clean replacement for the old filter at 4 projects.
- Per-project pull-quotes add real voice.
