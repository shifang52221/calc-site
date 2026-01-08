import type { CalculatorId } from "@/lib/calculatorsCatalog";

export type CalculatorContentBlock = {
  quick: string[];
  howToMeasureTitle: string;
  howToMeasureSteps: string[];
  assumptionsTitle: string;
  assumptions: string[];
  buyingTipsTitle: string;
  buyingTips: string[];
  lastUpdated: string;
};

export const CALCULATOR_CONTENT_EN: Record<CalculatorId, CalculatorContentBlock> =
  {
    concrete: {
      quick: [
        "Measure slab length × width and confirm the thickness (inches or cm).",
        "Use finished (installed) dimensions, not forms that will be trimmed.",
        "Add a buffer for over-excavation, spillage, and uneven subgrade (often 5–10%).",
      ],
      howToMeasureTitle: "How to measure your slab",
      howToMeasureSteps: [
        "Split complex shapes into rectangles and add their areas.",
        "Convert thickness to feet (in ÷ 12) or meters (cm ÷ 100) before volume math.",
        "If edges are thickened or there are footings, estimate those separately.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Thickness is average thickness across the whole pour (high/low spots change volume).",
        "Concrete is ordered by volume (cubic yards/meters); suppliers may have minimums.",
        "Ordering short can stop a pour—buffers are usually cheaper than a second delivery.",
      ],
      buyingTipsTitle: "Ordering tips",
      buyingTips: [
        "Confirm PSI, slump, fiber, and admixtures with your supplier before ordering.",
        "Plan a little extra for waste and wheelbarrow/pump line loss if applicable.",
        "Round up to delivery minimums and consider timing so you can place it continuously.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    concreteBags: {
      quick: [
        "Estimate concrete volume from area and thickness (slabs, pads, small pours).",
        "Choose a bag size (80/60/50/40 lb) to convert volume to bags and round up.",
        "Add a small buffer for spillage and uneven subgrade (often 5-10%).",
      ],
      howToMeasureTitle: "How to estimate concrete bags",
      howToMeasureSteps: [
        "Measure total area (length x width) and choose the finished thickness.",
        "Convert to cubic feet and then divide by the bag yield (cubic feet per bag).",
        "Round up to whole bags and consider mixing losses and waste.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Bag yield depends on product and mix water; use the bag label if possible.",
        "Thickness is average thickness across the pour—high/low spots change volume.",
        "For larger jobs, ready-mix may be cheaper and more consistent than bagged mix.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Check the bag label for yield and recommended water—brands differ.",
        "Buy extra if you need continuous placement (you don't want to run short mid-pour).",
        "Plan mixing time, help, and tools—bagged concrete is labor-intensive.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    studs: {
      quick: [
        "Start with total wall length and choose a stud spacing (16\" or 24\" on center are common).",
        "Add openings (doors/windows) because headers and king/jack studs add extra lumber.",
        "Add a waste factor for bad studs, cut-offs, and layout changes (often 5-10%).",
      ],
      howToMeasureTitle: "How to estimate studs",
      howToMeasureSteps: [
        "Measure the total length of walls you plan to frame (sum each wall length).",
        "Choose stud spacing based on your project and local code/practice.",
        "Add extra studs for openings and corners, then round up for waste.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "This is a planning estimate—real framing varies by corners, T-walls, blocking, and layout.",
        "Openings often need extra studs (king/jack), plus headers and cripples not counted here.",
        "Always follow local code and engineering requirements for structural walls.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Use actual lumber dimensions and grade recommended for your project.",
        "Buy a few extra studs to cover warping and defects.",
        "If you're pricing plates, confirm whether you're buying by linear foot or by full boards.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    baseboardTrim: {
      quick: [
        "Start with total wall perimeter and subtract door openings.",
        "Choose a standard piece length (often 8 ft or 12 ft) to estimate how many pieces to buy.",
        "Add waste for miter cuts, corners, and defects (often 5-10%).",
      ],
      howToMeasureTitle: "How to estimate baseboard and trim",
      howToMeasureSteps: [
        "Measure room perimeter (sum of all wall lengths) and subtract each door width.",
        "Decide if you're trimming closets and alcoves—include those lengths if needed.",
        "Convert total length into pieces using your chosen stock length and round up.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Actual coverage depends on how you place joints and whether you scarf-joint long runs.",
        "Old houses may have out-of-square corners and require extra waste for fitting.",
        "Some trims are sold per piece; others per linear foot—use the pricing you have.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Buy extra for matching color/grain and for future repairs.",
        "If you plan to paint, primed MDF is common; for stain, choose matching species.",
        "Check return policy for special-order profiles before buying extra.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    deck: {
      quick: [
        "Confirm board width (actual, not nominal) and the gap you plan to leave.",
        "Measure deck length and width using finished dimensions.",
        "Add waste for cuts and odd layouts (often 5–10%).",
      ],
      howToMeasureTitle: "How to measure your deck",
      howToMeasureSteps: [
        "Use the finished frame size (length × width).",
        "If the deck is L-shaped, measure each rectangle and add them.",
        "Include any steps or landings you plan to deck over.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "This estimates deck boards, not joists, beams, posts, or fasteners.",
        "Actual board coverage depends on board width and your gap spacing.",
        "Stairs, picture framing, and patterns can increase waste significantly.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Confirm actual board width and recommended spacing for your material.",
        "Round up if you have stairs or many cuts, and keep a few spare boards.",
        "If matching color later matters, buy extra from the same batch when possible.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    drywall: {
      quick: [
        "Measure total wall/ceiling area, then pick sheet size (4×8, 4×10, 4×12).",
        "Add waste for cuts, outlets, and breakage (often 10–15%).",
        "Round up to whole sheets—partial sheets are not practical.",
      ],
      howToMeasureTitle: "How to measure for drywall",
      howToMeasureSteps: [
        "For walls: sum (wall width × height) for each wall.",
        "For ceilings: area = length × width; add any soffits separately.",
        "Convert to total square feet/meters and divide by sheet coverage.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "This estimates sheet count, not studs, mud, tape, screws, or corner bead.",
        "Ceilings and tall walls often need thicker board (confirm local code).",
        "Openings can be ignored for a rough estimate, but waste usually covers the difference.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Confirm thickness (1/2\" vs 5/8\") and moisture resistance for bathrooms.",
        "Plan waste based on layout complexity and the number of openings.",
        "Consider delivery and where sheets can be staged safely (they’re heavy).",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    drywallMudTape: {
      quick: [
        "Drywall finishing materials depend on seam length and the number of coats.",
        "Estimate seam length from area and sheet size, then convert to tape rolls.",
        "Compound usage varies by technique and product—use this as a planning estimate and confirm bag/bucket yields.",
      ],
      howToMeasureTitle: "How to estimate mud and tape",
      howToMeasureSteps: [
        "Start with total drywall area you plan to finish (sq ft or m²).",
        "Choose a sheet size; larger sheets usually mean fewer seams.",
        "Set a waste factor and adjust coat/thickness assumptions if you want a tighter estimate.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "This uses average seam density based on sheet size; real layouts and corners can change seam length.",
        "Compound volume depends on joint width, thickness, and feathering (and your skill level).",
        "Always follow local code and product recommendations for fire-rated assemblies.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Buy extra tape for corners and repairs, especially for larger projects.",
        "If you're new, mix smaller batches to reduce waste and keep workability consistent.",
        "Check the bucket/bag label for yield and recommended coverage per coat.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    drywallTexture: {
      quick: [
        "Measure total wall/ceiling area you want to texture.",
        "Choose coats/passes (some textures take multiple applications).",
        "Use the product label for coverage per bag and add waste (often 5-15%).",
      ],
      howToMeasureTitle: "How to measure for drywall texture",
      howToMeasureSteps: [
        "Measure total area (sq ft or m²) to be textured.",
        "Decide how many coats/passes you expect for your chosen texture.",
        "Divide (area × coats) by coverage per bag, then round up and add a buffer.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Coverage varies by texture type (knockdown, orange peel, skip trowel) and application method.",
        "Spraying and sanding can increase waste—beginners often need more material.",
        "Treat this as a planning estimate and confirm with the exact product label.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Buy enough from the same product line so color/texture matches if you patch later.",
        "Round up—running short mid-room can make blending difficult.",
        "If you’re new, plan extra waste for practice and cleanup.",
      ],
      lastUpdated: "Last updated: Jan 2026",
    },
    fence: {
      quick: [
        "Measure total fence length and confirm panel width and post spacing.",
        "Corners, ends, and gates usually require extra posts and hardware.",
        "Add waste/buffer for layout changes, cut panels, and pickets/boards if applicable (often 5-10%).",
      ],
      howToMeasureTitle: "How to measure your fence line",
      howToMeasureSteps: [
        "Measure the total run length along the fence line (not the diagonal).",
        "Mark corners and gate openings; treat each straight run separately.",
        "Confirm local requirements for post spacing and depth (frost line).",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "This is a straight-run estimate; gates/corners can increase post count.",
        "Panel systems vs picket systems differ—confirm how your product is sold.",
        "Slopes may require stepping or racking, which can change counts.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Confirm whether panels are 6 ft or 8 ft and match your post spacing.",
        "Plan for gate hardware and additional posts for corners/ends.",
        "Order a little extra for damaged pieces and future repairs.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    flooring: {
      quick: [
        "Measure each room (length × width) and add them for total area.",
        "Choose a waste factor based on layout (often 5–15%).",
        "Convert area to boxes using the product’s coverage per box.",
      ],
      howToMeasureTitle: "How to measure flooring area",
      howToMeasureSteps: [
        "Split L-shapes into rectangles, measure each, then add them.",
        "Include closets and small areas—cuts there can increase waste.",
        "Use the manufacturer’s per-box coverage (not just plank dimensions).",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Diagonal installs and patterns increase waste.",
        "Stairs require separate estimating (area/risers/treads).",
        "If you’re matching later, batch differences can matter—buy extra up front.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "If your layout is complex, use a higher waste factor.",
        "Round up to whole boxes and keep 1–2 boxes for future repairs.",
        "Confirm underlayment, transitions, and trims—these are separate materials.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    gravel: {
      quick: [
        "Measure length × width (or total area) in feet or meters.",
        "Use a realistic depth (many projects are 2–6 inches).",
        "Add a small buffer for compaction and uneven base.",
      ],
      howToMeasureTitle: "How to measure your area",
      howToMeasureSteps: [
        "For rectangles: area = length × width. For circles: area = π × r².",
        "Break irregular shapes into rectangles, add them, and round up slightly.",
        "Convert depth to feet (in ÷ 12) or meters (cm ÷ 100).",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Depth is average depth after grading (low spots can increase volume).",
        "Material type affects density; supplier conversions (yards ↔ tons) vary.",
        "Compaction can reduce loose volume—buffers help avoid a second delivery.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Confirm whether your supplier sells by yards, tons, or bags.",
        "Ask for a recommended depth for your application (driveway, path, base).",
        "Round up to delivery minimums and keep a small amount for touch-ups.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    gravelTons: {
      quick: [
        "Suppliers often sell gravel by tons, but homeowners estimate by area and volume (cubic yards).",
        "The conversion depends on density, which varies by gravel type and moisture.",
        "Use a density preset or ask your supplier for their yards-to-tons conversion.",
      ],
      howToMeasureTitle: "How to convert yards to tons",
      howToMeasureSteps: [
        "Start with volume in cubic yards (or cubic meters).",
        "Pick a density preset (pea gravel, crushed stone, base rock) or enter a custom density.",
        "Convert to tons and round up to delivery minimums.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Density varies by product, moisture, and compaction—supplier conversions may differ.",
        "Some suppliers use short tons (US), others use metric tonnes.",
        "Rounding up usually prevents shortages and extra delivery fees.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Ask your supplier whether they sell by tons, yards, or both—and what conversion they use.",
        "Confirm whether you're buying the same product (pea gravel vs crushed stone vs base rock).",
        "Include a small buffer for compaction and uneven base.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    mulch: {
      quick: [
        "Measure your beds’ area and pick a target depth (often 2–4 inches).",
        "Convert depth to feet/meters before volume math.",
        "Add a small buffer for settling and uneven beds.",
      ],
      howToMeasureTitle: "How to measure mulch coverage",
      howToMeasureSteps: [
        "Measure each bed (length × width), add them for total area.",
        "Exclude hardscape and established groundcover you won’t cover.",
        "Choose a depth based on your goal (appearance vs weed suppression).",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Depth is average depth after raking; mulch can settle after watering.",
        "Different mulch types have different coverage per yard/bag.",
        "Sloped beds often need a bit more to look evenly covered.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Confirm bag size or bulk yard coverage with your supplier.",
        "Don’t pile mulch against tree trunks (avoid “mulch volcano”).",
        "Order a little extra for touch-ups and areas you may expand later.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    mulchBags: {
      quick: [
        "Most bagged mulch is sold by cubic feet (like 2 cu ft or 3 cu ft per bag).",
        "Estimate total mulch volume from area and depth, then convert to bags and round up.",
        "Add a small buffer for settling and uneven beds (often 5-10%).",
      ],
      howToMeasureTitle: "How to estimate mulch bags",
      howToMeasureSteps: [
        "Measure total bed area (length x width) and pick a target depth (often 2-3 inches).",
        "Convert your volume to cubic feet and divide by the bag size (cu ft per bag).",
        "Round up to whole bags and consider buying a little extra for touch-ups.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Bag volume is based on the label, but actual coverage can vary by product and settling.",
        "Depth is an average depth after spreading and raking.",
        "Mulch compacts after watering; a buffer helps prevent running short.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Check bag size (cu ft or liters) and coverage claims on the label.",
        "If you're matching color, buy enough from the same batch when possible.",
        "Keep a few extra bags for seasonal top-ups and areas you expand later.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    sand: {
      quick: [
        "Measure total area and pick an average depth for the sand layer.",
        "Use a density preset (dry/packed/wet) to estimate weight in tons.",
        "Add a buffer for compaction, settling, and uneven base (often 5-10%).",
      ],
      howToMeasureTitle: "How to measure your area",
      howToMeasureSteps: [
        "For rectangles: area = length x width. For circles: area = pi x r^2.",
        "Break irregular shapes into rectangles and add them together.",
        "Convert depth to feet (in / 12) or meters (cm / 100) before volume math.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Sand density varies by moisture and how tightly it is packed.",
        "Loose sand can compact after watering or traffic, reducing installed depth.",
        "Suppliers may sell by cubic yards or by tons; conversions depend on density.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Confirm sand type (play sand, masonry sand, fill sand) with your supplier.",
        "Round up to delivery minimums and keep a little extra for touch-ups.",
        "If you are leveling, plan for low spots and uneven existing grade.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    paverBase: {
      quick: [
        "A paver base usually has two layers: compacted base stone + a thin bedding sand layer.",
        "Use finished (installed) area and average depths for each layer.",
        "Add a buffer for compaction, uneven subgrade, and edge cuts (often 5-10%).",
      ],
      howToMeasureTitle: "How to measure for paver base",
      howToMeasureSteps: [
        "Measure the total patio/walkway area (length x width) and include any curves by splitting into rectangles.",
        "Choose base thickness based on soil and use (walkway vs patio vs driveway).",
        "Bedding sand is typically a thin layer—confirm your paver system recommendations.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Base stone density varies by product and moisture; supplier conversions (yards ↔ tons) vary.",
        "Compaction reduces loose material thickness; plan for compaction and regrading.",
        "Edging and slope/drainage can change the effective area and material needs.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Confirm the correct base material (often 3/4\" minus) and bedding sand type with your local supplier.",
        "Round up to delivery minimums and plan access for a dump/pallet drop.",
        "If you have low spots, plan extra base stone to build grade before sand.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    paint: {
      quick: [
        "Start with paintable wall area (square feet/meters), or measure walls and subtract big openings.",
        "Choose a realistic coverage rate and number of coats (texture and color changes matter).",
        "Add a small buffer for touch-ups, roller/brush waste, and future repairs.",
      ],
      howToMeasureTitle: "How to measure for paint",
      howToMeasureSteps: [
        "Find wall area (per wall width × height) and add them up.",
        "Optionally subtract large windows/doors if you want a tighter estimate.",
        "Choose coats and a coverage rate based on your paint and wall texture.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Textured walls and color changes can reduce coverage.",
        "Primer can reduce coats, but it doesn’t replace paint volume.",
        "Ceilings and trim often need different paint and coverage assumptions.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Buy enough from the same batch to avoid color variation.",
        "Round up if you’ll do multiple coats or have a lot of cutting-in.",
        "Keep a small amount labeled for future touch-ups.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    wallpaperRolls: {
      quick: [
        "Start with total wall area you plan to cover (square feet or square meters).",
        "Subtract large openings if you want a tighter estimate, then add a waste factor.",
        "Use a roll size preset or enter your roll width and length to estimate coverage.",
      ],
      howToMeasureTitle: "How to measure for wallpaper",
      howToMeasureSteps: [
        "Measure each wall width x height and add them for total wall area.",
        "Optionally subtract doors and big windows (many estimates leave them in and rely on waste).",
        "Increase waste for patterns, lots of corners, or many small wall sections.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "This estimates coverage by area; real installs may need extra for pattern matching and trimming.",
        "Roll sizes vary by brand and region; confirm the label for exact width and length.",
        "Always round up to whole rolls and keep extra for repairs if you may need to match dye lots later.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Buy all rolls at once when possible so the dye lot matches.",
        "If you’re using patterned wallpaper, plan a higher waste factor for matching.",
        "Check whether your product is sold as single vs double rolls and use the correct coverage.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    roofing: {
      quick: [
        "Start with roof area, then add waste for valleys/hips and cut shingles.",
        "Convert to squares (100 sq ft) and then to bundles.",
        "Round up—running short mid-roof is expensive.",
      ],
      howToMeasureTitle: "How to measure roof area",
      howToMeasureSteps: [
        "Measure each roof plane (length × slope length), then add them.",
        "Include dormers and overhangs if they will be shingled.",
        "Use a higher waste factor for complex roofs (valleys, hips, dormers).",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Bundles per square vary by shingle type—confirm with the product label.",
        "Starter, ridge caps, and underlayment are separate material needs.",
        "Roof pitch affects true surface area vs footprint area.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Confirm bundles per square and ridge cap coverage for your shingle.",
        "Order extra for cuts and future repairs (same color/batch if possible).",
        "Consider delivery placement and weather windows before ordering.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    tile: {
      quick: [
        "Measure tiled area, then add overage (waste factor) — often 10%+.",
        "Convert to boxes using the product’s coverage per box.",
        "Round up to whole boxes and keep a few tiles for repairs.",
      ],
      howToMeasureTitle: "How to measure for tile",
      howToMeasureSteps: [
        "Floor: area = length × width. Walls: sum each wall area you’ll tile.",
        "Subtract large openings only if you need a tighter estimate.",
        "Increase waste for diagonal layouts, patterns, and small-format tiles.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Coverage per box varies by tile size and packaging—use label coverage.",
        "Patterns and many cuts can push waste beyond 10–15%.",
        "Mosaics and feature borders often require separate estimating.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Buy extra from the same lot/dye batch for color consistency.",
        "Round up your waste factor for complex layouts or many corners.",
        "Keep a few spare tiles after installation for future repairs.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    deckMud: {
      quick: [
        "Measure your deck mud area (square feet) and average thickness (inches).",
        "Add waste/overage for uneven subfloor, mixing loss, and cleanup (often 5–15%).",
        "Use a common dry pack mortar ratio (often 5:1 sand to cement) and round up.",
      ],
      howToMeasureTitle: "How to measure for deck mud",
      howToMeasureSteps: [
        "Measure the footprint you’ll fill (e.g., shower pan) and total the area.",
        "Estimate average thickness: thin edges and thicker slopes change volume.",
        "Convert area × thickness to volume, then split volume by your sand:cement ratio.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Deck mud (dry pack mortar) is mixed by volume ratios; products and techniques vary.",
        "Cement bag volume varies by brand; treat bag counts as planning estimates.",
        "If your bed is sloped (typical for showers), thickness is not uniform—use an average.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Buy extra sand so you can keep a consistent mix while you work.",
        "Round up cement bags—running short mid-bed can ruin the mix consistency.",
        "Confirm whether you’re using masonry sand vs play sand per local practice.",
      ],
      lastUpdated: "Last updated: Jan 2026",
    },
    asphaltDriveway: {
      quick: [
        "Measure total driveway area and choose an installed thickness.",
        "Asphalt is commonly ordered by weight (tons). Density varies by mix and compaction.",
        "Add a buffer for edge irregularities, tie-ins, and thickness variation (often 5-10%).",
      ],
      howToMeasureTitle: "How to estimate asphalt quantity",
      howToMeasureSteps: [
        "Measure driveway area (length x width). Split curves into rectangles and add them.",
        "Convert thickness to feet (in / 12) or meters (cm / 100) before volume math.",
        "Convert volume to tons using a realistic density preset (confirm with your contractor).",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Installed thickness can vary after compaction; base prep affects final thickness.",
        "Different asphalt mixes can have different densities; ask your supplier for a conversion.",
        "Some jobs include multiple lifts (base + surface) with different thicknesses.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Confirm your contractor’s recommended thickness and whether it’s compacted thickness.",
        "Plan delivery timing—hot mix has a limited working time.",
        "Consider minimum loads and access for a dump truck to reduce handling costs.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    boardFeet: {
      quick: [
        "Board feet is a lumber volume unit used for pricing and ordering.",
        "Use actual thickness/width (not nominal) for the most accurate estimate.",
        "Add waste for knots, defects, and cuts (often 5-10%).",
      ],
      howToMeasureTitle: "How board feet works",
      howToMeasureSteps: [
        "Board feet = (thickness in inches × width in inches × length in feet) ÷ 12.",
        "Multiply by quantity, then add a waste factor if needed.",
        "If the seller prices per board foot, multiply board feet by that price.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Nominal lumber sizes (e.g., 2×6) are not the same as actual dimensions.",
        "Rough-sawn lumber may be thicker and varies by mill.",
        "Some products are priced per linear foot or per piece instead of board feet.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Confirm the actual dimensions and species/grade with the supplier.",
        "For finish work, consider adding extra for grain matching and defects.",
        "Round up to whole boards and keep a little extra for future repairs.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    soilMix: {
      quick: [
        "Start by estimating the total soil volume (area x depth) and add a small buffer.",
        "Pick a simple mix ratio (e.g., 50/50 compost + topsoil) and adjust for your plants and drainage.",
        "If you're buying in bulk, confirm whether your supplier sells by cubic yards or cubic meters.",
      ],
      howToMeasureTitle: "How to estimate total soil volume",
      howToMeasureSteps: [
        "Measure total area (length x width) and choose an average depth for the bed.",
        "Convert depth to feet (in / 12) or meters (cm / 100) before volume math.",
        "Add waste to cover settling, uneven beds, and rounding to delivery minimums.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Compost and topsoil properties vary; a 50/50 mix is a starting point, not a universal rule.",
        "Raised beds may settle after watering—buffers help avoid running short.",
        "Some mixes need amendments (perlite, peat, lime) beyond these three components.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Ask whether the topsoil is screened and what the compost source is.",
        "If drainage is an issue, consider adding sand or other drainage-friendly amendments.",
        "Order a little extra for topping off after the first few waterings.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    topsoilBags: {
      quick: [
        "Bagged topsoil is typically sold by cubic feet (or liters) per bag.",
        "Estimate total volume from area and depth, then convert to bags and round up.",
        "Add a small buffer for settling and uneven ground (often 5-10%).",
      ],
      howToMeasureTitle: "How to estimate topsoil bags",
      howToMeasureSteps: [
        "Measure total area (length x width) and choose an average depth.",
        "Convert volume to cubic feet and divide by your bag size (cu ft per bag).",
        "Round up to whole bags and consider delivery/handling time for large projects.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Bag volume is based on the label, but settling and moisture can affect coverage.",
        "Depth is an average depth after spreading and leveling.",
        "For large volumes, bulk delivery can be cheaper than bagged topsoil.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Check whether you need screened topsoil and whether compost is a better fit for planting.",
        "Buy a little extra for top-offs after watering and settling.",
        "If you need consistent texture, buy the same brand/batch when possible.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    tileGrout: {
      quick: [
        "Grout use depends on tile size, joint width, and joint depth.",
        "Smaller tiles and wider joints use more grout per square foot.",
        "Always round up to whole bags and keep a little extra for repairs.",
      ],
      howToMeasureTitle: "How to estimate grout",
      howToMeasureSteps: [
        "Measure total tiled area and confirm tile length and width.",
        "Pick joint width and an average joint depth (often close to tile thickness).",
        "Convert the result to bags and add waste for spillage and cleanup.",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Grout density and bag yields vary by product; use label info for best accuracy.",
        "Irregular tile edges and textured tiles can increase grout usage.",
        "Large-format tile with narrow joints typically uses less grout per area.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Choose sanded vs unsanded based on joint width and product recommendations.",
        "Mix small batches if you're new to grouting to reduce waste.",
        "If color matching matters, buy enough from the same lot when possible.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
    topsoil: {
      quick: [
        "Measure total area and choose an average depth for the project.",
        "Convert depth to feet or meters before calculating volume.",
        "Add a small buffer for settling, grading, and uneven areas.",
      ],
      howToMeasureTitle: "How to measure your area",
      howToMeasureSteps: [
        "For rectangles: area = length × width. For circles: area = π × r².",
        "For lawns, measure sections and add them for total area.",
        "Convert depth to feet (in ÷ 12) or meters (cm ÷ 100).",
      ],
      assumptionsTitle: "Assumptions to double-check",
      assumptions: [
        "Use average depth—topdressing and leveling often vary across the area.",
        "If you’re filling low spots, include extra volume for those areas.",
        "Bulk topsoil may settle; a buffer prevents running short.",
      ],
      buyingTipsTitle: "Buying tips",
      buyingTips: [
        "Confirm whether you need screened topsoil for a smoother finish.",
        "Round up to delivery minimums and keep a small amount for touch-ups.",
        "If you add compost, adjust the mix ratio and volume accordingly.",
      ],
      lastUpdated: "Last updated: Dec 2025",
    },
  };
