"use client";

import { useTranslations } from "next-intl";

export function CookiePreferencesButton() {
  const t = useTranslations("consent");

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("open-cookie-banner"))}
      className="hover:text-zinc-900 dark:hover:text-zinc-100"
    >
      {t("preferences")}
    </button>
  );
}

