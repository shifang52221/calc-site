import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { routes } from "@/lib/routes";
import { getAlternates } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("privacyPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/privacy"),
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("privacyPage");
  const nav = await getTranslations("nav");

  const introParagraphs = [t("intro.p1"), t("intro.p2")];
  const dataParagraphs = [t("dataBody.p1"), t("dataBody.p2")];
  const cookiesParagraphs = [t("cookiesBody.p1"), t("cookiesBody.p2")];
  const adsParagraphs = [t("adsBody.p1"), t("adsBody.p2")];
  const choicesParagraphs = [t("yourChoicesBody.p1"), t("yourChoicesBody.p2")];

  return (
    <div className="mx-auto grid max-w-3xl gap-6">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>

      <section className="grid gap-4 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        {introParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("dataTitle")}
        </h2>
        {dataParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("cookiesTitle")}
        </h2>
        {cookiesParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("adsTitle")}
        </h2>
        {adsParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("yourChoicesTitle")}
        </h2>
        {choicesParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}

        <h2 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("contactTitle")}
        </h2>
        <p>{t("contactBody")}</p>
      </section>

      <div className="text-xs text-zinc-500 dark:text-zinc-400">
        <Link
          href={routes.contact(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          {nav("contact")}
        </Link>
        {" · "}
        <Link
          href={routes.terms(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          {nav("terms")}
        </Link>
        {" · "}
        <Link
          href={routes.methodology(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          {nav("methodology")}
        </Link>
        {" · "}
        <Link
          href={routes.editorialPolicy(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          {nav("editorialPolicy")}
        </Link>
      </div>
    </div>
  );
}
