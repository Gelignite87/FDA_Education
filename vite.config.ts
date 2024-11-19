import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

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
})
