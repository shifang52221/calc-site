# GSC Round 2 SEO Optimization Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Turn the latest 7-day GSC visibility gains into more clicks by improving high-impression, low-CTR calculators and resources first, then expanding the deck-mud content cluster that is already performing.

**Architecture:** Keep this round focused on intent matching, not broad sitewide rewrites. Update the highest-leverage English metadata and above-the-fold copy first, add small content modules where GSC shows missing search-intent coverage, then run local validation to confirm no SEO or content regressions.

**Tech Stack:** Next.js App Router, `next-intl`, localized copy in `src/messages/en.json`, long-form resource content in `src/lib/content/resourcesEn.ts`, guide content in `src/lib/content/guidesEn.ts`, local audit scripts in `scripts/*.mjs`

---

## Latest GSC Snapshot To Optimize Against

- Window: `2026-03-08` to `2026-03-14`
- Total: `21` clicks, `1,856` impressions, `1.13%` CTR, weighted average position `11.46`
- Highest-leverage page: `/en/calculators/home-improvement/baseboard-trim` with `658` impressions, `1` click, `0.15%` CTR, average position `10.01`
- Strongest validated page: `/en/calculators/home-improvement/deck-mud` with `404` impressions, `14` clicks, `3.47%` CTR, average position `9.83`
- Best near-term resource opportunity: `/en/resources/tile-waste-percentage-guide` with `156` impressions, `0` clicks, average position `7.6`
- Confirmed winning signal: `deck mud calculator` at position `2.71`
- Confirmed intent gap: `deck mud calculator square feet` at position `2.93` with `27` impressions and `0` clicks

## Round 2 Priority Order

1. Baseboard calculator CTR fix
2. Tile waste resource CTR fix
3. Deck mud cluster expansion
4. Observe drywall texture for another data cycle before major changes

### Task 1: Rework Baseboard Calculator Search Intent

**Files:**
- Modify: `src/messages/en.json`
- Check: `app/[locale]/calculators/home-improvement/baseboard-trim/page.tsx`

**Why this task matters**

The page already sits on the page-1 boundary with very high impressions. This is the fastest place to gain clicks without needing a ranking breakthrough.

**Step 1: Rewrite the metadata around purchase intent**

Update the `baseboardTrim` block in `src/messages/en.json` so the metadata leads with the user outcome:

- Use a title pattern closer to: `Baseboard Calculator (Linear Feet, 8 ft / 12 ft Pieces, Waste)`
- Use a description pattern closer to: `Calculate how much baseboard you need by wall length, door openings, waste, and stock length. Estimate linear feet and piece count before you buy trim.`

**Step 2: Tighten the visible subtitle and results note**

Make the above-the-fold copy reinforce the same query family:

- `how much baseboard do i need`
- `baseboard linear feet`
- `how much extra baseboard to buy for waste`
- `8 ft or 12 ft baseboard`

Avoid generic wording like `optional cost` in the first sentence if it pushes buying-intent terms too far down.

**Step 3: Strengthen FAQ for search phrasing**

Revise the three existing FAQ answers so they explicitly mention:

- subtracting door openings
- choosing `8 ft` versus `12 ft` pieces
- typical waste ranges for rooms with many corners and miter cuts

Keep the answers concise and SERP-friendly.

**Step 4: Verify no separate content module is needed**

Open `app/[locale]/calculators/home-improvement/baseboard-trim/page.tsx` and confirm the page does not need an extra comparison block. If the page body is very thin above the fold, add a follow-up task for a compact `8 ft vs 12 ft trim pieces` helper section in a later round.

**Step 5: Validation**

Run:

```bash
npm run lint
```

Expected:

- PASS with no JSON/content lint issues

**Step 6: Commit**

```bash
git add src/messages/en.json app/[locale]/calculators/home-improvement/baseboard-trim/page.tsx
git commit -m "feat: improve baseboard calculator CTR intent"
```

### Task 2: Reposition the Tile Waste Resource for Clicks

**Files:**
- Modify: `src/lib/content/resourcesEn.ts`

**Why this task matters**

The page has enough visibility and ranking to earn clicks now. The current problem is likely SERP attractiveness and intent specificity, not discovery.

**Step 1: Rewrite title and description around decision-making**

Update `tile-waste-percentage-guide` so the title and description explicitly speak to the `10% or 15%` decision:

- Suggested title direction: `Tile Waste Percentage Guide (Should You Buy 10% or 15% Extra?)`
- Suggested description direction: `Use practical tile overage rules for straight lay, diagonal, and patterned installs. See when 10%, 15%, or more makes sense before ordering boxes.`

**Step 2: Strengthen the opening section**

Make the first visible section answer the main decision immediately:

- simple room: usually `7-10%`
- diagonal: usually `12-15%`
- complex pattern / matching risk: usually `15-20%+`

Avoid burying the recommendation under explanation.

**Step 3: Add one short buying-risk section**

Add a concise section or bullets for:

