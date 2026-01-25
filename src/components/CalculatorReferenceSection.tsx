import Link from "next/link";

import type { Locale } from "@/i18n/routing";
import type { CalculatorId } from "@/lib/calculatorsCatalog";
import { routes } from "@/lib/routes";

type ReferenceTable = {
  columns: string[];
  rows: string[][];
};

type ReferenceBlock = {
  title: string;
  intro: string;
  table?: ReferenceTable;
  bullets?: string[];
  example?: string;
  related?: Array<{ label: string; href: string }>;
};

const REFERENCES_EN: Partial<Record<CalculatorId, ReferenceBlock>> = {
  paint: {
    title: "Paint coverage quick reference (typical)",
    intro:
      "Use product labels when you have them. This table is a planning reference for common wall paint and primer coverage.",
    table: {
      columns: ["Product", "Typical coverage (per coat)", "Notes"],
      rows: [
        ["Wall paint", "350–400 sq ft per gallon", "Texture/porosity lowers coverage"],
        ["Primer", "250–400 sq ft per gallon", "Stains and patches can require extra"],
        ["Ceiling paint", "300–400 sq ft per gallon", "Textured ceilings often lower"],
        ["Trim enamel", "350–450 sq ft per gallon", "Depends heavily on profile and prep"],
      ],
    },
    bullets: [
      "Big color changes, bare drywall, and heavy texture often increase coats.",
      "Treat walls, ceilings, and trim as separate line items if products differ.",
      "Round up near thresholds; running short mid-job is expensive.",
    ],
    related: [{ label: "Paint guide", href: "/en/guides/home-improvement/paint" }],
  },
  flooring: {
    title: "Flooring waste factor guide (practical)",
    intro:
      "Waste depends on layout complexity and how many cuts you make. Use these ranges as a starting point, then adjust for your room.",
    table: {
      columns: ["Layout", "Typical waste", "When to use it"],
      rows: [
        ["Simple rectangles", "5–8%", "Few closets/angles, long straight runs"],
        ["Typical homes", "8–12%", "Hallways, closets, some obstacles"],
        ["Many angles / small rooms", "12–15%", "Lots of cuts, short runs, learning curve"],
        ["Diagonal / patterns", "15–20%", "Diagonal installs, complex patterns"],
      ],
    },
    example:
      "Example: 500 sq ft room with 10% waste ⇒ buy for ~550 sq ft, then convert to whole boxes using the product’s coverage per box.",
    related: [
      { label: "Flooring boxes guide", href: "/en/guides/home-improvement/flooring-boxes" },
    ],
  },
  tile: {
    title: "Tile waste guide (walls and floors)",
    intro:
      "Tile waste is driven by cuts and layout, not just area. These are common starting ranges for ordering.",
    table: {
      columns: ["Install", "Typical waste", "Notes"],
      rows: [
        ["Straight floor layout", "10%", "More corners ⇒ increase"],
        ["Diagonal / herringbone", "15–20%", "Complex patterns waste more"],
        ["Walls with niches/penetrations", "15–25%", "Plumbing and niches increase cuts"],
        ["Large format tile", "10–15%", "Fewer pieces, but breakage risk is higher"],
      ],
    },
    bullets: [
      "If appearance matters, buy enough from the same dye lot; don’t plan to “top up” later.",
      "Estimate trim pieces and mosaics separately—box coverage and waste behavior differ.",
    ],
    related: [{ label: "Tile waste guide", href: "/en/guides/home-improvement/tile-waste" }],
  },
  drywall: {
    title: "Drywall sheet sizing cheat sheet",
    intro:
      "Sheet size changes seam count and handling difficulty. Fewer seams can save finishing time, but only if you can safely lift and install the sheets.",
    table: {
      columns: ["Sheet", "Coverage", "Typical use"],
      rows: [
        ["4×8", "32 sq ft", "Most common; easier handling"],
        ["4×10", "40 sq ft", "Fewer seams; needs more clearance"],
        ["4×12", "48 sq ft", "Large areas; heavy and awkward overhead"],
      ],
    },
    bullets: [
      "Ceilings often benefit from fewer seams, but use a lift or help if you go larger.",
      "Complex rooms usually need more waste because offcuts are harder to reuse.",
    ],
  },
  concrete: {
    title: "Concrete slab ordering notes (quick)",
    intro:
      "Concrete volume is area × thickness. Small thickness changes scale fast on big slabs, so verify thickness first.",
    table: {
      columns: ["Thickness", "Rule of thumb", "Reminder"],
      rows: [
        ["1 inch", "≈ 0.083 cu ft per sq ft", "Use average thickness across the slab"],
        ["4 inches", "≈ 0.333 cu ft per sq ft", "Common for pads/driveways"],
        ["6 inches", "≈ 0.500 cu ft per sq ft", "Heavier duty slabs"],
      ],
    },
    bullets: [
      "Add a buffer (often 5–10%) for uneven subgrade and rounding.",
      "Estimate thickened edges and footings separately when applicable.",
    ],
    related: [{ label: "Concrete guide", href: "/en/guides/home-improvement/concrete" }],
  },
  roofing: {
    title: "Roofing squares and bundles (quick)",
    intro:
      "A roofing square is 100 sq ft of roof surface area. Bundles per square vary by shingle type and brand—always confirm on the wrapper.",
    table: {
      columns: ["Unit", "Meaning", "Common rule"],
      rows: [
        ["1 square", "100 sq ft", "Used for pricing and ordering"],
        ["1 bundle", "Varies", "Often 3 bundles = 1 square (not always)"],
        ["Waste", "Extra material", "Simple roofs ~10%; complex roofs 15–20%"],
      ],
    },
    bullets: [
      "Accessories (starter, ridge cap, underlayment, flashing) can be a large share of the bill.",
      "Footprint ≠ roof surface area; pitch and overhangs increase area.",
    ],
    related: [{ label: "Roofing guide", href: "/en/guides/home-improvement/roofing" }],
  },
  gravel: {
    title: "Gravel depth planning (driveways and base)",
    intro:
      "Gravel is ordered by volume, but real results depend on compaction. Plan depth as “loose depth” vs “final compacted depth”.",
    table: {
      columns: ["Use", "Typical depth", "Notes"],
      rows: [
        ["Walkway base", "2–4 in", "Often compacted"],
        ["Driveway base layer", "4–8 in", "Heavier loads ⇒ thicker base"],
        ["Top layer / topping", "2–3 in", "Separate from base layer math"],
      ],
    },
    bullets: [
      "Ask your supplier for density and yd³↔ton conversion for the exact product.",
      "Edge irregularities and compaction usually require a buffer.",
    ],
    related: [{ label: "Gravel tons guide", href: "/en/guides/home-improvement/gravel-tons" }],
  },
  mulch: {
    title: "Mulch depth quick guide",
    intro:
      "Mulch depth is a tradeoff: too thin won’t suppress weeds; too thick can trap moisture. Use these as a practical starting point.",
    table: {
      columns: ["Area type", "Typical depth", "Notes"],
      rows: [
        ["Planting beds", "2–4 in", "Keep away from stems/trunks"],
        ["Paths/play areas", "3–6 in", "Depends on material and use"],
        ["Top-up over old mulch", "1–2 in", "Only if old layer is clean/not matted"],
      ],
    },
    bullets: [
      "Mulch settles after rain/watering—final depth is lower than spread depth.",
      "Avoid mulch volcanoes: keep mulch off tree trunks.",
    ],
    related: [{ label: "Mulch depth guide", href: "/en/guides/home-improvement/mulch-depth" }],
  },
  topsoil: {
    title: "Topsoil depth planning (quick)",
    intro:
      "Topsoil ordering is sensitive to depth. Measure multiple spots and use an average thickness, especially if you’re leveling.",
    table: {
      columns: ["Project", "Typical depth", "Notes"],
      rows: [
        ["New lawn/topdressing", "1–2 in", "Often followed by seeding/sod"],
        ["Leveling low spots", "Varies", "Average multiple depth checks"],
        ["Garden beds", "4–8+ in", "Consider compost blend separately"],
      ],
    },
    example:
      "Example: 1,000 sq ft at 2 inches is ~6.17 cu yd (before waste and settling). Round up for leveling and compaction.",
    related: [{ label: "Topsoil leveling guide", href: "/en/guides/home-improvement/topsoil-leveling" }],
  },
  wallpaperRolls: {
    title: "Wallpaper roll planning notes (quick)",
    intro:
      "Roll coverage depends on repeat, match type, and trimming. The math starts with wall area, but ordering is driven by pattern repeat and usable drop length.",
    bullets: [
      "Measure wall width × height for each wall; subtract openings only if you want a tighter estimate.",
      "If the pattern has a large repeat or requires matching, plan extra rolls.",
      "Buy all rolls at once when possible to avoid batch/color differences.",
    ],
    related: [
      { label: "Pattern repeat and waste", href: "/en/resources/wallpaper-pattern-repeat-waste" },
      { label: "Rolls by wall height", href: "/en/resources/wallpaper-rolls-by-wall-height" },
    ],
  },
};

export function CalculatorReferenceSection({
  locale,
  calculatorId,
}: {
  locale: Locale;
  calculatorId: CalculatorId;
}) {
  if (locale !== "en") return null;
  const block = REFERENCES_EN[calculatorId];
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

        {block.related?.length ? (
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            {block.related.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
              >
                {r.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
