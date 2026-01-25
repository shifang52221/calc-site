import { getSiteUrl } from "@/lib/site";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

function normalizePathname(pathname: string) {
  if (!pathname) return "";
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withSlash === "/" ? "" : withSlash.replace(/\/+$/, "");
}

export function getLocalizedUrl(locale: Locale, pathname: string) {
  const baseUrl = getSiteUrl();
  const normalized = normalizePathname(pathname);
  return `${baseUrl}/${locale}${normalized}`.replace(/\/+$/, "");
}

export function getAlternates(locale: Locale, pathname: string) {
  const indexedLocales: readonly Locale[] = routing.locales;
  const canonicalLocale = locale;

  const languages: Record<string, string> = {};
  for (const l of indexedLocales) {
    languages[l] = getLocalizedUrl(l, pathname);
  }

  languages["x-default"] = getLocalizedUrl(routing.defaultLocale, pathname);

  return {
    canonical: getLocalizedUrl(canonicalLocale, pathname),
    languages,
  };
}
