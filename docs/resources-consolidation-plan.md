# Resources consolidation plan (pillars + redirects)

Goal: reduce low-value/thin resource pages by consolidating “micro” articles into fewer, stronger pillar resources, using permanent redirects for the old slugs.

## Rules (do every batch)

- Expand/upgrade the pillar first (merge unique tips, tables, examples).
- Add 308 permanent redirects for micro slugs in `docs/resources-redirects.json`.
- Remove redirected slugs from:
  - `Resources` listing page
  - sitemap
  - homepage featured resources
- Verify:
  - `node scripts/local-resources-audit.mjs --min=400 --top=30`
  - `node scripts/local-duplicate-audit.mjs`
  - `npm run build`

## Batch 1 (done): paint consolidation

Redirected micro resources:

- `paint-coverage-per-gallon-guide` → `paint-planning-complete-guide`
- `ceiling-paint-cut-in-buffer` → `paint-planning-complete-guide`
- `trim-paint-area-from-linear-feet` → `paint-trim-enamel-selection-and-prep`

Pillar upgrades:

- `paint-planning-complete-guide`: added coverage/ceiling buffer bullets.
- `paint-trim-enamel-selection-and-prep`: added linear-feet-to-area method and common misses.

## Batch 2 (proposed): 24 micro resources to consolidate

Note: when implementing, merge each micro article’s unique content into its target pillar before enabling the redirect.

### Drywall (8)

- `drywall-board-types-fire-moisture-and-sound` → `drywall-materials-and-finishing-guide`
- `drywall-ceiling-thickness-guide` → `drywall-materials-and-finishing-guide`
- `drywall-finish-levels-0-5` → `drywall-materials-and-finishing-guide`
- `drywall-mud-and-tape-estimating` → `drywall-materials-and-finishing-guide`
- `drywall-sheets-for-room-size` → `drywall-materials-and-finishing-guide`
- `drywall-sheet-sizes-4x8-4x10-4x12` → `drywall-materials-and-finishing-guide`
- `drywall-texture-coverage-guide` → `drywall-materials-and-finishing-guide`
- `drywall-waste-factor-guide` → `drywall-materials-and-finishing-guide`

### Tile (5)

- `tile-box-coverage-checklist` → `tile-project-planning-guide`
- `tile-layout-pattern-waste` → `tile-project-planning-guide`
- `tile-waste-percentage-guide` → `tile-project-planning-guide`
- `tile-grout-coverage-guide` → `tile-grout-selection-and-coverage-guide`
- `tile-grout-sanded-vs-unsanded` → `tile-grout-selection-and-coverage-guide`

### Deck (5)

- `deck-framing-checklist-joists-beams-posts` → `deck-planning-materials-and-layout-guide`
- `deck-diagonal-waste-guide` → `deck-planning-materials-and-layout-guide`
- `deck-board-gap-and-coverage` → `deck-planning-materials-and-layout-guide`
- `deck-mud-mix-ratio-guide` → `deck-mud-coverage-chart`
- `deck-mud-slope-per-foot` → `deck-mud-coverage-chart`

### Topsoil (3)

- `topsoil-bag-coverage-guide` → `topsoil-coverage-chart`
- `topsoil-bag-liters-to-cubic-feet` → `topsoil-coverage-chart`
- `topsoil-leveling-feathering-guide` → `topsoil-leveling-step-by-step-guide`

### Gravel (1)

- `gravel-tons-vs-tonnes` → `gravel-yards-to-tons-guide`

### Concrete (2)

- `concrete-volume-per-100-sq-ft` → `concrete-bag-yield-guide`
- `concrete-thickened-edge-volume` → `concrete-bag-yield-guide`
