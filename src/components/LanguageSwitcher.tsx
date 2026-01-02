"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { getAllLocales, getLocaleLabel } from "@/lib/site";
import type { Locale } from "@/i18n/routing";

function replaceLocale(pathname: string, locale: Locale) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${locale}`;
  parts[0] = locale;
  return `/${parts.join("/")}`;
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname() || `/${locale}`;
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }

    function onPointerDown(e: PointerEvent) {
      const el = containerRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) setOpen(false);
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative z-[70] text-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-md border border-zinc-200 bg-white px-2 py-1 text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
      >
        <span className="whitespace-nowrap">{getLocaleLabel(locale)}</span>
        <span aria-hidden="true" className="text-zinc-500 dark:text-zinc-400">
          ▾
        </span>
      </button>

      {open ? (
        <div
          role="menu"
          aria-label="Languages"
          className="absolute right-0 z-[80] mt-2 w-44 overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-lg dark:border-zinc-800 dark:bg-zinc-950"
        >
          {getAllLocales().map((l) => (
            <Link
              key={l}
              role="menuitem"
              href={replaceLocale(pathname, l)}
              aria-current={l === locale ? "page" : undefined}
              onClick={() => setOpen(false)}
              className={
                l === locale
                  ? "block bg-zinc-900 px-3 py-2 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "block px-3 py-2 text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900"
              }
            >
              {getLocaleLabel(l)}
            </Link>
          ))}
        </div>
      ) : null}
    </div>
  );
}
