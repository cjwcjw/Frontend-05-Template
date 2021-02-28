学习笔记
# 持续集成
- datail build: 服务端代码每天晚上全局build。 git hook
- BVT: 构建验证测试，一般都是基本的验证。前端会采用一种更轻量的校验 lint, 语法格式的校验。 eslint
## git hook
1. ls -a -> hooks -> (pre-commit,pre-push)
2. #! 标注引擎
## ESLint
1. npm install -save-dev eslint -> npx eslint --init -> npx eslint ./index.js
## 无头浏览器检查 DOM (chrome headless模式)
1. alias chrome="/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome"  设置命令别名
2. puppeteer npm 插件

