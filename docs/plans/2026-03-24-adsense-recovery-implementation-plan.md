# AdSense Recovery Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rework `homedecorcalc.com` so the live site presents a smaller, more trustworthy, less ad-heavy profile that improves AdSense approval odds without damaging the strongest SEO pages.

**Architecture:** Implement the recovery in layers. First establish page-tier rules and review-mode ad controls, then rebuild homepage and trust pages, then deepen the strongest content pages and suppress weak-page signals. Keep permanent trust zones ad-free and use environment-driven review mode so approval-state behavior can be changed safely after deployment.

**Tech Stack:** Next.js App Router, `next-intl`, locale message files in `src/messages/*.json`, content collections in `src/lib/content/*.ts`, ad configuration in `src/lib/adsense.ts`, site components in `src/components/*`, live validation via `npm run lint`, `npm run content:check:resources`, and `npm run audit:local`

---

## Pre-Implementation Context

- Repo root: `F:\www\www.homedecorcalc.com\calc-site`
- Deployment model: repository-driven automatic deployment, with Vercel indicators in repo docs/config
- Current highest-value topics from GSC: `deck-mud`, `baseboard-trim`, `drywall-texture`, `tile-waste`
- Current trust pages already exist and should be strengthened rather than reinvented
- AdSense is already controlled partly through environment variables, which is the right place to add review-mode behavior

### Task 1: Inventory Tiers And Review Rules

**Files:**
- Create: `docs/plans/2026-03-24-adsense-page-tier-inventory.md`
- Check: `app/[locale]/page.tsx`
- Check: `app/[locale]/calculators/home-improvement/*/page.tsx`
- Check: `app/[locale]/guides/home-improvement/*/page.tsx`
- Check: `app/[locale]/resources/[slug]/page.tsx`

**Step 1: Write the inventory document**

Create `docs/plans/2026-03-24-adsense-page-tier-inventory.md` with three sections:

- Tier A: core keep pages
- Tier B: repair/observe pages
- Tier C: shrink pages

For each listed page, include:

- exact route
- current role
- planned ad state during review
- planned indexation state
- short rationale

**Step 2: Verify every route exists**

Run:

```bash
Get-ChildItem -LiteralPath 'app/[locale]' -Recurse -File | Select-String -Pattern 'page.tsx'
```

Expected:

- All planned routes exist and can be mapped cleanly into a tier

**Step 3: Commit**

```bash
git add docs/plans/2026-03-24-adsense-page-tier-inventory.md
git commit -m "docs: add adsense recovery page tier inventory"
```

### Task 2: Add Review-Mode Ad Controls

**Files:**
- Modify: `src/lib/adsense.ts`
- Modify: `src/components/AdSlot.tsx`
- Modify: `.env.example`
- Modify: `README.md`

**Step 1: Write the failing logic test plan in comments or a temporary checklist**

Before editing, list the required behaviors:

- homepage can be forced ad-free in review mode
- trust pages are always ad-free
- Tier B/Tier C pages can be hidden from ads without deleting ad code from every page
- normal mode still supports selective future restoration

**Step 2: Implement minimal review-mode configuration**

Add environment-driven flags in `src/lib/adsense.ts`, such as:

- `NEXT_PUBLIC_SITE_REVIEW_MODE`
- optional page-scope helpers for homepage, trust pages, resources, and low-tier pages

The code should expose clear helper functions rather than scattering environment checks throughout page files.

**Step 3: Update the ad slot component to respect policy helpers**

Modify `src/components/AdSlot.tsx` so the component can decline to render when the current page or placement is not eligible under review rules.

Prefer passing an explicit placement or page-type signal rather than hard-coding route strings inside the component.

**Step 4: Document the configuration**

Update `.env.example` and `README.md` with:

- the new review-mode variable
- how automatic deployment picks up the behavior
- the requirement to redeploy after changing `NEXT_PUBLIC_*` variables

**Step 5: Validation**

Run:

```bash
npm run lint
```

Expected:

- PASS
- no type/lint regressions in ad-control code

**Step 6: Commit**

```bash
git add src/lib/adsense.ts src/components/AdSlot.tsx .env.example README.md
git commit -m "feat: add review mode adsense controls"
```

### Task 3: Make Trust Pages Permanently Ad-Free And Human-Centered

**Files:**
- Modify: `app/[locale]/about/page.tsx`
- Modify: `app/[locale]/methodology/page.tsx`
- Modify: `app/[locale]/editorial-policy/page.tsx`
- Modify: `app/[locale]/contact/page.tsx`
- Modify: `src/messages/en.json`
- Check: `src/messages/es.json`
- Check: `src/messages/zh-TW.json`
- Check: `src/components/SiteFooter.tsx`

**Step 1: Write the content checklist**

