// Test de humo: verifica que la página carga y funciona. Sale 1 si algo falla.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');

const ROOT = process.cwd();
const PORT = 8799;
const MIME = { '.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.xml':'application/xml','.txt':'text/plain','.json':'application/json' };

const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const file = path.join(ROOT, p);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end('nf'); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
  fs.createReadStream(file).pipe(res);
});

const fail = (m) => { console.error('❌ FALLO:', m); process.exitCode = 1; };
const ok = (m) => console.log('✅', m);

(async () => {
  await new Promise(r => server.listen(PORT, r));
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('console', m => { if (m.type() === 'error' && !/CERT|ERR_|net::/.test(m.text())) errors.push('console: ' + m.text()); });
  try {
    const resp = await page.goto(`http://localhost:${PORT}/index.html`, { waitUntil: 'networkidle', timeout: 30000 });
    if (!resp || resp.status() !== 200) fail(`HTTP ${resp && resp.status()}`); else ok('Responde HTTP 200');
    await page.waitForTimeout(2000);
    const rootKids = await page.evaluate(() => document.getElementById('root')?.children.length || 0);
    if (rootKids < 1) fail('No renderizó (pantalla en blanco)'); else ok('Renderizó (React montó)');
    if (errors.length) fail('Errores JS: ' + errors.slice(0,5).join(' | ')); else ok('Sin errores de JavaScript');
    const body = await page.evaluate(() => document.body.innerText);
    for (const kw of ['Contabilidad','Argentina','info@oysconsultora.com.ar']) {
      if (!body.includes(kw)) fail(`Falta: "${kw}"`); else ok(`Contenido: "${kw}"`);
    }
    const svc = await page.locator('.svc-clickable').count();
    if (svc < 15) fail(`Pocas tarjetas (${svc})`); else ok(`Tarjetas de servicio: ${svc}`);
    const form = await page.locator('form.contact-form input[name="access_key"]').count();
    if (form < 1) fail('Falta formulario/access key'); else ok('Formulario OK');
  } catch (e) { fail('Excepción: ' + e.message); }
  finally { await browser.close(); server.close(); }
  console.log(process.exitCode === 1 ? '\n🚫 VERIFICACIÓN FALLIDA — no publicar.' : '\n🎉 VERIFICACIÓN OK — listo para publicar.');
})();
