// @ts-check
import { defineConfig } from 'astro/config';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://bitzar.solutions',
  i18n: {
    // Português é o idioma padrão e fica na raiz ("/").
    // Inglês e espanhol ficam em "/en/" e "/es/".
    locales: ['pt', 'en', 'es'],
    defaultLocale: 'pt',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});