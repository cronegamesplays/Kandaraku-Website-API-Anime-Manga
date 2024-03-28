export default defineNuxtConfig({
  head: {
    titleTemplate: '%s - Kandaraku',
    title: 'Kandaraku',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Assista seus animes online gratuitamente ou acesse o banco de dados de diversos animes disponiveis pelo Kandaraku API.' },
      { property: 'og:url', content: 'https://v1-kandaraku-beta.vercel.app/' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Kandaraku Beta v1' },
      { property: 'og:description', content: 'Assista seus animes online gratuitamente ou acesse o banco de dados de diversos animes disponiveis pelo Kandaraku API.' },
      { property: 'og:image', content: '/favicon.ico' }, // Remove o diretório 'public' da imagem
      { property: 'og:image:alt', content: 'Kandaraku Logo' },
      { property: 'og:locale', content: 'pt_BR' },
      { property: 'og:site_name', content: 'Kandaraku' }
    ],
  },
  devtools: { enabled: true },
  modules: ["nuxt-icon", "@nuxt/image", "@pinia/nuxt"],
  css: [
    '~/global.css'
  ],
})