---
target: homepage
total_score: 31
p0_count: 0
p1_count: 0
timestamp: 2026-06-28T17-27-02Z
slug: src-app-page-tsx
---
# Critique — Homepage (src/app/page.tsx)

## Design Health Score: 31/40 (Good)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Good hover/video/scroll feedback |
| 2 | Match System / Real World | 3 | Copy tension: commission-facing vs hire-positioning |
| 3 | User Control & Freedom | 3 | Nav, back-to-top, mobile menu, once-per-session intro |
| 4 | Consistency & Standards | 3 | Glassmorphism drift + lime over-use vs DESIGN.md |
| 5 | Error Prevention | 3 | n/a-heavy |
| 6 | Recognition vs Recall | 4 | Clear nav |
| 7 | Flexibility & Efficiency | 3 | n/a-heavy |
| 8 | Aesthetic & Minimalist | 4 | Real cinematic video + restraint |
| 9 | Error Recovery | 3 | n/a-heavy |
| 10 | Help & Documentation | 2 | None (ok for portfolio) |

## Anti-Patterns Verdict
Not slop. Detector clean ([]). Real cinematic video, real client logos, custom letterbox intro; Bebas-condensed display dodges the editorial-serif lane. Remaining tells are internal inconsistency.

## What's Working
1. Cinematic above-the-fold (full-screen video, vignettes, scroll-fill lime underline signature).
2. The work leads — full-bleed video frames + lightbox.
3. Credibility band — real client logos, calm drift.

## Priority Issues
- [P2] Glassmorphism drift: ContactCTA "Open Inquiry" (variant=glass) + Footer social pills (rounded-full + backdrop-blur) contradict DESIGN.md (sharp/hairline/No-Box). Pick one direction, apply everywhere. Cmd: polish/quieter or document.
- [P2] Audience/copy tension: hero descriptor + ContactCTA are commission-facing; meta + project copy position as VFX/3D artist for hire. PRODUCT.md flags this. Cmd: clarify.
- [P3] Lime discipline: hero has vertical bar + scroll-fill underline + scroll-indicator line (3 lime moments) vs the One Light Rule. Cmd: quieter.
- [P3] Orphan "04" counter in SelectedWork after label removal — restore minimal label or drop counter. Cmd: distill/layout.
- [P3] Bebas font-weight classes (font-extrabold/bold) are no-ops with font-synthesis:none — cosmetic cleanup. Cmd: polish.

## Persona Red Flags
- Mara (Studio Recruiter): can judge craft now (win), but hero/CTA voice reads "wants commissions" not "wants a role" — main friction with primary audience.
- Casey (Mobile): recent fixes should land; verify the letterbox intro on a real device.

## Minor Observations
- "Developer" service alongside CGI services is slightly incongruous for a studio-hire audience (reflects dual skill; borderline).
- Footer copyright + back-to-top use #3D3D3D (~1.8:1) — acceptable as decorative/legal per Floor Rule.
