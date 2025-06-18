import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Añadimos la base para el despliegue en GitHub Pages
  base: '/automotriz-prototipo/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});