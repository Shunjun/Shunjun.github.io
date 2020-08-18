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
  locales: {
    "/": {
      lang: "zh_CN",
    },
  },
  themeConfig: {
    sidebar: ["/", "/page-a", ["/page-b", "Explicit link text"]],
  },
};
