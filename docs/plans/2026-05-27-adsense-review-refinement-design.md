# AdSense Review Refinement Design

**Goal:** Prepare HomeDecorCalc for a more confident AdSense re-review by reducing technical duplication risk, strengthening the core English review surface, and improving high-opportunity pages identified in recent Search Console data.

## Context

The site has failed AdSense review several times for low-value content concerns. Recent Search Console data from 2026-02-25 through 2026-05-24 shows that the 2026-04-09 quality update helped: click-through rate and average ranking improved after the update, while impressions became more focused. The 2026-04-30 review-surface narrowing also held up without a traffic collapse.

The remaining risk is not page quantity. The remaining risk is that AdSense may still sample duplicate URL variants, weak translated/tool pages, or templated pages that do not show enough editorial care. The refinement should therefore focus on quality, consistency, and evidence rather than broad expansion.

## Approved Approach

Use the medium-depth refinement path:

- Fix or verify technical URL consistency before re-review.
- Keep the review-period indexed surface focused on strong English pages.
- Improve the highest-opportunity English pages rather than adding many new pages.
- Strengthen topical internal links among calculators, guides, resources, methodology, and editorial policy.
- Verify locally and on production before recommending an AdSense re-review.

## Technical Design

The site should present one clean canonical version:

- `www.homedecorcalc.com` redirects permanently to `homedecorcalc.com`.
- Missing-locale paths such as `/guides/...`, `/resources/...`, and `/calculators/...` redirect permanently to `/en/...`.
- Canonical URLs point to final non-www URLs.
- The XML sitemap includes only pages intended for the review surface.
- Pages marked `noindex` do not appear in the sitemap.
- Review-period noindex behavior remains conservative for Spanish and Traditional Chinese calculator pages.

Primary files to inspect or modify:

- `proxy.ts`
- `next.config.ts`
- `src/lib/seo.ts`
- `app/sitemap.ts`
- `scripts/adsense-audit.mjs`
- `scripts/live-sitemap-audit.mjs`

## Content Design

Prioritize pages with Search Console evidence.

### Baseboard Trim Calculator

Problem: high impressions and very low CTR despite a top-10 average position.

Design:

- Improve title, description, subtitle, and above-the-fold copy around baseboard linear feet, molding piece count, stock length, door openings, and waste.
- Make the page feel like a practical measuring workflow, not a generic calculator.
- Add or refine FAQ content for doors, waste, 8 ft vs 12 ft stock, and molding/trim terminology.
- Link naturally to baseboard trim waste guidance and methodology.

### Tile Waste / Tile Planning

Problem: tile waste content has useful ranking but weak CTR.

Design:

- Confirm the active final URL before changing copy because older tile waste resources were consolidated.
- Improve language around tile overage, how much extra tile to buy, 10 percent vs 15 percent vs 20 percent waste, cuts, layout, and shower-wall risk.
- Strengthen links among the tile calculator, tile waste guide, and tile planning resource.

### Deck Mud Cluster

Problem: the main deck mud calculator performs well, but related square-foot and coverage-chart queries have more room to improve.

Design:

- Avoid disruptive rewrites to the winning calculator page.
- Add targeted support for square feet, coverage chart, dry pack, floor mud, and mud bed wording.
- Strengthen calculator-to-resource-to-methodology linking.
- Keep the reviewer signal visible on the core page.

### Drywall Texture Calculator

Problem: it is the second strongest page and should be protected while lightly improved.

Design:

- Make only low-risk improvements to clarity, assumptions, and internal links.
- Avoid broad title or calculator-behavior changes unless audits expose a clear issue.

## Site Architecture And Internal Links

The review surface should feel like a coherent English home-improvement planning site:

```text
/en
├── /en/calculators
│   ├── /en/calculators/home-improvement/deck-mud
│   ├── /en/calculators/home-improvement/drywall-texture
│   ├── /en/calculators/home-improvement/baseboard-trim
│   ├── /en/calculators/home-improvement/tile
│   └── /en/calculators/home-improvement/paint
├── /en/resources
│   ├── /en/resources/deck-mud-coverage-chart
│   ├── /en/resources/baseboard-trim-waste-tips
│   └── /en/resources/tile-project-planning-guide
├── /en/guides
│   ├── /en/guides/home-improvement/tile-waste
│   ├── /en/guides/home-improvement/tile
│   └── /en/guides/home-improvement/drywall
├── /en/methodology
├── /en/editorial-policy
├── /en/about
└── /en/contact
```

Internal linking should be focused:

- Deck mud calculator links to deck mud coverage chart and methodology.
- Deck mud coverage chart links back to the calculator and methodology.
- Baseboard trim calculator links to baseboard trim waste tips and methodology.
- Baseboard trim waste tips links back to the calculator.
- Tile calculator and tile waste guide link to tile project planning resource.
- Tile project planning resource links back to the tile calculator and tile waste guide.

## Verification Design

Before recommending re-review, run local checks:

- `npm run lint`
- `npm run audit:local`
- targeted tests for review policy, redirects, sitemap, metadata, or content where changed
- `npm run build`

After deployment, verify production:

- Core pages return 200.
- `www` permanently redirects to non-www.
- Missing-locale paths permanently redirect to `/en/...`.
- Core indexed pages do not contain `noindex`.
- Weak and non-English calculator pages retain intended `noindex`.
- Sitemap excludes noindex pages.
- Canonicals point to final non-www URLs.
- Reviewer signal appears on core review pages.
- No obvious broken internal links or unexpected redirects appear in live audit output.

## Re-Review Gate

Do not recommend submitting AdSense re-review until:

- Local verification passes.
- Production verification passes.
- Search Console sitemap has been resubmitted or is ready to resubmit.
- The final reviewed page set is focused, coherent, and free of obvious duplicate URL variants.

