学习笔记
## proxy
1. proxy: `const p = new Proxy(target, handler)` Proxy 对象用于定义基本操作的自定义行为（如属性查找、赋值、枚举、函数调用等）,适用与元编程，vue3的双向绑定使用该API，vue2.X使用的是对象的访问器属性。
2. watchEffect: 定义响应式追踪其依赖，且能在依赖变更时执行的函数  1.初始化时，watchEffect里函数会执行一次，2. 监听依赖变更后，watchEffect里函数会在组件更新前触发。
3. map对象：Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值，继承至object,对比Object是无序的，且键只能为string。
## dragable
1. transform: 属性应用于元素的2D或3D转换。这个属性允许你将元素旋转`rotate`，缩放`scale`，移动`translate`，倾斜`skew`等。 
2. removeEventListener：移除事件监听， `element.removeEventListener(event, function, useCapture)` ，匿名函数无法移除。
3. `range = document.createRange();`:  选择节点集合，可设置开头/结尾的节点及偏移量，作用：document.createRange() 创建一个 Range 对象，那什么是 Range 对象，Range 对象是一个包含节点和部分文本节点的文档片段，如果我们直接从文档取节点，只能取一个完整的节点，比如有一个元素 <span>hello</span>，能取到 hello 这个文本节点，却不能把 he 取出来作为一个节点，用 Range 对象就可以把部分字符单独提取出来。
4. CSS对象模型也是一组API，允许从JavaScript 操纵 CSS。它非常类似于DOM，但应用于 CSS 而不是 HTML。它允许用户动态读取和修改CSS样式。
5. Range.getBoundingClientRect() ,获取range对象的具体坐标，参见 Element.getBoundingClientRect()。
6. Range.insertNode() 是在Range的起始位置插入节点的方法。