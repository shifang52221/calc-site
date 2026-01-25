import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { routes } from "@/lib/routes";
import { normalizeLocale } from "@/i18n/locale";
import { getAlternates, getLocalizedUrl } from "@/lib/seo";
import { CALCULATOR_CARDS } from "@/lib/calculatorsCatalog";
import { AdSlot } from "@/components/AdSlot";
import { ADSENSE_SLOTS } from "@/lib/adsense";
import { RESOURCE_ARTICLES_EN } from "@/lib/content/resourcesEn";
import { RESOURCE_REDIRECTS_EN } from "@/lib/content/resourceRedirects";
import { SITE_NAME } from "@/lib/site";
import { SeoJsonLd } from "@/components/SeoJsonLd";
import { organizationJsonLd, webSiteJsonLd } from "@/lib/structuredData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, ""),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const nav = await getTranslations("nav");

  const featuredResources =
    locale === "en"
      ? RESOURCE_ARTICLES_EN.filter(
          (article) =>
            !Object.prototype.hasOwnProperty.call(
              RESOURCE_REDIRECTS_EN,
              article.slug,
            ),
        ).slice(0, 6)
      : [];
  const homeUrl = getLocalizedUrl(locale, "");

  return (
    <div className="grid gap-8">
      {locale === "en" ? (
        <>
          <SeoJsonLd
            data={organizationJsonLd({ name: SITE_NAME, url: homeUrl })}
          />
          <SeoJsonLd
            data={webSiteJsonLd({
              name: SITE_NAME,
              url: homeUrl,
              inLanguage: locale,
            })}
          />
        </>
      ) : null}

      <section className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-transparent to-emerald-500/10 dark:from-indigo-500/15 dark:to-emerald-500/15" />
        <div className="relative">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          {t("title")}
          </h1>
          <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
            {t("subtitle")}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href={routes.calculators(locale)}
              className="inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              {nav("calculators")}
            </Link>
            <Link
              href={routes.guides(locale)}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-700"
            >
              {nav("guides")}
            </Link>
            <Link
              href={routes.resources(locale)}
              className="inline-flex items-center justify-center rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-700"
            >
              {nav("resources")}
            </Link>
          </div>
        </div>
      </section>

      <AdSlot slot={ADSENSE_SLOTS.homeTop} />

      <section className="grid gap-3">
        <div className="flex items-end justify-between gap-3">
          <div>
            <h2 className="text-base font-semibold">{t("allTitle")}</h2>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {t("allDescription")}
            </p>
          </div>
          <Link
            href={routes.calculators(locale)}
            className="shrink-0 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-900 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-700"
          >
            {t("viewAllCta")}
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CALCULATOR_CARDS.map((card) => (
            <Link
              key={card.titleKey}
              href={card.href(locale)}
              className="rounded-xl border border-zinc-200 bg-white p-5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
            >
              <div className="font-semibold">{t(card.titleKey)}</div>
              <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                {t(card.descriptionKey)}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {locale === "en" ? (
        <section className="grid gap-3 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-950">
          <h2 className="text-base font-semibold">
            How our estimates work (quick)
          </h2>
          <div className="grid gap-2 text-sm text-zinc-700 dark:text-zinc-300">
            <p>
              Our calculators convert your measurements into practical purchase
              quantities (gallons, bags, boxes, cubic yards/meters) and then
              help you round and buffer safely.
            </p>
            <ul className="grid list-disc gap-2 pl-5">
              <li>
                Use finished dimensions (installed area), not rough framing.
              </li>
              <li>
                Add a small waste/buffer when cuts, breakage, or compaction are
                expected.
              </li>
              <li>
                Prefer product labels and supplier specs when you have them.
              </li>
            </ul>
            <p>
              See{" "}
              <Link
                href={routes.methodology(locale)}
                className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
              >
                Methodology
              </Link>{" "}
              and{" "}
              <Link
                href={routes.editorialPolicy(locale)}
                className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
              >
                Editorial policy
              </Link>{" "}
              for how we source assumptions and keep content up to date.
            </p>
          </div>
        </section>
      ) : null}

      {featuredResources.length ? (
        <section className="grid gap-3">
          <div className="flex items-end justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold">Popular resources</h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Quick references, checklists, and practical charts that support
                calculator results.
              </p>
            </div>
            <Link
              href={routes.resources(locale)}
              className="shrink-0 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-sm font-medium text-zinc-900 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:border-zinc-700"
            >
              View all
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredResources.map((article) => (
              <Link
                key={article.slug}
                href={`/${locale}/resources/${article.slug}`}
                className="rounded-xl border border-zinc-200 bg-white p-5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
              >
                <div className="font-semibold">{article.title}</div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {article.description}
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
