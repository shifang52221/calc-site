# Release checklist (SEO-safe)

Use this checklist before pushing any batch. It is designed to prevent the two common failures: broken URLs/SEO tags and “thin + ads-heavy” signals.

## Local (required)

1) Make sure the site builds:
- `npm run build`

2) Run the local audits:
- `npm run audit:local`

Expected outcomes:
- No crashes.
- `local-duplicate-audit` shows no duplicate groups.
- Calculator/resource/guide audits show `thinCount` at or near 0 for your current targets.

## Live (required after deploy)

1) Wait for production to update (Vercel cache may take a minute).

2) Run the live audits:
- `npm run audit:live`

Expected outcomes:
- `duplicateTitleGroups: 0`
- `duplicateDescriptionGroups: 0`
- `non200Count: 0`
- `noIndexCount: 0`
- `canonicalMismatchCount: 0`
- `veryShortCount` should not increase (target: 0).

Reports are saved under `docs/audits/`.

## Manual spot checks (fast but important)

Pick 3–5 changed URLs and verify:
- Title/description are correct for the locale.
- Canonical and hreflang alternates look correct.
- Content renders (no missing translation keys).
- No unexpected redirects.
- Ads script is still consent-gated (HTML should not contain `googlesyndication` before consent).

