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
    sidebar: 'auto',
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
            link: '/frameworks/'
          },
          {
            text: '综合教程',
            items: genNav(deepClone(MultipleNav))
          }
        ],
        sidebar: {
          '/guide/': [
            '/guide/perface/perface.md',
            {
              title: '基础',
              collapsable: false,
              children: genEssentialsSidebar('guide')
            }
          ],
          '/frameworks/': [
            '/frameworks/',
            {
              title: '组件',
              collapsable: false,
              children: genEssentialsSidebar('frameworks')
            }
          ],
          '/feature/script/yapi': ['/feature/script/yapi.md'],
          '/feature/script/svgo': ['/feature/script/svgo.md'],
          '/feature/script/deploy': ['/feature/script/deploy.md']
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
  let mapArr
  if (type === 'guide') {
    mapArr = [
      '/guide/',
      '/guide/essentials/environment.md',
      '/guide/essentials/frontend.md',
      '/guide/essentials/backend.md'
    ]
  } else {
    mapArr = [
      '/frameworks/essentials/CrudTable.md',
      '/frameworks/essentials/BaseTable.md',
      '/frameworks/essentials/FlowableDialog.md',
      '/frameworks/essentials/GenerateForm.md',
      '/frameworks/essentials/GenerateFormDialog.md',
      '/frameworks/essentials/SvgIcon.md',
      '/frameworks/essentials/Echarts.md',
      '/frameworks/essentials/FileUpload.md'
    ]
  }
  return mapArr
}
