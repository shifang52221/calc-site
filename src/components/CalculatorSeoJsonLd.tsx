import { getTranslations } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { getLocalizedUrl } from "@/lib/seo";
import {
  breadcrumbJsonLd,
  faqJsonLd,
  webApplicationJsonLd,
} from "@/lib/structuredData";
import { SeoJsonLd } from "@/components/SeoJsonLd";

export async function CalculatorSeoJsonLd({
  locale,
  pathname,
  title,
  description,
  faq,
}: {
  locale: Locale;
  pathname: string;
  title: string;
  description: string;
  faq: Array<{ q: string; a: string }>;
}) {
  const nav = await getTranslations("nav");

  const url = getLocalizedUrl(locale, pathname);
  const breadcrumbs = [
    { name: nav("home"), url: getLocalizedUrl(locale, "") },
    { name: nav("calculators"), url: getLocalizedUrl(locale, "/calculators") },
    { name: title, url },
  ];

  return (
    <>
      <SeoJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SeoJsonLd
        data={webApplicationJsonLd({
          name: title,
          description,
          url,
          inLanguage: locale,
        })}
      />
      {faq.length ? <SeoJsonLd data={faqJsonLd(faq)} /> : null}
    </>
  );
}
