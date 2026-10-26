// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isVercel = import.meta.env.VERCEL === 'true';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: isVercel
    ? 'https://portfolio-danieldpalmas-projects.vercel.app'
    : 'https://danieldpalma.github.io',
  base: isVercel ? '/' : '/portfolio/',
  outDir: './docs',
});
