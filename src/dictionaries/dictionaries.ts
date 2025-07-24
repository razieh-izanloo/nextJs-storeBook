
const dictionaries: Record<string, () => Promise<any>> = {
  en: () => import('./en.json').then((m) => m.default),
}

export const getDictionary = async (locale: 'en' | 'fa') =>
  dictionaries[locale]?.() ?? dictionaries['en']()
