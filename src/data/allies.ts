// Red de aliados, agrupada por área. Para sumar o quitar profesionales, editá `pros`.
// Mostrá solo áreas donde ya haya profesionales de confianza.

export type AllyArea = { area: string; d: string; pros: string[] };

export const allyAreas: AllyArea[] = [
  {
    area: 'Legal y notarial',
    d: 'Respaldo jurídico para cada decisión de tu empresa.',
    pros: ['Abogados corporativos y societarios', 'Abogados laborales', 'Abogados tributarios', 'Escribanos'],
  },
  {
    area: 'Comercio exterior',
    d: 'Para importar y exportar con todo en regla.',
    pros: ['Despachantes de aduana', 'Agentes de importación y exportación'],
  },
  {
    area: 'Finanzas y seguros',
    d: 'Para proteger tu patrimonio y hacer crecer tu capital.',
    pros: ['Asesores financieros y de inversión', 'Productores asesores de seguros'],
  },
  {
    area: 'Bienes raíces y construcción',
    d: 'Para comprar, alquilar, construir o desarrollar.',
    pros: ['Corredores inmobiliarios', 'Arquitectos', 'Ingenieros'],
  },
  {
    area: 'Tecnología y desarrollo comercial',
    d: 'Para vender más y trabajar mejor.',
    pros: ['Desarrolladores web y de software', 'Agencias de marketing digital'],
  },
];
