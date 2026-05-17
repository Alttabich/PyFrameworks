import { defineConfig } from 'vite'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/PyFrameworks/',

  plugins: [
    UnoCSS(),
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        django: resolve(__dirname, 'django.html'),
        fastapi: resolve(__dirname, 'fastapi.html'),
        flask: resolve(__dirname, 'flask.html'),
        litestar: resolve(__dirname, 'litestar.html'),
        compare: resolve(__dirname, 'compare.html'),
      },
    },
  },
})