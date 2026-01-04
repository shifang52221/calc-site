"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

type ConsentValue = "all" | "essential";

const CONSENT_COOKIE = "CH_CONSENT";
const CONSENT_VERSION = "v1";

function parseConsentCookie(cookieString: string): ConsentValue | null {
  const parts = cookieString.split(";").map((p) => p.trim());
  const entry = parts.find((p) => p.startsWith(`${CONSENT_COOKIE}=`));
  if (!entry) return null;
  const value = decodeURIComponent(entry.split("=").slice(1).join("="));
  if (value === `${CONSENT_VERSION}:all`) return "all";
  if (value === `${CONSENT_VERSION}:essential`) return "essential";
  return null;
}

function buildPagePath(pathname: string, searchParams: URLSearchParams | null) {
  const query = searchParams?.toString();
  if (!query) return pathname;
  return `${pathname}?${query}`;
}

export function GoogleAnalytics({
  measurementId,
}: {
  measurementId: string | null | undefined;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const pagePath = useMemo(
    () => buildPagePath(pathname, searchParams),
    [pathname, searchParams],
  );

  const [consent, setConsent] = useState<ConsentValue | null>(null);

  useEffect(() => {
    const existing = parseConsentCookie(document.cookie);
    Promise.resolve().then(() => setConsent(existing));
    function onConsentChanged(event: Event) {
      const detail = (event as CustomEvent).detail as
        | { consent?: ConsentValue }
        | undefined;
      if (detail?.consent) setConsent(detail.consent);
      else setConsent(parseConsentCookie(document.cookie));
    }
    window.addEventListener("consent-changed", onConsentChanged);
    return () => window.removeEventListener("consent-changed", onConsentChanged);
  }, []);

  const id = measurementId?.trim();
  const canLoad = Boolean(id) && consent === "all";

  useEffect(() => {
    if (!canLoad) return;
    if (typeof window.gtag !== "function") return;
    window.gtag("config", id, { page_path: pagePath });
  }, [canLoad, id, pagePath]);

  if (!canLoad) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('js', new Date());
gtag('config', '${id}', { anonymize_ip: true });`}
      </Script>
    </>
  );
}
