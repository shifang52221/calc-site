import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { normalizeLocale } from "@/i18n/locale";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { CookieBanner } from "@/components/CookieBanner";
import { AdSenseScript } from "@/components/AdSenseScript";
import { ADSENSE_CLIENT } from "@/lib/adsense";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className="flex min-h-screen min-h-[100dvh] flex-col bg-zinc-50 text-zinc-900 dark:bg-black dark:text-zinc-100">
        <SiteHeader locale={locale} />
        <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
          {children}
        </main>
        <SiteFooter locale={locale} />
        <CookieBanner />
        <AdSenseScript clientId={ADSENSE_CLIENT} />
      </div>
    </NextIntlClientProvider>
  );
}
