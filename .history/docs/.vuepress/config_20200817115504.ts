module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  base: "/",
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "path/to/some/dir",
      },
    },
  },
  plugins: [
    [
      "vuepress-plugin-typescript",
      {
        tsLoaderOptions: {
          // ts-loader 的所有配置项
        },
      },
    ],
  ],
  themeConfig: {
    sidebar: ["/", "/page-a", ["/page-b", "Explicit link text"]],
  },
};
