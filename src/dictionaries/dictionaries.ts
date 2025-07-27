import { getCurrentLang } from "@/helpers/language";

export const getDictionary = async (section: string) => {
  const currentLang = (await getCurrentLang()) ?? "en";
  const dict = await import(`./${currentLang}.json`);
  return dict.default[section];
};
