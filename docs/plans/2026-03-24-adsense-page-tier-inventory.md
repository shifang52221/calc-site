# AdSense Recovery Page Tier Inventory

**Date:** `2026-03-24`  
**Scope:** Review-mode inventory for approval posture  
**Intent:** Make page handling explicit enough that later tasks cannot misread which surfaces are protected, de-emphasized, or shrink candidates.

## Coverage Rules

- This document explicitly classifies all English calculator pages (`27`) and all English guide pages (`21`) currently represented in route/catalog sources.
- This document explicitly classifies trust, homepage, and hub/listing surfaces that shape reviewer perception.
- English resources are covered with a strict default plus named exceptions so no slug is unclassified.
- ES and zh-TW handling is defined with explicit locale policies and named exceptions.

## Tier A: Core Keep Pages

### Trust Surface

These pages are approval-facing credibility anchors and should remain ad-free and indexed.

| Route | Current role | Planned ad state during review | Planned indexation state | Rationale |
|---|---|---|---|---|
| `/en` | Homepage and primary quality signal | Off (recommended permanent) | Keep index (priority recrawl) | Must present site value/trust first, not directory/ad-first. |
| `/en/about` | Ownership/accountability page | Off (permanent) | Keep index | Supports human responsibility and legitimacy. |
| `/en/methodology` | Formula and assumption explanation page | Off (permanent) | Keep index | Supports transparent "how estimates are made" trust signal. |
| `/en/editorial-policy` | Editorial standards and corrections page | Off (permanent) | Keep index | Shows governance and correction process. |
| `/en/contact` | User feedback and correction intake | Off (permanent) | Keep index | Shows real operator responsiveness. |
| `/en/privacy` | Legal/trust policy page | Off (permanent) | Keep index | Standard trust surface, no ad pressure needed. |
| `/en/terms` | Legal/trust policy page | Off (permanent) | Keep index | Standard trust surface, no ad pressure needed. |

### Core Demand Surface

These are the strongest demand pages to preserve and strengthen.

| Route | Current role | Planned ad state during review | Planned indexation state | Rationale |
|---|---|---|---|---|
| `/en/calculators/home-improvement/deck-mud` | Highest-validated calculator demand page | Off during review (restore only after approval, gradually) | Keep index (priority recrawl) | Proven traffic/value anchor. |
| `/en/calculators/home-improvement/baseboard-trim` | High-impression calculator with CTR upside | Off during review (restore only after approval, gradually) | Keep index (priority recrawl) | Core commercial-intent topic. |
| `/en/calculators/home-improvement/drywall-texture` | Validated calculator demand page | Off during review (restore only after approval, gradually) | Keep index (priority recrawl) | Strong candidate for quality-led growth. |
| `/en/resources/tile-project-planning-guide` | Core resource in proven tile intent cluster | Off during review | Keep index (priority recrawl) | High-value supporting intent page. |
| `/en/resources/deck-mud-coverage-chart` | Core supporting resource for top calculator | Off during review | Keep index | Reinforces winning deck-mud cluster. |
| `/en/guides/home-improvement/tile-waste` | Core guide in tile demand cluster | Off during review | Keep index | Important explanatory companion page. |

## Tier B: Repair / Observe Pages

These pages remain indexed but are ad-off and de-emphasized during review. They are candidates for promotion or demotion after refresh + observation.

### Hub and Listing Surfaces

| Route | Current role | Planned ad state during review | Planned indexation state | Rationale |
|---|---|---|---|---|
| `/en/calculators` | Calculators hub | Off during review | Keep index (de-emphasize homepage prominence) | Needed for navigation/crawl, but not a lead quality page. |
| `/en/guides` | Guides hub | Off during review | Keep index (de-emphasize homepage prominence) | Needed for structure but should not dominate first impression. |
| `/en/resources` | Resources hub | Off during review | Keep index (de-emphasize homepage prominence) | Keep discoverable while quality cleanup runs. |
| `/en/calculators/walls-finishes` | Calculator category hub | Off during review | Keep index (de-emphasize) | Hub utility only; not a core quality destination. |
| `/en/calculators/floors-tile` | Calculator category hub | Off during review | Keep index (de-emphasize) | Hub utility only; not a core quality destination. |
| `/en/calculators/concrete-masonry` | Calculator category hub | Off during review | Keep index (de-emphasize) | Hub utility only; not a core quality destination. |
| `/en/calculators/roofing-exterior` | Calculator category hub | Off during review | Keep index (de-emphasize) | Hub utility only; not a core quality destination. |
| `/en/calculators/landscaping` | Calculator category hub | Off during review | Keep index (de-emphasize) | Hub utility only; not a core quality destination. |

### English Calculators (All Remaining Non-Tier-A Calculator Pages)

