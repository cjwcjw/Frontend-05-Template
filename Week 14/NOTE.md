学习笔记
# 组件化基本概念
## 对象与组件的区别
- 对象
    - properties 属性
    - Methods 方法
    - inherit 继承
- 组件（适合描述UI的一种概念）
    - properties 属性 流入组件 强调从属关系 ``div.className``
    - Methods 方法 流入组件
    - inherit 继承
    - attribute 特性 强调描述性 ``<div class="cls1 cls2"></div>``
    - config & state  配置 & 状态
    - event 组件往外传播事件 流出外部
    - lifecycle 生命周期
    - children 树形结构的必要性
        - content 型
        - template 型
## 如何设计组件的状态
| markup(标签) set | js set   | js change | user input change（终端用户改变）| |
| ---------- | -------- | --------- | ------------------ | --------- |
| ❎         | ✅        | ✅        |    ❓              |  property  |
| ✅         | ✅        | ✅        |    ❓              |  attribute |
| ❎         | ❎        | ❎        |    ✅              |  state |
| ❎         | ✅        | ❎        |    ❎              |  config |
# 构建组件
## jsx语法组件
主要基于 plugin-transform-react-jsx 插件 createElement 方法的对jsx的处理



