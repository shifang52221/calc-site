import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("termsPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/terms"),
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("termsPage");

  const introParagraphs = [t("intro.p1"), t("intro.p2")];
  const useParagraphs = [t("useBody.p1"), t("useBody.p2")];
  const warrantyParagraphs = [t("warrantyBody.p1"), t("warrantyBody.p2")];
  const liabilityParagraphs = [t("liabilityBody.p1"), t("liabilityBody.p2")];
  const thirdPartyParagraphs = [t("thirdPartyBody.p1"), t("thirdPartyBody.p2")];
  const ipParagraphs = [t("ipBody.p1"), t("ipBody.p2")];
  const terminationParagraphs = [
    t("terminationBody.p1"),
    t("terminationBody.p2"),
  ];
  const changesParagraphs = [t("changesBody.p1"), t("changesBody.p2")];

  return (
    <div className="mx-auto grid max-w-3xl gap-6">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      <div className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        {introParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("useTitle")}
        </h2>
        {useParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("warrantyTitle")}
        </h2>
        {warrantyParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("liabilityTitle")}
        </h2>
        {liabilityParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("thirdPartyTitle")}
        </h2>
        {thirdPartyParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("ipTitle")}
        </h2>
        {ipParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("terminationTitle")}
        </h2>
        {terminationParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("changesTitle")}
        </h2>
        {changesParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}
