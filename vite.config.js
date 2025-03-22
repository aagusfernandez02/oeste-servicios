import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@images': path.resolve(__dirname, 'src/assets/images'),
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        // Esta línea hará que las variables estén disponibles en todos los archivos de estilo
        additionalData: `@use "@/assets/_global.scss" as *;`
      },
    },
  },
})
