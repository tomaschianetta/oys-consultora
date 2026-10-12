// Genera las imágenes optimizadas del sitio a partir de los originales.
// Uso: npm run imagenes
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const OUT = 'public/media';
mkdirSync(OUT, { recursive: true });

// Imagen para compartir en redes (1200x630) con el logo nuevo (correr antes preparar-logo.mjs)
const fondo = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#10244F"/><stop offset="1" stop-color="#06122A"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="470" y="190" width="2" height="250" fill="#C9A24F"/>
  <text x="515" y="285" font-family="Georgia, serif" font-size="58" fill="#FFFFFF">Organización y</text>
  <text x="515" y="355" font-family="Georgia, serif" font-size="58" fill="#FFFFFF">Sistemas Consultora</text>
  <text x="517" y="425" font-family="Arial, sans-serif" font-size="26" letter-spacing="1" fill="#C9D3E4">Estudio contable en Rosario · Desde hace 30 años</text>
</svg>`;
const marca = await sharp('public/brand/os-mark-light.png').resize(300, 300, { fit: 'inside' }).toBuffer();
await sharp(Buffer.from(fondo)).composite([{ input: marca, left: 120, top: 165 }]).png().toFile('public/og.png');

console.log('Imágenes generadas en public/');
