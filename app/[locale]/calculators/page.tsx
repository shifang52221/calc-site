import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { getAlternates } from "@/lib/seo";
import {
  CALCULATOR_CATEGORIES,
  CALCULATORS,
} from "@/lib/calculatorsCatalog";
import { CalculatorsIndexClient } from "@/components/CalculatorsIndexClient";
import { routes } from "@/lib/routes";
import { sortCalculatorsForReview } from "@/lib/reviewPolicy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("calculatorsIndex");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/calculators"),
  };
}

export default async function CalculatorsIndex({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const index = await getTranslations("calculatorsIndex");

  const resolvedSearchParams = searchParams ? await searchParams : {};
  const rawQuery =
    typeof resolvedSearchParams.q === "string" ? resolvedSearchParams.q : "";
  const rawCategory =
    typeof resolvedSearchParams.category === "string"
      ? resolvedSearchParams.category
      : "all";
  const initialCategoryId =
    rawCategory === "all" ||
    CALCULATOR_CATEGORIES.some((category) => category.id === rawCategory)
      ? (rawCategory as (typeof CALCULATOR_CATEGORIES)[number]["id"] | "all")
      : "all";

  const calculators = sortCalculatorsForReview(CALCULATORS, locale).map(
    (calculator) => ({
      href: calculator.href(locale),
      titleKey: calculator.titleKey,
      descriptionKey: calculator.descriptionKey,
      categoryId: calculator.categoryId,
      tags: calculator.tags,
    }),
  );
  const reviewGuidance =
    locale === "en"
      ? [
          {
            title: index("reviewUseTitle"),
            body: index("reviewUseBody"),
          },
          {
            title: index("reviewMeasureTitle"),
            body: index("reviewMeasureBody"),
          },
          {
            title: index("reviewWasteTitle"),
            body: index("reviewWasteBody"),
          },
          {
            title: index("reviewCheckTitle"),
            body: index("reviewCheckBody"),
          },
        ]
      : [];

  return (
    <div className="grid gap-6">
      <h1 className="text-2xl font-semibold">{index("title")}</h1>
      {locale === "en" ? (
        <section className="grid gap-4 border-y border-zinc-200 py-5 dark:border-zinc-800">
          <p className="max-w-3xl text-sm leading-6 text-zinc-700 dark:text-zinc-300">
            {index("reviewIntro")}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {reviewGuidance.map((item) => (
              <div key={item.title} className="grid gap-1">
                <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {item.title}
                </h2>
                <p className="text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}
      <div className="flex flex-wrap items-center gap-2 text-sm">
        {CALCULATOR_CATEGORIES.map((category) => (
          <Link
            key={category.id}
            href={routes.calculatorsCategory(locale, category.id)}
            className="rounded-full border border-zinc-200 bg-white px-3 py-1 text-zinc-900 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-700"
          >
            {index(category.titleKey)}
          </Link>
        ))}
      </div>
      <CalculatorsIndexClient
        calculators={calculators}
        categories={CALCULATOR_CATEGORIES}
        initialQuery={rawQuery}
        initialCategoryId={initialCategoryId}
      />
    </div>
  );
}