- dye lot / caliber mismatch risk
- box rounding
- return-policy check before ordering

This supports commercial intent and improves click-to-satisfaction match.

**Step 4: Validation**

Run:

```bash
npm run content:check:resources
```

Expected:

- PASS
- resource remains above minimum content threshold
- no new duplicate or weak-content warnings for this article

**Step 5: Commit**

```bash
git add src/lib/content/resourcesEn.ts
git commit -m "feat: sharpen tile waste resource CTR copy"
```

### Task 3: Expand the Deck Mud Cluster Around Proven Query Demand

**Files:**
- Modify: `src/messages/en.json`
- Modify: `src/lib/content/resourcesEn.ts`
- Check: `app/[locale]/calculators/home-improvement/deck-mud/page.tsx`

**Why this task matters**

This is the clearest validated topic cluster in the current dataset. The main calculator is already winning, and GSC shows adjacent queries that are ranking but not converting.

**Step 1: Tune the deck mud calculator metadata for secondary intents**

Keep the current shower-pan framing, but ensure the metadata and visible copy also cover:

- `square feet`
- `coverage`
- `bag count`
- `dry pack mortar`

Do not remove `shower pan`; add the adjacent terms naturally.

**Step 2: Add one compact helper module or FAQ answer**

In the deck mud calculator page or supporting copy, add a short, concrete explanation for:

- how to estimate by square feet and thickness
- why sloped pans use average thickness
- when to round up bag count

This should directly target the `deck mud calculator square feet` zero-click opportunity.

**Step 3: Strengthen the deck mud coverage resource**

Update `deck-mud-coverage-chart` to better bridge users into the calculator by explicitly mentioning:

- common `sq ft` examples
- `1 inch`, `1.5 inch`, `2 inch` thickness scenarios
- bag-planning intent

Add one internal-link sentence near the top that points back to the calculator.

**Step 4: Consider a future split only if needed**

Do not create a new page in this round. First see whether stronger intent coverage on the existing calculator and resource can absorb:

- `deck mud calculator square feet`
- `deck mud coverage`
- `deck mud coverage chart`
- `floor mud calculator`

Only split into a dedicated `floor mud` page if the next data pull shows impressions growing without click gains.

**Step 5: Validation**

Run:

```bash
npm run lint
npm run audit:local
```

Expected:

- PASS
- no content regressions
- build succeeds

**Step 6: Commit**

```bash
git add src/messages/en.json src/lib/content/resourcesEn.ts app/[locale]/calculators/home-improvement/deck-mud/page.tsx
git commit -m "feat: expand deck mud search intent coverage"
```

### Task 4: Hold Drywall Texture Steady And Recheck Next Cycle

**Files:**
- No change unless the next 7-day pull weakens materially

**Why this task matters**

`/en/calculators/home-improvement/drywall-texture` is currently healthy relative to the site average. Changing it again immediately would add noise before the last optimization cycle has time to settle.

**Step 1: Leave current metadata as-is**

Do not revise `drywallTexture` copy in this round.

**Step 2: Recheck after one more full 7-day window**

If the next pull still shows:

- average position better than `8`
- CTR at or above `3%`

then keep it stable.

If impressions rise but CTR drops below `2%`, revisit title specificity.

### Task 5: Post-Release Verification And Measurement

**Files:**
- No code changes
- Optional note in: `docs/release-checklist.md`

**Step 1: Run final validation**

Run:

```bash
npm run lint
npm run audit:local
```

Expected:

- PASS
- no build failures
- no new content audit regressions

**Step 2: Record the comparison window**

When the next GSC export is available, compare:

- `2026-03-08` to `2026-03-14`
- against the next full 7-day post-change window

Track these page-level KPIs:

- `/en/calculators/home-improvement/baseboard-trim`
- `/en/resources/tile-waste-percentage-guide`
- `/en/calculators/home-improvement/deck-mud`
- `/en/resources/deck-mud-coverage-chart`

**Step 3: Success criteria**

Treat this round as successful if:

- baseboard CTR improves from `0.15%` to `0.6%+`
- tile waste resource gets its first meaningful clicks without losing page-1 positioning
- deck mud cluster impressions expand while maintaining positive click growth

## Notes For The Implementer

- Keep this round small. Do not broaden into unrelated calculator rewrites.
- Prefer intent clarity over clever copy.
- Reuse the existing winning pattern from `deck-mud` and `drywall-texture`: plain-language titles with concrete material/planning terms.
- Watch for `www` and non-`www` duplicates in future GSC exports, but do not interrupt this round unless live audits show canonical mismatches.

Plan complete and saved to `docs/plans/2026-03-16-gsc-round-2-seo-plan.md`. Two execution options:

**1. Subagent-Driven (this session)** - I dispatch fresh subagent per task, review between tasks, fast iteration

**2. Parallel Session (separate)** - Open new session with executing-plans, batch execution with checkpoints

Which approach?
