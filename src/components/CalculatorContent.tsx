import type { Locale } from "@/i18n/routing";
import type { CalculatorId } from "@/lib/calculatorsCatalog";
import { CALCULATOR_CONTENT_EN } from "@/lib/content/calculatorsEn";

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

      <div className="text-xs text-zinc-500 dark:text-zinc-400">
        {content.lastUpdated}
      </div>
    </section>
  );
}

