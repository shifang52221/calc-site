import type { Locale } from "../i18n/routing";

export function getRobotsForIndexedLocales(
  locale: Locale,
  indexedLocales: readonly Locale[],
) {
  if (indexedLocales.includes(locale)) {
    return undefined;
  }

  return { index: false, follow: true } as const;
}
