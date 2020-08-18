module.exports = {
  title: "Deadsoul",
  description: "Just playing around",
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
  },
};
