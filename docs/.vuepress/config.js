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
                text: '数据结构与算法',
                link: '/algorithm/',
                children: [
                    {
                        text: '数学',
                        link: '/math/math.md'
                    }
                ],
            }
        ],
        // sidebar: [
        //     {
        //         text: '数据结构与算法',
        //         link: '/algorithm/',
        //         children: [
        //             {
        //                 text: '数学',
        //                 link: '/math/',
        //                 children: [
        //                     {
        //                         text: '快速幂',
        //                         link: '/binary-exponentiation.md',
        //                     }
        //                 ],
        //             }
        //         ],
        //     }
        // ],
    }),

    bundler: viteBundler(),
})
