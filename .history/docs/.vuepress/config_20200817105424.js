module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': 'path/to/some/dir'
      }
    }
  },
  theme: 'ktquez',
  themeConfig: {
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}