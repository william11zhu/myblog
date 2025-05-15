import { hopeTheme } from "vuepress-theme-hope";

export default hopeTheme({
  // 主题配置

    logo: '/images/z2@2x.png',
    logoDark: '/images/z0@2x.png',
    docsDir: "docs",
    plugins:{
        blog: true
    },
    navbar: [
        {
            text: '首页',
            link: '/',
        },
        {
            text: 'Java基础',
            link: '/java/'
        },
        {
            text: '数据结构与算法',
            link: '/algorithm/'
        },
        {
            text: '工程化工具',
            link: '/tools/'
        }
    ],
    sidebar: {
        "/java/": "structure",
        "/algorithm/": "structure",
        "/tools/": "structure"
    },
});