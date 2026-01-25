import Link from "next/link";

import type { Locale } from "@/i18n/routing";
import type { GuideId } from "@/lib/guidesCatalog";
import { routes } from "@/lib/routes";

type ReferenceTable = {
  columns: string[];
  rows: string[][];
};

type GuideReferenceBlock = {
  title: string;
  intro: string;
  table?: ReferenceTable;
  bullets?: string[];
  example?: string;
  related?: Array<{ label: string; href: string }>;
  calculatorHref?: (locale: Locale) => string;
};

const REFERENCES_EN: Partial<Record<GuideId, GuideReferenceBlock>> = {
  deck: {
    title: "Decking estimate checklist (quick)",
    intro:
      "Deck projects run over budget when board direction, gaps, and stairs aren’t planned up front. Use this checklist before you buy materials.",
    bullets: [
      "Confirm board direction and whether you’re adding borders/picture framing (more waste).",
      "Use actual board width (not nominal) and decide on a gap—both change coverage.",
      "Estimate stairs and landings separately; they can add board count quickly.",
    ],
    calculatorHref: routes.deck,
    related: [
      { label: "Board gap & coverage", href: "/en/resources/deck-board-gap-and-coverage" },
      { label: "Diagonal layout waste", href: "/en/resources/deck-diagonal-waste-guide" },
    ],
  },
  fence: {
    title: "Fence estimating checklist (panels vs pickets)",
    intro:
      "Fence materials are sold differently depending on system type. Decide whether you’re building with panels or pickets before you estimate.",
    bullets: [
      "Panel fences are often sized by section length (6 ft/8 ft); pickets are counted individually.",
      "Corners, ends, and gates require extra posts and hardware that aren’t in simple run-length math.",
      "Confirm local requirements for post depth (frost line) and spacing.",
    ],
    calculatorHref: routes.fence,
    related: [
      { label: "Panel vs picket estimate", href: "/en/resources/fence-panel-vs-picket-estimate" },
      { label: "Post hole concrete guide", href: "/en/resources/fence-post-hole-concrete-guide" },
    ],
  },
  "fence-posts": {
    title: "Fence posts: spacing and corner rules",
    intro:
      "Post count is not just length ÷ spacing. Corners, ends, and gates create “extra” posts that should be planned explicitly.",
    table: {
      columns: ["Spacing (typical)", "When used", "Reminder"],
      rows: [
        ["6 ft", "Common for 6 ft panels", "Match the panel system length"],
        ["8 ft", "Common for 8 ft panels", "Longer spans need straighter runs"],
        ["Custom", "Picket fences", "Pickets still need posts at fixed spacing"],
      ],
    },
    bullets: [
      "Add posts for corners, ends, and each gate opening (often extra bracing too).",
      "Slopes can require stepping/racking, which changes layout and post planning.",
      "Depth matters: post length changes with fence height and embedment.",
    ],
    calculatorHref: routes.fence,
    related: [
      { label: "Fence post hole concrete", href: "/en/resources/fence-post-hole-concrete-guide" },
      { label: "Panel vs picket estimating", href: "/en/resources/fence-panel-vs-picket-estimate" },
    ],
  },
  paint: {
    title: "Paint planning quick reference",
    intro:
      "Most “paint math” errors come from mixing surfaces or guessing coats. Use this as a checklist before you buy.",
    table: {
      columns: ["Surface", "Typical coats", "Typical coverage (per coat)"],
      rows: [
        ["Walls (interior)", "2", "350–400 sq ft/gal"],
        ["Ceilings", "1–2", "300–400 sq ft/gal"],
        ["Primer", "0–1+", "250–400 sq ft/gal"],
        ["Trim/doors (enamel)", "1–2", "350–450 sq ft/gal"],
      ],
    },
    bullets: [
      "If the wall is patched, stained, glossy, or raw drywall, primer becomes more likely (and often saves you a finish coat).",
      "Separate walls, ceilings, and trim if products differ; don’t average them together.",
      "When in doubt, round up near thresholds and keep labeled touch-up paint.",
    ],
    calculatorHref: routes.paint,
    related: [
      { label: "Paint calculator", href: "/en/calculators/home-improvement/paint" },
      { label: "Paint coverage reference", href: "/en/resources/paint-coverage-per-gallon-guide" },
      { label: "When to use primer", href: "/en/resources/primer-vs-paint-when-to-prime" },
    ],
  },
  flooring: {
    title: "Flooring waste factor (practical)",
    intro:
      "Waste is driven by layout and cuts, not just square footage. Pick a waste range that matches your room and install pattern.",
    table: {
      columns: ["Layout", "Typical waste", "Why it changes"],
      rows: [
        ["Simple rectangles", "5–8%", "Few closets/angles"],
        ["Typical homes", "8–12%", "Hallways/closets/obstacles"],
        ["Many small rooms", "12–15%", "Short runs and more cuts"],
        ["Diagonal/patterns", "15–20%+", "Offcuts reuse poorly"],
      ],
    },
    example:
      "Example: 520 sq ft room at 10% waste ⇒ buy for ~572 sq ft, then convert to whole boxes using the product label coverage.",
    calculatorHref: routes.flooring,
    related: [
      { label: "Boxes rounding guide", href: "/en/guides/home-improvement/flooring-boxes" },
      { label: "Underlayment checklist", href: "/en/resources/flooring-underlayment-checklist" },
    ],
  },
  "flooring-boxes": {
    title: "Box rounding & thresholds",
    intro:
      "Box math is where projects run short. Always round to whole boxes and add a small buffer if the product may be discontinued.",
    bullets: [
      "Use the product’s labeled coverage per box (sq ft or sq m), not plank dimensions.",
      "Round up to a full box; partial boxes usually aren’t sold.",
      "Keep 1–2 extra boxes for future repairs if matching later matters.",
    ],
    calculatorHref: routes.flooring,
    related: [
      { label: "Flooring calculator", href: "/en/calculators/home-improvement/flooring" },
      { label: "Box rounding reference", href: "/en/resources/flooring-boxes-rounding" },
      { label: "Direction and waste", href: "/en/resources/flooring-direction-waste" },
    ],
  },
  tile: {
    title: "Tile overage (waste) starter guide",
    intro:
      "Overage is mostly cuts and layout. If you need a consistent dye lot, buying enough upfront is usually cheaper than matching later.",
    table: {
      columns: ["Install", "Typical overage", "Notes"],
      rows: [
        ["Straight floor", "10%", "Increase for many corners"],
        ["Diagonal / patterns", "15–20%", "More cuts and waste"],
        ["Walls with niches", "15–25%", "Penetrations add cuts"],
        ["Large format", "10–15%", "Fewer pieces, breakage matters"],
      ],
    },
    calculatorHref: routes.tile,
    related: [
      { label: "Tile calculator", href: "/en/calculators/home-improvement/tile" },
      { label: "Tile waste deep dive", href: "/en/guides/home-improvement/tile-waste" },
    ],
  },
  "tile-waste": {
    title: "When to increase tile waste",
    intro:
      "Use a higher waste factor when the layout forces lots of small cuts and the offcuts can’t be reused.",
    bullets: [
      "Diagonal, herringbone, and complex patterns almost always increase waste.",
      "Niches, benches, plumbing penetrations, and many corners increase waste on walls.",
      "Mosaics and trim pieces should be estimated separately from field tile.",
    ],
    calculatorHref: routes.tile,
    related: [
      { label: "Tile calculator", href: "/en/calculators/home-improvement/tile" },
      { label: "Tile box coverage checklist", href: "/en/resources/tile-box-coverage-checklist" },
    ],
  },
  drywall: {
    title: "Drywall sheet sizing & waste notes",
    intro:
      "Fewer seams can reduce finishing time, but safety and handling matter more than perfect seam math—especially on ceilings.",
    table: {
      columns: ["Sheet", "Coverage", "Typical use"],
      rows: [
        ["4×8", "32 sq ft", "Easiest handling"],
        ["4×10", "40 sq ft", "Fewer seams"],
        ["4×12", "48 sq ft", "Large areas; heavy"],
      ],
    },
    bullets: [
      "Add more waste for lots of openings, angles, or small rooms where offcuts don’t fit elsewhere.",
      "Estimate ceilings separately if you use thicker or sag-resistant board.",
      "Remember finishing materials (mud/tape/corner bead) are separate line items.",
    ],
    calculatorHref: routes.drywall,
    related: [
      { label: "Drywall calculator", href: "/en/calculators/home-improvement/drywall" },
      { label: "Mud & tape calculator", href: "/en/calculators/home-improvement/drywall-mud-tape" },
    ],
  },
  concrete: {
    title: "Concrete buffers & footings (quick)",
    intro:
      "Thickness and a small buffer are the two biggest levers. If your pour includes thickened edges or footings, estimate them separately.",
    bullets: [
      "Use average thickness across the slab; don’t measure only the lowest spot.",
      "Add 5–10% buffer for uneven subgrade, spillage, and rounding.",
      "Confirm delivery minimums; rounding up is usually cheaper than a second short load.",
    ],
    calculatorHref: routes.concrete,
    related: [
      { label: "Concrete calculator", href: "/en/calculators/home-improvement/concrete" },
      { label: "Volume per 100 sq ft", href: "/en/resources/concrete-volume-per-100-sq-ft" },
      { label: "Thickened edge volume", href: "/en/resources/concrete-thickened-edge-volume" },
    ],
  },
  roofing: {
    title: "Roofing units & accessories checklist",
    intro:
      "Roofing is priced by squares, but real orders include accessories. Use this list to avoid under-buying.",
    bullets: [
      "1 square = 100 sq ft roof surface area; bundles per square vary by product.",
      "Accessories often include starter, ridge cap, underlayment, flashing, drip edge, nails, and vents.",
      "Waste often starts around 10% for simple roofs and can be 15–25%+ for complex roofs.",
    ],
    calculatorHref: routes.roofing,
    related: [
      { label: "Roofing calculator", href: "/en/calculators/home-improvement/roofing" },
      { label: "Squares and bundles explained", href: "/en/resources/roofing-squares-and-bundles-explained" },
    ],
  },
  "roofing-shed": {
    title: "Small roof (shed) checklist",
    intro:
      "Small roofs are simple, but rounding and accessories are a bigger share of the total. Don’t estimate only shingles.",
    bullets: [
      "Confirm roof pitch and surface area (footprint is not surface area).",
      "Order accessories: underlayment, drip edge, starter, ridge cap, and nails.",
      "Round up to whole bundles; keep extras for repairs (batch matching matters).",
    ],
    calculatorHref: routes.roofing,
    related: [
      { label: "Roof pitch multiplier", href: "/en/resources/roof-pitch-area-multiplier" },
      { label: "Starter & ridge cap", href: "/en/resources/roofing-starter-and-ridge-cap" },
    ],
  },
  gravel: {
    title: "Gravel layers & compaction notes",
    intro:
      "Depth is the biggest swing factor. Decide whether your depth is loose depth or compacted depth, and estimate base vs top layers separately.",
    bullets: [
      "Take multiple depth checks and use an average thickness.",
      "Ask your supplier for the exact yd³↔tons conversion for the product you’re buying.",
      "Plan a buffer for compaction and edge irregularities to avoid a second delivery.",
    ],
    calculatorHref: routes.gravel,
    related: [
      { label: "Gravel calculator", href: "/en/calculators/home-improvement/gravel" },
      { label: "Tons conversion notes", href: "/en/guides/home-improvement/gravel-tons" },
    ],
  },
  "gravel-tons": {
    title: "Yards to tons: avoid conversion mistakes",
    intro:
      "Tons depend on density. The safest approach is to use your supplier’s conversion for the exact product you’re buying.",
    bullets: [
      "Ask whether they use short tons (US) or metric tonnes.",
      "Moisture and product type change density; generic charts are only a starting point.",
      "Round up near delivery minimums to avoid a second load fee.",
    ],
    calculatorHref: routes.gravelTons,
    related: [
      { label: "Yards-to-tons guide", href: "/en/resources/gravel-yards-to-tons-guide" },
      { label: "Tons vs tonnes", href: "/en/resources/gravel-tons-vs-tonnes" },
    ],
  },
  mulch: {
    title: "Mulch depth & safety checklist",
    intro:
      "Mulch depth is a tradeoff: too thin won’t suppress weeds; too thick can cause plant issues. Depth also settles after rain.",
    bullets: [
      "Common bed depth is 2–4 inches; paths often need more depending on use.",
      "Avoid mulch volcanoes: keep mulch off trunks and stems.",
      "If you’re topping up over old mulch, confirm the old layer isn’t matted or moldy first.",
    ],
    calculatorHref: routes.mulch,
    related: [
      { label: "Mulch calculator", href: "/en/calculators/home-improvement/mulch" },
      { label: "Mulch depth guide", href: "/en/guides/home-improvement/mulch-depth" },
    ],
  },
  "mulch-depth": {
    title: "Mulch depth quick rules",
    intro:
      "Depth targets depend on goal and plant health. Use these rules to choose a depth before you calculate volume.",
    bullets: [
      "Beds commonly use 2–4 inches; too thin won’t suppress weeds well.",
      "Keep mulch away from trunks and stems; avoid “mulch volcanoes”.",
      "Depth settles after rain/watering—plan a small buffer if appearance matters.",
    ],
    calculatorHref: routes.mulch,
    related: [
      { label: "Mulch coverage chart", href: "/en/resources/mulch-coverage-chart" },
      { label: "1/2/3 inch depth reference", href: "/en/resources/mulch-depth-1-2-3-inches" },
    ],
  },
  topsoil: {
    title: "Topsoil depth planning (quick)",
    intro:
      "Topsoil orders fail when depth is guessed. Measure multiple points and use average thickness—especially for leveling projects.",
    bullets: [
      "Use average depth; don’t base the order on a single low spot.",
      "Plan a buffer for feathering edges, settling, and grading.",
      "If the goal is soil improvement, consider a compost blend and track the mix ratio.",
    ],
    calculatorHref: routes.topsoil,
    related: [
      { label: "Topsoil calculator", href: "/en/calculators/home-improvement/topsoil" },
      { label: "Leveling guide", href: "/en/guides/home-improvement/topsoil-leveling" },
    ],
  },
  "topsoil-leveling": {
    title: "Leveling: average depth beats the lowest spot",
    intro:
      "A single low area can inflate your order if you treat it as the whole lawn. Use multiple depth checks and plan an average spread depth.",
    example:
      "Tip: mark low spots, then estimate an average depth across the full area. Add extra only for the low zones instead of over-ordering the entire lawn.",
    bullets: [
      "Use string lines or a long straightedge to visualize high/low areas.",
      "Feather edges gradually; sharp edges create bumps after settling.",
      "After spreading, water/roll and expect minor settling before the final touch-up.",
    ],
    calculatorHref: routes.topsoil,
    related: [
      { label: "Topsoil calculator", href: "/en/calculators/home-improvement/topsoil" },
      { label: "Topsoil coverage chart", href: "/en/resources/topsoil-coverage-chart" },
      { label: "Feathering guide", href: "/en/resources/topsoil-leveling-feathering-guide" },
    ],
  },
  "paint-ceiling": {
    title: "Ceiling paint: cut-in & coverage notes",
    intro:
      "Ceilings often need more cut-in work than expected. Treat cut-in, repairs, and stains as separate risk factors, not just area math.",
    bullets: [
      "Textured ceilings usually reduce coverage and can require extra paint.",
      "Stains often require stain-blocking primer before paint.",
      "Plan extra for cut-in around edges and fixtures; it increases waste and time.",
    ],
    calculatorHref: routes.paint,
    related: [
      { label: "Cut-in buffer tips", href: "/en/resources/ceiling-paint-cut-in-buffer" },
      { label: "Paint coverage per gallon", href: "/en/resources/paint-coverage-per-gallon-guide" },
    ],
  },
  "paint-trim": {
    title: "Trim paint: area and prep checklist",
    intro:
      "Trim painting is often limited by prep, not gallons. Estimate trim separately and plan for sanding/cleaning/primer when needed.",
    bullets: [
      "If existing trim is glossy, scuff sand and clean before painting (adhesion risk).",
      "Trim profiles add surface area; linear feet alone can under-estimate material.",
      "Plan for 1–2 coats and keep extra for future touch-ups.",
    ],
    calculatorHref: routes.paint,
    related: [
      { label: "Trim area from linear feet", href: "/en/resources/trim-paint-area-from-linear-feet" },
      { label: "Baseboard waste tips", href: "/en/resources/baseboard-trim-waste-tips" },
    ],
  },
  "drywall-ceiling": {
    title: "Ceiling drywall thickness (quick)",
    intro:
      "Ceilings can sag if thickness doesn’t match framing spacing. Confirm spacing and choose an appropriate board type.",
    bullets: [
      "For 16\" on center, 1/2\" is common; for 24\" on center, 5/8\" is common (verify local code/manufacturer guidance).",
      "Sag-resistant 1/2\" boards exist and can be a good compromise.",
      "Handling matters: fewer seams isn’t worth unsafe overhead lifting.",
    ],
    calculatorHref: routes.drywall,
    related: [
      { label: "Ceiling thickness guide", href: "/en/resources/drywall-ceiling-thickness-guide" },
      { label: "Sheet sizes reference", href: "/en/resources/drywall-sheet-sizes-4x8-4x10-4x12" },
    ],
  },
};

