import Link from "next/link";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { getAlternates } from "@/lib/seo";
import { GUIDE_DEFINITIONS } from "@/lib/guidesCatalog";
import { sortReviewVisibleGuides } from "@/lib/reviewPolicy";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("guidesIndex");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/guides"),
  };
}

export default async function GuidesIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("guidesIndex");
  const cards = await getTranslations("guidesCards");
  const guides = sortReviewVisibleGuides(GUIDE_DEFINITIONS, locale);
  const reviewGuidance =
    locale === "en"
      ? [
          {
            title: "What these guides help you decide",
            body:
              "Each guide focuses on the assumptions that change a material estimate the most: what to measure, how to choose a waste factor, when to split a project into separate line items, and which product-label details matter before you buy.",
          },
          {
            title: "How to use them with the calculators",
            body:
              "Start with the guide when you are still deciding your inputs. Then move to the related calculator once you know the right area, depth, coverage rate, box count, or overage rule for your specific project.",
          },
          {
            title: "What we avoid",
            body:
              "We do not pad these pages with generic DIY advice. The goal is to explain the small planning choices that commonly create shortages, overbuying, and confusing results in home-material estimates.",
          },
          {
            title: "When to double-check locally",
            body:
              "Manufacturer instructions, local code, climate, and supplier packaging can override default planning assumptions. Use these guides as a practical starting point, then validate details that are product-specific or region-specific.",
          },
        ]
      : [];

  return (
    <div className="grid gap-6">
      <div className="grid gap-2">
        <h1 className="text-2xl font-semibold">{t("title")}</h1>
        <p className="text-zinc-600 dark:text-zinc-400">{t("description")}</p>
      </div>

      {reviewGuidance.length ? (
        <section className="grid gap-4 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
          <p>
            These planning guides are written for the stage before purchase, when
            the biggest mistakes usually come from using the wrong assumption
            rather than the wrong formula. They are meant to make the calculator
            inputs easier to trust.
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            {reviewGuidance.map((item) => (
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => (
          <Link
            key={guide.id}
            href={guide.href(locale)}
            className="rounded-xl border border-zinc-200 bg-white p-5 hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
          >
            <div className="font-semibold">{cards(guide.titleKey)}</div>
            <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {cards(guide.descriptionKey)}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
