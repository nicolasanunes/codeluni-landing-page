import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { templateCompilerOptions } from '@tresjs/core'

// https://vite.dev/config/
export default defineConfig({
  base: '/codeluni-landing-page/',
  plugins: [vue({
    ...templateCompilerOptions
  })],
  server: {
    host: '192.168.10.19'
  }
})
