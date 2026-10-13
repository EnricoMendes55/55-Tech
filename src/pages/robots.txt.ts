// Gera o robots.txt no build, apontando para o sitemap com o endereço definido em astro.config.mjs.
import type { APIRoute } from 'astro';
import { url } from '../utils/url';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL(url('/sitemap-index.xml'), site);
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${sitemap.href}\n`);
};
