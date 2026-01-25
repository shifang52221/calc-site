import Link from "next/link";
import { useTranslations } from "next-intl";

import { routes } from "@/lib/routes";
import type { Locale } from "@/i18n/routing";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { LogoMark } from "@/components/Logo";

export function SiteHeader({ locale }: { locale: Locale }) {
  const t = useTranslations("nav");
  const site = useTranslations("site");

  return (
    <header className="relative z-[60] border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <Link
            href={routes.home(locale)}
            className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap text-sm font-semibold text-zinc-900 dark:text-zinc-100"
          >
            <LogoMark className="h-6 w-6" />
            {site("name")}
          </Link>
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
            <Link
              href={routes.calculators(locale)}
              className="whitespace-nowrap text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              {t("calculators")}
            </Link>
            <Link
              href={routes.guides(locale)}
              className="whitespace-nowrap text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              {t("guides")}
            </Link>
            <Link
              href={routes.resources(locale)}
              className="whitespace-nowrap text-zinc-700 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-zinc-100"
            >
              {t("resources")}
            </Link>
          </nav>
        </div>
        <div className="sm:self-auto">
          <LanguageSwitcher locale={locale} />
        </div>
      </div>
    </header>
  );
}