| Route | Current role | Planned ad state during review | Planned indexation state | Rationale |
|---|---|---|---|---|
| `/en/calculators/home-improvement/asphalt-driveway` | Long-tail calculator | Off during review | Keep index (observe) | On-topic but not core demand yet. |
| `/en/calculators/home-improvement/board-feet` | Long-tail calculator | Off during review | Keep index (observe) | Potential utility, low current validation. |
| `/en/calculators/home-improvement/concrete` | Core-adjacent calculator | Off during review | Keep index (observe) | Relevant but not current top performer. |
| `/en/calculators/home-improvement/concrete-bags` | Core-adjacent calculator | Off during review | Keep index (observe) | Relevant but needs stronger quality signal. |
| `/en/calculators/home-improvement/deck` | Core-adjacent calculator | Off during review | Keep index (observe) | Related cluster page, not top validated yet. |
| `/en/calculators/home-improvement/drywall` | Core-adjacent calculator | Off during review | Keep index (observe) | On-topic support page. |
| `/en/calculators/home-improvement/drywall-mud-tape` | Cluster support calculator | Off during review | Keep index (observe) | Useful support intent, currently secondary. |
| `/en/calculators/home-improvement/fence` | Long-tail calculator | Off during review | Keep index (observe) | Retain while de-emphasized. |
| `/en/calculators/home-improvement/flooring` | Core-adjacent calculator | Off during review | Keep index (observe) | Relevant to tile/flooring cluster, needs strengthening. |
| `/en/calculators/home-improvement/gravel` | Long-tail calculator | Off during review | Keep index (observe) | Useful but not core review surface. |
| `/en/calculators/home-improvement/gravel-tons` | Long-tail converter | Off during review | Keep index (observe) | Keep for utility, not ad candidate in review mode. |
| `/en/calculators/home-improvement/mulch` | Long-tail calculator | Off during review | Keep index (observe) | Keep indexed conservatively. |
| `/en/calculators/home-improvement/mulch-bags` | Long-tail calculator | Off during review | Keep index (observe) | Keep indexed conservatively. |
| `/en/calculators/home-improvement/paint` | Long-tail calculator | Off during review | Keep index (observe) | Useful but not top approval-facing asset. |
| `/en/calculators/home-improvement/paver-base` | Long-tail calculator | Off during review | Keep index (observe) | Retain while de-emphasized. |
| `/en/calculators/home-improvement/roofing` | Long-tail calculator | Off during review | Keep index (observe) | Retain while de-emphasized. |
| `/en/calculators/home-improvement/sand` | Long-tail calculator | Off during review | Keep index (observe) | Retain while de-emphasized. |
| `/en/calculators/home-improvement/soil-mix` | Long-tail calculator | Off during review | Keep index (observe) | Retain while de-emphasized. |
| `/en/calculators/home-improvement/studs` | Long-tail calculator | Off during review | Keep index (observe) | Retain while de-emphasized. |
| `/en/calculators/home-improvement/tile` | Core-adjacent calculator | Off during review | Keep index (observe) | Supports validated tile cluster. |
| `/en/calculators/home-improvement/tile-grout` | Core-adjacent calculator | Off during review | Keep index (observe) | Supports validated tile cluster. |
| `/en/calculators/home-improvement/topsoil` | Long-tail calculator | Off during review | Keep index (observe) | Keep indexed conservatively. |
| `/en/calculators/home-improvement/topsoil-bags` | Long-tail calculator | Off during review | Keep index (observe) | Keep indexed conservatively. |
| `/en/calculators/home-improvement/wallpaper-rolls` | Long-tail calculator | Off during review | Keep index (observe) | Keep indexed conservatively. |

### English Guides (All Remaining Non-Tier-A / Non-Tier-C Guide Pages)

