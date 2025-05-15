import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'

export default defineUserConfig({
    base: '/myblog/',
    lang: 'zh-CN',
    head: [['link', {rel: 'icon', href: '/myblog/images/icons/favicon-32x32.png'}]],
    title: '我的博客',
    description: '我的博客',

    theme: defaultTheme({
        logo: '/images/z2@2x.png',
        logoDark: '/images/z0@2x.png',
        navbar: [
            {
                text: '首页',
                link: '/',
            },
            {
                text: 'Java基础',
                prefix: '/java/',
                children: [
                    // {
                    //     text: '数学',
                    //     link: 'math/'
                    // },
                    // {
                    //     text: '链表',
                    //     link: 'list/'
                    // }
                ],
            },
            {
                text: '数据结构与算法',
                prefix: '/algorithm/',
                children: [
                    {
                        text: '数学',
                        link: 'math/'
                    },
                    {
                        text: '链表',
                        link: 'list/'
                    }
                ],
            },
            {
                text: '工程化工具',
                prefix: '/tools/',
                children: [
                    {
                        text: 'Nginx',
                        link: 'nginx/'
                    },
                     {
                        text: 'Git',
                        link: 'git/'
                    }
                ],
            }
        ],
        sidebar: [
            {
                text: 'Java基础',
                prefix: '/java/',
                link: '/java/',
                children: [

                ],
            },
            {
                text: '数据结构与算法',
                prefix: '/algorithm/',
                children: [
                    {
                        text: '数学',
                        prefix: 'math/',
                        link: 'math/',
                        children: [
                            {
                                text: '快速幂',
                                link: 'binary-exponentiation.md',
                            }
                        ],
                    },
                    {
                        text: '链表',
                        prefix: 'list/',
                        link: 'list/',
                        children: [
                            {
                                text: '单链表',
                                link: 'single.md',
                            },
                            {
                                text: '双链表',
                                link: 'double.md',
                            }
                        ],
                    }
                ],
            },
            {
                text: '工程化工具',
                prefix: '/tools/',
                children: [
                    {
                        text: 'Nginx',
                        prefix: 'nginx/',
                        link: 'nginx/',
                        children: [
                            {
                                text: 'nginx 使用http代理https',
                                link: 'proxy.md',
                            }
                        ],
                    },
                    {
                        text: 'Git',
                        prefix: 'git/',
                        link: 'git/',
                        children: [
                            {
                                text: 'Git常用命令',
                                link: 'git.md',
                            }
                        ],
                    },

                ],
            },
        ],
    }),

    bundler: viteBundler(),
})
