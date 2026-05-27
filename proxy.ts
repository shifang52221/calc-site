import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { routing } from "./src/i18n/routing";
import {
  getCanonicalHostFromSiteUrl,
  resolveReviewRedirect,
} from "./src/lib/urlPolicy";

const intlMiddleware = createMiddleware(routing);

function getCanonicalHost() {
  return getCanonicalHostFromSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ||
      process.env.SITE_URL ||
      "https://homedecorcalc.com",
  );
}

const CANONICAL_HOST = getCanonicalHost();

export default function middleware(request: NextRequest) {
  const redirect = resolveReviewRedirect({
    canonicalHost: CANONICAL_HOST,
    host: request.headers.get("host"),
    pathname: request.nextUrl.pathname,
    protocol: request.nextUrl.protocol,
    search: request.nextUrl.search,
  });

  if (redirect) {
    return NextResponse.redirect(redirect, 308);
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
