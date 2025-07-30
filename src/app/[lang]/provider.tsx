"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../../redux/store";
import { updateApp } from "@/redux/slices/app";
import { INFO_LANGS, LANG_COOKIE_NAME } from "@/helpers/constants";
import { cookieValue } from "@/helpers/cookie";
import { calculateTotalPrice, initialStateCart } from "@/redux/slices/cart";

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
    const lang = cookieValue(LANG_COOKIE_NAME) ?? "en";
    const dir = INFO_LANGS[lang].dir;

    storeRef.current?.dispatch(updateApp({ lang, dir }));

    const storedCart = localStorage.getItem("cart");
    console.log(storedCart)
    if (storedCart) {
      const parsed = JSON.parse(storedCart);
      storeRef.current?.dispatch(
        initialStateCart({
          items: parsed,
          totalPrice: calculateTotalPrice(parsed),
        })
      );
    }
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
