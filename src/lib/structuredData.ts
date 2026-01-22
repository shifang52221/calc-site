export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function webApplicationJsonLd({
  name,
  description,
  url,
  inLanguage,
}: {
  name: string;
  description: string;
  url: string;
  inLanguage: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url,
    inLanguage,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "All",
    isAccessibleForFree: true,
  };
}

export function articleJsonLd({
  headline,
  description,
  url,
  inLanguage,
  publisherName,
}: {
  headline: string;
  description: string;
  url: string;
  inLanguage: string;
  publisherName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    inLanguage,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: { "@type": "Organization", name: publisherName },
    publisher: { "@type": "Organization", name: publisherName },
  };
}
