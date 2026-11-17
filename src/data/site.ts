// Datos generales del estudio. Todo lo que diga TODO hay que completarlo
// antes de publicar (o dejarlo vacío: el sitio oculta lo que esté vacío).

export const site = {
  name: 'O&S Consultora',
  legalName: 'Organización y Sistemas Consultora',
  url: 'https://oysconsultora.com.ar',
  email: 'info@oysconsultora.com.ar',

  // TODO: número con código de país, sin espacios ni signos. Ej: '5493415551234'.
  // Si queda vacío no se muestran ni el teléfono ni el botón de WhatsApp.
  whatsapp: '',
  phoneDisplay: '',

  address: {
    // TODO: calle y número de la oficina (mejora mucho el SEO local y Google Business).
    street: '',
    city: 'Rosario',
    region: 'Santa Fe',
    postalCode: '',
    country: 'AR',
  },
  hours: 'Lunes a viernes de 9 a 18 h',

  portalUrl: 'https://portal.oysconsultora.com.ar',
  linkedin: '', // TODO: URL de la página de empresa en LinkedIn

  // Formulario de contacto (misma clave que el sitio anterior; es pública por diseño)
  web3formsKey: '5e30e739-c017-48c9-816b-e841ed7cdaa9',

  // Copia de cada consulta en el portal del equipo (pestaña "Consultas").
  // La clave "anon" es pública por diseño: solo permite registrar consultas nuevas
  // (ver portal-oys-app/supabase/consultas.sql).
  supabaseUrl: 'https://aerfatduidqwimriwkjr.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlcmZhdGR1aWRxd2ltcml3a2pyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU5MDM5NTEsImV4cCI6MjEwMTQ3OTk1MX0.bzclhIIme7Bpr3Tf7CkxM4r1_UH_sdBvvnj8lwJL1IM',

  // TODO: token de Cloudflare Web Analytics (Cloudflare → Analytics → Web Analytics).
  cfAnalyticsToken: '',

  foundedYears: '30+',
};

export const stats = [
  { value: '30+', label: 'años asesorando empresas argentinas' },
  { value: '2', label: 'países: Argentina y Australia' },
  { value: '24 h', label: 'hábiles para responder cada consulta' },
  { value: '100%', label: 'atención remota en todo el país' },
];

export const nav = [
  { label: 'Servicios', href: '/servicios/', mega: true },
  { label: 'Para quién', href: '/para-quien/' },
  { label: 'Red de aliados', href: '/red-de-aliados/' },
  { label: 'Nosotros', href: '/nosotros/' },
  { label: 'Recursos', href: '/recursos/' },
];
