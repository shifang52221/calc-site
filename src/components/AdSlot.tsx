"use client";

import { useEffect, useId } from "react";

import { ADSENSE_CLIENT, isAdSenseEnabled } from "@/lib/adsense";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({
  slot,
  minHeightClassName = "min-h-[250px] sm:min-h-[280px]",
}: {
  slot: string;
  minHeightClassName?: string;
}) {
  const id = useId();
  const enabled = isAdSenseEnabled() && Boolean(slot);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // Ignore ad initialization failures (blocked scripts, etc.).
    }
  }, [enabled, id]);

  if (!enabled) {
    return null;
  }

  return (
    <div
      className={`rounded-xl border border-zinc-200 bg-white p-3 dark:border-zinc-800 dark:bg-zinc-950 ${minHeightClassName}`}
      aria-label="Advertisement"
    >
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
