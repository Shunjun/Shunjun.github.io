const nav = require('./config/nav')

module.exports = {
  title: "Page Stranding",
  description: "Just playing around",
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown' }],
    // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }],// 百度统计的站点拥有者验证
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}], // 移动端阻止页面缩放
  ],

  markdown: {
    lineNumbers: true // 代码行号
  },

  base: "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir",
      },
    },
  },
  // locales: {
  //   "/": {
  //     lang: "zh_CN",
  //   },
  // },
  plugins: [
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
    "vuepress-plugin-smooth-scroll",
    //搜索框扩展
    ['thirdparty-search', {
      thirdparty: [ // 可选，默认 []
        {
          title: '在MDN中搜索', // 在搜索结果显示的文字
          frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
          behindUrl: '' // 搜索链接的后面部分，可选，默认 ''
        },
        {
          title: '在Runoob中搜索',
          frontUrl: 'https://www.runoob.com/?s=',
        },
        {
          title: '在Vue API中搜索',
          frontUrl: 'https://cn.vuejs.org/v2/api/#',
        }
      ]
    }],
  ],



  theme: 'vdoing',

  themeConfig: {
    nav,
    sidebar: 'structuring',
    // sidebar: ["/", "/page-a", ["/page-b", "Explicit link text"]],
    logo: '/img/EB-logo.png', // 导航栏logo
    repo: 'xugaoyi/vuepress-theme-vdoing', // 导航栏右侧生成Github链接
  },
};