export function GuideReferenceSection({
  locale,
  guideId,
}: {
  locale: Locale;
  guideId: GuideId;
}) {
  if (locale !== "en") return null;
  const block = REFERENCES_EN[guideId];
  if (!block) return null;

  return (
    <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
      <div className="grid gap-1">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {block.title}
        </h2>
        <p>{block.intro}</p>
      </div>

      {block.table ? (
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-800">
                {block.table.columns.map((c) => (
                  <th key={c} className="py-2 pr-3 font-semibold">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.table.rows.map((row) => (
                <tr
                  key={row.join("|")}
                  className="border-b border-zinc-100 last:border-0 dark:border-zinc-900"
                >
                  {row.map((cell, index) => (
                    <td key={`${index}:${cell}`} className="py-2 pr-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : null}

      {block.example ? <p>{block.example}</p> : null}

      {block.bullets?.length ? (
        <ul className="grid list-disc gap-2 pl-5">
          {block.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      ) : null}

      <div className="flex flex-col gap-2 text-xs text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Link
            href={routes.methodology(locale)}
            className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
          >
            Methodology
          </Link>
          <span className="hidden sm:inline">·</span>
          <Link
            href={routes.resources(locale)}
            className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
          >
            Resources
          </Link>
          <span className="hidden sm:inline">·</span>
          <Link
            href={routes.editorialPolicy(locale)}
            className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
          >
            Editorial policy
          </Link>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          {block.calculatorHref ? (
            <Link
              href={block.calculatorHref(locale)}
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              Use the calculator
            </Link>
          ) : null}
          {block.related?.length ? (
            <>
              {block.calculatorHref ? (
                <span className="hidden sm:inline">·</span>
              ) : null}
              {block.related.map((r, idx) => (
                <span key={r.href} className="flex flex-row items-center gap-2">
                  <Link
                    href={r.href}
                    className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                  >
                    {r.label}
                  </Link>
                  {idx < block.related!.length - 1 ? (
                    <span className="hidden sm:inline">·</span>
                  ) : null}
                </span>
              ))}
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
