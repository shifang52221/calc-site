import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { getAlternates, getLocalizedUrl } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("methodologyPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/methodology"),
  };
}

export default async function MethodologyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("methodologyPage");

  const url = getLocalizedUrl(locale, "/methodology");
  const breadcrumbs = [
    { name: SITE_NAME, url: getLocalizedUrl(locale, "") },
    { name: t("title"), url },
  ];

  return (
    <div className="mx-auto grid max-w-3xl gap-6">
      <SeoJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SeoJsonLd
        data={articleJsonLd({
          headline: t("title"),
          description: t("metaDescription"),
          url,
          inLanguage: locale,
          publisherName: SITE_NAME,
        })}
      />

      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t("subtitle")}</p>
      </div>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("whatWeDoTitle")}
        </h2>
        <p>{t("whatWeDo.p1")}</p>
        <p>{t("whatWeDo.p2")}</p>
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("unitsTitle")}
        </h2>
        <ul className="grid list-disc gap-2 pl-5">
          <li>{t("units.u1")}</li>
          <li>{t("units.u2")}</li>
          <li>{t("units.u3")}</li>
        </ul>
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("roundingTitle")}
        </h2>
        <ul className="grid list-disc gap-2 pl-5">
          <li>{t("rounding.r1")}</li>
          <li>{t("rounding.r2")}</li>
          <li>{t("rounding.r3")}</li>
        </ul>
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("wasteTitle")}
        </h2>
        <p>{t("waste.p1")}</p>
        <ul className="grid list-disc gap-2 pl-5">
          <li>{t("waste.w1")}</li>
          <li>{t("waste.w2")}</li>
          <li>{t("waste.w3")}</li>
        </ul>
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("sourcesTitle")}
        </h2>
        <p>{t("sources.p1")}</p>
        <p>{t("sources.p2")}</p>
      </section>

      <section className="grid gap-2 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("contactTitle")}
        </div>
        <p>{t("contactBody")}</p>
      </section>
    </div>
  );
}
