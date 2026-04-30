# Review Surface And Reviewer Signals Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reduce AdSense low-value risk by narrowing the review-phase indexable surface and adding visible Ethan Parker review signals to core content pages.

**Architecture:** Keep the change centralized. `src/lib/reviewPolicy.ts` owns which calculators, guides, and resources are review-phase `noindex` and which core pages get reviewer signals. A small reusable component renders the visible reviewer note on eligible content pages, and existing sitemap generation excludes newly suppressed pages.

**Tech Stack:** Next.js App Router, TypeScript, `next-intl`, local Node tests, ESLint, static sitemap generation

---

### Task 1: Expand Review Policy Tests

**Files:**
- Modify: `src/lib/review-policy.test.mts`

**Steps:**
- Add failing assertions for calculator-level review noindex policy.
- Add failing assertions for core reviewer signal eligibility.
- Run `node --test src/lib/review-policy.test.mts` and confirm it fails because the new policy exports do not exist yet.

### Task 2: Implement Central Review Policy

**Files:**
- Modify: `src/lib/reviewPolicy.ts`

**Steps:**
- Add a narrow keep set of English review-core calculators.
- Add `isReviewNoindexCalculator(locale, calculatorId)`.
- Add `shouldRenderReviewerSignal(kind, locale, id)`.
- Update calculator sorting to de-emphasize suppressed calculators from review-facing lists.
- Run `node --test src/lib/review-policy.test.mts` and confirm it passes.

### Task 3: Apply Calculator Noindex To Sitemap And Metadata

**Files:**
- Modify: `app/sitemap.ts`
- Modify: `app/[locale]/calculators/home-improvement/*/page.tsx`

**Steps:**
- Exclude review-noindex calculators from sitemap.
- Add `robots: { index: false, follow: true }` to noindex calculator metadata.
- Keep the calculator pages live; do not delete routes.

### Task 4: Add Reusable Reviewer Signal

**Files:**
- Create: `src/components/ReviewedBy.tsx`
- Modify: `src/components/CalculatorContent.tsx`
- Modify: `src/components/GuideExtraContent.tsx`
- Modify: `app/[locale]/resources/[slug]/page.tsx`

**Steps:**
- Render an English-only reviewer note on eligible core calculators, guides, and resources.
- Link reviewer note to methodology and editorial policy pages.
- Keep the component visually modest and consistent with existing card styling.

### Task 5: Verify

**Commands:**
- `node --test src/lib/review-policy.test.mts src/messages/trust-pages-structure.test.mts src/messages/homepage-structure.test.mts src/messages/core-pages-review-notes.test.mts`
- `npm run lint`
- `npm run audit:local`

**Expected:** all commands pass, sitemap build remains clean, no review-suppressed pages appear in generated sitemap logic.
