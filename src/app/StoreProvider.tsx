"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../redux/store";
import { updateApp } from "@/redux/slices/app";
import { getCurrentLang } from "@/helpers/language";
import { INFO_LANGS } from "@/helpers/constants";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    getCurrentLang().then((currentLang) => {
      storeRef.current?.dispatch(
        updateApp({ lang: currentLang, dir: INFO_LANGS[currentLang].dir })
      );
    });
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
