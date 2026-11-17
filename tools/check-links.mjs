// Confere os links internos do site gerado em dist/: todo href/src que aponta para o próprio
// site precisa existir, e toda âncora (#id) precisa existir na página de destino.
// Uso: npm run build && npm run check:links
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, sep } from 'node:path';

const dist = 'dist';
const config = readFileSync('astro.config.mjs', 'utf8');
const base = (config.match(/base:\s*'([^']*)'/)?.[1] ?? '').replace(/\/$/, '');

/** Lista todos os arquivos .html de dist/. */
function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    if (statSync(path).isDirectory()) return htmlFiles(path);
    return path.endsWith('.html') ? [path] : [];
  });
}

/** Converte um caminho público (/55-Tech/servicos/) no arquivo correspondente em dist/. */
function resolveFile(pathname) {
  const local = decodeURIComponent(pathname.slice(base.length)) || '/';
  const candidates = local.endsWith('/')
    ? [join(dist, local, 'index.html')]
    : [join(dist, local), join(dist, local, 'index.html'), join(dist, `${local}.html`)];
  return candidates.find((file) => existsSync(file) && statSync(file).isFile());
}

const idsCache = new Map();
function idsOf(file) {
  if (!idsCache.has(file)) {
    const html = readFileSync(file, 'utf8');
    idsCache.set(file, new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
  }
  return idsCache.get(file);
}

const errors = [];
let checked = 0;

for (const file of htmlFiles(dist)) {
  const page = `/${relative(dist, file).split(sep).join('/')}`;
  const html = readFileSync(file, 'utf8');
  for (const [, attr, value] of html.matchAll(/\s(href|src)="([^"]*)"/g)) {
    const isInternal = value.startsWith('#') || value === base || value.startsWith(`${base}/`);
    if (!isInternal) continue;
    checked++;

    const [pathname, hash] = value.split('#');
    const target = pathname ? resolveFile(pathname) : file;
    if (!target) {
      errors.push(`${page}: ${attr}="${value}" aponta para um arquivo que não existe`);
      continue;
    }
    if (hash && !idsOf(target).has(hash)) {
      errors.push(`${page}: ${attr}="${value}" usa a âncora #${hash}, que não existe no destino`);
    }
  }
}

if (errors.length) {
  console.error(`${errors.length} link(s) interno(s) quebrado(s):\n${errors.join('\n')}`);
  process.exit(1);
}
console.log(`Links internos OK (${checked} verificados).`);
