var nav = require('./nav.js')
var { EcosystemNav, ComponentNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'Anshare Team Knowledge',
  description: 'A magical share center',
  base: '/vue-element-admin-site/',
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
    repo: 'PanJiaChen/vue-element-admin',
    docsRepo: 'PanJiaChen/vue-element-admin-site',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    algolia: {
      apiKey: 'ffce0083d0830de5f562c045a481410b',
      indexName: 'vue_element_admin'
    },
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: '功能',
            items: genNav(deepClone(ComponentNav), 'ZH')
          },
          {
            text: '生态系统',
            items: genNav(deepClone(EcosystemNav), 'ZH')
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Essentials',
              collapsable: false,
              children: genEssentialsSidebar()
            },
            {
              title: 'Advanced',
              collapsable: false,
              children: genAdvancedSidebar()
            },
            {
              title: 'Other',
              collapsable: false,
              children: [
                '/guide/other/gitter.md',
                '/guide/other/release-notes.md'
              ]
            }
          ],
          '/feature/component/': getComponentSidebar(
            deepClone(ComponentNav),
            'EN'
          ),
          '/feature/script/': ['/feature/script/svgo.md']
        }
      },
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/guide/'
          },
          {
            text: '功能',
            items: genNav(deepClone(ComponentNav), 'ZH')
          },
          {
            text: '生态系统',
            items: genNav(deepClone(EcosystemNav), 'ZH')
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: '基础',
              collapsable: false,
              children: genEssentialsSidebar('')
            },
            {
              title: '进阶',
              collapsable: false,
              children: genAdvancedSidebar('')
            }
          ],
          '/feature/component/': getComponentSidebar(
            deepClone(ComponentNav),
            'ZH'
          ),
          '/feature/script/': ['/feature/script/svgo.md']
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      description: 'Anshare Wiki百科,专注于技术分享'
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
