var nav = require('./nav.js')
var { ComponentNav, MultipleNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'Anshare Wiki百科 v0.1',
  description: '为创造而生',
  base: '/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    sidebarDepth: 3,
    locales: {
      '/': {
        label: '简体中文',
        nav: [
          {
            text: '入门指南',
            link: '/guide/'
          },
          {
            text: '框架介绍',
            items: genNav(deepClone(ComponentNav))
          },
          {
            text: '综合教程',
            items: genNav(deepClone(MultipleNav))
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: '前言',
              collapsable: false,
              children: ['/guide/perface/perface.md']
            },
            {
              title: '基础',
              collapsable: false,
              children: genEssentialsSidebar()
            },
            {
              title: '进阶',
              collapsable: false,
              children: genAdvancedSidebar()
            }
          ],
          '/multiple/powerdesign/': ['/multiple/powerdesign/index.md'],

          '/feature/script/': ['/feature/script/svgo.md']
        },
        lang: 'zh-CN',
        description: 'Anshare Wiki百科,专注于技术分享'
      }
    }
  },

  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: 'UA-109340118-1'
}

function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/guide/',
    '/guide/essentials/environment.md',
    '/guide/essentials/frontend.md',
    '/guide/essentials/backend.md'
    // '/guide/essentials/new-page.md',
    // '/guide/essentials/style.md',
    // '/guide/essentials/server.md',
    // '/guide/essentials/mock-api.md',
    // '/guide/essentials/import.md',
    // '/guide/essentials/deploy.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genAdvancedSidebar(type = '') {
  const mapArr = [
    '/guide/advanced/cors.md'
    // '/guide/advanced/eslint.md',
    // '/guide/advanced/git-hook.md',
    // '/guide/advanced/lazy-loading.md',
    // '/guide/advanced/chart.md',
    // '/guide/advanced/icon.md',
    // '/guide/advanced/theme.md',
    // '/guide/advanced/i18n.md',
    // '/guide/advanced/error.md',
    // '/guide/advanced/webpack.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
