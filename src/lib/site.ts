export const baseUrl = 'https://www.parcoducale.com';

export const locales = ['it', 'en', 'fr', 'zh-Hant'] as const;

export type SiteLocale = (typeof locales)[number];

export function isValidLocale(locale: string): locale is SiteLocale {
  return locales.includes(locale as SiteLocale);
}

export function getLocalePath(locale: string, path = '') {
  return `/${locale}${path}`;
}

export function getCanonicalUrl(locale: string, path = '') {
  return `${baseUrl}${getLocalePath(locale, path)}`;
}

export function getLanguageAlternates(path = '') {
  return {
    it: getCanonicalUrl('it', path),
    en: getCanonicalUrl('en', path),
    fr: getCanonicalUrl('fr', path),
    'zh-Hant': getCanonicalUrl('zh-Hant', path),
    'x-default': getCanonicalUrl('it', path),
  };
}
