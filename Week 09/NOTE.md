学习笔记
## html解析
1. 根据状态机解析html解析，html已经规定好了相应状态。
2. 根据状态机左向右逐渐解析html，其解析过程来看会解析完整个节点及其所有子节点才会开始解析其兄弟节点。
3. 属性分为单双无引号三种类型，属性间必须得有空格隔开。
4. 标签的构建dom树使用栈，开始标签入栈，结束标签出，自封闭入后立刻出。
## css解析
1. css 尽量在startTag阶段去调用匹配。
2. dom节点从内向外匹配: div div #myid
3. css specificity优先级计算 inline > id > class > tag,同位比较优先级： div div #id(0inline 1id 0class 2tag )  < div .cls #id(0inline 1id 1class 1tag)
4. specificity 越左权重越高。