import createMiddleware from "next-intl/middleware";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { routing } from "./src/i18n/routing";

const intlMiddleware = createMiddleware(routing);

function getCanonicalHost() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (!raw) return null;
  try {
    return new URL(raw).host;
  } catch {
    return null;
  }
}

const CANONICAL_HOST = getCanonicalHost();

export default function middleware(request: NextRequest) {
  if (CANONICAL_HOST) {
    const host = request.headers.get("host");
    if (host && !host.endsWith(".vercel.app") && host !== CANONICAL_HOST) {
      const url = request.nextUrl.clone();
      url.host = CANONICAL_HOST;
      url.protocol = "https:";
      return NextResponse.redirect(url, 308);
    }
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
