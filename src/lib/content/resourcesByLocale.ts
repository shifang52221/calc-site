import type { Locale } from "@/i18n/routing";

import { RESOURCE_ARTICLES_EN } from "@/lib/content/resourcesEn";
import type { ResourceArticle } from "@/lib/content/resourcesEn";
import { RESOURCE_ARTICLES_ES } from "@/lib/content/resourcesEs";
import { RESOURCE_ARTICLES_ZH_TW } from "@/lib/content/resourcesZhTW";

export function getResourceArticles(locale: Locale): ResourceArticle[] {
  switch (locale) {
    case "es":
      return RESOURCE_ARTICLES_ES;
    case "zh-TW":
      return RESOURCE_ARTICLES_ZH_TW;
    case "en":
    default:
      return RESOURCE_ARTICLES_EN;
  }
}

