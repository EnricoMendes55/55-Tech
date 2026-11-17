// O site é publicado dentro de uma subpasta (/55-Tech). Este helper coloca o prefixo
// certo em qualquer link interno, então a troca por domínio próprio não exige mexer nos componentes.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function url(path = '/'): string {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
