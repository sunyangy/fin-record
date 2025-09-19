import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "fin-think",
  description: "fin's World of Thought",
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Algorithms', link: '/algorithms' },
      { text: 'About me', link: 'https://fin-portfolio.vercel.app'}
    ],

    sidebar: [
      {
        text: 'Algorithms',
        items: [
          { text: 'Algorithms', link: '/algorithms' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunyangy' }
    ]
  }
})