For each trust page, define the missing user-value elements:

- named owner/editor responsibility
- review/update process
- correction flow
- clear site scope and limitations
- stronger support for ad/editorial independence claims

**Step 2: Update English trust-page copy first**

Modify `src/messages/en.json` so `aboutPage`, `methodologyPage`, `editorialPolicyPage`, and `contactPage` become responsibility-first rather than organization-first.

Add concrete language for:

- who is responsible
- how defaults are checked
- how user corrections are handled
- how pages are reviewed over time

**Step 3: Update trust-page layouts if needed**

If the current page components do not support the new structure well, adjust the page components to add sections for:

- responsible editor/owner
- review workflow
- correction policy
- links between trust pages

**Step 4: Confirm permanent ad-free treatment**

Make sure these routes do not render ads in either review mode or future normal mode.

**Step 5: Validate locale fallback strategy**

If `es` and `zh-TW` are not being fully rewritten in this round, confirm they still render safely and decide whether to:

- keep current translations temporarily, or
- reduce their prominence until they can be upgraded

Do not leave broken or obviously mismatched trust-page structures across locales.

**Step 6: Validation**

Run:

```bash
npm run lint
```

Expected:

- PASS
- no locale or page rendering regressions

**Step 7: Commit**

```bash
git add app/[locale]/about/page.tsx app/[locale]/methodology/page.tsx app/[locale]/editorial-policy/page.tsx app/[locale]/contact/page.tsx src/messages/en.json src/messages/es.json src/messages/zh-TW.json src/components/SiteFooter.tsx
git commit -m "feat: strengthen trust pages for adsense review"
```

### Task 4: Rebuild The Homepage As A Brand And Trust Entry Point

**Files:**
- Modify: `app/[locale]/page.tsx`
- Modify: `src/messages/en.json`
- Check: `src/lib/content/resourcesEn.ts`
- Check: `src/lib/calculatorsCatalog.ts`

**Step 1: Define the new homepage sections**

Replace the current directory-first framing with a smaller set of sections:

- clear site purpose/value proposition
- priority topic clusters
- explanation of how the site helps with material estimation
- visible links into trust pages
- selected core tools instead of a giant primary grid feeling

**Step 2: Remove homepage ads for review and long-term trust**

Make sure `homeTop` is not shown on the homepage during review. The preferred end state is permanent homepage ad-free treatment.

**Step 3: Update copy around priority tasks**

Rewrite English homepage copy to foreground:

- project planning clarity
- practical estimating help
- core topics with real traction

Avoid generic "explore all calculators" tone in the opening section.

**Step 4: Reduce directory feel**

If all calculators still need to remain linked, push the larger list lower on the page and give visual priority to:

- featured topics
- why-trust-us cues
- selected guides/resources

**Step 5: Validation**

Run:

```bash
npm run lint
npm run audit:local
```

Expected:

- PASS
- homepage remains crawlable and internally well-linked

**Step 6: Commit**

```bash
git add app/[locale]/page.tsx src/messages/en.json src/lib/calculatorsCatalog.ts src/lib/content/resourcesEn.ts
git commit -m "feat: reposition homepage for adsense review"
```

### Task 5: Deepen Tier A Calculator Pages

**Files:**
- Modify: `app/[locale]/calculators/home-improvement/deck-mud/page.tsx`
- Modify: `app/[locale]/calculators/home-improvement/baseboard-trim/page.tsx`
- Modify: `app/[locale]/calculators/home-improvement/drywall-texture/page.tsx`
- Modify: `src/messages/en.json`
- Modify: `src/lib/content/calculatorsEn.ts`

**Step 1: Write per-page value checklist**

For each Tier A calculator, list the missing value blocks:

- worked example
- explanation of defaults
- common mistakes
- practical buying/rounding guidance
- stronger internal-link bridge to supporting resources

**Step 2: Add the missing content blocks**

Implement only the smallest number of blocks needed to make the pages feel clearly more helpful than a raw calculator result.

Prefer reusing `CalculatorContent` data in `src/lib/content/calculatorsEn.ts` where possible instead of scattering long-form copy directly in page files.

**Step 3: Reduce review-phase ad pressure**

Ensure Tier A pages are either ad-free during review or limited to one low-intrusion placement according to the final review-mode rule.

**Step 4: Add visible freshness/review cues**

Where the existing component structure allows, add a compact reviewed/updated cue or methodology bridge without cluttering the page.

**Step 5: Validation**

Run:

```bash
npm run lint
npm run audit:local
```

Expected:

- PASS
- no content regressions on the strongest calculators

**Step 6: Commit**

