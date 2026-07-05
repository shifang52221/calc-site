import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { getAlternates } from "@/lib/seo";
import { RESOURCE_REDIRECTS_EN } from "@/lib/content/resourceRedirects";
import { getResourceArticles } from "@/lib/content/resourcesByLocale";
import { sortReviewVisibleResources } from "@/lib/reviewPolicy";

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
  const resources = sortReviewVisibleResources(
    getResourceArticles(locale).filter((article) => !RESOURCE_REDIRECTS_EN[article.slug]),
    locale,
  );
  const reviewNotes =
    locale === "en"
      ? [
          {
            title: "What belongs in Resources",
            body:
              "Resources are supporting references for calculator decisions: coverage charts, ordering checklists, waste-factor notes, and project-planning reminders that are easier to scan outside a calculator form.",
          },
          {
            title: "How we choose the current set",
            body:
              "During this review cycle we keep the public resource list focused on pages with enough practical detail, clear assumptions, and direct support for the strongest calculator topics.",
          },
          {
            title: "How to use a resource page",
            body:
              "Use the article to confirm labels, units, rounding behavior, and common project exceptions. Then use the calculator or guide only when it is part of the same focused review surface.",
          },
          {
            title: "Important limits",
            body:
              "Charts and rules of thumb are planning aids. Product coverage, local requirements, and supplier packaging should be checked before ordering materials for a real project.",
          },
        ]
      : [];

  return (
    <div className="mx-auto grid max-w-3xl gap-6">
      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t("subtitle")}</p>
      </div>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <p>{t("intro")}</p>
      </section>

      {reviewNotes.length ? (
        <section className="grid gap-4 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <p>
            This library is intentionally narrow for the current review period:
            it highlights the references that best support our strongest
            calculators and guides instead of exposing every draft or secondary
            topic at once.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {reviewNotes.map((item) => (
              <div key={item.title} className="grid gap-1">
                <h2 className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
                  {item.title}
                </h2>
                <p className="leading-6 text-zinc-600 dark:text-zinc-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <div className="grid gap-3">
        {resources.map((article) => (
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
