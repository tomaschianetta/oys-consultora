// "Para quién trabajamos": cada segmento tiene su página en /para-quien/<slug>/

export type Segment = {
  slug: string;
  title: string;
  tagline: string;
  seoTitle: string;
  seoDescription: string;
  intro: string;
  challenges: string[];
  howWeHelp: string[];
  services: string[]; // slugs de services.ts
};

export const segments: Segment[] = [
  {
    slug: 'pymes',
    title: 'Pymes',
    tagline: 'Tu empresa creció. Tu administración tiene que acompañarla.',
    seoTitle: 'Estudio contable para pymes en Rosario',
    seoDescription: 'Contabilidad, impuestos y sueldos para pymes, con un socio a cargo y abono mensual fijo. Estudio contable en Rosario con más de 30 años.',
    intro:
      'Acompañamos a pymes de comercio, servicios e industria con todo lo contable, impositivo y laboral en un solo lugar, para que el dueño vuelva a ocuparse del negocio.',
    challenges: [
      'Impuestos que cambian todo el tiempo y vencimientos que se pisan.',
      'Personal a cargo, convenios y paritarias.',
      'Poca información para decidir sobre precios, costos e inversiones.',
    ],
    howWeHelp: [
      'Un profesional a cargo de tu cuenta, que conoce tu empresa.',
      'Calendario de vencimientos y reportes mensuales.',
      'Reunión trimestral para revisar números y planificar.',
    ],
    services: ['impuestos', 'sueldos-y-cargas-sociales', 'libros-contables', 'automatizacion-y-business-analyst'],
  },
  {
    slug: 'profesionales-y-monotributistas',
    title: 'Profesionales y monotributistas',
    tagline: 'Facturá tranquilo. Del resto nos ocupamos nosotros.',
    seoTitle: 'Contador para monotributistas y profesionales en Rosario',
    seoDescription: 'Monotributo, recategorizaciones, paso a Responsable Inscripto, Ganancias y Bienes Personales para profesionales independientes. Abono mensual fijo.',
    intro:
      'Médicos, abogados, arquitectos, programadores y freelancers: te ayudamos a estar en regla, pagar lo justo y planificar tu crecimiento.',
    challenges: [
      'Recategorizaciones y topes del Monotributo.',
      'El salto a Responsable Inscripto y sus costos.',
      'Ganancias y Bienes Personales, sin saber cuánto vas a pagar.',
    ],
    howWeHelp: [
      'Plan mensual con todo incluido y un honorario fijo.',
      'Simulación anticipada antes de cambiar de régimen.',
      'Certificaciones de ingresos cuando las necesites.',
    ],
    services: ['impuestos', 'certificaciones-contables', 'administracion-de-facturacion'],
  },
  {
    slug: 'emprendedores-y-startups',
    title: 'Emprendedores y startups',
    tagline: 'Arrancá bien desde el día uno.',
    seoTitle: 'Contador para emprendedores y startups · Constitución de SAS',
    seoDescription: 'Constitución de SAS y SRL, inscripciones, proyecciones y primer año contable para emprendedores y startups en Rosario y todo el país.',
    intro:
      'Te ayudamos a elegir la estructura correcta, armar los números de tu proyecto y dejar la administración funcionando para que te enfoques en crecer.',
    challenges: [
      'Elegir entre SAS, SRL o seguir como persona humana.',
      'Ordenar acuerdos entre socios.',
      'Proyecciones para inversores o para el banco.',
    ],
    howWeHelp: [
      'Constitución llave en mano y altas impositivas.',
      'Plan de negocios y proyecciones financieras.',
      'Primer año acompañado con un abono accesible.',
    ],
    services: ['constitucion-de-sociedades', 'analisis-de-viabilidad', 'impuestos'],
  },
  {
    slug: 'empresas-con-socios-en-el-exterior',
    title: 'Empresas con vínculos en el exterior',
    tagline: 'Argentina y el mundo, en el mismo idioma.',
    seoTitle: 'Estudio contable bilingüe para empresas con socios o clientes en el exterior',
    seoDescription: 'Reportes bilingües, exportación de servicios, inversión extranjera y coordinación con contadores del exterior desde Rosario y Sydney.',
    intro:
      'Con nuestra división en Sydney trabajamos con empresas argentinas que tienen socios, clientes o inversores afuera, y con extranjeros que invierten en Argentina.',
    challenges: [
      'Socios o inversores que piden reportes en inglés.',
      'Exportación de servicios, cobros del exterior y cambios.',
      'Coordinar con contadores de otros países.',
    ],
    howWeHelp: [
      'Reportes y estados contables bilingües.',
      'Coordinación con profesionales en Australia, Estados Unidos y Europa.',
      'Constitución de sociedades para inversores extranjeros.',
    ],
    services: ['impuestos', 'constitucion-de-sociedades', 'auditoria-y-balances'],
  },
];

export const getSegment = (slug: string) => segments.find((s) => s.slug === slug);
