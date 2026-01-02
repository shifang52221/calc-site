export const routing = {
  locales: ["en", "es", "zh-TW"],
  defaultLocale: "en",
} as const;

export type Locale = (typeof routing.locales)[number];
