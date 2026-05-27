# AdSense Review Refinement Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Improve HomeDecorCalc's AdSense re-review readiness by fixing remaining URL consistency risks, strengthening high-opportunity English pages, improving focused internal links, and verifying the final production review surface.

**Architecture:** Keep the review surface focused on strong English pages. Use existing Next.js middleware, metadata helpers, review policy utilities, content data files, and audit scripts instead of introducing a new SEO layer. Add tests around redirect and review-surface behavior where practical, then make tightly scoped content and linking edits.

**Tech Stack:** Next.js 16 App Router, TypeScript, next-intl, Node test runner, ESLint, existing local/live audit scripts.

---

### Task 1: Add Redirect And Canonical Regression Coverage

**Files:**
- Modify: `proxy.ts`
- Create or modify: `src/lib/url-policy.test.mts`
- Modify if needed: `package.json` only if an existing test script needs to include the new test, otherwise use direct `node --test`.

**Step 1: Write the failing/guard test**

Create a test that documents the review-critical URL behavior:

- `www.homedecorcalc.com/en/calculators/home-improvement/baseboard-trim` redirects to `https://homedecorcalc.com/en/calculators/home-improvement/baseboard-trim`.
- `/guides/home-improvement/drywall-ceiling` redirects to `/en/guides/home-improvement/drywall-ceiling`.
- `/resources/tile-waste-percentage-guide` redirects to `/en/resources/tile-waste-percentage-guide`.
- `/calculators/home-improvement/deck-mud` redirects to `/en/calculators/home-improvement/deck-mud`.
- `/sitemap.xml`, `/robots.txt`, static assets, and `/_next/...` should not be locale-prefixed by middleware.

If testing `proxy.ts` directly is awkward because of Next request objects, extract pure helpers such as `getCanonicalHost`, `hasLocalePrefix`, and a small `resolveRedirectUrl({ host, pathname, search })` function from the middleware logic. Test that pure helper.

**Step 2: Run the test**

Run:

```bash
node --test src/lib/url-policy.test.mts
```

Expected: fail if helper does not exist, or pass if current behavior is already encoded cleanly.

**Step 3: Implement minimal policy/helper changes**

Keep middleware behavior equivalent unless a gap is found. Make sure public metadata files remain exempt from locale prefixing:

- `/robots.txt`
- `/sitemap.xml`
- `/ads.txt` if present
- `/opengraph-image`
- `/twitter-image`

**Step 4: Run the redirect/canonical test again**

Run:

```bash
node --test src/lib/url-policy.test.mts
```

Expected: pass.

**Step 5: Commit**

```bash
git add proxy.ts src/lib/url-policy.test.mts
git commit -m "test: cover review url redirects"
```

---

### Task 2: Strengthen Review Policy And Sitemap Tests

**Files:**
- Modify: `src/lib/review-policy.test.mts`
- Modify if needed: `src/lib/reviewPolicy.ts`
- Modify if needed: `app/sitemap.ts`

**Step 1: Expand review policy assertions**

Add assertions for the exact review surface:

- English core calculators remain indexable: `deckMud`, `baseboardTrim`, `drywallTexture`, `tile`, `paint`.
- English weak calculators remain noindex: `wallpaperRolls`, `soilMix`, `asphaltDriveway`.
- Spanish and Traditional Chinese calculator pages remain noindex.
- Reviewer signal appears only on English core review pages.
- Review resources include `deck-mud-coverage-chart`, `baseboard-trim-waste-tips`, and `tile-project-planning-guide`.

**Step 2: Run policy tests**

Run:

```bash
node --test src/lib/review-policy.test.mts
```

Expected: pass after policy aligns with the desired review surface.

**Step 3: Adjust policy only if tests reveal drift**

Do not broaden the indexed surface unless there is a specific design reason. Keep the review-period surface conservative.

**Step 4: Commit**

```bash
git add src/lib/review-policy.test.mts src/lib/reviewPolicy.ts app/sitemap.ts
git commit -m "test: lock review surface policy"
```

---

### Task 3: Improve Baseboard Trim Calculator For CTR And Usefulness

**Files:**
- Modify: `src/messages/en.json`
- Modify: `src/lib/content/calculatorsEn.ts`
- Modify if needed: `src/lib/content/resourcesEn.ts`
- Test: existing content audits and message tests.

**Step 1: Review current metadata and page copy**

Inspect:

- `src/messages/en.json` keys under `calculators.baseboardTrim`
- `src/lib/content/calculatorsEn.ts` entry `baseboardTrim`
- `src/lib/content/resourcesEn.ts` article `baseboard-trim-waste-tips`

**Step 2: Update metadata and above-the-fold text**

Revise English copy to target:

- `baseboard trim calculator`
- `baseboard linear feet calculator`
- `baseboard molding calculator`
- `piece count`
- `8 ft vs 12 ft stock`
- `door openings`
- `waste factor`

