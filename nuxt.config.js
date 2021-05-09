export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'shopify-frontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  // Environment variables
  publicRuntimeConfig: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    omdbUrl: process.env.OMDB_URL,
    omdbApiKey: process.env.OMDB_APIKEY
  },
  privateRuntimeConfig: {
 
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/bootstrap-vue',
    '@/plugins/vue-social-sharing'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts',
    ['nuxt-fontawesome', {
            imports: [
            {
              set: '@fortawesome/free-solid-svg-icons',
              icons: ['fas']
            },
            {
              set:'@fortawesome/free-brands-svg-icons',
              icons: ['fab']
            }
          ]
          }
    ]
  ],
 
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // Vue Social Sharing Module
    'vue-social-sharing/nuxt',
    // Nuxt Clipboard Module
    ['nuxt-clipboard', { autoSetContainer: true }]
  ],
  
  clipboard: {
    autoSetContainer: true
  },

  googleFonts: {
     families: {
      'Space+Grotesk': {
        wght: [300, 400, 500, 600, 700]
      },
     } 
  },
 

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel:{
      plugins: [
        ['@babel/plugin-proposal-private-methods', { loose: true }]
      ]
    },
    extend(config, ctx) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    },
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
