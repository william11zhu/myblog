import {defineUserConfig} from 'vuepress'
import theme from "./theme.js";

export default defineUserConfig({
    base: '/myblog/',
    lang: 'zh-CN',
    head: [['link', {rel: 'icon', href: '/myblog/images/icons/favicon-32x32.png'}]],
    title: '我的博客',
    description: '我的博客',
    theme,
})
