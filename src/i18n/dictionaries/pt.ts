import type { Dictionary } from '../types';

// Português (idioma padrão). Itens entre [colchetes] são placeholders.
export const pt: Dictionary = {
  meta: {
    title: 'Bitzar — Software sob medida para empresas',
    description:
      'A Bitzar é uma software house de Marília/SP que desenvolve aplicativos, sistemas web, soluções de dados e times dedicados para empresas de todos os tamanhos.',
  },

  header: {
    homeLabel: 'Bitzar Solutions — início',
    mainNavLabel: 'Principal',
    links: [
      { label: 'Serviços', href: '#servicos' },
      { label: 'Como trabalhamos', href: '#como-trabalhamos' },
      { label: 'Cases', href: '#cases' },
      { label: 'Sobre', href: '#sobre' },
    ],
    cta: 'Faça um diagnóstico',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    languageButton: 'Alterar idioma (atual: {language})',
  },

  hero: {
    since: 'Desde',
    titleBefore: 'Software sob medida para empresas que querem',
    titleHighlight: 'crescer com tecnologia',
    titleAfter: '.',
    lead: 'Somos a Bitzar, uma software house que desenvolve aplicativos, sistemas web, soluções de dados e times dedicados para empresas de todos os tamanhos.',
    primaryCta: 'Fazer diagnóstico gratuito',
    secondaryCta: 'Conhecer os serviços',
    processTitle: 'Do problema ao software em produção',
    steps: [
      { number: '01', title: 'Entender', description: 'Imersão no seu negócio e no problema real.' },
      { number: '02', title: 'Desenhar', description: 'Escopo, arquitetura e protótipo validados.' },
      { number: '03', title: 'Construir', description: 'Entregas curtas, com testes e acompanhamento.' },
      { number: '04', title: 'Evoluir', description: 'Suporte, melhorias e operação em nuvem.' },
    ],
  },

  clients: {
    title: 'Para startups, pequenas empresas e grandes corporações',
  },

  services: {
    eyebrow: 'Serviços',
    title: 'O que a Bitzar faz pela sua empresa',
    intro:
      'Seis frentes, um mesmo time. Você não precisa contratar fornecedores diferentes para cada etapa.',
    techLabel: 'Tecnologias:',
    items: [
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
    ],
  },

  about: {
    eyebrow: 'Sobre a Bitzar',
    title: 'Tecnologia de verdade, feita perto de você.',
    paragraphs: [
      'A Bitzar nasceu em Marília em 2016 para resolver um problema simples: empresas precisam de software confiável, mas nem sempre encontram um parceiro que entenda o negócio antes de escrever a primeira linha de código.',
      'Hoje atendemos clientes de diferentes portes com um time que acompanha o projeto do começo ao fim, com conversa direta e sem intermediários.',
    ],
    stats: [
      { value: '2016', label: 'ano de fundação' },
      { value: '100+', label: 'projetos entregues' },
      { value: '90+', label: 'especialistas no time' },
      { value: '15+', label: 'anos de experiência em tecnologia' },
    ],
  },

  howWeWork: {
    eyebrow: 'Como trabalhamos',
    title: 'Três formas de contratar a Bitzar',
    lead: 'Escolha o modelo que combina com o momento da sua empresa. Se não souber qual, o diagnóstico abaixo ajuda.',
    modelLabel: 'Modelo',
    idealForLabel: 'Ideal para:',
    items: [
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
    ],
  },

  cases: {
    eyebrow: 'Cases',
    title: 'Projetos que já estão rodando',
    seeAll: 'Ver todos os cases →',
    challengeLabel: 'Desafio:',
    resultLabel: 'Resultado:',
    logoAlt: 'Logo {client}',
    imagePlaceholder: '[IMAGEM DO PROJETO]',
    items: [
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
    ],
  },

  diagnostic: {
    eyebrow: 'Diagnóstico gratuito',
    title: 'Não sabe por onde começar? Responda {total} perguntas.',
    lead: 'Leva menos de um minuto. Com as respostas, a Bitzar já chega na primeira conversa entendendo o seu cenário.',
    progressLabel: 'Progresso do diagnóstico',
    stepLabel: 'Pergunta {current} de {total}',
    doneLabel: 'Concluído',
    back: '← Voltar',
    next: 'Continuar →',
    seeSummary: 'Ver resumo →',
    chooseOption: 'Escolha uma opção para continuar',
    summaryTitle: 'Seu resumo',
    nameLabel: 'Nome',
    emailLabel: 'E-mail',
    submit: 'Enviar para a Bitzar',
    sending: 'Enviando…',
    restart: 'Refazer diagnóstico',
    validationError: 'Preencha seu nome e um e-mail válido para enviar.',
    sendError: 'Não foi possível enviar agora. Tente de novo em alguns instantes.',
    sentTitle: 'Recebemos seu diagnóstico!',
    sentText:
      'Um especialista da Bitzar vai entrar em contato em até 1 dia útil para conversar sobre o seu projeto.',
    startOver: 'Começar de novo',
    questions: [
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
    ],
  },

  footer: {
    tagline:
      'Software sob medida, dados e times dedicados para empresas que querem crescer com tecnologia.',
    navTitle: 'Navegação',
    contactTitle: 'Contato',
    links: [
      { label: 'Serviços', href: '#servicos' },
      { label: 'Como trabalhamos', href: '#como-trabalhamos' },
      { label: 'Cases', href: '#cases' },
      { label: 'Diagnóstico', href: '#diagnostico' },
    ],
    privacy: 'Política de Privacidade',
  },
};