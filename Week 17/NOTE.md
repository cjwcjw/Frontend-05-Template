学习笔记
# 初始化与构建
## 初始化工具 Yeoman
- 会顺次执行class里的方法
- `prompt` 提供的命令行与用户交互的功能
- `copyTpl` 根据模版文件（./templates/*.html）生成文件,可填充参数。
- `npmInstall` 对npm进行了封装可以生成package.json并执行npm install
## webpack 基本知识
- 最初是用来打包node给浏览器，专为js
- webpack-cli 提供webpack命令
- loader 根据test 匹配文件类型来转换，不同文件可以用不同loader 
- plugin 独立的插件机制，可以参与整个打包流程
## babel 基本知识
- 独立于webpack,把新版js, 打包成老版本的js
- babel 配置： .babelrc , json 形式。


