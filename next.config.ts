import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const ALL_LOCALES = ["en", "es", "zh-TW"] as const;
const INDEXED_LOCALES = (
  process.env.NEXT_PUBLIC_INDEXED_LOCALES?.trim() || "en"
)
  .split(",")
  .map((value) => value.trim())
  .filter(Boolean);
const INDEXED_LOCALES_NORMALIZED = ALL_LOCALES.filter((locale) =>
  INDEXED_LOCALES.includes(locale),
);
const NOINDEX_LOCALES =
  INDEXED_LOCALES_NORMALIZED.length > 0
    ? ALL_LOCALES.filter(
        (locale) => !INDEXED_LOCALES_NORMALIZED.includes(locale),
      )
    : ALL_LOCALES.filter((locale) => locale !== "en");

const nextConfig: NextConfig = {
  async headers() {
    const noindexHeader = { key: "X-Robots-Tag", value: "noindex" };
    const localeNoindexHeaders = NOINDEX_LOCALES.flatMap((locale) => [
      { source: `/${locale}`, headers: [noindexHeader] },
      { source: `/${locale}/:path*`, headers: [noindexHeader] },
    ]);
    return [
      {
        source: "/opengraph-image",
        headers: [noindexHeader],
      },
      {
        source: "/twitter-image",
        headers: [noindexHeader],
      },
      {
        source: "/:locale/opengraph-image",
        headers: [noindexHeader],
      },
      {
        source: "/:locale/twitter-image",
        headers: [noindexHeader],
      },
      ...localeNoindexHeaders,
    ];
  },
};

export default withNextIntl(nextConfig);
