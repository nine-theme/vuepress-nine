'use strict';

module.exports = {

  types: [
    {
      value: 'WIP',
      name: '⌛️  WIP:      Doing'
    },
    {
      value: 'feat',
      name: '⚙️  feat:     功能'
    },
    {
      value: 'fix',
      name: '🐞  fix:      Bug'
    },
    {
      value: 'refactor',
      name: '🔨  refactor: 重构'
    },
    {
      value: 'perf',
      name: '⚖️  perf:     优化'
    },
    {
      value: 'docs',
      name: '📖  docs:     文档'
    },
    {
      value: 'test',
      name: '🔎  test:     测试'
    },
    {
      value: 'build',
      name: '🛠  build:    工具'
    },
    {
      value: 'style',
      name: '👙  style:    格式'
    },
    {
      value: 'revert',
      name: '⏪  revert:   回退'
    },
    {
      value: 'chore',
      name: '🛑  chore:    其他'
    }
  ],

  scopes: [
    'vuepress-theme-nine',
    '@nine-theme/vuepress-plugin-back-to-top',
    '@nine-theme/vuepress-plugin-comments',
    '@nine-theme/vuepress-plugin-fontawesome',
    '@nine-theme/vuepress-plugin-ga',
    '@nine-theme/vuepress-plugin-loading-page',
    '@nine-theme/vuepress-plugin-pagation',
    '@nine-theme/vuepress-plugin-screenfull',
  ],
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"]
};
