import type { Dictionary } from '../types';

// English. Items in [brackets] are placeholders.
export const en: Dictionary = {
  meta: {
    title: 'Bitzar — Custom software for businesses',
    description:
      'Bitzar is a software house based in Marília, Brazil, building mobile apps, web systems, data solutions and dedicated teams for companies of every size.',
  },

  header: {
    homeLabel: 'Bitzar Solutions — home',
    mainNavLabel: 'Main',
    links: [
      { label: 'Services', href: '#servicos' },
      { label: 'How we work', href: '#como-trabalhamos' },
      { label: 'Case studies', href: '#cases' },
      { label: 'About', href: '#sobre' },
    ],
    cta: 'Start an assessment',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageButton: 'Change language (current: {language})',
  },

  hero: {
    since: 'Since',
    titleBefore: 'Custom software for companies that want to',
    titleHighlight: 'grow with technology',
    titleAfter: '.',
    lead: 'We are Bitzar, a software house building mobile apps, web systems, data solutions and dedicated teams for companies of every size.',
    primaryCta: 'Take the free assessment',
    secondaryCta: 'Explore our services',
    processTitle: 'From problem to software in production',
    steps: [
      { number: '01', title: 'Understand', description: 'A deep dive into your business and the real problem.' },
      { number: '02', title: 'Design', description: 'Validated scope, architecture and prototype.' },
      { number: '03', title: 'Build', description: 'Short delivery cycles, with testing and follow-up.' },
      { number: '04', title: 'Evolve', description: 'Support, improvements and cloud operations.' },
    ],
  },

  clients: {
    title: 'For startups, small businesses and large corporations',
  },

  services: {
    eyebrow: 'Services',
    title: 'What Bitzar does for your company',
    intro: 'Six areas, one team. No need to hire different vendors for each stage.',
    techLabel: 'Technologies:',
    items: [
      {
        icon: 'mobile',
        title: 'Mobile apps',
        description: 'iOS, Android and PWA apps, from prototype to app store release.',
        tags: ['PWA', 'iOS', 'Android'],
      },
      {
        icon: 'code',
        title: 'Web systems and SaaS',
        description: 'Cloud platforms built to grow with your operation.',
        tags: ['.NET', 'SQL', 'Cloud'],
      },
      {
        icon: 'chart',
        title: 'Data and analytics',
        description: 'We organize your data and build dashboards for faster decisions.',
        tags: ['Databricks', 'BI'],
      },
      {
        icon: 'cloud',
        title: 'Cloud and operations',
        description: 'Migration, hosting and monitoring of secure environments.',
        tags: ['Azure', 'AWS', 'DevOps'],
      },
      {
        icon: 'users',
        title: 'Dedicated teams',
        description: 'Bitzar developers working alongside your team, at your pace.',
        tags: ['Staffing', 'Squads'],
      },
      {
        icon: 'shield',
        title: 'Consulting and governance',
        description: 'Technical assessment, testing and security to reduce risk.',
        tags: ['Architecture', 'QA', 'Security'],
      },
    ],
  },

  about: {
    eyebrow: 'About Bitzar',
    title: 'Real technology, built close to you.',
    paragraphs: [
      "Bitzar was founded in Marília in 2016 to solve a simple problem: companies need reliable software, but they don't always find a partner who understands the business before writing the first line of code.",
      'Today we serve clients of all sizes with a team that follows each project from start to finish, with direct communication and no middlemen.',
    ],
    stats: [
      { value: '2016', label: 'year founded' },
      { value: '100+', label: 'projects delivered' },
      { value: '90+', label: 'specialists on the team' },
      { value: '15+', label: 'years of experience in technology' },
    ],
  },

  howWeWork: {
    eyebrow: 'How we work',
    title: 'Three ways to work with Bitzar',
    lead: "Choose the model that fits your company's current stage. If you're not sure, the assessment below can help.",
    modelLabel: 'Model',
    idealForLabel: 'Best for:',
    items: [
      {
        title: 'Software factory',
        description:
          'You bring the need, Bitzar delivers the finished product, with defined scope, timeline and budget.',
        idealFor: 'new products and systems',
      },
      {
        title: 'Dedicated teams',
        description:
          'Bitzar specialists integrated into your team, with as much technical management as you need.',
        idealFor: 'scaling up an existing team',
      },
      {
        title: 'Technical consulting',
        description:
          'We assess your systems, data and infrastructure and deliver a clear improvement plan.',
        idealFor: 'deciding before investing',
      },
    ],
  },

  cases: {
    eyebrow: 'Case studies',
    title: 'Projects already up and running',
    seeAll: 'See all case studies →',
    challengeLabel: 'Challenge:',
    resultLabel: 'Result:',
    logoAlt: '{client} logo',
    imagePlaceholder: '[PROJECT IMAGE]',
    items: [
      {
        sector: 'Food and beverage',
        category: 'Data and analytics',
        client: 'Nestlé',
        image: '/images/nestle.png',
        challenge:
          'Several data lakes across Latin America, each country with its own governance and processes, and no single view of the data.',
        result:
          'A unified regional platform with a central data lake, standardized governance and a self-service data portal. Delivered in 1 year by a team of 30 specialists.',
      },
      {
        sector: 'Industry',
        category: 'Web system',
        client: 'SKF',
        image: '/images/skf.jpeg',
        challenge:
          'Service contracts managed in spreadsheets, with different clauses per client and manual measurement and billing, prone to errors and rework.',
        result:
          'A custom web platform (.NET, AWS and SQL Server) that replaced all manual work, with fast, secure and traceable workflows and data ready for analytics.',
      },
    ],
  },

  diagnostic: {
    eyebrow: 'Free assessment',
    title: 'Not sure where to start? Answer {total} questions.',
    lead: 'It takes less than a minute. With your answers, Bitzar comes to the first conversation already understanding your situation.',
    progressLabel: 'Assessment progress',
    stepLabel: 'Question {current} of {total}',
    doneLabel: 'Completed',
    back: '← Back',
    next: 'Continue →',
    seeSummary: 'See summary →',
    chooseOption: 'Choose an option to continue',
    summaryTitle: 'Your summary',
    nameLabel: 'Name',
    emailLabel: 'Email',
    submit: 'Send to Bitzar',
    sending: 'Sending…',
    restart: 'Restart assessment',
    validationError: 'Please enter your name and a valid email address.',
    sendError: "We couldn't send your answers right now. Please try again in a moment.",
    sentTitle: 'We received your assessment!',
    sentText:
      'A Bitzar specialist will contact you within 1 business day to talk about your project.',
    startOver: 'Start over',
    questions: [
      {
        id: 'desafio',
        title: 'What challenge do you want to solve?',
        short: 'Challenge',
        options: [
          'Build a digital product',
          'Modernize a system',
          'Organize my data',
          'Build or strengthen a team',
        ],
      },
      {
        id: 'estagio',
        title: 'What stage is the idea at?',
        short: 'Stage',
        options: [
          'Just an idea, still on paper',
          'Something exists, but it needs improvement',
          "It's in use and having problems",
          "I'm not sure yet",
        ],
      },
      {
        id: 'prazo',
        title: 'What timeline do you have in mind?',
        short: 'Timeline',
        options: ['Up to 3 months', '3 to 6 months', 'More than 6 months', 'No set timeline'],
      },
      {
        id: 'porte',
        title: 'What size is your company?',
        short: 'Company size',
        options: ['Startup', 'Small business', 'Mid-sized company', 'Large company'],
      },
    ],
  },

  footer: {
    tagline:
      'Custom software, data and dedicated teams for companies that want to grow with technology.',
    navTitle: 'Navigation',
    contactTitle: 'Contact',
    links: [
      { label: 'Services', href: '#servicos' },
      { label: 'How we work', href: '#como-trabalhamos' },
      { label: 'Case studies', href: '#cases' },
      { label: 'Assessment', href: '#diagnostico' },
    ],
    privacy: 'Privacy Policy',
  },
};