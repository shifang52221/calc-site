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

- `paint-coverage-per-gallon-guide` -> `paint-planning-complete-guide`
- `ceiling-paint-cut-in-buffer` -> `paint-planning-complete-guide`
- `trim-paint-area-from-linear-feet` -> `paint-trim-enamel-selection-and-prep`

Pillar upgrades:

- `paint-planning-complete-guide`: added coverage/ceiling buffer details.
- `paint-trim-enamel-selection-and-prep`: added linear-feet-to-area method and common misses.

## Batch 2 (done): 24 micro resources to consolidate

Pillar upgrades completed (high level):

- `drywall-materials-and-finishing-guide`: finish levels, board types, ceiling guidance, waste ranges, room-size sanity checks.
- `deck-planning-materials-and-layout-guide`: diagonal/border waste table and framing checklist.
- `deck-mud-coverage-chart`: mix ratio and slope/average-thickness guidance.
- `tile-project-planning-guide`: box-coverage checklist and waste-reduction tips; removed links to redirected micro resources.
- `tile-grout-selection-and-coverage-guide`: coverage drivers and sanded-vs-unsanded checklist; removed links to redirected micro resources.
- `topsoil-coverage-chart`: bag conversions (liters/cubic feet) and worked example.
- `topsoil-leveling-step-by-step-guide`: feathering workflow and checklist.
- `concrete-bag-yield-guide`: slab volume table and thickened-edge notes/examples.
- `gravel-yards-to-tons-guide`: tons-vs-tonnes unit clarification.

### Drywall (8)

- `drywall-board-types-fire-moisture-and-sound` -> `drywall-materials-and-finishing-guide`
- `drywall-ceiling-thickness-guide` -> `drywall-materials-and-finishing-guide`
- `drywall-finish-levels-0-5` -> `drywall-materials-and-finishing-guide`
- `drywall-mud-and-tape-estimating` -> `drywall-materials-and-finishing-guide`
- `drywall-sheets-for-room-size` -> `drywall-materials-and-finishing-guide`
- `drywall-sheet-sizes-4x8-4x10-4x12` -> `drywall-materials-and-finishing-guide`
- `drywall-texture-coverage-guide` -> `drywall-materials-and-finishing-guide`
- `drywall-waste-factor-guide` -> `drywall-materials-and-finishing-guide`

### Tile (5)

- `tile-box-coverage-checklist` -> `tile-project-planning-guide`
- `tile-layout-pattern-waste` -> `tile-project-planning-guide`
- `tile-waste-percentage-guide` -> `tile-project-planning-guide`
- `tile-grout-coverage-guide` -> `tile-grout-selection-and-coverage-guide`
- `tile-grout-sanded-vs-unsanded` -> `tile-grout-selection-and-coverage-guide`

### Deck (5)

- `deck-framing-checklist-joists-beams-posts` -> `deck-planning-materials-and-layout-guide`
- `deck-diagonal-waste-guide` -> `deck-planning-materials-and-layout-guide`
- `deck-board-gap-and-coverage` -> `deck-planning-materials-and-layout-guide`
- `deck-mud-mix-ratio-guide` -> `deck-mud-coverage-chart`
- `deck-mud-slope-per-foot` -> `deck-mud-coverage-chart`

### Topsoil (3)

- `topsoil-bag-coverage-guide` -> `topsoil-coverage-chart`
- `topsoil-bag-liters-to-cubic-feet` -> `topsoil-coverage-chart`
- `topsoil-leveling-feathering-guide` -> `topsoil-leveling-step-by-step-guide`

### Gravel (1)

- `gravel-tons-vs-tonnes` -> `gravel-yards-to-tons-guide`

### Concrete (2)

- `concrete-volume-per-100-sq-ft` -> `concrete-bag-yield-guide`
- `concrete-thickened-edge-volume` -> `concrete-bag-yield-guide`

## Batch 3 (done): 23 micro resources to consolidate

Pillar upgrades completed (high level):

- `roofing-materials-checklist-and-estimate`: pitch multipliers, starter/ridge notes, squares-to-bundles example.
- `mulch-bag-coverage-guide`: bag coverage charts, depth guidance, bulk-vs-bags notes, measurement tips.
- `wallpaper-rolls-by-wall-height`: openings guidance, roll terminology, strip-first measuring tips.
- `asphalt-driveway-tons-guide`: thickness ranges, base guidance, tonnage math example, ordering checklist.
- `fence-planning-posts-gates-and-materials-guide`: panel-vs-picket table, gate sag notes, post spacing, post hole planning.
- `studs-corners-and-openings-guide`: spacing guidance and plate planning.
- `flooring-installation-planning-and-moisture`: merged rounding, direction waste, and underlayment checklists; removed links to redirected micro resources.
- `paver-base-depth-guide`: bedding sand guidance, layer separation, build checklist.
- `baseboard-trim-waste-tips`: linear-feet-to-pieces method, typical waste ranges, ordering checklist.
- `gravel-driveway-layering-and-compaction`: base-vs-top layer guidance and edge containment notes.

### Roofing (4)

- `roofing-starter-and-ridge-cap` -> `roofing-materials-checklist-and-estimate`
- `roofing-squares-and-bundles-explained` -> `roofing-materials-checklist-and-estimate`
- `roofing-waste-factor-guide` -> `roofing-materials-checklist-and-estimate`
- `roof-pitch-area-multiplier` -> `roofing-materials-checklist-and-estimate`

### Mulch (3)

- `mulch-depth-1-2-3-inches` -> `mulch-bag-coverage-guide`
- `mulch-bag-sizes-2-vs-3-cu-ft` -> `mulch-bag-coverage-guide`
- `mulch-coverage-chart` -> `mulch-bag-coverage-guide`

### Wallpaper (2)

- `wallpaper-openings-subtract-or-not` -> `wallpaper-rolls-by-wall-height`
- `wallpaper-pattern-repeat-waste` -> `wallpaper-rolls-by-wall-height`

### Asphalt (2)

- `asphalt-driveway-base-layer-guide` -> `asphalt-driveway-tons-guide`
- `asphalt-thickness-2-vs-3-inches` -> `asphalt-driveway-tons-guide`

### Fence (2)

- `fence-panel-vs-picket-estimate` -> `fence-planning-posts-gates-and-materials-guide`
- `fence-gate-planning-hardware-and-sag` -> `fence-planning-posts-gates-and-materials-guide`

### Studs (2)

- `stud-spacing-16-vs-24-on-center` -> `studs-corners-and-openings-guide`
- `stud-plates-lumber-planning` -> `studs-corners-and-openings-guide`

### Flooring (3)

- `flooring-boxes-rounding` -> `flooring-installation-planning-and-moisture`
- `flooring-direction-waste` -> `flooring-installation-planning-and-moisture`
- `flooring-underlayment-checklist` -> `flooring-installation-planning-and-moisture`

### Pavers (2)

- `sand-bedding-vs-leveling` -> `paver-base-depth-guide`
- `paver-bedding-sand-thickness` -> `paver-base-depth-guide`

### Baseboard (1)

- `baseboard-linear-feet-to-pieces` -> `baseboard-trim-waste-tips`

### Gravel (2)

- `gravel-base-vs-top-layer` -> `gravel-driveway-layering-and-compaction`
- `gravel-drainage-and-edge-containment-guide` -> `gravel-driveway-layering-and-compaction`
