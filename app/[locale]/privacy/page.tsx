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
  const t = await getTranslations("privacyPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/privacy"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("privacyPage");

  return (
    <div className="mx-auto grid max-w-3xl gap-6">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>

      <section className="grid gap-4 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <p>{t("intro")}</p>
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("dataTitle")}
        </h2>
        <p>{t("dataBody")}</p>

        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("cookiesTitle")}
        </h2>
        <p>{t("cookiesBody")}</p>

        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("adsTitle")}
        </h2>
        <p>{t("adsBody")}</p>

        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("yourChoicesTitle")}
        </h2>
        <p>{t("yourChoicesBody")}</p>

        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("contactTitle")}
        </h2>
        <p>{t("contactBody")}</p>
      </section>
    </div>
  );
}
