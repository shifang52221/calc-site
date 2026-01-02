import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { getAlternates, getLocalizedUrl } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { CALCULATOR_CATEGORIES, CALCULATORS } from "@/lib/calculatorsCatalog";
import { GUIDE_DEFINITIONS } from "@/lib/guidesCatalog";
import { breadcrumbJsonLd } from "@/lib/structuredData";

function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, category: rawCategory } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("calculatorsCategory");
  const index = await getTranslations("calculatorsIndex");

  const category = CALCULATOR_CATEGORIES.find((item) => item.id === rawCategory);
  if (!category) {
    return {
      title: index("title"),
      description: index("metaDescription"),
      alternates: getAlternates(locale, "/calculators"),
    };
  }

  const categoryTitle = index(category.titleKey);

  return {
    title: t("metaTitle", { category: categoryTitle }),
    description: t("metaDescription", { category: categoryTitle }),
    alternates: getAlternates(locale, `/calculators/${category.id}`),
  };
}

export default async function CalculatorsCategoryPage({
  params,
}: {
  params: Promise<{ locale: string; category: string }>;
}) {
  const { locale: rawLocale, category: rawCategory } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations("calculatorsCategory");
  const index = await getTranslations("calculatorsIndex");
  const home = await getTranslations("home");
  const guidesCards = await getTranslations("guidesCards");
  const nav = await getTranslations("nav");

  const category = CALCULATOR_CATEGORIES.find((item) => item.id === rawCategory);
  if (!category) {
    notFound();
  }

  const breadcrumbs = [
    { name: nav("home"), url: getLocalizedUrl(locale, "") },
    { name: nav("calculators"), url: getLocalizedUrl(locale, "/calculators") },
    {
      name: index(category.titleKey),
      url: getLocalizedUrl(locale, `/calculators/${category.id}`),
    },
  ];

  const calculators = CALCULATORS.filter(
    (item) => item.categoryId === category.id,
  );
  const guides = GUIDE_DEFINITIONS.filter((item) => item.categoryId === category.id);

  const faq = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  return (
    <div className="grid gap-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(breadcrumbs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />
      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{index(category.titleKey)}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">
          {t("subtitle", { count: calculators.length })}
        </p>
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {t("intro", { category: index(category.titleKey) })}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {calculators.map((item) => (
          <Link
            key={item.id}
            href={item.href(locale)}
            className="rounded-xl border border-zinc-200 bg-white p-5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <div className="font-semibold">{home(item.titleKey)}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {home(item.descriptionKey)}
            </div>
          </Link>
        ))}
      </div>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-base font-semibold">{t("relatedGuidesTitle")}</h2>
        {guides.length ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.id}
                href={guide.href(locale)}
                className="rounded-lg border border-zinc-200 bg-white p-4 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
              >
                <div className="text-sm font-semibold">
                  {guidesCards(guide.titleKey)}
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {guidesCards(guide.descriptionKey)}
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            {t("noGuidesYet")}
          </div>
        )}
      </section>

      <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-base font-semibold">{t("faqTitle")}</h2>
        <div className="mt-4 grid gap-4 text-sm">
          {faq.map((item) => (
            <div key={item.q}>
              <div className="font-semibold">{item.q}</div>
              <div className="mt-1 text-zinc-700 dark:text-zinc-300">
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <Link
          href={routes.calculators(locale)}
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {t("backToCalculators")}
        </Link>
        <Link
          href={routes.guides(locale)}
          className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {t("browseAllGuides")}
        </Link>
      </div>
    </div>
  );
}
