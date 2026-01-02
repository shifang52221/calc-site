# Layout Reserve Spec (CLS protection)

## Goals

- Prevent layout shift when ads/third-party scripts load.
- Keep “task UI” (inputs/results) stable on calculator pages.

## Ad slot container rules

- Each ad slot must render a wrapper with a deterministic height before the ad script runs.
- Use breakpoint-based min-heights and a neutral background so empty slots don’t look broken.
- Never place ad slots inside interactive components (forms, toggles).

## Suggested reserves (safe defaults)

- Mobile:
  - In-article: `min-height: 250px`
  - Anchor (if used later): `min-height: 50px`
- Tablet/Desktop:
  - In-article: `min-height: 280px`
  - Leaderboard: `min-height: 90px`

## Placement constraints

- Calculator pages:
  - Do not push the entire inputs panel below the fold.
  - Prefer: after results, between explanation sections, before related links.
- Guide pages:
  - Prefer: after intro, between sections, near end.