Keep language helpful, not keyword-stuffed. Make the title and description more click-worthy for a user deciding whether the result answers their exact measuring problem.

**Step 3: Add practical measurement depth**

In `calculatorsEn.ts`, strengthen:

- quick tips
- deep-dive worked example
- measurement steps
- common mistakes

Focus on cut plan, stock length, doors/casings, inside/outside corners, scarf joints, shoe molding, and return pieces.

**Step 4: Strengthen related link path**

Ensure baseboard calculator content or existing related UI naturally points to:

- `/en/resources/baseboard-trim-waste-tips`
- `/en/methodology`
- `/en/editorial-policy` where reviewer component already links.

**Step 5: Run local content checks**

Run:

```bash
npm run content:check:calc
node --test src/messages/core-pages-review-notes.test.mts
```

Expected: pass, no thin calculator content.

**Step 6: Commit**

```bash
git add src/messages/en.json src/lib/content/calculatorsEn.ts src/lib/content/resourcesEn.ts
git commit -m "feat: refine baseboard trim review page"
```

---

### Task 4: Refine Tile Waste And Tile Planning Cluster

**Files:**
- Modify: `src/lib/content/resourcesEn.ts`
- Modify: `src/lib/content/guidesEn.ts`
- Modify: `src/messages/en.json`
- Modify if needed: `docs/resources-redirects.json` only if URL behavior is wrong.

**Step 1: Confirm active URL behavior locally**

Verify whether `tile-waste-percentage-guide` is redirected to `tile-project-planning-guide` or still directly rendered. Use existing redirect map and route code:

- `docs/resources-redirects.json`
- `app/[locale]/resources/[slug]/page.tsx`
- `src/lib/content/resourcesEn.ts`

Do not change public URLs without a deliberate redirect.

**Step 2: Improve the active tile planning page**

Whichever resource is final and indexable for tile waste intent should clearly cover:

- tile waste percentage
- tile overage
- 10% vs 15% vs 20%
- box rounding
- shower walls vs floors
- niches, outlets, diagonals, herringbone, large-format tile
- dye lot / caliber matching

**Step 3: Improve guide support copy**

Strengthen `tile-waste` guide extra content and any English guide metadata that appears in `src/messages/en.json`.

**Step 4: Strengthen internal links**

Ensure focused links among:

- `/en/calculators/home-improvement/tile`
- `/en/guides/home-improvement/tile-waste`
- `/en/resources/tile-project-planning-guide`

Avoid linking to redirected micro URLs from prominent areas unless there is a specific reason.

**Step 5: Run resource and guide checks**

Run:

```bash
npm run content:check:resources
node scripts/local-guide-content-audit.mjs --minWords=600 --top=20
node --test src/lib/recovery-content.test.mts src/lib/review-policy.test.mts
```

Expected: pass.

**Step 6: Commit**

```bash
git add src/lib/content/resourcesEn.ts src/lib/content/guidesEn.ts src/messages/en.json docs/resources-redirects.json
git commit -m "feat: refine tile waste planning cluster"
```

---

### Task 5: Lightly Improve Deck Mud Cluster Without Disrupting Winning Page

**Files:**
- Modify: `src/messages/en.json`
- Modify: `src/lib/content/calculatorsEn.ts`
- Modify: `src/lib/content/resourcesEn.ts`

**Step 1: Inspect current deck mud copy**

Review:

- `deckMud` calculator metadata and content
- `deck-mud-coverage-chart` resource
- related links around deck mud resources

**Step 2: Add targeted support for Search Console query variants**

Add natural coverage for:

- square feet
- deck mud coverage chart
- dry pack calculator
- floor mud calculator
- mud bed calculator
- average thickness for slope
- bag yield and round-up

Avoid changing the core calculator title drastically because it already performs well.

**Step 3: Improve internal links**

Ensure deck mud calculator and coverage chart link to each other and methodology. Keep links focused.

**Step 4: Run tests/checks**

Run:

```bash
npm run content:check:calc
npm run content:check:resources
node --test src/lib/recovery-content.test.mts src/messages/core-pages-review-notes.test.mts
```

Expected: pass.

**Step 5: Commit**

```bash
git add src/messages/en.json src/lib/content/calculatorsEn.ts src/lib/content/resourcesEn.ts
git commit -m "feat: strengthen deck mud search intent"
```

---

### Task 6: Protect And Lightly Improve Drywall Texture Page

**Files:**
- Modify: `src/messages/en.json`
- Modify: `src/lib/content/calculatorsEn.ts`
- Modify if needed: `src/lib/content/resourcesEn.ts`

**Step 1: Inspect drywall texture copy**

Review current `drywallTexture` metadata, quick tips, assumptions, and internal links.

**Step 2: Make low-risk clarity improvements**

Add or refine practical guidance around:

- texture type
- coverage rate differences
- spray vs hand application
- knockdown/orange peel/popcorn distinctions where relevant
- testing a small area before buying too little

