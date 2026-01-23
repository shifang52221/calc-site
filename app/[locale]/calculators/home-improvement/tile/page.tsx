import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { TileCalculator } from "@/calculators/tile/TileCalculator";
import { normalizeLocale } from "@/i18n/locale";
import { getAlternates } from "@/lib/seo";
import { CalculatorRelatedSection } from "@/components/CalculatorRelatedSection";
import { AdSlot } from "@/components/AdSlot";
import { ADSENSE_SLOTS } from "@/lib/adsense";
import { CalculatorContent } from "@/components/CalculatorContent";
import { CalculatorSeoJsonLd } from "@/components/CalculatorSeoJsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("tile");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/calculators/home-improvement/tile"),
  };
}

export default async function TilePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("tile");
  const legal = await getTranslations("legal");

  const faq = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  const overageGuide =
    locale === "en"
      ? [
          {
            layout: "Straight / simple rooms",
            commonOverage: "10%",
            notes: "Basic rectangular rooms with minimal cuts.",
          },
          {
            layout: "Many corners / small rooms",
            commonOverage: "12–15%",
            notes: "More cuts, more offcuts that can’t be reused.",
          },
          {
            layout: "Diagonal / patterns",
            commonOverage: "15–20%",
            notes: "Diagonal layouts and patterns usually increase waste.",
          },
          {
            layout: "Herringbone / complex patterns",
            commonOverage: "20–25%+",
            notes: "Higher waste and more breakage risk.",
          },
        ]
      : null;

  return (
    <div className="grid gap-8">
      <CalculatorSeoJsonLd
        locale={locale}
        pathname="/calculators/home-improvement/tile"
        title={t("metaTitle")}
        description={t("metaDescription")}
        faq={faq}
      />

      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t("subtitle")}</p>
      </div>

      <CalculatorContent locale={locale} calculatorId="tile" variant="before" />

      <TileCalculator />

      <AdSlot slot={ADSENSE_SLOTS.calculatorAfterResult} />

      <CalculatorContent locale={locale} calculatorId="tile" variant="after" />

      {overageGuide ? (
        <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            Tile overage (waste) quick guide
          </h2>
          <p>
            Overage depends more on layout than area math. If you need matching
            dye lots, buying enough up front is usually cheaper than trying to
            match later.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[620px] border-collapse text-left">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-2 pr-3 font-semibold">Layout</th>
                  <th className="py-2 pr-3 font-semibold">Common overage</th>
                  <th className="py-2 pr-3 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                {overageGuide.map((row) => (
                  <tr
                    key={row.layout}
                    className="border-b border-zinc-100 last:border-0 dark:border-zinc-900"
                  >
                    <td className="py-2 pr-3">{row.layout}</td>
                    <td className="py-2 pr-3">{row.commonOverage}</td>
                    <td className="py-2 pr-3">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="grid list-disc gap-2 pl-5">
            <li>
              Round up to whole boxes and keep a few spares for future repairs.
            </li>
            <li>
              Mosaics, trim, and feature borders often need separate estimating.
            </li>
            <li>
              If tile may be discontinued, extra today can save a future mismatch.
            </li>
          </ul>
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

      <CalculatorRelatedSection locale={locale} calculatorId="tile" />

      <section className="rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <div className="font-semibold">{legal("disclaimerTitle")}</div>
        <p className="mt-1">{legal("disclaimer")}</p>
      </section>
    </div>
  );
}
