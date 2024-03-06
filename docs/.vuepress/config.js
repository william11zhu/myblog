import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/myblog/',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/myblog/images/icons/favicon-32x32.png' }]],
  title: '我的博客',
  description: '我的博客',

  theme: defaultTheme({
    logo: '/images/z2@2x.png',
    logoDark: '/images/z0@2x.png',
    navbar: ['/', '/get-started'],
  }),

  bundler: viteBundler(),
})
