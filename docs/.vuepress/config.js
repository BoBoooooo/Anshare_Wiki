var nav = require('./nav.js')
var { ComponentNav, MultipleNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'Anshare Wiki百科 v1.1',
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
            text: '前端知识梳理',
            link: '/frontend/'
          },
          {
            text: '收藏夹',
            link: '/resource/'
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
              title: '学习资料',
              collapsable: false,
              children: genEssentialsSidebar('guide')
            }
          ],
          '/resource/': ['/resource/bi.md'],
          '/frameworks/': [
            '/frameworks/',
            {
              title: '组件',
              collapsable: false,
              children: genEssentialsSidebar('frameworks')
            },
            {
              title: '系统设置',
              collapsable: false,
              children: genEssentialsSidebar('settings')
            },
            {
              title: '开发人员工具',
              collapsable: false,
              children: genEssentialsSidebar('devtools')
            }
          ],
          '/feature/script/yapi': ['/feature/script/yapi.md'],
          '/feature/script/svgo': ['/feature/script/svgo.md'],
          '/feature/script/deploy': ['/feature/script/deploy.md'],
          '/feature/script/https': ['/feature/script/https.md'],
          '/feature/script/cndeploy': ['/feature/script/cndeploy.md'],
          '/feature/script/jenkins': ['/feature/script/jenkins.md'],
          '/frontend': [
            {
              title: '资料',
              collapsable: false,
              children: genEssentialsSidebar('frontend')
            }
          ]
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
      '/guide/essentials/backend.md',
      '/guide/essentials/pm.md'
    ]
  } else if (type === 'frameworks') {
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
  } else if (type === 'devtools') {
    mapArr = [
      '/frameworks/devtools/FlowDesigner.md',
      '/frameworks/devtools/FormDesigner.md',
      '/frameworks/devtools/TableDesigner.md',
      '/frameworks/devtools/Dict.md',
      '/frameworks/devtools/TopologyDesigner.md'
    ]
  } else if (type === 'settings') {
    mapArr = ['/frameworks/settings/Auth.md']
  } else if (type === 'frontend') {
    mapArr = ['/frontend/', '/frontend/http.md']
  }
  return mapArr
}
