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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Cubic yards quick reference",
        paragraphs: [
          "1 cubic yard = 27 cubic feet. Convert your total cubic feet to yards by dividing by 27.",
          "Example: 18.75 cu ft / 27 = 0.69 cu yd (round up if ordering bulk).",
        ],
      },
      {
        heading: "Thickness conversion (inches to feet)",
        paragraphs: [
          "Thickness in feet = thickness in inches / 12. Use that value for volume: area x thickness (ft).",
        ],
        bullets: [
          "1 inch = 0.083 ft, 1.5 inches = 0.125 ft, 2 inches = 0.167 ft.",
        ],
      },
      {
        heading: "Worked example (quick order)",
        paragraphs: [
          "Example: 40 sq ft at 1.25 inches: volume = 40 x (1.25/12) = 4.17 cu ft. Add 10% waste to about 4.6 cu ft.",
        ],
      },
      {
        heading: "Bag planning notes",
        bullets: [
          "Use the bag yield on the label (cu ft per bag).",
          "Bags needed = total cu ft / bag yield, then round up.",
          "Keep a small buffer for mixing loss and cleanup.",
        ],
      },
      {
        heading: "Mix ratio and consistency (dry pack basics)",
        paragraphs: [
          "Deck mud (dry pack) is intentionally low-water and packable. The goal is a stable, shaped bed you can compact and screed flat or to slope.",
          "Ratios vary by application and local practice, but many mixes start around 5:1 sand-to-cement by volume. Follow your waterproofing/system guidance for critical installs.",
        ],
        table: {
          columns: ["Ratio (by volume)", "Use note", "Reminder"],
          rows: [
            ["5:1 sand:cement", "Common starting point", "Follow system guidance"],
            ["4:1 sand:cement", "Sometimes for higher strength", "Workability changes"],
          ],
        },
        bullets: [
          "Use a consistent container for volume ratios and measure water the same way each batch.",
          "Squeeze test: it should hold together when squeezed, but it should not ooze water.",
          "Mix thoroughly before adding more water; dry pockets create weak areas.",
        ],
      },
      {
        heading: "Slope planning: estimate by average thickness",
        paragraphs: [
          "A sloped bed is thicker at the perimeter than at the drain. Estimate volume using average thickness: measure your high and low points and average them.",
        ],
        bullets: [
          "Confirm the waterproofing system and drain type first; they determine build-up.",
          "Prefer fewer “surprises” mid-bed: estimate total volume, plan batches, and round up to avoid cold joints.",
          "If you must patch or blend batches, aim for consistent mix feel so finish texture stays uniform.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        bullets: [
          "Fresh drywall, patches, and other porous surfaces often need primer and usually reduce coverage.",
          "Heavy texture and rough surfaces reduce coverage compared to smooth walls.",
          "Big color changes and deep colors often require extra coats for an even finish.",
          "Ceilings take more cut-in work around fixtures and edges, so add a buffer (often 5–10%) and round up to whole cans.",
          "Textured ceilings and stained areas benefit from stain-blocking primer before finish paint.",
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
        heading: "Surface prep checklist (the part that controls results)",
        bullets: [
          "Clean walls where there is grease, dust, or soap film; paint does not bond to grime.",
          "Patch holes and sand flush; uneven patches show up more under higher sheen.",
          "Scuff or degloss glossy trim before repainting to improve adhesion.",
          "Remove sanding dust before coating; dust can cause rough finish or poor bond.",
          "Plan drying time between coats, especially in humid rooms or during cool weather.",
        ],
      },
      {
        heading: "Estimate trim, doors, and ceilings as separate line items",
        paragraphs: [
          "Trim and doors often use different paint and sheen, and they usually need more prep. Ceilings require extra cut-in time around fixtures and edges. Separating them keeps your gallon count realistic.",
        ],
        bullets: [
          "Trim profiles add surface area, so coverage drops compared to a flat wall.",
          "Doors have two sides and edges; a single door can use more paint than expected.",
          "If ceilings are textured, plan extra coverage and consider primer for stains.",
        ],
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Roof pitch multipliers (quick table)",
        paragraphs: [
          "If you only know the footprint area, multiply by a pitch multiplier to estimate roof surface area. This is a planning tool—complex roofs should be measured by planes when possible.",
        ],
        table: {
          columns: ["Pitch", "Multiplier (approx.)", "Note"],
          rows: [
            ["4/12", "1.054", "Low slope"],
            ["6/12", "1.118", "Common"],
            ["8/12", "1.202", "Steeper, more waste risk"],
            ["10/12", "1.302", "Steep"],
            ["12/12", "1.414", "Very steep"],
          ],
        },
      },
      {
        heading: "Starter strips and ridge cap (why they add up)",
        paragraphs: [
          "Starter strips and ridge cap shingles are often separate SKUs. Even if your shingle bundle math is right, missing these items is a common cause of last-minute trips and color mismatches.",
        ],
        bullets: [
          "Starters are planned by linear feet of eaves/rakes (project dependent).",
          "Ridge cap is planned by linear feet of ridge/hip length (project dependent).",
          "If you add ridge vent, include ridge vent components and compatible cap requirements.",
        ],
      },
      {
        heading: "Squares to bundles (quick example)",
        paragraphs: [
          "Example: if your roof is 22 squares (2200 sq ft) and your shingle is packaged at 3 bundles per square, you plan 22 × 3 = 66 bundles. Then apply your waste factor and round up to whole bundles.",
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
      { label: "Methodology", href: "/en/methodology" },
    ],
  },
  {
    slug: "gravel-driveway-layering-and-compaction",
    title: "Gravel driveway layering and compaction (base vs top)",
    description:
      "A practical guide to estimating gravel by layers: base vs surface, compaction, drainage, and supplier ton conversions.",
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Base vs top layer (pick the right material)",
        paragraphs: [
          "Base layers are about stability and compaction. Top layers are about surface performance (look, traction, and how it behaves under tires). Treat them as different products and estimate them separately.",
        ],
        table: {
          columns: ["Layer", "Common material", "Why it matters"],
          rows: [
            ["Base", "Crushed stone/road base with fines", "Compacts and locks together"],
            ["Top", "Crushed stone (cleaner) or pea gravel (project dependent)", "Surface behavior and appearance"],
            ["Separation (optional)", "Geotextile fabric (project dependent)", "Helps reduce mixing with weak subgrade"],
          ],
        },
      },
      {
        heading: "Edge containment (stops migration)",
        bullets: [
          "Metal/plastic edging: common for paths; durability varies by product.",
          "Timber/landscape ties: can work but need anchoring and rot planning.",
          "Concrete/asphalt edge: most durable, higher cost and planning.",
          "A shoulder of larger rock can work on rural drives, but it’s not true containment.",
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
      { label: "Methodology", href: "/en/methodology" },
    ],
  },
  {
    slug: "topsoil-leveling-step-by-step-guide",
    title: "Topsoil leveling step-by-step (how to avoid over-ordering)",
    description:
      "A step-by-step guide to leveling with topsoil: measuring average depth, feathering edges, settling, and planning touch-ups.",
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Feathering in practice (avoid sharp edges)",
        paragraphs: [
          "Instead of dumping soil into a low spot with a sharp edge, spread the transition so thickness tapers gradually. This makes it easier to rake flat and avoids creating a “lip” that catches water or a mower wheel.",
          "Most low spots are deeper in the center and taper toward the edges—so your estimate should be based on an average thickness, not the deepest point.",
        ],
        bullets: [
          "Mark the low area and the feathering zone (it is usually bigger than the low spot).",
          "Measure several depths, average them, then add a small buffer for settling.",
          "Water lightly and re-check after settling; some projects need a second light top-up.",
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
      {
        heading: "Step 0 (optional): prep that makes leveling easier",
        bullets: [
          "Mow shorter than normal and remove debris so you can see the grade.",
          "Break up hard spots and remove rocks; core aeration can help if the soil is very compact (project dependent).",
          "If the lawn has severe thatch or poor drainage, address that first; adding soil on top won’t fix root-zone issues by itself.",
        ],
      },
      {
        heading: "How thick should you spread?",
        paragraphs: [
          "For lawn topdressing, thinner passes are usually safer. If you bury grass too deeply, you can smother it. Deeper fills often require seeding/sod or staged applications rather than one heavy dump.",
        ],
        bullets: [
          "If you’re only smoothing minor unevenness, aim for a thin, rakeable layer.",
          "If low spots are several inches deep, treat them as a separate repair area and plan reseeding or sod (project dependent).",
        ],
      },
      {
        heading: "Aftercare (what keeps it from turning into a mess)",
        bullets: [
          "Rake to keep grass blades exposed so the lawn can grow through.",
          "Water lightly to settle without washing soil into piles; avoid heavy watering that creates ruts.",
          "If you seeded, follow seed watering guidance and avoid foot traffic until established.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Using the deepest spot as the depth for the whole lawn (over-ordering).",
          "Spreading too thick and smothering turf instead of staging the repair.",
          "Skipping feathering and ending up with a ridge that mows poorly and pools water.",
        ],
      },
    ],
    related: [
      { label: "Topsoil calculator", href: "/en/calculators/home-improvement/topsoil" },
      { label: "Topsoil leveling guide", href: "/en/guides/home-improvement/topsoil-leveling" },
      { label: "Topsoil coverage chart", href: "/en/resources/topsoil-coverage-chart" },
      { label: "Topsoil vs compost blends", href: "/en/resources/topsoil-vs-compost-blends-for-lawns-and-beds" },
    ],
  },
  {
    slug: "flooring-installation-planning-and-moisture",
    title: "Flooring installation planning (moisture, acclimation, and underlayment)",
    description:
      "A practical flooring planning guide: waste, moisture checks, acclimation, underlayment selection, and the non-area items that cause project delays.",
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Moisture testing (do not guess by feel)",
        bullets: [
          "Concrete slabs often require moisture testing before install (method depends on product).",
          "Wood subfloors can hold moisture that causes warping or gaps later.",
          "If the product has a moisture limit, document it before installation.",
        ],
      },
      {
        heading: "Underlayment: match the system",
        paragraphs: [
          "Underlayment choice depends on floor type (LVP, laminate, engineered wood), subfloor type, and whether you need moisture barrier or sound control. Do not assume one underlayment fits all products.",
        ],
      },
      {
        heading: "Subfloor flatness and prep",
        paragraphs: [
          "Most flooring failures trace back to uneven or unstable subfloors. Flatness tolerances are product-specific, but the principle is the same: fix dips and high spots before you install.",
        ],
        bullets: [
          "Use a long straightedge to find low and high areas.",
          "Plan leveling compound as a separate line item for uneven slabs.",
          "Secure squeaks or loose panels on wood subfloors before covering.",
        ],
      },
      {
        heading: "Underlayment checklist (common misses)",
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
          "Start with the flooring manufacturer’s requirements (they can affect warranty), then match the subfloor conditions (moisture, flatness, and sound).",
        ],
        bullets: [
          "Concrete slab: moisture management is often the first priority (barrier requirements vary by product).",
          "Wood subfloor: flatness and squeak reduction can matter more than vapor management.",
          "Condos: sound control requirements can drive underlayment thickness and type.",
          "Radiant heat: confirm temperature limits and approved underlayment types.",
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
        heading: "Expansion gaps and transitions",
        bullets: [
          "Most floating floors require expansion gaps at walls and fixed objects.",
          "Large continuous runs often need transitions per manufacturer guidance.",
          "Doorways and floor height changes should be planned early so you choose compatible profiles.",
        ],
      },
      {
        heading: "Box rounding (worked example)",
        paragraphs: [
          "Flooring is purchased in whole boxes. A reliable approach is: area → apply waste → divide by box coverage from the label → round up.",
          "Example: 420 sq ft with 10% waste is 462 sq ft. If a box covers 20 sq ft: 462/20 = 23.1, so you buy 24 boxes.",
        ],
      },
      {
        heading: "Direction and layout change waste",
        bullets: [
          "Diagonal layouts or many small rooms/closets increase waste.",
          "Hallways and narrow runs create offcuts that are harder to reuse.",
          "Strict staggering rules or patterned installs can increase waste.",
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
      { label: "Flooring boxes guide", href: "/en/guides/home-improvement/flooring-boxes" },
      { label: "Baseboard & trim calculator", href: "/en/calculators/home-improvement/baseboard-trim" },
    ],
  },
  {
    slug: "roofing-squares-and-bundles-explained",
    title: "Roofing squares and bundles explained",
    description:
      "Learn what a roofing square is, how bundles convert to squares, and how waste and accessories affect your final order.",
    lastUpdated: "Last updated: Feb 2026",
    sections: [
      {
        heading: "What is a roofing square?",
        paragraphs: [
          "A roofing square is 100 square feet of roof surface area. Roofing is priced and ordered based on surface area, not the house footprint.",
        ],
      },
      {
        heading: "Footprint vs roof area (quick reminder)",
        paragraphs: [
          "A pitched roof has more surface area than the footprint. If you only have the footprint, use a pitch multiplier as a planning estimate, then add waste for complexity.",
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
        heading: "Convert squares to bundles (step-by-step)",
        bullets: [
          "Calculate roof surface area, then divide by 100 to get squares.",
          "Multiply squares by bundles per square from the product label.",
          "Apply a waste factor based on roof complexity.",
          "Round up to whole bundles.",
        ],
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
      {
        heading: "Worked example (bundles and waste)",
        paragraphs: [
          "Example: roof area 2,000 sq ft = 20 squares. If the shingle is 3 bundles per square, base bundles = 60. Add 10-15% waste for a simple roof (66-69 bundles), then round up.",
        ],
      },
      {
        heading: "Ordering tips",
        bullets: [
          "Buy all shingles and ridge caps from the same batch when possible to reduce color mismatch risk.",
          "Plan delivery placement and weather windows to reduce damage and loss.",
          "Keep a small number of extra bundles for repairs or future matching.",
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
    lastUpdated: "Last updated: Feb 2026",
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
          heading: "Quick formula (boxes)",
          paragraphs: [
            "Ordering area = tile area x (1 + waste).",
            "Boxes needed = ordering area / box coverage, then round up.",
          ],
          bullets: [
            "Apply waste before dividing by box coverage.",
            "Round up to whole boxes; partial boxes are rarely sold.",
          ],
        },
        {
          heading: "When to increase waste",
          bullets: [
            "Diagonal, herringbone, or complex patterns.",
            "Large-format tiles in small rooms (more offcuts).",
            "Many cuts: niches, benches, corners, and plumbing penetrations.",
            "Strict pattern or vein matching that forces you to reject pieces.",
          ],
        },
        {
          heading: "Example: box rounding matters",
          paragraphs: [
            "Example: 120 sq ft room at 12% waste = 134.4 sq ft. If a box covers 13.6 sq ft, you need 9.88, which rounds to 10 boxes.",
          ],
        },
        {
          heading: "Walls vs floors (quick reminder)",
          bullets: [
            "Walls with niches, benches, and plumbing almost always need higher waste.",
            "Large-format wall tile can increase waste around corners and cutouts.",
            "Mosaics and trims are separate materials - estimate them separately.",
          ],
        },
        {
          heading: "Layout checkpoint (before you buy)",
          bullets: [
            "Confirm the tile module (tile size + grout joint) and dry-lay a few rows.",
            "Shift the layout to reduce sliver cuts at the most visible walls.",
          "If you have borders or mosaics, estimate those as separate materials.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Rule of thumb (fast scaling)",
        paragraphs: [
          "A quick shortcut: 100 sq ft at 1 inch thickness is about 0.31 cu yd (8.33 cu ft). Multiply by thickness in inches. Example: 100 sq ft at 4 inches is about 1.23 cu yd.",
        ],
      },
      {
        heading: "Bagged mix conversion (quick planning)",
        paragraphs: [
          "If you are buying bagged mix, use the bag yield on the label. A common planning range is about 0.45 cu ft for a 60 lb bag and about 0.60 cu ft for an 80 lb bag, but always confirm the product.",
        ],
        bullets: [
          "Convert volume to cubic feet first (1 cu yd = 27 cu ft).",
          "Bags needed = total cu ft / bag yield, then round up.",
          "Order extra for over-excavation, uneven forms, and cleanup.",
        ],
      },
      {
        heading: "Edges and thickened sections (do not forget)",
        paragraphs: [
          "Thickened edges, footings, or pads for posts add volume that is not included in simple slab area math. Estimate those pieces separately and add them to the total.",
        ],
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
    lastUpdated: "Last updated: Feb 2026",
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
      {
        heading: "Bulk vs bagged mulch (quick conversion)",
        paragraphs: [
          "Bulk mulch is sold by the cubic yard. Bagged mulch is often sold in 2 cu ft or 3 cu ft bags. Converting early helps avoid underbuying.",
        ],
        bullets: [
          "1 cubic yard = 27 cubic feet.",
          "A 2 cu ft bag is about 0.074 cu yd; a 3 cu ft bag is about 0.111 cu yd.",
          "Example: 2 cu yd is about 54 cu ft, or about 27 bags of 2 cu ft.",
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
    lastUpdated: "Last updated: Feb 2026",
    sections: [
      {
        heading: "Quick coverage chart (per 100 sq ft)",
        table: {
          columns: ["Depth", "Topsoil volume", "Notes"],
          rows: [
            ["1 in", "0.31 cu yd", "Light topdressing"],
            ["2 in", "0.62 cu yd", "Common leveling depth"],
            ["3 in", "0.93 cu yd", "Heavier leveling / fill"],
            ["4 in", "1.23 cu yd", "Significant fill (confirm drainage)"],
            ["6 in", "1.85 cu yd", "Major fill (plan compaction/settling)"],
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
      {
        heading: "Bagged topsoil: cubic feet and liters (quick conversions)",
        paragraphs: [
          "Bagged topsoil is commonly labeled in cubic feet or liters. Convert everything to cubic feet (or cubic yards) first, then round up to whole bags.",
          "Helpful conversions: 1 cubic yard = 27 cubic feet. 1 cubic foot ≈ 28.3 liters.",
        ],
        table: {
          columns: ["Liters", "Cubic feet (approx.)", "Common note"],
          rows: [
            ["25 L", "0.88 cu ft", "Small bag"],
            ["40 L", "1.41 cu ft", "Common bag size"],
            ["50 L", "1.77 cu ft", "Common bag size"],
            ["60 L", "2.12 cu ft", "Large bag"],
          ],
        },
        bullets: [
          "Worked example: need 18 cu ft and your bag is 40 L (≈ 1.41 cu ft). 18 / 1.41 ≈ 12.8, so buy 13 bags (plus a small buffer for leveling).",
          "If the project is large, compare bag totals to bulk delivery; bags add up quickly in both cost and carrying time.",
          "Bulk topsoil is often cheaper per unit, but quality varies by supplier—confirm screening/organic content if it matters for your project.",
        ],
      },
      {
        heading: "How to measure area (fast and good enough)",
        paragraphs: [
          "For rectangles, area = length × width. For circles, area ≈ 3.14 × radius². For irregular lawns, break the space into simple rectangles/triangles, estimate each area, and add them up.",
          "The biggest ordering errors usually come from area estimates (or using the deepest spot everywhere), not from the chart itself.",
        ],
        bullets: [
          "Measure along the ground, not “as the crow flies” across steps or slopes.",
          "If the site is sloped, measure the footprint (plan view) area, then confirm whether you’ll also need regrading materials.",
        ],
      },
      {
        heading: "Screened topsoil vs fill dirt (what changes coverage)",
        paragraphs: [
          "“Topsoil” is not a single standardized product. Screened topsoil spreads and rakes more evenly than fill dirt with rocks and clods, which can leave high spots and require more material to get a smooth finish.",
        ],
        bullets: [
          "For lawns and finish grading, screened topsoil is usually easier to level and seed.",
          "For deeper fills, you may use cheaper fill material below and finish with a topsoil layer (project dependent).",
          "If you’re doing significant fill, plan compaction and settling so the final grade ends up where you want it.",
        ],
      },
      {
        heading: "Topsoil blends and compost mixes (coverage changes)",
        paragraphs: [
          "Many suppliers sell blended topsoil that includes compost. The blend can improve soil health, but it may feel lighter and fluffier than straight topsoil. That can change how it settles and how much you need after watering.",
        ],
        bullets: [
          "Ask for the blend ratio if you are ordering by the yard.",
          "Expect some settling after watering; plan a small buffer for touch-ups.",
          "If you are topdressing turf, keep the layer thin so grass can grow through.",
        ],
      },
      {
        heading: "When topsoil isn’t the fix",
        bullets: [
          "If water pools because of poor slope or a blocked drain path, topsoil alone may not solve it.",
          "If you have heavy clay, consider aeration/compost topdressing strategies and drainage planning (project dependent).",
          "If the yard has severe ruts or large low areas, you may need regrading before a thin topsoil layer.",
        ],
      },
      {
        heading: "Choosing a depth (how people actually use this chart)",
        paragraphs: [
          "Depth should match the job. A thin topdressing is used to improve soil and smooth minor unevenness. A thicker layer is usually a leveling or regrading project, which can change drainage and may require compaction planning.",
          "If you’re unsure, start by defining the goal: improve turf health, smooth bumps, fill a low area, or rebuild grade. The goal determines whether you should spread a thin layer everywhere or treat only the low zones as “extra” material.",
        ],
        bullets: [
          "1 inch is often used as light topdressing where you want grass to grow through quickly.",
          "2–3 inches is often used for leveling and regrading work where you’re actively changing grade.",
          "4+ inches is fill work—plan drainage, settling, and possibly staged placement (project dependent).",
        ],
      },
      {
        heading: "A reliable measuring method (average depth, not the deepest spot)",
        paragraphs: [
          "Take multiple depth readings across the full area and use an average thickness. Then add a second line item for low spots that truly need more depth. This avoids the common mistake of applying the deepest spot to the entire yard.",
          "For low spots, measure the area of the spot and use an average depth for that spot (center deeper, edges shallower). That average depth is usually much smaller than the maximum depth you see at one point.",
        ],
        bullets: [
          "Mark low spots and include a feathering zone—feathering consumes material beyond the obvious low area.",
          "Add a buffer for settling and raking; real lawns are irregular even if the math is clean.",
        ],
      },
      {
        heading: "Topdressing vs regrading (different goals, different risks)",
        paragraphs: [
          "Topdressing is a thin layer used to improve soil and smooth small imperfections without changing overall drainage patterns. Regrading is adding enough material to meaningfully change slope and water flow. Regrading can solve water problems, but it can also create new ones if you change where water goes.",
          "If you’re adding several inches in places, think like a grading project: check where water will drain, how you’ll compact or stage the fill, and whether you need to protect nearby hardscape, beds, or foundations (project dependent).",
        ],
        bullets: [
          "Thin topdressing is usually spread and raked so grass can grow through quickly.",
          "Thicker fills often need seeding/sod or staged placement rather than one pass.",
          "If standing water is the core problem, plan drainage first and use topsoil as the finishing layer.",
        ],
      },
      {
        heading: "Spreading tips (make the material go farther)",
        paragraphs: [
          "Even a good volume estimate can be wasted by uneven spreading. The goal is consistent thickness. Work in small sections, spread lightly, and re-check with a straightedge as you go instead of dumping piles and trying to rake them flat later.",
        ],
        bullets: [
          "Use a landscape rake to feather edges and avoid ridges that catch mower wheels.",
          "Keep grass blades exposed during lawn topdressing; burying turf too deep can smother it.",
          "After watering or rain, expect some settling and plan a small touch-up pass.",
        ],
      },
      {
        heading: "Bulk ordering checklist (quality and logistics)",
        paragraphs: [
          "Bulk topsoil is usually cheaper per unit than bags, but quality varies. Before you order, confirm what you’re getting and where it will be dumped. A single load in the wrong spot can damage a driveway, block access, or turn into a messy wheelbarrow marathon.",
          "Ask whether the topsoil is screened and what the typical texture is (sandy, loamy, clay-heavy). If you’re finishing a lawn, screened material is easier to rake smooth and is less likely to leave rocks that interfere with mowing.",
        ],
        bullets: [
          "Confirm unit: cubic yard vs ton (and if ton, what conversion is used).",
          "Confirm access and dump location; plan tarps or a containment edge if needed.",
          "Keep a small buffer for feathering, cleanup, and unexpected low areas.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Sag and span basics (why thickness matters)",
        paragraphs: [
          "Sag risk increases with wider framing spacing, humidity changes, and ceiling loads. Thicker or sag-resistant board reduces long-term deflection and helps the ceiling stay flat.",
          "If a ceiling will be hit by strong directional light, even small deflection can be visible. Planning for stiffness is usually more important than shaving a few pounds off each sheet.",
        ],
        bullets: [
          'Wider spacing (24" on center) is the most common reason to step up to 5/8".',
          "High humidity or temperature swings can increase sag risk (garages, kitchens, covered porches).",
          "Longer sheets reduce butt joints but increase weight; balance seam reduction with safe handling.",
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
        heading: "Fastener spacing (quick reminder)",
        bullets: [
          "Follow the board and fastener manufacturer schedule for ceilings.",
          "Missed framing members lead to sag and popped screws.",
          "If you are unsure, tighten spacing on ceilings rather than widening it.",
        ],
      },
      {
        heading: "Handling and install planning (reduce breakage and fatigue)",
        paragraphs: [
          "Ceiling sheets are awkward even when the math is perfect. Plan for a lift or extra hands when using 5/8 inch or long sheets. A clean layout beats a perfect sheet count if it keeps the install safe and accurate.",
        ],
        bullets: [
          "Consider a drywall lift for long or heavy sheets.",
          "Pre-mark joists and lighting locations so fasteners and cutouts land cleanly.",
          "If a ceiling will be textured, plan that finishing method early; it can change how seams and joints are treated.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Tons vs tonnes (avoid unit mix-ups)",
        paragraphs: [
          "A “ton” is not always the same unit. In the US, many suppliers use short tons (2000 lb). Many other regions quote metric tonnes (2204.62 lb). Mixing them up can shift a quote by about 10%.",
        ],
        table: {
          columns: ["Unit", "Equals", "Note"],
          rows: [
            ["1 short ton (US)", "2000 lb", "Common in the US"],
            ["1 metric tonne", "2204.62 lb", "Common outside the US"],
          ],
        },
        bullets: [
          "If a quote says “ton” without specifying, confirm the unit in writing before ordering.",
          "Quick check: 1 metric tonne ≈ 1.102 short tons.",
        ],
      },
      {
        heading: "Best practice",
        bullets: [
          "Ask your supplier for their exact conversion for the specific product you are buying.",
          "If you are doing layers (base + top), estimate them separately and do not mix products.",
          "Plan a small buffer for uneven base and compaction.",
        ],
      },
      {
        heading: "Conversion math (if you need a quick estimate)",
        paragraphs: [
          "If you know your product density, you can convert directly: tons (short tons) = cubic yards × (lb per cubic yard) / 2000.",
          "Example: 5 yd³ of crushed stone at 2800 lb/yd³ is 5 × 2800 / 2000 = 7.0 tons.",
        ],
        bullets: [
          "If you only have tons per yard, multiply: tons = yards × (tons per yard).",
          "Round up to delivery minimums; running short is a big time penalty mid-project.",
        ],
      },
      {
        heading: "Compaction and “installed depth”",
        paragraphs: [
          "Delivered gravel is loose; your finished base is compacted. That means your installed depth can be less than the loose depth you dumped, and compaction effort affects the result.",
        ],
        bullets: [
          "For base layers, place material in lifts and compact each lift (project dependent).",
          "Edges and transitions often run thicker than the “average” plan; include that in your buffer.",
        ],
      },
      {
        heading: "Ordering checklist (questions to ask the supplier)",
        bullets: [
          "What’s the product name/gradation (crushed stone, road base, pea gravel, etc.)?",
          "Do you sell by the ton, yard, or truckload, and what unit is a “ton” for your region?",
          "What density or conversion do you use for this product?",
          "What’s the delivery minimum and where can the truck dump safely?",
        ],
      },
      {
        heading: "Proof of quantity (keep the ticket)",
        paragraphs: [
          "Keep the scale ticket or delivery slip. It lists the product name, tons delivered, and often the moisture condition. It helps match future loads and validate your real-world coverage.",
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
      {
        heading: "Bedding sand thickness (typical planning)",
        table: {
          columns: ["Layer", "Typical thickness", "Notes"],
          rows: [
            ["Compacted base", "4-12 in", "Depends on use case and soil"],
            ["Bedding sand", "1 in (approx.)", "Not a thick leveling layer"],
          ],
        },
      },
      {
        heading: "Sand: bedding vs leveling (why base matters)",
        bullets: [
          "Sand is typically a thin bedding layer, not a structural leveling layer.",
          "Base stone and compaction control stability and drainage.",
          "If you need to correct grade, fix base depth and compaction first.",
        ],
      },
      {
        heading: "Estimating tip (treat layers separately)",
        paragraphs: [
          "Estimate base stone and bedding sand as separate materials. Base depth is often ordered in cubic yards or tons; sand is a thinner layer with different density and delivery minimums.",
        ],
      },
      {
        heading: "Step-by-step base build (high level)",
        bullets: [
          "Excavate to the planned depth, accounting for paver thickness, bedding sand, and compacted base.",
          "Set grade and slope for drainage before placing base material.",
          "Place base in lifts and compact each lift (project dependent).",
          "Screed a thin bedding sand layer and set pavers without using sand to “fix” base problems.",
          "Install edge restraint before final joint sand so the field can’t spread.",
        ],
      },
      {
        heading: "Common mistakes that cause settlement",
        bullets: [
          "Using thick sand to correct grade instead of fixing the base.",
          "Skipping compaction (or compacting only the top).",
          "Ignoring drainage so water saturates the base and subgrade.",
          "No edge restraint, allowing pavers to migrate and joints to open.",
        ],
      },
      {
        heading: "Ordering checklist",
        bullets: [
          "Confirm compacted base depth target for your use case and soil.",
          "Order base and sand separately (different densities and delivery minimums).",
          "Plan a small buffer for edge cuts, grading, and cleanup.",
          "Confirm whether your supplier sells by cubic yard or ton and use their conversion.",
        ],
      },
    ],
    related: [
      { label: "Paver base calculator", href: "/en/calculators/home-improvement/paver-base" },
      { label: "Sand calculator", href: "/en/calculators/home-improvement/sand" },
      { label: "Methodology", href: "/en/methodology" },
    ],
  },
  {
    slug: "board-feet-explained",
    title: "Board feet explained (simple formula and examples)",
    description:
      "What board feet are, the formula, and how to avoid common mistakes when pricing lumber.",
    lastUpdated: "Last updated: Feb 2026",
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
      {
        heading: "Surfacing and kerf (why rough vs finished matters)",
        paragraphs: [
          "Rough-sawn lumber is thicker and wider than the finished size after surfacing. Plan your board feet based on the rough size you are buying, then confirm the finished thickness you need (S2S/S3S/S4S).",
        ],
        bullets: [
          "Plan extra if you need to plane or joint boards heavily.",
          "Saw kerf (the blade cut) reduces usable length on repeated cuts.",
        ],
      },
      {
        heading: "Nominal vs actual size (why it changes board feet)",
        paragraphs: [
          "Many softwood boards are sold by nominal size (2×6, 2×4), but the actual dressed size is smaller. If you price by board feet, be clear about which size you’re using.",
        ],
        table: {
          columns: ["Nominal size", "Common actual size (approx)", "Notes"],
          rows: [
            ["2×4", "1.5×3.5 in", "Common framing lumber"],
            ["2×6", "1.5×5.5 in", "Framing and decking (varies)"],
            ["4×4", "3.5×3.5 in", "Posts can be rough-sawn or dressed"],
          ],
        },
      },
      {
        heading: "Hardwood thickness terms (4/4, 5/4, 8/4)",
        paragraphs: [
          "Hardwoods are often priced using “quarters” for thickness: 4/4 is about 1 inch rough thickness, 5/4 is about 1.25 inches, and 8/4 is about 2 inches. After surfacing, the finished thickness is typically less.",
        ],
        bullets: [
          "If you’re matching an existing piece, ask for the finished thickness (S2S/S3S/S4S) before you calculate board feet.",
          "Wide boards and long lengths can be limited by stock availability, so ordering extra can avoid project delays.",
        ],
      },
      {
        heading: "Moisture and movement (planning for wood movement)",
        bullets: [
          "Wood moves with humidity; acclimate lumber if the project requires stable dimensions.",
          "Outdoor projects need species-appropriate treatment and fasteners.",
          "If you are matching an existing floor or trim, moisture content matters as much as size.",
        ],
      },
      {
        heading: "How to estimate lumber for a project (simple workflow)",
        bullets: [
          "List parts by thickness × width × length and quantity (cut list).",
          "Convert each part to board feet and sum the total.",
          "Add waste allowance based on the project: straight framing can be lower; furniture-grade and grain-matching can be higher.",
          "If the lumberyard charges by linear foot for certain products (trim, decking, studs), compare both pricing methods to avoid surprises.",
        ],
      },
      {
        heading: "Grade and yield (why you might need more)",
        bullets: [
          "Lower grades have more knots and defects, which reduce usable yield.",
          "If you need clear or long pieces, plan extra board feet for selection.",
          "Ask your supplier about minimum length rules and width upcharges.",
        ],
      },
      {
        heading: "Waste allowance tips (avoid running short)",
        bullets: [
          "Knots, checks, and warping reduce usable yield (especially in wide boards).",
          "Mitered trim and angled cuts increase offcuts that can’t be reused.",
          "If boards must be color/grain matched, you often need more extra to select pieces.",
        ],
      },
      {
        heading: "Pricing example (turn board feet into cost)",
        paragraphs: [
          "If hardwood is priced at $7.50 per board foot and your project needs 28 board feet, the rough material cost is 28 × 7.50 = $210 (before waste allowance, tax, delivery, and surfacing charges).",
          "If the lumberyard applies a minimum length, width upcharge, or surfacing fee, include those items separately; they can be significant for small projects.",
        ],
      },
      {
        heading: "Board foot vs linear foot (avoid a common confusion)",
        bullets: [
          "Trim and some decking products are priced by linear foot; hardwood and many rough boards are priced by board foot.",
          "A board-foot calculation needs thickness, width, and length. A linear-foot price usually assumes a standard profile/size.",
          "If you’re comparing two quotes, confirm they’re using the same unit and the same dimensions (nominal vs actual).",
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
        heading: "Typical compacted thickness ranges (planning)",
        table: {
          columns: ["Project type", "Typical compacted thickness", "Reminder"],
          rows: [
            ["Resurface/overlay (good base)", "1.5–2 in", "Base problems still telegraph through"],
            ["Residential driveway", "2–3 in", "Traffic and climate can push thicker"],
            ["Heavy use/weak subgrade", "3–4+ in", "Often needs a stronger base too"],
          ],
        },
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
        heading: "Base layer basics (the real driver of longevity)",
        paragraphs: [
          "If the base is weak, asphalt thickness alone won’t save the driveway. Most long-term failures are water and subgrade problems: poor drainage, pumping, and inadequate compaction.",
        ],
        bullets: [
          "Fix grading and drainage first (water sitting on asphalt shortens life).",
          "Estimate base stone separately; base thickness and compaction are project dependent.",
          "Edge support matters: unsupported edges crumble faster under turning tires.",
        ],
      },
      {
        heading: "Tonnage math (simple check)",
        paragraphs: [
          "If you want a quick sanity check: volume (cu ft) = area (sq ft) × thickness (in/12). Compacted asphalt is often in the ~145 lb/cu ft range (varies), so tons ≈ (cu ft × 145) / 2000.",
          "Example: 600 sq ft at 3 inches is 600 × (3/12) = 150 cu ft. 150 × 145 = 21,750 lb ≈ 10.9 tons. Then add waste/compaction allowances and confirm with your supplier/contractor.",
        ],
      },
      {
        heading: "Why conversions vary (density and compaction)",
        bullets: [
          "Different mixes and aggregate gradations have different densities.",
          "Moisture, temperature, and compaction effort change the final density and thickness.",
          "Edges, transitions, and handwork areas often run thicker than the “average” plan.",
        ],
      },
      {
        heading: "Truckloads and scheduling",
        bullets: [
          "Suppliers may have minimum order sizes; confirm before estimating to the decimal.",
          "Plan where trucks can dump and how you will move mix without cold joints.",
          "Hot mix has limited working time—schedule compaction and labor accordingly.",
        ],
      },
      {
        heading: "Ordering note",
        paragraphs: [
          "Hot mix has limited working time. Confirm delivery schedule and placement plan so material is placed and compacted properly.",
        ],
      },
      {
        heading: "Ordering checklist (avoid last-minute shortages)",
        bullets: [
          "Confirm compacted thickness target (not just “a couple inches”).",
          "Confirm mix type and whether pricing is short tons vs metric tonnes.",
          "Plan access, truck turnaround, and where material will be dumped/staged.",
          "Add a buffer for edges, transitions, and handwork areas.",
        ],
      },
    ],
    related: [
      { label: "Asphalt driveway calculator", href: "/en/calculators/home-improvement/asphalt-driveway" },
      { label: "Gravel calculator (base layer)", href: "/en/calculators/home-improvement/gravel" },
      { label: "Methodology", href: "/en/methodology" },
    ],
  },
  {
    slug: "wallpaper-pattern-repeat-waste",
    title: "Wallpaper pattern repeat and waste (why you need extra rolls)",
    description:
      "How pattern repeat affects usable roll length, why corners and windows increase waste, and how to plan a safer order.",
    lastUpdated: "Last updated: Feb 2026",
    sections: [
      {
        heading: "Why pattern repeat changes roll yield",
        paragraphs: [
          "With a pattern repeat, you may need to cut strips so the pattern aligns from strip to strip. That can reduce usable length per roll and increase the number of rolls beyond simple wall area math.",
        ],
      },
      {
        heading: "Match type matters (straight vs drop)",
        bullets: [
          "Straight match: patterns line up at the same height across strips (less waste).",
          "Drop match: patterns shift down between strips (often more waste).",
          "If the label lists match type, use that when estimating strips per roll.",
        ],
      },
      {
        heading: "Strip yield example (quick math)",
        paragraphs: [
          "Example: wall height is 9 ft (108 in) and the repeat is 20 in. Each strip must be cut to the next repeat multiple: 120 in (10 ft). A 33 ft roll yields about 3 strips, not 3.6.",
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
      {
        heading: "Ordering tips (avoid mismatched rolls)",
        bullets: [
          "Buy a little extra and keep one spare roll for future repairs.",
          "Order all rolls at once to keep dye lot consistent.",
          "If you are wrapping through multiple rooms, plan the entire run before buying.",
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
    lastUpdated: "Last updated: Feb 2026",
    sections: [
      {
        heading: "Why piece length matters",
        paragraphs: [
          "Trim is often sold in fixed piece lengths. Even if your total linear feet are correct, you can still run short if you do not plan how those lengths break into pieces around corners and doors.",
        ],
      },
      {
        heading: "Piece length strategy (reduce seams and waste)",
        bullets: [
          "Longer pieces reduce seams on long runs but can increase waste in small rooms.",
          "Use longer stock on the most visible walls and save short pieces for closets and short runs.",
          "If transport is limited, verify that longer lengths will fit before ordering.",
        ],
      },
      {
        heading: "Linear feet to pieces (simple method)",
        paragraphs: [
          "A simple planning method is: pieces needed ≈ (total linear feet ÷ piece length) × (1 + waste). Then round up to whole pieces. Waste depends on corners and short runs.",
          "Example: if you need 180 linear feet and pieces are 16 ft, the minimum is 180/16 = 11.25 → 12 pieces. If your layout is cut-up, adding 10–15% can be safer (12 × 1.15 = 13.8 → 14 pieces).",
        ],
        bullets: [
          "Confirm piece length (8 ft, 12 ft, 16 ft) and availability for your profile.",
          "Count inside/outside corners and short runs that create unusable offcuts.",
          "If you need stain/finish match, buy extra from the same batch when possible.",
        ],
      },
      {
        heading: "Corners, returns, and casing breaks",
        bullets: [
          "Outside corners use two pieces and create miter offcuts on both ends.",
          "Returns (small end caps) consume extra inches that are easy to forget.",
          "Plan where runs stop at door casings, fireplaces, or stair trim so you do not waste long lengths.",
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
        heading: "Typical waste ranges (starting points)",
        table: {
          columns: ["Room complexity", "Common waste", "Why it increases"],
          rows: [
            ["Long simple runs", "5–10%", "Better reuse of offcuts"],
            ["Typical rooms", "10–15%", "Corners and doors add short pieces"],
            ["Very cut-up layouts", "15–25%", "Many corners, closets, and short runs"],
          ],
        },
      },
      {
        heading: "Cut planning tips (reduces waste)",
        bullets: [
          "Use longer pieces on the most visible walls; hide joints behind doors/furniture when possible.",
          "Plan scarf joints on long runs (stronger and less visible than square butt joints).",
          "Coping inside corners can be more forgiving than perfect miters (project dependent).",
          "Dry-fit tricky corners in scrap before cutting your finish pieces if the room is out of square.",
        ],
      },
      {
        heading: "Ordering checklist",
        bullets: [
          "Confirm piece length and profile availability (some profiles only come in certain lengths).",
          "Decide on inside-corner method (miter vs cope) and outside corner returns (project dependent).",
          "Plan for transitions to door casings, fireplaces, and stair trim where runs break.",
          "Add extra for defects, damaged ends, and future repairs if matching later matters.",
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
    lastUpdated: "Last updated: Feb 2026",
    sections: [
        {
          heading: "Why density varies",
          paragraphs: [
            "Sand density changes by moisture and sand type (masonry, concrete, play sand), and compaction. That is why one generic conversion can be wrong for your supplier.",
            "Two piles that look similar can weigh very differently if one is wetter or more compacted. Delivered sand is loose; after placement and compaction, the installed volume usually shrinks.",
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
          heading: "Metric quick reference (loose)",
          table: {
            columns: ["Material (typical)", "Approx. kg per m^3", "Notes"],
            rows: [
              ["Dry sand", "1450-1700", "Wide range by gradation and moisture"],
              ["Damp sand", "1600-1900", "Moisture adds weight quickly"],
            ],
          },
        },
        {
          heading: "Best practice",
          bullets: [
            "Use the supplier conversion for the exact sand you are buying.",
            "If you are bedding pavers, confirm bedding sand type and typical compacted thickness.",
            "Order a small buffer for grading and cleanup, and round to delivery minimums.",
            "Confirm whether the supplier uses short tons (US) or metric tonnes for weight pricing.",
          ],
        },
      {
        heading: "How to convert yards to tons (quick method)",
        paragraphs: [
          "To estimate weight from volume: weight (lb) = volume (cubic yards) × density (lb per cubic yard). Then tons (US short tons) = lb / 2000.",
          "Example: 3 cubic yards of damp sand at 3000 lb/yd³ is about 3 × 3000 = 9000 lb, or 4.5 tons.",
        ],
        bullets: [
          "If your supplier sells by the ton, ask them what density they use for their specific product.",
          "If your supplier sells by the yard, use tons only as a delivery/truckload sanity check.",
        ],
      },
      {
        heading: "Sand types (what you’re usually buying)",
        table: {
          columns: ["Type (common label)", "Typical use", "Notes to confirm"],
          rows: [
            ["Masonry sand", "Mortar, bedding, general use", "Grading and fines vary by supplier"],
            ["Concrete sand", "Concrete mixes and base layers", "Often coarser than masonry sand"],
            ["Play sand", "Sandboxes", "Usually washed; not a base material"],
            ["Polymeric/joint sand", "Paver joints", "Follow manufacturer instructions"],
          ],
        },
      },
      {
        heading: "Compaction and thickness (why your estimate can be off)",
        paragraphs: [
          "If you’re building a base, the delivered sand is loose, but your finished layer is compacted and graded. Your “installed” volume is often less than the delivery volume, and the difference depends on moisture and compaction effort.",
        ],
        bullets: [
          "Measure thickness after compaction (project dependent) instead of assuming the loose depth equals the finished depth.",
          "Very wet sand can be heavier, harder to screed, and can change compaction behavior.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Using a single conversion for all suppliers and sand products.",
          "Confusing bedding sand with base material (they have different roles).",
          "Ignoring delivery minimums and ending up forced to over-order.",
        ],
      },
      {
        heading: "Supplier questions (fast way to avoid bad estimates)",
        bullets: [
          "What is the exact sand product name/gradation (masonry, concrete, washed, etc.)?",
          "Do you sell by the yard, ton, or bag, and what unit is a “ton” in your region?",
          "What conversion/density do you use for this exact product (especially if it’s damp)?",
          "Is the sand intended for my use (bedding sand vs joint sand vs mortar sand)?",
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
        heading: "Quick volume per 100 sq ft (common slab thicknesses)",
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
        heading: "Rule of thumb (use the label when possible)",
        bullets: [
          "80 lb bags often yield around 0.6 cu ft (varies by product).",
          "60 lb bags often yield around 0.45 cu ft (varies by product).",
          "50 lb bags often yield around 0.375 cu ft (varies by product).",
        ],
      },
      {
        heading: "Do not forget thickened edges (a common under-order)",
        paragraphs: [
          "Many slabs include thickened edges or footings. If you ignore them, you can come up short even if the slab volume is correct. Treat thickened edges as a separate volume line item.",
          "Example: a 12 ft × 20 ft slab at 4 inches is ~2.96 cu yd. If all four edges are thickened to 12 inches deep and 12 inches wide, the extra thickened portion is ~1.58 cu yd—often a meaningful add-on.",
        ],
        bullets: [
          "Slab volume = area × slab thickness.",
          "Thickened edge volume = edge length × thickened width × (thickened depth − slab thickness).",
          "If you have multiple thickened zones, calculate each one and add them.",
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
      {
        heading: "How to estimate bags (step-by-step)",
        paragraphs: [
          "Step 1: calculate total concrete volume in cubic feet (or cubic yards). Step 2: divide by the bag yield on the label. Step 3: round up and add a buffer.",
          "Example: if you need 40 cu ft and your 80 lb bag yields 0.60 cu ft, you need 40 / 0.60 = 66.7 → 67 bags (plus buffer).",
        ],
        bullets: [
          "If the job is tight-tolerance (posts, footings), the buffer is usually worth it.",
          "If you’re mixing by hand, smaller bag sizes can reduce fatigue but increase batch count.",
        ],
      },
      {
        heading: "Consistency tips when mixing many bags",
        bullets: [
          "Measure water consistently; “a splash more” changes strength and finish quality.",
          "Mix long enough for uniform color and texture, then place quickly to avoid cold joints.",
          "Stagger mixing and placing so you’re not dumping half-set material into fresh work.",
        ],
      },
      {
        heading: "Common mistakes that reduce yield or strength",
        bullets: [
          "Adding extra water to improve workability (can reduce strength and increase cracking).",
          "Estimating with generic bag yield instead of the label yield for your product.",
          "Ignoring forms and over-excavation: extra void space can consume many bags.",
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
        heading: "Quick coverage chart (bags per 100 sq ft)",
        paragraphs: [
          "A quick way to plan bags is to convert depth to feet and use: bags = (area × depth in feet) ÷ bag cubic feet, then round up.",
        ],
        table: {
          columns: ["Depth", "2 cu ft bags", "3 cu ft bags"],
          rows: [
            ['1" (0.083 ft)', "≈ 5 bags", "≈ 3–4 bags"],
            ['2" (0.167 ft)', "≈ 9 bags", "≈ 6 bags"],
            ['3" (0.25 ft)', "≈ 13 bags", "≈ 9 bags"],
          ],
        },
      },
      {
        heading: "2 cu ft vs 3 cu ft bags (what changes)",
        paragraphs: [
          "The math is the same—only the bag volume changes. The practical difference is handling and rounding: you often end up buying one extra bag because you can’t buy partial bags.",
        ],
        bullets: [
          "3 cu ft bags reduce total bag count, but each bag is heavier to carry and spread.",
          "If color matching matters, buy enough in one batch; mixing lots can look uneven.",
        ],
      },
      {
        heading: "Depth selection (1 vs 2 vs 3 inches)",
        table: {
          columns: ["Depth", "Common use", "Reminder"],
          rows: [
            ['1"', "Top-up/refresh", "May not suppress weeds by itself"],
            ['2"', "Most beds (general)", "A common balance of coverage and cost"],
            ['3"+', "Deeper mulch look / erosion control (project dependent)", "Avoid piling against trunks; watch drainage near foundations"],
          ],
        },
      },
      {
        heading: "Worked example",
        paragraphs: [
          "Example: 300 sq ft bed at 2 inches needs volume = 300 × (2/12) = 50 cu ft. If you use 2 cu ft bags: 50/2 = 25 bags (then add a small buffer for uneven edges).",
        ],
      },
      {
        heading: "Bulk vs bags (when to switch)",
        paragraphs: [
          "Bagged mulch is convenient for small projects. For larger beds, bulk delivery is often cheaper per cubic foot and saves carrying time. The tradeoff is delivery access and the need to move material from a pile.",
        ],
        bullets: [
          "Compare total cubic feet: 1 cubic yard = 27 cubic feet (bags add up fast).",
          "Plan space for delivery and tarps/wheelbarrow paths to protect lawns and driveways.",
          "Confirm mulch type and moisture—coverage claims vary by product.",
        ],
      },
      {
        heading: "How to measure beds (fast method)",
        bullets: [
          "Break the bed into rectangles/triangles and add areas together.",
          "For curved edges, measure an average width and multiply by length as a planning estimate.",
          "Use multiple depth checks if the bed isn’t uniform (edges are often thinner).",
        ],
      },
      {
        heading: "Bags vs cubic yards (delivery comparison)",
        paragraphs: [
          "If you are comparing bag totals to bulk delivery, convert to cubic yards: cubic yards = cubic feet ÷ 27. Example: 54 cu ft is 2 cu yd. This makes price comparisons much easier.",
        ],
        bullets: [
          "Bag coverage claims vary by brand; volume math is more reliable.",
          "Plan edging and cleanup: mulch migrates without a defined border.",
          "Avoid “mulch volcano” around trunks; keep mulch away from bark.",
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
      { label: "Mulch depth guide", href: "/en/guides/home-improvement/mulch-depth" },
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Depth planning (frost and wind)",
        bullets: [
          "Frost depth often sets the minimum hole depth in cold climates.",
          "Taller fences and windy sites usually need deeper or wider footings.",
          "Corner and gate posts carry higher loads and should be planned separately.",
        ],
      },
      {
        heading: "Concrete planning notes",
        paragraphs: [
          "Concrete volume depends on hole diameter and depth. Local frost depth and soil conditions can change requirements, so confirm local practice and code.",
        ],
      },
      {
        heading: "Hole size basics (depth and diameter)",
        paragraphs: [
          "There is no single \"correct\" hole size for every fence. Depth is driven by frost line guidance, fence height, wind load, and soil conditions. Diameter is driven by post size and the footing system you use.",
        ],
        table: {
          columns: ["Fence detail (typical)", "What often needs more concrete", "Reminder"],
          rows: [
            ["Corners/ends", "More bracing and stronger footing", "Corners take the load of long runs"],
            ["Gates", "Deeper/stronger posts and footings", "Gate sag prevention starts at the footing"],
            ["High fences / windy sites", "Deeper footings and stronger posts", "Confirm local practice"],
          ],
        },
      },
      {
        heading: "Concrete volume math (quick method)",
        paragraphs: [
          "A post hole is often approximated as a cylinder: volume = pi * (radius^2) * depth. Convert to cubic feet, then convert to bags using your bag yield (or order ready-mix if the job is large).",
          "Example: a 12 inch diameter hole that is 36 inches deep is radius 0.5 ft and depth 3 ft, so volume ~ 3.14 * (0.5^2) * 3 ~ 2.36 cu ft per hole (before gravel base or bell shapes).",
        ],
        bullets: [
          "If you add a gravel base, subtract that depth from the concrete depth.",
          "Bell-shaped footings can increase volume beyond a simple cylinder estimate.",
          "Round up: running short mid-set is a big time penalty.",
        ],
      },
      {
        heading: "Concrete vs gravel set (why the system matters)",
        bullets: [
          "Concrete-set posts are common for gates, corners, and higher loads (project dependent).",
          "Gravel set can drain well, but performance depends on compaction and soil conditions.",
          "If frost heave is a concern, drainage and depth planning are usually more important than perfect volume math.",
        ],
      },
      {
        heading: "Bell footings and gravel bases",
        bullets: [
          "Bell-shaped footings can resist uplift but increase concrete volume.",
          "A compacted gravel base can improve drainage under the post.",
          "If you add gravel, subtract that depth from the concrete depth.",
        ],
      },
      {
        heading: "Setting posts (simple workflow)",
        bullets: [
          "Lay out post locations first (corners, ends, gates), then string a line for straight runs.",
          "Dig holes and dry-fit posts to confirm height and alignment before mixing concrete.",
          "Brace posts plumb in two directions so they don’t move while concrete sets.",
          "Place concrete, rod/tamp to remove voids, then shape the top to shed water away from the post.",
        ],
      },
      {
        heading: "Drainage notes (frost heave and rot prevention)",
        paragraphs: [
          "Water management matters. Even a perfectly sized footing can perform poorly if water sits around the post. This is one reason some systems use a gravel base or focus heavily on depth and drainage details (project dependent).",
        ],
        bullets: [
          "If you add a gravel base, compact it and keep the post stable before pouring concrete above it.",
          "Slope the finished concrete cap away from the post so water doesn’t pool at the wood/concrete interface.",
        ],
      },
      {
        heading: "Ordering and waste planning",
        bullets: [
          "Calculate total concrete volume (per hole × number of holes) and add a buffer for over-excavation and bell shapes.",
          "If the job needs many bags, consider ready-mix or at least a consistent mixing plan so all batches are similar.",
          "Keep extra mix for small patches and to avoid stopping mid-set if one hole is larger than planned.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Not bracing posts plumb; a small lean is obvious once panels are attached.",
          "Mixing different consistencies from hole to hole (harder to set a consistent height).",
          "Leaving the top of the concrete flat so water pools around the post.",
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
    lastUpdated: "Last updated: Feb 2026",
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
          heading: "Quick sheet count formula",
          paragraphs: [
            "Sheets needed = total area / sheet coverage, then round up and add waste.",
            "Example: 320 sq ft / 32 sq ft (4x8) = 10 sheets. Add 10-15% waste and round up to 11-12 sheets.",
          ],
        },
        {
          heading: "Sheet sizes change seams and handling",
          table: {
            columns: ["Sheet size", "Coverage", "Planning note"],
            rows: [
              ["4x8", "32 sq ft", "Easiest handling, more seams"],
              ["4x10", "40 sq ft", "Fewer seams, needs clearance"],
              ["4x12", "48 sq ft", "Fewest seams, heavy/awkward"],
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
        {
          heading: "Openings and ceiling notes",
          bullets: [
            "Large openings can be subtracted for tighter estimates, but many small openings are usually within the waste buffer.",
            "Ceilings often need different thickness (1/2 vs 5/8) and can increase waste because of handling.",
            "Plan extra sheets if you want long, unbroken runs to reduce seams.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "When to increase waste",
        bullets: [
          "Lots of small rooms, closets, or short wall segments.",
          "Many cutouts (windows, doors, lights, vents).",
          "Ceilings, stairwells, or overhead work where breakage is more likely.",
          "Complex layouts with soffits, alcoves, or angled ceilings.",
        ],
      },
      {
        heading: "Worked example",
        paragraphs: [
          "Example: 480 sq ft total / 32 sq ft per 4x8 sheet = 15 sheets. Add 12% waste = 16.8, round up to 17 sheets.",
        ],
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "When multipliers are not enough",
        bullets: [
          "Multiple pitches or complex layouts (dormers, hips, valleys) need plane-by-plane measurement.",
          "Large overhangs add roof area beyond the footprint.",
          "Porches and attached garages can have different pitches that change the total.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Layout details that add waste",
        bullets: [
          "Multiple valleys or hips that force angled cuts.",
          "Short roof planes that leave more offcuts per bundle.",
          "Skylights, chimneys, and vent clusters that interrupt shingle runs.",
          "Mixing shingle types or colors (less reuse of offcuts).",
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
        heading: "Worked example (simple vs complex)",
        paragraphs: [
          "Example: 18 squares on a simple gable roof at 10% waste = 19.8 squares. A similar area with multiple dormers at 20% waste = 21.6 squares. The difference is mostly cut-up and layout complexity.",
        ],
      },
      {
        heading: "Practical planning tip",
        paragraphs: [
          "Estimate field shingles from roof surface area, apply a waste factor, then convert to squares/bundles using the product packaging. Treat starter and ridge caps as separate estimates based on product guidance and ridge length.",
        ],
      },
      {
        heading: "Buying tips",
        bullets: [
          "Round up to whole bundles and keep a small buffer for repairs.",
          "Buy all shingles from the same batch when possible to reduce color mismatch risk.",
          "If you have a complex roof, use the higher waste range and adjust after a contractor review.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Actual width beats nominal (the common miss)",
        paragraphs: [
          "Decking is sold by nominal size, but the actual width is smaller. Use the actual coverage width in your math or you will under-estimate board count.",
        ],
        bullets: [
          "Composite and PVC boards often have different actual widths than wood.",
          "If you mix products, do not assume widths are interchangeable.",
        ],
      },
      {
        heading: "Gapping rules (wood vs composite)",
        bullets: [
          "Wood gaps are often installed tighter because wood shrinks as it dries.",
          "Composites can expand and contract with temperature; follow the product spacing chart.",
          "End gaps matter too, especially on long runs or hot installs.",
        ],
      },
      {
        heading: "Practical advice",
        paragraphs: [
          "For accurate planning, confirm your product's actual width and recommended gap. Then add waste for cuts and keep a few spare boards for future repairs.",
        ],
        bullets: [
          "If you’re installing in hot weather, composite gaps may need to be slightly larger.",
          "Plan extra boards for stairs, picture framing, and border details.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Board length and layout planning",
        bullets: [
          "Longer boards reduce seams but can increase offcuts on diagonal cuts.",
          "Short decks with long boards often create more unusable pieces.",
          "If you can choose board length, match it to the deck size to reduce waste.",
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
        heading: "Worked example (quick planning)",
        paragraphs: [
          "Example: if the straight layout estimate is 300 sq ft of boards, a diagonal layout at 15% waste plans about 345 sq ft. Add more if you include borders or stairs.",
        ],
      },
      {
        heading: "Ways to reduce waste",
        bullets: [
          "Use offcuts for shorter runs or stairs when possible.",
          "Stage cuts so similar angles are grouped (reduces mistakes).",
          "If you have a picture frame, plan the border lengths first, then infill.",
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
        heading: "Stud spacing (16\" vs 24\" on center)",
        paragraphs: [
          "At 24 inch spacing, you typically need fewer studs than 16 inch spacing. But corners, T-walls, openings, and code requirements can add studs beyond simple spacing math.",
        ],
        bullets: [
          "Finishes matter: heavier finishes and some applications benefit from tighter spacing for stiffness.",
          "Always follow local code and structural requirements for load-bearing walls.",
        ],
      },
      {
        heading: "Plates (top/bottom) are often underestimated",
        paragraphs: [
          "Walls typically need bottom plates and (often) double top plates, and lumber is purchased in standard stick lengths. After you estimate stud count, estimate plates as their own line item.",
          "A simple starting point: plate linear feet = total wall length × number of plate runs (commonly 3 runs: one bottom + two top, but details vary). Then convert to stick counts and add a buffer for splices and cut waste.",
        ],
        bullets: [
          "Stick count = plate LF ÷ stick length, rounded up.",
          "Plates must splice over studs; short wall segments and many openings increase waste.",
          "Corners and T-walls can require extra backing depending on your framing detail.",
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
      { label: "Drywall calculator", href: "/en/calculators/home-improvement/drywall" },
      { label: "Methodology", href: "/en/methodology" },
    ],
  },
  {
    slug: "baseboard-linear-feet-to-pieces",
    title: "Baseboard: linear feet to pieces (why piece length matters)",
    description:
      "How to convert total trim length into pieces and avoid running short due to cut planning.",
    lastUpdated: "Last updated: Feb 2026",
    sections: [
      {
        heading: "Quick planning idea",
        paragraphs: [
          "Even if your total linear feet are correct, you can still run short if you do not plan how those feet break into pieces around corners and doors.",
        ],
      },
      {
        heading: "Measure runs, not just perimeter",
        paragraphs: [
          "Perimeter gives a fast total, but real runs stop at doors, stair trim, and built-ins. Break the room into runs and count pieces per run to avoid underbuying.",
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
      {
        heading: "Splices and joints (plan where they land)",
        bullets: [
          "Use scarf joints on long runs to make seams less visible.",
          "Place joints away from corners and high-visibility spots when possible.",
          "Short wall segments can force extra seams; add waste for these areas.",
        ],
      },
      {
        heading: "Ordering tips",
        bullets: [
          "Longer pieces reduce seams but can increase waste in small rooms.",
          "If stain or finish must match, buy extra from the same batch.",
          "Keep a spare length for future repairs and touch-ups.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Plank length and room width",
        paragraphs: [
          "Longer planks can reduce seams but they also create more offcuts in short rooms. If a room is short compared to plank length, expect higher waste because many cuts are too small to reuse.",
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
        heading: "Ways to reduce waste (without changing layout)",
        bullets: [
          "Stage planks by length to reuse offcuts in nearby rooms.",
          "Plan transitions so offcuts can be reused in closets or secondary rooms.",
          "If color variation is allowed, mix boxes to keep appearance consistent even with offcuts.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Box coverage varies by product",
        paragraphs: [
          "Two products with the same plank size can have different box coverage because the number of pieces per carton differs. Always use the exact coverage printed on the label.",
        ],
        bullets: [
          "Confirm whether coverage is listed in sq ft or sq m.",
          "Do not assume a box count based on another brand or style.",
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
        heading: "Lot matching and returns",
        bullets: [
          "Buy enough from one lot when possible; color and sheen can vary across lots.",
          "Check the store return policy before opening all boxes.",
          "Keep at least one unopened box if returns are allowed and you have extra.",
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
        heading: "Should you subtract windows and doors?",
        paragraphs: [
          "For wallpaper, the limiting factor is often strips-per-roll, not pure wall area. Openings can reduce paper use, but they do not always reduce strip count because you still cut full-height strips and trim around openings.",
        ],
        bullets: [
          "If you have a few standard doors/windows, many people do not subtract them and treat it as a buffer for alignment and mistakes.",
          "If you have large openings (sliding doors, multiple big windows) and a low-repeat pattern, subtracting can help—but confirm strips-per-roll first.",
          "If the pattern repeat is large, subtracting openings often doesn’t change roll count because pattern alignment drives waste.",
        ],
      },
      {
        heading: "Worked example (quick planning)",
        paragraphs: [
          "If one roll yields 3 full-height strips for your wall height and pattern, and you need 26 strips total, you need 26/3 = 8.67 → 9 rolls. Even if you have openings, strip count often stays similar because the strips are still full height.",
        ],
      },
      {
        heading: "Roll size and terminology (quick clarification)",
        paragraphs: [
          "Roll length and width vary by region and product. Some brands sell “double rolls” (two single rolls packaged together). Always check the label coverage/length so you don’t underbuy.",
        ],
        table: {
          columns: ["What to check", "Why it matters", "Tip"],
          rows: [
            ["Roll width", "Determines strips per wall width", "Common widths vary by product"],
            ["Roll length", "Determines strips per roll at your wall height", "Pattern repeat reduces usable length"],
            ["Single vs double roll", "Changes how many rolls you need to buy", "Use label coverage, not assumptions"],
          ],
        },
      },
      {
        heading: "A practical measuring method (strip-first)",
        bullets: [
          "Measure each wall width and count how many full-width strips you need for that wall (round up).",
          "Use your wall height + trimming allowance and pattern repeat to determine strips-per-roll.",
          "Add extra strips for mistakes and future repairs if matching later matters.",
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
      { label: "Methodology", href: "/en/methodology" },
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
      {
        heading: "What “aeration” usually means (options and tradeoffs)",
        paragraphs: [
          "Aeration is the part of the mix that creates pore space so roots can breathe and water can drain. The best choice depends on what is available locally and what you’re planting.",
        ],
        table: {
          columns: ["Material (common)", "Why people use it", "Watch-outs"],
          rows: [
            ["Coarse composted bark", "Structure + drainage", "Can float or break down over time"],
            ["Pumice / perlite", "Lightweight pore space", "Can be dusty; may cost more"],
            ["Coarse sand", "Adds weight and drainage", "Too fine can make mixes dense"],
            ["Rice hulls / biochar", "Structure and water handling", "Quality varies; start small"],
          ],
        },
      },
      {
        heading: "How to calculate your ingredient volumes",
        paragraphs: [
          "Step 1: calculate bed volume (length × width × depth). Step 2: convert to cubic yards or cubic feet. Step 3: multiply by each percentage in your mix.",
          "Example: a 4 ft × 8 ft bed filled to 12 inches is 32 cu ft (about 1.19 cu yd). If you use a 40/40/20 mix, that’s ~12.8 cu ft topsoil, ~12.8 cu ft compost, and ~6.4 cu ft aeration material.",
        ],
        bullets: [
          "If you’re using bagged products, convert everything to cubic feet first and round up to whole bags.",
          "Plan for settling: many beds lose volume after watering and the first few weeks (project dependent).",
        ],
      },
      {
        heading: "Crop and climate adjustments (starting guidance)",
        bullets: [
          "Vegetables and annuals typically like a fertile mix but still need structure so roots don’t sit wet.",
          "Perennials and shrubs often prefer a more mineral mix (more topsoil, less compost) for long-term stability.",
          "Hot/dry climates benefit from mulching and water-holding strategy; wet climates benefit from more structure and drainage focus.",
        ],
      },
      {
        heading: "Common mistakes that cause bed problems",
        bullets: [
          "Using only compost: it can shrink, get hydrophobic when dry, or get soggy depending on compost quality.",
          "Using very fine materials that compact easily, reducing drainage and oxygen.",
          "Skipping mulch: the top of a raised bed can dry fast and form crust without protection.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Surface porosity (what the label assumes)",
        paragraphs: [
          "Coverage numbers on the can assume a reasonably smooth, primed surface. New drywall, patched areas, and chalky walls absorb more paint and reduce real coverage.",
        ],
        bullets: [
          "Prime new drywall or repaired areas to even out absorption.",
          "Degloss and clean glossy or greasy surfaces so paint bonds properly.",
          "If the wall has a lot of patching, plan extra paint even if the area is small.",
        ],
      },
      {
        heading: "Color change and sheen (coverage vs hide)",
        bullets: [
          "Dramatic color changes usually need extra coats for uniform color.",
          "Dark, vivid, or saturated colors tend to need more coats.",
          "Higher sheen can highlight roller marks and lap lines if coverage is thin.",
        ],
      },
      {
        heading: "Application method (brush, roll, or spray)",
        bullets: [
          "Spraying can use more paint if back-rolling or heavy overspray is involved.",
          "Rough rollers hold more paint and reduce theoretical coverage.",
          "Brush work on trim and edges uses more paint per square foot than rolling walls.",
        ],
      },
      {
        heading: "Practical planning",
        paragraphs: [
          "Prefer the product label coverage when you have it. Then add a small buffer for touch-ups and roller/brush waste and round up to whole cans.",
        ],
        bullets: [
          "If you are unsure, assume two finish coats for most repaints.",
          "Add a buffer for dark colors, heavy texture, or porous surfaces.",
          "Keep a labeled touch-up can for future repairs.",
        ],
      },
      {
        heading: "Quick planning checklist",
        bullets: [
          "Confirm surface condition (new drywall, patched, or glossy).",
          "Confirm color change severity and target sheen.",
          "Plan primer if absorption or stain blocking is a risk.",
          "Round up to whole cans for consistency between batches.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Cut-in length matters as much as area",
        paragraphs: [
          "A ceiling can have more linear feet of edges than you expect: light boxes, vents, fans, and closets all add cut-in. That extra brush work uses more paint and time than a simple open rectangle.",
        ],
        bullets: [
          "More fixtures = more cut-in = more paint loss to brush work.",
          "Vaulted ceilings and beams add extra edges and corners.",
        ],
      },
      {
        heading: "Texture and repairs (coverage drops fast)",
        bullets: [
          "Popcorn or heavy texture can reduce coverage significantly.",
          "Patches and water stains often require primer to avoid flashing.",
          "If you are changing ceiling color, plan an extra coat for uniformity.",
        ],
      },
      {
        heading: "Practical tips",
        bullets: [
          "Plan a small buffer (often 5-10%) and keep the same product for touch-ups.",
          "If stains exist, use a stain-blocking primer first.",
          "Cut in first, then roll while the cut-in is still wet to reduce lap marks.",
          "Use flat or matte ceiling paint to hide surface flaws.",
        ],
      },
      {
        heading: "Planning checklist",
        bullets: [
          "Count fixtures/vents and add buffer for extra cut-ins.",
          "Confirm texture type and plan for lower coverage.",
          "Plan primer if stains or repairs exist.",
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
    lastUpdated: "Last updated: Feb 2026",
    sections: [
      {
        heading: "Simple formula",
        paragraphs: [
          "Trim area (sq ft) = total linear feet x average face width (in feet). Example: 300 ft of baseboard at 3.5 in face width is 300 x (3.5/12) ≈ 87.5 sq ft per coat.",
        ],
      },
      {
        heading: "Measure the face, not the profile",
        paragraphs: [
          "Trim coverage is based on the visible face width, not the full profile depth. Use an average face width for each trim type and estimate them as separate line items.",
        ],
        bullets: [
          "Baseboard and door casing often have different face widths.",
          "Crown molding usually has more face area than baseboard.",
          "Round up if the profile has deep grooves or heavy detail.",
        ],
      },
      {
        heading: "Don’t forget doors, jambs, and edges",
        bullets: [
          "Doors need paint on both sides and the edges.",
          "Window sashes and trim return pieces add extra area.",
          "Closet doors and bi-folds can add more surface area than expected.",
        ],
      },
      {
        heading: "Common misses",
        bullets: [
          "Door/window casings add more area than people expect.",
          "Prep and primer matter more on glossy trim than on walls.",
        ],
      },
      {
        heading: "Planning tips",
        bullets: [
          "Trim usually needs more coats for a durable finish (often 2 finish coats).",
          "If the trim is glossy, plan for deglossing and primer.",
          "Round up to whole cans and keep a small amount for touch-ups.",
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
    lastUpdated: "Last updated: Feb 2026",
    sections: [
      {
        heading: "Quick overview",
        table: {
          columns: ["Finish level", "Typical use", "Material impact"],
          rows: [
            ["Level 0", "Temporary or behind tile", "No tape or mud applied"],
            ["Level 1", "Concealed areas", "Tape set in compound only"],
            ["Level 2", "Garages/utility", "Thin skim over joints and fasteners"],
            ["Level 3", "Heavy texture", "Extra coat to reduce ridges"],
            ["Level 4", "Most painted walls", "Multiple coats and sanding"],
            ["Level 5", "Critical lighting/smooth", "Skim coat across the surface"],
          ],
        },
      },
      {
        heading: "What each level means (plain language)",
        paragraphs: [
          "Levels are about how much compound is applied and how smooth the surface is before paint. Higher levels are not just \"prettier\"—they add material, time, and sanding.",
        ],
        bullets: [
          "Level 0: boards hung only, no tape or finishing.",
          "Level 1: tape in joint compound, minimal finishing.",
          "Level 2: tape plus a thin coat over joints and fasteners.",
          "Level 3: more compound to smooth ridges, often used under heavy texture.",
          "Level 4: standard for smooth painted walls, multiple coats and sanding.",
          "Level 5: full skim coat for critical light or glossy finishes.",
        ],
      },
      {
        heading: "Planning note",
        paragraphs: [
          "If you target a higher finish level, plan more joint compound and time than a basic finish. Texture and paint can hide some imperfections, but lighting can expose them.",
        ],
      },
      {
        heading: "Material and time impact (what changes most)",
        bullets: [
          "More finish level = more compound, more coats, and more sanding time.",
          "Skim coating (Level 5) often adds a near full extra coat across the surface.",
          "Higher levels increase primer and paint performance, especially under hard light.",
        ],
      },
      {
        heading: "Paint sheen and lighting (why Level 5 exists)",
        paragraphs: [
          "Glossy or semi-gloss paints and strong directional light reveal flaws. If a wall will be seen under raking light, a higher finish level can prevent visible seams and ridges.",
          "If your plan is a matte paint with heavy texture, Level 3 may be acceptable. For smooth walls and satin or glossier paint, Level 4 or 5 is more reliable.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Planning a high-gloss finish with only a Level 3 finish.",
          "Skipping a skim coat where lighting makes seams obvious.",
          "Assuming texture hides everything; it can still show joint ridges under light.",
        ],
      },
      {
        heading: "Quick planning checklist",
        bullets: [
          "Confirm the target finish level per room (not all rooms need the same level).",
          "Adjust mud and sanding time based on level and wall count.",
          "Match paint sheen and lighting expectations to the finish level.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Quick ratio math (volume split)",
        paragraphs: [
          "If your total mud volume is V, split by ratio. For 5:1, sand = (5/6) V and cement = (1/6) V. For 4:1, sand = (4/5) V and cement = (1/5) V.",
          "Example: 6 cu ft at 5:1 uses about 5 cu ft sand and about 1 cu ft cement (before waste).",
        ],
      },
      {
        heading: "What “deck mud” is (and what it is not)",
        paragraphs: [
          "Deck mud (also called dry pack) is intentionally low-water and packable. The goal is a stable, shaped bed that can be compacted and screeded to flat or to slope.",
          "Because it is drier than many other mixes, it behaves differently: water content, sand type, and mixing consistency matter more than people expect.",
        ],
      },
      {
        heading: "Sand selection (why it changes workability)",
        paragraphs: [
          "Sand gradation changes how the mix packs and screeds. Many installers use masonry or concrete sand based on local practice and system guidance.",
        ],
        bullets: [
          "Avoid very fine sand if it makes the mix sticky or hard to pack.",
          "Keep sand type consistent across batches to avoid texture changes.",
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
          "If you are converting to bags, use the cement bag yield on the label and round up.",
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
        heading: "Typical curing milestones (rule of thumb)",
        paragraphs: [
          "Exact timing depends on mix design, temperature, humidity, and thickness, but these milestones are common for planning and conversations with contractors.",
        ],
        table: {
          columns: ["Time after pour (typical)", "What often happens", "Reminder"],
          rows: [
            ["24-48 hours", "Light foot traffic (project dependent)", "Protect edges and avoid dragging tools"],
            ["3-7 days", "Early strength gain", "Heavy loads can still damage the slab"],
            ["28 days", "Common \"design strength\" milestone", "Strength continues to increase beyond this"],
          ],
        },
      },
      {
        heading: "Drying is different (especially for flooring/coatings)",
        paragraphs: [
          "Drying is about moisture leaving the slab. Some finishes (epoxy, sealers, adhesives, and certain floor systems) are sensitive to moisture and require tests rather than guessing based on touch.",
        ],
        bullets: [
          "Thicker slabs and cool/humid conditions dry slower.",
          "Moisture barriers, curing compounds, and sealers can change drying behavior.",
          "Use product instructions and moisture test guidance for flooring installs.",
        ],
      },
      {
        heading: "Curing practices that improve results",
        bullets: [
          "Avoid rapid early drying (wind/sun) that can increase cracking risk.",
          "Keep the surface protected per contractor guidance (curing compound, plastic, or watering schedule).",
          "Avoid heavy point loads (ladders, jack stands) until the slab has gained enough strength.",
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
      {
        heading: "Why 28 days is mentioned so often",
        paragraphs: [
          "Many mixes are specified by their 28-day compressive strength. That doesn’t mean concrete is “done” at 28 days—it usually continues to gain strength beyond that milestone.",
          "For planning, treat it as a reference point for strength discussions, not a universal “OK to do anything” date.",
        ],
      },
      {
        heading: "What changes curing and drying time",
        bullets: [
          "Temperature: cold slows strength gain; hot/windy conditions can dry the surface fast.",
          "Humidity and airflow: higher humidity slows drying; strong airflow can dry the surface unevenly.",
          "Thickness: thicker slabs hold moisture longer and can dry much slower for flooring installs.",
          "Surface treatments: curing compounds, sealers, and moisture barriers change drying behavior.",
        ],
      },
      {
        heading: "Moisture-sensitive flooring (don’t guess by touch)",
        paragraphs: [
          "If you’re installing a flooring system that is sensitive to slab moisture (some epoxies, adhesives, and floor coverings), follow the product’s testing and moisture limit guidance. “It feels dry” is not a reliable test.",
        ],
        bullets: [
          "If testing is required, plan it early so it doesn’t delay the install schedule.",
          "If you’re unsure, your flooring installer or product documentation will specify acceptable moisture ranges and test methods (project dependent).",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Removing protection too early and letting sun/wind dry the surface too fast (cracking risk).",
          "Adding water during finishing to “help it close,” which can weaken the surface.",
          "Installing coatings/flooring before moisture guidance is met (bond failures and bubbling).",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Panel sizing tips",
        bullets: [
          "Panel lengths are typically 6 ft or 8 ft; confirm the exact width for your product.",
          "Add posts for corners, ends, and gates before you compute panels.",
          "If the fence is stepped, plan extra panels or cut adjustments.",
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
        heading: "Hardware and rails (easy to miss)",
        bullets: [
          "Panel installs often need brackets or clips (product dependent).",
          "Picket fences need rails sized for span and material; plan them separately.",
          "Gate hardware and bracing are separate line items.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Sanded vs unsanded (practical differences)",
        bullets: [
          "Unsanded grout is smoother and often used for narrow joints or delicate tile surfaces.",
          "Sanded grout is stronger in wider joints but can scratch some polished or soft tiles.",
          "If you are unsure, test a small area or confirm with the tile manufacturer.",
        ],
      },
      {
        heading: "Joint width and tile surface (why it matters)",
        paragraphs: [
          "The grout type must match both the joint width and the tile surface. A grout that is too smooth for a wide joint can crack or shrink. A sanded grout on a delicate surface can scratch.",
        ],
        bullets: [
          "Rectified or polished tile may need extra caution with sanded products.",
          "Rustic or textured tile can hide sanded grout texture more easily.",
        ],
      },
      {
        heading: "Planning note",
        paragraphs: [
          "Coverage varies by product. If you need a tighter estimate, use the exact bag yield chart for your chosen grout.",
        ],
      },
      {
        heading: "Decision checklist",
        bullets: [
          "Confirm joint width from your layout plan.",
          "Check tile surface hardness and manufacturer guidance.",
          "Plan movement joints as flexible sealant, not grout.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Starter strip estimating (linear feet)",
        paragraphs: [
          "Starter strips are usually planned by the linear feet of eaves and rakes (project dependent). They are not included in the field shingle count unless the system says otherwise.",
        ],
        bullets: [
          "Measure the total linear feet of eaves and rakes that require starter.",
          "Confirm whether the product uses a dedicated starter strip or modified shingles.",
        ],
      },
      {
        heading: "Ridge cap estimating (ridge and hip length)",
        paragraphs: [
          "Ridge cap quantity is driven by linear feet of ridge and hip length, not roof area. If you add ridge vent, cap requirements can change based on the system.",
        ],
        bullets: [
          "Measure ridge and hip length separately from roof area.",
          "Confirm cap coverage per bundle or per cap piece.",
        ],
      },
      {
        heading: "Compatibility notes (do not mix systems)",
        bullets: [
          "Use ridge caps that match the shingle product line for appearance and warranty.",
          "If you use ridge vent, confirm compatible cap requirements and fastener length.",
          "Color matching is easier if all cap materials are from the same batch.",
        ],
      },
      {
        heading: "Practical advice",
        paragraphs: [
          "Use your roofing calculator for field shingles, then add starter and ridge caps based on the product guidance and your ridge length.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Assuming starter and ridge caps are included in field shingle bundles.",
          "Using ridge cap coverage from a different shingle line.",
          "Forgetting hips and short ridges on dormers when estimating cap length.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Air entrainment (freeze/thaw durability)",
        paragraphs: [
          "In freeze/thaw climates, air-entrained concrete is often used to reduce surface scaling and damage. If your area sees freezing conditions, confirm whether air entrainment is required or recommended.",
        ],
        bullets: [
          "Air entrainment affects finish and strength; coordinate with the mix design.",
          "Do not add water on site to “fix” workability in air-entrained mixes.",
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
        heading: "Admixture checklist (common options)",
        bullets: [
          "Accelerators for cold weather or tight schedules (project dependent).",
          "Retarders for hot weather or large pours that need more working time.",
          "Water reducers for workability without adding water.",
          "Fibers for plastic shrinkage control (not a rebar replacement).",
        ],
      },
      {
        heading: "Reminder",
        paragraphs: [
          "Mix selection affects cost and placement. For critical work, follow code and supplier guidance rather than generic assumptions.",
        ],
      },
      {
        heading: "Typical strength ranges (planning examples only)",
        paragraphs: [
          "Exact requirements vary by local code, exposure conditions, and engineer/contractor specs. Use these as conversation starters, not as a substitute for requirements.",
        ],
        table: {
          columns: ["Use case (typical)", "Common strength range", "Notes"],
          rows: [
            ["Patios and walkways", "3000–3500 PSI", "Thickness, base, and curing still drive durability"],
            ["Driveways", "3500–4500 PSI", "Freeze/thaw exposure may require air entrainment"],
            ["Footings / piers", "3000–4000 PSI", "Rebar spacing and aggregate size can matter"],
          ],
        },
      },
      {
        heading: "Weather planning (hot vs cold)",
        bullets: [
          "Hot/windy weather can dry the surface fast: plan curing and finishing timing to reduce cracking risk.",
          "Cold weather slows strength gain: you may need an accelerator, protection, or schedule changes (project dependent).",
          "If you need a longer working time (large pour), discuss retarder and delivery timing before the truck is dispatched.",
        ],
      },
      {
        heading: "Delivery checklist (avoid day-of surprises)",
        bullets: [
          "Confirm access: can the truck reach the forms, or do you need a pump/wheelbarrow plan?",
          "Confirm discharge time limits and washout location.",
          "Have labor/tools ready before arrival: rakes, screed, float, edger, and curing plan.",
          "Plan a small buffer: short loads can stop the pour at the worst time.",
        ],
      },
      {
        heading: "Common mistakes that cause weak concrete",
        bullets: [
          "Adding water on site to increase slump (often reduces strength and increases shrinkage).",
          "Skipping curing because the surface “looks dry.”",
          "Poor base prep and drainage: slabs fail from below more often than from mix design alone.",
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
    lastUpdated: "Last updated: Feb 2026",
    sections: [
      {
        heading: "Why average thickness matters",
        paragraphs: [
          "A sloped bed is thicker at the perimeter than at the drain. Estimate volume using average thickness (measure high and low points, then average).",
        ],
      },
      {
        heading: "Slope rule of thumb",
        paragraphs: [
          "A common shower slope target is about 1/4\" per foot toward the drain (confirm local practice and system guidance).",
          "Perimeter thickness = drain thickness + (longest run in feet x slope per foot).",
        ],
      },
      {
        heading: "Average thickness (the key input)",
        paragraphs: [
          "Average thickness = (perimeter thickness + drain thickness) / 2. Use this average for volume math.",
        ],
        bullets: [
          "If the drain is off-center, use the longest run to find perimeter thickness.",
          "Measure at multiple walls; the thickest point drives volume most.",
        ],
      },
      {
        heading: "Worked example",
        paragraphs: [
          "Example: longest run 4 ft, slope 1/4\" per ft = 1\" of rise. If drain thickness is 1\", perimeter thickness is ~2\" and average thickness is ~1.5\".",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Moisture barrier details",
        bullets: [
          "Some underlayments include a vapor barrier; others require a separate film.",
          "Overlap and tape seams per manufacturer guidance.",
          "Do not assume a barrier is optional on slabs if the product requires it.",
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
        heading: "Sound control and building rules",
        bullets: [
          "Condos and multi-family buildings can require specific sound ratings (IIC/STC).",
          "Underlayment thickness changes door clearances and transition heights.",
          "If sound ratings are required, use approved products to avoid rework.",
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
        heading: "Compatibility checks",
        bullets: [
          "Some flooring includes a built-in pad and does not allow extra underlayment.",
          "Glue-down floors may require specific adhesives and trowel sizes.",
          "Follow manufacturer limits to keep warranty valid.",
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
    lastUpdated: "Last updated: Feb 2026",
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
      {
        heading: "Primer types (which one matches your problem)",
        table: {
          columns: ["Primer (common)", "Best for", "Notes"],
          rows: [
            ["PVA drywall primer", "New drywall", "Reduces flashing; not a stain blocker"],
            ["Bonding primer", "Glossy/previously coated surfaces", "Prep still matters (clean + scuff)"],
            ["Stain-blocking primer", "Water, smoke, tannins", "Choose product type per stain and follow dry time"],
            ["Multi-surface primer", "General spot priming", "Good for mixed repairs (quality varies)"],
          ],
        },
      },
      {
        heading: "Spot-prime vs full-prime (practical decision)",
        bullets: [
          "Spot-prime when only patches, repairs, or small stain areas exist and the rest of the wall is sound.",
          "Full-prime when the entire surface is porous/uneven, heavily stained, or you’ve sanded through existing coatings in many places.",
          "If the finish coat looks blotchy after the first coat, that’s often a sign the substrate is uneven and primer (or another coat) is needed.",
        ],
      },
      {
        heading: "Dry time and recoat windows (do not rush it)",
        paragraphs: [
          "Primer needs time to dry and cure before topcoating. Rushing can trap moisture or reduce adhesion. Always check the product label for dry and recoat time, especially in cool or humid rooms.",
        ],
        bullets: [
          "Oil-based and stain-blocking primers often need longer dry times than water-based primers.",
          "Cold or humid conditions slow drying; plan extra time in bathrooms and basements.",
          "Sanding between coats is often optional, but it can improve smoothness on trim.",
        ],
      },
      {
        heading: "Coverage math tip (primer gallons are separate)",
        paragraphs: [
          "If you plan to prime, estimate primer gallons using its own coverage rate and coat count. Do not count primer as part of the paint gallons or you will underbuy.",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Skipping cleaning on kitchen/bath walls (soap and grease reduce adhesion).",
          "Priming everything with a single product even when a bonding or stain-block primer is needed.",
          "Assuming primer is “free coverage”: it still needs film build and correct dry time.",
          "Painting over glossy surfaces without scuffing/deglossing (peeling risk).",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Layout checkpoint (before you buy)",
        bullets: [
          "Confirm the tile module (tile size + grout joint) and dry-lay a few rows.",
          "Shift the layout to reduce sliver cuts at the most visible walls.",
          "If you have borders or mosaics, estimate those as separate materials.",
        ],
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
        heading: "Box coverage checklist (avoid unit mistakes)",
        bullets: [
          "Use the label coverage per box (sq ft or m²), not tile dimensions alone.",
          "Add overage for layout complexity before converting to boxes.",
          "Round up to whole boxes; partial boxes are not practical to buy.",
          "Estimate trim, mosaics, and borders separately.",
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
      {
        heading: "Tips that reduce waste (without under-buying)",
        bullets: [
          "Plan layout so cut pieces land in less-visible areas when possible.",
          "Increase overage for large-format or fragile tile; breakage risk matters.",
          "Keep a few spares for future repairs; matching later can be difficult.",
        ],
      },
      {
        heading: "Substrate flatness and prep (where many projects fail)",
        paragraphs: [
          "Layout and overage are important, but tile performance depends on substrate prep: flatness, stiffness, and compatibility with your mortar and membrane system. Large-format tile is especially unforgiving on uneven surfaces.",
        ],
        bullets: [
          "Confirm floor stiffness and underlayment requirements (project dependent).",
          "Plan leveling/patching materials if the surface isn’t flat enough for your tile size.",
          "Choose mortar type based on tile material, size, and environment (follow manufacturer guidance).",
        ],
      },
      {
        heading: "Movement joints and transitions (plan before you start)",
        bullets: [
          "Plan soft joints at changes of plane and where movement is expected (follow tile industry guidance).",
          "Plan transitions at doorways and where tile meets other flooring for height changes.",
          "Dry-fit trim pieces (schluter/edge profiles) so you know what thicknesses and overlaps you need.",
        ],
      },
      {
        heading: "Jobsite checklist (day-of efficiency)",
        bullets: [
          "Verify you have enough spacers/leveling clips, mixing buckets, and trowels for the day’s pace.",
          "Have a clean water and wash station plan; grout cleanup is easier when you’re organized.",
          "Open multiple boxes and mix tiles to blend shade variation (common recommendation).",
        ],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Buying tile based on calculated pieces-per-box instead of the label coverage.",
          "Underestimating cuts around toilets, cabinets, niches, and pipe penetrations.",
          "Skipping substrate prep and then trying to “fix it in thinset,” which usually creates lippage and weak spots.",
        ],
      },
    ],
    related: [
      { label: "Tile calculator", href: "/en/calculators/home-improvement/tile" },
      { label: "Tile guide", href: "/en/guides/home-improvement/tile" },
      { label: "Tile waste guide", href: "/en/guides/home-improvement/tile-waste" },
      { label: "Tile grout guide", href: "/en/resources/tile-grout-selection-and-coverage-guide" },
      { label: "Tile waterproofing guide", href: "/en/resources/tile-waterproofing-and-membranes-guide" },
    ],
  },
  {
    slug: "drywall-materials-and-finishing-guide",
    title: "Drywall materials and finishing guide (sheets, seams, mud, and tape)",
    description:
      "A practical drywall planning guide: choosing sheet sizes, understanding finishing levels, and estimating seams, tape, and compound realistically.",
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Finish levels (quick overview)",
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
        heading: "Board types (moisture, fire-rated, and ceilings)",
        table: {
          columns: ["Type", "Typical use", "Reminder"],
          rows: [
            ["Regular drywall", "Most dry interior rooms", "Match thickness to framing and local code"],
            ["Moisture-resistant", "Bathrooms/laundry (non-shower areas)", "Not a substitute for waterproofing"],
            ["Fire-rated (Type X)", "Garages/required assemblies", "Follow local code requirements"],
            ["Sag-resistant / ceiling board", "Ceilings", "Helps reduce sag on wider spans"],
          ],
        },
        bullets: [
          "Board type choices don’t usually change sheet count, but they affect cost and availability—estimate specialty board as its own line item.",
          "Do not assume moisture-resistant board makes a shower waterproof; waterproofing is a system.",
        ],
      },
      {
        heading: "Ceiling thickness (1/2 vs 5/8): a quick decision",
        table: {
          columns: ["Ceiling framing (typical)", "Common thickness", "Why"],
          rows: [
            ['16\" on center', '1/2\" or 5/8\"', "Both can be acceptable; check code and product"],
            ['24\" on center', '5/8\" (often)', "Better sag resistance across wider spacing"],
          ],
        },
        bullets: [
          "If the ceiling will be under strong directional light, stiffer board usually looks flatter.",
          "If you are working alone, smaller/lighter sheets can be safer even if seam count increases.",
          "Sketch the ceiling and keep butt joints away from the most noticeable sight lines when possible.",
        ],
      },
      {
        heading: "Fastener spacing (quick reminder)",
        bullets: [
          "Follow the board and fastener manufacturer schedule for ceilings.",
          "Missed framing members lead to sag and popped screws.",
          "If you are unsure, tighten spacing on ceilings rather than widening it.",
        ],
      },
      {
        heading: "Joint compound types (setting vs premix)",
        table: {
          columns: ["Type", "Typical use", "Tradeoff"],
          rows: [
            ["Setting-type (powder)", "Taping and quick turnaround", "Hardens fast; limited working time"],
            ["Premix (bucket)", "Topping and finishing", "Longer working time; slower dry"],
          ],
        },
        bullets: [
          "Setting compound is often used for first coats or repairs; premix is common for final coats.",
          "Hot/dry rooms can shorten working time; plan batch size accordingly.",
        ],
      },
      {
        heading: "Tape and bead choices (plan these separately)",
        bullets: [
          "Paper tape: common standard, strong when embedded correctly.",
          "Mesh tape: easier to apply on repairs but often paired with setting compound.",
          "Corner bead: metal, vinyl, or paper-faced; choose per impact risk and finish level.",
        ],
      },
      {
        heading: "Drying, sanding, and dust planning",
        paragraphs: [
          "Drying time depends on humidity, temperature, and compound type. Plan ventilation and dry time so coats are not rushed. Rushed sanding leads to waves and burn-through.",
        ],
        bullets: [
          "Allow adequate drying between coats; humid rooms can double dry time.",
          "Use a bright light at a low angle to check for ridges before priming.",
          "Control dust with vacuum sanding or dust barriers if the space is occupied.",
        ],
      },
      {
        heading: "Primer and paint schedule (finishing impact)",
        bullets: [
          "Prime new drywall to even out absorption before paint.",
          "Higher finish levels benefit from better primer and careful sanding between coats.",
          "Glossy paint shows more defects; use matte or eggshell where you want forgiveness.",
        ],
      },
      {
        heading: "Mud, tape, and texture: what drives usage",
        bullets: [
          "Finish level: higher levels generally mean more compound and sanding.",
          "Seam count: more seams and patches mean more tape and compound.",
          "Corners: inside corners consume tape and compound faster than people expect.",
          "Texture type and tool (spray vs hopper vs trowel) change coverage and waste.",
          "Second coats and blending repairs can approach a full extra coat on some textures.",
        ],
      },
      {
        heading: "Waste factors (how much extra to buy)",
        table: {
          columns: ["Project type", "Typical waste", "Notes"],
          rows: [
            ["Large simple rooms", "8-12%", "Better reuse of offcuts"],
            ["Many small rooms", "12-18%", "More corners and short runs"],
            ["Ceilings / tricky access", "12-20%", "Handling decisions add cuts"],
          ],
        },
        paragraphs: [
          "Waste includes cutouts, breakage, and offcuts that cannot be reused. It also includes rounding to whole sheets and layout decisions that change seam placement.",
        ],
      },
      {
        heading: "Room-size examples (sanity check)",
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
      { label: "Drywall ceiling guide", href: "/en/guides/home-improvement/drywall-ceiling" },
      { label: "Drywall mud & tape calculator", href: "/en/calculators/home-improvement/drywall-mud-tape" },
      { label: "Drywall texture calculator", href: "/en/calculators/home-improvement/drywall-texture" },
    ],
  },
  {
    slug: "deck-planning-materials-and-layout-guide",
    title: "Deck planning guide (layout, gaps, stairs, and materials list)",
    description:
      "A practical deck planning guide: board direction, gapping, diagonal waste, stairs, and the material items people forget.",
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Diagonal and borders: quick waste ranges",
        table: {
          columns: ["Layout", "Typical waste", "Notes"],
          rows: [
            ["Straight", "5-10%", "Fewer angle cuts"],
            ["Diagonal", "10-15%", "More cutoffs"],
            ["Picture frame + diagonal", "12-20%", "Miter waste adds up"],
          ],
        },
        bullets: [
          "Posts, stairs, borders, and lots of cut interruptions push waste higher.",
          "If color matching matters (some composite products), buying enough up front is safer than topping up later.",
        ],
      },
      {
        heading: "Stairs: estimate as a separate line item",
        paragraphs: [
          "Stairs can add board count quickly. Treat steps and landings separately rather than hoping the main deck waste covers them. If you are planning a border or diagonal pattern, expect more waste on stairs.",
        ],
      },
      {
        heading: "Footings and posts (do not guess depth)",
        paragraphs: [
          "Footing depth and post size are driven by load, span, and local frost depth. If you under-plan footings, the whole deck can move. Confirm footing depth before you buy concrete or posts.",
        ],
        bullets: [
          "Local frost depth often drives minimum footing depth.",
          "Heavier railings or hot tubs increase loads and may require larger footings.",
        ],
      },
      {
        heading: "Framing checklist (joists, beams, posts, and hardware)",
        paragraphs: [
          "A deck board estimate covers surface boards. Framing includes joists, beams, posts, connectors, and fasteners. Framing needs depend on span, spacing, and local requirements, so estimate framing as a separate list.",
        ],
        bullets: [
          "Joist spacing (often 12/16/24\" on center depending on decking and code)",
          "Beam layout and spans (affects beam size and post count)",
          "Ledger vs freestanding design (changes hardware and flashing needs)",
          "Railing and stair loads (adds blocking and connectors)",
          "Joist hangers and hanger nails/screws",
          "Post bases, brackets, and anchor hardware",
          "Ledger flashing and waterproofing details",
        ],
      },
      {
        heading: "Railing and code considerations",
        bullets: [
          "Guard rail height and spacing requirements can affect post layout.",
          "Stair rails often require different hardware than deck rails.",
          "If your deck is elevated, plan railing posts before you set the framing layout.",
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
      {
        heading: "Drainage and water management",
        bullets: [
          "Plan deck slope or gaps so water can drain away from the house.",
          "Keep soil or mulch from burying deck framing and posts.",
          "If attaching to a house, prioritize ledger flashing and waterproofing details.",
        ],
      },
      {
        heading: "Composite vs wood planning (what changes)",
        bullets: [
          "Gapping rules differ: composites can expand/contract differently than wood—follow the specific product instructions.",
          "Fastening systems differ: hidden clip systems can change board-to-board spacing and waste.",
          "Blocking needs can change for diagonal installs and for composite to meet deflection limits (project dependent).",
        ],
      },
      {
        heading: "Ledger and waterproofing (a common long-term failure point)",
        paragraphs: [
          "If your deck is attached to a house, ledger flashing and water management are critical. Water trapped behind a ledger can cause structural rot. This is more important to long-term safety than saving a few boards of decking.",
        ],
        bullets: [
          "Plan ledger flashing, fastener type, and waterproofing details per code and manufacturer guidance (project dependent).",
          "If you’re unsure, consider a freestanding design or professional review for attachment details.",
        ],
      },
      {
        heading: "Layout sanity checks (before ordering)",
        bullets: [
          "Confirm board run lengths and where seams will land (avoid tiny end pieces where possible).",
          "Confirm stair/landing geometry and the number of steps needed (it often drives extra boards).",
          "Confirm railing line and post locations early so you can plan blocking and avoid surprise cutouts.",
        ],
      },
    ],
    related: [
      { label: "Deck calculator", href: "/en/calculators/home-improvement/deck" },
      { label: "Deck guide", href: "/en/guides/home-improvement/deck" },
      { label: "Board feet explained", href: "/en/resources/board-feet-explained" },
      { label: "Baseboard waste tips", href: "/en/resources/baseboard-trim-waste-tips" },
    ],
  },
  {
    slug: "fence-planning-posts-gates-and-materials-guide",
    title: "Fence planning guide (posts, gates, and materials checklist)",
    description:
      "A practical fence planning guide: panels vs pickets, post spacing, gates and corners, and the material items most estimates miss.",
    lastUpdated: "Last updated: Feb 2026",
    sections: [
      {
        heading: "Decide panel vs picket before you estimate",
        paragraphs: [
          "Panel fences are often estimated by sections (6 ft/8 ft panels). Picket fences are estimated by picket count and rail length. The math and the shopping list are different, so pick the system first.",
        ],
      },
      {
        heading: "Planning before you dig",
        bullets: [
          "Confirm property lines, setbacks, and any HOA or local permit rules.",
          "Call utility locate before digging.",
          "Plan gate locations early so post spacing stays consistent.",
        ],
      },
      {
        heading: "Panel vs picket (what changes in your estimate)",
        table: {
          columns: ["Fence style", "Primary quantity", "Common extras to remember"],
          rows: [
            ["Panel fence", "Panels/sections", "Brackets, rails (if needed), stepped/racked adjustments"],
            ["Picket fence", "Picket count + rail length", "Fasteners, spacing jig, extra pickets for damage"],
          ],
        },
        bullets: [
          "Gates and corners often require extra posts and stronger bracing regardless of style.",
          "If the fence follows a slope, panel stepping/racking can change both layout and waste.",
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
        heading: "Material choices (wood, vinyl, steel)",
        bullets: [
          "Wood fences need stain/sealer planning and a maintenance schedule.",
          "Vinyl panels reduce maintenance but can limit custom sizing.",
          "Steel/aluminum changes hardware and post spacing; follow system guidance.",
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
        heading: "Gate sag prevention (practical planning)",
        bullets: [
          "Wider/heavier gates sag more; plan stronger posts and hardware up front.",
          "Use appropriate hinges and consider a gate brace/cable (project dependent).",
          "Plan ground clearance and swing direction (driveway slope changes clearances).",
          "If the gate must align with panels, plan latch-side adjustments before setting posts.",
        ],
      },
      {
        heading: "Post spacing and layout (quick rules)",
        table: {
          columns: ["Fence type", "Common spacing approach", "Reminder"],
          rows: [
            ["Panels", "Post-to-post matches panel length", "Corners/ends/gates add posts"],
            ["Pickets", "Posts support rails (layout dependent)", "Rails and picket spacing drive counts"],
            ["Sloped sites", "Step or rack panels (project dependent)", "Slope changes section count and waste"],
          ],
        },
      },
      {
        heading: "Post holes and concrete (planning notes)",
        bullets: [
          "Post depth depends on fence height and local frost line guidance.",
          "Gate posts often need deeper/stronger footings (project dependent).",
          "Estimate concrete as its own line item and round up—running short mid-set is painful.",
          "Drainage and soil type can change footing needs; confirm local practice.",
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
      {
        heading: "Ordering tips",
        bullets: [
          "Buy extra pickets or panels for damage and future repairs.",
          "If matching color matters, buy from the same batch when possible.",
          "Plan delivery and storage so materials stay dry and flat.",
        ],
      },
    ],
    related: [
      { label: "Fence calculator", href: "/en/calculators/home-improvement/fence" },
      { label: "Fence guide", href: "/en/guides/home-improvement/fence" },
      { label: "Post hole concrete guide", href: "/en/resources/fence-post-hole-concrete-guide" },
      { label: "Fence posts guide", href: "/en/guides/home-improvement/fence-posts" },
    ],
  },
  {
    slug: "tile-grout-selection-and-coverage-guide",
    title: "Tile grout guide (sanded vs unsanded, joint width, and coverage)",
    description:
      "A practical grout guide: choosing grout type, sizing joints, and understanding why coverage changes with tile size and joint width.",
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Joint width planning (tile type and substrate matter)",
        paragraphs: [
          "Joint width is a design and performance decision. Narrow joints can look clean but demand flatter substrates and more precise tile sizing. Wider joints are more forgiving but change grout volume and cleanup effort.",
        ],
        bullets: [
          "Rectified tile can support tighter joints, but floors still need practical spacing.",
          "Handmade or rustic tile often needs wider joints to hide size variation.",
          "If the substrate is not flat, tighter joints can create lippage and alignment issues.",
        ],
      },
      {
        heading: "Why grout coverage varies so much",
        paragraphs: [
          "Grout usage is driven by total joint volume, not tile surface area. Smaller tiles create more linear feet of joints per square foot. Wider joints and deeper joints also increase volume.",
          "For reliable planning, use product yield charts (or a grout calculator) and keep your inputs consistent: tile length/width, joint width, and an average joint depth.",
        ],
      },
      {
        heading: "Coverage drivers (what changes bag count)",
        bullets: [
          "Tile size: smaller tiles have more grout lines per square foot.",
          "Joint width: wider joints use more grout.",
          "Joint depth: thicker tile and deeper joints increase usage.",
          "Waste: mixing loss, cleanup, and rounding to whole bags.",
        ],
      },
      {
        heading: "Mixing and cleanup (color consistency matters)",
        bullets: [
          "Measure water consistently; too much water can weaken grout and change color.",
          "Mix the same way for every batch to avoid shade shifts between areas.",
          "Wash timing affects color and joint strength; follow the bag instructions.",
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
        heading: "Sanded vs unsanded (quick checklist)",
        bullets: [
          "Product choice depends on joint width and tile type; follow the bag and manufacturer guidance.",
          "Some projects use specialty grouts (epoxy/urethane) with different working time and coverage.",
          "Movement joints use caulk/sealant, not grout.",
        ],
      },
      {
        heading: "Epoxy and specialty grouts (when they make sense)",
        bullets: [
          "High-use kitchens, showers, and commercial spaces often benefit from stain resistance.",
          "Epoxy cleanup timing is stricter; plan smaller batches and follow the system.",
          "Specialty grouts can reduce sealing needs but have different working time and cost.",
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
      {
        heading: "Joint width planning (what drives the choice)",
        bullets: [
          "Tile size and edge style matter: rectified edges can allow tighter joints, but floors still need practical spacing.",
          "Substrate flatness matters: if the surface isn’t flat, tighter joints can highlight lippage and make layout harder.",
          "Use manufacturer guidance for specialty tile (stone, glass, polished surfaces) and for wet areas.",
        ],
      },
      {
        heading: "Movement joints and transitions (do not grout these)",
        bullets: [
          "Changes of plane (wall to floor, inside corners) need flexible sealant, not grout.",
          "Large spans and door thresholds need movement joints to prevent cracking.",
          "Follow tile industry guidance for placement and joint spacing (project dependent).",
        ],
      },
      {
        heading: "Worked example (why small tile uses more grout)",
        paragraphs: [
          "A mosaic can use multiple times the grout of a large-format tile because joint length per square foot is much higher. If you’re mixing field tile with mosaics, estimate mosaics separately so you don’t run short.",
          "As a rough check: if you halve tile size, joint length increases significantly (project dependent). That’s why “one bag per X sq ft” numbers rarely transfer from one tile size to another.",
        ],
      },
      {
        heading: "Color, sealing, and cleanup notes",
        bullets: [
          "Cement grout color can vary with water content and cleanup timing; mix consistently and follow wash timing.",
          "Some cement grouts require sealing; many epoxy/specialty grouts do not (follow product instructions).",
          "Movement joints (changes of plane, large spans) should be flexible sealant, not grout.",
        ],
      },
      {
        heading: "Cure time and protection (plan the schedule)",
        bullets: [
          "Protect grout from heavy traffic and water until it cures per product guidance.",
          "Wet areas often need longer cure times before regular use.",
          "If you plan to seal, follow the grout maker’s cure window before sealing.",
        ],
      },
    ],
    related: [
      { label: "Tile grout calculator", href: "/en/calculators/home-improvement/tile-grout" },
      { label: "Tile planning guide", href: "/en/resources/tile-project-planning-guide" },
      { label: "Tile guide", href: "/en/guides/home-improvement/tile" },
    ],
  },
  {
    slug: "tile-waterproofing-and-membranes-guide",
    title: "Tile waterproofing and membranes (what’s required vs optional)",
    description:
      "A practical guide to waterproofing choices in tile projects: showers, wet rooms, membranes, and why prep affects long-term durability.",
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Substrate choices (what goes under the membrane)",
        bullets: [
          "Cement board: common in wet areas but still needs waterproofing.",
          "Foam board systems: light and fast, but must follow the system details.",
          "Drywall in wet areas: only allowed in some systems and only with correct waterproofing (project dependent).",
        ],
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
      {
        heading: "Wet areas vs splash areas (what usually needs a membrane)",
        table: {
          columns: ["Area (typical)", "Water exposure", "Common approach (high level)"],
          rows: [
            ["Shower / wet room", "Continuous", "Waterproofing membrane as a system (walls + floor + seams)"],
            ["Tub surround", "Frequent splash", "Membrane where required; confirm substrate guidance"],
            ["Bathroom floor (outside shower)", "Intermittent", "Often optional; consider around toilets and entry points"],
            ["Kitchen backsplash", "Splash only", "Usually not a full waterproofing system"],
          ],
        },
      },
      {
        heading: "Critical details that prevent leaks",
        bullets: [
          "Slope-to-drain planning: the waterproof layer (or pan system) must direct water to the drain (project dependent).",
          "Seams and corners: treat overlaps, inside/outside corners, and changes of plane per the system instructions.",
          "Penetrations: valves, shower heads, niches, and benches need pre-planned seals (gaskets, banding, or sealant details).",
          "Transitions: plan how waterproofing ties into the bathroom floor, curb, and door threshold.",
        ],
      },
      {
        heading: "Drain and pan options (high level)",
        bullets: [
          "Traditional mud pan: flexible for custom sizes but requires skill to slope correctly.",
          "Pre-formed foam pan: faster install, but sizing and drain alignment must be exact.",
          "Linear drains can simplify slope but need careful layout planning.",
        ],
      },
      {
        heading: "Liquid membrane thickness (common failure point)",
        paragraphs: [
          "Liquid-applied waterproofing needs the correct dry film thickness. Too thin can fail; too thick can crack or take too long to cure. Use the manufacturer coverage rate and coats as a checklist rather than guessing by appearance.",
        ],
        bullets: [
          "Let each coat cure the required time (temperature and humidity matter).",
          "Use reinforcement fabric where the system calls for it (corners, seams, transitions).",
        ],
      },
      {
        heading: "Flood testing and cure time (plan the schedule)",
        bullets: [
          "Many shower systems require a flood test before tile (project dependent).",
          "Do not rush cure time; early water exposure can compromise seams.",
          "Plan the test window so it does not delay tile installation.",
        ],
      },
      {
        heading: "Compatibility notes (avoid “it didn’t bond”)",
        bullets: [
          "Use thinset/mortar types approved for your membrane and tile (some membranes require specific mortars).",
          "Porcelain and large-format tiles can need different mortars and trowel techniques for coverage.",
          "If you mix products across brands, confirm compatibility; “generic” substitutions can create weak points.",
        ],
      },
      {
        heading: "Sanity checks before tile",
        bullets: [
          "Confirm the substrate is flat enough for your tile size (large tile is less forgiving).",
          "Dry-fit layout for niche heights, valve locations, and trim pieces before waterproofing details are locked in.",
          "If your system requires a flood test, schedule it before setting tile (project dependent).",
        ],
      },
      {
        heading: "Common waterproofing mistakes",
        bullets: [
          "Skipping seam banding or corner treatment in sheet systems.",
          "Applying liquid membrane too thin or missing the second coat.",
          "Not sealing penetrations (valves, niches, benches) correctly.",
          "Assuming grout is waterproof and skipping the membrane entirely.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Moisture zones (what MR board does and does not do)",
        paragraphs: [
          "Moisture-resistant (MR) board is meant for damp areas, not direct water exposure. Showers and wet rooms need a waterproofing system with proper substrate and membrane details.",
        ],
        bullets: [
          "Use MR board for bathroom walls outside of direct spray zones (project dependent).",
          "In wet areas, follow a system that includes waterproofing membrane and compatible backer.",
          "Do not treat MR board as a waterproofing shortcut.",
        ],
      },
      {
        heading: "Fire-rated assemblies (follow the full system)",
        paragraphs: [
          "Fire ratings depend on the whole assembly: board type, thickness, fasteners, and layers. Type X board is common for garages and shared walls, but the rating requires the right installation pattern.",
        ],
        bullets: [
          "If your project needs a rated assembly, match thickness and layer count to code.",
          "Do not mix board types or thicknesses in a rated assembly unless approved.",
        ],
      },
      {
        heading: "Sound control (board type is only one part)",
        bullets: [
          "Sound isolation improves with mass, decoupling, and insulation, not just specialty board.",
          "Common upgrades include resilient channel, double layers, and insulation in cavities.",
          "Plan sound-control assemblies early because they change thickness and trim details.",
        ],
      },
      {
        heading: "Ceiling and sag-resistant board (when it helps)",
        bullets: [
          'Sag-resistant board can help on 24" on-center ceilings or humid areas.',
          "If lighting is critical, stiffness matters more than minimum code allowance.",
        ],
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
      {
        heading: "Handling and availability",
        bullets: [
          "Type X and sound-rated boards are heavier; plan labor and lifting.",
          "Specialty boards may require lead time; avoid last-minute substitutions.",
          "Store boards flat and dry; bowed sheets create finishing problems.",
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
    lastUpdated: "Last updated: Feb 2026",
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
        heading: "Span and spacing (why math changes fast)",
        bullets: [
          "Joist span tables determine joist size and spacing (do not guess).",
          "Wider joist spacing reduces joist count but can require thicker decking.",
          "Blocking may be required for diagonal layouts or composite decking.",
        ],
      },
      {
        heading: "Footings and posts",
        bullets: [
          "Footing depth is often driven by frost depth and load (project dependent).",
          "Post size and spacing are tied to beam span and layout.",
          "Concrete volume should be estimated separately per footing size.",
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
      {
        heading: "Lateral load and attachment details",
        bullets: [
          "Ledger attachments often require specific fasteners and spacing.",
          "Lateral load connectors can be required by code (project dependent).",
          "If attaching to a house, confirm flashing and water management details.",
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
    lastUpdated: "Last updated: Feb 2026",
    sections: [
      {
        heading: "Why gates sag (and what fixes it)",
        paragraphs: [
          "Gates sag when posts move, hardware is undersized, or the gate frame isn’t braced for weight. Planning the gate post and bracing is often more important than the pickets or panels.",
        ],
      },
      {
        heading: "Post planning (the real foundation)",
        bullets: [
          "Gate posts often need to be larger or deeper than line posts.",
          "Set gate posts first and let them cure before hanging the gate (project dependent).",
          "If the gate is heavy, consider steel-reinforced posts or sleeves.",
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
        heading: "Hardware selection tips",
        bullets: [
          "Use hinges rated for the gate weight and material (wood, vinyl, metal).",
          "Plan for a drop rod on double gates to prevent sag and movement.",
          "Allow clearance for latch hardware and seasonal movement.",
        ],
      },
      {
        heading: "Hardware items to list separately",
        bullets: ["Hinges", "Latch/lock", "Drop rod (for double gates)", "Fasteners and braces"],
      },
      {
        heading: "Common mistakes",
        bullets: [
          "Using line posts for gates without extra depth or reinforcement.",
          "Hanging the gate before posts have set or cured.",
          "Skipping diagonal bracing on wider gates.",
        ],
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
      {
        heading: "Simple blend ratios (starting points)",
        paragraphs: [
          "Blend ratios depend on your goal. For lawns, you typically want a stable mineral base (topsoil) and only a light compost addition. For garden beds, higher compost content can work if the mix still has structure and drainage.",
        ],
        table: {
          columns: ["Use case", "Typical compost share (by volume)", "Why"],
          rows: [
            ["Lawn topdressing", "10–25%", "Adds organic matter without making the surface too soft"],
            ["New lawn/top layer", "10–30%", "Helps early rooting (project dependent)"],
            ["Vegetable beds", "25–50%", "Fertility + structure (quality dependent)"],
          ],
        },
      },
      {
        heading: "Quality matters more than the label",
        bullets: [
          "“Topsoil” can mean screened topsoil, sandy loam, or fill with clods and rocks—ask what you’re getting.",
          "Compost quality varies: finished compost should smell earthy and be stable (not hot or full of fresh chunks).",
          "Weed seeds, salts, and pH can be issues depending on feedstock and how compost was made.",
        ],
      },
      {
        heading: "Worked example (plan the two materials separately)",
        paragraphs: [
          "Say you need 2.0 cubic yards of blended material for a bed and you want ~40% compost. That’s 0.8 cu yd compost and 1.2 cu yd topsoil. Ordering separately makes it easier to adjust on site if the mix looks too heavy or too dry.",
        ],
        bullets: [
          "If you’re mixing by hand, blend in thin layers instead of dumping everything in one pile.",
          "Water lightly as you mix if materials are dusty; very dry mixes can be hard to wet evenly.",
        ],
      },
      {
        heading: "Common mistakes (and what to do instead)",
        bullets: [
          "Using compost as fill: use mineral soil for fill, then topdress with compost.",
          "Over-amending clay with only compost: add structure (aeration) and address drainage planning (project dependent).",
          "Skipping a soil test for recurring problems: pH and salts can drive plant issues more than “fertility.”",
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
      {
        heading: "Trim area from linear feet (simple method)",
        paragraphs: [
          "A simple estimating shortcut is: trim area (sq ft) = total linear feet × average face width (in feet). Example: 300 ft of baseboard at 3.5 in face width is 300 × (3.5/12) ≈ 87.5 sq ft per coat.",
        ],
        bullets: [
          "Door and window casings add more area than most people expect.",
          "Glossy trim needs better prep (clean + scuff sand) and often primer for reliable adhesion.",
        ],
      },
      {
        heading: "Choosing a trim enamel (what to look for)",
        paragraphs: [
          "Trim enamel is usually chosen for hardness, blocking resistance (so doors/windows don’t stick), and washability. The best product depends on your timeline, ventilation, and how much durability you need.",
        ],
        table: {
          columns: ["Enamel type (common)", "Why people choose it", "Tradeoffs"],
          rows: [
            ["Waterborne acrylic enamel", "Fast dry, low odor, easy cleanup", "Can be less “hard” than other options"],
            ["Waterborne alkyd/urethane enamel", "Smoother finish and harder cure (project dependent)", "Longer cure time; can be pricier"],
            ["Oil-based enamel (where used)", "Hard finish and leveling", "Odor/VOC, yellowing risk, longer dry time"],
          ],
        },
      },
      {
        heading: "Sheen selection (practical)",
        bullets: [
          "Semi-gloss is common for trim because it cleans well and resists scuffs, but it highlights surface defects.",
          "Satin can be a good compromise if walls are textured or trim isn’t perfectly smooth.",
          "Higher sheen usually means more visible prep marks—spend time on sanding/filling if you want a “smooth” look.",
        ],
      },
      {
        heading: "Application tips that reduce brush marks",
        bullets: [
          "Use the right tool: high-quality brush for profiles, small roller for flat trim, and keep a wet edge.",
          "Don’t overwork: lay it off and leave it; repeated passes can cause ridges and flashing.",
          "Watch recoat windows: recoating too soon can tear semi-dried film and leave texture.",
          "Allow full cure before heavy cleaning or taping for adjacent work (project dependent).",
        ],
      },
      {
        heading: "Common failure points (why trim peels)",
        bullets: [
          "Painting over grease, soap residue, or dust without cleaning.",
          "Skipping deglossing/scuff sanding on glossy or previously enamel-coated trim.",
          "Not priming bare wood, water stains, or patched areas (adhesion and bleed-through issues).",
          "Caulking or filling and then painting before it’s cured (can cause cracking).",
        ],
      },
    ],
    related: [
      { label: "Paint calculator", href: "/en/calculators/home-improvement/paint" },
      { label: "Primer vs paint: when to prime", href: "/en/resources/primer-vs-paint-when-to-prime" },
      { label: "Baseboard waste tips", href: "/en/resources/baseboard-trim-waste-tips" },
    ],
  },
];
