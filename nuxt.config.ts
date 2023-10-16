export default defineNuxtConfig({
  pages: true,
  modules: [
    'nuxt-icon',
    '@pinia/nuxt',
    '@vueuse/motion/nuxt'
  ],
  css: ['~/assets/styles/style.css']
})