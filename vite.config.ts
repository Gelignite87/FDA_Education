import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      sass: {
        api: 'modern', // или "modern-compiler"
      },
    },
  },
  server: {
    port: 3000,
  },
});
