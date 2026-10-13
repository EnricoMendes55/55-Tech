import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// `site` + `base` formam o endereço público: https://enricomendes55.github.io/55-Tech
// Ao usar domínio próprio, troque `site` pelo domínio e remova a linha `base`.
export default defineConfig({
  site: 'https://enricomendes55.github.io',
  base: '/55-Tech',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
