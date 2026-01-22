import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { routes } from "@/lib/routes";
import { getAlternates, getLocalizedUrl } from "@/lib/seo";
import { faqJsonLd, breadcrumbJsonLd } from "@/lib/structuredData";
import { GuideRelatedSection } from "@/components/GuideRelatedSection";
import { GuideExtraContent } from "@/components/GuideExtraContent";
import { AdSlot } from "@/components/AdSlot";
import { ADSENSE_SLOTS } from "@/lib/adsense";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("guideFlooring");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/guides/home-improvement/flooring"),
  };
}

export default async function FlooringGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("guideFlooring");
  const common = await getTranslations("guidesCommon");
  const nav = await getTranslations("nav");
  const cards = await getTranslations("guidesCards");

  const faq = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  const breadcrumbs = [
    { name: nav("home"), url: getLocalizedUrl(locale, "") },
    { name: nav("guides"), url: getLocalizedUrl(locale, "/guides") },
    {
      name: cards("flooringTitle"),
      url: getLocalizedUrl(locale, "/guides/home-improvement/flooring"),
    },
  ];

  return (
    <div className="mx-auto grid max-w-3xl gap-8">
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
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t("subtitle")}</p>
      </div>

      <div className="grid gap-4 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <p>{t("intro.p1")}</p>
        <p>{t("intro.p2")}</p>
      </div>

      <AdSlot slot={ADSENSE_SLOTS.guideAfterIntro} />

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
        <h2 className="text-base font-semibold">{t("measuringTitle")}</h2>
        <ul className="grid list-disc gap-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li>{t("measuring.m1")}</li>
          <li>{t("measuring.m2")}</li>
          <li>{t("measuring.m3")}</li>
          <li>{t("measuring.m4")}</li>
        </ul>
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("wasteTitle")}
        </h2>
        <p>{t("wasteBody")}</p>
      </section>

      <GuideExtraContent locale={locale} guideId="flooring" />

      <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-base font-semibold">{t("ctaTitle")}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {t("ctaBody")}
            </div>
          </div>
          <Link
            href={routes.flooring(locale)}
            className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {common("useCalculatorCta")}
          </Link>
        </div>
      </section>

      <AdSlot slot={ADSENSE_SLOTS.guideAfterCta} />

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

      <GuideRelatedSection locale={locale} guideId="flooring" />

      <Link
        href={routes.guides(locale)}
        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        {common("backToGuides")}
      </Link>
    </div>
  );
}
