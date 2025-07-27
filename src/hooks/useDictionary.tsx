"use client";

import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDictionary<T = any>(locale: string, key?: string) {
  const [dict, setDict] = useState<T | null>(null);
  const [loadingTranslate, setLoadingTranslate] = useState(true);

  useEffect(() => {
    let active = true;
    setLoadingTranslate(true);

    const load = async () => {
      try {
        const dictionaryModule = await import(`../dictionaries/${locale}.json`);
        if (!active) return;

        const fullDict = dictionaryModule.default;

        const result = key ? fullDict?.[key] : fullDict;

        setDict(result ?? null);
      } catch (error) {
        console.error("Failed to load dictionary:", error);
        if (active) setDict(null);
      } finally {
        if (active) setLoadingTranslate(false);
      }
    };

    load();

    return () => {
      active = false;
    };
  }, [locale, key]);

  return { dict, loadingTranslate };
}
