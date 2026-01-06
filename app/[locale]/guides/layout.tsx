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

  return {};
}

export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
