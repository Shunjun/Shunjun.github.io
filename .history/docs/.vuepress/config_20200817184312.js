module.exports = {
  title: "Deadsoul",
  description: "Just playing around",
  head: [ // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
    ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
    ['meta', { name: 'keywords', content: '前端博客,个人技术博客,前端,前端开发,前端框架,web前端,前端面试题,技术文档,学习,面试,JavaScript,js,ES6,TypeScript,vue,python,css3,html5,Node,git,github,markdown' }],
    // ['meta', { name: 'baidu-site-verification', content: '7F55weZDDc' }],// 百度统计的站点拥有者验证
    ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
    // ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no'}], // 移动端阻止页面缩放
  ],
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
  ],
  themeConfig: {
    sidebar: ["/", "/page-a", ["/page-b", "Explicit link text"]],
    logo: '/img/EB-logo.png', // 导航栏logo
  },
};
