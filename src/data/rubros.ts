// Rubros que se muestran en el video del inicio y en la sección "Rubros".
// Cada uno usa public/media/rubros/<id>.mp4 (video) y <id>.jpg (imagen fija).
// Videos de Pexels (licencia libre, uso comercial permitido). Créditos en public/media/rubros/CREDITOS.md
// Para cambiar el orden del video del inicio, reordená esta lista.

export type Rubro = { id: string; label: string; d: string; hero?: boolean };

export const rubros: Rubro[] = [
  { id: 'industria', label: 'Industria y metalurgia', d: 'Talleres, fábricas y metalmecánica: costos, stock y personal bajo convenio.', hero: true },
  { id: 'empresas', label: 'Empresas y servicios', d: 'Consultoras, agencias y oficinas que necesitan números claros para decidir.', hero: true },
  { id: 'construccion', label: 'Construcción y fideicomisos', d: 'Constructoras, desarrolladores y fideicomisos inmobiliarios.', hero: true },
  { id: 'laboratorio', label: 'Laboratorios y salud', d: 'Laboratorios, clínicas y profesionales de la salud.', hero: true },
  { id: 'logistica', label: 'Logística y transporte', d: 'Depósitos, distribución y fletes.', hero: true },
  { id: 'comercio', label: 'Comercio', d: 'Locales, autoservicios, mayoristas y comercio electrónico.', hero: true },
  { id: 'profesionales', label: 'Profesionales independientes', d: 'Abogados, arquitectos, médicos, programadores y freelancers.', hero: true },
  { id: 'agroexportacion', label: 'Agroindustria y exportación', d: 'Acopios, plantas y puertos del Gran Rosario.', hero: true },
  { id: 'campo', label: 'Producción agropecuaria', d: 'Productores y contratistas rurales: campañas, granos y maquinaria.', hero: true },
];

export const heroRubros = rubros.filter((r) => r.hero);
