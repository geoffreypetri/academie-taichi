import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Académie de Taichi",
  description: "Arts Energétiques",
  base: '/academie-taichi/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Note école', link: '/ecole' },
      { text: 'Taichi', link: '/taichi' },
      { text: 'Qi Gong', link: '/qi-gong' },
      { text: 'Sport Santé', link: '/sport-sante' },
      { text: 'Renseignements', link: '/infos' },
    ],

    sidebar: [
      { text: 'Notre école', link: '/ecole' },
      { text: 'Le Taichi', link: '/taichi' },
      { text: 'Le Qi Gong', link: '/qi-gong' },
      { text: 'Sport Santé', link: '/sport-sante' },
      { text: 'Renseignements', link: '/infos' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Association loi 1901 soutenue par la Ville de Biot',
      copyright: 'Copyright © 2019-present ATRE Biot · mentions légales · contact'
    }
  }
})
