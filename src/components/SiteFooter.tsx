import Link from "next/link";
import { useTranslations } from "next-intl";

import { routes } from "@/lib/routes";
import type { Locale } from "@/i18n/routing";
import { CookiePreferencesButton } from "@/components/CookiePreferencesButton";

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = useTranslations("nav");
  const site = useTranslations("site");
  return (
    <footer className="mt-auto border-t border-zinc-200 py-8 text-sm text-zinc-600 dark:border-zinc-800 dark:text-zinc-400">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-3">
          <Link href={routes.guides(locale)} className="hover:text-zinc-900">
            {t("guides")}
          </Link>
          <Link href={routes.privacy(locale)} className="hover:text-zinc-900">
            {t("privacy")}
          </Link>
          <Link href={routes.terms(locale)} className="hover:text-zinc-900">
            {t("terms")}
          </Link>
          <Link href={routes.about(locale)} className="hover:text-zinc-900">
            {t("about")}
          </Link>
          <Link href={routes.contact(locale)} className="hover:text-zinc-900">
            {t("contact")}
          </Link>
          <CookiePreferencesButton />
        </div>
        <div>
          © {new Date().getFullYear()} {site("name")}
        </div>
      </div>
    </footer>
  );
}
