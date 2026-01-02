"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { getStringParam, setStringParam } from "@/lib/queryParams";

type SetOptions = {
  replace?: boolean;
};

function buildUrl(pathname: string, params: URLSearchParams) {
  const qs = params.toString();
  return qs ? `${pathname}?${qs}` : pathname;
}

export function useQueryParamState(
  key: string,
  defaultValue: string,
): [value: string, setValue: (next: string, options?: SetOptions) => void] {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const valueFromUrl = useMemo(() => {
    if (!searchParams) return defaultValue;
    return getStringParam(searchParams, key) ?? defaultValue;
  }, [defaultValue, key, searchParams]);

  const [value, setValue] = useState(valueFromUrl);

  useEffect(() => {
    setValue(valueFromUrl);
  }, [valueFromUrl]);

  const set = useCallback(
    (next: string, options?: SetOptions) => {
      setValue(next);

      const replace = options?.replace ?? true;
      const params = searchParams
        ? setStringParam(
            searchParams,
            key,
            next === defaultValue ? null : next,
          )
        : new URLSearchParams();

      const url = buildUrl(pathname, params);
      if (replace) router.replace(url, { scroll: false });
      else router.push(url, { scroll: false });
    },
    [defaultValue, key, pathname, router, searchParams],
  );

  return [value, set];
}

