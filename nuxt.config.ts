// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    '@nuxtjs/i18n',
    '@nuxthub/core'
  ],
  i18n: {
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'en',
    locales: [
      {
        name: 'English',
        code: 'en',
        file: 'en.json'
      }
    ],
    experimental: {
      localeDetector: './localeDetector.ts'
    }
  },
  build: {
    transpile: [
      'trpc-nuxt'
    ]
  },
  compatibilityDate: '2024-08-19',
  devtools: {
    enabled: true
  },
  typescript: {
    shim: false
  }
})