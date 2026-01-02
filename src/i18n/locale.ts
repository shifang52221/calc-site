import { routing, type Locale } from "./routing";

export function normalizeLocale(input: string | undefined): Locale {
  if (input && (routing.locales as readonly string[]).includes(input)) {
    return input as Locale;
  }
  return routing.defaultLocale;
}

