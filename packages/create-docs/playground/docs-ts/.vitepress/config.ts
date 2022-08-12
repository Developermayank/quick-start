import { defineConfig, DefaultTheme } from 'vitepress'

const guideSidebar: DefaultTheme.SidebarGroup[] = [
  {
    text: 'Guide',
    items: [
      { text: 'Introduction', link: '/guide/introduction' },
      { text: 'Getting Started', link: '/guide/getting-started' },
      { text: 'Theme', link: '/guide/theme' }
    ]
  },
  {
    text: 'Components',
    items: [
      { text: 'Button', link: '/guide/button-component' },
      { text: 'Link', link: '/guide/link-component' }
    ]
  }
]

const sidebar: DefaultTheme.Sidebar = {
  '/guide': guideSidebar
}

const nav: DefaultTheme.NavItem[] = [
  { text: 'Guide', link: '/guide/getting-started', activeMatch: '^/guide/' },
  {
    text: 'VitePress',
    link: 'https://vitepress.vuejs.org/'
  }
]

export default defineConfig({
  lang: 'en-US',
  title: 'create-docs',
  description: 'Quickly generate a static site with VitePress.',
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }]
  ],
  srcDir: 'docs',
  lastUpdated: true,
  themeConfig: {
    socialLinks: [
      {
        icon: 'github',
        link: 'alex8088/quick-start/tree/master/packages/create-docs'
      }
    ],
    logo: '/favicon.svg',
    footer: {
      message: 'Released under the MIT License',
      copyright: 'Copyright © 2022-present Alex Wei and Powered by VitePress'
    },
    nav,
    sidebar
  }
})
