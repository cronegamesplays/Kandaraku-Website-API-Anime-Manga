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

/*import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  head() {
    return {
      title: 'Kandaraku Beta v1',
      meta: [
        { hid: 'description', name: 'description', content: 'Assista seus animes online gratuitamente ou acesse o banco de dados de diversos animes disponíveis pelo Kandaraku API.' },
        { hid: 'og:url', property: 'og:url', content: 'https://v1-kandaraku-beta.vercel.app/' },
        { hid: 'og:type', property: 'og:type', content: 'website' },
        { hid: 'og:title', property: 'og:title', content: 'Kandaraku Beta v1' },
        { hid: 'og:description', property: 'og:description', content: 'Assista seus animes online gratuitamente ou acesse o banco de dados de diversos animes disponíveis pelo Kandaraku API.' },
        { hid: 'og:image', property: 'og:image', content: '/favicon.ico' },
        { hid: 'og:image:alt', property: 'og:image:alt', content: 'Kandaraku Logo' },
        { hid: 'og:locale', property: 'og:locale', content: 'pt_BR' },
        { hid: 'og:site_name', property: 'og:site_name', content: 'Kandaraku' }
      ]
    };
  }
})*/