const LOCALES = new Set<string>(["en", "es", "zh-TW"]);
const DEFAULT_LOCALE = "en";

const LOCALE_EXEMPT_PATHS = new Set([
  "/ads.txt",
  "/icon.svg",
  "/opengraph-image",
  "/robots.txt",
  "/sitemap.xml",
  "/twitter-image",
]);

export type ReviewRedirectInput = {
  canonicalHost: string | null;
  host: string | null;
  pathname: string;
  protocol?: string;
  search?: string;
};

export function getCanonicalHostFromSiteUrl(raw: string | undefined) {
  const value = raw || "https://homedecorcalc.com";
  try {
    return new URL(value).host;
  } catch {
    return null;
  }
}

export function hasLocalePrefix(pathname: string) {
  const [, firstSegment] = pathname.split("/");
  return Boolean(firstSegment && LOCALES.has(firstSegment));
}

function isPublicMetadataOrAssetPath(pathname: string) {
  return (
    LOCALE_EXEMPT_PATHS.has(pathname) ||
    pathname.startsWith("/_next/") ||
    /\.[^/]+$/.test(pathname)
  );
}

function buildUrl({
  host,
  pathname,
  protocol = "https:",
  search = "",
}: {
  host: string;
  pathname: string;
  protocol?: string;
  search?: string;
}) {
  const normalizedSearch =
    search && !search.startsWith("?") ? `?${search}` : search;
  return `${protocol}//${host}${pathname}${normalizedSearch}`;
}

export function resolveReviewRedirect({
  canonicalHost,
  host,
  pathname,
  protocol = "https:",
  search = "",
}: ReviewRedirectInput) {
  if (
    canonicalHost &&
    host &&
    !host.endsWith(".vercel.app") &&
    host !== canonicalHost
  ) {
    return buildUrl({
      host: canonicalHost,
      pathname,
      protocol: "https:",
      search,
    });
  }

  if (pathname === "/") {
    return buildUrl({
      host: canonicalHost || host || "homedecorcalc.com",
      pathname: `/${DEFAULT_LOCALE}`,
      protocol,
      search,
    });
  }

  if (!hasLocalePrefix(pathname) && !isPublicMetadataOrAssetPath(pathname)) {
    return buildUrl({
      host: canonicalHost || host || "homedecorcalc.com",
      pathname: `/${DEFAULT_LOCALE}${pathname}`,
      protocol,
      search,
    });
  }

  return null;
}
