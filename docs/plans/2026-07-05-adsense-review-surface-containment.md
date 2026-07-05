# AdSense Review Surface Containment Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reduce the AdSense re-review surface so reviewers starting from the English homepage see only a small, high-confidence set of English pages, with no direct links to noindex calculators or non-primary language layers.

**Architecture:** Keep the existing Next.js App Router and review policy module as the source of truth. Add small review-policy helpers for core calculator/category/guide/resource visibility, use those helpers in homepage and index pages, apply noindex metadata to non-indexed locale pages, and add an audit script that crawls from `/en` to catch future review-surface leaks.

**Tech Stack:** Next.js 16 App Router, TypeScript, next-intl, Node test runner, existing audit scripts.

---

### Task 1: Lock The Review Surface In Tests

**Files:**
- Modify: `src/lib/reviewPolicy.ts`
- Modify: `src/lib/review-policy.test.mts`

**Step 1: Write failing tests**

Add tests that require:
- Homepage calculator cards can be derived from review-filtered calculators, excluding `wallpaperRolls`, `mulch`, `roofing`, `deck`, `fence`, `gravel`, `soilMix`, and other noindex calculators.
- Review-visible calculator categories only include categories that still have review-visible calculators.
- English review-visible guides are only the focused guide set.
- English review-visible resources are only the focused resource set.
- Non-English locales are treated as non-indexed for review.

Run:

```bash
node --test src/lib/review-policy.test.mts
```

Expected: fail until the new helper functions exist.

**Step 2: Implement policy helpers**

Add helpers to `src/lib/reviewPolicy.ts`:
- `isIndexedReviewLocale(locale)`
- `isReviewVisibleCalculator(locale, calculatorId)`
- `isReviewVisibleGuide(locale, guideId)`
- `isReviewVisibleResource(locale, slug)`
- `sortReviewVisibleCalculators(items, locale)`
- `sortReviewVisibleGuides(items, locale)`
- `sortReviewVisibleResources(items, locale)`
- `filterReviewVisibleCategories(categories, calculators, locale)`

Keep existing noindex helpers for page-level metadata compatibility.

**Step 3: Re-run tests**

Run:

```bash
node --test src/lib/review-policy.test.mts
```

Expected: pass.

---

### Task 2: Apply Review Visibility To Navigation Surfaces

**Files:**
- Modify: `app/[locale]/page.tsx`
- Modify: `app/[locale]/calculators/page.tsx`
- Modify: `app/[locale]/calculators/[category]/page.tsx`
- Modify: `app/[locale]/guides/page.tsx`
- Modify: `app/[locale]/resources/page.tsx`

**Step 1: Write/extend tests where practical**

Use review policy tests to cover the data filtering behavior that these pages should consume. Do not try to snapshot full React pages.

**Step 2: Update homepage**

Replace `CALCULATOR_CARDS.map(...)` with review-visible calculators derived from `CALCULATORS`, so homepage can no longer link directly to noindex calculators.

**Step 3: Update calculators index**

Show only review-visible categories and calculators during review. Category chips should not point to empty or non-core category pages.

**Step 4: Update category pages**

If a category has no review-visible calculators, show `notFound()`. Related guide blocks must use review-visible guides, not the full category guide set.

**Step 5: Update guides/resources index pages**

Use review-visible guide/resource helpers so non-core guides and long-tail resources do not become primary review-surface links.

---

### Task 3: Mark Non-Indexed Locale Pages As Noindex

**Files:**
- Modify: `src/lib/seo.ts`
- Modify or create: `src/lib/seo.test.mts`

**Step 1: Write failing metadata helper test**

Add a pure helper such as:
- `getRobotsForLocale(locale)`

It should return `{ index: false, follow: true }` for locales outside `getIndexedLocales()` and `undefined` for English by default.

Run:

```bash
node --test src/lib/seo.test.mts
```

Expected: fail until helper exists.

**Step 2: Apply helper to locale layout metadata**

Add metadata at the locale layout level so `/es`, `/zh-TW`, and their child pages are explicitly noindex while English remains indexable.

**Step 3: Re-run tests**

Run:

```bash
node --test src/lib/seo.test.mts src/lib/review-policy.test.mts
```

Expected: pass.

---

### Task 4: Add Review Surface Crawl Audit

**Files:**
- Create: `scripts/review-surface-audit.mjs`
- Modify: `package.json`

**Step 1: Create audit script**

The script should crawl from `https://homedecorcalc.com/en` by default and report:
- total crawled pages
- noindex pages reachable from `/en`
- non-English pages reachable from `/en`
- pages outside the approved review path allowlist
- first referring URL for each violation

**Step 2: Add npm script**

Add:

```json
"audit:review-surface": "node scripts/review-surface-audit.mjs"
```

**Step 3: Run locally against live site first**

Run:

```bash
npm run audit:review-surface
```

Expected before deployment: fail on current live site, proving the audit catches the known homepage noindex leaks.

---

### Task 5: Verify Build And Local Behavior

**Files:**
- No new files unless tests reveal drift.

**Step 1: Run focused tests**

Run:

```bash
node --test src/lib/review-policy.test.mts src/lib/seo.test.mts
```

Expected: pass.

**Step 2: Run build**

Run:

```bash
npm run build
```

Expected: pass.

**Step 3: Run existing audit**

Run:

```bash
npm run audit:live
```

Expected: current live site may still show old deployed behavior until deployed, but should remain technically clean. After deployment, run `npm run audit:review-surface` again and require zero reachable noindex/non-English violations before submitting AdSense.

