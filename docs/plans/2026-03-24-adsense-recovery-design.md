# AdSense Recovery Design

**Date:** `2026-03-24`

**Status:** Approved for planning

**Problem**

`homedecorcalc.com` has been rejected twice by AdSense review, most likely for a site-quality and low-value-content threshold rather than a hard policy violation. Recent GSC data shows the site does have real search value, but that value is concentrated in a small set of English pages while a broader long tail of template-like pages dilutes overall quality signals.

**Observed signals**

- 28-day GSC totals: `78` clicks, `6,338` impressions, `1.23%` CTR, weighted average position `10.7`
- Click concentration is high:
  - top 3 pages = `66.67%` of clicks
  - top 5 pages = `78.21%` of clicks
  - top 10 pages = `80.77%` of clicks
- Current site footprint is broad relative to validated demand:
  - `27` calculator pages
  - `21` guide pages
  - resources plus multiple locales
- Homepage currently behaves more like a directory than a brand or trust page
- Ad placement is broad across homepage, calculators, and guides
- Trust pages exist, but they still feel organization-first instead of responsibility-first

## Diagnosis

This site does not look irredeemable. The stronger interpretation is that Google can see some genuinely useful pages, but the overall site still resembles a scaled calculator network:

- too many pages with similar structure and limited differentiation
- too much surface area relative to proven user demand
- weak human ownership and editorial accountability signals
- too much advertising exposure for a site that still needs to prove value

The risk is not "the site used AI." The risk is that the site can be interpreted as low-effort, scaled, and thin on original value. Google Search guidance allows AI-assisted content, but expects people-first content and penalizes scaled content abuse when pages are produced without real added value. AdSense review likely inherits the same broad quality concerns.

## Goals

1. Raise AdSense approval probability without damaging the strongest SEO assets.
2. Make the site look and behave like a focused, trustworthy home-improvement estimation resource.
3. Preserve and strengthen core English traffic pages.
4. Reduce low-value signals from weak pages, broad ad coverage, and directory-style presentation.
5. Create a safe post-approval deployment path so ads return gradually instead of all at once.

## Non-Goals

- Do not try to save every existing page in this round.
- Do not expand the site with many new pages before quality cleanup.
- Do not optimize primarily for short-term ad impressions.
- Do not make large structural deletions unless a page clearly belongs in the weakest tier.

## Chosen Strategy

Adopt a focused recovery strategy:

1. Reposition the site around a smaller set of proven core topics.
2. Rebuild trust signals around explicit ownership, review process, and correction workflow.
3. Reduce ad footprint sharply during review.
4. Deepen the strongest pages so they clearly provide more value than a generic formula page.
5. Segment the rest of the site into pages to keep, repair, or shrink.

This strategy is preferred over a no-shrink content-only fix because the site has already failed review twice. It is also preferred over an aggressive reset because the site already has a handful of pages with meaningful traction and those should be protected.

## Page Segmentation Model

### Tier A: Core Keep Pages

These pages are the approval-facing assets:

- already earn clicks or meaningful impressions
- align tightly with site positioning
- can be strengthened into clearly helpful pages

Initial topic candidates:

- `deck-mud`
- `baseboard-trim`
- `drywall-texture`
- `tile-waste` cluster

Tier A expectations:

- stronger opening copy
- worked examples
- better explanation of defaults and assumptions
- updated/reviewed trust signals
- little to no ad distraction during review

### Tier B: Repair and Observe Pages

These pages are still on-topic, but not yet convincing:

- have impressions but weak click or engagement value
- can plausibly become useful with deeper content and lower ad pressure

Tier B actions:

- remove ads during review
- reduce homepage and strong internal-prominence signals
- add examples, decision help, and clearer copy
- observe after the next crawl/indexing cycle

### Tier C: Shrink Pages

These pages contribute more review risk than site value:

- high impression / zero click patterns
- weak topical fit
- very generic or highly templated structure
- hard to improve meaningfully in the short term

Tier C actions:

- remove ads immediately
- reduce internal prominence
- apply `noindex` where appropriate
- consider future consolidation or removal only after review work stabilizes

