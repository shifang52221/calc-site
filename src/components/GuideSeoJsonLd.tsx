import { getTranslations } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { getLocalizedUrl } from "@/lib/seo";
import { SITE_NAME } from "@/lib/site";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  faqJsonLd,
} from "@/lib/structuredData";
import { SeoJsonLd } from "@/components/SeoJsonLd";

export async function GuideSeoJsonLd({
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
    { name: nav("guides"), url: getLocalizedUrl(locale, "/guides") },
    { name: title, url },
  ];

  return (
    <>
      <SeoJsonLd data={breadcrumbJsonLd(breadcrumbs)} />
      <SeoJsonLd
        data={articleJsonLd({
          headline: title,
          description,
          url,
          inLanguage: locale,
          publisherName: SITE_NAME,
        })}
      />
      {faq.length ? <SeoJsonLd data={faqJsonLd(faq)} /> : null}
    </>
  );
}

