import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);

  if (locale !== "en") {
    return {
      robots: {
        index: false,
        follow: true,
        googleBot: { index: false, follow: true },
      },
    };
  }

  return {};
}

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

