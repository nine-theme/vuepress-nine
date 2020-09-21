module.exports = {
  title: "九剑",
  description: '独孤九剑，破尽天下武功',
  // dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/10054584.jpeg' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  locales: {
    '/': {
      lang: 'zh-CN',
      sidebar: 'auto'
    }
  },
  theme: require.resolve('../../packages/vuepress-theme-nine'),
  themeConfig: {
    type: 'blog',
    mode: 'auto',// 默认 auto，auto 跟随系统，dark 暗色模式，light 亮色模式
    nav: [
      { text: '主页', link: '/', icon: 'home' },
      { text: '时间轴', link: '/timeline/', icon: 'hourglass-half' }
    ],
    sidebar: 'auto',
    // 博客设置
    blogConfig: {
      category: {
        location: 2,
        text: '分类'
      },
      tag: {
        location: 3,
        text: '标签'
      }
    },
    logo: '/img/default_avatar.jpeg',
    authorAvatar: '/img/default_avatar.jpeg',
    // 搜索设置
    search: true,
    searchMaxSuggestions: 10,
    // 自动形成侧边导航
    // sidebarDepth: 'auto',
    sidebarDepth: 4,
    // 最后更新时间
    lastUpdated: 'Last Updated',
    // 作者
    author: 'nine',
    // 备案号
    record: 'xxxx',
    // 项目开始时间
    startYear: '2014',
    /**
     * 密钥 (if your blog is private)
     */
    friendLink: [
      {
        title: '九剑',
        desc: 'Enjoy when you can, and endure when you must.',
        email: 'wangjia_1919@163.com',
        link: 'https://hub.alili.fun'
      },
      {
        title: 'vuepress-theme-nine',
        desc: '简单可用的vueoress 主题',
        avatar: "https://hub.alili.fun",
        link: 'https://hub.alili.fun'
      },
    ],
    /**
     * support for
     * '' | 'default'
     * 'coy'
     * 'dark'
     * 'funky'
     * 'okaidia'
     * 'solarizedlight'
     * 'tomorrow'
     * 'twilight'
     */
    codeTheme: 'tomorrow',
    /**
     * 使用3D tag 标签
     */
    user3DTag: true,
    vssueConfig: {
      platform: 'github',
      owner: 'NineSwordsMonster',
      repo: 'gitment-comments',
      clientId: '6df5e3f1c9df36da16f8',
      clientSecret: 'b1e8d8bf0f60f1cffd7aedfed12e2383553028ea',
    },
    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'NineSwordsMonster',
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: 'GitHub',

    // 以下为可选的编辑链接选项
    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: 'nine-theme/nine-theme',
    // 假如文档不是放在仓库的根目录下：
    docsDir: 'doc',
    // 假如文档放在一个特定的分支下：
    docsBranch: 'master',
    // 默认是 false, 设置为 true 来启用
    editLinks: true,
    // 默认为 "Edit this page"
    editLinkText: '帮助我们改善此页面！'
  }
}
