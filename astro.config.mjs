import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Configuración
export default defineConfig({
  integrations: [react(), tailwind()],
});
