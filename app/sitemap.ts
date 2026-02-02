import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";
import { routes } from "@/lib/routes";
import { CALCULATOR_CATEGORIES, CALCULATORS } from "@/lib/calculatorsCatalog";
import { GUIDE_DEFINITIONS } from "@/lib/guidesCatalog";
import { RESOURCE_REDIRECTS_EN } from "@/lib/content/resourceRedirects";
import { getResourceArticles } from "@/lib/content/resourcesByLocale";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const locales = routing.locales;

  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const resourceArticles = getResourceArticles(locale).filter((article) => {
      if (locale !== "en") return true;
      return !Object.prototype.hasOwnProperty.call(
        RESOURCE_REDIRECTS_EN,
        article.slug,
      );
    });
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
      ...CALCULATOR_CATEGORIES.map(
        (category) =>
          `${baseUrl}${routes.calculatorsCategory(locale, category.id)}`,
      ),
      ...CALCULATORS.map((calculator) => `${baseUrl}${calculator.href(locale)}`),
      ...GUIDE_DEFINITIONS.map((guide) => `${baseUrl}${guide.href(locale)}`),
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
