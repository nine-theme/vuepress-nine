const themeConfig = require('./config')

module.exports = {
  title: "九剑",
  description: '独孤九剑，破尽天下武功',
  // dest: 'public',
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}],
    ['meta', {name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no'}],
    ['meta', {name: 'author', content: 'NineSwardsMonster'}],
    ['meta', {name: 'keywords', content: 'vuepress,nine,NineSwardsMonster,vuepress-nine,vuepress-theme-nine,theme,blog,主题'}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
    ['meta', {name: 'theme-color', content: '#42b983'}],
    ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
    ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
    ['link', {rel: 'apple-touch-icon', href: '/icon_vuepress_reco.png'}],
    ['link', {rel: 'mask-icon', href: '/icon_vuepress_reco.svg', color: '#42b983'}],
    ['meta', {name: 'msapplication-TileImage', content: '/icon_vuepress_reco.png'}],
    ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      sidebar: 'auto'
    }
  },
  theme: require.resolve('../../packages/vuepress-theme-nine'),
  themeConfig
}
