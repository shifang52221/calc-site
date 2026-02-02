import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { routing } from "./src/i18n/routing";

const intlMiddleware = createMiddleware(routing);

function getCanonicalHost() {
  const raw =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://homedecorcalc.com";
  if (!raw) return null;
  try {
    return new URL(raw).host;
  } catch {
    return null;
  }
}

const CANONICAL_HOST = getCanonicalHost();
const LOCALES = new Set(routing.locales);
const DEFAULT_LOCALE = routing.defaultLocale;

function hasLocalePrefix(pathname: string) {
  const [, firstSegment] = pathname.split("/");
  return Boolean(firstSegment && LOCALES.has(firstSegment as (typeof routing.locales)[number]));
}

const LOCALE_EXEMPT_PATHS = new Set(["/opengraph-image", "/twitter-image"]);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (CANONICAL_HOST) {
    const host = request.headers.get("host");
    if (host && !host.endsWith(".vercel.app") && host !== CANONICAL_HOST) {
      const url = request.nextUrl.clone();
      url.host = CANONICAL_HOST;
      url.protocol = "https:";
      return NextResponse.redirect(url, 308);
    }
  }

  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/en";
    return NextResponse.redirect(url, 308);
  }

  if (
    !hasLocalePrefix(pathname) &&
    !LOCALE_EXEMPT_PATHS.has(pathname)
  ) {
    const url = request.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname}`;
    return NextResponse.redirect(url, 308);
  }

  const response = intlMiddleware(request);
  if (pathname.startsWith("/es") || pathname.startsWith("/zh-TW")) {
    response.headers.set("X-Robots-Tag", "noindex, follow");
  }
  return response;
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
