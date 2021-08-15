import colors from 'vuetify/es5/util/colors'
import textSEO from './utils/textSEO'

export default {
  target: 'static',
  ssr: true,
  generate: {
    fallback: true
  },
  env: {
    version: process.env.VERSION
  },
  publicRuntimeConfig: {
    nodeEnv: process.env.NODE_ENV,
    version: process.env.VERSION,
    statusProject: process.env.STATUS_PROJECT,
    dateStartDeploy: process.env.DATE_START_DEPLOY

  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: `%s | ${textSEO.meta.nameTopic}`,
    title: textSEO.meta.nameTopic,
    htmlAttrs: {
      lang: textSEO.meta.lang
    },
    meta: [
      { charset: textSEO.meta.charset },

      { name: 'viewport', content: textSEO.meta.viewport },
      { name: 'robots', content: textSEO.meta.robots },
      { name: 'format-detection', content: textSEO.meta['format-detection'] },
      {
        name: 'keywords',
        content: textSEO.meta.keywords
      },
      {
        hid: 'description',
        name: 'description',
        content: textSEO.meta.description
      },
      {
        property: 'og:title',
        name: 'og:title',
        content: textSEO.meta.nameTopic
      },
      {
        property: 'og:description',
        name: 'og:description',
        content: textSEO.meta.description
      },
      {
        property: 'og:url', name: 'og:url', content: textSEO.meta['og:url']
      },
      {
        property: 'og:site_name', name: 'og:site_name', content: textSEO.meta['og:site_name']
      },
      {
        property: 'og:image',
        name: 'og:image',
        content: textSEO.meta['og:image']
      },
      { property: 'og:type', name: 'og:type', content: textSEO.meta['og:type'] },
      { property: 'facebook:title', name: 'facebook:title', content: textSEO.meta['facebook:title'] },
      { property: 'facebook:image', name: 'facebook:image', content: textSEO.meta['facebook:image'] },
      { property: 'linkedin:title', name: 'linkedin:title', content: textSEO.meta['linkedin:title'] },
      { property: 'linkedin:image', name: 'linkedin:image', content: textSEO.meta['linkedin:image'] },
      { property: 'twitter:card', name: 'twitter:card', content: textSEO.meta['twitter:card'] }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: textSEO.link.icon },
      {
        rel: 'canonical',
        href: textSEO.link.canonical
      }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['vuetify/dist/vuetify.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/head-util.js', '~/plugins/lodash.js', '~/plugins/vuetify.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next', '@nuxtjs/moment', 'nuxt-i18n'],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/scss/main.scss'],
    // treeShake: true,
    theme: {
      dark: false,
      treeShake: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  },

  // i18n setting
  i18n: {
    locales: [
      { code: 'en', name: 'EN', file: 'en.json' },
      { code: 'th', name: 'TH', file: 'th.json' }
    ],
    langDir: 'locales/',
    lazy: true,
    defaultLocale: 'en',
    strategy: 'no_prefix',
    detectBrowserLanguage: false
  },

  loading: {
    color: '#1E1E1E',
    height: '5px'
  }
}
