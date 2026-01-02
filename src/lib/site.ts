import { routing, type Locale } from "@/i18n/routing";

export const SITE_NAME = "HomeDecorCalc";

export function getSiteUrl() {
  const url = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL;
  if (!url) return "https://homedecorcalc.com";
  return url.replace(/\/+$/, "");
}

export function getContactEmail() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim();
  if (!email) return null;
  return email;
}

export function getLocaleLabel(locale: Locale) {
  switch (locale) {
    case "en":
      return "English";
    case "es":
      return "Español";
    case "zh-TW":
      return "繁體中文";
    default:
      return locale;
  }
}

export function getAllLocales() {
  return routing.locales as readonly Locale[];
}
