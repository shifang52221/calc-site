import Link from "next/link";

import type { Locale } from "@/i18n/routing";
import { routes } from "@/lib/routes";

export function ReviewedBy({ locale }: { locale: Locale }) {
  if (locale !== "en") return null;

  return (
    <section className="rounded-xl border border-zinc-200 bg-white p-4 text-sm text-zinc-700 shadow-sm dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
      <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        Reviewed by Ethan Parker
      </h2>
      <p className="mt-1">
        Ethan Parker, Editor and Calculator Methodology Lead at HomeDecorCalc,
        reviews calculator assumptions, unit conversions, correction reports,
        and methodology updates for core planning pages.
      </p>
      <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400">
        <Link
          href={routes.methodology(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          Methodology
        </Link>
        {" | "}
        <Link
          href={routes.editorialPolicy(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          Editorial policy
        </Link>
      </div>
    </section>
  );
}
