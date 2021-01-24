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
# 动画与时间线
- window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行
- 程序里一般都是改变属性来形成动画，因此需要设置起始属性。
-三次贝塞尔曲线 - 牛顿积分实现
# 手势
- 点击
    - start -end-> tap 类似click；
- 移动
    - start -移动10px-> pan start : 触点移动开始 手势允许最大误差经验值 10px
    - pan start -move-> pan -> pan end（移动结束） or flick(轻扫) 移动速度确定是哪种状态
- 按压
    - start -o.5s-> press start