import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { getSiteUrl, SITE_NAME } from "@/lib/site";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Home improvement and home decor calculators and guides.",
  metadataBase: new URL(getSiteUrl()),
  openGraph: {
    type: "website",
    title: SITE_NAME,
    description: "Home improvement and home decor calculators and guides.",
    siteName: SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Home improvement and home decor calculators and guides.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const dynamic = "force-static";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = "en";
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN?.trim();
  const plausibleSrc =
    process.env.NEXT_PUBLIC_PLAUSIBLE_SRC?.trim() ||
    "https://plausible.io/js/script.js";
  const gaMeasurementId =
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() || null;
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="set-html-lang"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var path=location.pathname||'/';var seg=path.split('/')[1]||'en';if(seg==='es'||seg==='en'||seg==='zh-TW'){document.documentElement.lang=seg;}})();",
          }}
        />
        <GoogleAnalytics measurementId={gaMeasurementId} />
        {plausibleDomain ? (
          <Script
            defer
            data-domain={plausibleDomain}
            src={plausibleSrc}
            strategy="afterInteractive"
          />
        ) : null}
        {children}
      </body>
    </html>
  );
}
