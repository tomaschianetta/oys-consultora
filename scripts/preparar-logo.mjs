// Genera las versiones del logo a partir de la presentación de logotipos.
// Uso: node scripts/preparar-logo.mjs
import sharp from 'sharp';

const SRC = '../Presentación de logotipos OS en azul y dorado.png';
const OUT = 'public/brand';
const BOX = { left: 135, top: 140, width: 460, height: 420 }; // monograma grande (arriba a la izquierda)

const { data, info } = await sharp(SRC).extract(BOX).removeAlpha().raw().toBuffer({ resolveWithObject: true });

// Color de fondo estimado desde las esquinas
const px = (i) => [data[i], data[i + 1], data[i + 2]];
const corners = [0, (info.width - 1) * 3, (info.height - 1) * info.width * 3, data.length - 3].map(px);
const bg = [0, 1, 2].map((c) => corners.reduce((a, k) => a + k[c], 0) / corners.length);

const navy = Buffer.alloc(info.width * info.height * 4);
const white = Buffer.alloc(info.width * info.height * 4);
for (let p = 0, i = 0; p < info.width * info.height; p++, i += 3) {
  const [r, g, b] = px(i);
  // alfa: qué tan lejos del fondo está el píxel (normalizado por el canal más alejado)
  let a = Math.min(1, Math.max(0, Math.max(...[r, g, b].map((v, c) => (bg[c] - v) / Math.max(1, bg[c] - 10)))) * 1.15);
  // el dorado es claro: su opacidad se mide por la saturación (rojo - azul), no por la oscuridad
  const chroma = (r - b) - (bg[0] - bg[2]);
  if (chroma > 12) a = Math.max(a, Math.min(1, chroma / 70));
  // color "despremultiplicado" contra el fondo
  const un = [r, g, b].map((v, c) => (a > 0.01 ? Math.min(255, Math.max(0, (v - (1 - a) * bg[c]) / a)) : 0));
  const isGold = un[0] > un[2] + 25; // dorado: más rojo que azul
  const o = p * 4;
  navy[o] = un[0]; navy[o + 1] = un[1]; navy[o + 2] = un[2]; navy[o + 3] = Math.round(a * 255);
  if (isGold) { white[o] = un[0]; white[o + 1] = un[1]; white[o + 2] = un[2]; }
  else { white[o] = 255; white[o + 1] = 255; white[o + 2] = 255; }
  white[o + 3] = Math.round(a * 255);
}

const raw = { raw: { width: info.width, height: info.height, channels: 4 } };
await sharp(navy, raw).trim().png().toFile(`${OUT}/os-mark.png`);
await sharp(white, raw).trim().png().toFile(`${OUT}/os-mark-light.png`);
await sharp(navy, raw).trim().resize(160).png().toFile(`${OUT}/os-mark-160.png`);
await sharp(white, raw).trim().resize(160).png().toFile(`${OUT}/os-mark-light-160.png`);

// Favicon / ícono de app: monograma claro sobre cuadrado navy redondeado
const markLight = await sharp(white, raw).trim().resize(380, 380, { fit: 'inside' }).png().toBuffer();
const tile = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><defs><linearGradient id="g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1A3466"/><stop offset="1" stop-color="#0B1D40"/></linearGradient></defs><rect width="512" height="512" rx="112" fill="url(#g)"/></svg>`);
const icon = await sharp(tile).composite([{ input: markLight, gravity: 'center' }]).png().toBuffer();
await sharp(icon).toFile('public/apple-touch-icon.png');
await sharp(icon).resize(180).toFile('public/apple-touch-icon.png');
await sharp(icon).resize(64).toFile('public/favicon-64.png');
await sharp(icon).resize(32).toFile('public/favicon-32.png');

console.log('Logo generado', info.width, info.height, 'fondo', bg.map(Math.round));
