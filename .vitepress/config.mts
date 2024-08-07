import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "FireCat",
  description: "An elegant Node.js framework based on Koajs",
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }],
    [
      'script',
      {
        async: "true",
        src: 'https://www.googletagmanager.com/gtag/js?id=G-2RRDMHQHYT',
      },
    ],
    [
      'script',
      {},
      `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-2RRDMHQHYT');
      `
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: 'https://cdn.jsdelivr.net/npm/fire-cat/logo-new.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'API', link: '/api/' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'What is FireCat', link: '/guide/introduction' },
            { text: 'Getting Started', link: '/guide/getting-started' },
          ]
        },
        {
          text: 'Basics',
          items: [
            { text: 'Controller', link: '/guide/controller' },
            { 
              text: 'Decorators', 
              items: [
                { text: 'Introduction', link: '/guide/decorators/' },
                { text: 'Router Decorators', link: '/guide/decorators/router' },
                { text: 'Request Decorators', link: '/guide/decorators/request' },
                { text: 'Custom Decorators', link: '/guide/decorators/customize' },
              ]
            },
            { text: 'Interceptor', link: '/guide/interceptor' },
            { text: 'Router', link: '/guide/router' },
            { text: 'Configuration', link: '/guide/config' },
            { text: 'Validation', link: '/guide/verify' },
          ]
        },
        {
          text: 'Advanced',
          items: [
            { text: 'API Documentation Service', link: '/guide/doc' },
            // { text: 'Best Practices', link: '/zh/guide/getting-started6' },
          ]
        },
        {
          text: 'Deployment',
          items: [
            { text: 'Pm2 Deploy', link: '/guide/build-pm2' },
            { text: 'Docker Deploy', link: '/guide/build-docker' },
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/firecatjs/fire-cat' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Jon Millent'
    },

    search: {
      provider: 'local',
      options: {
        _render(src, env, md) {
          const html = md.render(src, env)
          if (env.frontmatter?.title)
            return md.render(`# ${env.frontmatter.title}`) + html
          return html
        }
      }
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh', // 可选，将作为 `lang` 属性添加到 `html` 标签中
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '指南', link: '/zh/guide/introduction' },
          { text: 'API', link: '/zh/api/' },
        ],

        sidebar: {
          '/zh/guide': [
            {
              text: '介绍',
              items: [
                { text: 'FireCat是什么', link: '/zh/guide/introduction' },
                { text: '开始', link: '/zh/guide/getting-started' },
              ]
            },
            {
              text: '基础',
              items: [
                { text: '控制器', link: '/zh/guide/controller' },
                { 
                  text: '装饰器', 
                  items: [
                    { text: '介绍', link: '/zh/guide/decorators/' },
                    { text: '路由装饰器', link: '/zh/guide/decorators/router' },
                    { text: '请求装饰器', link: '/zh/guide/decorators/request' },
                    { text: '自定义装饰器', link: '/zh/guide/decorators/customize' },
                  ]
                },
                { text: '拦截器', link: '/zh/guide/interceptor' },
                { text: '路由', link: '/zh/guide/router' },
                { text: '配置', link: '/zh/guide/config' },
                { text: '验证', link: '/zh/guide/verify' },
              ]
            },
            {
              text: '高级',
              items: [
                { text: '接口文档服务', link: '/zh/guide/doc' },
                // { text: '最佳实践', link: '/zh/guide/getting-started6' },
              ]
            },
            {
              text: '部署',
              items: [
                { text: 'Pm2 部署', link: '/zh/guide/build-pm2' },
                { text: 'Docker 部署', link: '/zh/guide/build-docker' },
              ]
            }
          ]
        },

        search: {
          provider: 'algolia',
          options: {
            appId: '...',
            apiKey: '...',
            indexName: '...',
            locales: {
              zh: {
                placeholder: '搜索文档',
                translations: {
                  button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                  },
                  modal: {
                    searchBox: {
                      resetButtonTitle: '清除查询条件',
                      resetButtonAriaLabel: '清除查询条件',
                      cancelButtonText: '取消',
                      cancelButtonAriaLabel: '取消'
                    },
                    startScreen: {
                      recentSearchesTitle: '搜索历史',
                      noRecentSearchesText: '没有搜索历史',
                      saveRecentSearchButtonTitle: '保存至搜索历史',
                      removeRecentSearchButtonTitle: '从搜索历史中移除',
                      favoriteSearchesTitle: '收藏',
                      removeFavoriteSearchButtonTitle: '从收藏中移除'
                    },
                    errorScreen: {
                      titleText: '无法获取结果',
                      helpText: '你可能需要检查你的网络连接'
                    },
                    footer: {
                      selectText: '选择',
                      navigateText: '切换',
                      closeText: '关闭',
                      searchByText: '搜索提供者'
                    },
                    noResultsScreen: {
                      noResultsText: '无法找到相关结果',
                      suggestedQueryText: '你可以尝试查询',
                      reportMissingResultsText: '你认为该查询应该有结果？',
                      reportMissingResultsLinkText: '点击反馈'
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
})
