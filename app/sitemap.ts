import type { MetadataRoute } from "next";

import { routing } from "@/i18n/routing";
import { getSiteUrl } from "@/lib/site";
import { routes } from "@/lib/routes";
import { CALCULATOR_CATEGORIES, CALCULATORS } from "@/lib/calculatorsCatalog";
import { GUIDE_DEFINITIONS } from "@/lib/guidesCatalog";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = getSiteUrl();
  const locales = routing.locales.filter((l) => l === "en");

  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    const urls: string[] = [
      `${baseUrl}${routes.home(locale)}`,
      `${baseUrl}${routes.privacy(locale)}`,
      `${baseUrl}${routes.terms(locale)}`,
      `${baseUrl}${routes.about(locale)}`,
      `${baseUrl}${routes.contact(locale)}`,
      `${baseUrl}${routes.calculators(locale)}`,
      `${baseUrl}${routes.guides(locale)}`,
      ...CALCULATOR_CATEGORIES.map(
        (category) =>
          `${baseUrl}${routes.calculatorsCategory(locale, category.id)}`,
      ),
      ...CALCULATORS.map((calculator) => `${baseUrl}${calculator.href(locale)}`),
      ...GUIDE_DEFINITIONS.map((guide) => `${baseUrl}${guide.href(locale)}`),
    ];

    for (const url of urls) {
      entries.push({ url: url.replace(/\/+$/, ""), lastModified: now });
    }
  }

  return entries;
}
