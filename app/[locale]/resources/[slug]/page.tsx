import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { getAlternates, getLocalizedUrl } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { SITE_NAME } from "@/lib/site";
import { RESOURCE_REDIRECTS_EN } from "@/lib/content/resourceRedirects";
import { getResourceArticles } from "@/lib/content/resourcesByLocale";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/structuredData";

function localizeInternalHref(locale: string, href: string) {
  if (!href.startsWith("/")) return href;
  const localePrefix = `/${locale}`;
  if (href.startsWith(localePrefix + "/")) return href;
  const localeMatch = href.match(/^\/(en|es|zh-TW)(\/.*)$/);
  if (localeMatch) return `${localePrefix}${localeMatch[2]}`;
  return `${localePrefix}${href}`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);

  const redirected = RESOURCE_REDIRECTS_EN[slug];
  const article = getResourceArticles(locale).find((a) => a.slug === (redirected ?? slug));
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: getAlternates(locale, `/resources/${redirected ?? slug}`),
  };
}

export default async function ResourceArticlePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("resourcesArticle");
  const tResourcesIndex = await getTranslations("resourcesIndex");

  const redirected = RESOURCE_REDIRECTS_EN[slug];
  if (redirected) {
    permanentRedirect(getLocalizedUrl(locale, `/resources/${redirected}`));
  }

  const article = getResourceArticles(locale).find((a) => a.slug === slug);
  if (!article) return notFound();

  const url = getLocalizedUrl(locale, `/resources/${slug}`);
  const breadcrumbs = [
    { name: SITE_NAME, url: getLocalizedUrl(locale, "") },
    { name: tResourcesIndex("title"), url: getLocalizedUrl(locale, "/resources") },
    { name: article.title, url },
  ];

  return (
    <div className="mx-auto grid max-w-3xl gap-6">
      <SeoJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SeoJsonLd
        data={articleJsonLd({
          headline: article.title,
          description: article.description,
          url,
          inLanguage: locale,
          publisherName: SITE_NAME,
        })}
      />

      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{article.title}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{article.description}</p>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          {article.lastUpdated}
        </div>
      </div>

      {article.sections.map((section) => (
        <section
          key={section.heading}
          className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300"
        >
          <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {section.heading}
          </h2>
          {section.paragraphs?.length
            ? section.paragraphs.map((p) => <p key={p}>{p}</p>)
            : null}
          {section.table ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-zinc-200 dark:border-zinc-800">
                    {section.table.columns.map((c) => (
                      <th key={c} className="py-2 pr-3 font-semibold">
                        {c}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row) => (
                    <tr
                      key={row.join("|")}
                      className="border-b border-zinc-100 last:border-0 dark:border-zinc-900"
                    >
                      {row.map((cell, index) => (
                        <td key={`${index}:${cell}`} className="py-2 pr-3">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
          {section.bullets?.length ? (
            <ul className="grid list-disc gap-2 pl-5">
              {section.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {article.related?.length ? (
        <section className="grid gap-2 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <div className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
            {t("relatedTitle")}
          </div>
          <ul className="grid gap-2">
            {article.related.map((r) => (
              <li key={r.href}>
                <Link
                  href={localizeInternalHref(locale, r.href)}
                  className="text-zinc-700 underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:text-zinc-300 dark:decoration-zinc-700 dark:hover:text-zinc-100"
                >
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href={routes.resources(locale)}
          className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
        >
          {t("backToResources")}
        </Link>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Link
            href={routes.methodology(locale)}
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {t("methodologyLink")}
          </Link>
          <span className="hidden text-zinc-400 dark:text-zinc-600 sm:inline">
            ·
          </span>
          <Link
            href={routes.editorialPolicy(locale)}
            className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            {t("editorialPolicyLink")}
          </Link>
        </div>
      </div>
    </div>
  );
}
