// O site é publicado dentro de uma subpasta (/55-Tech). Este helper coloca o prefixo
// certo em qualquer link interno, então a troca por domínio próprio não exige mexer nos componentes.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/'): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

const withoutTrailingSlash = (path: string) => path.replace(/\/+$/, '') || '/';

/**
 * Estado de `path` (sem o base path) em relação à página aberta, para o atributo aria-current:
 * 'page' quando é a própria página; 'true' quando a página aberta está dentro dela
 * (ex.: /servicos/presenca-digital/ dentro de /servicos/); undefined nos demais casos.
 * Âncoras ('/#servicos') e a página inicial nunca contam como seção atual.
 */
export function getCurrentState(
  path: string,
  currentPathname: string,
): 'page' | 'true' | undefined {
  if (path.includes('#')) return undefined;
  const target = withoutTrailingSlash(url(path));
  const current = withoutTrailingSlash(currentPathname);
  if (target === current) return 'page';
  if (path !== '/' && current.startsWith(`${target}/`)) return 'true';
  return undefined;
}
