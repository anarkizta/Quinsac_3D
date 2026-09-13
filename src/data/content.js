export const COMPANY_INFO = {
  name: "Quinsac Limitada",
  legalName: "Servicios de Ingeniería y Consultoría Quinsac Limitada",
  slogan: "El talento es nuestro Patrimonio",
  subSlogan: "Soluciones innovadoras en Ingeniería aplicada a las necesidades de nuestros Clientes.",
  yearsOfExperience: 15,
  phone: "+56 9 76519985",
  email: "contacto@quinsacchile.cl",
  headquarters: {
    city: "Los Ángeles",
    region: "Región del Biobío",
    address: "Parcela N°8, Sector El Porvenir, Los Ángeles",
    role: "Casa Matriz"
  },
  branch: {
    city: "Calama",
    region: "Región de Antofagasta",
    address: "Salar de Tara 554, Calama",
    role: "Sucursal Norte"
  },
  stats: [
    { value: "15+", label: "Años de Trayectoria", sub: "Desde la celulosa a la gran minería" },
    { value: "100%", label: "Cumplimiento Normativo", sub: "Normas TE1, TC4 y SEC" },
    { value: "50+", label: "Grandes Proyectos", sub: "Ejecutados a nivel nacional" },
    { value: "0", label: "Incidentes Ambientales", sub: "Enfoque sustentable estricto" }
  ]
};

export const SERVICES_DATA = [
  {
    id: "consultoria",
    phase: "Fase A",
    title: "Consultoría y Gestión Ambiental",
    shortDesc: "Auditorías técnicas, estudios normativos DIA/EIA, permisos sectoriales (PAS) y planes de cierre.",
    icon: "Leaf",
    color: "#82DF26",
    details: [
      "Declaraciones y Estudios de Impacto Ambiental (DIA / EIA)",
      "Gestión de Permisos Sectoriales Ambientales (PAS)",
      "Auditorías de cumplimiento normativo y seguimiento ambiental",
      "Planes de Cierre y remediación de sitios industriales",
      "Gestión integral de residuos peligrosos y no peligrosos"
    ],
    threeDVisual: "Núcleo orgánico translúcido con capas de datos y flujos bioambientales."
  },
  {
    id: "ingenieria",
    phase: "Fase B",
    title: "Ingeniería y Gerenciamiento",
    shortDesc: "Prefactibilidad, ingeniería conceptual, básica y de detalles, estimación CAPEX e Inspección Técnica de Obras (ITO).",
    icon: "Compass",
    color: "#1A7E46",
    details: [
      "Estudios de Prefactibilidad técnica y económica",
      "Ingeniería Conceptual, Básica y de Detalles multidisciplinaria",
      "Estimación de Costos y control CAPEX / OPEX",
      "Gerenciamiento y Administración Integral de Proyectos (PMO)",
      "Inspección Técnica de Obras (ITO) de alta rigurosidad"
    ],
    threeDVisual: "Plano técnico extruido con casco de precisión y cotas holográficas."
  },
  {
    id: "drones",
    phase: "Fase C",
    title: "Soluciones Aéreas con Drones",
    shortDesc: "Topografía de alta resolución, fotogrametría LiDAR, inspección de infraestructura crítica y monitoreo ambiental.",
    icon: "Navigation",
    color: "#8CC63F",
    details: [
      "Topografía y fotogrametría con georreferenciación de precisión",
      "Inspección aérea de líneas eléctricas, chimeneas y tuberías",
      "Monitoreo ambiental y cubicación volumétrica de pilas de acopio",
      "Generación de gemelos digitales y nubes de puntos 3D densas"
    ],
    threeDVisual: "Dron técnico minimalista con hélices sincronizadas y haz de escaneo LiDAR."
  },
  {
    id: "construccion",
    phase: "Fase D",
    title: "Construcción, Montaje y Puesta en Marcha",
    shortDesc: "Obras mecánicas de piping (AC, INOX, HDPE), estanques, soldaduras calificadas e instrumentación eléctrica TE1/TC4.",
    icon: "Cpu",
    color: "#F57C00",
    details: [
      "Montaje electromecánico y de calderería pesada",
      "Piping industrial en Acero Carbono, Inoxidable y HDPE",
      "Soldaduras de alta exigencia bajo norma ASME / AWS",
      "Obras Eléctricas e Instrumentación certificadas (TE1, TC4)",
      "Comisionamiento, pre-comisionamiento y puesta en marcha garantizada"
    ],
    threeDVisual: "Red de tuberías industriales entrelazadas con válvulas y soldaduras activas."
  }
];

