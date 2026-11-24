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

export interface NavLink {
  label: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface ClientLogo {
  name: string;
  src?: string;
  scale?: number; // 1 = normal, 2 = dobro do tamanho
}

export interface Service {
  icon: IconName;
  title: string;
  description: string;
  tags: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface HiringModel {
  title: string;
  description: string;
  idealFor: string;
}

export interface CaseStudy {
  sector: string;
  category: string;
  client: string;
  challenge: string;
  result: string;
  image?: string;
}

export interface DiagnosticQuestion {
  id: string;
  title: string;
  short: string;
  options: string[];
}

export type LanguageCode = 'pt-BR' | 'en' | 'es';

export interface Language {
  code: LanguageCode;
  short: string;
  name: string;
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
  tagline:
    'Software sob medida, dados e times dedicados para empresas que querem crescer com tecnologia.',
} as const;

export const navLinks: NavLink[] = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como trabalhamos', href: '#como-trabalhamos' },
  { label: 'Cases', href: '#cases' },
  { label: 'Sobre', href: '#sobre' },
];

export const languages: Language[] = [
  { code: 'pt-BR', short: 'PT', name: 'Português' },
  { code: 'en', short: 'EN', name: 'English' },
  { code: 'es', short: 'ES', name: 'Español' },
];

export const processSteps: ProcessStep[] = [
  { number: '01', title: 'Entender', description: 'Imersão no seu negócio e no problema real.' },
  { number: '02', title: 'Desenhar', description: 'Escopo, arquitetura e protótipo validados.' },
  { number: '03', title: 'Construir', description: 'Entregas curtas, com testes e acompanhamento.' },
  { number: '04', title: 'Evoluir', description: 'Suporte, melhorias e operação em nuvem.' },
];

// Arquivos em public/images/ — o caminho começa com /images/
export const clientLogos: ClientLogo[] = [
  { name: 'Nestlé', src: '/images/nestle.png' },
  { name: 'SKF', src: '/images/skf.jpeg' },
  { name: 'Dia', src: '/images/dia.png' },
  { name: 'Bradesco', src: '/images/bradesco.jpeg' },
  { name: 'Minerva Foods', src: '/images/minerva.png' },
  { name: 'Scania', src: '/images/scania.jpeg', scale: 2.5 },
];

export const services: Service[] = [
  {
    icon: 'mobile',
    title: 'Aplicativos mobile',
    description: 'Apps para iOS, Android e PWA, do protótipo à publicação nas lojas.',
    tags: ['PWA', 'iOS', 'Android'],
  },
  {
    icon: 'code',
    title: 'Sistemas web e SaaS',
    description: 'Plataformas na nuvem feitas para crescer junto com a sua operação.',
    tags: ['.NET', 'SQL', 'Cloud'],
  },
  {
    icon: 'chart',
    title: 'Dados e analytics',
    description: 'Organizamos seus dados e criamos painéis para decisões mais rápidas.',
    tags: ['Databricks', 'BI'],
  },
  {
    icon: 'cloud',
    title: 'Cloud e operações',
    description: 'Migração, hospedagem e monitoramento de ambientes seguros.',
    tags: ['Azure', 'AWS', 'DevOps'],
  },
  {
    icon: 'users',
    title: 'Times dedicados',
    description: 'Desenvolvedores Bitzar trabalhando junto com o seu time, no seu ritmo.',
    tags: ['Staffing', 'Squads'],
  },
  {
    icon: 'shield',
    title: 'Consultoria e governança',
    description: 'Diagnóstico técnico, testes e segurança para reduzir riscos.',
    tags: ['Arquitetura', 'QA', 'Segurança'],
  },
];

export const stats: Stat[] = [
  { value: '2016', label: 'ano de fundação' },
  { value: '100+', label: 'projetos entregues' },
  { value: '90+', label: 'especialistas no time' },
  { value: '15+', label: 'anos de experiência em tecnologia' },
];

export const hiringModels: HiringModel[] = [
  {
    title: 'Fábrica de software',
    description:
      'Você traz a necessidade, a Bitzar entrega o produto pronto, com escopo, prazo e investimento definidos.',
    idealFor: 'novos produtos e sistemas',
  },
  {
    title: 'Times dedicados',
    description:
      'Especialistas da Bitzar integrados ao seu time, com a gestão técnica que você precisar.',
    idealFor: 'acelerar um time existente',
  },
  {
    title: 'Consultoria técnica',
    description:
      'Avaliamos sistemas, dados e infraestrutura e entregamos um plano claro de melhoria.',
    idealFor: 'decidir antes de investir',
  },
];

export const cases: CaseStudy[] = [
  {
    sector: 'Alimentos e bebidas',
    category: 'Dados e analytics',
    client: 'Nestlé',
    image: '/images/nestle.png',
    challenge:
      'Vários data lakes na América Latina, cada país com governança e processos próprios, sem uma visão única dos dados.',
    result:
      'Plataforma regional unificada, com data lake central, governança padronizada e portal de dados self-service. Entregue em 1 ano por um time de 30 especialistas.',
  },
  {
    sector: 'Indústria',
    category: 'Sistema web',
    client: 'SKF',
    image: '/images/skf.jpeg',
    challenge:
      'Contratos de serviço controlados em planilhas, com cláusulas diferentes por cliente, medição e faturamento manuais, sujeitos a erro e retrabalho.',
    result:
      'Plataforma web sob medida (.NET, AWS e SQL Server) que substituiu todo o trabalho manual, com fluxos rápidos, seguros e rastreáveis e dados prontos para analytics.',
  },
];

export const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: 'desafio',
    title: 'Qual desafio você quer resolver?',
    short: 'Desafio',
    options: [
      'Criar um produto digital',
      'Modernizar um sistema',
      'Organizar meus dados',
      'Montar ou reforçar um time',
    ],
  },
  {
    id: 'estagio',
    title: 'Em que estágio está a ideia?',
    short: 'Estágio',
    options: [
      'Só a ideia, ainda no papel',
      'Já existe algo, mas precisa melhorar',
      'Está em uso e com problemas',
      'Ainda não sei dizer',
    ],
  },
  {
    id: 'prazo',
    title: 'Qual o prazo que você imagina?',
    short: 'Prazo',
    options: ['Até 3 meses', 'De 3 a 6 meses', 'Mais de 6 meses', 'Sem prazo definido'],
  },
  {
    id: 'porte',
    title: 'Qual o porte da sua empresa?',
    short: 'Porte',
    options: ['Startup', 'Pequena empresa', 'Média empresa', 'Grande empresa'],
  },
];