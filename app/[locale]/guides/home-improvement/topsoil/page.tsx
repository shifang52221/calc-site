import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { routes } from "@/lib/routes";
import { getAlternates } from "@/lib/seo";
import { GuideRelatedSection } from "@/components/GuideRelatedSection";
import { GuideExtraContent } from "@/components/GuideExtraContent";
import { AdSlot } from "@/components/AdSlot";
import { ADSENSE_SLOTS } from "@/lib/adsense";
import { GuideSeoJsonLd } from "@/components/GuideSeoJsonLd";
import { GuideReferenceSection } from "@/components/GuideReferenceSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("guideTopsoil");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/guides/home-improvement/topsoil"),
  };
}

export default async function TopsoilGuidePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("guideTopsoil");
  const common = await getTranslations("guidesCommon");

  const faq = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
  ];

  return (
    <div className="mx-auto grid max-w-3xl gap-8">
      <GuideSeoJsonLd
        locale={locale}
        pathname="/guides/home-improvement/topsoil"
        title={t("metaTitle")}
        description={t("metaDescription")}
        faq={faq}
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
        <h2 className="text-base font-semibold">{t("stepsTitle")}</h2>
        <ol className="grid list-decimal gap-2 pl-5 text-sm text-zinc-700 dark:text-zinc-300">
          <li>{t("steps.s1")}</li>
          <li>{t("steps.s2")}</li>
          <li>{t("steps.s3")}</li>
          <li>{t("steps.s4")}</li>
          <li>{t("steps.s5")}</li>
        </ol>
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("tipsTitle")}
        </h2>
        <ul className="grid list-disc gap-2 pl-5">
          <li>{t("tips.t1")}</li>
          <li>{t("tips.t2")}</li>
          <li>{t("tips.t3")}</li>
          <li>{t("tips.t4")}</li>
        </ul>
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("quickTitle")}
        </h2>
        <p>{t("quickIntro")}</p>
        <ul className="grid list-disc gap-2 pl-5">
          <li>{t("quick.q1")}</li>
          <li>{t("quick.q2")}</li>
          <li>{t("quick.q3")}</li>
          <li>{t("quick.q4")}</li>
        </ul>
      </section>

      <GuideExtraContent locale={locale} guideId="topsoil" />

      <GuideReferenceSection locale={locale} guideId="topsoil" />

      <section className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-base font-semibold">{t("ctaTitle")}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {t("ctaBody")}
            </div>
          </div>
          <Link
            href={routes.topsoil(locale)}
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

      <GuideRelatedSection locale={locale} guideId="topsoil" />

      <Link
        href={routes.guides(locale)}
        className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
      >
        {common("backToGuides")}
      </Link>
    </div>
  );
}
