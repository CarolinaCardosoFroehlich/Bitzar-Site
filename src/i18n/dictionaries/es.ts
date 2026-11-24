import type { Dictionary } from '../types';

// Español. Los elementos entre [corchetes] son marcadores de posición.
export const es: Dictionary = {
  meta: {
    title: 'Bitzar — Software a medida para empresas',
    description:
      'Bitzar es una software house de Marília (Brasil) que desarrolla aplicaciones, sistemas web, soluciones de datos y equipos dedicados para empresas de todos los tamaños.',
  },

  header: {
    homeLabel: 'Bitzar Solutions — inicio',
    mainNavLabel: 'Principal',
    links: [
      { label: 'Servicios', href: '#servicos' },
      { label: 'Cómo trabajamos', href: '#como-trabalhamos' },
      { label: 'Casos', href: '#cases' },
      { label: 'Nosotros', href: '#sobre' },
    ],
    cta: 'Haz un diagnóstico',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    languageButton: 'Cambiar idioma (actual: {language})',
  },

  hero: {
    since: 'Desde',
    titleBefore: 'Software a medida para empresas que quieren',
    titleHighlight: 'crecer con tecnología',
    titleAfter: '.',
    lead: 'Somos Bitzar, una software house que desarrolla aplicaciones, sistemas web, soluciones de datos y equipos dedicados para empresas de todos los tamaños.',
    primaryCta: 'Hacer diagnóstico gratuito',
    secondaryCta: 'Conocer los servicios',
    processTitle: 'Del problema al software en producción',
    steps: [
      { number: '01', title: 'Entender', description: 'Inmersión en tu negocio y en el problema real.' },
      { number: '02', title: 'Diseñar', description: 'Alcance, arquitectura y prototipo validados.' },
      { number: '03', title: 'Construir', description: 'Entregas cortas, con pruebas y seguimiento.' },
      { number: '04', title: 'Evolucionar', description: 'Soporte, mejoras y operación en la nube.' },
    ],
  },

  clients: {
    title: 'Para startups, pequeñas empresas y grandes corporaciones',
  },

  services: {
    eyebrow: 'Servicios',
    title: 'Lo que Bitzar hace por tu empresa',
    intro:
      'Seis frentes, un mismo equipo. No necesitas contratar proveedores distintos para cada etapa.',
    techLabel: 'Tecnologías:',
    items: [
      {
        icon: 'mobile',
        title: 'Aplicaciones móviles',
        description: 'Apps para iOS, Android y PWA, del prototipo a la publicación en las tiendas.',
        tags: ['PWA', 'iOS', 'Android'],
      },
      {
        icon: 'code',
        title: 'Sistemas web y SaaS',
        description: 'Plataformas en la nube hechas para crecer junto con tu operación.',
        tags: ['.NET', 'SQL', 'Cloud'],
      },
      {
        icon: 'chart',
        title: 'Datos y analytics',
        description: 'Organizamos tus datos y creamos paneles para decisiones más rápidas.',
        tags: ['Databricks', 'BI'],
      },
      {
        icon: 'cloud',
        title: 'Cloud y operaciones',
        description: 'Migración, hosting y monitoreo de entornos seguros.',
        tags: ['Azure', 'AWS', 'DevOps'],
      },
      {
        icon: 'users',
        title: 'Equipos dedicados',
        description: 'Desarrolladores de Bitzar trabajando junto a tu equipo, a tu ritmo.',
        tags: ['Staffing', 'Squads'],
      },
      {
        icon: 'shield',
        title: 'Consultoría y gobernanza',
        description: 'Diagnóstico técnico, pruebas y seguridad para reducir riesgos.',
        tags: ['Arquitectura', 'QA', 'Seguridad'],
      },
    ],
  },

  about: {
    eyebrow: 'Sobre Bitzar',
    title: 'Tecnología de verdad, hecha cerca de ti.',
    paragraphs: [
      'Bitzar nació en Marília en 2016 para resolver un problema simple: las empresas necesitan software confiable, pero no siempre encuentran un socio que entienda el negocio antes de escribir la primera línea de código.',
      'Hoy atendemos a clientes de distintos tamaños con un equipo que acompaña el proyecto de principio a fin, con comunicación directa y sin intermediarios.',
    ],
    stats: [
      { value: '2016', label: 'año de fundación' },
      { value: '100+', label: 'proyectos entregados' },
      { value: '90+', label: 'especialistas en el equipo' },
      { value: '15+', label: 'años de experiencia en tecnología' },
    ],
  },

  howWeWork: {
    eyebrow: 'Cómo trabajamos',
    title: 'Tres formas de contratar a Bitzar',
    lead: 'Elige el modelo que mejor se adapta al momento de tu empresa. Si no sabes cuál, el diagnóstico de abajo te ayuda.',
    modelLabel: 'Modelo',
    idealForLabel: 'Ideal para:',
    items: [
      {
        title: 'Fábrica de software',
        description:
          'Tú traes la necesidad y Bitzar entrega el producto listo, con alcance, plazo e inversión definidos.',
        idealFor: 'nuevos productos y sistemas',
      },
      {
        title: 'Equipos dedicados',
        description:
          'Especialistas de Bitzar integrados a tu equipo, con la gestión técnica que necesites.',
        idealFor: 'acelerar un equipo existente',
      },
      {
        title: 'Consultoría técnica',
        description:
          'Evaluamos sistemas, datos e infraestructura y entregamos un plan claro de mejora.',
        idealFor: 'decidir antes de invertir',
      },
    ],
  },

  cases: {
    eyebrow: 'Casos',
    title: 'Proyectos que ya están en marcha',
    seeAll: 'Ver todos los casos →',
    challengeLabel: 'Desafío:',
    resultLabel: 'Resultado:',
    logoAlt: 'Logo de {client}',
    imagePlaceholder: '[IMAGEN DEL PROYECTO]',
    items: [
      {
        sector: 'Alimentos y bebidas',
        category: 'Datos y analytics',
        client: 'Nestlé',
        image: '/images/nestle.png',
        challenge:
          'Varios data lakes en América Latina, cada país con su propia gobernanza y procesos, sin una visión única de los datos.',
        result:
          'Plataforma regional unificada, con data lake central, gobernanza estandarizada y portal de datos self-service. Entregada en 1 año por un equipo de 30 especialistas.',
      },
      {
        sector: 'Industria',
        category: 'Sistema web',
        client: 'SKF',
        image: '/images/skf.jpeg',
        challenge:
          'Contratos de servicio controlados en hojas de cálculo, con cláusulas distintas por cliente y medición y facturación manuales, propensos a errores y retrabajo.',
        result:
          'Plataforma web a medida (.NET, AWS y SQL Server) que reemplazó todo el trabajo manual, con flujos rápidos, seguros y trazables y datos listos para analytics.',
      },
    ],
  },

  diagnostic: {
    eyebrow: 'Diagnóstico gratuito',
    title: '¿No sabes por dónde empezar? Responde {total} preguntas.',
    lead: 'Toma menos de un minuto. Con tus respuestas, Bitzar llega a la primera conversación entendiendo tu escenario.',
    progressLabel: 'Progreso del diagnóstico',
    stepLabel: 'Pregunta {current} de {total}',
    doneLabel: 'Completado',
    back: '← Volver',
    next: 'Continuar →',
    seeSummary: 'Ver resumen →',
    chooseOption: 'Elige una opción para continuar',
    summaryTitle: 'Tu resumen',
    nameLabel: 'Nombre',
    emailLabel: 'Correo electrónico',
    submit: 'Enviar a Bitzar',
    sending: 'Enviando…',
    restart: 'Rehacer diagnóstico',
    validationError: 'Ingresa tu nombre y un correo electrónico válido para enviar.',
    sendError: 'No fue posible enviar ahora. Inténtalo de nuevo en unos instantes.',
    sentTitle: '¡Recibimos tu diagnóstico!',
    sentText:
      'Un especialista de Bitzar se pondrá en contacto en un plazo de 1 día hábil para conversar sobre tu proyecto.',
    startOver: 'Empezar de nuevo',
    questions: [
      {
        id: 'desafio',
        title: '¿Qué desafío quieres resolver?',
        short: 'Desafío',
        options: [
          'Crear un producto digital',
          'Modernizar un sistema',
          'Organizar mis datos',
          'Formar o reforzar un equipo',
        ],
      },
      {
        id: 'estagio',
        title: '¿En qué etapa está la idea?',
        short: 'Etapa',
        options: [
          'Solo la idea, todavía en papel',
          'Ya existe algo, pero necesita mejorar',
          'Está en uso y con problemas',
          'Todavía no sé decirlo',
        ],
      },
      {
        id: 'prazo',
        title: '¿Qué plazo tienes en mente?',
        short: 'Plazo',
        options: ['Hasta 3 meses', 'De 3 a 6 meses', 'Más de 6 meses', 'Sin plazo definido'],
      },
      {
        id: 'porte',
        title: '¿Cuál es el tamaño de tu empresa?',
        short: 'Tamaño',
        options: ['Startup', 'Pequeña empresa', 'Mediana empresa', 'Gran empresa'],
      },
    ],
  },

  footer: {
    tagline:
      'Software a medida, datos y equipos dedicados para empresas que quieren crecer con tecnología.',
    navTitle: 'Navegación',
    contactTitle: 'Contacto',
    links: [
      { label: 'Servicios', href: '#servicos' },
      { label: 'Cómo trabajamos', href: '#como-trabalhamos' },
      { label: 'Casos', href: '#cases' },
      { label: 'Diagnóstico', href: '#diagnostico' },
    ],
    privacy: 'Política de Privacidad',
  },
};