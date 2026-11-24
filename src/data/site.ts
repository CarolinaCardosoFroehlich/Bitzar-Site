export type IconName =
  | 'mobile'
  | 'code'
  | 'chart'
  | 'cloud'
  | 'users'
  | 'shield'
  | 'mail'
  | 'globe'
  | 'chevron-down'
  | 'check'
  | 'arrow-right'
  | 'chat'
  | 'send'
  | 'close';

export interface ClientLogo {
  name: string;
  src?: string;
  scale?: number; // 1 = normal, 2 = dobro do tamanho
}

export const company = {
  name: 'Bitzar',
  legalName: 'Bitzar Solutions',
  city: 'Marília/SP',
  foundedYear: 2016,
  address: 'Av. Hygino Muzzi Filho, 529',
  cityLine: 'Marília — SP',
  email: '[contato@bitzar.solutions]',
  careersEmail: '[trabalheconosco@bitzar.solutions]',
  cnpj: '[00.000.000/0000-00]',
} as const;

// Arquivos em public/images/ — o caminho começa com /images/
export const clientLogos: ClientLogo[] = [
  { name: 'Nestlé', src: '/images/nestle.png' },
  { name: 'SKF', src: '/images/skf.jpeg' },
  { name: 'Dia', src: '/images/dia.png' },
  { name: 'Bradesco', src: '/images/bradesco.jpeg' },
  { name: 'Minerva Foods', src: '/images/minerva.png' },
  { name: 'Scania', src: '/images/scania.jpeg', scale: 2.5 },
];