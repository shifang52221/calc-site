import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site";
import { getIndexedLocales } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { CALCULATORS } from "@/lib/calculatorsCatalog";
import { GUIDE_DEFINITIONS } from "@/lib/guidesCatalog";
import { RESOURCE_REDIRECTS_EN } from "@/lib/content/resourceRedirects";
import { getResourceArticles } from "@/lib/content/resourcesByLocale";
import {
  sortReviewVisibleCalculators,
  sortReviewVisibleGuides,
  sortReviewVisibleResources,
} from "@/lib/reviewPolicy";

export const dynamic = "force-static";
export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const locales = getIndexedLocales();

  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const resourceArticles = sortReviewVisibleResources(
      getResourceArticles(locale).filter((article) => {
        if (locale !== "en") return true;
        return !Object.prototype.hasOwnProperty.call(
          RESOURCE_REDIRECTS_EN,
          article.slug,
        );
      }),
      locale,
    );
    const urls: string[] = [
      `${baseUrl}${routes.home(locale)}`,
      `${baseUrl}${routes.privacy(locale)}`,
      `${baseUrl}${routes.terms(locale)}`,
      `${baseUrl}${routes.about(locale)}`,
      `${baseUrl}${routes.contact(locale)}`,
      `${baseUrl}${routes.calculators(locale)}`,
      `${baseUrl}${routes.guides(locale)}`,
      `${baseUrl}${routes.resources(locale)}`,
      `${baseUrl}${routes.methodology(locale)}`,
      `${baseUrl}${routes.editorialPolicy(locale)}`,
      ...sortReviewVisibleCalculators(CALCULATORS, locale).map(
        (calculator) => `${baseUrl}${calculator.href(locale)}`,
      ),
      ...sortReviewVisibleGuides(GUIDE_DEFINITIONS, locale).map(
        (guide) => `${baseUrl}${guide.href(locale)}`,
      ),
      ...resourceArticles.map(
        (article) => `${baseUrl}${routes.resources(locale)}/${article.slug}`,
      ),
    ];

    for (const url of urls) {
      entries.push({ url: url.replace(/\/+$/, ""), lastModified: now });
    }
  }

  return entries;
}
