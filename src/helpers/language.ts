"use server";

import { cookies } from "next/headers";
import {  LANG_COOKIE_NAME, support_langs } from "./constants";


export const getCurrentLang = async() => {
  const cookieStore = await cookies();
  const localeCookie = cookieStore.get(LANG_COOKIE_NAME)?.value;
  const currentLang = support_langs.find(item => item === localeCookie) ?? "en";
  return currentLang;
}