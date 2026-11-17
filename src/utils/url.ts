// O site é publicado dentro de uma subpasta (/55-Tech). Este helper coloca o prefixo
// certo em qualquer link interno, então a troca por domínio próprio não exige mexer nos componentes.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/'): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

const withoutTrailingSlash = (path: string) => path.replace(/\/+$/, '') || '/';

/**
 * true quando `path` (sem o base path, ex.: '/servicos/') é a página aberta.
 * Âncoras ('/#servicos') nunca contam como página atual.
 */
export function isCurrentPage(path: string, currentPathname: string): boolean {
  if (path.includes('#')) return false;
  return withoutTrailingSlash(url(path)) === withoutTrailingSlash(currentPathname);
}
