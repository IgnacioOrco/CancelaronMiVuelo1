export interface Pillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  badge: string;
}

export interface Step {
  number: number;
  stage: "free" | "paid";
  title: string;
  tagline: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  rawPrice: number;
  period: string;
  description: string;
  featured: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface Rule {
  number: string;
  title: string;
  description: string;
  iconName: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: "plazos" | "costos" | "proceso" | "legal";
}

export const PILLARS: Pillar[] = [
  {
    id: "experto",
    title: "Experto",
    subtitle: "Rigor Legal Garantizado",
    description: "Cada reclamo está fundamentado en el Código Aeronáutico Argentino, la Ley de Defensa del Consumidor (Ley 24.240) y la reciente Resolución ANAC 774/2025.",
    iconName: "Scale",
    badge: "Doctrina & Ley"
  },
  {
    id: "confianza",
    title: "Confianza",
    subtitle: "Tu Abogado Personal",
    description: "Trato directo y transparente. Sabés quién defiende tu reclamo desde el primer minuto, sin letras chicas ni intermediarios desconocidos.",
    iconName: "ShieldCheck",
    badge: "Profesionales Matriculados"
  },
  {
    id: "accesible",
    title: "Accesible",
    subtitle: "Sin Barreras ni Burocracia",
    description: "Eliminamos el lenguaje jurídico complejo. Hacemos que reclamar lo que te corresponde sea tan simple y rápido como enviar un mensaje.",
    iconName: "Smile",
    badge: "Lenguaje Claro"
  },
  {
    id: "inmediatez",
    title: "Inmediatez",
    subtitle: "Respuesta en Minutos",
    description: "Atención ágil directamente por WhatsApp. Te respondemos y diagnosticamos tu caso mientras todavía estás en el aeropuerto o camino a casa.",
    iconName: "Zap",
    badge: "Atención Rápida"
  },
  {
    id: "humano",
    title: "Humano",
    subtitle: "La IA Asiste, el Abogado Firma",
    description: "La Inteligencia Artificial de AbogacIAr clasifica antecedentes y calcula montos; un abogado especialista revisa, valida y patrocina formalmente cada caso.",
    iconName: "UserCheck",
    badge: "Supervisión 100% Legal"
  }
];

export const STEPS: Step[] = [
  // Etapa Gratuita
  {
    number: 1,
    stage: "free",
    title: "Entrada",
    tagline: "Contacto en 1 Clic",
    description: "Nos escribís directamente por WhatsApp o iniciás tu consulta desde la plataforma sin registrarte.",
    badge: "Etapa Gratuita",
    iconName: "MessageCircle"
  },
  {
    number: 2,
    stage: "free",
    title: "Tu Vuelo",
    tagline: "Datos Clave del Incidente",
    description: "Ingresás el número de vuelo, aerolínea, fecha y el problema (cancelación, demora, sobreventa o equipaje).",
    badge: "Etapa Gratuita",
    iconName: "Plane"
  },
  {
    number: 3,
    stage: "free",
    title: "Diagnóstico",
    tagline: "Evaluación Legal Sin Costo",
    description: "Nuestro motor analiza la viabilidad jurídica inmediata y calcula el monto estimado de compensación a reclamar.",
    badge: "Etapa Gratuita",
    iconName: "FileSearch"
  },
  // Etapa Paga
  {
    number: 4,
    stage: "paid",
    title: "Planes",
    tagline: "Elegís tu Nivel de Asistencia",
    description: "Seleccionás el plan transparente que mejor se ajuste a tus necesidades con precio fijo final en pesos.",
    badge: "Etapa Paga",
    iconName: "Layers"
  },
  {
    number: 5,
    stage: "paid",
    title: "Datos",
    tagline: "Carga de Comprobantes",
    description: "Adjuntás por WhatsApp o portal tu tarjeta de embarque, tickets de gastos y constancia de reserva.",
    badge: "Etapa Paga",
    iconName: "UploadCloud"
  },
  {
    number: 6,
    stage: "paid",
    title: "Pago",
    tagline: "Pago Único Transparente",
    description: "Abonás mediante Mercado Pago o Transferencia Bancaria con IVA incluido. Sin comisiones sorpresa a futuro.",
    badge: "Etapa Paga",
    iconName: "CreditCard"
  },
  {
    number: 7,
    stage: "paid",
    title: "Confirmación y Reclamo",
    tagline: "Presentación y Seguimiento",
    description: "Se formaliza la intimación legal ante la aerolínea y te mantenemos informado paso a paso hasta la resolución.",
    badge: "Etapa Paga",
    iconName: "CheckCircle2"
  }
];

export const PLANS: Plan[] = [
  {
    id: "diagnostico",
    name: "Diagnóstico",
    price: "Gratis",
    rawPrice: 0,
    period: "Sin costo",
    description: "Evaluación legal preliminar para saber si tu caso califica para compensación económica.",
    featured: false,
    features: [
      "Análisis de viabilidad del reclamo",
      "Cálculo estimado de compensación según normativa",
      "Identificación de infracción según Res. ANAC 774/2025",
      "Asesoramiento inicial por WhatsApp",
      "Sin compromiso de contratación"
    ],
    ctaText: "Obtener Diagnóstico Gratis",
    whatsappMessage: "Hola, quiero solicitar mi Diagnóstico Gratuito para evaluar el reclamo de mi vuelo."
  },
  {
    id: "basico",
    name: "Básico",
    price: "$9.900",
    rawPrice: 9900,
    period: "Pago único · IVA incluido",
    description: "Carta de reclamo formal redactada por abogados matriculados lista para ser presentada.",
    featured: false,
    features: [
      "Todo lo incluido en Diagnóstico",
      "Carta de Reclamo formal en formato PDF oficial",
      "Fundamentación en Código Aeronáutico y ANAC 774/2025",
      "Instructivo paso a paso de presentación ante la aerolínea",
      "Modelos de seguimiento y control de plazos"
    ],
    ctaText: "Elegir Plan Básico",
    whatsappMessage: "Hola, quiero contratar el Plan Básico ($9.900) para obtener mi Carta de Reclamo formal."
  },
  {
    id: "asistido",
    name: "Asistido",
    price: "$29.900",
    rawPrice: 29900,
    period: "Pago único · IVA incluido",
    description: "Gestión completa y seguimiento activo del reclamo ante el departamento de legales de la aerolínea.",
    featured: true,
    badge: "El más elegido",
    features: [
      "Todo lo incluido en Plan Básico",
      "Intimación formal directa ante la aerolínea",
      "Seguimiento quincenal y control del plazo legal de 30 días",
      "Respuesta a objeciones y dilaciones de la aerolínea",
      "Asesoría legal personalizada vía WhatsApp",
      "Liquidación y revisión de ofertas de indemnización"
    ],
    ctaText: "Elegir Plan Asistido",
    whatsappMessage: "Hola, quiero contratar el Plan Asistido ($29.900) para que gestionen mi reclamo ante la aerolínea."
  },
  {
    id: "prioritario",
    name: "Prioritario",
    price: "$99.900",
    rawPrice: 99000,
    period: "Pago único · IVA incluido",
    description: "Patrocinio letrado integral con abogado apoderado asignado y mediación prejudicial (COPREC).",
    featured: false,
    badge: "Full Legal",
    features: [
      "Todo lo incluido en Plan Asistido",
      "Abogado matriculado apoderado asignado con nombre y matrícula",
      "Patrocinio en instancia de Mediación / COPREC / Conciliación",
      "Reclamo por Daño Moral, Gastos Imprevistos y Daño Punitivo",
      "Canal de atención telefónica y WhatsApp prioritario 24/7",
      "Revisión de acuerdos homologados y transferencia directa"
    ],
    ctaText: "Elegir Plan Prioritario",
    whatsappMessage: "Hola, quiero contratar el Plan Prioritario ($99.900) para contar con patrocinio letrado integral y mediación."
  }
];

export const RULES: Rule[] = [
  {
    number: "01",
    title: "Diagnóstico Primero",
    description: "No pagás nada si tu caso no tiene amparo legal. Analizamos primero la viabilidad antes de ofrecerte cualquier plan.",
    iconName: "SearchCheck"
  },
  {
    number: "02",
    title: "Sin Callejones Sin Salida",
    description: "Te decimos la verdad desde el inicio. Si la aerolínea cuenta con causal justificada no imputable, te lo explicamos con claridad.",
    iconName: "Compass"
  },
  {
    number: "03",
    title: "Transparencia de Datos",
    description: "Tu privacidad es sagrada. Toda tu información y documentación está estrictamente protegida bajo la Ley 25.326 de Protección de Datos Personales.",
    iconName: "Lock"
  },
  {
    number: "04",
    title: "Cero Letra Chica",
    description: "Precios fijos en pesos argentinos con IVA incluido. No retenemos comisiones sorpresa ni cobramos porcentajes sobre tu indemnización cobrada.",
    iconName: "CheckSquare"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "faq-1",
    category: "plazos",
    question: "¿Cuánto tiempo tiene la aerolínea para responder a mi reclamo?",
    answer: "Según la Resolución ANAC 774/2025 y la normativa aeronáutica vigente en Argentina, las compañías aéreas tienen un plazo perentorio de 30 días hábiles para dar una respuesta fundada y por escrito a los reclamos presentados por los pasajeros."
  },
  {
    id: "faq-2",
    category: "costos",
    question: "¿Por qué trabajan con pago único fijo y no cobrando un porcentaje de lo recuperado?",
    answer: "Muchas empresas tradicionales cobran entre el 25% y el 40% de tu indemnización final, lo que significa que terminás perdiendo cientos de miles de pesos. Con CancelaronMiVuelo y AbogacIAr abonás un monto fijo y transparente en pesos (IVA incluido), y el 100% de la compensación que pague la aerolínea va directamente a tu cuenta bancaria."
  },
  {
    id: "faq-3",
    category: "proceso",
    question: "¿Qué tipos de problemas con el vuelo puedo reclamar?",
    answer: "Podés reclamar por cancelaciones sin aviso previo de al menos 14 días, demoras mayores a 3 horas, denegación de embarque por sobreventa (overbooking), pérdida o rotura de equipaje despachado, y reprogramaciones unilaterales que afecten tus conexiones o estadía."
  },
  {
    id: "faq-4",
    category: "legal",
    question: "¿Quién respalda legalmente mi reclamo?",
    answer: "Todos los procesos y modelos legales están diseñados y supervisados por el prestigioso Estudio Márquez & Asociados (especialistas en Derecho Aeronáutico y de Consumo) en conjunto con la tecnología de AbogacIAr. Cada trámite cumple estrictamente con el marco legal argentino."
  },
  {
    id: "faq-5",
    category: "legal",
    question: "¿Cómo se protegen mis datos personales y tickets de viaje?",
    answer: "Implementamos estándares de encriptación de extremo a extremo y cumplimos rigurosamente con la Ley Nacional 25.326 de Protección de Datos Personales. Tus pasajes, tarjetas de crédito y documentos sólo se utilizan con el fin exclusivo de tramitar tu reclamo."
  },
  {
    id: "faq-6",
    category: "proceso",
    question: "¿Qué pasa si la aerolínea no responde o rechaza el reclamo en el plazo de 30 días?",
    answer: "Si la aerolínea no responde o rechaza injustificadamente tu solicitud, con nuestros planes asistidos y prioritarios activamos la intimación prejudicial mediante carta documento y la apertura de audiencia en COPREC / Defensa del Consumidor para exigir además daño moral y punitivo."
  }
];