Do not change the page URL or calculator behavior.

**Step 3: Run checks**

Run:

```bash
npm run content:check:calc
node --test src/messages/core-pages-review-notes.test.mts
```

Expected: pass.

**Step 4: Commit**

```bash
git add src/messages/en.json src/lib/content/calculatorsEn.ts src/lib/content/resourcesEn.ts
git commit -m "feat: polish drywall texture review page"
```

---

### Task 7: Add Focused AdSense Readiness Audit Checks

**Files:**
- Modify: `scripts/adsense-audit.mjs`
- Modify: `scripts/live-sitemap-audit.mjs` if needed.
- Create or modify docs output under `docs/audits/` only from running scripts; do not commit generated audit output unless it is intentionally useful.

**Step 1: Review current audit coverage**

Check whether audits already report:

- noindex pages in sitemap
- canonical mismatch
- missing canonical
- non-200 URLs
- reviewer signal absence on core pages
- unexpected `www` final URLs

**Step 2: Add checks only where missing**

If needed, add a small list of review-critical URLs to `adsense-audit.mjs`:

- `/en`
- `/en/about`
- `/en/methodology`
- `/en/editorial-policy`
- `/en/calculators/home-improvement/deck-mud`
- `/en/calculators/home-improvement/baseboard-trim`
- `/en/calculators/home-improvement/drywall-texture`
- `/en/resources/deck-mud-coverage-chart`
- `/en/resources/baseboard-trim-waste-tips`
- `/en/resources/tile-project-planning-guide`
- `/en/guides/home-improvement/tile-waste`

Flag missing reviewer signal only for pages where `shouldRenderReviewerSignal` should apply.

**Step 3: Run audit locally if it does not require production**

Run:

```bash
npm run audit:local
```

Expected: pass.

**Step 4: Commit**

```bash
git add scripts/adsense-audit.mjs scripts/live-sitemap-audit.mjs
git commit -m "chore: tighten adsense readiness audit"
```

---

### Task 8: Full Local Verification

**Files:**
- No planned source edits unless failures reveal required fixes.

**Step 1: Run all targeted tests**

Run:

```bash
node --test src/lib/url-policy.test.mts src/lib/review-policy.test.mts src/lib/recovery-content.test.mts src/messages/trust-pages-structure.test.mts src/messages/homepage-structure.test.mts src/messages/core-pages-review-notes.test.mts
```

Expected: all pass.

**Step 2: Run lint**

Run:

```bash
npm run lint
```

Expected: exit 0.

**Step 3: Run local audit/build**

Run:

```bash
npm run audit:local
```

Expected: exit 0, no duplicate groups, no thin calculator/resource/guide failures, build succeeds.

**Step 4: Inspect local build artifacts for critical noindex/reviewer behavior**

Check static output for:

- deck mud: reviewer present, no noindex
- baseboard trim: reviewer present, no noindex
- wallpaper rolls: noindex present
- Spanish deck mud: noindex present

**Step 5: Commit any fixes**

If verification required fixes, commit them:

```bash
git add <fixed files>
git commit -m "fix: address review verification issues"
```

---

### Task 9: Push And Production Verification

**Files:**
- No source edits unless production verification reveals a release blocker.

**Step 1: Push**

Run:

```bash
git push origin master
```

**Step 2: Wait for deployment and verify production**

Use `Invoke-WebRequest` checks for:

- `https://homedecorcalc.com/en/calculators/home-improvement/deck-mud`
- `https://homedecorcalc.com/en/calculators/home-improvement/baseboard-trim`
- `https://homedecorcalc.com/en/calculators/home-improvement/drywall-texture`
- `https://homedecorcalc.com/en/calculators/home-improvement/wallpaper-rolls`
- `https://homedecorcalc.com/es/calculators/home-improvement/deck-mud`
- `https://homedecorcalc.com/sitemap.xml`
- `https://www.homedecorcalc.com/en/calculators/home-improvement/baseboard-trim`
- `https://homedecorcalc.com/guides/home-improvement/drywall-ceiling`

Expected:

- Core pages 200, non-www final URL, canonical final URL, no `noindex`, reviewer signal present where expected.
- Weak/noindex pages include `noindex`.
- Sitemap contains core pages and excludes noindex calculator pages.
- `www` redirects permanently to non-www.
- Missing-locale path redirects permanently to `/en/...`.

**Step 3: Run live audit**

Run:

```bash
npm run audit:live
```

Expected: no release-blocking canonical, noindex, non-200, or duplicate-review-surface issues.

**Step 4: Final re-review recommendation**

If all checks pass, advise:

- Resubmit sitemap in Google Search Console.
- Request indexing for homepage, trust pages, core calculators, core guides/resources.
- Wait for recrawl signals before submitting AdSense if Search Console still shows stale URL variants.
- Submit AdSense re-review only after the live gate is clean.

