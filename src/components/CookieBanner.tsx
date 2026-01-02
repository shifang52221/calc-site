"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

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

function setConsentCookie(value: ConsentValue) {
  const maxAgeDays = 180;
  const maxAge = maxAgeDays * 24 * 60 * 60;
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(
    `${CONSENT_VERSION}:${value}`,
  )}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
}

export function CookieBanner() {
  const t = useTranslations("consent");
  const [isOpen, setIsOpen] = useState(false);
  const [consent, setConsent] = useState<ConsentValue | null>(null);

  const hasDecision = useMemo(() => consent !== null, [consent]);

  useEffect(() => {
    const existing = parseConsentCookie(document.cookie);
    Promise.resolve().then(() => {
      setConsent(existing);
      setIsOpen(!existing);
    });
  }, []);

  useEffect(() => {
    function onOpen() {
      setIsOpen(true);
    }
    window.addEventListener("open-cookie-banner", onOpen);
    return () => window.removeEventListener("open-cookie-banner", onOpen);
  }, []);

  useEffect(() => {
    if (!hasDecision) return;
    document.documentElement.dataset.consent = consent ?? "unknown";
  }, [consent, hasDecision]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white/95 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/95">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="grid gap-1 text-sm">
          <div className="font-semibold text-zinc-900 dark:text-zinc-100">
            {t("title")}
          </div>
          <div className="text-zinc-600 dark:text-zinc-400">{t("body")}</div>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => {
              setConsentCookie("essential");
              setConsent("essential");
              window.dispatchEvent(
                new CustomEvent("consent-changed", {
                  detail: { consent: "essential" },
                }),
              );
              setIsOpen(false);
            }}
            className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
          >
            {t("reject")}
          </button>
          <button
            type="button"
            onClick={() => {
              setConsentCookie("all");
              setConsent("all");
              window.dispatchEvent(
                new CustomEvent("consent-changed", { detail: { consent: "all" } }),
              );
              setIsOpen(false);
            }}
            className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
          >
            {t("accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
