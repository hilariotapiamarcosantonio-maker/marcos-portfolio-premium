export const siteUrl = "https://marcos-portfolio-premium.vercel.app";

export const navigationLinks = [
  { href: "#system", label: "Sistema" },
  { href: "#cases", label: "Casos" },
  { href: "#offers", label: "Oferta" },
  { href: "#audit", label: "Evaluación" },
];

export const ctaLabels = {
  navbar: "Solicitar Auditoría",
  primary: "Solicitar Auditoría Estratégica",
  secondary: "Ver Casos Estratégicos",
  tertiary: "Solicitar Evaluación",
};

export const heroHighlights = [
  "Captación estructurada",
  "CRM y seguimiento",
  "Automatización operativa",
  "Dashboards comerciales",
  "Autoridad digital",
];

export const credibilitySignals = [
  "Activos construidos",
  "Sectores trabajados",
  "Infraestructura web, CRM, automatización y dashboards",
];

export const businessModules = [
  {
    title: "Captación premium",
    description:
      "Piezas de entrada que posicionan, filtran y convierten: landing pages, formularios, briefs y rutas de siguiente paso.",
    outcome:
      "Más conversaciones con sentido comercial y menos contactos sueltos sin contexto ni prioridad.",
  },
  {
    title: "CRM y pipeline",
    description:
      "Estados, criterios de calificación, seguimiento y trazabilidad para que cada oportunidad tenga un destino claro.",
    outcome:
      "Un proceso comercial visible, repetible y menos dependiente de memoria, urgencia o improvisación.",
  },
  {
    title: "Automatización",
    description:
      "Notificaciones, recordatorios, entregas internas y handoffs operativos conectados a la realidad del negocio.",
    outcome:
      "Ahorro de tiempo, menos tareas manuales y mejor capacidad para responder con velocidad sin perder orden.",
  },
  {
    title: "Dashboard comercial",
    description:
      "Tableros y reportes para ver entradas, cuellos de botella, oportunidades activas y ritmo de conversión.",
    outcome:
      "Más control ejecutivo sobre lo que entra, lo que avanza y lo que necesita corrección inmediata.",
  },
];

export const credibilityPillars = [
  {
    title: "Activos construidos",
    description:
      "Piezas concretas para negocios que necesitan presencia premium y una operación comercial más clara.",
    items: [
      "Landing pages premium",
      "Sitios web comerciales",
      "Formularios y rutas de captación",
      "Bases CRM y seguimiento",
      "Dashboards de lectura comercial",
    ],
  },
  {
    title: "Sectores trabajados",
    description:
      "Infraestructura aplicada en contextos distintos, con necesidades reales de autoridad, seguimiento y control.",
    items: [
      "Industrial y B2B",
      "Estética premium",
      "Consultoría y finanzas",
      "Producción y branding",
      "Consumo y pedidos",
    ],
  },
  {
    title: "Infraestructura web, CRM, automatización y dashboards",
    description:
      "Diseñados como un sistema operativo comercial, no como piezas aisladas que se ven bien pero no se hablan entre sí.",
    items: [
      "Web comercial",
      "CRM y pipeline",
      "Automatización operativa",
      "Dashboards ejecutivos",
      "Arquitectura digital integral",
    ],
  },
];

export const needTypes = [
  "Captación y autoridad digital",
  "CRM y seguimiento comercial",
  "Automatización operativa",
  "Dashboards y control comercial",
  "Diagnóstico estratégico integral",
];

export const budgetRanges = [
  "US$1,500 - US$3,000",
  "US$3,000 - US$5,000",
  "US$6,000 - US$10,000",
  "US$10,000+",
  "Aún estoy definiendo inversión",
];

