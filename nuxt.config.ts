// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxt/image", "@pinia/nuxt", "@nuxt/ui", "@vite-pwa/nuxt"],
  /*router: {
    middleware: ["auth"],
  },
  auth: {
    strategies: {
      discord: {
        clientId: '1223499591727448105',
        clientSecret: '_a6GhDoNxzr_UqYDDwyvHnGYtYhiiP9N'
      },
    }
  },*/
  css: [
    '~/global.css'
  ],
})