var nav = require('./nav.js')
var { ComponentNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'Anshare Wiki百科',
  description: 'A magical share center',
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
          }
        ],
        sidebar: {
          '/guide/': [
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
          '/feature/component/': getComponentSidebar(deepClone(ComponentNav)),
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
    '/guide/essentials/layout.md',
    '/guide/essentials/router-and-nav.md',
    '/guide/essentials/permission.md',
    '/guide/essentials/tags-view.md',
    '/guide/essentials/new-page.md',
    '/guide/essentials/style.md',
    '/guide/essentials/server.md',
    '/guide/essentials/mock-api.md',
    '/guide/essentials/import.md',
    '/guide/essentials/deploy.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genAdvancedSidebar(type = '') {
  const mapArr = [
    '/guide/advanced/cors.md',
    '/guide/advanced/eslint.md',
    '/guide/advanced/git-hook.md',
    '/guide/advanced/lazy-loading.md',
    '/guide/advanced/chart.md',
    '/guide/advanced/icon.md',
    '/guide/advanced/theme.md',
    '/guide/advanced/i18n.md',
    '/guide/advanced/error.md',
    '/guide/advanced/webpack.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
