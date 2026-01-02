# SEO + UX Plan (steady rollout)

## Recommended defaults (phase 1)

- Primary market assumption: **US-first** (most “home improvement calculator” intent is US-heavy).
- Locale strategy: keep `en` as default, ship `es` + `zh-TW` as incremental coverage (already present).
- Unit system: default **Imperial** for `en` with an obvious toggle; remember last choice (cookie/query) to match user expectation.
- Rollout principle: **calculator detail pages first** (most traffic lands there from Google), then guides, then index pages, then homepage polish.

## Key page types and “first screen” (above-the-fold) requirements

### 1) Calculator detail page (highest priority)

**Goal:** user can start calculating immediately; Google can understand the page topic immediately.

Above the fold:
- `H1`: exact intent phrase (e.g. “Topsoil Calculator”).
- 1–2 sentence lead: what it calculates + common units (yards/tons, ft/in).
- Inputs panel: defaults + examples + unit toggle (Imperial/Metric).
- Primary CTA: “Calculate” (or auto-calc with debounce) + “Copy link” for sharing.
- Result summary: one compact card with 2–4 headline outputs (then full breakdown below).

Below the fold:
- Explanation sections with `H2`/`H3` (indexed, scannable).
- Assumptions + adjustable parameters (e.g., density) with plain-language notes.
- FAQ (real questions; avoid fluff).
- “Related calculators” + “Related guides” (internal linking cluster).

SEO structure (per calculator):
- One `H1`, then meaningful `H2` sections (How it works, Assumptions, FAQ, Related).
- Canonical + `alternates` for locales.
- Structured data:
  - `WebPage` + `BreadcrumbList`
  - Optional `FAQPage` if FAQs exist and are visible.
  - Optional `SoftwareApplication` for the calculator tool (only if the page is truly interactive and the description matches).

### 2) Guide detail page

Above the fold:
- `H1` + short summary + “What you’ll learn” bullets.
- A small “Quick calculator links” block near the top (internal linking + utility).

Below the fold:
- Long-form content with clean `H2` sections.
- FAQ only if needed (avoid duplicate across pages).
- “Related calculators” + “Related guides” at the end.

Structured data:
- `Article` (or `HowTo` when the page is truly step-by-step).

### 3) Calculators index / category index

Above the fold:
- `H1` + one-sentence scope.
- Search box + category pills (fast filtering).
- “Most popular” shortlist (first 6–9) before the full grid.

### 4) Homepage

Above the fold:
- Clear value proposition + one strong CTA into calculators.
- “Most used calculators” grid.
- A secondary section for guides (optional).

## Steady rollout checklist

Phase A (foundation)
- Lock a single calculator page as the “golden template” (recommend: **Topsoil**).
- Ensure unit defaults + toggles feel native for US users.
- Add/confirm consistent headings + internal linking blocks.

Phase B (scale)
- Apply the same template to other calculators.
- Apply guide template and connect clusters (calculator ↔ guide).

Phase C (polish)
- Improve homepage/index page hierarchy.
- Add “trust” microcopy (assumptions, disclaimers, update date).

