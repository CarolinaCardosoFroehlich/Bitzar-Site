import type { Dictionary } from '../types';

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

  chat: {
    openLabel: 'Open chat with the assistant',
    closeLabel: 'Close chat',
    title: 'Bitzar Assistant',
    status: 'Online now',
    greeting:
      "Hi! I'm Bitzar's virtual assistant. I can answer questions about our services, timelines and how to start a project.",
    suggestionsLabel: 'Frequently asked questions',
    placeholder: 'Type your question…',
    inputLabel: 'Your question',
    send: 'Send',
    typing: 'Assistant is typing…',
    disclaimer: 'Virtual assistant with automated answers.',
    fallback:
      "I don't know how to answer that yet. To help you better, talk to one of our specialists: just take the assessment or send us an email.",
    fallbackActions: [
      { label: 'Talk to a specialist', href: '#diagnostico' },
      { label: 'Send an email', href: 'mailto:{email}' },
    ],
    faqs: [
      {
        id: 'servicos',
        question: 'What services do you offer?',
        suggested: true,
        keywords: ['service*', 'offer*', 'what do you do', 'what does bitzar do', 'solution*', 'work with'],
        answer:
          'Bitzar works in six areas:\n• Mobile apps (iOS, Android and PWA)\n• Web systems and SaaS\n• Data and analytics\n• Cloud and operations\n• Dedicated teams\n• Consulting and governance',
        actions: [{ label: 'See services', href: '#servicos' }],
      },
      {
        id: 'preco',
        question: 'How much does a project cost?',
        suggested: true,
        keywords: ['price*', 'pricing', 'cost*', 'how much', 'budget*', 'quote', 'fee*', 'expensive', 'cheap', 'rate*'],
        answer:
          'The price depends on the size and complexity of the project, so every proposal is tailor-made.\n\nThe fastest way to get an estimate is the free assessment: 4 questions, and our team gets back to you within 1 business day.',
        actions: [{ label: 'Take the assessment', href: '#diagnostico' }],
      },
      {
        id: 'prazo',
        question: 'How long does a project take?',
        suggested: true,
        keywords: ['how long', 'how much time', 'timeline*', 'deadline*', 'deliver*', 'duration', 'turnaround'],
        answer:
          'It depends on the scope. We work in short delivery cycles, so you follow the results from the start, and the overall timeline is agreed with you in the proposal.\n\nIn the assessment you can already tell us the timeline you have in mind.',
        actions: [{ label: 'Take the assessment', href: '#diagnostico' }],
      },
      {
        id: 'contato',
        question: 'How can I talk to someone on the team?',
        suggested: true,
        keywords: ['contact', 'talk', 'speak', 'someone', 'phone', 'call', 'whatsapp', 'email', 'e mail', 'human', 'person', 'agent', 'meeting', 'reach'],
        answer:
          'You can reach our team at {email} or leave your details in the assessment. A specialist will contact you within 1 business day.',
        actions: [
          { label: 'Take the assessment', href: '#diagnostico' },
          { label: 'Send an email', href: 'mailto:{email}' },
        ],
      },
      {
        id: 'tecnologias',
        question: 'What technologies do you use?',
        keywords: ['technolog*', 'language*', 'stack', 'framework*', '.net', 'dotnet', 'sql', 'react', 'azure', 'aws', 'databricks', 'tool*'],
        answer:
          'We use whatever technology makes the most sense for each project. Some of the team’s most used are .NET, SQL Server, Azure, AWS, Databricks and BI tools, plus mobile development for iOS and Android.',
      },
      {
        id: 'localizacao',
        question: 'Where is Bitzar located?',
        keywords: ['where', 'address', 'location', 'located', 'marilia', 'city', 'office', 'on site', 'remote*', 'headquarters', 'based'],
        answer: 'Our headquarters are at {address}, in Marília, Brazil.',
      },
      {
        id: 'times',
        question: 'Do you provide developers?',
        keywords: ['staffing', 'squad*', 'team*', 'developer*', 'engineer*', 'outsourc*', 'allocat*', 'augmentation'],
        answer:
          'Yes! In the dedicated teams model, Bitzar specialists work as part of your team, at your pace, with as much technical management as you need.',
        actions: [{ label: 'See how to work with us', href: '#como-trabalhamos' }],
      },
      {
        id: 'mobile',
        question: 'Do you build mobile apps?',
        keywords: ['app', 'apps', 'mobile', 'ios', 'android', 'pwa', 'play store', 'app store'],
        answer:
          'We do. We build iOS, Android and PWA apps, from prototype to app store release.',
      },
      {
        id: 'dados',
        question: 'Do you work with data?',
        keywords: ['data', 'bi', 'dashboard*', 'analytics', 'report*', 'metric*', 'kpi*', 'data lake'],
        answer:
          'We do. We organize and unify data, build dashboards and reports, and set up platforms such as data lakes. One example is the Nestlé case, which unified data from several Latin American countries.',
        actions: [{ label: 'See case studies', href: '#cases' }],
      },
      {
        id: 'vagas',
        question: 'Are you hiring?',
        keywords: ['job*', 'career*', 'work for', 'work at', 'resume', 'cv', 'internship', 'vacanc*', 'opening*', 'are you hiring'],
        answer: "Great to hear you'd like to join the team! Send your resume to {careersEmail}.",
      },
      {
        id: 'diagnostico',
        question: 'How does the assessment work?',
        keywords: ['assessment', 'diagnos*', 'get started', 'where to start', 'start', 'first step'],
        answer:
          'It’s 4 quick questions about your challenge, the stage of the idea, the timeline and the size of your company. Then just leave your name and email, and a Bitzar specialist will contact you within 1 business day.',
        actions: [{ label: 'Take the assessment', href: '#diagnostico' }],
      },
      {
        id: 'saudacao',
        question: 'Hi',
        keywords: ['hi', 'hello', 'hey', 'good morning', 'good afternoon', 'good evening'],
        answer: 'Hi! How can I help you? Type your question or pick one of the frequently asked questions.',
      },
      {
        id: 'obrigado',
        question: 'Thank you',
        keywords: ['thank*', 'thx', 'cheers'],
        answer: "You're welcome! If you have any other questions, just ask.",
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