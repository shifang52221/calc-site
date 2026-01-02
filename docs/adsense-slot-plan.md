# AdSense Slot Plan (manual placements, low CLS)

## Recommendation (phase 1)

- Start with **manual placements** (no Auto Ads) to protect UX and avoid AdSense inserting units in bad spots.
- Target **3 core slots per page type** first; expand only after you see stable RPM/CTR without hurting engagement.
- Use **responsive** ad units, but always reserve space to minimize CLS.

## Core rule: reserve space to avoid CLS

For each ad slot, render a container with:
- A minimum height (by breakpoint) before the ad loads.
- A stable layout position (between sections, not inside interactive controls).

Typical conservative reserves:
- Mobile: `min-height: 250px` (for 300x250/320x250 style)
- Desktop: `min-height: 280px` (for 336x280/300x250 style)
- If using a leaderboard: Desktop `min-height: 90px` (728x90) / Mobile `min-height: 50px` (320x50)

## Page-type placements

### 1) Calculator detail page (best overall monetization)

Slot C1 (recommended)
- Position: **after results**, before long explanation content.
- Why: user just got value; attention is high; doesn’t block calculation.

Slot C2
- Position: mid-article, between explanation sections (after first `H2` block).

Slot C3
- Position: before “Related calculators/guides” section.

Avoid:
- Above the inputs panel.
- Inside/adjacent to form controls (hurts usability, increases misclick risk).

### 2) Guide detail page

Slot G1 (recommended)
- Position: after the intro/summary block (near end of first screen).

Slot G2
- Position: mid-article between major sections.

Slot G3
- Position: before the end-of-article related links block.

### 3) Calculators index / category index

Slot I1
- Position: under the heading + short description, above the grid (but keep part of the grid visible on first screen).

Slot I2
- Position: inserted after N cards (e.g., after 6–9 items).

Slot I3
- Position: bottom of page (optional).

### 4) Homepage

Slot H1
- Position: below the hero/value proposition, above the “popular calculators” grid (optional; evaluate carefully).

Slot H2
- Position: mid-page between major sections.

## Compliance + measurement notes

- `ads.txt` is required (already present).
- Consent: if you enable personalized ads in EEA/UK/CA, plan for a consent flow; keep UX minimal but compliant.
- Measurement: watch **CLS**, **bounce rate**, and **time-to-result** on calculator pages; don’t optimize RPM at the expense of task completion.

