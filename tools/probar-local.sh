#!/usr/bin/env bash
# Prueba la web localmente ANTES de publicar (entorno Claude Code sandbox).
# Descarga React desde npm (unpkg está bloqueado en el sandbox), arma una copia
# local de index.html y corre el test de humo. Sale 0 si todo OK, 1 si algo falla.
set -e
DIR="$(cd "$(dirname "$0")/.." && pwd)"
CACHE="$DIR/tools/.cache"
PW="${PLAYWRIGHT_PATH:-/opt/node22/lib/node_modules}"
mkdir -p "$CACHE"
fetch_umd() { # $1=pkg $2=version $3=umdfile $4=outname
  if [ ! -f "$CACHE/$4" ]; then
    curl -s "https://registry.npmjs.org/$1/-/$1-$2.tgz" -o "$CACHE/t.tgz"
    tar xzf "$CACHE/t.tgz" -C "$CACHE"
    cp "$CACHE/package/umd/$3" "$CACHE/$4"
    rm -rf "$CACHE/package" "$CACHE/t.tgz"
  fi
}
fetch_umd react 18.3.1 react.production.min.js react.js
fetch_umd react-dom 18.3.1 react-dom.production.min.js react-dom.js
TMP="$(mktemp -d)"
cp "$CACHE/react.js" "$CACHE/react-dom.js" "$DIR/tools/smoke-test.cjs" "$TMP/"
python3 - "$DIR/index.html" "$TMP/index.html" << 'PY'
import re,sys
h=open(sys.argv[1]).read()
h=h.replace('https://unpkg.com/react@18.3.1/umd/react.production.min.js','react.js')
h=h.replace('https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js','react-dom.js')
h=re.sub(r'\s+integrity="[^"]+"','',h); h=re.sub(r'\s+crossorigin="[^"]*"','',h)
open(sys.argv[2],'w').write(h)
PY
cd "$TMP"
set +e
NODE_PATH="$PW" node smoke-test.cjs
CODE=$?
cd "$DIR"; rm -rf "$TMP"
exit $CODE
