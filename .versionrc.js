/**
 * 相关文档请参考
 * @see {@link https://github.com/conventional-changelog/standard-version}
 * @see {@link https://github.com/conventional-changelog/conventional-changelog-config-spec/blob/master/versions/2.1.0/README.md}
 * @see {@link https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-conventionalcommits}
 */
module.exports = {
  header: "ChangeLog",
  types: [
    { type: "feat", section: "新功能" },
    { type: "fix", section: "问题修复" },
    { type: "docs", section: "文档更新" },
    { type: "style", section: "样式修改" },
    { type: "refactor", section: "重构" },
    { type: "perf", section: "性能优化" },
    { type: "test", section: "测试优化" },
    { type: "build", section: "构建优化" },
    { type: "chore", section: "其他修改" },
  ],
  releaseCommitMessageFormat: "chore(release): 版本发布 v{currentTag}",
  issuePrefixes: ["MOBILE-", "IOSAPP-"],
  issueUrlFormat: "http://jira.up366.com:8080/browse/{prefix}{id}",
};
