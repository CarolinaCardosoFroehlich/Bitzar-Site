export const locales = ['pt', 'en', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'pt';

export interface LocaleInfo {
  /** Sigla mostrada no botão do header. */
  short: string;
  /** Nome do idioma escrito no próprio idioma. */
  name: string;
  /** Valor do atributo <html lang>. */
  htmlLang: string;
  /** Valor do og:locale (redes sociais). */
  ogLocale: string;
}

export const localeInfo: Record<Locale, LocaleInfo> = {
  pt: { short: 'PT', name: 'Português', htmlLang: 'pt-BR', ogLocale: 'pt_BR' },
  en: { short: 'EN', name: 'English', htmlLang: 'en', ogLocale: 'en_US' },
  es: { short: 'ES', name: 'Español', htmlLang: 'es', ogLocale: 'es_ES' },
};

/** Chave usada no localStorage para lembrar o idioma escolhido. */
export const LOCALE_STORAGE_KEY = 'bitzar:lang';

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

/** Endereço da home em cada idioma: "/", "/en/", "/es/". */
export function localePath(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}