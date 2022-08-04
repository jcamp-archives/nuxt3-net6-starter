import { defineNuxtConfig } from 'nuxt'
import PROXY_CONFIG from './proxy.conf'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    server: {
      proxy: PROXY_CONFIG,
    },
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/tailwindcss',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@formkit/nuxt',
  ],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: false,
  },
  colorMode: {
    classSuffix: '',
  },
  // ssr: false,
})
