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
        heading: "Leveling tip that prevents over-ordering",
        paragraphs: [
          "Do not measure depth from only the lowest spot. Take multiple depth checks and use an average thickness across the area. A single low spot can make you over-order by a lot.",
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
        heading: "Planning tips",
        bullets: [
          "If you are new, plan extra for practice and cleanup.",
          "Spraying and sanding can increase waste.",
          "Round up; matching texture mid-wall can be difficult if you run short.",
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
        heading: "Accessories are separate",
        bullets: [
          "Starter, ridge caps, underlayment, flashing, drip edge, and nails are separate line items.",
          "Confirm bundles-per-square for your exact shingle product.",
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
        heading: "When to increase waste",
        bullets: [
          "Many corners, niches, or penetrations (plumbing, vents).",
          "Large format tile (harder cuts; more breakage risk).",
          "If matching later is hard (dye lots), buying enough now matters.",
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
        heading: "When to increase rolls",
        bullets: [
          "Large pattern repeat (more trimming to align).",
          "Many windows/doors and corners (more separate strips).",
          "If you may need repairs later, matching lot/batch matters.",
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
        heading: "Common mistake",
        bullets: [
          "Do not use bedding sand to fix a bad base. Fix grade and compaction first.",
          "Compaction changes thickness; plan accordingly.",
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
        heading: "Avoid over-amending",
        bullets: [
          "Too much compost can reduce structure in some soils.",
          "If drainage is poor, address structure (aeration) not just fertility.",
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
        heading: "Depth planning tip",
        paragraphs: [
          "Take multiple depth checks and use an average thickness. One low spot can inflate your order if you treat it as the whole area depth.",
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
        heading: "Ordering tip",
        paragraphs: [
          "If your supplier sells by tons, use their conversion for each product separately. Density varies by material type and moisture.",
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
        heading: "Planning tip",
        paragraphs: [
          "Estimate base gravel (area x depth) separately from asphalt. Treat them as separate materials and deliveries.",
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
        heading: "Practical tip",
        bullets: [
          "Confirm the unit your supplier uses (tons vs tonnes).",
          "Use the supplier density conversion for your specific product.",
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
];

