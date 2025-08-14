import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/codeluni-landing-page/',
  plugins: [vue()],
  server: {
    host: '192.168.10.19'
  }
})
