学习笔记
# HTML
## 定义
XML 与 SGML  
## DTD: SGML 定义的子集的文档格式
- nbsp 
    - no-break space 把两个词连成一个词
    - 尽量使用css white-space
- quot： 双引号
- amp： &符号
- gt: 大于号
- lt: 小于号
## XML namespace
- HTML
- SVG
- MathML
## HTML语义
- aside：表示一个和其余页面内容几乎无关的部分，被认为是独立于该内容的一部分并且可以被单独的拆分出来而不会使整体受影响。其通常表现为侧边栏或者标注框。
- main：呈现了文档的 ``<body>`` 或应用的主体部分。
- article：表示文档、页面、应用或网站中的独立结构，其意在成为可独立分配的或可复用的结构，如在发布中，它可能是论坛帖子、杂志或新闻文章、博客、用户提交的评论、交互式组件，或者其他独立的内容项目。
- hgroup：代表文档章节所属的多级别的目录，它将多个``<h1>``至``<h6>``的子元素组装到一起。
- hr：元素表示段落级元素之间的主题转换。
- abbr：标记一个缩写。
- em：词在句子里的重音，辅助的语气表示。
- strong：词在文章里的重要性。
- figure：元素代表一段独立的内容, 经常与说明（caption） ``<figcaption>`` 配合使用, 并且作为一个独立的引用单元。
- li：（或称 HTML 列表条目元素） 用于表示列表里的条目。它必须包含在一个父元素里：一个有序列表(``<ol>``)，一个无序列表(``<ul>``)，或者一个菜单 (``<menu>``)。在菜单或者无序列表里，列表条目通常用点排列显示；在有序列表里，列表条目通常在左边显示按升序排列的计数，例如数字或者字母。
- nav：表示页面的一部分，其目的是在当前文档或其他文档中提供导航链接。导航部分的常见示例是菜单，目录和索引。
- dfn：表示术语的一个定义。
- pre：表示预定义格式文本。在该元素中的文本通常按照原文件中的编排，以等宽字体的形式展现出来，文本中的空白符（比如空格和换行符）都会显示出来。(紧跟在 ``<pre>``开始标签后的换行符也会被省略)。
- code：呈现一段计算机代码. 默认情况下, 它以浏览器的默认等宽字体显示
## 语法
### 合法元素
- element: ``<tag></tag>``
- text: text
- comment 注释节点 ``<!--comments-->``
- documentType ``<!Doctypr html>``
- processingInstruction ``<?a 1?>`` 预处理语法
- CDATA ``<![CDATA[]]>`` 特殊语法 生成的也是文本节点
### 字符引用
- ``&#161;`` ASCII字符 161
- ``&amp;``
- ``&lt;``
- ``&quot;``

# 浏览器 API
## DOM API
### Node
- element:元素节点
    - HTMLElement
    - SVGElement
- document:根节点
- characterData:字符数据
    - text:文本节点
    - comment:注释
    - processingInstruction: 处理信息
- documentFragment:文档片段
- documentType: 文档类型
### Api
- 导航类操作: parentNode/parentElement, childNodes/children ...
- 修改操作: appendChild, insertBefore, removeChild, replaceChild ...
- 高级操作
    - compareDocumentPosition: 比较两节点的关系
    - contains: 一个节点是否包含另外一个节点的函数
    - isEqualNode: 两节点是否完全相同
    - cloneNode: 复制节点，传入参数true ,会做深拷贝
## 事件API
事件监听： 浏览器处理过程都是先捕获再冒泡，需要经过层层捕获才能得到点击的元素。
## RangeAPI
- 性能较好但是使用不太方便
### 创建
- var range = new Range()
- var range = document.getSelection().getRangeAt(0) 通过鼠标选择元素创建range
## CSSOM
- 通过 document.styleSheets 访问
    - document.styleSheets[0].cssRules
    - document.styleSheets[0].insertRules("p {color:pink;}", 0)
    - document.styleSheets[0].removeRule(0)
- getComputedStyle(elt, pseudoElt): elt-想要获取的元素,pseudoElt-伪元素可选
### CSSOM View
- window
    - window.innerHeight, window.innerWidth
    - window.outerWidth,window.outerHeight
    - window.devicePixelRatio , dpr 屏幕物理像素与代码逻辑像素px的比值
    - window.screen
    - window API: window.open ...
- scroll
- layout
    - getClientRects() : 获取生成的盒
    - getBoundingClientRect() : 取一个
## 其他API
整理whatwg api




