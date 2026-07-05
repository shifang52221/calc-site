import { routing } from "../i18n/routing";
import { getSiteUrl } from "./site";
import type { Locale } from "../i18n/routing";
import { getRobotsForIndexedLocales } from "./seoRobots";

function normalizePathname(pathname: string) {
  if (!pathname) return "";
  const withSlash = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return withSlash === "/" ? "" : withSlash.replace(/\/+$/, "");
}

function resolveIndexedLocales(): readonly Locale[] {
  const raw = process.env.NEXT_PUBLIC_INDEXED_LOCALES?.trim();
  const configured = raw
    ? raw
        .split(",")
        .map((value) => value.trim())
        .filter(Boolean)
    : ["en"];
  const filtered = routing.locales.filter((locale) =>
    configured.includes(locale),
  );
  return filtered.length ? filtered : [routing.defaultLocale];
}

export function getIndexedLocales(): readonly Locale[] {
  return resolveIndexedLocales();
}

export function getLocalizedUrl(locale: Locale, pathname: string) {
  const baseUrl = getSiteUrl();
  const normalized = normalizePathname(pathname);
  return `${baseUrl}/${locale}${normalized}`.replace(/\/+$/, "");
}

export function getRobotsForLocale(locale: Locale) {
  return getRobotsForIndexedLocales(locale, resolveIndexedLocales());
}

export function getAlternates(locale: Locale, pathname: string) {
  const indexedLocales = resolveIndexedLocales();
  const canonicalLocale = indexedLocales.includes(locale)
    ? locale
    : routing.defaultLocale;

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
