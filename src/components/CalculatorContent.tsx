import Link from "next/link";

import type { Locale } from "@/i18n/routing";
import type { CalculatorId } from "@/lib/calculatorsCatalog";
import { CALCULATOR_CONTENT_EN } from "@/lib/content/calculatorsEn";
import { routes } from "@/lib/routes";

export function CalculatorContent({
  locale,
  calculatorId,
  variant,
}: {
  locale: Locale;
  calculatorId: CalculatorId;
  variant: "before" | "after";
}) {
  if (locale !== "en") {
    return null;
  }

  const content = CALCULATOR_CONTENT_EN[calculatorId];

  if (variant === "before") {
    return (
      <section className="rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          Quick guide
        </h2>
        <ul className="mt-3 grid list-disc gap-2 pl-5">
          {content.quick.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {content.deepDiveTitle && content.deepDive?.length ? (
          <div className="mt-4 grid gap-2">
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              {content.deepDiveTitle}
            </h3>
            {content.deepDive.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        ) : null}

        <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
          <Link
            href={routes.methodology(locale)}
            className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
          >
            Methodology
          </Link>
          {" · "}
          <Link
            href={routes.resources(locale)}
            className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
          >
            Resources
          </Link>
          {" · "}
          <Link
            href={routes.editorialPolicy(locale)}
            className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
          >
            Editorial policy
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="grid gap-4 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
      <div>
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {content.howToMeasureTitle}
        </h2>
        <ol className="mt-3 grid list-decimal gap-2 pl-5">
          {content.howToMeasureSteps.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>

      <div>
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {content.assumptionsTitle}
        </h2>
        <ul className="mt-3 grid list-disc gap-2 pl-5">
          {content.assumptions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {content.buyingTipsTitle}
        </h2>
        <ul className="mt-3 grid list-disc gap-2 pl-5">
          {content.buyingTips.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      {content.commonMistakesTitle && content.commonMistakes?.length ? (
        <div>
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {content.commonMistakesTitle}
          </h2>
          <ul className="mt-3 grid list-disc gap-2 pl-5">
            {content.commonMistakes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="text-xs text-zinc-500 dark:text-zinc-400">
        {content.lastUpdated}
      </div>

      <div className="text-xs text-zinc-500 dark:text-zinc-400">
        <Link
          href={routes.methodology(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          Methodology
        </Link>
        {" · "}
        <Link
          href={routes.resources(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          Resources
        </Link>
        {" · "}
        <Link
          href={routes.editorialPolicy(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          Editorial policy
        </Link>
      </div>
    </section>
  );
}