## Trust Layer Redesign

The site must stop looking anonymous.

Required trust improvements:

- identify a clear responsible owner/editor rather than only the `HomeDecorCalc` brand
- explain what the site helps with and what it does not cover
- show how formulas, defaults, and examples are reviewed
- explain how corrections are submitted and processed
- show visible update/review cues on priority pages

Affected areas:

- homepage framing
- `About`
- `Methodology`
- `Editorial policy`
- `Contact`
- global footer/navigation references to trust pages

## Content Quality Redesign

Core pages must feel like expert planning tools, not only calculators with FAQs.

Priority content changes:

- strengthen the page opening with user-task language
- add one or more worked examples with real numbers
- explain why default waste/coverage assumptions are reasonable
- highlight common measurement mistakes
- better connect related guide/resource pages to the calculator outcome

The rule for approval-facing pages is simple: after reading the page, a user should have less need to return to search for a second explanation.

## Ad Strategy

### Review Phase

Ads should be treated as a risk multiplier until the site quality reset is visible.

Review-phase rules:

- no ads on homepage
- no ads on `About`, `Methodology`, `Editorial policy`, `Contact`, `Privacy`, or `Terms`
- no ads on resources during review
- no ads on Tier B and Tier C pages during review
- ideally no ads on Tier A during the review window either; if any remain, keep them to one unobtrusive placement away from the result area and away from first view

### Post-Approval Phase

Ad restoration must be staged:

1. keep homepage and trust pages permanently ad-free
2. restore ads only on the strongest Tier A pages first
3. observe 7-14 days
4. consider expanding to selected repaired pages only if quality and performance remain stable

## Deployment Model

The site already uses repository-based automatic deployment, likely on Vercel. Recovery changes should therefore be deployed through code plus environment-controlled ad behavior.

Recommended model:

- code defines permanent ad-free zones and page-tier rules
- environment variables control review mode vs normal mode
- deployment remains automatic from the repository
- post-approval recovery uses configuration changes plus redeploy, not manual code surgery

This makes the review state reversible and reduces the chance of accidentally reintroducing bad ad patterns on high-trust pages.

## SEO and Indexing Impact

This strategy can affect SEO and indexing, but the intended impact is selective:

- protect core pages
- accept reduced visibility on weak pages that currently add little business value
- favor better site-quality signals over inflated low-intent impressions

The expected trade-off is a short-term reduction in weak-tail exposure in exchange for a cleaner site profile and stronger long-term monetization readiness.

## Rollout Sequence

1. Define page tiers and trust requirements.
2. Rebuild homepage and trust pages.
3. Implement review-mode ad suppression and permanent ad-free trust zones.
4. Deepen Tier A pages.
5. Repair Tier B pages and shrink Tier C pages.
6. Deploy and request recrawl in GSC for homepage, trust pages, and Tier A pages.
7. Wait `10-14` days before the next AdSense review submission.

## Success Signals

The next review should only be submitted when these signals are true:

- homepage clearly explains site purpose and priority topics
- trust pages identify a responsible human/editorial layer
- ads are meaningfully reduced
- Tier A pages show stronger explanatory depth and review cues
- weak pages no longer dominate internal site presentation
- GSC confirms important pages are being recrawled after the update

## Risks And Mitigations

**Risk:** Over-shrinking pages harms organic footprint.

**Mitigation:** Use tiering, not blanket removal. Start with ad removal and internal de-emphasis before `noindex`.

**Risk:** Review is resubmitted too early.

**Mitigation:** Wait for recrawl and visible live-site changes before reapplying.

**Risk:** The site still feels anonymous.

**Mitigation:** Add named ownership and review responsibility, not just brand-level statements.

**Risk:** Ads return too aggressively after approval.

**Mitigation:** Use staged restoration through environment-controlled review mode.

## Decision Summary

Proceed with a conservative but assertive recovery plan:

- focus on fewer, stronger pages
- make ownership and review explicit
- sharply reduce ad pressure
- keep long-term trust pages ad-free
- use page-tiering instead of indiscriminate deletion
- wait for crawl recognition before resubmitting to AdSense
