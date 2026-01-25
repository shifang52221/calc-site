# Content Plan (Calculator-First)

Goal: improve overall site quality and avoid "thin/duplicate content" by expanding content *from calculators outward* in a consistent, repeatable way.

## Principles

1. **Calculator-first**: each calculator page is the primary "hub" for its topic.
2. **Unique value per page**: a page should not be copy/pasteable to another calculator with only minor word changes.
3. **One topic, one authority page**: generic topics (rounding, waste, unit conversion) should be handled by a single strong reference page or shared component, not duplicated across many thin pages.
4. **No thin resources**: avoid creating short "tip" pages that look like templates. If a page exists, it should be substantial and useful on its own.
5. **EN first**: build depth and consistency for English before scaling depth to other locales.

## Anti-template policy (important)

Passing a minimum word threshold is not the goal. The goal is to avoid low-value content signals:

- Do not force every page to look the same (same section order, same paragraph rhythm, same length).
- Use word ranges (not fixed word counts). Mix shorter dense pages with a few longer deep pages.
- Ensure each calculator has unique value tied to its specific inputs and decisions.

Playbook:
- `docs/calculator-content-playbook.md`

Optional target ranges configuration (used by audits):
- `docs/calculator-content-variants.json`

## Page Layers (What goes where)

### 1) Calculator pages (primary)
**Where it lives**
- UI blocks: `src/components/CalculatorContent.tsx`
- Content data: `src/lib/content/calculatorsEn.ts`

**Required sections per calculator (EN)**
- Quick guide bullets (what to do / what to check)
- How to measure (step-by-step)
- Assumptions (explicit defaults and what can change results)
- Buying tips (practical purchasing / buffer rules)
- Common mistakes (at least a few)
- Last updated

**Strongly recommended**
- Deep dive paragraphs (why the inputs matter; edge cases; what people miss)
- 2-3 "worked examples" (can be implemented either inside `deepDive` or as a dedicated section later)

**Rule**
- Anything included here should be *calculator-specific* (units, defaults, scenarios). Avoid generic copy that could live on every calculator page unchanged.

### 2) Guides (few, long-form)
Use guides for "complete process" articles (measure -> plan -> buy -> execute). These should be long enough to stand alone and should be linked from the relevant calculators.

### 3) Resources (reference pages)
Resources are allowed when they are either:
- A robust reference (tables + explanation + examples + pitfalls), or
- A calculator-specific appendix that cannot be reused unchanged elsewhere.

Avoid short "micro resources". If a resource exists, it should feel like a real article.

## Avoiding duplicates (red lines)
- Do not create one "waste factor" page per calculator.
- Do not create one "rounding" page per calculator.
- Do not create multiple short resources that differ only by swapped nouns.
- If something is generic, centralize it in one page or shared component and link to it.

## Workflow (how we expand safely)

1. **Pick calculators** (start with the highest-intent pages, and fix the thinnest first).
2. **Expand content** in `src/lib/content/calculatorsEn.ts` with calculator-specific guidance.
3. **Add/upgrade supporting pages only if needed**:
   - Prefer expanding an existing guide/resource over creating a new thin one.
4. **Run audits** to keep quality consistent (see below).

## Audits

Run these locally before pushing:

- Calculator content completeness + rough "content size" check:
  - `node scripts/local-calculator-content-audit.mjs --minWords=500`
  - With optional targets and distribution stats:
    - `node scripts/local-calculator-content-audit.mjs --minWords=500 --variants=docs/calculator-content-variants.json`
- Resources "thin content" finder (rough estimate):
  - `node scripts/local-resources-audit.mjs --min=400 --top=30`

Or run the combined check (recommended):
- `npm run content:check`

The audits are intentionally simple. They're there to prevent regressions and to generate a "next pages to improve" list.

