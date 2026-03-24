import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { DrywallTextureCalculator } from "@/calculators/drywall-texture/DrywallTextureCalculator";
import { normalizeLocale } from "@/i18n/locale";
import { getAlternates } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { CalculatorRelatedSection } from "@/components/CalculatorRelatedSection";
import { AdSlot } from "@/components/AdSlot";
import { ADSENSE_SLOTS } from "@/lib/adsense";
import { CalculatorContent } from "@/components/CalculatorContent";
import { CalculatorReferenceSection } from "@/components/CalculatorReferenceSection";
import { CalculatorSeoJsonLd } from "@/components/CalculatorSeoJsonLd";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("drywallTexture");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(
      locale,
      "/calculators/home-improvement/drywall-texture",
    ),
  };
}

export default async function DrywallTexturePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("drywallTexture");
  const legal = await getTranslations("legal");

  const faq = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  return (
    <div className="grid gap-8">
      <CalculatorSeoJsonLd
        locale={locale}
        pathname="/calculators/home-improvement/drywall-texture"
        title={t("metaTitle")}
        description={t("metaDescription")}
        faq={faq}
      />

      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t("subtitle")}</p>
      </div>

      {locale === "en" ? (
        <section className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            {t("reviewNoteTitle")}
          </h2>
          <p className="mt-1">{t("reviewNoteBody")}</p>
          <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
            <Link
              href={routes.methodology(locale)}
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              {t("reviewNoteLinkMethodology")}
            </Link>
            {" | "}
            <Link
              href={routes.editorialPolicy(locale)}
              className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
            >
              {t("reviewNoteLinkEditorial")}
            </Link>
          </div>
        </section>
      ) : null}

      <CalculatorContent
        locale={locale}
        calculatorId="drywallTexture"
        variant="before"
      />

      <DrywallTextureCalculator />

      <AdSlot
        slot={ADSENSE_SLOTS.calculatorAfterResult}
        placement="calculatorAfterResult"
      />

      <CalculatorContent
        locale={locale}
        calculatorId="drywallTexture"
        variant="after"
      />

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

      <CalculatorReferenceSection locale={locale} calculatorId="drywallTexture" />

      <CalculatorRelatedSection locale={locale} calculatorId="drywallTexture" />

      <section className="rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <div className="font-semibold">{legal("disclaimerTitle")}</div>
        <p className="mt-1">{legal("disclaimer")}</p>
      </section>
    </div>
  );
}