export const PROJECTS_DATA = [
  {
    id: "minera-centinela",
    title: "Minera Centinela",
    client: "Antofagasta Minerals",
    location: "Sierra Gorda, Región de Antofagasta",
    category: "Minería",
    image: "/assets/img/inicio.jpg",
    description: "Mantención mayor e ingeniería de optimización en sistemas supresores de polvo del Chancador Primario y Secundario.",
    deliverables: [
      "Optimización de líneas de atomización de alta presión",
      "Reducción de emisión de material particulado en un 42%",
      "Cumplimiento estricto de estándares de seguridad operacional en faena"
    ],
    year: "2023 - 2024"
  },
  {
    id: "codelco-chuquicamata",
    title: "Codelco Chuquicamata",
    client: "Codelco Norte",
    location: "Calama, Región de Antofagasta",
    category: "Certificación y Combustibles",
    image: "/assets/img/obras2.jpg",
    description: "Certificación integral y adecuación normativa de estanques de combustibles líquidos para la Gerencia de Suministros.",
    deliverables: [
      "Inspección de integridad mecánica y espesores por ultrasonido",
      "Tramitación y certificación SEC según normativa vigente",
      "Diseño de sistemas de contención secundaria y venteo de emergencia"
    ],
    year: "2022 - 2023"
  },
  {
    id: "enap-refinerias",
    title: "Enap Refinerías",
    client: "ENAP Bío Bío",
    location: "Hualpén, Región del Biobío",
    category: "Procesos Industriales",
    image: "/assets/img/obras3.jpg",
    description: "Ingeniería de detalle y optimización de procesos térmicos e hidráulicos para el Departamento de Ingeniería.",
    deliverables: [
      "Modelación hidráulica de circuitos de enfriamiento",
      "Reemplazo y montaje de manifold en acero inoxidable",
      "Supervisión y control de aseguramiento de calidad (QA/QC)"
    ],
    year: "2023"
  },
  {
    id: "celulosa-arauco",
    title: "Complejo Celulosa & Energía",
    client: "Industria Forestal / Celulosa",
    location: "Región del Biobío",
    category: "Celulosa & Energía",
    image: "/assets/img/Experiencia.jpg",
    description: "Inspección técnica de montaje y auditoría de líneas de vapor y condensado en calderas de biomasa.",
    deliverables: [
      "Control no destructivo (NDT) de soldaduras de alta presión",
      "Inspección de soporte estructural y dilatadores térmicos",
      "Puesta en marcha asistida sin detención de línea principal"
    ],
    year: "2024"
  }
];

export const VALUES_DATA = [
  {
    title: "Visión",
    text: "Ser la mejor alternativa en servicios de Ingeniería, Consultoría y Gestión Ambiental, con alto reconocimiento y ofreciendo soluciones innovadoras y sustentables a los precios más competitivos del mercado.",
    icon: "Eye",
    img: "/assets/img/vision.jpg"
  },
  {
    title: "Misión",
    text: "Prestar servicios garantizados con altos niveles de calidad, seguridad y competitividad, estableciendo en cada actuación una relación de confianza duradera con nuestros clientes.",
    icon: "Target",
    img: "/assets/img/mision.jpg"
  },
  {
    title: "Valores",
    text: "El talento de nuestros profesionales es nuestro mayor patrimonio. Somos ágiles, rigurosos, promovemos la innovación constante y respetamos estrictamente el medio ambiente.",
    icon: "Shield",
    img: "/assets/img/valores.jpg"
  }
];
