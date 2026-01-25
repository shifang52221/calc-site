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
];

