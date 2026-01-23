import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { RoofingCalculator } from "@/calculators/roofing/RoofingCalculator";
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
  const t = await getTranslations("roofing");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/calculators/home-improvement/roofing"),
  };
}

export default async function RoofingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("roofing");
  const legal = await getTranslations("legal");

  const faq = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  const quickBundles =
    locale === "en"
      ? [
          { squares: 10, areaSqFt: 1000, bundles3: 30 },
          { squares: 15, areaSqFt: 1500, bundles3: 45 },
          { squares: 20, areaSqFt: 2000, bundles3: 60 },
          { squares: 25, areaSqFt: 2500, bundles3: 75 },
        ]
      : null;

  return (
    <div className="grid gap-8">
      <CalculatorSeoJsonLd
        locale={locale}
        pathname="/calculators/home-improvement/roofing"
        title={t("metaTitle")}
        description={t("metaDescription")}
        faq={faq}
      />

      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t("subtitle")}</p>
      </div>

      <CalculatorContent locale={locale} calculatorId="roofing" variant="before" />

      <RoofingCalculator />

      <AdSlot slot={ADSENSE_SLOTS.calculatorAfterResult} />

      <CalculatorContent locale={locale} calculatorId="roofing" variant="after" />

      {quickBundles ? (
        <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            Shingles quick reference (squares &amp; bundles)
          </h2>
          <p>
            Roofing is often sold in &quot;squares&quot; (100 sq ft). Many
            architectural shingles are around 3 bundles per square, but the
            label always wins—use your product&apos;s actual coverage.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-2 pr-3 font-semibold">Roof area</th>
                  <th className="py-2 pr-3 font-semibold">Squares</th>
                  <th className="py-2 pr-3 font-semibold">
                    Bundles (if 3 / square)
                  </th>
                </tr>
              </thead>
              <tbody>
                {quickBundles.map((row) => (
                  <tr
                    key={row.squares}
                    className="border-b border-zinc-100 last:border-0 dark:border-zinc-900"
                  >
                    <td className="py-2 pr-3">{row.areaSqFt} sq ft</td>
                    <td className="py-2 pr-3">{row.squares}</td>
                    <td className="py-2 pr-3">{row.bundles3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="grid list-disc gap-2 pl-5">
            <li>
              Add waste: simple gables often 10–15%, complex roofs can be 15–25%+
              (valleys/hips/dormers).
            </li>
            <li>
              Don&apos;t forget starter, ridge caps, underlayment, and ice &amp;
              water shield (separate items).
            </li>
            <li>
              Pitch matters: steeper roofs have more surface area than footprint
              measurements suggest.
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

      <CalculatorRelatedSection locale={locale} calculatorId="roofing" />

      <section className="rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <div className="font-semibold">{legal("disclaimerTitle")}</div>
        <p className="mt-1">{legal("disclaimer")}</p>
      </section>
    </div>
  );
}
