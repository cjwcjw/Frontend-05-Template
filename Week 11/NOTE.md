学习笔记
# css总体结构
- @charset  
- @import  
- rules: 
    - @media
    - @page
    - rule  
# css @ 规则
1. @charset: 声明字符集
2. @import: 级联样式
3. @medis: 媒体查询
4. @page: 打印相关，分页媒体
5. @counter-style: 列表前的样式，小黑点/数字等
6. @keyframes: 动画相关
7. @fontface: 定义一切字体
8. @supports: 兼容性属性，但是该属性兼容性不太好
9. @namespace: 命名空间，完备性的考虑
# css规则
## 结构
- 选择器
- 声明
    - key
        - variables(var)
        - properties
    - value
# css选择器
- 简单选择器具
    - *
    - div svg|a 类型选择器:单竖表示命名空间 @namespace 配合使用
    - .cls
    - #id
    - [attr=value]
    - :hover 伪类
    - ::before 伪元素
- 复合选择器
    - <简单><简单><简单>
    - *或者div必须写最前面
- 复杂选择器
    - <复合><sp><复合>: 空格连接，子孙选择器
    - <复合>'>'<复合>: 父子选择
    - <复合>'~'<复合>: 邻接
    - <复合>'+'<复合>: 邻接
    - <复合>'||'<复合>
# 选择器优先级
1. css specificity优先级计算 inline > id > class > tag,同位比较优先级： div div #id(0inline 1id 0class 2tag )  < div .cls #id(0inline 1id 1class 1tag)
2. specificity 越左权重越高。
# 伪类
- 链接/行为
    - :any-link : 所有超链接
    - :link :visited : 已访问的超链接 / :link : 未访问的超链接 
        - 使用之后不支持除了改变颜色以外的属性，为了安全，防止发现哪些链接是已访问的链接。
    - :hover 鼠标挪上去的行为
    - :active 激活状态
    - :focus 获取焦点
    - :target 链接到当前目标 锚点
- 树结构
    - empty 该元素是否有子元素
    - nth-child() 该元素是第几个元素，较复杂，简单用于奇偶等情况
    - nth-last-child() 与上一致，只是从后开始数
    - :first-child :last-child :only-child 
- 逻辑醒
    - :not
    - :where :has

# 伪元素: 通过选择器往页面插入不存在的元素
- ::before
- ::after
- ::first-line
- ::first-letter

# 思考题： 为什么 first-letter 可以设置 float 之类的，而 first-line 不行呢？
first-line 是在文档排版好之后确定的，如果可以设置float 会脱离文档流，从而无法确定第一行元素。