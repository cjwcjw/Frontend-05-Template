学习笔记
# 单元测试工具 ｜ mocha
- 常用的单元测试工具： mocha 和 jest
- module.exports 是因为node.js 默认无法用export xx。
- `describe` 分类 ； `it` 描述。
- Node Moudule npm script默认会把 `./node_modules/.bin/` 路径加上。
- 使用新语法 export xx 需要装上 `@babel/core, @babel/preset-env, @babel/register`
# 单元测试工具 ｜code coverage
## nyc
- 行覆盖一般是审核重点
- nyc mocha 追踪babel之后的代码，需要加上 `@istanbuljs/nyc-config-babel, babel-plugin-istanbul`,配置nycrc详情看代码
# 单元测试工具 ｜ 所有工具与generator的集成