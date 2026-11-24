// "Cérebro" do assistente: encontra a pergunta frequente que mais combina
// com o que a pessoa digitou. Não usa IA: compara palavras-chave.
//
// Como funciona:
//   1. O texto é normalizado: minúsculas, sem acentos e sem pontuação.
//      "Quanto CUSTA um app?" → "quanto custa um app"
//   2. Cada pergunta frequente ganha pontos pelas palavras-chave encontradas:
//      - palavra exata ("app")              → 1 ponto
//      - prefixo com * ("custa*")           → 1 ponto (custa, custam…)
//      - expressão ("quanto sai")           → 1 ponto por palavra (2 aqui)
//   3. Vence a pergunta com mais pontos. Com zero pontos, não há resposta
//      e o chat mostra a mensagem de "fale com um especialista".

import type { ChatFaq } from '@/i18n/types';

/** Minúsculas, sem acentos e sem pontuação (mantém "." para ".net"). */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9.\s]/g, ' ')
    .replace(/\.(?=\s|$)/g, ' ') // ponto final de frase não conta
    .replace(/\s+/g, ' ')
    .trim();
}

function scoreKeyword(keyword: string, text: string, words: string[]): number {
  const isPrefix = keyword.endsWith('*');
  const term = normalize(isPrefix ? keyword.slice(0, -1) : keyword);
  if (!term) return 0;

  // Expressão com mais de uma palavra: procura a frase inteira
  if (term.includes(' ')) {
    return ` ${text} `.includes(` ${term} `) ? term.split(' ').length : 0;
  }

  if (isPrefix) return words.some((word) => word.startsWith(term)) ? 1 : 0;
  return words.includes(term) ? 1 : 0;
}

/** Retorna a pergunta frequente que melhor responde ao texto, ou null. */
export function findAnswer(input: string, faqs: ChatFaq[]): ChatFaq | null {
  const text = normalize(input);
  if (!text) return null;
  const words = text.split(' ');

  let best: ChatFaq | null = null;
  let bestScore = 0;

  for (const faq of faqs) {
    const score = faq.keywords.reduce((sum, keyword) => sum + scoreKeyword(keyword, text, words), 0);
    if (score > bestScore) {
      best = faq;
      bestScore = score;
    }
  }

  return best;
}