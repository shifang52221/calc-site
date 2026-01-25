import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { getAlternates } from "@/lib/seo";
import { RESOURCE_ARTICLES_EN } from "@/lib/content/resourcesEn";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("resourcesIndex");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/resources"),
  };
}

export default async function ResourcesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("resourcesIndex");

  return (
    <div className="mx-auto grid max-w-3xl gap-6">
      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t("subtitle")}</p>
      </div>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <p>{t("intro")}</p>
      </section>

      <div className="grid gap-3">
        {RESOURCE_ARTICLES_EN.map((article) => (
          <Link
            key={article.slug}
            href={`/${locale}/resources/${article.slug}`}
            className="rounded-xl border border-zinc-200 bg-white p-5 text-left shadow-sm hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {article.title}
            </div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {article.description}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
