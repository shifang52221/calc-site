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
  const t = await getTranslations("editorialPolicyPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/editorial-policy"),
  };
}

export default async function EditorialPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("editorialPolicyPage");

  const url = getLocalizedUrl(locale, "/editorial-policy");
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
          {t("qualityTitle")}
        </h2>
        <ul className="grid list-disc gap-2 pl-5">
          <li>{t("quality.q1")}</li>
          <li>{t("quality.q2")}</li>
          <li>{t("quality.q3")}</li>
          <li>{t("quality.q4")}</li>
        </ul>
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("updatesTitle")}
        </h2>
        <p>{t("updates.p1")}</p>
        <ul className="grid list-disc gap-2 pl-5">
          <li>{t("updates.u1")}</li>
          <li>{t("updates.u2")}</li>
          <li>{t("updates.u3")}</li>
        </ul>
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("correctionsTitle")}
        </h2>
        <p>{t("corrections.p1")}</p>
        <p>{t("corrections.p2")}</p>
      </section>

      <section className="grid gap-2 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("disclaimerTitle")}
        </div>
        <p>{t("disclaimerBody")}</p>
      </section>
    </div>
  );
}
