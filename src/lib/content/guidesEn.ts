import type { GuideId } from "@/lib/guidesCatalog";

export type GuideExtraContentBlock = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export const GUIDE_EXTRA_CONTENT_EN: Partial<
  Record<GuideId, GuideExtraContentBlock>
> = {
  paint: {
    title: "Paint planning notes",
    paragraphs: [
      "Paint estimates are most accurate when you separate walls, ceilings, and trim. They often use different products and can have different coverage rates and number of coats.",
      "Coverage varies with surface texture, porosity, and color change. If you’re painting fresh drywall, heavy texture, or making a dramatic color change, plan for extra material (and sometimes an extra coat).",
    ],
    bullets: [
      "If you know the product, use the label coverage; don’t rely on generic averages.",
      "Deep colors and stains often need more coats than you expect.",
      "Buy enough from the same batch/tint for color consistency.",
    ],
  },
  "paint-ceiling": {
    title: "Ceiling paint notes",
    paragraphs: [
      "Ceilings often have different conditions than walls (lighting, texture, and repairs are more visible). If you’re repainting a stained ceiling or covering patchwork, expect more material and prep work.",
      "Use a flat ceiling paint unless you specifically want a washable finish—higher sheen can highlight imperfections under raking light.",
    ],
    bullets: [
      "Plan extra for cut-in work at edges and around fixtures.",
      "Stains may require a stain-blocking primer before paint.",
      "For textured ceilings, coverage usually drops.",
    ],
  },
  "paint-trim": {
    title: "Trim and baseboard notes",
    paragraphs: [
      "Trim paint behaves differently than wall paint. You’ll usually use a tougher enamel (or cabinet/trim paint) and spend more time on prep, sanding, and clean edges.",
      "If you’re repainting glossy trim, prep is the difference between a durable finish and peeling later—clean, scuff sand, and spot prime as needed.",
    ],
    bullets: [
      "Count doors, windows, and baseboards separately if you want a tighter estimate.",
      "Semi-gloss/satin can show brush marks—use a good brush/roller.",
      "Allow extra for second coats on high-contrast color changes.",
    ],
  },
  flooring: {
    title: "Flooring measurement tips",
    paragraphs: [
      "Flooring estimates often fail on waste. Room shape, plank direction, and obstacles can push waste higher than typical ranges, especially with wide planks or diagonal installs.",
      "Always base boxes on the manufacturer’s coverage per box (not just plank dimensions), and consider underlayment, transitions, and trim as separate line items.",
    ],
    bullets: [
      "Increase waste for diagonal layouts and many small rooms/closets.",
      "Plan extra for pattern matching if you’re using decorative layouts.",
      "Keep a small number of spare planks for future repairs.",
    ],
  },
  "flooring-boxes": {
    title: "Box coverage and rounding notes",
    paragraphs: [
      "Box coverage numbers vary by product, thickness, and packaging. Two products with the same plank size can still have different coverage per box because of pieces per carton.",
      "For a realistic purchase plan, round up to whole boxes and use a waste factor that matches your layout complexity and experience level.",
    ],
    bullets: [
      "Use the exact product’s sq ft / sq m per box from the label.",
      "Round up—partial boxes aren’t usually sold.",
      "If you’re DIY, plan extra waste for learning and mistakes.",
    ],
  },
  tile: {
    title: "Tile waste and layout tips",
    paragraphs: [
      "Tile waste is driven by layout: more corners, patterns, and smaller pieces mean more cuts. For walls, niche shelves, benches, and plumbing penetrations can also increase waste.",
      "If appearance matters (most installs), you’ll want to buy enough from a consistent dye lot. That makes getting the waste factor right more important than the last decimal place of area.",
    ],
    bullets: [
      "Use a higher waste factor for diagonal/herringbone layouts and many corners.",
      "Consider a separate estimate for mosaics, borders, and trim pieces.",
      "Keep a small number of spares for future repairs (same lot if possible).",
    ],
  },
  "tile-waste": {
    title: "Improving tile waste estimates",
    paragraphs: [
      "Tile waste depends on layout and room shape more than raw square footage. Diagonal patterns, herringbone, and lots of corners increase waste because more tiles are cut.",
      "If you’re mixing field tile with mosaics, borders, or trim, estimate those separately—the box coverage and waste behavior are different.",
    ],
    bullets: [
      "Use a higher waste factor for patterns, niches, and many penetrations.",
      "Keep spare tiles for repairs (same dye lot when possible).",
      "Round up if tiles may be discontinued or hard to match later.",
    ],
  },
  drywall: {
    title: "Drywall planning notes",
    paragraphs: [
      "Drywall estimates are driven by sheet layout and seams. Larger sheets reduce seams but may be harder to handle and transport.",
      "Many corners, soffits, and odd shapes increase waste because more pieces are cut and fewer offcuts are reusable.",
    ],
    bullets: [
      "Consider 4×8 vs 4×10/4×12 sheets (handling vs fewer seams).",
      "Plan for corner bead, screws, tape, and compound as separate materials.",
      "Fire-rated areas may require specific board types and thicknesses.",
    ],
  },
  "drywall-ceiling": {
    title: "Ceiling drywall notes",
    paragraphs: [
      "Ceilings often need different board thickness and fastening schedules depending on joist spacing and local practice. That can affect both materials and labor.",
      "If the ceiling has texture removal or many patched areas, consider skim coating and primer needs in addition to sheets.",
    ],
    bullets: [
      "Confirm joist spacing and required board thickness (common: 1/2\" vs 5/8\").",
      "Plan help or lifts—full sheets are heavy overhead.",
      "Expect more finishing time where lighting reveals imperfections.",
    ],
  },
  concrete: {
    title: "Concrete ordering checklist",
    paragraphs: [
      "Ready-mix ordering is more than volume. Suppliers will ask about strength (PSI/MPa), slump, aggregate size, and whether you want fiber or admixtures. These choices can affect both cost and placement.",
      "If you’re doing a continuous pour, it’s usually safer to order a little extra than to risk coming up short. Finishing and curing conditions matter too—plan for timing, temperature, and access.",
    ],
    bullets: [
      "Confirm minimum load/delivery fees and how partial yards are billed.",
      "If you have footings/thickened edges, estimate them separately and add them in.",
      "Have a placement plan (wheelbarrow, chute access, or pump).",
    ],
  },
  deck: {
    title: "Planning notes for a deck estimate",
    paragraphs: [
      "Deck material takeoffs vary a lot by design. Before you price boards and joists, confirm your framing plan: joist spacing, cantilevers, beam placement, and any stair/railing details.",
      "If your deck surface uses a diagonal pattern or picture frame border, your cut waste usually increases. For composite decking, also check manufacturer rules for gapping, overhang, and fastener spacing.",
    ],
    bullets: [
      "Double-check joist spacing (commonly 12\"/16\" OC depending on material and span).",
      "Confirm whether boards run perpendicular to joists or at an angle (waste changes).",
      "Plan extra for stairs, blocking, and rim details if your design includes them.",
    ],
  },
  fence: {
    title: "Fence takeoff notes",
    paragraphs: [
      "Fence estimates vary by style (panel vs picket), post spacing, and terrain. Corners, ends, and gates usually require extra posts and hardware compared to straight runs.",
      "If the ground slopes, you may need stepped panels or racked sections, which can change both quantities and waste.",
    ],
    bullets: [
      "Mark corners and gates first—then count runs between them.",
      "Confirm post depth requirements (frost line) and concrete needs.",
      "Plan extra for damaged pickets/boards and future repairs.",
    ],
  },
  "fence-posts": {
    title: "Fence post notes",
    paragraphs: [
      "Post count depends on layout: corners, ends, and gates add posts beyond simple length ÷ spacing. If you’re building gates, plan for heavier posts and additional bracing.",
      "Concrete needs depend on hole diameter and depth; deeper frost lines can change your materials quickly.",
    ],
    bullets: [
      "Verify spacing for your fence style (panels vs pickets).",
      "Plan extra for corners/ends and for any bracing or gate hardware.",
      "Check local code for depth and setback requirements.",
    ],
  },
  gravel: {
    title: "Gravel estimate notes",
    paragraphs: [
      "Gravel is often purchased by weight (tons) but planned by volume (cubic yards). Density varies with material type, moisture, and compaction, so conversions differ between suppliers.",
      "Depth is the biggest swing factor—small depth changes across a large driveway or path can change tonnage a lot.",
    ],
    bullets: [
      "Ask your supplier for their yards↔tons conversion for the specific gravel.",
      "Plan extra for compaction and edge irregularities.",
      "Consider base layers separately if you’re building up a driveway.",
    ],
  },
  "gravel-tons": {
    title: "Tons conversion notes",
    paragraphs: [
      "Tons calculations are only as good as the density assumption. Different gravel mixes (crushed stone, pea gravel, base) can vary enough to change your order size.",
      "If you have delivery minimums, it’s often better to round up to a clean order size than to risk running short mid-project.",
    ],
    bullets: [
      "Use a supplier-provided density when possible.",
      "Round up near delivery minimums.",
      "Plan for compaction—loose thickness is not final thickness.",
    ],
  },
  mulch: {
    title: "Mulch planning notes",
    paragraphs: [
      "Mulch estimates depend on the depth you end up with after raking and leveling. Irregular bed edges and existing plantings can change the effective area.",
      "If you’re refreshing mulch, consider whether you’re topping off an existing layer or removing old mulch first—your depth target changes.",
    ],
    bullets: [
      "Keep mulch away from trunks and stems.",
      "Expect settling after rain/watering.",
      "Plan extra for awkward shapes and edges.",
    ],
  },
  "mulch-depth": {
    title: "Mulch depth guidance (practical)",
    paragraphs: [
      "Mulch depth is a tradeoff: too thin won’t suppress weeds well, but too thick can trap moisture and cause problems around plant crowns and tree trunks.",
      "Depth targets depend on the material (bark, wood chips) and where you’re applying it (beds vs pathways). Use your calculator result as a starting point, then adjust for your plants and climate.",
    ],
    bullets: [
      "Avoid mulch volcanoes—keep mulch away from trunks and stems.",
      "Rake and level after spreading; that can change average depth.",
      "Plan more for irregular bed edges and hard-to-reach areas.",
    ],
  },
  roofing: {
    title: "Roofing estimate notes",
    paragraphs: [
      "Roofing is typically priced in squares and bundles, but the real-world order depends on waste, ridge caps, starter strips, and underlayment. Complex roofs can require much more waste than simple gables.",
      "If you’re converting from footprint measurements, be careful: roof pitch increases surface area. Mixing footprint dimensions with slope dimensions is a common source of big errors.",
    ],
    bullets: [
      "Account for ridge caps, starter, and underlayment separately.",
      "Use a higher waste factor for valleys/hips and lots of penetrations.",
      "Confirm bundles per square for your specific shingle.",
    ],
  },
  "roofing-shed": {
    title: "Small roof (shed) notes",
    paragraphs: [
      "Shed roofs are simpler than house roofs, but waste still matters: edges, drip edge, starter, and ridge caps can be a larger share of the total on small projects.",
      "If the roof is very small, rounding up to whole bundles and matching shingles later can be more important than optimizing exact square footage.",
    ],
    bullets: [
      "Don’t forget underlayment and drip edge.",
      "Round up to whole bundles; keep extra for repairs.",
      "Confirm your pitch and ventilation details if applicable.",
    ],
  },
  topsoil: {
    title: "Topsoil ordering notes",
    paragraphs: [
      "Topsoil is usually sold by cubic yard, but what you need depends heavily on average depth and how level the existing surface is. Measure multiple spots and average them for a better plan.",
      "If you’re improving soil (not just filling), consider compost blends and test results. You may want to order topsoil and compost separately rather than guessing a single blend.",
    ],
    bullets: [
      "Measure depth in several locations to avoid over-ordering.",
      "Plan for settling/compaction after watering and rolling.",
      "If you’re grading, include extra for low spots and edge feathering.",
    ],
  },
  "topsoil-leveling": {
    title: "Leveling and topsoil notes",
    paragraphs: [
      "For leveling lawns, the biggest swing factor is average depth. A small change in depth across a large area can change yardage a lot, so it helps to take several depth checks and average them.",
      "If you’re topdressing over grass, you may want multiple light applications rather than one thick layer. That often improves coverage uniformity and reduces the risk of smothering grass.",
    ],
    bullets: [
      "Measure a few spots for depth; don’t rely on a single low point.",
      "Plan extra for settling/compaction after watering and rolling.",
      "If mixing compost and topsoil, estimate each component separately.",
    ],
  },
};
