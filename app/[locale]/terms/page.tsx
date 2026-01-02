import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("termsPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/terms"),
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("termsPage");

  return (
    <div className="mx-auto grid max-w-3xl gap-6">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      <div className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <p>{t("intro")}</p>
        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("useTitle")}
        </h2>
        <p>{t("useBody")}</p>
        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("warrantyTitle")}
        </h2>
        <p>{t("warrantyBody")}</p>
        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("liabilityTitle")}
        </h2>
        <p>{t("liabilityBody")}</p>
        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("changesTitle")}
        </h2>
        <p>{t("changesBody")}</p>
      </div>
    </div>
  );
}
