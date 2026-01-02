"use client";

import Script from "next/script";
import { useEffect, useMemo, useState } from "react";

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

export function AdSenseScript({ clientId }: { clientId: string }) {
  const [consent, setConsent] = useState<ConsentValue | null>(() => {
    if (typeof document === "undefined") return null;
    return parseConsentCookie(document.cookie);
  });

  useEffect(() => {
    function onConsentChanged() {
      setConsent(parseConsentCookie(document.cookie));
    }

    window.addEventListener("consent-changed", onConsentChanged);
    return () => window.removeEventListener("consent-changed", onConsentChanged);
  }, []);

  const shouldLoad = useMemo(() => {
    return Boolean(clientId) && consent === "all";
  }, [clientId, consent]);

  if (!shouldLoad) return null;

  return (
    <Script
      async
      src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${encodeURIComponent(
        clientId,
      )}`}
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
}
