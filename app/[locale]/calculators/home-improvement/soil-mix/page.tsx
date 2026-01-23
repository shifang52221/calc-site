import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { SoilMixCalculator } from "@/calculators/soil-mix/SoilMixCalculator";
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
  const t = await getTranslations("soilMix");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/calculators/home-improvement/soil-mix"),
  };
}

export default async function SoilMixPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("soilMix");
  const legal = await getTranslations("legal");

  const faq = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  const mixReference =
    locale === "en"
      ? {
          title: "Soil mix quick reference (common ratios)",
          rows: [
            {
              mix: "50% compost + 50% topsoil",
              goodFor: "General beds (simple starting point)",
            },
            {
              mix: "1/3 compost + 1/3 topsoil + 1/3 aeration (perlite/pumice/coarse sand)",
              goodFor: "Raised beds that need better drainage/structure",
            },
            {
              mix: "40% topsoil + 40% compost + 20% aeration",
              goodFor: "Balance between fertility and drainage",
            },
          ],
          bullets: [
            "Ratios are starting points: plants, climate, and bed depth can change what works best.",
            "Confirm whether your supplier sells by cubic yards or cubic meters and whether materials are screened.",
            "Plan extra for settling after watering and for rounding to delivery minimums.",
          ],
        }
      : null;

  return (
    <div className="grid gap-8">
      <CalculatorSeoJsonLd
        locale={locale}
        pathname="/calculators/home-improvement/soil-mix"
        title={t("metaTitle")}
        description={t("metaDescription")}
        faq={faq}
      />

      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t("subtitle")}</p>
      </div>

      <CalculatorContent locale={locale} calculatorId="soilMix" variant="before" />

      <SoilMixCalculator />

      <AdSlot slot={ADSENSE_SLOTS.calculatorAfterResult} />

      <CalculatorContent locale={locale} calculatorId="soilMix" variant="after" />

      {mixReference ? (
        <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {mixReference.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-2 pr-3 font-semibold">Mix</th>
                  <th className="py-2 pr-3 font-semibold">Good for</th>
                </tr>
              </thead>
              <tbody>
                {mixReference.rows.map((row) => (
                  <tr
                    key={row.mix}
                    className="border-b border-zinc-100 last:border-0 dark:border-zinc-900"
                  >
                    <td className="py-2 pr-3">{row.mix}</td>
                    <td className="py-2 pr-3">{row.goodFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="grid list-disc gap-2 pl-5">
            {mixReference.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
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

      <CalculatorRelatedSection locale={locale} calculatorId="soilMix" />

      <section className="rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <div className="font-semibold">{legal("disclaimerTitle")}</div>
        <p className="mt-1">{legal("disclaimer")}</p>
      </section>
    </div>
  );
}
