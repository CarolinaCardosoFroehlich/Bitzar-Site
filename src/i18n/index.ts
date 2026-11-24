import { defaultLocale, isLocale, type Locale } from './config';
import type { Dictionary } from './types';
import { pt } from './dictionaries/pt';
import { en } from './dictionaries/en';
import { es } from './dictionaries/es';

export * from './config';
export { format } from './format';
export type { Dictionary } from './types';

const dictionaries: Record<Locale, Dictionary> = { pt, en, es };

/** Retorna todos os textos de um idioma. */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

/** Converte o parâmetro da rota (undefined, "en", "es") em um idioma válido. */
export function resolveLocale(param: string | undefined): Locale {
  return isLocale(param) ? param : defaultLocale;
}