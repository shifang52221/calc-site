import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { normalizeLocale } from "@/i18n/locale";
import { getAlternates } from "@/lib/seo";
import { getContactEmail } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: getAlternates(locale, "/contact"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = normalizeLocale(rawLocale);
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");
  const contactEmail = getContactEmail() ?? t("email");
  const introParagraphs = [t("intro.p1"), t("intro.p2")];

  return (
    <div className="mx-auto grid max-w-3xl gap-6">
      <h1 className="text-2xl font-semibold">{t("title")}</h1>
      <section className="grid gap-4 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        {introParagraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
        <div className="grid gap-2">
          <div className="font-semibold text-zinc-900 dark:text-zinc-100">
            {t("emailLabel")}
          </div>
          <a
            className="underline underline-offset-2 hover:text-zinc-900 dark:hover:text-zinc-100"
            href={`mailto:${contactEmail}`}
          >
            {contactEmail}
          </a>
          <div className="text-zinc-600 dark:text-zinc-400">
            {t("responseTime")}
          </div>
        </div>
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("whatToIncludeTitle")}
        </h2>
        <ul className="grid list-disc gap-2 pl-5">
          <li>{t("whatToInclude.i1")}</li>
          <li>{t("whatToInclude.i2")}</li>
          <li>{t("whatToInclude.i3")}</li>
          <li>{t("whatToInclude.i4")}</li>
          <li>{t("whatToInclude.i5")}</li>
        </ul>
      </section>

      <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
        <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
          {t("topicsTitle")}
        </h2>
        <ul className="grid list-disc gap-2 pl-5">
          <li>{t("topics.t1")}</li>
          <li>{t("topics.t2")}</li>
          <li>{t("topics.t3")}</li>
          <li>{t("topics.t4")}</li>
        </ul>
      </section>
    </div>
  );
}
