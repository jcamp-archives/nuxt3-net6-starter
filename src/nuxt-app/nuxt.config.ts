import { defineNuxtConfig } from 'nuxt'
import PROXY_CONFIG from './aspnetcore-proxy'

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
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@formkit/nuxt',
    '@sfxcode/nuxt-primevue',
  ],
  experimental: {
    reactivityTransform: true,
  },
  // imports: {
  // does not work with types at this point
  // https://github.com/antfu/unplugin-auto-import/issues/61
  // imports: [
  //   {
  //     name: 'FormKitNode',
  //     from: '@formkit/core',
  //   },
  // ],
  // },
  unocss: {
    preflight: false,
  },
  colorMode: {
    classSuffix: '',
  },
  ssr: false,
  css: [
    'primevue/resources/themes/saga-blue/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css',
    '@sfxcode/formkit-primevue/dist/sass/formkit-prime-inputs.scss',
    '@sfxcode/formkit-primevue/dist/sass/formkit-primevue.scss',
  ],
  build: {
    transpile: ['primevue'],
  },
})
