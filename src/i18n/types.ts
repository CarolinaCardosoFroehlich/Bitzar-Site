import type { IconName } from '@/data/site';

export interface NavLink {
  label: string;
  href: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
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
  /** Igual em todos os idiomas: é o que liga as respostas entre eles. */
  id: string;
  title: string;
  short: string;
  options: string[];
}

/** Textos do diagnóstico. Também são usados pelo script que roda no navegador. */
export interface DiagnosticTexts {
  eyebrow: string;
  /** Use {total} para o número de perguntas. */
  title: string;
  lead: string;
  progressLabel: string;
  /** Use {current} e {total}. */
  stepLabel: string;
  doneLabel: string;
  back: string;
  next: string;
  seeSummary: string;
  chooseOption: string;
  summaryTitle: string;
  nameLabel: string;
  emailLabel: string;
  submit: string;
  sending: string;
  restart: string;
  validationError: string;
  sendError: string;
  sentTitle: string;
  sentText: string;
  startOver: string;
  questions: DiagnosticQuestion[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
  };
  header: {
    homeLabel: string;
    mainNavLabel: string;
    links: NavLink[];
    cta: string;
    openMenu: string;
    closeMenu: string;
    /** Use {language} para o nome do idioma atual. */
    languageButton: string;
  };
  hero: {
    since: string;
    titleBefore: string;
    titleHighlight: string;
    titleAfter: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    processTitle: string;
    steps: ProcessStep[];
  };
  clients: {
    title: string;
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    techLabel: string;
    items: Service[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    stats: Stat[];
  };
  howWeWork: {
    eyebrow: string;
    title: string;
    lead: string;
    modelLabel: string;
    idealForLabel: string;
    items: HiringModel[];
  };
  cases: {
    eyebrow: string;
    title: string;
    seeAll: string;
    challengeLabel: string;
    resultLabel: string;
    /** Use {client} para o nome do cliente. */
    logoAlt: string;
    imagePlaceholder: string;
    items: CaseStudy[];
  };
  diagnostic: DiagnosticTexts;
  footer: {
    tagline: string;
    navTitle: string;
    contactTitle: string;
    links: NavLink[];
    privacy: string;
  };
}