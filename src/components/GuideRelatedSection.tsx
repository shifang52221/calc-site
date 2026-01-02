import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { routes } from "@/lib/routes";
import { CALCULATORS, CALCULATOR_CATEGORIES } from "@/lib/calculatorsCatalog";
import {
  GUIDE_DEFINITIONS,
  getGuideDefinition,
  type GuideId,
} from "@/lib/guidesCatalog";
import type { Locale } from "@/i18n/routing";

function buildCategoryUrl(locale: Locale, categoryId: string) {
  return `${routes.calculators(locale)}?category=${encodeURIComponent(categoryId)}`;
}

export async function GuideRelatedSection({
  locale,
  guideId,
}: {
  locale: Locale;
  guideId: GuideId;
}) {
  const guide = getGuideDefinition(guideId);
  if (!guide) {
    return null;
  }

  const related = await getTranslations("guidesRelated");
  const calculatorsIndex = await getTranslations("calculatorsIndex");
  const home = await getTranslations("home");
  const guidesCards = await getTranslations("guidesCards");

  const category = CALCULATOR_CATEGORIES.find(
    (item) => item.id === guide.categoryId,
  );

  const relatedCalculators = CALCULATORS.filter(
    (calculator) =>
      calculator.categoryId === guide.categoryId &&
      calculator.id !== guide.calculatorId,
  ).slice(0, 6);

  const relatedGuides = GUIDE_DEFINITIONS.filter(
    (item) => item.categoryId === guide.categoryId && item.id !== guide.id,
  ).slice(0, 6);

  return (
    <section className="grid gap-4 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="grid gap-1">
        <h2 className="text-base font-semibold">{related("title")}</h2>
        {category ? (
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {related("inCategory", {
              category: calculatorsIndex(category.titleKey),
            })}
          </p>
        ) : null}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-3">
          <div className="text-sm font-semibold">
            {related("calculatorsTitle")}
          </div>
          <div className="grid gap-2">
            {relatedCalculators.map((calculator) => (
              <Link
                key={calculator.id}
                href={calculator.href(locale)}
                className="rounded-lg border border-zinc-200 bg-white p-3 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
              >
                <div className="text-sm font-semibold">
                  {home(calculator.titleKey)}
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {home(calculator.descriptionKey)}
                </div>
              </Link>
            ))}
            <Link
              href={buildCategoryUrl(locale, guide.categoryId)}
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {related("browseCategoryCalculators")}
            </Link>
          </div>
        </div>

        <div className="grid gap-3">
          <div className="text-sm font-semibold">{related("guidesTitle")}</div>
          <div className="grid gap-2">
            {relatedGuides.length ? (
              relatedGuides.map((item) => (
                <Link
                  key={item.id}
                  href={item.href(locale)}
                  className="rounded-lg border border-zinc-200 bg-white p-3 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
                >
                  <div className="text-sm font-semibold">
                    {guidesCards(item.titleKey)}
                  </div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    {guidesCards(item.descriptionKey)}
                  </div>
                </Link>
              ))
            ) : (
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                {related("noGuidesYet")}
              </div>
            )}
            <Link
              href={routes.guides(locale)}
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              {related("browseAllGuides")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
