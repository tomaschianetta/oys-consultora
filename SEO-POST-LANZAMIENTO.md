# SEO post-lanzamiento: checklist

Lo técnico ya está resuelto en el sitio: una página por servicio, títulos y descripciones únicos,
datos estructurados (AccountingService, Service, FAQPage, Article, BreadcrumbList), sitemap y canonical.
Lo que sigue depende de acciones fuera del código.

## Semana 1: dar de alta el sitio

- [ ] **Google Search Console** (search.google.com/search-console): agregá la propiedad de dominio `oysconsultora.com.ar`. La verificación por DNS se hace en Cloudflare en 2 minutos.
- [ ] En Search Console → Sitemaps, enviá `https://oysconsultora.com.ar/sitemap-index.xml`.
- [ ] En Search Console → Inspección de URLs, pedí la indexación de la home y de las 3 o 4 páginas de servicio más importantes.
- [ ] **Bing Webmaster Tools**: importá la propiedad desde Search Console (un clic).
- [ ] **Cloudflare Web Analytics**: activalo y pegá el token en `src/data/site.ts` (`cfAnalyticsToken`).

## Semana 1: Google Business Profile (lo que más impacta en las búsquedas locales)

- [ ] Creá o reclamá el perfil en business.google.com.
- [ ] Categoría principal: **Contador**. Secundarias: Asesor fiscal, Servicio de contabilidad.
- [ ] Dirección real (o zona de servicio si no atendés al público), horario, teléfono y web.
- [ ] Cargá los servicios con el mismo nombre que en el sitio.
- [ ] Subí el logo, una foto de portada y fotos del equipo cuando las tengas.
- [ ] **Pedí reseñas** a 10 o 15 clientes de confianza, con el enlace directo que da Google. Respondé todas.

## Mes 1: presencia y enlaces

- [ ] Página de empresa en LinkedIn (y cargá la URL en `site.ts`).
- [ ] Figurar en el directorio de matriculados del Consejo Profesional de Ciencias Económicas de Santa Fe.
- [ ] Cámaras empresarias y asociaciones de Rosario donde participes.
- [ ] Pedirles a los aliados de la red que enlacen a `/red-de-aliados/` desde sus webs, y hacer lo mismo con ellos.
- [ ] Mismo nombre, dirección y teléfono en todos lados (Google, LinkedIn, directorios).

## Todos los meses: contenido

- [ ] 1 o 2 notas nuevas en Recursos. Ideas: recategorización del Monotributo (enero y julio), Ganancias y Bienes Personales (antes del vencimiento anual), aguinaldo (junio y diciembre), "cuánto cuesta un empleado en 2027", "cómo facturar al exterior".
- [ ] Compartir cada nota en LinkedIn y por WhatsApp a clientes.
- [ ] Revisar que la página de vencimientos siga vigente.

## Cada 3 meses: medir

- [ ] Search Console → Rendimiento: ¿qué búsquedas traen visitas? ¿Qué páginas tienen muchas impresiones y pocos clics? (Mejorales el título.)
- [ ] Search Console → Páginas: ¿hay páginas sin indexar? ¿Por qué?
- [ ] ¿Cuántas consultas llegaron por el formulario y de qué servicio?

## Búsquedas objetivo (para ir midiendo)

estudio contable rosario · contador rosario · contador para monotributistas rosario ·
liquidación de sueldos rosario · constituir sas rosario · certificación de ingresos rosario ·
contador para pymes · búsqueda de administrativo contable rosario
