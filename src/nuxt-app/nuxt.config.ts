import { defineNuxtConfig } from 'nuxt'
import PROXY_CONFIG from './proxy.conf'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  vite: {
    server: {
      proxy: PROXY_CONFIG
    }
  }
})
