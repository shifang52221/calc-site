"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

export function CopyLinkButton() {
  const t = useTranslations("common");
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(window.location.href);
          setStatus("copied");
          window.setTimeout(() => setStatus("idle"), 1500);
        } catch {
          setStatus("error");
          window.setTimeout(() => setStatus("idle"), 2000);
        }
      }}
      className="rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900 hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100 dark:hover:bg-zinc-900"
    >
      {status === "copied"
        ? t("copied")
        : status === "error"
          ? t("copyFailed")
          : t("copyLink")}
    </button>
  );
}