```bash
git add app/[locale]/calculators/home-improvement/deck-mud/page.tsx app/[locale]/calculators/home-improvement/baseboard-trim/page.tsx app/[locale]/calculators/home-improvement/drywall-texture/page.tsx src/messages/en.json src/lib/content/calculatorsEn.ts
git commit -m "feat: deepen tier-a calculator pages for adsense"
```

### Task 6: Deepen Tier A Supporting Resource And Guide Pages

**Files:**
- Modify: `src/lib/content/resourcesEn.ts`
- Modify: `src/lib/content/guidesEn.ts`
- Check: `app/[locale]/resources/[slug]/page.tsx`
- Check: `app/[locale]/guides/home-improvement/tile-waste/page.tsx`

**Step 1: Select the smallest supporting set**

Limit this round to resources/guides that directly strengthen Tier A topics, especially:

- tile waste
- deck mud support content
- any closely paired planning guide already receiving impressions

**Step 2: Rewrite for decision support**

For each selected article, make the top section answer the real decision immediately, then support it with:

- practical ranges
- worked examples
- buying-risk notes
- links back to the relevant calculator

**Step 3: Remove ads from these pages for review**

Resources and guides should not compete with the trust reset. During review they should remain ad-free.

**Step 4: Validation**

Run:

```bash
npm run content:check:resources
npm run lint
```

Expected:

- PASS
- no weak-resource warnings introduced

**Step 5: Commit**

```bash
git add src/lib/content/resourcesEn.ts src/lib/content/guidesEn.ts app/[locale]/resources/[slug]/page.tsx app/[locale]/guides/home-improvement/tile-waste/page.tsx
git commit -m "feat: strengthen tier-a supporting content"
```

### Task 7: Shrink Tier B And Tier C Risk Signals

**Files:**
- Modify: `app/[locale]/calculators/page.tsx`
- Modify: `app/[locale]/guides/page.tsx`
- Modify: `app/[locale]/resources/page.tsx`
- Modify: `app/sitemap.ts`
- Modify: `src/lib/seo.ts`
- Modify: page files identified in `docs/plans/2026-03-24-adsense-page-tier-inventory.md`

**Step 1: Implement internal-prominence changes**

Reduce visibility of Tier B and Tier C pages by:

- removing them from prime homepage placement
- reducing category/list prominence where appropriate
- tightening related-content links so strong pages link to stronger neighbors first

**Step 2: Apply indexation changes for the weakest pages**

Only after prominence is reduced, add `noindex` to clearly identified Tier C pages that do not deserve crawl/index priority in this review cycle.

Avoid broad category or locale-wide `noindex` changes.

**Step 3: Confirm sitemap consistency**

Make sure pages marked `noindex` are handled consistently in sitemap generation and metadata helpers.

**Step 4: Validation**

Run:

```bash
npm run lint
npm run audit:local
```

Expected:

- PASS
- no contradiction between sitemap, canonical, and indexability rules

**Step 5: Commit**

```bash
git add app/[locale]/calculators/page.tsx app/[locale]/guides/page.tsx app/[locale]/resources/page.tsx app/sitemap.ts src/lib/seo.ts
git commit -m "feat: shrink weak-page review signals"
```

### Task 8: Prepare Review Submission Checklist

**Files:**
- Create: `docs/plans/2026-03-24-adsense-review-checklist.md`
- Check: `docs/release-checklist.md`

**Step 1: Write the checklist**

Create a concise review-readiness checklist covering:

- review mode enabled
- homepage/trust pages ad-free
- Tier A pages updated
- Tier C indexation changes live
- sitemap regenerated and reachable
- GSC recrawl requests submitted
- live pages visually checked on production

**Step 2: Add the resubmission timing rule**

Document the rule:

- wait `10-14` days after the live recovery deployment and recrawl requests before reapplying to AdSense

**Step 3: Commit**

```bash
git add docs/plans/2026-03-24-adsense-review-checklist.md
git commit -m "docs: add adsense review readiness checklist"
```

## Final Verification Pass

After all implementation tasks are complete, run:

```bash
npm run lint
npm run content:check:resources
npm run audit:local
```

Expected:

- all commands PASS
- no trust-page rendering issues
- no sitemap/indexability contradictions
- no unexpected ad placements on homepage or trust pages

## Deployment Notes

- Push to the repository to trigger automatic deployment.
- If any `NEXT_PUBLIC_*` value changes in Vercel, trigger a fresh deployment so the new client-side configuration is built into production.
- After production updates, verify the homepage, trust pages, Tier A pages, and one Tier C page manually.

## Rollback Notes

- If traffic-impact concerns appear too severe, roll back the `noindex` subset first, not the trust-page or ad-cleanup improvements.
- Keep homepage and trust pages ad-free even if other parts of the recovery are adjusted.
- Do not restore broad ad coverage before the next review decision.
