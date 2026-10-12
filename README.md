# Sitio web O&S Consultora (v2)

Sitio estático hecho con [Astro](https://astro.build). Cada página se genera como HTML real,
así Google puede leer todo el contenido (el sitio anterior se armaba con JavaScript en el navegador).

## Antes de publicar: completar datos

Todo lo pendiente está marcado con `TODO` en estos archivos:

| Archivo | Qué completar |
|---|---|
| `src/data/site.ts` | WhatsApp, teléfono, dirección de la oficina, LinkedIn, token de Cloudflare Analytics |
| `src/data/allies.ts` | Áreas y profesionales de la red: sumá o quitá según los acuerdos vigentes |
| `src/pages/nosotros.astro` | Cuando estén las fotos y los perfiles del equipo, sumamos esa sección |
| `src/data/services.ts` | Revisar los textos de cada servicio (sobre todo Selección de talento, cuando tengas el acuerdo con el recruiter) |

Lo que queda vacío no se muestra (por ejemplo, sin número no aparece el botón de WhatsApp).

## Cómo editar contenido

- **Servicios:** `src/data/services.ts`. Cada servicio crea su página en `/servicios/<slug>/` y aparece solo en el menú.
- **Segmentos ("Para quién"):** `src/data/segments.ts`
- **Notas de Recursos:** copiá un archivo de `src/content/recursos/`, cambiale el nombre, el texto y la fecha.
- **Rubros y video del inicio:** `src/data/rubros.ts`. Cada rubro usa `public/media/rubros/<id>.mp4` y `<id>.jpg`.
  El inicio pasa los videos en orden, con fundido. Para cambiar uno, reemplazá los archivos con el mismo nombre.
  Recomendado: videos horizontales, sin audio, de 5 a 15 segundos y de menos de 5 MB (960×540 o 1280×720).
  Lo ven todos los visitantes; solo quien tiene activado "ahorro de datos" en el celular ve la imagen fija.
- **Video de Rosario:** no hay tomas gratuitas de Rosario, el Monumento ni el Paraná. Opciones: grabar con el
  celular (dron o toma estable desde la costanera), o comprar un clip en Shutterstock o Envato
  (buscá "Rosario Argentina drone"). Guardalo como `public/media/rubros/rosario.mp4` y `.jpg`, y agregá
  `{ id: 'rosario', label: 'Rosario', ... }` primero en `rubros.ts`.
- **Logo:** `public/brand/`. Se genera desde la presentación de logotipos con `node scripts/preparar-logo.mjs`
  (también genera los favicons). La imagen para redes (`og.png`) sale de `node scripts/preparar-imagenes.mjs`.

## Probar en tu computadora

> La carpeta "O&S V2.0" tiene un `&` en el nombre, y eso rompe `npm run` en Windows. Usá estos comandos:

```bash
node node_modules/astro/bin/astro.mjs dev
```
Abre el sitio en http://localhost:4321 y se recarga solo cuando cambiás algo.

```bash
node node_modules/astro/bin/astro.mjs build
```
Genera la versión final en `dist/`.

## Publicar

El sitio se publica con **GitHub Pages** desde el repo `tomaschianetta/oys-consultora`
(el dominio está en Cloudflare, solo como DNS).

| Rama / etiqueta | Qué tiene |
|---|---|
| `main` | El sitio **ya compilado** (el contenido de `dist/`). Todo lo que llega acá se publica solo en 1 o 2 minutos. |
| `fuente-astro` | Este código fuente. |
| `v1.1-sitio-anterior` | El sitio viejo, por si hay que volver atrás. |

**Para publicar un cambio:**
1. Editar, compilar (`node node_modules/astro/bin/astro.mjs build`) y revisar.
2. Subir el código a la rama `fuente-astro`.
3. Reemplazar el contenido de `main` por el de `dist/` y subirlo. Así se publica.

**Vista previa para mostrar cambios sin publicar:** https://oys-preview.pages.dev (Cloudflare Pages,
proyecto `oys-preview`, oculta de Google).

**Volver al sitio anterior:** restaurar en `main` el contenido de la etiqueta `v1.1-sitio-anterior` y subirlo.
