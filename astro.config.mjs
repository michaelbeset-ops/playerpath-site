// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// site + base zijn nodig voor GitHub Pages: de site draait niet op de
// hoofdmap maar onder /playerpath-site/. Krijg je later een eigen domein
// (bijvoorbeeld playerpath.nl), zet `base` dan terug op '/'.
export default defineConfig({
  site: 'https://michaelbeset-ops.github.io',
  base: '/playerpath-site',

  vite: {
    plugins: [tailwindcss()],
  },
});
