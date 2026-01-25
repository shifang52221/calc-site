export type ResourceArticle = {
  slug: string;
  title: string;
  description: string;
  lastUpdated: string;
  sections: Array<{
    heading: string;
    paragraphs?: string[];
    bullets?: string[];
    table?: {
      columns: string[];
      rows: string[][];
    };
  }>;
  related?: Array<{
    label: string;
    href: string;
  }>;
};

export const RESOURCE_ARTICLES_EN: ResourceArticle[] = [
  {
    slug: "deck-mud-coverage-chart",
    title: "Deck mud coverage chart (dry pack mortar)",
    description:
      "Quick deck mud coverage table, mixing notes, and practical tips for estimating dry pack mortar by area and thickness.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Quick coverage table",
        paragraphs: [
          "Deck mud (dry pack mortar) is usually estimated by volume: area × average thickness. The table below is a fast planning reference for common thicknesses.",
        ],
        table: {
          columns: ["Coverage", "1 inch thickness", "1.5 inches thickness", "2 inches thickness"],
          rows: [
            ["50 sq ft", "4.17 cu ft", "6.25 cu ft", "8.33 cu ft"],
            ["100 sq ft", "8.33 cu ft", "12.5 cu ft", "16.67 cu ft"],
            ["150 sq ft", "12.5 cu ft", "18.75 cu ft", "25 cu ft"],
          ],
        },
      },
      {
        heading: "Quick volume rule (easy mental math)",
        paragraphs: [
          "A simple rule of thumb: 100 sq ft at 1 inch thickness is about 8.33 cubic feet. Scale that up or down by thickness. For example, 80 sq ft at 1.5 inches is 8.33 × 0.8 × 1.5 ≈ 10 cu ft.",
        ],
      },
      {
        heading: "Practical notes",
        bullets: [
          "Use average thickness. If you are correcting slope, measure high and low points and average them.",
          "Round up. Running short mid-bed is usually more expensive than a small buffer.",
          "Mix ratios vary by application and local practice; follow product and manufacturer guidance for critical installs.",
        ],
      },
    ],
    related: [
      {
        label: "Deck mud calculator",
        href: "/en/calculators/home-improvement/deck-mud",
      },
      {
        label: "Drywall mud & tape calculator",
        href: "/en/calculators/home-improvement/drywall-mud-tape",
      },
    ],
  },
  {
    slug: "paint-planning-complete-guide",
    title: "Paint planning complete guide (coats, primer, sheen, and prep)",
    description:
      "A practical paint planning guide that explains coats, primer decisions, sheen selection, and the measurements that make paint estimates reliable.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Start with the right measurement (wall area, not floor area)",
        paragraphs: [
          "Most under-estimates happen because people use floor area or rough room size. Paint is driven by wall surface area (and sometimes ceilings and trim). Measure each wall width × height and add them. If you want a tighter estimate, subtract large windows and doors, but many people keep them in and treat it as waste/buffer.",
          "If you are painting multiple rooms, treat each room as its own line item first. That makes it easier to choose different coats or products (for example, one room might need stain-blocking primer while another does not).",
        ],
      },
      {
        heading: "How many coats do you really need?",
        paragraphs: [
          "Coat count depends on color change, sheen, surface condition, and the quality of the paint. A typical interior repaint often lands at 2 finish coats. Dramatic color changes, porous surfaces, and heavy texture can push you to 3 coats.",
          "If you are unsure, do a small test area using the exact paint. You will learn quickly whether 2 coats covers or whether you need a primer step (or an extra finish coat).",
        ],
        table: {
          columns: ["Scenario", "Common plan", "Why"],
          rows: [
            ["Same-color repaint on smooth walls", "1–2 finish coats", "Touch-up and uniformity"],
            ["Big color change (dark to light or vice versa)", "Primer + 2 coats", "Hides previous color faster"],
            ["Fresh drywall / patches", "Primer + 2 coats", "Prevents flashing and uneven sheen"],
            ["Heavy texture / porous walls", "2–3 coats", "Lower coverage, more absorption"],
          ],
        },
      },
      {
        heading: "Primer vs paint: when priming saves money",
        paragraphs: [
          "Primer is not a universal requirement, but it often makes the finish more predictable. Priming is most valuable on patched drywall, stained areas, very porous walls, glossy surfaces, and big color changes where coverage is difficult.",
          "If you skip primer when you should not, you often pay for it later with extra coats, uneven sheen, or paint failure. That is why accurate estimating is more than area math: it is also product planning.",
        ],
      },
      {
        heading: "Coverage rates: product label beats averages",
        paragraphs: [
          "A planning range like 350–400 sq ft per gallon is fine for first-pass budgeting, but the label on the exact product wins. Coverage can drop when you have heavy texture, porous walls, or lots of cut-in work (edges, corners, and trim lines).",
          "Trim and doors can have different coverage than walls because profiles add surface area and prep can change how paint lays down. Treat trim and doors as separate line items if you want a reliable plan.",
        ],
      },
      {
        heading: "Sheen selection (practical guidance)",
        paragraphs: [
          "Sheen affects appearance and touch-up behavior. Higher sheen can highlight wall defects but is more washable. Lower sheen hides defects but can scuff more easily. If you are changing sheen, plan for more prep and sometimes primer, especially if you are painting over glossy surfaces.",
        ],
        table: {
          columns: ["Sheen", "Typical use", "Tradeoff"],
          rows: [
            ["Flat / matte", "Ceilings, low-traffic walls", "Hides defects, less washable"],
            ["Eggshell", "Most interior walls", "Good balance for durability"],
            ["Satin", "Kitchens, baths, higher traffic", "More washable, shows defects more"],
            ["Semi-gloss", "Trim, doors", "Durable, highlights brush marks"],
          ],
        },
      },
      {
        heading: "Buffering and buying: the real-world rules",
        bullets: [
          "Separate walls, ceilings, and trim if products or coat counts differ.",
          "Round up near thresholds and keep labeled touch-up paint for future repairs.",
          "If matching later matters, buy enough from the same batch when possible.",
          "Plan extra time and minor waste for cut-in work and cleanup.",
        ],
      },
    ],
    related: [
      { label: "Paint calculator", href: "/en/calculators/home-improvement/paint" },
      { label: "Paint guide", href: "/en/guides/home-improvement/paint" },
      { label: "Primer vs paint: when to prime", href: "/en/resources/primer-vs-paint-when-to-prime" },
    ],
  },
  {
    slug: "roofing-materials-checklist-and-estimate",
    title: "Roofing materials checklist (what you forget when estimating)",
    description:
      "A practical checklist for roofing orders: squares, bundles, waste, and the accessory items that often get missed in basic estimates.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Squares, bundles, and why the label matters",
        paragraphs: [
          "A roofing square is 100 sq ft of roof surface area. Many shingles are packaged so that a certain number of bundles covers one square, but the exact number varies by product. Always confirm on the wrapper or product spec sheet.",
          "If you estimate bundles using a generic assumption and it is wrong for your shingle, your order can be off by several bundles even when the square count is correct.",
        ],
      },
      {
        heading: "Waste factors (typical starting points)",
        paragraphs: [
          "Waste depends heavily on roof complexity. Even with the same surface area, a roof with valleys, hips, dormers, and many penetrations will require more cuts and thus more waste.",
        ],
        table: {
          columns: ["Roof complexity", "Common waste", "Why it increases"],
          rows: [
            ["Simple gable", "10–15%", "Fewer cuts and valleys"],
            ["Typical mixed roof", "15–20%", "More edges and penetrations"],
            ["Complex roof", "20–25%+", "Valleys, dormers, many cuts"],
          ],
        },
      },
      {
        heading: "Accessory checklist (often missed)",
        bullets: [
          "Starter strips",
          "Ridge cap shingles (or ridge cap system)",
          "Underlayment (felt or synthetic)",
          "Ice & water shield (where required by code/climate)",
          "Drip edge",
          "Step flashing / chimney flashing / valley flashing (project dependent)",
          "Roof vents / ridge vent components",
          "Nails and sealants",
        ],
      },
      {
        heading: "Pitch and measurement: footprint is not roof area",
        paragraphs: [
          "Roof surface area is larger than footprint area on pitched roofs. If you are estimating from the ground, apply a pitch multiplier or measure each plane. The most common big error is mixing footprint dimensions with slope dimensions.",
          "If you are unsure, use the roof pitch multiplier approach as a planning estimate and confirm with a roofer or by measuring planes.",
        ],
      },
      {
        heading: "Buying strategy (avoid shortages and mismatches)",
        bullets: [
          "Round up to whole bundles and keep a small number of extras for repairs.",
          "Buy all shingles and ridge cap from the same batch when possible to reduce color mismatch risk.",
          "Plan delivery placement and weather windows; storage and staging affect damage and waste.",
        ],
      },
    ],
    related: [
      { label: "Roofing calculator", href: "/en/calculators/home-improvement/roofing" },
      { label: "Roofing guide", href: "/en/guides/home-improvement/roofing" },
      { label: "Roof pitch multiplier", href: "/en/resources/roof-pitch-area-multiplier" },
      { label: "Starter & ridge cap", href: "/en/resources/roofing-starter-and-ridge-cap" },
    ],
  },
  {
    slug: "gravel-driveway-layering-and-compaction",
    title: "Gravel driveway layering and compaction (base vs top)",
    description:
      "A practical guide to estimating gravel by layers: base vs surface, compaction, drainage, and supplier ton conversions.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Think in layers (base and top are not the same)",
        paragraphs: [
          "Many gravel projects fail because a single depth is used for the whole build. Driveways and bases commonly use multiple layers with different thickness targets and sometimes different materials.",
          "A simple approach is to estimate each layer separately (base layer, then top layer). That helps you order the right products and prevents mixing base material with surface material.",
        ],
      },
      {
        heading: "Compaction: loose depth vs final depth",
        paragraphs: [
          "Compaction reduces loose thickness. If you want 4 inches final compacted depth, you may need to place more than 4 inches loose. The exact factor depends on material and compaction effort, but a buffer is usually cheaper than a second delivery.",
        ],
      },
      {
        heading: "How to estimate volume (and when tons matter)",
        paragraphs: [
          "Start with area and average thickness to get volume. If your supplier sells by tons, convert using the supplier's density for the exact product. Generic charts are a starting point, not a guarantee.",
        ],
        table: {
          columns: ["Product type", "Typical ton/yd³ range", "Reminder"],
          rows: [
            ["Crushed stone / base", "1.3–1.6", "Moisture changes density"],
            ["Pea gravel", "1.2–1.4", "Round stones behave differently"],
            ["Road base", "1.3–1.6", "Often compacts well"],
          ],
        },
      },
      {
        heading: "Drainage and edge containment (why math is not enough)",
        paragraphs: [
          "If water sits on the driveway, repeated top-ups are common. Correct grading and drainage first. Edge containment and a stable base reduce migration and potholes, which is often more important than a perfect yardage estimate.",
        ],
      },
      {
        heading: "Practical ordering checklist",
        bullets: [
          "Measure multiple depth checks and use an average thickness.",
          "Estimate base and top layers separately (often different products).",
          "Ask your supplier for the exact yd³↔tons conversion for your product.",
          "Plan a buffer for compaction and edge irregularities.",
        ],
      },
    ],
    related: [
      { label: "Gravel calculator", href: "/en/calculators/home-improvement/gravel" },
      { label: "Gravel guide", href: "/en/guides/home-improvement/gravel" },
      { label: "Yards to tons guide", href: "/en/resources/gravel-yards-to-tons-guide" },
      { label: "Base vs top layer", href: "/en/resources/gravel-base-vs-top-layer" },
    ],
  },
  {
    slug: "topsoil-leveling-step-by-step-guide",
    title: "Topsoil leveling step-by-step (how to avoid over-ordering)",
    description:
      "A step-by-step guide to leveling with topsoil: measuring average depth, feathering edges, settling, and planning touch-ups.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why leveling estimates go wrong",
        paragraphs: [
          "The biggest mistake is using the lowest spot as the depth for the entire lawn. A single low area can inflate your order dramatically if you treat it as the whole project depth.",
          "Instead, estimate an average depth for the full area and then add extra only for the low zones that truly need more material.",
        ],
      },
      {
        heading: "Step 1: map highs and lows",
        paragraphs: [
          "Use string lines, a long straightedge, or a level to identify high and low areas. Mark low zones separately so you can treat them as targeted fill instead of spreading the same depth everywhere.",
        ],
      },
      {
        heading: "Step 2: choose an average spread depth",
        paragraphs: [
          "Pick a realistic average depth you will spread across the whole area (for example, 1 inch topdressing). Then calculate extra volume for low areas as separate rectangles with their own average depth.",
        ],
      },
      {
        heading: "Step 3: feather edges (this changes volume)",
        paragraphs: [
          "Feathering is how you avoid sharp transitions that become bumps after settling. Feathering also consumes material, which is why leveling projects almost always need a buffer beyond the pure average-depth math.",
        ],
      },
      {
        heading: "Step 4: settle and plan touch-ups",
        bullets: [
          "Water and lightly roll if appropriate for your project; expect settling.",
          "Plan a small touch-up pass after the first rain or watering cycle.",
          "Keep a small amount of soil for minor low spots that appear after settling.",
        ],
      },
    ],
    related: [
      { label: "Topsoil calculator", href: "/en/calculators/home-improvement/topsoil" },
      { label: "Topsoil leveling guide", href: "/en/guides/home-improvement/topsoil-leveling" },
      { label: "Feathering guide", href: "/en/resources/topsoil-leveling-feathering-guide" },
      { label: "Topsoil coverage chart", href: "/en/resources/topsoil-coverage-chart" },
    ],
  },
  {
    slug: "flooring-installation-planning-and-moisture",
    title: "Flooring installation planning (moisture, acclimation, and underlayment)",
    description:
      "A practical flooring planning guide: waste, moisture checks, acclimation, underlayment selection, and the non-area items that cause project delays.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why flooring projects fail (it is not the square footage)",
        paragraphs: [
          "Flooring projects often go wrong due to moisture, subfloor flatness, and missing transition/trim planning. Area math matters, but it is rarely the only driver of cost or delays.",
        ],
      },
      {
        heading: "Acclimation and moisture checks",
        paragraphs: [
          "Many products require acclimation and moisture limits before install. If you skip this, you risk cupping, gaps, or failure later. Follow the product instructions and confirm your subfloor conditions before you buy everything.",
        ],
      },
      {
        heading: "Underlayment: match the system",
        paragraphs: [
          "Underlayment choice depends on floor type (LVP, laminate, engineered wood), subfloor type, and whether you need moisture barrier or sound control. Do not assume one underlayment fits all products.",
        ],
      },
      {
        heading: "Waste and box rounding (real-world rules)",
        bullets: [
          "Pick a waste factor that matches layout complexity (diagonal installs cost more).",
          "Use label coverage per box and round up to whole boxes.",
          "Keep 1–2 boxes for future repairs if matching later matters.",
        ],
      },
      {
        heading: "Transitions, trims, and stairs",
        paragraphs: [
          "Transitions and trims are often forgotten line items. If you have stairs, estimate treads and risers separately. If you have doorways or mixed floor heights, plan transitions early because they can limit product choices.",
        ],
      },
    ],
    related: [
      { label: "Flooring calculator", href: "/en/calculators/home-improvement/flooring" },
      { label: "Flooring guide", href: "/en/guides/home-improvement/flooring" },
      { label: "Underlayment checklist", href: "/en/resources/flooring-underlayment-checklist" },
      { label: "Flooring boxes rounding", href: "/en/resources/flooring-boxes-rounding" },
    ],
  },
  {
    slug: "roofing-squares-and-bundles-explained",
    title: "Roofing squares and bundles explained",
    description:
      "Learn what a roofing square is, how bundles convert to squares, and how waste and accessories affect your final order.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "What is a roofing square?",
        paragraphs: [
          "A roofing square is 100 square feet of roof surface area. Roofing is priced and ordered based on surface area, not the house footprint.",
        ],
      },
      {
        heading: "Typical bundles per square",
        paragraphs: [
          "Many laminated (architectural) shingles are packaged so that 3 bundles cover 1 square, but this is not universal. Always confirm the bundles-per-square for your exact product.",
        ],
        table: {
          columns: ["Shingle type (typical)", "Bundles per square", "Notes"],
          rows: [
            ["3-tab shingles", "3", "Common, but confirm your product"],
            ["Architectural shingles", "3", "Most common packaging"],
            ["Heavier/impact-rated", "4+ (sometimes)", "Packaging varies by brand"],
          ],
        },
      },
      {
        heading: "What people forget to order",
        bullets: [
          "Starter strip, ridge caps, and underlayment (often separate SKUs).",
          "Ice & water shield (code/climate dependent).",
          "Drip edge and flashing around penetrations.",
          "Nails and ventilation components (ridge vent).",
        ],
      },
    ],
    related: [
      { label: "Roofing calculator", href: "/en/calculators/home-improvement/roofing" },
      { label: "Roofing guide", href: "/en/guides/home-improvement/roofing" },
    ],
  },
  {
    slug: "tile-waste-percentage-guide",
    title: "Tile waste percentage guide (how much overage to buy)",
    description:
      "A practical guide to tile overage: recommended waste ranges, when to increase them, and how to avoid running short.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Common waste ranges (rule of thumb)",
        table: {
          columns: ["Layout", "Typical waste", "When to increase"],
          rows: [
            ["Straight lay (simple room)", "7-10%", "Many corners, small cuts"],
            ["Diagonal layout", "12-15%", "Large tiles or many penetrations"],
            ["Herringbone / complex pattern", "15-20%+", "Multiple rooms, tight matching"],
          ],
        },
      },
      {
        heading: "Why waste is not just mistakes",
        paragraphs: [
          "Waste includes offcuts that cannot be reused, breakage, and rounding to whole boxes. It also includes pattern and dye-lot concerns: if matching later is hard, buying enough up front matters.",
        ],
      },
      {
        heading: "Tips to reduce waste (without under-buying)",
        bullets: [
          "Plan your layout so cut pieces land in less-visible areas when possible.",
          "Order extra for large-format tiles and fragile materials.",
          "Keep a few spares for future repairs (same dye lot if possible).",
        ],
      },
    ],
    related: [
      { label: "Tile calculator", href: "/en/calculators/home-improvement/tile" },
      { label: "Tile waste guide", href: "/en/guides/home-improvement/tile-waste" },
    ],
  },
  {
    slug: "concrete-volume-per-100-sq-ft",
    title: "Concrete volume per 100 sq ft (quick chart)",
    description:
      "A quick concrete chart: cubic yards per 100 sq ft at common slab thicknesses, plus ordering tips.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Quick chart",
        table: {
          columns: ["Thickness", "Volume per 100 sq ft", "Notes"],
          rows: [
            ['3" (0.25 ft)', "0.93 cu yd", "Thin slab; confirm suitability"],
            ['4" (0.33 ft)', "1.23 cu yd", "Very common for pads/driveways"],
            ['5" (0.42 ft)', "1.54 cu yd", "Heavier loads / some driveways"],
            ['6" (0.50 ft)', "1.85 cu yd", "Common for heavier duty slabs"],
          ],
        },
      },
      {
        heading: "Ordering notes",
        bullets: [
          "Small thickness differences scale fast on large slabs—double-check thickness first.",
          "Add a buffer (often 5-10%) for uneven subgrade and rounding.",
          "Estimate thickened edges and footings separately if they apply.",
        ],
      },
    ],
    related: [
      { label: "Concrete calculator", href: "/en/calculators/home-improvement/concrete" },
      { label: "Concrete guide", href: "/en/guides/home-improvement/concrete" },
    ],
  },
  {
    slug: "mulch-coverage-chart",
    title: "Mulch coverage chart (cubic yards per area and depth)",
    description:
      "Mulch coverage rules of thumb and a quick chart for 100 sq ft at common depths.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Quick coverage chart (per 100 sq ft)",
        table: {
          columns: ["Depth", "Mulch volume", "Notes"],
          rows: [
            ['2"', "0.62 cu yd", "Light refresh / appearance"],
            ['3"', "0.93 cu yd", "Common garden bed depth"],
            ['4"', "1.23 cu yd", "Heavier weed suppression (use carefully)"],
          ],
        },
      },
      {
        heading: "Rule of thumb",
        paragraphs: [
          "A common shortcut: 1 cubic yard covers about 324 sq ft at 1 inch depth. Multiply or divide that by the depth you want.",
        ],
      },
      {
        heading: "Avoid common mistakes",
        bullets: [
          "Do not pile mulch against trunks (avoid \"mulch volcano\").",
          "Plan extra for irregular bed edges and settling after watering.",
          "Different mulch types spread differently; supplier coverage claims vary.",
        ],
      },
    ],
    related: [
      { label: "Mulch calculator", href: "/en/calculators/home-improvement/mulch" },
      { label: "Mulch depth guide", href: "/en/guides/home-improvement/mulch-depth" },
    ],
  },
  {
    slug: "topsoil-coverage-chart",
    title: "Topsoil coverage chart (cubic yards per area and depth)",
    description:
      "Topsoil coverage rules of thumb and a quick chart for common depths, with leveling tips.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Quick coverage chart (per 100 sq ft)",
        table: {
          columns: ["Depth", "Topsoil volume", "Notes"],
          rows: [
            ['1"', "0.31 cu yd", "Light topdressing"],
            ['2"', "0.62 cu yd", "Common leveling depth"],
            ['3"', "0.93 cu yd", "Heavier leveling / fill"],
            ['4"', "1.23 cu yd", "Significant fill (confirm drainage)"],
            ['6"', "1.85 cu yd", "Major fill (plan compaction/settling)"],
          ],
        },
      },
      {
        heading: "Rule of thumb (fast mental math)",
        paragraphs: [
          "A useful shortcut: 100 sq ft at 1 inch depth is about 0.31 cubic yards. Scale that by depth. For example, 250 sq ft at 2 inches is 0.62 cu yd per 100 sq ft x 2.5 = about 1.55 cu yd.",
          "This is for planning and ordering. Real jobs need a buffer because lawns are not perfectly flat and material compacts and settles.",
        ],
      },
      {
        heading: "Leveling tip that prevents over-ordering",
        paragraphs: [
          "Do not measure depth from only the lowest spot. Take multiple depth checks and use an average thickness across the area. A single low spot can make you over-order by a lot.",
        ],
      },
      {
        heading: "When to add extra (common real-world drivers)",
        bullets: [
          "If you are filling low spots, the average depth is often higher than it looks from one location.",
          "If you plan to rake and feather edges, your “coverage area” expands beyond the obvious low spot.",
          "If you will compact or roll, plan for settlement (especially on thicker fills).",
          "If you have clay soil or poor drainage, check grading plans before adding significant thickness.",
        ],
      },
      {
        heading: "Practical ordering checklist",
        bullets: [
          "Confirm whether your supplier sells by cubic yard, ton, or bag (do not mix units).",
          "If sold by tons, use supplier-specific conversion (moisture and product type change density).",
          "Order in whole increments you can handle: bags, half-yard, or full-yard deliveries depending on access.",
        ],
      },
    ],
    related: [
      { label: "Topsoil calculator", href: "/en/calculators/home-improvement/topsoil" },
      { label: "Topsoil leveling guide", href: "/en/guides/home-improvement/topsoil-leveling" },
    ],
  },
  {
    slug: "drywall-ceiling-thickness-guide",
    title: "Ceiling drywall thickness guide (1/2 vs 5/8)",
    description:
      "A practical ceiling drywall guide: thickness choices, joist spacing, sag resistance, and seam planning.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Quick rule of thumb (common practice)",
        table: {
          columns: ["Ceiling framing (typical)", "Common thickness", "Why"],
          rows: [
            ['16" on center', '1/2" or 5/8"', "Both can be acceptable; check code and product"],
            ['24" on center', '5/8" (often)', "Better sag resistance across wider spacing"],
          ],
        },
      },
      {
        heading: "Why ceilings are different from walls",
        paragraphs: [
          "Ceilings are more sensitive to sag and lighting. Even if 1/2 inch board is allowed, many people choose 5/8 inch on ceilings for stiffness and a flatter finished look under raking light.",
          "Ceilings also tend to carry more long-term load from insulation or attic air movement effects. Small deflection can show up later as waves or seams that are harder to hide once everything is painted.",
        ],
      },
      {
        heading: "How to choose between 1/2 and 5/8 (decision checklist)",
        bullets: [
          'If framing is 24" on center, 5/8" is a common safer choice for sag resistance.',
          "If the ceiling will be under strong directional light (large windows, long hallways), stiffer board usually looks flatter.",
          "If you are working alone or access is difficult, 1/2 inch may be easier to handle safely—but use proper support and confirm it meets the product span guidance.",
          "In garages or assemblies where fire resistance matters, local requirements may influence product choice (confirm locally).",
        ],
      },
      {
        heading: "Layout planning (seams matter as much as sheet count)",
        paragraphs: [
          "For ceilings, the goal is usually fewer seams in the most visible areas. Longer sheets can reduce butt joints, but only if you can install them safely and accurately.",
          "A good planning approach is to sketch your ceiling, mark lighting features and the main view direction, then choose a layout that keeps joints away from the most noticeable sight lines.",
        ],
        bullets: [
          "Prefer fewer butt joints; long butt seams can telegraph under light.",
          "Avoid lining up ceiling butt joints in a straight line across the room when possible.",
          "If you must patch or break sheets, keep seams away from prominent fixtures and skylights.",
        ],
      },
      {
        heading: "Common mistakes that lead to sag or cracking",
        bullets: [
          "Using the wrong thickness for wide framing spacing.",
          "Inadequate fastening pattern or missed framing members.",
          "Skipping proper joint treatment at changes in plane or where framing moves.",
          "Overloading the ceiling with storage or hanging loads not designed for drywall.",
        ],
      },
      {
        heading: "Planning tips",
        bullets: [
          "Longer sheets reduce seams, but handling risk goes up. Safety and access matter more than perfect seam math.",
          "If you have a drywall lift and help, consider longer sheets for large, open ceilings.",
          "Bathrooms and humid areas often benefit from moisture-resistant products (follow manufacturer guidance).",
        ],
      },
    ],
    related: [
      { label: "Drywall calculator", href: "/en/calculators/home-improvement/drywall" },
      { label: "Drywall ceiling guide", href: "/en/guides/home-improvement/drywall-ceiling" },
    ],
  },
  {
    slug: "drywall-mud-and-tape-estimating",
    title: "How to estimate drywall mud and tape (planning checklist)",
    description:
      "A practical way to estimate joint compound and tape: what drives usage, where waste comes from, and what people forget.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "What drives mud and tape usage",
        bullets: [
          "Finish level: higher levels generally mean more compound and sanding.",
          "Seam count: more seams and patches mean more tape and compound.",
          "Corners: inside corners consume tape and compound faster than people expect.",
        ],
      },
      {
        heading: "Plan in components (not just wall area)",
        paragraphs: [
          "Area is a helpful starting point, but real usage depends on seams, corners, patches, and texture/finish level. For a tighter estimate, count major seams and inside corners (or add a buffer for many small rooms).",
        ],
      },
      {
        heading: "Common misses",
        bullets: [
          "Corner bead, fasteners, and primer are separate line items.",
          "Repairs and patches consume compound even if they do not increase the main sheet count.",
          "Round up to whole bags/buckets; running short mid-room makes blending harder.",
        ],
      },
    ],
    related: [
      { label: "Drywall mud & tape calculator", href: "/en/calculators/home-improvement/drywall-mud-tape" },
      { label: "Drywall guide", href: "/en/guides/home-improvement/drywall" },
    ],
  },
  {
    slug: "gravel-yards-to-tons-guide",
    title: "Gravel yards to tons guide (why the conversion varies)",
    description:
      "Why yards-to-tons conversions vary, what density means, and how to get a reliable number from your supplier.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why conversions vary",
        paragraphs: [
          "Gravel is planned by volume (cubic yards) but often sold by weight (tons). The conversion depends on density, which varies by product type, moisture content, and compaction.",
        ],
      },
      {
        heading: "Typical ranges (rough planning only)",
        table: {
          columns: ["Material", "Typical tons per cubic yard", "Notes"],
          rows: [
            ["Crushed stone", "1.2-1.5", "Most common homeowner estimates"],
            ["Pea gravel", "1.2-1.4", "Often slightly lighter"],
            ["Road base", "1.3-1.6", "Varies by fines and moisture"],
          ],
        },
      },
      {
        heading: "Best practice",
        bullets: [
          "Ask your supplier for their exact conversion for the specific product you are buying.",
          "If you are doing layers (base + top), estimate them separately and do not mix products.",
          "Plan a small buffer for uneven base and compaction.",
        ],
      },
    ],
    related: [
      { label: "Gravel calculator", href: "/en/calculators/home-improvement/gravel" },
      { label: "Gravel tons converter", href: "/en/calculators/home-improvement/gravel-tons" },
    ],
  },
  {
    slug: "paver-base-depth-guide",
    title: "Paver base depth guide (how thick should base be?)",
    description:
      "A practical paver base guide: common depth ranges, compaction notes, and why drainage and soil matter.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Common depth ranges (rule of thumb)",
        table: {
          columns: ["Use case", "Typical compacted base depth", "Notes"],
          rows: [
            ["Patio / walkway (light use)", "4-6 inches", "Soil and frost can push this higher"],
            ["Driveway (vehicle traffic)", "8-12 inches", "Often deeper in freeze climates or weak soils"],
          ],
        },
      },
      {
        heading: "Why soil and drainage matter",
        paragraphs: [
          "Base depth depends on soil strength and water. Soft or wet subgrade consumes material and settles. When in doubt, prioritize drainage, geotextile separation (as needed), and proper compaction over perfect math.",
        ],
      },
      {
        heading: "Compaction note",
        paragraphs: [
          "Order for compacted thickness, but expect to place more loose material to reach the final compacted depth. Your supplier or compactor guidance is usually more reliable than generic percentages.",
        ],
      },
    ],
    related: [
      { label: "Paver base calculator", href: "/en/calculators/home-improvement/paver-base" },
      { label: "Sand calculator", href: "/en/calculators/home-improvement/sand" },
    ],
  },
  {
    slug: "board-feet-explained",
    title: "Board feet explained (simple formula and examples)",
    description:
      "What board feet are, the formula, and how to avoid common mistakes when pricing lumber.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "The board foot formula",
        paragraphs: [
          "Board feet measure volume. A common formula is: board feet = (thickness in inches × width in inches × length in feet) / 12.",
        ],
      },
      {
        heading: "Example",
        paragraphs: [
          "A 2×6 that is 8 feet long is: (2 × 6 × 8) / 12 = 8 board feet (using nominal dimensions). If you are buying surfaced lumber, remember actual thickness/width can be smaller.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Mixing nominal and actual sizes without noticing.",
          "Forgetting to convert inches/feet consistently.",
          "Not planning extra for defects, cutoffs, and grain matching.",
        ],
      },
    ],
    related: [
      { label: "Board feet calculator", href: "/en/calculators/home-improvement/board-feet" },
      { label: "Deck board calculator", href: "/en/calculators/home-improvement/deck" },
    ],
  },
  {
    slug: "asphalt-driveway-tons-guide",
    title: "Asphalt driveway tons guide (thickness and truckloads)",
    description:
      "A practical asphalt driveway estimate guide: why thickness drives tonnage and what changes between resurfacing and full rebuilds.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Thickness drives tonnage",
        paragraphs: [
          "Asphalt is usually ordered by weight (tons). Your area and compacted thickness determine tonnage. The same driveway at 2 inches vs 3 inches can be a big swing.",
        ],
      },
      {
        heading: "Resurface vs rebuild",
        bullets: [
          "Resurface overlays can be thinner, but base problems still show through.",
          "Full rebuilds often require a separate gravel base estimate (and base can exceed asphalt cost).",
          "Drainage fixes often matter more than a small change in asphalt thickness.",
        ],
      },
      {
        heading: "Ordering note",
        paragraphs: [
          "Hot mix has limited working time. Confirm delivery schedule and placement plan so material is placed and compacted properly.",
        ],
      },
    ],
    related: [
      { label: "Asphalt driveway calculator", href: "/en/calculators/home-improvement/asphalt-driveway" },
      { label: "Gravel calculator (base layer)", href: "/en/calculators/home-improvement/gravel" },
    ],
  },
  {
    slug: "wallpaper-pattern-repeat-waste",
    title: "Wallpaper pattern repeat and waste (why you need extra rolls)",
    description:
      "How pattern repeat affects usable roll length, why corners and windows increase waste, and how to plan a safer order.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why pattern repeat changes roll yield",
        paragraphs: [
          "With a pattern repeat, you may need to cut strips so the pattern aligns from strip to strip. That can reduce usable length per roll and increase the number of rolls beyond simple wall area math.",
        ],
      },
      {
        heading: "When to increase waste",
        bullets: [
          "Tall walls and many windows/doors (more separate strips).",
          "Multiple small wall sections and lots of corners.",
          "Large pattern repeat that forces more trimming per strip.",
        ],
      },
      {
        heading: "Best practice",
        paragraphs: [
          "If the manufacturer provides strips-per-roll guidance for your wall height and pattern, use that. It is often more accurate than a generic area conversion.",
        ],
      },
    ],
    related: [
      { label: "Wallpaper rolls calculator", href: "/en/calculators/home-improvement/wallpaper-rolls" },
      { label: "Paint calculator (alternative)", href: "/en/calculators/home-improvement/paint" },
    ],
  },
  {
    slug: "baseboard-trim-waste-tips",
    title: "Baseboard and trim waste tips (miters, corners, and pieces)",
    description:
      "How corners and miter cuts drive waste, why piece length matters, and practical ways to plan trim purchases.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why piece length matters",
        paragraphs: [
          "Trim is often sold in fixed piece lengths. Even if your total linear feet are correct, you can still run short if you do not plan how those lengths break into pieces around corners and doors.",
        ],
      },
      {
        heading: "Waste drivers",
        bullets: [
          "Inside and outside corners (miter offcuts).",
          "Short wall runs that cannot reuse offcuts.",
          "Out-of-square rooms that force re-cuts and fitting.",
        ],
      },
      {
        heading: "Planning tips",
        bullets: [
          "Count corners and doorways, then plan a buffer for miter waste.",
          "If matching stain/finish matters, buy extra from the same batch when possible.",
          "Keep a few spare lengths for future repairs and touch-ups.",
        ],
      },
    ],
    related: [
      { label: "Baseboard & trim calculator", href: "/en/calculators/home-improvement/baseboard-trim" },
      { label: "Flooring calculator (often related)", href: "/en/calculators/home-improvement/flooring" },
    ],
  },
  {
    slug: "stud-spacing-16-vs-24-on-center",
    title: "Stud spacing 16 vs 24 on center (what changes in your estimate)",
    description:
      "How stud spacing affects stud count, drywall stiffness, and typical planning decisions for walls and finishes.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "How spacing changes stud count",
        paragraphs: [
          "At 24 inch spacing, you typically need fewer studs than 16 inch spacing. But corners, T-walls, openings, and code requirements can add studs beyond simple length / spacing math.",
        ],
      },
      {
        heading: "Why finishes matter",
        paragraphs: [
          "Even if 24 inch spacing is allowed for a wall, the finish choice can drive your decision. Heavier finishes and some applications benefit from tighter spacing for stiffness.",
        ],
      },
      {
        heading: "Planning notes",
        bullets: [
          "Always follow local code and structural requirements for load-bearing walls.",
          "Plan extra studs for corners, openings, and blocking.",
          "If you are unsure, treat your estimate as a planning number and validate with framing practice in your area.",
        ],
      },
    ],
    related: [
      { label: "Studs calculator", href: "/en/calculators/home-improvement/studs" },
      { label: "Drywall calculator", href: "/en/calculators/home-improvement/drywall" },
    ],
  },
  {
    slug: "tile-grout-coverage-guide",
    title: "Tile grout coverage guide (what changes the bag count)",
    description:
      "A practical grout guide: what drives grout usage, how joint size changes the estimate, and what people forget.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "What drives grout usage",
        bullets: [
          "Tile size: smaller tiles have more grout lines per square foot.",
          "Joint width: wider joints use more grout.",
          "Joint depth: thicker tile and deeper joints increase usage.",
          "Waste: mixing loss, cleanup, and rounding to whole bags.",
        ],
      },
      {
        heading: "Rule of thumb (planning only)",
        paragraphs: [
          "If you do not have the product bag yield chart, use your grout calculator and add a buffer. Real coverage varies by brand, sanded vs unsanded, and technique.",
        ],
      },
      {
        heading: "Common misses",
        bullets: [
          "Sanded vs unsanded (and epoxy) grout are different products with different behavior.",
          "Movement joints and caulk are not grout.",
          "Extra grout is useful for future repairs, but matching later can be difficult.",
        ],
      },
    ],
    related: [
      { label: "Tile grout calculator", href: "/en/calculators/home-improvement/tile-grout" },
      { label: "Tile calculator", href: "/en/calculators/home-improvement/tile" },
    ],
  },
  {
    slug: "sand-density-and-weight-guide",
    title: "Sand density and weight guide (yards, tons, and compaction)",
    description:
      "Why sand density varies, how to convert volume to weight, and what to confirm with your supplier.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why density varies",
        paragraphs: [
          "Sand density changes by moisture and sand type (masonry, concrete, play sand), and compaction. That is why one generic conversion can be wrong for your supplier.",
        ],
      },
      {
        heading: "Typical planning ranges (loose)",
        table: {
          columns: ["Material (typical)", "Approx. lb per cubic yard", "Notes"],
          rows: [
            ["Dry sand", "2400-2800", "Varies by moisture and gradation"],
            ["Damp sand", "2700-3200", "Heavier due to moisture"],
          ],
        },
      },
      {
        heading: "Best practice",
        bullets: [
          "Use the supplier conversion for the exact sand you are buying.",
          "If you are bedding pavers, confirm bedding sand type and typical compacted thickness.",
          "Order a small buffer for grading and cleanup, and round to delivery minimums.",
        ],
      },
    ],
    related: [
      { label: "Sand calculator", href: "/en/calculators/home-improvement/sand" },
      { label: "Paver base calculator", href: "/en/calculators/home-improvement/paver-base" },
    ],
  },
  {
    slug: "concrete-bag-yield-guide",
    title: "Concrete bag yield guide (how many bags per cubic foot?)",
    description:
      "How to estimate concrete bags: why yield matters, common bag sizes, and when ready-mix is a better option.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Yield is the key number",
        paragraphs: [
          "Bagged concrete is sold by weight, but you need volume. The label yield (cubic feet per bag) varies by product and brand, so it is more reliable than generic charts.",
        ],
      },
      {
        heading: "Rule of thumb (use the label when possible)",
        bullets: [
          "80 lb bags often yield around 0.6 cu ft (varies by product).",
          "60 lb bags often yield around 0.45 cu ft (varies by product).",
          "50 lb bags often yield around 0.375 cu ft (varies by product).",
        ],
      },
      {
        heading: "When to consider ready-mix",
        bullets: [
          "Large pours take many bags and a lot of labor time.",
          "Consistency is easier with ready-mix.",
          "Ordering short can stop a pour; buffers are usually cheaper than a second delivery.",
        ],
      },
    ],
    related: [
      { label: "Concrete bags calculator", href: "/en/calculators/home-improvement/concrete-bags" },
      { label: "Concrete calculator", href: "/en/calculators/home-improvement/concrete" },
    ],
  },
  {
    slug: "mulch-bag-coverage-guide",
    title: "Mulch bag coverage guide (how many bags do you need?)",
    description:
      "How to plan bagged mulch: bag sizes, how depth changes coverage, and why settling matters.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Bag size is the first check",
        paragraphs: [
          "Bagged mulch is sold by volume (often 2 cu ft or 3 cu ft). Convert your bed volume to cubic feet, then divide by bag size and round up.",
        ],
      },
      {
        heading: "Planning notes",
        bullets: [
          "Mulch settles after spreading and watering. A small buffer helps.",
          "If color matching matters, buy enough at once.",
          "Avoid piling mulch against trunks (keep it away from bark).",
        ],
      },
    ],
    related: [
      { label: "Mulch bags calculator", href: "/en/calculators/home-improvement/mulch-bags" },
      { label: "Mulch calculator (bulk)", href: "/en/calculators/home-improvement/mulch" },
    ],
  },
  {
    slug: "topsoil-bag-coverage-guide",
    title: "Topsoil bag coverage guide (bags to cubic yards)",
    description:
      "How to convert bagged topsoil to total volume, and when bulk delivery is a better buy.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Bag sizes vary",
        paragraphs: [
          "Topsoil bags are commonly sold by cubic feet or liters. Convert everything to one unit (cubic feet or cubic yards), then round up to whole bags.",
        ],
      },
      {
        heading: "When bulk is better",
        bullets: [
          "Large projects can require many bags and a lot of carrying time.",
          "Bulk topsoil is usually cheaper per unit, but quality varies by supplier.",
          "If leveling, measure multiple depth checks and use an average thickness.",
        ],
      },
    ],
    related: [
      { label: "Topsoil bags calculator", href: "/en/calculators/home-improvement/topsoil-bags" },
      { label: "Topsoil calculator (bulk)", href: "/en/calculators/home-improvement/topsoil" },
    ],
  },
  {
    slug: "drywall-texture-coverage-guide",
    title: "Drywall texture coverage guide (bags, coats, and waste)",
    description:
      "A practical drywall texture guide: why coverage varies, how coats change material, and what increases waste.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why coverage varies",
        bullets: [
          "Texture type and tool (spray vs hopper vs trowel).",
          "Surface porosity and primer.",
          "Coat count and finish level expectations.",
        ],
      },
      {
        heading: "Texture type changes material fast",
        paragraphs: [
          "Texture is not one product: knockdown, orange peel, skip trowel, and heavy stomp patterns can use very different amounts of material for the same wall area.",
          "Spray texture can seem efficient, but overspray, practice time, and equipment cleanup are where extra material disappears.",
        ],
      },
      {
        heading: "Coats and rework (where waste comes from)",
        bullets: [
          "Second coats can be close to a full coat if the first coat is light or if you need a consistent finish.",
          "Repairs and patches often need extra blending area (you texture beyond the patch).",
          "Sanding and knockdown changes how much material stays on the wall.",
        ],
      },
      {
        heading: "Planning tips",
        bullets: [
          "If you are new, plan extra for practice and cleanup.",
          "Spraying and sanding can increase waste.",
          "Round up; matching texture mid-wall can be difficult if you run short.",
        ],
      },
      {
        heading: "Practical workflow tip (keeps estimates reliable)",
        paragraphs: [
          "Do a small test wall or a large scrap board first. Measure how much material you used, then scale up. Even a quick test run can tell you whether you need one coat or two and whether your tool setup is wasting material.",
        ],
      },
    ],
    related: [
      { label: "Drywall texture calculator", href: "/en/calculators/home-improvement/drywall-texture" },
      { label: "Drywall calculator", href: "/en/calculators/home-improvement/drywall" },
    ],
  },
  {
    slug: "fence-post-hole-concrete-guide",
    title: "Fence post hole concrete guide (depth, diameter, and layout)",
    description:
      "How to plan fence posts: why corners/gates add posts, what affects hole size, and how concrete volume adds up.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why post count is not just length / spacing",
        bullets: [
          "Corners, ends, and gates add posts beyond simple spacing math.",
          "Gate posts often need heavier posts and more concrete.",
          "Sloped terrain and stepped panels can change layout and spacing.",
        ],
      },
      {
        heading: "Concrete planning notes",
        paragraphs: [
          "Concrete volume depends on hole diameter and depth. Local frost depth and soil conditions can change requirements, so confirm local practice and code.",
        ],
      },
    ],
    related: [
      { label: "Fence calculator", href: "/en/calculators/home-improvement/fence" },
      { label: "Fence posts guide", href: "/en/guides/home-improvement/fence-posts" },
    ],
  },
  {
    slug: "drywall-sheet-sizes-4x8-4x10-4x12",
    title: "Drywall sheet sizes (4x8 vs 4x10 vs 4x12)",
    description:
      "How sheet size affects seams, handling, and waste for walls and ceilings.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Quick comparison",
        table: {
          columns: ["Sheet size", "Area", "Typical use"],
          rows: [
            ["4x8", "32 sq ft", "Most common; easiest handling"],
            ["4x10", "40 sq ft", "Fewer seams; harder transport/handling"],
            ["4x12", "48 sq ft", "Fewest seams; ceilings with lift/help"],
          ],
        },
      },
      {
        heading: "Why bigger is not always better",
        bullets: [
          "Fewer seams can reduce finishing time, but bigger sheets increase risk and require more space and help.",
          "Ceilings prioritize safety. If handling is hard, smaller sheets can be the better choice even if seam count increases.",
          "Complex layouts often waste more regardless of sheet size.",
        ],
      },
    ],
    related: [
      { label: "Drywall calculator", href: "/en/calculators/home-improvement/drywall" },
      { label: "Ceiling drywall thickness guide", href: "/en/resources/drywall-ceiling-thickness-guide" },
    ],
  },
  {
    slug: "drywall-sheets-for-room-size",
    title: "How many drywall sheets do I need? (room size examples)",
    description:
      "A few practical drywall sheet examples for common room sizes, plus what changes the count.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Example planning table (walls only)",
        paragraphs: [
          "These examples assume a simple rectangular room and do not subtract openings. Add a waste factor and round up to whole sheets.",
        ],
        table: {
          columns: ["Room size", "Wall height", "Wall area (approx.)"],
          rows: [
            ["10x10 ft", "8 ft", "320 sq ft"],
            ["12x12 ft", "8 ft", "384 sq ft"],
            ["12x16 ft", "8 ft", "448 sq ft"],
          ],
        },
      },
      {
        heading: "What changes the number fast",
        bullets: [
          "Ceilings (add ceiling area = length x width).",
          "Many small walls/corners increase waste (offcuts are harder to reuse).",
          "Tall walls and stairwells can require different sheet planning and more waste.",
        ],
      },
    ],
    related: [
      { label: "Drywall calculator", href: "/en/calculators/home-improvement/drywall" },
      { label: "Drywall guide", href: "/en/guides/home-improvement/drywall" },
    ],
  },
  {
    slug: "drywall-waste-factor-guide",
    title: "Drywall waste factor guide (how much extra to buy?)",
    description:
      "A practical drywall waste guide: common ranges and when to increase overage.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Common ranges (rule of thumb)",
        table: {
          columns: ["Project type", "Typical waste", "Notes"],
          rows: [
            ["Large simple rooms", "8-12%", "Better reuse of offcuts"],
            ["Many small rooms", "12-18%", "More corners and short runs"],
            ["Ceilings / tricky access", "12-20%", "Handling decisions add cuts"],
          ],
        },
      },
      {
        heading: "Why waste is not just mistakes",
        paragraphs: [
          "Waste includes cutouts, breakage, and offcuts that cannot be reused. It also includes rounding to whole sheets and layout decisions that change seam placement.",
        ],
      },
    ],
    related: [
      { label: "Drywall calculator", href: "/en/calculators/home-improvement/drywall" },
      { label: "Methodology", href: "/en/methodology" },
    ],
  },
  {
    slug: "roof-pitch-area-multiplier",
    title: "Roof pitch area multiplier (quick reference)",
    description:
      "How roof pitch increases surface area vs footprint, with common multipliers.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Common multipliers (planning)",
        table: {
          columns: ["Pitch", "Multiplier (approx.)", "Meaning"],
          rows: [
            ["4/12", "1.05", "About 5% more area than footprint"],
            ["6/12", "1.12", "About 12% more"],
            ["8/12", "1.20", "About 20% more"],
            ["10/12", "1.30", "About 30% more"],
          ],
        },
      },
      {
        heading: "How to use the multiplier",
        paragraphs: [
          "Use the multiplier to convert footprint (horizontal) area into roof surface area. For a simple gable roof, you can often estimate roof area as footprint area x pitch multiplier, then add waste based on complexity.",
          "If your roof has multiple planes with different pitches, apply the multiplier per plane for a more accurate estimate.",
        ],
      },
      {
        heading: "Worked example (simple planning)",
        paragraphs: [
          "If a roof footprint is 1,600 sq ft and the pitch is 6/12, the roof surface area is about 1,600 x 1.12 = 1,792 sq ft before waste and details like valleys and dormers.",
        ],
      },
      {
        heading: "Common mistake",
        bullets: [
          "Do not estimate shingles from footprint area alone. Roofing is sold by surface area of roof planes.",
          "Complex roofs need extra waste beyond pitch (valleys/hips/dormers).",
        ],
      },
    ],
    related: [
      { label: "Roofing calculator", href: "/en/calculators/home-improvement/roofing" },
      { label: "Roofing squares and bundles explained", href: "/en/resources/roofing-squares-and-bundles-explained" },
    ],
  },
  {
    slug: "roofing-waste-factor-guide",
    title: "Roofing waste factor guide (valleys, hips, dormers)",
    description:
      "How to pick a roofing waste factor based on roof complexity and cut patterns.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Typical waste ranges (rule of thumb)",
        table: {
          columns: ["Roof type", "Typical waste", "Notes"],
          rows: [
            ["Simple gable", "8-12%", "Few cuts"],
            ["Hips / valleys", "12-18%", "More cuts and starter waste"],
            ["Many dormers / complex", "15-25%+", "High cut-up factor"],
          ],
        },
      },
      {
        heading: "What actually drives waste",
        bullets: [
          "Valleys, hips, and ridges create cut patterns and starter waste.",
          "Dormers and penetrations increase cut-up and flashing details.",
          "Shingle style and exposure can change how much reuse you get from offcuts.",
          "Bundle rounding (and minimum order quantities) adds “paper waste” even if cuts are efficient.",
        ],
      },
      {
        heading: "Accessories are separate",
        bullets: [
          "Starter, ridge caps, underlayment, flashing, drip edge, and nails are separate line items.",
          "Confirm bundles-per-square for your exact shingle product.",
        ],
      },
      {
        heading: "Practical planning tip",
        paragraphs: [
          "Estimate field shingles from roof surface area, apply a waste factor, then convert to squares/bundles using the product packaging. Treat starter and ridge caps as separate estimates based on product guidance and ridge length.",
        ],
      },
    ],
    related: [
      { label: "Roofing calculator", href: "/en/calculators/home-improvement/roofing" },
      { label: "Roofing guide", href: "/en/guides/home-improvement/roofing" },
    ],
  },
  {
    slug: "tile-layout-pattern-waste",
    title: "Tile pattern waste (straight vs diagonal vs herringbone)",
    description:
      "Why tile patterns change waste and how to choose a safer overage percentage.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Waste by layout (planning)",
        table: {
          columns: ["Layout", "Typical waste", "Notes"],
          rows: [
            ["Straight lay", "7-10%", "Simple rooms"],
            ["Diagonal", "12-15%", "More offcuts"],
            ["Herringbone / complex", "15-20%+", "High cut-up factor"],
          ],
        },
      },
      {
        heading: "Why patterns increase waste",
        paragraphs: [
          "Patterns increase waste because more tiles become “angle cut” pieces that cannot be reused elsewhere. Herringbone and other repeating patterns also force more alignment cuts at edges and around penetrations.",
          "Large format tile can add waste because breakage risk and cut difficulty go up. Even if the math says a lower waste factor, experience often says to plan more for handling and mistakes.",
        ],
      },
      {
        heading: "When to increase waste",
        bullets: [
          "Many corners, niches, or penetrations (plumbing, vents).",
          "Large format tile (harder cuts; more breakage risk).",
          "If matching later is hard (dye lots), buying enough now matters.",
        ],
      },
      {
        heading: "Buying tip",
        paragraphs: [
          "Use box coverage from the label, add waste for the layout, then round up to whole boxes. Keep a few spares for future repairs if the tile style might be discontinued.",
        ],
      },
    ],
    related: [
      { label: "Tile calculator", href: "/en/calculators/home-improvement/tile" },
      { label: "Tile waste percentage guide", href: "/en/resources/tile-waste-percentage-guide" },
    ],
  },
  {
    slug: "tile-box-coverage-checklist",
    title: "Tile box coverage checklist (avoid the #1 mistake)",
    description:
      "How to use box coverage correctly and avoid mixing units and packaging assumptions.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Checklist",
        bullets: [
          "Use the label coverage per box (sq ft or m2), not tile dimensions alone.",
          "Round up to whole boxes (partial boxes are not practical to buy).",
          "Add overage based on layout complexity before converting to boxes.",
          "If you need trim pieces, mosaics, or borders, estimate them separately.",
        ],
      },
      {
        heading: "Why this matters",
        paragraphs: [
          "Two tiles with the same size can have different coverage per box because pieces-per-carton differ. Label coverage is the reliable number.",
        ],
      },
    ],
    related: [
      { label: "Tile calculator", href: "/en/calculators/home-improvement/tile" },
      { label: "Tile waste guide", href: "/en/guides/home-improvement/tile-waste" },
    ],
  },
  {
    slug: "deck-board-gap-and-coverage",
    title: "Deck board gap and coverage (how spacing changes board count)",
    description:
      "How board width and gapping affect coverage and why 'actual' width matters.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "What changes coverage",
        bullets: [
          "Actual board width (nominal sizes are larger than actual).",
          "Gap spacing (especially for composites) changes coverage slightly across wide decks.",
          "Picture framing and diagonal layouts increase waste.",
        ],
      },
      {
        heading: "Practical advice",
        paragraphs: [
          "For accurate planning, confirm your product's actual width and recommended gap. Then add waste for cuts and keep a few spare boards for future repairs.",
        ],
      },
    ],
    related: [
      { label: "Deck board calculator", href: "/en/calculators/home-improvement/deck" },
      { label: "Deck guide", href: "/en/guides/home-improvement/deck" },
    ],
  },
  {
    slug: "deck-diagonal-waste-guide",
    title: "Diagonal deck board waste guide (how much extra?)",
    description:
      "Why diagonal deck layouts waste more material and how to pick a safer buffer.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Rule of thumb waste ranges",
        table: {
          columns: ["Layout", "Typical waste", "Notes"],
          rows: [
            ["Straight", "5-10%", "Fewer angle cuts"],
            ["Diagonal", "10-15%", "More cutoffs"],
            ["Picture frame + diagonal", "12-20%", "Miter waste adds up"],
          ],
        },
      },
      {
        heading: "Why diagonal layouts waste more",
        paragraphs: [
          "A diagonal layout creates angled end cuts on almost every board, and many of those offcuts are too short (or the wrong angle) to reuse elsewhere.",
          "Waste increases further when you add picture framing, borders, or stair stringers because each feature changes cut patterns and reduces reuse.",
        ],
      },
      {
        heading: "How to choose a safer buffer",
        bullets: [
          "If your deck is a simple rectangle, start in the 10-15% range for diagonal.",
          "If you have many cut interruptions (posts, stairs, borders), increase buffer to reduce mid-project shortages.",
          "If color matching matters (some composite products), buying enough up front is safer than topping up later.",
        ],
      },
      {
        heading: "When to increase",
        bullets: [
          "Many stairs, borders, and blocking details.",
          "If you need consistent color later, buying extra up front is safer.",
        ],
      },
    ],
    related: [
      { label: "Deck board calculator", href: "/en/calculators/home-improvement/deck" },
      { label: "Baseboard and trim waste tips", href: "/en/resources/baseboard-trim-waste-tips" },
    ],
  },
  {
    slug: "studs-corners-and-openings-guide",
    title: "Studs: corners and openings (why simple spacing math fails)",
    description:
      "A practical framing note: corners, T-walls, and openings add studs beyond length/spacing.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Where extra studs come from",
        bullets: [
          "Corners (2-stud vs 3-stud corners).",
          "T-intersections and backing/blocking needs.",
          "Door/window openings with king/jack studs and header support.",
        ],
      },
      {
        heading: "What the simple calculator gives you (and what it does not)",
        paragraphs: [
          "A spacing calculator is good at estimating “field studs” along straight wall runs. That is the baseline. Real framing uses additional studs where loads transfer, where drywall needs backing, and where openings need structural support.",
          "Because those details vary by layout and local practice, the most reliable approach is: calculate the baseline, then add explicit allowances for corners and each opening.",
        ],
      },
      {
        heading: "A simple add-on method (easy to apply)",
        bullets: [
          "Add a corner allowance per corner (based on your corner detail).",
          "Add an opening allowance per window/door (king/jack studs, header support, and possible cripples).",
          "Add blocking/backing allowance for cabinets, handrails, or fixtures if you know they are required.",
        ],
      },
      {
        heading: "Worked example (quick mental planning)",
        paragraphs: [
          "Suppose your baseline estimate is 50 studs for the straight runs. If your layout has 4 corners and 3 openings (2 windows and 1 door), you might add an allowance for corners plus an allowance for each opening. The exact number depends on the framing detail, but the important point is that openings and corners can change the total more than people expect in small rooms.",
          "If you are pricing lumber, these “details studs” are also where cut waste increases, because short pieces and header supports create offcuts.",
        ],
      },
      {
        heading: "Planning tip",
        paragraphs: [
          "Use your calculator result as a baseline, then add a buffer for corners, openings, and blocking based on your layout. Local practice and code vary.",
        ],
      },
    ],
    related: [
      { label: "Studs calculator", href: "/en/calculators/home-improvement/studs" },
      { label: "Stud spacing guide", href: "/en/resources/stud-spacing-16-vs-24-on-center" },
    ],
  },
  {
    slug: "baseboard-linear-feet-to-pieces",
    title: "Baseboard: linear feet to pieces (why piece length matters)",
    description:
      "How to convert total trim length into pieces and avoid running short due to cut planning.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Quick planning idea",
        paragraphs: [
          "Even if your total linear feet are correct, you can still run short if you do not plan how those feet break into pieces around corners and doors.",
        ],
      },
      {
        heading: "Checklist",
        bullets: [
          "Confirm piece length (8 ft, 12 ft, 16 ft).",
          "Count corners and short runs that create unusable offcuts.",
          "Add a buffer for miter waste and out-of-square cuts.",
        ],
      },
    ],
    related: [
      { label: "Baseboard & trim calculator", href: "/en/calculators/home-improvement/baseboard-trim" },
      { label: "Baseboard waste tips", href: "/en/resources/baseboard-trim-waste-tips" },
    ],
  },
  {
    slug: "flooring-direction-waste",
    title: "Flooring direction and waste (why plank direction changes the math)",
    description:
      "How plank direction and room shape impact waste and box count planning.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "What increases waste",
        bullets: [
          "Diagonal layouts or many small rooms/closets.",
          "Hallways and narrow runs that create offcuts.",
          "Patterned installs or strict seam rules from the manufacturer.",
        ],
      },
      {
        heading: "Direction changes where the cuts land",
        paragraphs: [
          "Plank direction determines which walls require the most end cuts and which areas produce unusable offcuts. In a long, narrow space, running planks the long way can reduce the number of short end pieces. In complex layouts, direction can move waste from one area to another.",
          "If you are installing through multiple connected rooms, transitions and doorways can also force cut patterns that increase waste beyond a simple rectangle estimate.",
        ],
      },
      {
        heading: "How to estimate waste more reliably",
        bullets: [
          "Start with a baseline waste factor for a simple rectangle (straight layout).",
          "Add extra waste for each additional room, closet, or hallway because offcuts are harder to reuse.",
          "Increase waste if the product requires strict staggering rules or if you need consistent color/lot matching.",
        ],
      },
      {
        heading: "Practical rule of thumb",
        paragraphs: [
          "Start with a reasonable waste factor, then increase it if the layout is complex or if you need strict color/lot matching.",
        ],
      },
    ],
    related: [
      { label: "Flooring calculator", href: "/en/calculators/home-improvement/flooring" },
      { label: "Flooring boxes guide", href: "/en/guides/home-improvement/flooring-boxes" },
    ],
  },
  {
    slug: "flooring-boxes-rounding",
    title: "Flooring boxes rounding (why you should round up)",
    description:
      "Why flooring is purchased in whole boxes and how to round safely without wasting money.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why rounding matters",
        bullets: [
          "Boxes are sold as whole cartons; partial cartons are not practical.",
          "Running short mid-install can force mismatched lots and delays.",
          "Keeping a small spare amount is useful for future repairs.",
        ],
      },
      {
        heading: "A simple rounding method (reliable buying plan)",
        bullets: [
          "Convert your measured area into the product unit (sq ft or sq m).",
          "Apply a realistic waste factor (layout drives waste more than people expect).",
          "Divide by box coverage from the product label and round up to whole boxes.",
        ],
      },
      {
        heading: "Worked example (quick planning)",
        paragraphs: [
          "If your floor is 420 sq ft and you plan 10% waste, budget 462 sq ft. If a box covers 20 sq ft, you need 462/20 = 23.1 boxes, so you buy 24 boxes.",
          "That last box is not “waste” in most projects—it's insurance against breakage, cuts, and future repairs.",
        ],
      },
      {
        heading: "Practical advice",
        paragraphs: [
          "Use the exact product's box coverage from the label, apply waste, then round up to whole boxes.",
        ],
      },
    ],
    related: [
      { label: "Flooring calculator", href: "/en/calculators/home-improvement/flooring" },
      { label: "Flooring boxes guide", href: "/en/guides/home-improvement/flooring-boxes" },
    ],
  },
  {
    slug: "wallpaper-rolls-by-wall-height",
    title: "Wallpaper rolls by wall height (why tall walls need more)",
    description:
      "Why wall height changes strips-per-roll and how pattern repeat increases waste.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why height changes rolls",
        paragraphs: [
          "Wallpaper is cut into full-height strips. Taller walls reduce how many strips you get per roll, especially with pattern repeat and trimming.",
        ],
      },
      {
        heading: "Pattern repeat can be a bigger driver than height",
        paragraphs: [
          "If the wallpaper has a repeat, you lose usable length per strip because you need to align the pattern. The larger the repeat, the more “waste length” per strip.",
          "For reliable planning, use the manufacturer strips-per-roll guidance when available, because it accounts for common repeats and roll length assumptions.",
        ],
      },
      {
        heading: "When to increase rolls",
        bullets: [
          "Large pattern repeat (more trimming to align).",
          "Many windows/doors and corners (more separate strips).",
          "If you may need repairs later, matching lot/batch matters.",
        ],
      },
      {
        heading: "Practical tip",
        paragraphs: [
          "Measure wall height carefully (including crown molding decisions). A small height difference can change how many full strips fit in a roll.",
        ],
      },
    ],
    related: [
      { label: "Wallpaper rolls calculator", href: "/en/calculators/home-improvement/wallpaper-rolls" },
      { label: "Pattern repeat and waste", href: "/en/resources/wallpaper-pattern-repeat-waste" },
    ],
  },
  {
    slug: "paver-bedding-sand-thickness",
    title: "Paver bedding sand thickness (how much is typical?)",
    description:
      "Bedding sand thickness basics and why it should not be used as a leveling layer.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Typical thickness (planning)",
        table: {
          columns: ["Layer", "Typical thickness", "Notes"],
          rows: [
            ["Compacted base", "4-12 in", "Depends on use case and soil"],
            ["Bedding sand", "1 in (approx.)", "Not a thick leveling layer"],
          ],
        },
      },
      {
        heading: "Why bedding sand should stay thin",
        paragraphs: [
          "Bedding sand is a leveling and setting layer for pavers, not a structural layer. Thick sand can shift, wash out, or create uneven settlement—especially if the base below is not properly graded and compacted.",
          "If you need to correct grade or solve drainage problems, do it in the base layer. Using sand to fix base issues usually creates a short-term “looks good” result that fails later.",
        ],
      },
      {
        heading: "Common mistake",
        bullets: [
          "Do not use bedding sand to fix a bad base. Fix grade and compaction first.",
          "Compaction changes thickness; plan accordingly.",
        ],
      },
      {
        heading: "Estimating tip (treat layers separately)",
        paragraphs: [
          "Estimate base stone and bedding sand as separate materials. Base depth is measured in inches but ordered in cubic yards or tons; sand is usually a thinner layer with different density and delivery needs.",
        ],
      },
    ],
    related: [
      { label: "Paver base calculator", href: "/en/calculators/home-improvement/paver-base" },
      { label: "Paver base depth guide", href: "/en/resources/paver-base-depth-guide" },
    ],
  },
  {
    slug: "soil-mix-ratio-for-raised-beds",
    title: "Soil mix ratio for raised beds (starting points)",
    description:
      "Practical starting ratios for raised beds and what to adjust for drainage and fertility.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Common starting mixes",
        table: {
          columns: ["Mix (by volume)", "Good for", "Note"],
          rows: [
            ["50% compost + 50% topsoil", "General beds", "Simple starting point"],
            ["40% topsoil + 40% compost + 20% aeration", "Better drainage", "Adjust for climate"],
          ],
        },
      },
      {
        heading: "How to adjust the mix (simple rules)",
        bullets: [
          "If the bed stays wet or drains poorly, increase aeration/structure (not just compost).",
          "If the mix dries too fast, increase water-holding materials and plan mulching/topdressing.",
          "If compost is very fresh or very fine, reduce the percentage and add structure so the bed does not slump.",
        ],
      },
      {
        heading: "Avoid over-amending",
        bullets: [
          "Too much compost can reduce structure in some soils.",
          "If drainage is poor, address structure (aeration) not just fertility.",
        ],
      },
      {
        heading: "Practical planning tip",
        paragraphs: [
          "Treat soil as a “base mix” and plan to topdress later. Beds settle over time, and adding a thin layer of compost or topsoil is often easier than trying to build the perfect mix on day one.",
        ],
      },
    ],
    related: [
      { label: "Soil mix calculator", href: "/en/calculators/home-improvement/soil-mix" },
      { label: "Topsoil coverage chart", href: "/en/resources/topsoil-coverage-chart" },
    ],
  },
  {
    slug: "topsoil-leveling-feathering-guide",
    title: "Topsoil leveling feathering guide (avoid sharp edges)",
    description:
      "Why you should feather edges when leveling low spots and how to plan depth.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why feathering matters",
        bullets: [
          "Sharp edges create mowing problems and poor drainage transitions.",
          "Feathering spreads the thickness change over distance, improving finish and water flow.",
        ],
      },
      {
        heading: "What feathering looks like in practice",
        paragraphs: [
          "Instead of dumping soil into a low spot with a sharp edge, you spread the transition out so the thickness tapers gradually. This makes it easier to rake flat and avoids creating a “lip” that catches water or a mower wheel.",
          "A simple mental model: most low spots are not a uniform depth across their area. They are deeper in the center and taper toward the edges—so your estimate should be based on an average thickness, not the deepest point.",
        ],
      },
      {
        heading: "Depth planning tip",
        paragraphs: [
          "Take multiple depth checks and use an average thickness. One low spot can inflate your order if you treat it as the whole area depth.",
        ],
      },
      {
        heading: "Practical checklist",
        bullets: [
          "Mark the low area and the feathering zone (it is usually bigger than the low spot).",
          "Measure several depths, average them, then add a small buffer for settling.",
          "Water lightly and re-check after settling; some projects need a second light top-up.",
        ],
      },
    ],
    related: [
      { label: "Topsoil calculator", href: "/en/calculators/home-improvement/topsoil" },
      { label: "Topsoil leveling guide", href: "/en/guides/home-improvement/topsoil-leveling" },
    ],
  },
  {
    slug: "mulch-depth-1-2-3-inches",
    title: "Mulch depth 1 vs 2 vs 3 inches (what changes?)",
    description:
      "How mulch depth changes volume and why 'just a little deeper' doubles material fast.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Depth changes volume linearly",
        paragraphs: [
          "If you double depth, you double volume. This matters because beds are often larger than people think once you include edges and irregular shapes.",
        ],
      },
      {
        heading: "Practical note",
        bullets: [
          "Many beds use 2-3 inches; thin top-ups can be 1 inch.",
          "Keep mulch away from trunks and stems.",
          "Plan extra for settling after watering.",
        ],
      },
    ],
    related: [
      { label: "Mulch calculator", href: "/en/calculators/home-improvement/mulch" },
      { label: "Mulch coverage chart", href: "/en/resources/mulch-coverage-chart" },
    ],
  },
  {
    slug: "gravel-base-vs-top-layer",
    title: "Gravel base vs top layer (estimate layers separately)",
    description:
      "Why base gravel and top gravel often differ and how estimating them separately improves accuracy.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why separate layers",
        bullets: [
          "Base layers often use different aggregate (fines, compaction behavior).",
          "Depth targets differ by use case and soil conditions.",
          "Mixing products can cause drainage and stability problems.",
        ],
      },
      {
        heading: "Base vs top layer roles (what each layer does)",
        paragraphs: [
          "Base material is chosen for compaction and stability. It locks together and supports loads. Top layer material is chosen for finish appearance, drainage behavior, and how it feels under foot or tires.",
          "Because these materials differ, their density and coverage-by-ton can differ too. That is why you should estimate and order them separately.",
        ],
      },
      {
        heading: "Ordering tip",
        paragraphs: [
          "If your supplier sells by tons, use their conversion for each product separately. Density varies by material type and moisture.",
        ],
      },
      {
        heading: "Practical checklist",
        bullets: [
          "Confirm base depth target for your use case (walkway vs driveway).",
          "Confirm top layer depth target and whether it will be compacted.",
          "Order a small buffer for edge containment and grade corrections.",
        ],
      },
    ],
    related: [
      { label: "Gravel calculator", href: "/en/calculators/home-improvement/gravel" },
      { label: "Gravel yards to tons guide", href: "/en/resources/gravel-yards-to-tons-guide" },
    ],
  },
  {
    slug: "concrete-thickened-edge-volume",
    title: "Concrete thickened edge volume (common omission)",
    description:
      "How thickened edges and footings can add meaningful volume beyond slab math.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why it matters",
        paragraphs: [
          "Many slabs include thickened edges or footings. If you ignore them, you can come up short even if the slab volume is correct.",
          "This is a common under-order because thickened edges are “out of sight” once you think in terms of a simple slab thickness. Treat them as a separate volume line item.",
        ],
      },
      {
        heading: "Basic math (separate it into shapes)",
        bullets: [
          "Slab volume = area x slab thickness.",
          "Thickened edge volume = edge length x thickened width x (thickened depth - slab thickness).",
          "If you have multiple thickened zones, calculate each one and add them.",
        ],
      },
      {
        heading: "Worked example (quick planning)",
        paragraphs: [
          "If you have a 12 ft x 20 ft slab at 4 inches thick, the slab volume is 240 sq ft x (4/12) ft ~ 80 cu ft (~ 2.96 cu yd).",
          "If all four edges are thickened to 12 inches deep and 12 inches wide, the extra thickened portion is perimeter (64 ft) x 1 ft x (12/12 - 4/12) ft ~ 42.7 cu ft (~ 1.58 cu yd). That is a large add-on compared to the slab alone.",
        ],
      },
      {
        heading: "Field tips that improve reliability",
        bullets: [
          "Confirm whether thickened dimensions are measured before or after excavation shaping (contractor plans can differ).",
          "If subgrade varies, add a small buffer for low spots and spillage.",
          "If you are ordering ready-mix, confirm minimum order and truck access; delivery constraints can matter more than small volume precision.",
        ],
      },
      {
        heading: "Planning steps",
        bullets: [
          "Estimate slab volume from area and thickness.",
          "Estimate thickened edges/footings separately (length x width x depth) and add them.",
          "Add a buffer for uneven subgrade and spillage.",
        ],
      },
    ],
    related: [
      { label: "Concrete calculator", href: "/en/calculators/home-improvement/concrete" },
      { label: "Concrete guide", href: "/en/guides/home-improvement/concrete" },
    ],
  },
  {
    slug: "asphalt-driveway-base-layer-guide",
    title: "Asphalt driveway base layer guide (gravel matters)",
    description:
      "Why a driveway base layer can cost more than asphalt and how to plan base separately.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why base matters",
        bullets: [
          "Soft subgrade consumes gravel and leads to future cracking.",
          "Drainage and grade fixes often matter more than small asphalt thickness changes.",
          "Rebuilds usually require separate base material estimates.",
        ],
      },
      {
        heading: "Base is a separate scope (and a separate estimate)",
        paragraphs: [
          "Driveway projects often fail because the base is treated as an afterthought. Base depth, compaction, and drainage determine long-term performance more than a small change in asphalt thickness.",
          "For estimating, treat base work as its own line item: excavation, base gravel volume, compaction, and (sometimes) geotextile or drainage details.",
        ],
      },
      {
        heading: "Planning tip",
        paragraphs: [
          "Estimate base gravel (area x depth) separately from asphalt. Treat them as separate materials and deliveries.",
        ],
      },
      {
        heading: "Common drivers of “extra base”",
        bullets: [
          "Soft spots or pumping subgrade that must be removed and rebuilt.",
          "Drainage corrections (regrading, adding swales, fixing low areas).",
          "Widening the driveway or correcting edge breakdown.",
          "Heavy vehicles or frequent turning loads that require stronger support.",
        ],
      },
    ],
    related: [
      { label: "Asphalt driveway calculator", href: "/en/calculators/home-improvement/asphalt-driveway" },
      { label: "Gravel calculator", href: "/en/calculators/home-improvement/gravel" },
    ],
  },
  {
    slug: "paint-coverage-per-gallon-guide",
    title: "Paint coverage per gallon guide (why it varies)",
    description:
      "Why paint coverage changes with surface, texture, and color, and how to plan coats and buffer.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "What changes coverage most",
        bullets: [
          "Fresh drywall and porous surfaces usually need more paint (and often primer).",
          "Heavy texture reduces coverage compared to smooth walls.",
          "Big color changes and dark colors often need extra coats.",
        ],
      },
      {
        heading: "Practical planning",
        paragraphs: [
          "Prefer the product label coverage when you have it. Then add a small buffer for touch-ups and roller/brush waste and round up to whole cans.",
        ],
      },
    ],
    related: [
      { label: "Paint calculator", href: "/en/calculators/home-improvement/paint" },
      { label: "Paint guide", href: "/en/guides/home-improvement/paint" },
    ],
  },
  {
    slug: "ceiling-paint-cut-in-buffer",
    title: "Ceiling paint cut-in buffer (why ceilings take more time and paint)",
    description:
      "Why cut-ins, fixtures, and texture reduce ceiling paint coverage, plus practical buffer tips.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why ceilings burn paint",
        bullets: [
          "Edges and cut-ins around fixtures add waste and time even if area math is correct.",
          "Textured ceilings reduce coverage and require more paint.",
          "Touch-ups can flash under lighting if product/sheens differ.",
        ],
      },
      {
        heading: "Practical tips",
        bullets: [
          "Plan a small buffer (often 5-10%) and keep the same product for touch-ups.",
          "If stains exist, use a stain-blocking primer first.",
        ],
      },
    ],
    related: [
      { label: "Paint ceiling guide", href: "/en/guides/home-improvement/paint-ceiling" },
      { label: "Paint calculator", href: "/en/calculators/home-improvement/paint" },
    ],
  },
  {
    slug: "trim-paint-area-from-linear-feet",
    title: "Trim paint area from linear feet (simple method)",
    description:
      "How to convert baseboard/casing length into paintable area using face width.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Simple formula",
        paragraphs: [
          "Trim area (sq ft) = total linear feet x average face width (in feet). Example: 300 ft of baseboard at 3.5 in face width is 300 x (3.5/12) ≈ 87.5 sq ft per coat.",
        ],
      },
      {
        heading: "Common misses",
        bullets: [
          "Door/window casings add more area than people expect.",
          "Prep and primer matter more on glossy trim than on walls.",
        ],
      },
    ],
    related: [
      { label: "Paint trim guide", href: "/en/guides/home-improvement/paint-trim" },
      { label: "Baseboard & trim calculator", href: "/en/calculators/home-improvement/baseboard-trim" },
    ],
  },
  {
    slug: "drywall-finish-levels-0-5",
    title: "Drywall finish levels (Level 0 to Level 5) and material impact",
    description:
      "How finish level affects mud usage and why higher levels require more compound and sanding.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Quick overview",
        table: {
          columns: ["Finish level", "Typical use", "Material impact"],
          rows: [
            ["Level 2", "Garages/utility", "Lower compound use"],
            ["Level 4", "Most painted walls", "More coats and sanding"],
            ["Level 5", "Critical lighting/smooth", "Highest compound use"],
          ],
        },
      },
      {
        heading: "Planning note",
        paragraphs: [
          "If you target a higher finish level, plan more joint compound and time than a basic finish. Texture and paint can hide some imperfections, but lighting can expose them.",
        ],
      },
    ],
    related: [
      { label: "Drywall mud & tape calculator", href: "/en/calculators/home-improvement/drywall-mud-tape" },
      { label: "Drywall guide", href: "/en/guides/home-improvement/drywall" },
    ],
  },
  {
    slug: "deck-mud-mix-ratio-guide",
    title: "Deck mud mix ratio guide (sand-to-cement)",
    description:
      "A practical deck mud note: common ratios, what changes workability, and why consistency matters.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Common ratios (by volume)",
        table: {
          columns: ["Ratio", "Use note", "Reminder"],
          rows: [
            ["5:1 sand:cement", "Common starting point", "Follow system guidance"],
            ["4:1 sand:cement", "Sometimes for higher strength", "Workability changes"],
          ],
        },
      },
      {
        heading: "What “deck mud” is (and what it is not)",
        paragraphs: [
          "Deck mud (also called dry pack) is intentionally low-water and packable. The goal is a stable, shaped bed that can be compacted and screeded to flat or to slope.",
          "Because it is drier than many other mixes, it behaves differently: water content, sand type, and mixing consistency matter more than people expect.",
        ],
      },
      {
        heading: "Water content (the most common failure point)",
        paragraphs: [
          "A useful mental model: deck mud should hold together when squeezed, but it should not ooze water. Too wet makes it harder to pack and can weaken the bed; too dry makes it crumbly and difficult to finish.",
          "If you are mixing multiple batches, the goal is repeatability. Small differences between batches can show up as soft spots or finish texture changes.",
        ],
        bullets: [
          "Measure water consistently (do not guess per batch).",
          "Mix thoroughly before adding more water; dry pockets create weak areas.",
          "Do a squeeze test each batch to keep consistency similar.",
        ],
      },
      {
        heading: "Batch planning (avoid mixing surprises)",
        paragraphs: [
          "Before you start, estimate total volume so you can plan the number of batches and the time window. If you run short mid-bed, you risk a cold joint or a consistency change that affects finish quality.",
        ],
        bullets: [
          "Stage sand and cement where they are easy to access.",
          "Use a consistent bucket or container for volume ratios.",
          "If you are unsure, mix a small test batch and verify workability before committing to the full job.",
        ],
      },
      {
        heading: "Practical reminder",
        bullets: [
          "Use the right sand type per local practice and product guidance.",
          "Consistency matters: running short mid-bed can change mix behavior and finish.",
        ],
      },
    ],
    related: [
      { label: "Deck mud calculator", href: "/en/calculators/home-improvement/deck-mud" },
      { label: "Deck mud coverage chart", href: "/en/resources/deck-mud-coverage-chart" },
    ],
  },
  {
    slug: "concrete-cure-vs-dry-time",
    title: "Concrete cure vs dry time (planning checklist)",
    description:
      "A practical planning note: curing vs drying, and why timing matters more than most people expect.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Cure vs dry",
        paragraphs: [
          "Curing is the strength-gain process; drying is moisture leaving the slab. Concrete can feel dry on top before it reaches useful strength, and it can take longer to dry for some finishes.",
        ],
      },
      {
        heading: "Planning checklist",
        bullets: [
          "Follow product guidance for sealers, coatings, and flooring install timing.",
          "Protect the slab from early drying and weather if recommended by your mix/conditions.",
          "For critical work, confirm with your contractor/supplier.",
        ],
      },
    ],
    related: [
      { label: "Concrete calculator", href: "/en/calculators/home-improvement/concrete" },
      { label: "Concrete guide", href: "/en/guides/home-improvement/concrete" },
    ],
  },
  {
    slug: "gravel-tons-vs-tonnes",
    title: "Gravel tons vs tonnes (avoid unit mix-ups)",
    description:
      "How short tons and metric tonnes differ and why unit mix-ups change your order.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Quick conversion",
        table: {
          columns: ["Unit", "Equals", "Note"],
          rows: [
            ["1 short ton (US)", "2000 lb", "Common in the US"],
            ["1 metric tonne", "2204.62 lb", "Common outside the US"],
          ],
        },
      },
      {
        heading: "Why this mix-up is expensive",
        paragraphs: [
          "If your supplier quotes in tonnes and you budget in short tons (or the reverse), your total delivered weight can be off by about 10%. On material orders, that can mean running short or overpaying.",
          "The confusion often happens when a quote says “ton” but does not specify which one. Always confirm the unit in writing before you order.",
        ],
      },
      {
        heading: "Worked example (10-ton order)",
        paragraphs: [
          "If you order 10 short tons, that is 20,000 lb. If you order 10 metric tonnes, that is about 22,046 lb. The difference is about 2,046 lb—roughly one extra short ton of material.",
          "If you are converting from volume (cubic yards) to weight, density assumptions usually add even more uncertainty. That is why supplier-specific conversions matter.",
        ],
      },
      {
        heading: "Practical tip",
        bullets: [
          "Confirm the unit your supplier uses (tons vs tonnes).",
          "Use the supplier density conversion for your specific product.",
          "If you need a quick check: 1 metric tonne ~ 1.102 short tons.",
        ],
      },
    ],
    related: [
      { label: "Gravel tons converter", href: "/en/calculators/home-improvement/gravel-tons" },
      { label: "Gravel yards to tons guide", href: "/en/resources/gravel-yards-to-tons-guide" },
    ],
  },
  {
    slug: "mulch-bag-sizes-2-vs-3-cu-ft",
    title: "Mulch bag sizes (2 vs 3 cu ft) and why it changes bag count",
    description:
      "A quick planning note: bag size is the biggest input for bagged mulch estimates.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Typical bag sizes",
        table: {
          columns: ["Bag size", "Volume", "Notes"],
          rows: [
            ["2 cu ft", "2 cubic feet", "Very common"],
            ["3 cu ft", "3 cubic feet", "Fewer bags, heavier"],
          ],
        },
      },
      {
        heading: "Practical tip",
        bullets: [
          "Convert your bed volume to cubic feet, divide by bag size, then round up.",
          "Buy enough in one batch if color matching matters.",
        ],
      },
    ],
    related: [
      { label: "Mulch bags calculator", href: "/en/calculators/home-improvement/mulch-bags" },
      { label: "Mulch bag coverage guide", href: "/en/resources/mulch-bag-coverage-guide" },
    ],
  },
  {
    slug: "topsoil-bag-liters-to-cubic-feet",
    title: "Topsoil bag liters to cubic feet (quick conversion)",
    description:
      "How to convert liters to cubic feet for bagged soil estimates and avoid unit confusion.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Quick conversion",
        paragraphs: [
          "1 cubic foot is about 28.3 liters. If a bag is labeled in liters, divide liters by 28.3 to get cubic feet.",
        ],
      },
      {
        heading: "Quick reference table",
        table: {
          columns: ["Liters", "Cubic feet (approx.)", "Common note"],
          rows: [
            ["25 L", "0.88 cu ft", "Small bag"],
            ["40 L", "1.41 cu ft", "Common bag size"],
            ["50 L", "1.77 cu ft", "Common bag size"],
            ["60 L", "2.12 cu ft", "Large bag"],
          ],
        },
      },
      {
        heading: "Worked example (bag count)",
        paragraphs: [
          "If you need 18 cubic feet of soil and your bag is 40 L, that bag is about 1.41 cu ft. 18 / 1.41 = 12.8, so you buy 13 bags (and usually a small buffer if leveling or filling).",
          "If the project is large, compare bag totals to bulk volume. 1 cubic yard is 27 cubic feet, so bags add up quickly.",
        ],
      },
      {
        heading: "Why it matters",
        bullets: [
          "Some regions label bags in liters, others in cubic feet.",
          "Mixing units is a common reason bag counts are off by a lot.",
        ],
      },
    ],
    related: [
      { label: "Topsoil bags calculator", href: "/en/calculators/home-improvement/topsoil-bags" },
      { label: "Topsoil bag coverage guide", href: "/en/resources/topsoil-bag-coverage-guide" },
    ],
  },
  {
    slug: "sand-bedding-vs-leveling",
    title: "Sand: bedding vs leveling (why base matters)",
    description:
      "Why sand should not be used as a thick leveling layer for pavers and how base prep affects estimates.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Key idea",
        bullets: [
          "Sand is typically a thin bedding layer, not a structural leveling layer.",
          "Base stone and compaction control stability and drainage.",
          "If you need to correct grade, fix base depth and compaction first.",
        ],
      },
      {
        heading: "Planning tip",
        paragraphs: [
          "Estimate base stone and bedding sand separately. Do not compensate for a weak base by adding more sand.",
        ],
      },
    ],
    related: [
      { label: "Paver base calculator", href: "/en/calculators/home-improvement/paver-base" },
      { label: "Sand calculator", href: "/en/calculators/home-improvement/sand" },
    ],
  },
  {
    slug: "fence-panel-vs-picket-estimate",
    title: "Fence estimate: panels vs pickets (what changes)",
    description:
      "How fence style changes counting: prebuilt panels vs pickets, spacing, and waste planning.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "What changes between styles",
        bullets: [
          "Panels: count panels and posts; spacing is usually fixed by panel width.",
          "Pickets: count pickets by spacing; waste increases on slopes and corners.",
          "Gates and corners add posts beyond simple runs.",
        ],
      },
      {
        heading: "Panel estimating (fast and reliable)",
        paragraphs: [
          "With panels, most of the estimate is: number of panels + number of posts + number of gates. Panel width usually determines post spacing, and the install is less sensitive to picket spacing decisions.",
          "Even with panels, sloped terrain and stepped installs can require extra planning around end conditions and cut panels.",
        ],
      },
      {
        heading: "Picket estimating (spacing drives the count)",
        paragraphs: [
          "With pickets, the count depends on picket width and the gap you choose. Small spacing changes add up across long runs. You also have more cut waste on slopes, corners, and around gates.",
        ],
        bullets: [
          "Decide whether pickets butt together or have a gap (and how much).",
          "Confirm whether you will overlap pickets (privacy styles change math).",
          "Plan extra pickets for cuts at the ends of runs and for stepped sections.",
        ],
      },
      {
        heading: "Planning tip",
        paragraphs: [
          "Decide style first. Panel math and picket math differ, and switching late can invalidate your estimate.",
        ],
      },
    ],
    related: [
      { label: "Fence calculator", href: "/en/calculators/home-improvement/fence" },
      { label: "Fence posts guide", href: "/en/guides/home-improvement/fence-posts" },
    ],
  },
  {
    slug: "tile-grout-sanded-vs-unsanded",
    title: "Tile grout: sanded vs unsanded (quick choice guide)",
    description:
      "A simple grout choice guide: what changes between sanded and unsanded and what to confirm on the bag.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Quick guide",
        bullets: [
          "Product choice depends on joint width and tile type; follow the bag and manufacturer guidance.",
          "Some projects use specialty grouts (epoxy, urethane) with different handling and coverage.",
          "Movement joints use caulk/sealant, not grout.",
        ],
      },
      {
        heading: "Planning note",
        paragraphs: [
          "Coverage varies by product. If you need a tighter estimate, use the exact bag yield chart for your chosen grout.",
        ],
      },
    ],
    related: [
      { label: "Tile grout calculator", href: "/en/calculators/home-improvement/tile-grout" },
      { label: "Tile grout coverage guide", href: "/en/resources/tile-grout-coverage-guide" },
    ],
  },
  {
    slug: "roofing-starter-and-ridge-cap",
    title: "Roofing starter strip and ridge cap (common misses)",
    description:
      "Why starter and ridge caps are separate from field shingles and how they affect ordering.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "What people forget",
        bullets: [
          "Starter strip coverage and ridge cap coverage are separate line items.",
          "Some ridge caps are cut from shingles; others are a dedicated product.",
          "Underlayment and flashing are also separate materials.",
        ],
      },
      {
        heading: "Practical advice",
        paragraphs: [
          "Use your roofing calculator for field shingles, then add starter and ridge caps based on the product guidance and your ridge length.",
        ],
      },
    ],
    related: [
      { label: "Roofing calculator", href: "/en/calculators/home-improvement/roofing" },
      { label: "Roofing guide", href: "/en/guides/home-improvement/roofing" },
    ],
  },
  {
    slug: "concrete-psi-and-mix-choice",
    title: "Concrete PSI and mix choice (planning note)",
    description:
      "A practical checklist for ready-mix: PSI/MPa, slump, fiber, and admixtures that affect cost and performance.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "What suppliers ask",
        bullets: [
          "Strength (PSI/MPa) and aggregate size.",
          "Slump (workability) and whether you need fiber.",
          "Admixtures (accelerator/retarder) based on weather and timing.",
        ],
      },
      {
        heading: "Strength selection (PSI/MPa) — what to clarify",
        paragraphs: [
          "Strength is not just a number: it affects cost, finishing window, and sometimes minimum cement content. When you hear a strength target, confirm whether it is a code minimum, a contractor preference, or a requirement for a specific use case.",
          "If you are unsure what to order, your supplier can usually recommend a standard mix for your application—but you should still confirm any local requirements for structural work.",
        ],
        bullets: [
          "Confirm whether the job is structural or non-structural (slabs, footings, piers, etc.).",
          "Ask if air-entrainment is recommended for freeze/thaw exposure in your area.",
          "Confirm the maximum aggregate size if you have tight reinforcement spacing or small forms.",
        ],
      },
      {
        heading: "Slump (workability) — why it changes placement",
        paragraphs: [
          "Slump is a quick way to describe how workable the concrete is. Higher slump can make placement easier in some situations, but too much water can reduce performance and cause finishing issues.",
          "If you need easier placement, it is often better to use the right admixture plan than to add water on site. Discuss this before the truck arrives.",
        ],
      },
      {
        heading: "Fiber, reinforcement, and cracking (what to expect)",
        paragraphs: [
          "Fiber can help with plastic shrinkage cracking and handling, but it is not automatically a replacement for reinforcement. Crack control depends on joints, thickness, base condition, curing, and reinforcement strategy.",
          "The most common planning miss is ignoring joints and curing. Even a great mix can crack if joints are wrong or if the surface dries too fast.",
        ],
        bullets: [
          "Plan control joints and spacing before you pour (layout matters).",
          "Plan curing method and timing (especially in hot, windy, or dry conditions).",
          "Confirm reinforcement requirements for the project; local practice varies.",
        ],
      },
      {
        heading: "Reminder",
        paragraphs: [
          "Mix selection affects cost and placement. For critical work, follow code and supplier guidance rather than generic assumptions.",
        ],
      },
    ],
    related: [
      { label: "Concrete guide", href: "/en/guides/home-improvement/concrete" },
      { label: "Concrete calculator", href: "/en/calculators/home-improvement/concrete" },
    ],
  },
  {
    slug: "deck-mud-slope-per-foot",
    title: "Deck mud slope per foot (shower pan planning)",
    description:
      "A practical slope note for deck mud: why average thickness matters when you build slope.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why average thickness matters",
        paragraphs: [
          "A sloped bed is thicker at the perimeter than at the drain. Estimate volume using average thickness (measure high and low points, then average).",
        ],
      },
      {
        heading: "Planning checklist",
        bullets: [
          "Confirm waterproofing system and drain type first; they determine build-up.",
          "Measure perimeter and drain thickness and average them for estimating.",
          "Round up to avoid running short mid-bed.",
        ],
      },
    ],
    related: [
      { label: "Deck mud calculator", href: "/en/calculators/home-improvement/deck-mud" },
      { label: "Deck mud coverage chart", href: "/en/resources/deck-mud-coverage-chart" },
    ],
  },
  {
    slug: "stud-plates-lumber-planning",
    title: "Stud plates lumber planning (top/bottom plates)",
    description:
      "A practical framing note: plates are often underestimated and are purchased in standard lengths.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why plates add up",
        bullets: [
          "Walls typically need bottom plates and (often) double top plates.",
          "Corners and openings can increase blocking and plate needs.",
          "Lumber comes in standard lengths; plan cut waste.",
        ],
      },
      {
        heading: "Quick estimating method",
        paragraphs: [
          "A simple starting point: take total wall length and multiply by the number of plate runs you need. A common wall uses one bottom plate and two top plates (three total runs), but details vary by project and local practice.",
          "After you have total plate linear feet, convert to stick counts based on the lengths you plan to buy (8 ft, 10 ft, 12 ft, 16 ft), then add a buffer for cuts and splices.",
        ],
        bullets: [
          "Plate LF = wall LF x number of plate runs.",
          "Stick count = plate LF / stick length, rounded up.",
          "Add buffer for waste, especially with short wall segments and many openings.",
        ],
      },
      {
        heading: "Common misses (plates are not just straight runs)",
        bullets: [
          "Splices: plates must break over studs and require overlap planning.",
          "Openings: some layouts need extra short plate pieces and blocking.",
          "Corners and T-walls can require extra backing depending on your framing detail.",
        ],
      },
      {
        heading: "Planning tip",
        paragraphs: [
          "Use your studs calculator for a baseline, then confirm plate rules and lengths based on local practice and code.",
        ],
      },
    ],
    related: [
      { label: "Studs calculator", href: "/en/calculators/home-improvement/studs" },
      { label: "Studs corners and openings guide", href: "/en/resources/studs-corners-and-openings-guide" },
    ],
  },
  {
    slug: "wallpaper-openings-subtract-or-not",
    title: "Wallpaper openings: subtract or not? (practical answer)",
    description:
      "When subtracting doors/windows helps and when it does not because waste dominates.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Practical rule",
        bullets: [
          "For quick estimates, many people do not subtract openings and rely on a waste factor.",
          "If you want a tighter estimate, subtract large openings, but keep a realistic waste factor for corners and pattern matching.",
        ],
      },
      {
        heading: "Pattern repeat matters",
        paragraphs: [
          "If the wallpaper has a repeat, usable length per roll drops. Manufacturer strips-per-roll guidance is often the safest method.",
        ],
      },
    ],
    related: [
      { label: "Wallpaper rolls calculator", href: "/en/calculators/home-improvement/wallpaper-rolls" },
      { label: "Pattern repeat and waste", href: "/en/resources/wallpaper-pattern-repeat-waste" },
    ],
  },
  {
    slug: "flooring-underlayment-checklist",
    title: "Flooring underlayment checklist (common misses)",
    description:
      "A simple checklist of materials people forget when estimating flooring.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Checklist",
        bullets: [
          "Underlayment or vapor barrier (product and subfloor dependent).",
          "Transitions, reducers, and stair noses.",
          "Baseboard/shoe molding and quarter round as needed.",
          "Leveling compound for uneven subfloors (separate estimate).",
        ],
      },
      {
        heading: "How to choose the right underlayment (quick decision path)",
        paragraphs: [
          "Underlayment choice depends on the flooring type and what is underneath it. Start with the flooring manufacturer's requirements (they can affect warranty), then match the subfloor conditions (moisture, flatness, and sound).",
        ],
        bullets: [
          "Concrete slab: moisture management is often the first priority (barrier requirements vary by product).",
          "Wood subfloor: flatness and squeak reduction can matter more than vapor management.",
          "Condos: sound control requirements can drive underlayment thickness and type.",
          "Radiant heat: confirm temperature limits and approved underlayment types.",
        ],
      },
      {
        heading: "Common misses (why projects run long)",
        bullets: [
          "Acclimation time and room conditions (temperature/humidity) before install.",
          "Adhesives/fasteners for specific systems (glue-down, nail-down, floating).",
          "Moisture test or primer requirements for slab installs (product dependent).",
          "Extra material for stairs, thresholds, and closets even when the main room math is correct.",
        ],
      },
      {
        heading: "Practical planning tip",
        paragraphs: [
          "Treat underlayment as its own line item with its own coverage rate. Some products are sold by roll/sheet coverage and have overlap waste—so plan a small buffer even when the floor area is exact.",
        ],
      },
    ],
    related: [
      { label: "Flooring calculator", href: "/en/calculators/home-improvement/flooring" },
      { label: "Flooring guide", href: "/en/guides/home-improvement/flooring" },
    ],
  },
  {
    slug: "asphalt-thickness-2-vs-3-inches",
    title: "Asphalt thickness 2 vs 3 inches (why tonnage jumps)",
    description:
      "A quick planning note: asphalt tonnage scales with thickness, and base condition matters.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Key idea",
        paragraphs: [
          "Tonnage scales with thickness. A 3-inch layer is 50% more material than a 2-inch layer for the same area (before compaction and waste).",
        ],
      },
      {
        heading: "Compacted thickness vs loose thickness (confirm this)",
        paragraphs: [
          "Asphalt is typically specified by compacted thickness, but the material is placed and then compacted. If you compare quotes, make sure everyone is talking about the same thickness definition.",
          "If the spec is “2 inches compacted,” the placed thickness will be higher before rolling. That is normal—and it affects material quantities and trucking.",
        ],
      },
      {
        heading: "When 3 inches is more than just “50% more”",
        bullets: [
          "If your base is weak or holds water, thicker asphalt does not fix the root cause (base and drainage dominate).",
          "If the driveway takes heavier vehicles, thicker asphalt is often paired with base upgrades.",
          "If the job requires multiple lifts (layers), waste and logistics can increase.",
        ],
      },
      {
        heading: "Planning note",
        bullets: [
          "Confirm whether thickness is compacted thickness.",
          "Estimate base separately for rebuilds (often the bigger driver).",
        ],
      },
    ],
    related: [
      { label: "Asphalt driveway calculator", href: "/en/calculators/home-improvement/asphalt-driveway" },
      { label: "Asphalt tons guide", href: "/en/resources/asphalt-driveway-tons-guide" },
    ],
  },
  {
    slug: "primer-vs-paint-when-to-prime",
    title: "Primer vs paint (when to prime for better coverage)",
    description:
      "A practical note: primer can improve coverage and adhesion, but it is a separate material step.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "When primer helps",
        bullets: [
          "Fresh drywall and patched areas (reduces flashing).",
          "Stains and problem surfaces (use stain-blocking primer as needed).",
          "Big color changes (can reduce topcoat count).",
          "Glossy surfaces (improves adhesion when properly prepared).",
          "Raw or porous surfaces (helps even out absorption).",
        ],
      },
      {
        heading: "Primer vs extra paint coats (how to decide)",
        paragraphs: [
          "If the main problem is absorption or adhesion, primer is often the cleaner solution. If the surface is sound but coverage is difficult (big color change), primer can still help—but so can simply planning an extra finish coat.",
          "A practical approach: identify your “problem surfaces” first (patches, stains, glossy trim), then decide whether to spot-prime or full-prime.",
        ],
        table: {
          columns: ["Situation", "Common plan", "Why"],
          rows: [
            ["Patches/new drywall", "Prime + 2 coats", "Reduces flashing and uneven sheen"],
            ["Stains (water/smoke/tannin)", "Stain-block primer + coats", "Prevents bleed-through"],
            ["Glossy trim", "Scuff/sand + bonding primer", "Improves adhesion"],
            ["Same-color repaint", "1-2 coats", "Primer often unnecessary"],
          ],
        },
      },
      {
        heading: "Planning and buying tip",
        paragraphs: [
          "For estimating, treat primer as its own product with its own coverage rate and coat count. If you plan primer but only budget paint gallons, you will underbuy.",
        ],
      },
      {
        heading: "Reminder",
        paragraphs: [
          "Primer does not replace paint volume. Plan primer and paint separately if you want a reliable purchase plan.",
        ],
      },
    ],
    related: [
      { label: "Paint calculator", href: "/en/calculators/home-improvement/paint" },
      { label: "Paint planning notes", href: "/en/guides/home-improvement/paint" },
    ],
  },
  {
    slug: "tile-project-planning-guide",
    title: "Tile project planning guide (layout, overage, and materials list)",
    description:
      "A practical tile planning guide: how to choose an overage factor, avoid box-coverage mistakes, and build a complete materials list.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Start with layout (layout drives waste)",
        paragraphs: [
          "Tile waste is mostly layout and cuts, not broken tiles. Straight layouts in open rectangles typically waste less than diagonal layouts, herringbone, or projects with many corners, niches, and penetrations.",
          "If appearance matters, plan to buy enough from a consistent dye lot. That usually means choosing a realistic overage upfront instead of trying to top up later.",
        ],
        table: {
          columns: ["Install type", "Typical overage", "Notes"],
          rows: [
            ["Straight floor layout", "10%", "Increase for many corners"],
            ["Diagonal / patterns", "15–20%", "More cuts and waste"],
            ["Walls with niches/penetrations", "15–25%", "Small cuts are hard to reuse"],
            ["Large format tile", "10–15%", "Fewer pieces but breakage risk matters"],
          ],
        },
      },
      {
        heading: "Box coverage: the label always wins",
        paragraphs: [
          "Do not compute box coverage from tile size alone. Packaging varies by product, thickness, and pieces per carton. Use the label’s sq ft/sq m coverage per box and round up to whole boxes.",
          "If you are mixing field tile with mosaics, borders, or trim pieces, estimate those separately. Their coverage and waste behavior differ from field tile.",
        ],
      },
      {
        heading: "A complete materials list (avoid the “tile only” estimate)",
        bullets: [
          "Thinset/mortar (type depends on tile, substrate, and environment)",
          "Grout (type and joint width change usage)",
          "Waterproofing (for wet areas) and/or uncoupling membrane (project dependent)",
          "Backer board / substrate prep materials (as needed)",
          "Trim pieces, transitions, and movement joints",
          "Spacers, leveling system, and sealant/caulk (at changes of plane)",
        ],
      },
      {
        heading: "Practical buying rules",
        bullets: [
          "Round up: one extra box is cheaper than a lot mismatch mid-project.",
          "Keep spares for future repairs (especially for discontinued styles).",
          "If tile may be back-ordered, buy everything at once and store it safely.",
        ],
      },
    ],
    related: [
      { label: "Tile calculator", href: "/en/calculators/home-improvement/tile" },
      { label: "Tile guide", href: "/en/guides/home-improvement/tile" },
      { label: "Tile waste percentage guide", href: "/en/resources/tile-waste-percentage-guide" },
      { label: "Tile box coverage checklist", href: "/en/resources/tile-box-coverage-checklist" },
    ],
  },
  {
    slug: "drywall-materials-and-finishing-guide",
    title: "Drywall materials and finishing guide (sheets, seams, mud, and tape)",
    description:
      "A practical drywall planning guide: choosing sheet sizes, understanding finishing levels, and estimating seams, tape, and compound realistically.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Sheet sizing: fewer seams vs handling",
        paragraphs: [
          "Larger sheets reduce seams, which can reduce finishing time, but handling and safety matter—especially for ceilings. Choose a sheet size you can safely install and transport.",
        ],
        table: {
          columns: ["Sheet size", "Coverage", "Tradeoff"],
          rows: [
            ["4×8", "32 sq ft", "Easier handling, more seams"],
            ["4×10", "40 sq ft", "Fewer seams, needs clearance"],
            ["4×12", "48 sq ft", "Fewest seams, heavy/awkward"],
          ],
        },
      },
      {
        heading: "Finishing level changes material usage",
        paragraphs: [
          "Higher finish levels generally mean more compound, more coats, and more sanding. Texture can hide imperfections but still uses material and time.",
          "If you are planning for Level 4–5 smooth walls, assume more compound and time than a basic garage finish.",
        ],
      },
      {
        heading: "Seams, corners, and repairs (why area alone is not enough)",
        paragraphs: [
          "Seam length is driven by layout. Corners, soffits, and repairs add tape and compound but do not always show up in area math. If the room is complex, increase your waste and buffer.",
          "If you want a reliable purchase plan, estimate seams/tape separately using a mud-and-tape estimate, then add a buffer for corners and patches.",
        ],
      },
      {
        heading: "Practical buying checklist",
        bullets: [
          "Drywall sheets (type and thickness for the room)",
          "Screws / fasteners (type depends on framing)",
          "Tape (paper or mesh)",
          "Joint compound (setting type vs premix)",
          "Corner bead and accessories (as needed)",
          "Sanding supplies, primer, and paint (finishing schedule)",
        ],
      },
    ],
    related: [
      { label: "Drywall calculator", href: "/en/calculators/home-improvement/drywall" },
      { label: "Drywall guide", href: "/en/guides/home-improvement/drywall" },
      { label: "Mud and tape estimating", href: "/en/resources/drywall-mud-and-tape-estimating" },
      { label: "Drywall finish levels", href: "/en/resources/drywall-finish-levels-0-5" },
    ],
  },
  {
    slug: "deck-planning-materials-and-layout-guide",
    title: "Deck planning guide (layout, gaps, stairs, and materials list)",
    description:
      "A practical deck planning guide: board direction, gapping, diagonal waste, stairs, and the material items people forget.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Board direction and borders change waste",
        paragraphs: [
          "Deck board direction affects both board count and waste. Straight installs on simple rectangles usually waste less than diagonal layouts. Picture-frame borders, stairs, and landings add complexity and often increase waste.",
        ],
      },
      {
        heading: "Gaps and actual board width affect coverage",
        paragraphs: [
          "Coverage depends on actual board width (not nominal) and the gap you leave. Composite and wood often have different recommended gapping rules—follow the product guidance.",
          "If you are comparing materials, use the same assumptions (board width and gap) or the estimates won’t be comparable.",
        ],
      },
      {
        heading: "Stairs: estimate as a separate line item",
        paragraphs: [
          "Stairs can add board count quickly. Treat steps and landings separately rather than hoping the main deck waste covers them. If you are planning a border or diagonal pattern, expect more waste on stairs.",
        ],
      },
      {
        heading: "Materials list (beyond deck boards)",
        bullets: [
          "Fasteners/clips (product-specific)",
          "Flashing and waterproofing details (where needed)",
          "Joists/beams/posts and hardware (separate framing estimate)",
          "Railing materials and hardware",
          "Stair stringers and connectors (if applicable)",
        ],
      },
    ],
    related: [
      { label: "Deck calculator", href: "/en/calculators/home-improvement/deck" },
      { label: "Deck guide", href: "/en/guides/home-improvement/deck" },
      { label: "Board gap and coverage", href: "/en/resources/deck-board-gap-and-coverage" },
      { label: "Diagonal waste guide", href: "/en/resources/deck-diagonal-waste-guide" },
    ],
  },
  {
    slug: "fence-planning-posts-gates-and-materials-guide",
    title: "Fence planning guide (posts, gates, and materials checklist)",
    description:
      "A practical fence planning guide: panels vs pickets, post spacing, gates and corners, and the material items most estimates miss.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Decide panel vs picket before you estimate",
        paragraphs: [
          "Panel fences are often estimated by sections (6 ft/8 ft panels). Picket fences are estimated by picket count and rail length. The math and the shopping list are different, so pick the system first.",
        ],
      },
      {
        heading: "Posts are not just length ÷ spacing",
        paragraphs: [
          "Corners, ends, and gates require extra posts and often extra bracing. If you do not plan these explicitly, you will under-buy posts and concrete.",
          "Post depth is driven by fence height and local frost line guidance. Depth affects post length and concrete needs.",
        ],
      },
      {
        heading: "Gates: plan hardware and clearances",
        bullets: [
          "Gate posts often need to be stronger or deeper (project dependent).",
          "Hardware (hinges, latches) is a separate line item.",
          "Slope and terrain can require adjustments in panel stepping or racking.",
        ],
      },
      {
        heading: "Material checklist (common misses)",
        bullets: [
          "Posts, panels/pickets, rails, and fasteners",
          "Concrete for post holes (or alternative footing system)",
          "Gate hardware and bracing",
          "Caps, trim, and finishing/stain (if applicable)",
          "Extra boards for damage and future repairs",
        ],
      },
    ],
    related: [
      { label: "Fence calculator", href: "/en/calculators/home-improvement/fence" },
      { label: "Fence guide", href: "/en/guides/home-improvement/fence" },
      { label: "Panel vs picket estimate", href: "/en/resources/fence-panel-vs-picket-estimate" },
      { label: "Post hole concrete guide", href: "/en/resources/fence-post-hole-concrete-guide" },
    ],
  },
  {
    slug: "tile-grout-selection-and-coverage-guide",
    title: "Tile grout guide (sanded vs unsanded, joint width, and coverage)",
    description:
      "A practical grout guide: choosing grout type, sizing joints, and understanding why coverage changes with tile size and joint width.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Grout type: sanded vs unsanded vs specialty",
        paragraphs: [
          "Grout choice depends on joint width, tile type, and the environment. Traditional cement grouts are common, but specialty and epoxy grouts can be worth it for stain resistance in high-use areas.",
          "Always follow the grout manufacturer's rules for your joint width and tile type. The goal is durable joints and consistent color, not just the cheapest bag.",
        ],
        table: {
          columns: ["Type", "Common use", "Tradeoff"],
          rows: [
            ["Unsanded", "Narrow joints and some polished tiles", "Can be smoother, but not for every width"],
            ["Sanded", "Wider joints / many floor installs", "Stronger for wider joints, texture varies"],
            ["Epoxy/specialty", "Wet areas / stain resistance priority", "More expensive; different working time"],
          ],
        },
      },
      {
        heading: "Why grout coverage varies so much",
        paragraphs: [
          "Grout usage is driven by total joint volume, not tile surface area. Smaller tiles create more linear feet of joints per square foot. Wider joints and deeper joints also increase volume.",
          "For reliable planning, use product yield charts (or a grout calculator) and keep your inputs consistent: tile length/width, joint width, and an average joint depth.",
        ],
      },
      {
        heading: "Practical rules for estimating grout",
        bullets: [
          "Confirm tile size and the joint width you will actually install (not what you hope to install).",
          "Estimate mosaics separately; small pieces increase joint footage dramatically.",
          "Round up to whole bags and keep a small amount for touch-ups and repairs.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Using a “generic coverage” number that does not match your tile size and joint width.",
          "Changing joint width mid-project and wondering why you ran short.",
          "Over-washing or delaying cleanup, which can cause rework and extra grout usage.",
        ],
      },
    ],
    related: [
      { label: "Tile grout calculator", href: "/en/calculators/home-improvement/tile-grout" },
      { label: "Tile grout coverage guide", href: "/en/resources/tile-grout-coverage-guide" },
      { label: "Sanded vs unsanded", href: "/en/resources/tile-grout-sanded-vs-unsanded" },
    ],
  },
  {
    slug: "tile-waterproofing-and-membranes-guide",
    title: "Tile waterproofing and membranes (what’s required vs optional)",
    description:
      "A practical guide to waterproofing choices in tile projects: showers, wet rooms, membranes, and why prep affects long-term durability.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Waterproofing is a system, not a product",
        paragraphs: [
          "Most tile failures are water-management failures: water gets behind tile and reaches materials that cannot handle it. Waterproofing should be designed as a system (substrate + membrane + seams + penetrations).",
          "Requirements vary by local code and by manufacturer system. If you are using a branded system, follow that system’s instructions end-to-end.",
        ],
      },
      {
        heading: "Common membrane types (high level)",
        table: {
          columns: ["Type", "Common use", "Notes"],
          rows: [
            ["Sheet membrane", "Showers/wet areas", "Consistent thickness; seams must be treated correctly"],
            ["Liquid-applied membrane", "Walls/floors in wet areas", "Coverage depends on thickness; needs cure time"],
            ["Uncoupling membrane", "Floors", "Helps manage movement; not always waterproof by itself"],
          ],
        },
      },
      {
        heading: "Planning checklist (before you buy tile)",
        bullets: [
          "Decide wet-area level (shower vs backsplash vs dry floor).",
          "Confirm substrate (cement board vs foam board vs drywall where allowed).",
          "List penetrations (valves, niches, benches) and plan sealing details.",
          "Choose thinset/mortar type that matches membrane/tile requirements.",
        ],
      },
      {
        heading: "Why “just add more sealant” is not waterproofing",
        paragraphs: [
          "Caulk and grout are not a waterproofing plan. They help with surface management and movement joints, but they do not replace a proper membrane and substrate prep in wet areas.",
        ],
      },
    ],
    related: [
      { label: "Tile planning guide", href: "/en/resources/tile-project-planning-guide" },
      { label: "Tile guide", href: "/en/guides/home-improvement/tile" },
    ],
  },
  {
    slug: "drywall-board-types-fire-moisture-and-sound",
    title: "Drywall board types (regular, moisture-resistant, fire-rated, sound)",
    description:
      "A practical guide to drywall types: where regular board is fine, when you need moisture/fire-rated board, and how that affects planning.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Common drywall board types (quick overview)",
        table: {
          columns: ["Type", "Typical use", "Reminder"],
          rows: [
            ["Regular drywall", "Most dry interior rooms", "Match thickness to framing and local code"],
            ["Moisture-resistant", "Bathrooms/laundry (non-shower areas)", "Not a substitute for waterproofing"],
            ["Fire-rated (Type X)", "Garages/required assemblies", "Follow local code requirements"],
            ["Sag-resistant / ceiling board", "Ceilings", "Helps reduce sag on wider spans"],
          ],
        },
      },
      {
        heading: "Where people choose the wrong board",
        bullets: [
          "Using regular board in high-moisture areas without proper prep.",
          "Assuming moisture-resistant board makes a shower waterproof.",
          "Ignoring required fire-rated assemblies in garages or shared walls.",
        ],
      },
      {
        heading: "Planning impact",
        paragraphs: [
          "Board type decisions don’t usually change sheet counts, but they do affect cost, availability, and handling. If ceilings and walls use different thickness or type, estimate them as separate line items so you don’t under-buy the specialty board.",
        ],
      },
    ],
    related: [
      { label: "Drywall calculator", href: "/en/calculators/home-improvement/drywall" },
      { label: "Ceiling thickness guide", href: "/en/resources/drywall-ceiling-thickness-guide" },
      { label: "Finish levels 0–5", href: "/en/resources/drywall-finish-levels-0-5" },
    ],
  },
  {
    slug: "deck-framing-checklist-joists-beams-posts",
    title: "Deck framing checklist (joists, beams, posts, and hardware)",
    description:
      "A planning checklist for deck framing: what to confirm before you buy lumber and hardware, and why framing is a separate estimate from deck boards.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Deck boards are not the framing estimate",
        paragraphs: [
          "A deck board estimate covers surface boards. Framing includes joists, beams, posts, connectors, and fasteners. Framing needs depend on span, spacing, and local requirements, so it should be estimated as a separate list.",
        ],
      },
      {
        heading: "Checklist: the framing decisions that change materials",
        bullets: [
          "Joist spacing (often 12/16/24\" on center depending on decking and code)",
          "Beam layout and spans (affects beam size and post count)",
          "Ledger vs freestanding design (changes hardware and flashing needs)",
          "Railing and stair loads (adds blocking and connectors)",
        ],
      },
      {
        heading: "Hardware items people forget",
        bullets: [
          "Joist hangers and hanger nails/screws",
          "Post bases, brackets, and anchor hardware",
          "Ledger flashing and waterproofing details",
          "Structural screws/bolts where required",
        ],
      },
    ],
    related: [
      { label: "Deck calculator", href: "/en/calculators/home-improvement/deck" },
      { label: "Deck planning guide", href: "/en/resources/deck-planning-materials-and-layout-guide" },
    ],
  },
  {
    slug: "fence-gate-planning-hardware-and-sag",
    title: "Fence gate planning (hardware, sag, and post bracing)",
    description:
      "A practical guide to fence gates: why gates sag, how to plan posts and bracing, and which hardware decisions affect long-term performance.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Why gates sag (and what fixes it)",
        paragraphs: [
          "Gates sag when posts move, hardware is undersized, or the gate frame isn’t braced for weight. Planning the gate post and bracing is often more important than the pickets or panels.",
        ],
      },
      {
        heading: "Gate planning checklist",
        bullets: [
          "Confirm opening width and desired clearance (slope and ground changes matter).",
          "Plan stronger gate posts and deeper footings where needed.",
          "Choose hinges and latches rated for the gate weight and material.",
          "Use diagonal bracing or a gate kit appropriate for your design.",
        ],
      },
      {
        heading: "Hardware items to list separately",
        bullets: ["Hinges", "Latch/lock", "Drop rod (for double gates)", "Fasteners and braces"],
      },
    ],
    related: [
      { label: "Fence calculator", href: "/en/calculators/home-improvement/fence" },
      { label: "Fence posts guide", href: "/en/guides/home-improvement/fence-posts" },
      { label: "Post hole concrete guide", href: "/en/resources/fence-post-hole-concrete-guide" },
    ],
  },
  {
    slug: "gravel-drainage-and-edge-containment-guide",
    title: "Gravel drainage and edge containment (how to reduce ruts and potholes)",
    description:
      "A practical guide for gravel longevity: drainage, grading, and edge containment—why you can’t fix a failing base with repeated top-ups.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Drainage first: water causes most gravel failures",
        paragraphs: [
          "If water sits on the surface or softens the base, gravel moves and ruts form. Fixing drainage and slope usually matters more than adding more stone.",
        ],
      },
      {
        heading: "Edge containment and migration",
        paragraphs: [
          "Without containment, gravel migrates outward and thins. Edging and a stable base reduce long-term maintenance and keep depth consistent.",
        ],
      },
      {
        heading: "Practical checklist",
        bullets: [
          "Confirm slope and where water should go (not into the driveway).",
          "Separate base and top layers and compact each layer properly.",
          "Use edge containment where migration is likely.",
          "Plan periodic touch-ups, but don’t use touch-ups to solve drainage problems.",
        ],
      },
    ],
    related: [
      { label: "Gravel layering guide", href: "/en/resources/gravel-driveway-layering-and-compaction" },
      { label: "Gravel calculator", href: "/en/calculators/home-improvement/gravel" },
      { label: "Base vs top layer", href: "/en/resources/gravel-base-vs-top-layer" },
    ],
  },
  {
    slug: "topsoil-vs-compost-blends-for-lawns-and-beds",
    title: "Topsoil vs compost blends (lawns vs garden beds)",
    description:
      "A practical guide to topsoil and compost blends: when to use straight topsoil, when blends help, and how to plan mix ratios without overdoing organics.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Topsoil and compost do different jobs",
        paragraphs: [
          "Topsoil is often used for fill and leveling. Compost is used to improve organic matter and structure. A blend can be useful, but the right mix depends on whether you’re building a lawn surface or a garden bed.",
        ],
      },
      {
        heading: "Lawns vs beds (practical guidance)",
        table: {
          columns: ["Project", "Common approach", "Reminder"],
          rows: [
            ["Lawn topdressing", "Mostly topsoil + light compost", "Too much compost can cause settling/softness"],
            ["Leveling", "Topsoil for fill + targeted compost", "Measure average depth and add buffer for feathering"],
            ["Garden beds", "Topsoil + compost blend", "Adjust for plant needs and existing soil"],
          ],
        },
      },
      {
        heading: "Ordering checklist",
        bullets: [
          "Decide total depth and measure multiple points for an average.",
          "If blending, track mix ratio (topsoil vs compost) as separate volumes.",
          "Plan a buffer for settling and feathering edges.",
        ],
      },
    ],
    related: [
      { label: "Topsoil calculator", href: "/en/calculators/home-improvement/topsoil" },
      { label: "Topsoil leveling guide", href: "/en/guides/home-improvement/topsoil-leveling" },
      { label: "Topsoil coverage chart", href: "/en/resources/topsoil-coverage-chart" },
    ],
  },
  {
    slug: "paint-trim-enamel-selection-and-prep",
    title: "Trim paint guide (enamel selection, prep, and a durable finish)",
    description:
      "A practical trim guide: enamel choices, prep for glossy trim, and how to plan coats and touch-ups for long-term durability.",
    lastUpdated: "Last updated: Jan 2026",
    sections: [
      {
        heading: "Trim is a different product than wall paint",
        paragraphs: [
          "Trim paint is typically an enamel designed for durability and cleanability. It behaves differently than wall paint and is more sensitive to prep quality.",
        ],
      },
      {
        heading: "Prep checklist (the difference between durable and peeling)",
        bullets: [
          "Clean (remove grease and residue)",
          "Scuff sand (especially over glossy surfaces)",
          "Spot prime where needed (repairs, stains, bare wood)",
          "Choose the right sheen (satin/semi-gloss are common)",
        ],
      },
      {
        heading: "Estimating trim separately",
        paragraphs: [
          "Trim profiles add surface area, so linear feet alone can under-estimate. Estimating trim separately (and keeping a touch-up buffer) makes your plan more reliable than mixing it into wall area.",
        ],
      },
    ],
    related: [
      { label: "Paint calculator", href: "/en/calculators/home-improvement/paint" },
      { label: "Trim area from linear feet", href: "/en/resources/trim-paint-area-from-linear-feet" },
      { label: "Baseboard waste tips", href: "/en/resources/baseboard-trim-waste-tips" },
    ],
  },
];

