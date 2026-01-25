import Link from "next/link";

import type { Locale } from "@/i18n/routing";
import type { GuideId } from "@/lib/guidesCatalog";
import { GUIDE_EXTRA_CONTENT_EN } from "@/lib/content/guidesEn";
import { routes } from "@/lib/routes";

export function GuideExtraContent({
  locale,
  guideId,
}: {
  locale: Locale;
  guideId: GuideId;
}) {
  if (locale !== "en") return null;

  const block = GUIDE_EXTRA_CONTENT_EN[guideId];
  if (!block) return null;

  return (
    <section className="grid gap-3 rounded-xl border border-zinc-200 bg-white p-5 text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
      <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
        {block.title}
      </h2>
      <div className="grid gap-2">
        {block.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      {block.bullets?.length ? (
        <ul className="grid list-disc gap-2 pl-5">
          {block.bullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
      <div className="text-xs text-zinc-500 dark:text-zinc-400">
        <Link
          href={routes.methodology(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          Methodology
        </Link>
        {" · "}
        <Link
          href={routes.resources(locale)}
          className="underline decoration-zinc-300 underline-offset-4 hover:text-zinc-900 dark:decoration-zinc-700 dark:hover:text-zinc-100"
        >
          Resources
        </Link>
      </div>
    </section>
  );
}
