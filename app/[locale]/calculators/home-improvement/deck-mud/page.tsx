import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { DeckMudCalculator } from "@/calculators/deck-mud/DeckMudCalculator";
import { normalizeLocale } from "@/i18n/locale";
import { getAlternates } from "@/lib/seo";
import { CalculatorRelatedSection } from "@/components/CalculatorRelatedSection";
import { AdSlot } from "@/components/AdSlot";
import { ADSENSE_SLOTS } from "@/lib/adsense";
import { CalculatorContent } from "@/components/CalculatorContent";
import { CalculatorSeoJsonLd } from "@/components/CalculatorSeoJsonLd";
import { routes } from "@/lib/routes";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("deckMud");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/calculators/home-improvement/deck-mud"),
  };
}

export default async function DeckMudPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("deckMud");
  const legal = await getTranslations("legal");

  const faq = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  const coverageRows =
    locale === "en"
      ? [0.5, 0.75, 1, 1.25, 1.5, 2, 2.5, 3].map((thicknessIn) => ({
          thicknessIn,
          sqFtPerCuFt: 12 / thicknessIn,
          sqFtPerCuYd: 324 / thicknessIn,
        }))
      : null;

  return (
    <div className="grid gap-8">
      <CalculatorSeoJsonLd
        locale={locale}
        pathname="/calculators/home-improvement/deck-mud"
        title={t("metaTitle")}
        description={t("metaDescription")}
        faq={faq}
      />

      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t("subtitle")}</p>
      </div>

      <CalculatorContent locale={locale} calculatorId="deckMud" variant="before" />

      <DeckMudCalculator />

      <AdSlot slot={ADSENSE_SLOTS.calculatorAfterResult} />

      <CalculatorContent locale={locale} calculatorId="deckMud" variant="after" />

      {coverageRows ? (
        <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            Deck mud coverage chart (quick reference)
          </h2>
          <p>
            Coverage is based on simple volume math (before waste): 1 cu ft covers
            about 12 / thickness(in) sq ft, and 1 cu yd (27 cu ft) covers about
            324 / thickness(in) sq ft.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-2 pr-3 font-semibold">Thickness</th>
                  <th className="py-2 pr-3 font-semibold">
                    Coverage per 1 cu ft
                  </th>
                  <th className="py-2 pr-3 font-semibold">
                    Coverage per 1 cu yd
                  </th>
                </tr>
              </thead>
              <tbody>
                {coverageRows.map((row) => (
                  <tr
                    key={row.thicknessIn}
                    className="border-b border-zinc-100 last:border-0 dark:border-zinc-900"
                  >
                    <td className="py-2 pr-3">
                      {row.thicknessIn}
                      &quot;
                    </td>
                    <td className="py-2 pr-3">
                      {row.sqFtPerCuFt.toFixed(1)} sq ft
                    </td>
                    <td className="py-2 pr-3">
                      {row.sqFtPerCuYd.toFixed(0)} sq ft
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            Tip: If you're building a shower slope, use the average of perimeter
            thickness and drain thickness, then add a buffer for waste and cleanup.
          </p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            See also:{" "}
            <Link
              href={`${routes.resources(locale)}/deck-mud-coverage-chart`}
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              Deck mud coverage chart
            </Link>
            {" | "}
            <Link
              href={`${routes.resources(locale)}/deck-mud-mix-ratio-guide`}
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              Mix ratio guide
            </Link>
            {" | "}
            <Link
              href={`${routes.resources(locale)}/deck-mud-slope-per-foot`}
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              Slope per foot
            </Link>
          </p>
        </section>
      ) : null}

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

      <CalculatorRelatedSection locale={locale} calculatorId="deckMud" />

      <section className="rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <div className="font-semibold">{legal("disclaimerTitle")}</div>
        <p className="mt-1">{legal("disclaimer")}</p>
      </section>
    </div>
  );
}
