---
target: work
total_score: 30
p0_count: 0
p1_count: 2
timestamp: 2026-06-24T19-16-39Z
slug: src-app-work-page-tsx
---
# Critique — Work surface (index + project detail)

## Design Health Score: 30/40 (Good)

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | Filter active-state clear; no scroll affordance on mobile filter strip |
| 2 | Match System / Real World | 4 | Role/Software/Year/category language fits the audience |
| 3 | User Control & Freedom | 3 | No back-to-index/breadcrumb from detail |
| 4 | Consistency & Standards | 3 | ProjectCardSplit is dead code |
| 5 | Error Prevention | 3 | Empty-category state handled |
| 6 | Recognition vs Recall | 3 | Filters + labels visible |
| 7 | Flexibility & Efficiency | 3 | Keyboard-navigable; filter only accelerator |
| 8 | Aesthetic & Minimalist | 3 | Restraint undercut by placeholders + sub-AA gray |
| 9 | Error Recovery | 3 | Graceful empty state |
| 10 | Help & Documentation | 2 | None (acceptable for portfolio) |

## Anti-Patterns Verdict
Detector clean (detect.mjs []). Partially AI-feeling for two reasons: identical boilerplate prose on every project detail page, and all-placeholder imagery (a CGI portfolio showing no CGI). Strength: curated Full/Full/2-up rhythm resists the ArtStation-grid anti-reference.

## What's Working
1. Curated layout rhythm (not a uniform grid).
2. Detail-page metadata strip (Role/Software/Client/Year) — right info for recruiters.
3. Accessible link semantics + sr-only alt fallbacks + global focus ring.

## Priority Issues
- [P1] All-placeholder imagery — heroImage/images[] empty for 5/6 projects; the work isn't shown. Content task.
- [P1] Sub-AA contrast: #3D3D3D on #090909 (~1.8:1) used for Role/Software/Client/Year labels, inactive filter tags, sticky title label. Bump to #7A7A7A+. Cmd: audit/colorize.
- [P2] Identical boilerplate prose on every project detail (intro para 2 + both process paras hardcoded). Move per-project to projects.ts or cut. Cmd: clarify.
- [P2] ProjectCardSplit dead code: mod===3 always returns null, so split never renders and the index never shows any project description. Fix modulo logic. Cmd: layout.
- [P3] Hover-only JS state (bg/scale) doesn't fire on keyboard focus; use group-hover + group-focus-within. Cmd: polish.

## Persona Red Flags
- Mara (Studio Recruiter): can't see any work (placeholders); lowest-contrast text is the Software/Role she scans; repeated process copy makes range feel thin.
- Riley (Stress Tester): odd-count filter leaves half-width orphan in 2-up; detail pages show 4 empty gradient blocks (reads broken).
- Casey (Mobile): horizontal filter strip with no affordance; inactive tags invisible.

## Minor Observations
- Sticky project-title label repeats hero title in near-invisible gray.
- Recurring "── Process/Studio/About" eyebrows border on the per-section eyebrow reflex.
- No back-to-all-work affordance on detail pages.
