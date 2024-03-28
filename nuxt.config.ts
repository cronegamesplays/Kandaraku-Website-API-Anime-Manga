// https://nuxt.com/docs/api/configuration/nuxt-config
// Importação correta de defineNuxtConfig
import { defineNuxtConfig } from '@nuxt/config';

export default defineNuxtConfig({
  head: {
    titleTemplate: '%s - Kandaraku',
    title: 'Kandaraku',
  },
  // Devtools, modules e css devem ser definidos fora do objeto 'head'
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxt/image", "@pinia/nuxt"],
  css: [
    '~/global.css'
  ],
})
