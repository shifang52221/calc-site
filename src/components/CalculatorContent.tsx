import Link from "next/link";

import type { Locale } from "@/i18n/routing";
import type { CalculatorId } from "@/lib/calculatorsCatalog";
import { CALCULATOR_CONTENT_EN } from "@/lib/content/calculatorsEn";
import { CALCULATOR_CONTENT_ES } from "@/lib/content/calculatorsEs";
import { CALCULATOR_CONTENT_ZH_TW } from "@/lib/content/calculatorsZhTW";
import { routes } from "@/lib/routes";

const CALCULATOR_CONTENT_BY_LOCALE: Record<
  Locale,
  Partial<Record<CalculatorId, typeof CALCULATOR_CONTENT_EN[CalculatorId]>>
> = {
  en: CALCULATOR_CONTENT_EN,
  es: CALCULATOR_CONTENT_ES,
  "zh-TW": CALCULATOR_CONTENT_ZH_TW,
};

const UI_LABELS: Record<
  Locale,
  {
    quickGuideTitle: string;
    showFullGuide: (moreItemsCount: number) => string;
    hideDetails: string;
    methodology: string;
    resources: string;
    editorialPolicy: string;
  }
> = {
  en: {
    quickGuideTitle: "Quick guide",
    showFullGuide: (moreItemsCount) =>
      `Show full guide${moreItemsCount ? ` (${moreItemsCount} more)` : ""}`,
    hideDetails: "Hide details",
    methodology: "Methodology",
    resources: "Resources",
    editorialPolicy: "Editorial policy",
  },
  es: {
    quickGuideTitle: "Guía rápida",
    showFullGuide: (moreItemsCount) =>
      `Ver guía completa${moreItemsCount ? ` (${moreItemsCount} más)` : ""}`,
    hideDetails: "Ocultar",
    methodology: "Metodología",
    resources: "Recursos",
    editorialPolicy: "Política editorial",
  },
  "zh-TW": {
    quickGuideTitle: "快速指南",
    showFullGuide: (moreItemsCount) =>
      `展開完整指南${moreItemsCount ? `（另有 ${moreItemsCount} 項）` : ""}`,
    hideDetails: "收起",
    methodology: "方法論",
    resources: "資源",
    editorialPolicy: "編輯政策",
  },
};

export function CalculatorContent({
  locale,
  calculatorId,
  variant,
}: {
  locale: Locale;
  calculatorId: CalculatorId;
  variant: "before" | "after";
}) {
  const labels = UI_LABELS[locale] ?? UI_LABELS.en;
  const content =
    CALCULATOR_CONTENT_BY_LOCALE[locale]?.[calculatorId] ??
    CALCULATOR_CONTENT_EN[calculatorId];
  const previewCount = Math.min(3, content.quick.length);
  const quickPreview = content.quick.slice(0, previewCount);
  const quickRemainder = content.quick.slice(previewCount);
  const deepDiveCount = content.deepDive?.length ?? 0;
  const moreItemsCount = quickRemainder.length + deepDiveCount;
  const hasMoreTopContent =
    quickRemainder.length > 0 || Boolean(content.deepDiveTitle && deepDiveCount);

  if (variant === "before") {
    return (
      <section className="rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {labels.quickGuideTitle}
        </h2>
        <ul className="mt-3 grid list-disc gap-2 pl-5">
          {quickPreview.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {hasMoreTopContent ? (
          <details className="group mt-4">
            <summary className="cursor-pointer list-none select-none rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-100 dark:hover:bg-zinc-900/60 dark:focus-visible:ring-zinc-600 dark:focus-visible:ring-offset-zinc-950">
              <span className="flex items-center justify-between gap-3">
                <span className="flex items-center gap-2">
                  <span className="group-open:hidden">
                    {labels.showFullGuide(moreItemsCount)}
                  </span>
                  <span className="hidden group-open:inline">
                    {labels.hideDetails}
                  </span>
                </span>
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className="h-4 w-4 text-zinc-500 transition-transform group-open:rotate-180 dark:text-zinc-400"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <div className="mt-4 grid gap-4">
              {quickRemainder.length ? (
                <ul className="grid list-disc gap-2 pl-5">
                  {quickRemainder.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}

              {content.deepDiveTitle && content.deepDive?.length ? (
                <div className="grid gap-2">
                  <h3 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {content.deepDiveTitle}
                  </h3>
                  {content.deepDive.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              ) : null}
            </div>
          </details>
        ) : null}

        <div className="mt-4 text-xs text-zinc-500 dark:text-zinc-400">
          <Link
            href={routes.methodology(locale)}
            className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
          >
            {labels.methodology}
          </Link>
          {" | "}
          <Link
            href={routes.resources(locale)}
            className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
          >
            {labels.resources}
          </Link>
          {" | "}
          <Link
            href={routes.editorialPolicy(locale)}
            className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
          >
            {labels.editorialPolicy}
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
          {labels.methodology}
        </Link>
        {" | "}
        <Link
          href={routes.resources(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          {labels.resources}
        </Link>
        {" | "}
        <Link
          href={routes.editorialPolicy(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          {labels.editorialPolicy}
        </Link>
      </div>
    </section>
  );
}
