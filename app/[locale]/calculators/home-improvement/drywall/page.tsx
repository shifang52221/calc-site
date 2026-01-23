import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { DrywallCalculator } from "@/calculators/drywall/DrywallCalculator";
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
  const t = await getTranslations("drywall");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/calculators/home-improvement/drywall"),
  };
}

export default async function DrywallPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("drywall");
  const legal = await getTranslations("legal");

  const faq = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  const ceilingGuide =
    locale === "en"
      ? {
          title: "Ceiling drywall quick guide",
          bullets: [
            "If joists are 16\" on center, 1/2\" drywall is common; for 24\" on center, 5/8\" is common (always follow local code and manufacturer guidance).",
            "Longer sheets (4×10, 4×12) reduce seams but are harder and riskier overhead—handling and safety matter more than perfect seam math.",
            "For sag resistance or where lighting is critical, consider 5/8\" or a sag-resistant 1/2\" board.",
          ],
          table: [
            { joistOc: "16\" OC", commonThickness: "1/2\" or 5/8\"" },
            { joistOc: "24\" OC", commonThickness: "5/8\" (often)" },
          ],
        }
      : null;

  return (
    <div className="grid gap-8">
      <CalculatorSeoJsonLd
        locale={locale}
        pathname="/calculators/home-improvement/drywall"
        title={t("metaTitle")}
        description={t("metaDescription")}
        faq={faq}
      />

      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t("subtitle")}</p>
      </div>

      <CalculatorContent locale={locale} calculatorId="drywall" variant="before" />

      <DrywallCalculator />

      <AdSlot slot={ADSENSE_SLOTS.calculatorAfterResult} />

      <CalculatorContent locale={locale} calculatorId="drywall" variant="after" />

      {ceilingGuide ? (
        <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {ceilingGuide.title}
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[460px] border-collapse text-left">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-zinc-800">
                  <th className="py-2 pr-3 font-semibold">Ceiling framing</th>
                  <th className="py-2 pr-3 font-semibold">Common thickness</th>
                </tr>
              </thead>
              <tbody>
                {ceilingGuide.table.map((row) => (
                  <tr
                    key={row.joistOc}
                    className="border-b border-zinc-100 last:border-0 dark:border-zinc-900"
                  >
                    <td className="py-2 pr-3">{row.joistOc}</td>
                    <td className="py-2 pr-3">{row.commonThickness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="grid list-disc gap-2 pl-5">
            {ceilingGuide.bullets.map((b) => (
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

      <CalculatorRelatedSection locale={locale} calculatorId="drywall" />

      <section className="rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <div className="font-semibold">{legal("disclaimerTitle")}</div>
        <p className="mt-1">{legal("disclaimer")}</p>
      </section>
    </div>
  );
}
