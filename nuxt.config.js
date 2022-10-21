export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Guillaume Ducuing Développeur web',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Guillaume Ducuing, Développeur Front-end pour vous accompagner dans tous vos projets !' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '~assets/css/main.css'
  ],
  script: [
    {
      src: "/main.js",
      body: true,
    async: true,
    defer: true
    },
  ],
styleResources: {
    scss: [
      // '~assets/scss/mixins.scss',
      // '~assets/scss/variables.scss'
    ]
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
    'nuxt-gsap-module'
  ],
  gsap: {
    extraPlugins: {
      scrollTo: true,
      scrollTrigger: true
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile:[
      'gsap'
    ]
  }
}