export const caseStudies = [
  {
    name: "Inox Minier",
    sector: "Industrial / B2B",
    problem:
      "La captación y las cotizaciones dependían de seguimiento manual, conversaciones dispersas y poca visibilidad sobre oportunidades activas.",
    systemBuilt:
      "Estructura comercial para servicios industriales, captación de prospectos, CRM para seguimiento y automatizaciones para organizar respuestas y avance del pipeline.",
    commercialValue:
      "Más control sobre oportunidades en curso, mejor capacidad para responder con autoridad y una presencia que ayuda a vender confianza antes de la llamada.",
    mockupLabel: "Landing + pipeline",
    mockupNote:
      "Captura real de la landing comercial y del frente visual del sistema industrial.",
    mockupChips: ["Captación", "Cotización", "Pipeline"],
    image: "/projects/inox-minier.jpg",
    featured: true,
  },
  {
    name: "Depot Graphics",
    sector: "Producción / Branding",
    problem:
      "El trabajo tenía calidad, pero las solicitudes llegaban sin filtro claro y el proceso de cotización consumía demasiada energía operativa.",
    systemBuilt:
      "Sitio orientado a servicios, formularios de briefing, organización de prospectos y tablero para priorizar proyectos con mejor encaje comercial.",
    commercialValue:
      "Menos fricción al cotizar, mejor filtro de clientes y un proceso más sólido para defender proyectos de mayor valor.",
    mockupLabel: "Briefing + tablero",
    mockupNote:
      "Captura real del frente comercial diseñado para ordenar servicios y solicitudes.",
    mockupChips: ["Briefing", "Servicios", "Prioridad"],
    image: "/projects/depot-graphics.jpg",
  },
  {
    name: "Vista del Río",
    sector: "Proyecto / Experiencia de marca",
    problem:
      "Había interés inicial, pero sin una ruta clara de seguimiento el valor percibido se diluía y las conversaciones perdían ritmo.",
    systemBuilt:
      "Arquitectura de captación, CRM para interesados, automatizaciones de contacto y contenido estructurado para sostener confianza durante la decisión.",
    commercialValue:
      "Seguimiento menos manual, conversaciones mejor ordenadas y mayor capacidad para convertir interés en reuniones o próximos pasos concretos.",
    mockupLabel: "Captación + nurturing",
    mockupNote:
      "Captura real del activo visual usado para sostener percepción premium y seguimiento comercial.",
    mockupChips: ["Interés", "Seguimiento", "Decisión"],
    image: "/projects/vista-del-rio.jpg",
  },
  {
    name: "Kalon / Santuario Estética",
    sector: "Estética premium",
    problem:
      "Una marca aspiracional no puede depender de mensajes sueltos y agenda fragmentada para vender tratamientos de ticket alto.",
    systemBuilt:
      "Web premium por líneas de servicio, captación segmentada, CRM de seguimiento y automatizaciones para reactivar prospectos y sostener la experiencia comercial.",
    commercialValue:
      "Mayor consistencia en la percepción premium, trazabilidad del prospecto y mejor control sobre conversión y reactivación.",
    mockupLabel: "Web premium + reactivación",
    mockupNote:
      "Captura real del frente visual del proyecto en una experiencia estética de alto valor.",
    mockupChips: ["Tratamientos", "CRM", "Reactivación"],
    image: "/projects/kalon-santuario.jpg",
    featured: true,
  },
  {
    name: "Gelatinas y Postres",
    sector: "Pedidos / Consumo",
    problem:
      "La demanda llegaba sin estructura suficiente para ordenar fechas, prioridades, confirmaciones y seguimiento durante picos operativos.",
    systemBuilt:
      "Catálogo orientado a pedido, formularios de encargo, automatizaciones de confirmación y tablero operativo para mantener claridad en cada solicitud.",
    commercialValue:
      "Menos caos en la gestión diaria, respuestas más rápidas y una experiencia que permite vender con orden aun cuando aumenta la demanda.",
    mockupLabel: "Catálogo + operación",
    mockupNote:
      "Captura real del catálogo y la identidad visual usada para pedidos y presentación del negocio.",
    mockupChips: ["Pedidos", "Confirmación", "Operación"],
    image: "/projects/gelatinas-postres.jpg",
  },
  {
    name: "Capital en Orden",
    sector: "Consultoría / Finanzas",
    problem:
      "El conocimiento generaba interés, pero faltaba una arquitectura que educara, calificara y llevara al prospecto correcto hacia una conversación seria.",
    systemBuilt:
      "Landing de autoridad, secuencia de captación, CRM para diagnóstico y seguimiento con foco en calificación y próximo paso comercial.",
    commercialValue:
      "Más autoridad percibida, conversaciones mejor calificadas y un proceso alineado con servicios consultivos de alto valor.",
    mockupLabel: "Autoridad + diagnóstico",
    mockupNote:
      "Captura real del frente editorial y comercial del sistema consultivo.",
    mockupChips: ["Autoridad", "Diagnóstico", "Seguimiento"],
    image: "/projects/capital-en-orden.jpg",
  },
];

export const offers = [
  {
    label: "Nivel 01",
    name: "Auditoría Digital Estratégica",
    summary:
      "Diagnóstico ejecutivo para entender dónde tu sistema comercial se rompe y qué infraestructura conviene construir primero.",
    audience:
      "Negocios con presencia digital dispersa, captación inconsistente o poca claridad sobre qué corregir antes de invertir más.",
    includes: [
      "Revisión de web, captación, oferta, CTA y autoridad digital",
      "Lectura de fricciones en CRM, seguimiento y operación comercial",
      "Mapa de prioridades con enfoque en impacto y viabilidad",
      "Ruta recomendada para ejecutar sin improvisación",
    ],
    result:
      "Salir con claridad estratégica sobre qué ajustar primero para dejar de perder oportunidades valiosas.",
    featured: false,
  },
  {
    label: "Nivel 02",
    name: "Sistema Comercial Premium",
    summary:
      "Infraestructura enfocada en captar mejor, responder más rápido y organizar prospectos con un proceso comercial serio.",
    audience:
      "Negocios que ya venden, pero necesitan ordenar pipeline, automatizar seguimiento y elevar su autoridad digital.",
    includes: [
      "Landing o web comercial orientada a conversión",
      "CRM con etapas, filtros y criterios de seguimiento",
      "Automatizaciones clave para formularios, recordatorios y handoffs",
      "Dashboard inicial para lectura comercial",
    ],
    result:
      "Captar con mejor contexto, responder con velocidad y controlar oportunidades sin perseguir cada lead manualmente.",
    featured: true,
  },
  {
    label: "Nivel 03",
    name: "Ecosistema Digital Completo",
    summary:
      "Diseño integral de la arquitectura digital para marcas que necesitan operar con autoridad, visibilidad y escalabilidad real.",
    audience:
      "Negocios que quieren conectar captación, CRM, automatización, reporting y operación dentro de un sistema de alto rendimiento.",
    includes: [
      "Arquitectura integral de captación y autoridad de marca",
      "CRM, automatizaciones y tableros conectados a la operación",
      "Diseño de flujos para equipo, prospectos y seguimiento",
      "Base para mejora continua y expansión del ecosistema",
    ],
    result:
      "Un sistema donde marketing, ventas y operación dejan de funcionar por intuición y empiezan a trabajar con control ejecutivo.",
    featured: false,
  },
];

export const auditDeliverables = [
  "Evaluación de la claridad comercial, la autoridad digital y la ruta de captación actual.",
  "Lectura de fricciones en CRM, seguimiento, automatización y control operativo.",
  "Recomendación del sistema más conveniente según necesidad, inversión y nivel de urgencia.",
];
