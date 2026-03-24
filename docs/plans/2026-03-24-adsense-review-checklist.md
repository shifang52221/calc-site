# AdSense Review Readiness Checklist

**Date:** `2026-03-24`  
**Scope:** Final deployment and resubmission checklist for the March 2026 recovery pass

## Before Deployment

- Confirm `NEXT_PUBLIC_SITE_REVIEW_MODE=true` in production so review-mode ad suppression is active everywhere.
- Confirm homepage and trust pages stay ad-free:
  - `/en`
  - `/en/about`
  - `/en/methodology`
  - `/en/editorial-policy`
  - `/en/contact`
  - `/en/privacy`
  - `/en/terms`
- Confirm Tier A calculator updates are live on:
  - `/en/calculators/home-improvement/deck-mud`
  - `/en/calculators/home-improvement/baseboard-trim`
  - `/en/calculators/home-improvement/drywall-texture`
- Confirm Tier A support content updates are live on:
  - `/en/resources/deck-mud-coverage-chart`
  - `/en/resources/tile-project-planning-guide`
  - `/en/guides/home-improvement/tile-waste`
- Confirm Tier C review-phase `noindex` targets are live:
  - `/en/guides/home-improvement/topsoil-leveling`
  - `/en/resources/topsoil-leveling-step-by-step-guide`
  - `/en/guides/home-improvement/drywall-ceiling`
  - `/es/resources/concrete-bag-yield-guide`
  - `/es/resources/fence-post-hole-concrete-guide`
- Confirm legacy resource redirects resolve to stronger canonical pages:
  - `/en/resources/tile-waste-percentage-guide` -> `/en/resources/tile-project-planning-guide`
  - `/en/resources/drywall-ceiling-thickness-guide` -> `/en/resources/drywall-materials-and-finishing-guide`
- Confirm hub pages de-emphasize weak pages and show stronger surfaces first:
  - `/en/calculators`
  - `/en/guides`
  - `/en/resources`

## Deployment Checks

- Push the branch to the deployment-connected repository so a fresh production build runs.
- If any `NEXT_PUBLIC_*` variable changed in the hosting dashboard, trigger a fresh deployment after saving the variable.
- After deployment, manually verify on production:
  - homepage hero and trust sections render correctly
  - trust pages load without ads
  - Tier A calculators show review/methodology cues
  - Tier C pages still load but expose `noindex`
  - `/sitemap.xml` loads successfully
  - `/robots.txt` loads successfully

## Search Console Follow-Up

- Submit inspection and request recrawl for:
  - homepage
  - trust pages
  - Tier A calculators
  - Tier A resources and guide pages
- Re-submit the sitemap in Google Search Console after deployment.
- Watch for coverage changes and crawl refresh on the next several days rather than expecting same-day movement.

## Resubmission Timing Rule

- Wait `10-14 days` after the recovery deployment is live and recrawl requests are submitted before reapplying to AdSense.
- Do not reapply earlier unless production clearly failed to ship the intended changes and you are correcting the deployment itself.
- During the waiting window, avoid adding broad new pages, restoring ads, or changing the homepage/trust-page posture again.

## Final Pre-Submission Spot Check

- Confirm there are no ads on trust pages or homepage.
- Confirm noindex targets are absent from the sitemap and de-emphasized in hub pages.
- Confirm high-value pages are the clearest internal paths from the homepage and section hubs.
- Confirm contact, methodology, and editorial policy pages are reachable in header/footer navigation.
- Confirm the live site still passes the local verification baseline:
  - `npm run lint`
  - `npm run content:check:resources`
  - `npm run audit:local`

## Operating Rule

- If post-deployment data looks mixed, keep the trust-page and ad-cleanup improvements in place.
- If a rollback is ever needed, roll back the narrow `noindex` set first, not the site-wide trust and ad-light posture.
