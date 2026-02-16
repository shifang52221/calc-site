import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  async headers() {
    const noindexHeader = { key: "X-Robots-Tag", value: "noindex" };
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
    ];
  },
};

export default withNextIntl(nextConfig);
