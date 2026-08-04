# Cómo se publican cambios en oysconsultora.com.ar

La web vive en la rama `main` y se publica sola cuando algo llega ahí.
Para no romper el sitio en vivo, los cambios pasan por este proceso:

## Flujo

1. **Los cambios se preparan en la rama `borrador`** (nunca directo en `main`).
2. **Se prueba antes de publicar** con el test de humo:
   ```
   bash tools/probar-local.sh
   ```
   Abre la página en un navegador de verdad y verifica que:
   - Renderiza (no queda en pantalla en blanco)
   - No tiene errores de JavaScript
   - Está el contenido clave, las tarjetas de servicio y el formulario
   Si algo falla, sale con error → **no se publica**.
3. Se revisan capturas (mobile + desktop).
4. Con el OK, se fusiona `borrador` → `main` y el sitio se publica.
5. Cada versión buena se **etiqueta** (`v1.0`, `v1.1`, …) para poder volver atrás.

## Volver a una versión anterior (rollback)

```
git checkout main
git reset --hard v1.0     # o la etiqueta que sea
git push --force origin main
```

## Etiquetas de versión

- `v1.0` — Sitio inicial completo: web + dominio + HTTPS + mail + formulario + SEO.
