import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { TopsoilCalculator } from "@/calculators/topsoil/TopsoilCalculator";
import { normalizeLocale } from "@/i18n/locale";
import { getAlternates } from "@/lib/seo";
import { CalculatorRelatedSection } from "@/components/CalculatorRelatedSection";
import { AdSlot } from "@/components/AdSlot";
import { ADSENSE_SLOTS } from "@/lib/adsense";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/structuredData";
import { getSiteUrl } from "@/lib/site";
import { routes } from "@/lib/routes";
import { CalculatorContent } from "@/components/CalculatorContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("topsoil");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/calculators/home-improvement/topsoil"),
  };
}

export default async function TopsoilPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("topsoil");
  const legal = await getTranslations("legal");

  const faq = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];
  const nav = await getTranslations("nav");
  const baseUrl = getSiteUrl();
  const breadcrumbItems = [
    { name: nav("home"), url: `${baseUrl}${routes.home(locale)}` },
    { name: nav("calculators"), url: `${baseUrl}${routes.calculators(locale)}` },
    {
      name: t("title"),
      url: `${baseUrl}${routes.topsoil(locale)}`,
    },
  ];

  return (
    <div className="grid gap-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faq)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd(breadcrumbItems)),
        }}
      />

      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t("subtitle")}</p>
      </div>

      <CalculatorContent locale={locale} calculatorId="topsoil" variant="before" />

      <TopsoilCalculator />

      <AdSlot slot={ADSENSE_SLOTS.calculatorAfterResult} />

      <CalculatorContent locale={locale} calculatorId="topsoil" variant="after" />

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

      <CalculatorRelatedSection locale={locale} calculatorId="topsoil" />

      <section className="rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <div className="font-semibold">{legal("disclaimerTitle")}</div>
        <p className="mt-1">{legal("disclaimer")}</p>
      </section>
    </div>
  );
}
