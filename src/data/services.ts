// Catálogo de servicios. Cada uno genera su página en /servicios/<slug>/
// y aparece en el mega-menú dentro de su categoría.

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  category: CategoryId;
  title: string;
  menuLabel?: string;
  short: string; // una línea para tarjetas y menú
  seoTitle: string;
  seoDescription: string;
  lead: string; // bajada del encabezado
  pains: string[]; // "¿Te pasa esto?"
  includes: { t: string; d: string }[];
  forWho: string[];
  faqs: Faq[];
};

export type CategoryId = 'impuestos' | 'laboral' | 'empresas' | 'gestion';

export const categories: { id: CategoryId; title: string; blurb: string }[] = [
  { id: 'impuestos', title: 'Impuestos y cumplimiento', blurb: 'Al día con ARCA, API y el municipio, sin intimaciones ni multas.' },
  { id: 'laboral', title: 'Laboral', blurb: 'Sueldos bien liquidados y el equipo correcto para tu empresa.' },
  { id: 'empresas', title: 'Empresas y sociedades', blurb: 'Desde la constitución hasta los balances y las decisiones de inversión.' },
  { id: 'gestion', title: 'Gestión y tecnología', blurb: 'Procesos ordenados, facturación bajo control y datos para decidir.' },
];

export const services: Service[] = [
  // ---------------- IMPUESTOS Y CUMPLIMIENTO ----------------
  {
    slug: 'impuestos',
    category: 'impuestos',
    title: 'Asesoramiento impositivo',
    menuLabel: 'Impuestos',
    short: 'Monotributo, IVA, Ganancias, Bienes Personales, Ingresos Brutos y DReI.',
    seoTitle: 'Asesoramiento impositivo en Rosario · Monotributo, IVA y Ganancias',
    seoDescription:
      'Liquidación de impuestos nacionales, provinciales y municipales para pymes, profesionales y monotributistas en Rosario y todo el país. Abono mensual fijo.',
    lead:
      'Liquidamos y planificamos tus impuestos nacionales, provinciales y municipales para que pagues lo que corresponde, a tiempo, y sin sorpresas.',
    pains: [
      'No sabés si estás pagando de más o si te puede llegar una intimación.',
      'Cada mes te enterás del vencimiento el mismo día.',
      'Pasaste el tope del Monotributo y no sabés qué hacer.',
      'Nadie te explica qué significa cada impuesto que pagás.',
    ],
    includes: [
      { t: 'Monotributo', d: 'Alta, recategorización semestral, control de topes y exclusiones, y pago mensual.' },
      { t: 'IVA y Ganancias', d: 'Declaraciones juradas mensuales y anuales de personas humanas y sociedades, con anticipos y retenciones.' },
      { t: 'Bienes Personales', d: 'Declaración anual, valuación de bienes y planificación de la alícuota.' },
      { t: 'Ingresos Brutos (API) y Convenio Multilateral', d: 'Régimen local o multilateral, coeficientes y regímenes de retención y percepción.' },
      { t: 'DReI y tasas municipales', d: 'Derecho de Registro e Inspección de Rosario y tasas de otros municipios.' },
      { t: 'Planificación fiscal', d: 'Revisamos tu estructura y te recomendamos la figura y el régimen que más te convienen, siempre dentro de la ley.' },
      { t: 'Atención de requerimientos', d: 'Respondemos fiscalizaciones, intimaciones y planes de pago ante ARCA y API.' },
    ],
    forWho: ['Monotributistas y profesionales independientes', 'Pymes y comercios', 'Sociedades (SAS, SRL, SA)', 'Personas con patrimonio o inversiones'],
    faqs: [
      { q: '¿Cuándo me conviene pasar de Monotributo a Responsable Inscripto?', a: 'Depende de tu facturación, tus costos con IVA y el tipo de cliente. Si vendés a empresas que computan crédito fiscal o tenés muchos gastos con IVA, inscribirte puede convenirte antes de llegar al tope. Lo analizamos con tus números en la primera reunión.' },
      { q: '¿Qué pasa si tengo deudas o declaraciones atrasadas?', a: 'Hacemos un diagnóstico de tu situación en ARCA y API, regularizamos las presentaciones pendientes y evaluamos los planes de pago vigentes para ordenar la deuda.' },
      { q: '¿Me avisan de los vencimientos?', a: 'Sí. Cada cliente recibe su calendario de vencimientos, y nuestro sistema interno de control nos alerta antes de cada fecha para que nada se pase.' },
    ],
  },
  {
    slug: 'libros-contables',
    category: 'impuestos',
    title: 'Contabilidad y libros contables',
    menuLabel: 'Libros contables',
    short: 'Registración, rúbrica de libros y cumplimiento societario.',
    seoTitle: 'Contabilidad y libros contables para sociedades en Rosario',
    seoDescription:
      'Registración contable mensual, Libro Diario, Inventarios y Balances, y rúbrica en el Registro Público. Contabilidad al día para tu sociedad.',
    lead: 'Llevamos tu contabilidad al día, con libros en regla y la información lista cuando la pida un banco, un socio o un organismo.',
    pains: [
      'Los libros están atrasados y se acerca el cierre del ejercicio.',
      'El banco te pide información contable y no la tenés ordenada.',
      'No sabés qué libros está obligada a llevar tu sociedad.',
    ],
    includes: [
      { t: 'Registración mensual', d: 'Asientos, mayores y subdiarios de IVA a partir de tu facturación, bancos y comprobantes.' },
      { t: 'Libros obligatorios', d: 'Libro Diario, Inventarios y Balances, y libros societarios (Actas y Registro de Acciones o Cuotas).' },
      { t: 'Rúbrica y libros digitales', d: 'Gestión de rúbrica ante el Registro Público y libros digitales cuando corresponde.' },
      { t: 'Conciliaciones', d: 'Conciliaciones bancarias y de cuentas a cobrar y a pagar, para que los saldos sean reales.' },
      { t: 'Reportes de gestión', d: 'Estado de resultados mensual simple, para que sepas cómo viene el año antes del balance.' },
    ],
    forWho: ['SAS, SRL y SA', 'Pymes que necesitan información para el banco', 'Empresas con socios que piden reportes'],
    faqs: [
      { q: '¿Con qué sistema trabajan?', a: 'Nos adaptamos al tuyo: Tango, Bejerman, Xubio, Holded, Xero, QuickBooks, entre otros. Si todavía no tenés uno, te recomendamos el más adecuado para tu volumen.' },
      { q: '¿Pueden ponerse al día con ejercicios atrasados?', a: 'Sí. Hacemos un relevamiento, armamos un plan de regularización por ejercicio y te damos un plazo y un honorario cerrados.' },
    ],
  },
  {
    slug: 'certificaciones-contables',
    category: 'impuestos',
    title: 'Certificaciones contables',
    short: 'Certificaciones de ingresos y manifestaciones de bienes para bancos, embajadas y trámites.',
    seoTitle: 'Certificación de ingresos y manifestación de bienes en Rosario',
    seoDescription:
      'Certificaciones contables de ingresos, manifestaciones de bienes y certificaciones especiales, legalizadas por el Consejo Profesional. Rápido y en regla.',
    lead: 'Emitimos certificaciones contables firmadas y legalizadas ante el Consejo Profesional, listas para presentar donde las necesites.',
    pains: [
      'Necesitás un certificado de ingresos para alquilar, pedir un crédito o tramitar una visa.',
      'El banco te pide una manifestación de bienes con poco plazo.',
      'No sabés qué documentación respalda cada certificación.',
    ],
    includes: [
      { t: 'Certificación de ingresos', d: 'Para alquileres, créditos, tarjetas, visas y trámites migratorios.' },
      { t: 'Manifestación de bienes', d: 'Para bancos, licitaciones y garantías.' },
      { t: 'Certificaciones especiales', d: 'Origen de fondos, aportes de capital, deudas y saldos contables.' },
      { t: 'Legalización', d: 'Gestionamos la legalización ante el Consejo Profesional de Ciencias Económicas.' },
    ],
    forWho: ['Profesionales y monotributistas', 'Personas que tramitan visas o residencias', 'Empresas que se presentan a licitaciones o piden crédito'],
    faqs: [
      { q: '¿Cuánto tarda una certificación?', a: 'Con la documentación completa, normalmente entre 48 y 72 horas hábiles, más el tiempo de legalización. Si es urgente, avisanos y lo priorizamos.' },
      { q: '¿Qué documentación necesito?', a: 'Depende del tipo de certificación. Al pedirla te enviamos un checklist concreto para tu caso.' },
    ],
  },

  // ---------------- LABORAL ----------------
  {
    slug: 'sueldos-y-cargas-sociales',
    category: 'laboral',
    title: 'Liquidación de sueldos y cargas sociales',
    menuLabel: 'Sueldos y cargas sociales',
    short: 'Recibos, Libro de Sueldos Digital, F.931, altas y bajas.',
    seoTitle: 'Liquidación de sueldos en Rosario · Libro de Sueldos Digital y F.931',
    seoDescription:
      'Liquidación mensual de sueldos según el convenio de tu actividad, Libro de Sueldos Digital, F.931, altas y bajas de personal y asesoramiento laboral.',
    lead: 'Liquidamos los sueldos de tu equipo según el convenio correcto, a tiempo y con toda la documentación en regla.',
    pains: [
      'No tenés claro qué convenio aplica ni cómo impactan las paritarias.',
      'Un error en un recibo te genera un reclamo o una multa.',
      'Las altas, bajas y licencias te llevan horas cada mes.',
    ],
    includes: [
      { t: 'Liquidación mensual', d: 'Recibos de sueldo, SAC, vacaciones y liquidaciones finales.' },
      { t: 'Libro de Sueldos Digital y F.931', d: 'Presentación mensual ante ARCA y control de aportes y contribuciones.' },
      { t: 'Altas y bajas', d: 'Gestión de altas y bajas de empleados y de ART.' },
      { t: 'Convenios y paritarias', d: 'Actualización de escalas, adicionales y aportes sindicales según tu actividad.' },
      { t: 'Asesoramiento laboral', d: 'Modalidades de contratación, costos laborales y prevención de contingencias, coordinado con abogados laboralistas de nuestra red.' },
    ],
    forWho: ['Pymes con personal en relación de dependencia', 'Comercios y empresas de servicios', 'Empresas que empiezan a contratar a su primer empleado'],
    faqs: [
      { q: '¿Cuánto me cuesta contratar un empleado?', a: 'Además del sueldo hay contribuciones patronales, ART, SAC y vacaciones. Antes de contratar te armamos el costo laboral total para que decidas con números reales.' },
      { q: '¿Liquidan cualquier convenio colectivo?', a: 'Sí. Trabajamos con los convenios habituales de comercio, servicios, construcción y gastronomía, entre otros, y con personal fuera de convenio.' },
    ],
  },
  {
    slug: 'seleccion-de-talento',
    category: 'laboral',
    title: 'Selección de talento contable y administrativo',
    menuLabel: 'Selección de talento',
    short: 'Te ayudamos a encontrar al administrativo, analista o contador que tu empresa necesita.',
    seoTitle: 'Búsqueda de contadores y administrativos en Rosario · Selección de personal',
    seoDescription:
      'Selección de perfiles contables, administrativos y financieros con validación técnica hecha por contadores. Pagás solo si incorporás al candidato.',
    lead: 'Un contador sabe evaluar a un contador. Junto con un partner de recruiting, buscamos y validamos técnicamente a los perfiles contables y administrativos de tu empresa.',
    pains: [
      'Contrataste a alguien que en la entrevista parecía bien, pero no sabía liquidar un IVA.',
      'No tenés tiempo de filtrar cientos de CV.',
      'Necesitás cubrir un puesto clave rápido y sin errores.',
    ],
    includes: [
      { t: 'Definición del perfil', d: 'Te ayudamos a definir tareas, seniority y rango salarial de mercado para el puesto.' },
      { t: 'Búsqueda y preselección', d: 'Nuestro partner de recruiting hace la búsqueda y el primer filtro.' },
      { t: 'Validación técnica', d: 'Nuestro equipo contable entrevista y evalúa los conocimientos técnicos reales de cada finalista.' },
      { t: 'Terna final', d: 'Te presentamos los mejores candidatos con un informe de cada uno.' },
      { t: 'Acompañamiento en la incorporación', d: 'Si lo necesitás, liquidamos el alta y acompañamos los primeros meses.' },
    ],
    forWho: ['Pymes que buscan un administrativo o analista contable', 'Empresas que arman su área de administración', 'Estudios y empresas que necesitan reforzar su equipo'],
    faqs: [
      { q: '¿Cómo se cobra?', a: 'Pagás solo si incorporás a un candidato que te presentamos. El honorario se define en la propuesta según el puesto.' },
      { q: '¿Qué perfiles buscan?', a: 'Administrativos contables, liquidadores de sueldos, analistas impositivos, responsables de administración y finanzas, y contadores.' },
      { q: '¿Tengo que ser cliente del estudio?', a: 'No. El servicio está disponible para cualquier empresa.' },
    ],
  },

  // ---------------- EMPRESAS Y SOCIEDADES ----------------
  {
    slug: 'constitucion-de-sociedades',
    category: 'empresas',
    title: 'Constitución de sociedades',
    short: 'SAS, SRL y SA: constitución, inscripciones y modificaciones societarias.',
    seoTitle: 'Constituir una SAS o SRL en Rosario · Constitución de sociedades',
    seoDescription:
      'Te asesoramos para elegir el tipo societario y constituimos tu SAS, SRL o SA con inscripción en el Registro Público, ARCA, API y el municipio.',
    lead: 'Te ayudamos a elegir la figura correcta y nos ocupamos de todo el trámite, desde el estatuto hasta la primera factura.',
    pains: [
      'No sabés si te conviene una SAS, una SRL o seguir como persona humana.',
      'Tenés socios y querés dejar las reglas claras desde el principio.',
      'El trámite de inscripción te parece un laberinto.',
    ],
    includes: [
      { t: 'Elección del tipo societario', d: 'Comparamos SAS, SRL y SA según tus socios, tu actividad, tus costos y tus planes de crecimiento.' },
      { t: 'Estatuto e inscripción', d: 'Redacción del estatuto e inscripción en el Registro Público, con escribanía y abogados de nuestra red cuando hace falta.' },
      { t: 'Altas impositivas', d: 'CUIT, ARCA, Ingresos Brutos, DReI y cuentas bancarias.' },
      { t: 'Modificaciones societarias', d: 'Cesión de cuotas o acciones, aumentos de capital, cambios de autoridades y reformas de estatuto.' },
      { t: 'Primer año acompañado', d: 'Te dejamos funcionando: facturación, libros y calendario de vencimientos desde el día uno.' },
    ],
    forWho: ['Emprendedores y startups', 'Profesionales que se asocian', 'Empresas que reorganizan su estructura', 'Extranjeros que invierten en Argentina'],
    faqs: [
      { q: '¿SAS o SRL?', a: 'La SAS suele ser más ágil y económica para emprendimientos chicos o con socios que cambian. La SRL es una figura conocida y estable para pymes con pocos socios fijos. Lo definimos según tu caso concreto.' },
      { q: '¿Cuánto tarda constituir una sociedad?', a: 'Depende del tipo societario y de los tiempos del Registro Público. Al iniciar te damos un cronograma estimado y te mantenemos al tanto de cada paso.' },
    ],
  },
  {
    slug: 'fideicomisos-y-construccion',
    category: 'empresas',
    title: 'Fideicomisos y construcción',
    short: 'Contabilidad e impuestos de fideicomisos inmobiliarios y empresas constructoras.',
    seoTitle: 'Contador para fideicomisos de construcción y constructoras en Rosario',
    seoDescription:
      'Contabilidad, impuestos y rendición de cuentas de fideicomisos inmobiliarios al costo, y asesoramiento a constructoras: IERIC, Fondo de Cese Laboral y UOCRA.',
    lead: 'Llevamos los números de tu fideicomiso o tu constructora para que cada inversor sepa en qué se usa su dinero y la obra cumpla con todo, de la primera cuota a la escritura.',
    pains: [
      'Los fiduciantes piden información clara sobre el avance y los fondos.',
      'No está claro cómo tributa el fideicomiso en Ganancias, IVA e Ingresos Brutos.',
      'Los ajustes de cuotas por costo de construcción generan dudas y reclamos.',
      'Tenés personal de obra y no sabés si estás al día con el IERIC y el Fondo de Cese Laboral.',
    ],
    includes: [
      { t: 'Estructura del fideicomiso', d: 'Junto con los abogados de nuestra red, revisamos el contrato y las implicancias impositivas antes de firmar.' },
      { t: 'Alta e inscripciones', d: 'CUIT del fideicomiso, impuestos, regímenes de información ante ARCA y cumplimiento ante la UIF cuando corresponde.' },
      { t: 'Contabilidad del fideicomiso', d: 'Registración de aportes, pagos a proveedores y certificados de obra, y estados contables anuales.' },
      { t: 'Impuestos', d: 'Ganancias, IVA, Ingresos Brutos, Sellos y Bienes Personales según la estructura del fideicomiso.' },
      { t: 'Rendición de cuentas a fiduciantes', d: 'Informes periódicos claros sobre los fondos recibidos, la inversión en obra y el ajuste de cuotas.' },
      { t: 'Constructoras', d: 'Inscripción en el IERIC, Fondo de Cese Laboral, liquidación de sueldos del convenio UOCRA y retenciones en certificados de obra.' },
    ],
    forWho: ['Desarrolladores y fiduciarios', 'Inversores que integran un fideicomiso al costo', 'Empresas constructoras y contratistas', 'Profesionales que dirigen obras'],
    faqs: [
      { q: '¿Qué es un fideicomiso de construcción al costo?', a: 'Es un contrato en el que varios inversores (fiduciantes) aportan dinero para construir un edificio. El fiduciario administra los fondos y la obra, y al terminar se adjudican las unidades a los inversores a precio de costo.' },
      { q: '¿El fideicomiso tiene que llevar contabilidad propia?', a: 'Sí. Tiene su propia CUIT, sus obligaciones impositivas y la obligación de rendir cuentas a los fiduciantes. Por eso conviene que lo lleve un contador desde el inicio.' },
      { q: '¿Qué es el Fondo de Cese Laboral?', a: 'En la construcción, en lugar de la indemnización por despido, el empleador deposita mensualmente un porcentaje del salario en una cuenta a nombre del trabajador. Además, la empresa debe estar inscripta en el IERIC.' },
    ],
  },
  {
    slug: 'auditoria-y-balances',
    category: 'empresas',
    title: 'Auditoría y estados contables',
    menuLabel: 'Auditoría y balances',
    short: 'Balances anuales, auditoría externa e informes para bancos y organismos.',
    seoTitle: 'Balances y auditoría externa en Rosario · Estados contables',
    seoDescription:
      'Confección de estados contables anuales, auditoría externa e informes especiales para sociedades, bancos y organismos de control.',
    lead: 'Preparamos y auditamos tus estados contables con rigor profesional, para que tu balance sea una herramienta de decisión y no solo un trámite.',
    pains: [
      'Se acerca el cierre y el balance todavía no está.',
      'Un banco o un inversor te pide estados contables auditados.',
      'El balance llega tarde y no te dice nada útil sobre tu empresa.',
    ],
    includes: [
      { t: 'Estados contables anuales', d: 'Balance general, estado de resultados, evolución del patrimonio neto, flujo de efectivo, notas y anexos.' },
      { t: 'Auditoría externa', d: 'Informe del auditor independiente según las normas profesionales vigentes.' },
      { t: 'Informes especiales', d: 'Revisiones limitadas, informes para licitaciones y para organismos de control.' },
      { t: 'Lectura de gestión', d: 'Te presentamos el balance con indicadores clave y recomendaciones concretas.' },
    ],
    forWho: ['Sociedades comerciales', 'Empresas que piden financiamiento', 'Asociaciones civiles y fundaciones'],
    faqs: [
      { q: '¿Pueden auditar si no llevan mi contabilidad?', a: 'Sí. La auditoría externa la puede hacer un estudio distinto del que lleva la contabilidad, y es lo recomendable para mantener la independencia.' },
    ],
  },
  {
    slug: 'analisis-de-viabilidad',
    category: 'empresas',
    title: 'Análisis de viabilidad y proyecciones',
    menuLabel: 'Análisis de viabilidad',
    short: 'Proyecciones financieras, evaluación de inversiones y due diligence.',
    seoTitle: 'Análisis de viabilidad de proyectos y proyecciones financieras',
    seoDescription:
      'Evaluamos tu proyecto o inversión con proyecciones financieras, flujo de fondos, escenarios y due diligence para que decidas con datos.',
    lead: 'Antes de invertir, abrir una sucursal o comprar un negocio, armamos los números para que tomes la decisión con datos y no a ciegas.',
    pains: [
      'Querés invertir pero no sabés en cuánto tiempo recuperás el dinero.',
      'Un banco o un socio te pide un plan de negocios con proyecciones.',
      'Vas a comprar una empresa y necesitás saber qué hay detrás.',
    ],
    includes: [
      { t: 'Proyección financiera', d: 'Flujo de fondos, estado de resultados proyectado y necesidades de capital.' },
      { t: 'Evaluación de inversiones', d: 'VAN, TIR, período de recupero y escenarios optimista, base y pesimista.' },
      { t: 'Plan de negocios', d: 'Documento claro para presentar a bancos, socios o inversores.' },
      { t: 'Due diligence', d: 'Revisión contable, impositiva y laboral antes de comprar o asociarte a una empresa.' },
    ],
    forWho: ['Emprendedores con un proyecto nuevo', 'Pymes que evalúan crecer o abrir una sucursal', 'Inversores y compradores de empresas'],
    faqs: [
      { q: '¿Necesito tener la empresa armada?', a: 'No. Podemos trabajar sobre una idea y ayudarte a definir si conviene avanzar antes de invertir.' },
    ],
  },

  // ---------------- GESTIÓN Y TECNOLOGÍA ----------------
  {
    slug: 'administracion-de-facturacion',
    category: 'gestion',
    title: 'Administración de facturación',
    menuLabel: 'Facturación',
    short: 'Emisión, control, cobranzas y conciliación de tu facturación.',
    seoTitle: 'Administración de facturación y cobranzas para pymes',
    seoDescription:
      'Nos ocupamos de emitir y controlar tu facturación electrónica, seguir las cobranzas y conciliar, integrados con tu sistema de gestión.',
    lead: 'Tercerizá la administración de tu facturación y recuperá horas cada semana, con todo conciliado y bajo control.',
    pains: [
      'Facturás tarde o con errores y después hay que hacer notas de crédito.',
      'No sabés quién te debe ni desde cuándo.',
      'La facturación no coincide con lo que hay en el banco.',
    ],
    includes: [
      { t: 'Facturación electrónica', d: 'Emisión de facturas y notas de crédito y débito según tus instrucciones.' },
      { t: 'Cuentas a cobrar', d: 'Seguimiento de saldos, envío de resúmenes y alertas de morosidad.' },
      { t: 'Cuentas a pagar', d: 'Carga de comprobantes de proveedores y calendario de pagos.' },
      { t: 'Conciliación', d: 'Conciliación con bancos y medios de pago.' },
      { t: 'Integración', d: 'Trabajamos sobre tu sistema de gestión o te ayudamos a elegir uno.' },
    ],
    forWho: ['Pymes sin área administrativa', 'Profesionales con alto volumen de facturación', 'Empresas en crecimiento'],
    faqs: [
      { q: '¿Tengo que darles acceso a mi sistema?', a: 'Sí, con un usuario propio y los permisos justos para la tarea. Todo queda registrado y vos mantenés el control.' },
    ],
  },
  {
    slug: 'automatizacion-y-business-analyst',
    category: 'gestion',
    title: 'Business Analyst y automatización',
    menuLabel: 'Automatización y BI',
    short: 'Procesos administrativos automatizados y tableros de gestión.',
    seoTitle: 'Automatización de procesos administrativos y tableros de gestión (BI)',
    seoDescription:
      'Relevamos tus procesos administrativos y contables, los automatizamos e integramos tus sistemas, y armamos tableros de control para decidir con datos.',
    lead: 'Relevamos cómo trabaja tu administración, automatizamos lo repetitivo y te damos tableros para ver tu negocio en tiempo real.',
    pains: [
      'Tu equipo pasa horas copiando datos entre planillas y sistemas.',
      'Para saber cómo viene el mes tenés que pedir un informe.',
      'Cada área tiene sus propios números y ninguno coincide.',
    ],
    includes: [
      { t: 'Relevamiento de procesos', d: 'Mapeamos el circuito administrativo y detectamos cuellos de botella y riesgos.' },
      { t: 'Automatización', d: 'Automatizamos tareas repetitivas como la carga de comprobantes, las conciliaciones y los reportes.' },
      { t: 'Integración de sistemas', d: 'Conectamos tu sistema de gestión, bancos, planillas y herramientas en la nube.' },
      { t: 'Tableros de gestión (BI)', d: 'Ventas, márgenes, cobranzas y caja en un tablero actualizado.' },
    ],
    forWho: ['Pymes con procesos manuales', 'Empresas que crecieron más rápido que su administración', 'Equipos que quieren decidir con datos'],
    faqs: [
      { q: '¿Necesito cambiar de sistema?', a: 'No necesariamente. Primero aprovechamos lo que ya tenés, y solo te recomendamos un cambio si de verdad suma.' },
    ],
  },
];

export const servicesByCategory = (id: CategoryId) => services.filter((s) => s.category === id);
export const getService = (slug: string) => services.find((s) => s.slug === slug);