| Route | Current role | Planned ad state during review | Planned indexation state | Rationale |
|---|---|---|---|---|
| `/en/guides/home-improvement/concrete` | Support guide | Off during review | Keep index (observe) | On-topic support surface. |
| `/en/guides/home-improvement/deck` | Support guide | Off during review | Keep index (observe) | On-topic support surface. |
| `/en/guides/home-improvement/drywall` | Support guide | Off during review | Keep index (observe) | On-topic support surface. |
| `/en/guides/home-improvement/fence` | Support guide | Off during review | Keep index (observe) | Retain with lower prominence. |
| `/en/guides/home-improvement/fence-posts` | Support guide | Off during review | Keep index (observe) | Retain with lower prominence. |
| `/en/guides/home-improvement/flooring` | Support guide | Off during review | Keep index (observe) | Relevant to flooring/tile cluster. |
| `/en/guides/home-improvement/flooring-boxes` | Support guide | Off during review | Keep index (observe) | Relevant to flooring/tile cluster. |
| `/en/guides/home-improvement/gravel` | Support guide | Off during review | Keep index (observe) | Retain with lower prominence. |
| `/en/guides/home-improvement/gravel-tons` | Support guide | Off during review | Keep index (observe) | Retain with lower prominence. |
| `/en/guides/home-improvement/mulch` | Support guide | Off during review | Keep index (observe) | Retain with lower prominence. |
| `/en/guides/home-improvement/mulch-depth` | Support guide | Off during review | Keep index (observe) | Retain with lower prominence. |
| `/en/guides/home-improvement/paint` | Support guide | Off during review | Keep index (observe) | Retain with lower prominence. |
| `/en/guides/home-improvement/paint-ceiling` | Support guide | Off during review | Keep index (observe) | Retain with lower prominence. |
| `/en/guides/home-improvement/paint-trim` | Support guide | Off during review | Keep index (observe) | Retain with lower prominence. |
| `/en/guides/home-improvement/roofing` | Support guide | Off during review | Keep index (observe) | Retain with lower prominence. |
| `/en/guides/home-improvement/roofing-shed` | Support guide | Off during review | Keep index (observe) | Retain with lower prominence. |
| `/en/guides/home-improvement/tile` | Support guide | Off during review | Keep index (observe) | Relevant to validated tile cluster. |
| `/en/guides/home-improvement/topsoil` | Support guide | Off during review | Keep index (observe) | Keep indexed conservatively. |

### English Resources Default Policy (Unambiguous Catch-All)

| Route class | Current role | Planned ad state during review | Planned indexation state | Rationale |
|---|---|---|---|---|
| Every `/en/resources/<slug>` from `RESOURCE_ARTICLES_EN` except explicitly listed Tier A and Tier C slugs | Resource article set in live content/sitemap generation | Off during review | Keep index (observe + de-emphasize) | Conservative posture: avoid broad noindex while reducing review-noise and ad pressure. |

## Tier C: Shrink Pages

These pages are clearer low-value-risk candidates from prior analysis. They are ad-off and set to `noindex` in review mode.

| Route | Current role | Planned ad state during review | Planned indexation state | Rationale |
|---|---|---|---|---|
| `/en/guides/home-improvement/topsoil-leveling` | Weak long-tail guide | Off during review | `noindex` (review phase) | Previously identified high-impression/low-value risk. |
| `/en/resources/topsoil-leveling-step-by-step-guide` | Weak long-tail resource | Off during review | `noindex` (review phase) | Mirrors weak guide intent and adds little review value. |
| `/en/guides/home-improvement/drywall-ceiling` | Weak long-tail guide | Off during review | `noindex` (review phase) | Linked to low-conversion long-tail intent. |
| `/en/resources/drywall-ceiling-thickness-guide` | Legacy weak long-tail resource route | Off during review | `308` redirect to `/en/resources/drywall-materials-and-finishing-guide` | Retires the weak standalone page and consolidates that intent into a stronger canonical resource. |
| `/es/resources/concrete-bag-yield-guide` | ES weak-tail resource | Off during review | `noindex` (review phase) | Explicitly flagged weak ES tail from prior dataset. |
| `/es/resources/fence-post-hole-concrete-guide` | ES weak-tail resource | Off during review | `noindex` (review phase) | Explicitly flagged weak ES tail from prior dataset. |

## Locale Policy (Remaining ES and zh-TW Surfaces)

This section removes ambiguity for non-English pages not explicitly named above.

| Route class | Current role | Planned ad state during review | Planned indexation state | Rationale |
|---|---|---|---|---|
| All `/es` surfaces not explicitly listed in Tier C (home, trust, hubs, calculators, guides, resources) | Secondary-locale live pages | Off during review | Keep index (de-emphasize internal prominence) | Conservative approach avoids broad ES noindex while reducing ad/quality risk. |
| All `/zh-TW` surfaces (home, trust, hubs, calculators, guides, resources) | Secondary-locale live pages | Off during review | Keep index (de-emphasize internal prominence) | Keep stable and conservative; avoid aggressive locale suppression during first recovery pass. |

## Completeness Check

- All English calculator pages are classified exactly once.
- All English guide pages are classified exactly once.
- All English resource pages are classified via explicit Tier A/Tier C slug lists plus a strict default catch-all.
- Trust/homepage/hub-like surfaces are explicitly classified.
- Non-English surfaces are covered by an explicit locale policy and named exceptions.

## Practical Guardrails

- Default posture is ad-off during review across all tiers.
- Default posture is keep-index for non-core pages unless there is clear weak-signal evidence.
- `noindex` is limited to explicit high-risk tail pages in this cycle.
