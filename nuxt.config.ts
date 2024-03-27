// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxt/image", "@pinia/nuxt"],
  css: [
    '~/global.css'
  ],
})