学习笔记
## LL算法｜四则运算
### 词法分析
对四则运算来说，词法分析只有两种token: number 和 operator 运算符  
### 语法分析
1. 对于理解"加法是由两个乘法相加的"：加法与乘法是有优先级的判定的因此我们需要有一个嵌套的关系，该嵌套最底层元单元需要是优先级高的乘法表达式。  
2. 乘法产生式 ：
`<MultiplicationExpression>::=  
<Number>  
|<MultiplicationExpression><*><Number>
|<MultiplicationExpression></><Number>
`  
元单元一个数字也看作乘法表达式；乘法表达式加乘除运算符加数字也算作乘法表达式。  
3. 加法产生式：
`<AdditionExpression>::=
<MultiplicationExpression>
|<AdditionExpression><+><MultiplicationExpression>
|<AdditionExpression><-><MultiplicationExpression>
`  
最小单元是乘法表达式，"加法是由两个乘法相加的"。  
4. 最上层产生式：
 `<Expression>::=
 <AdditionExpression><EOF>
 `  
 最总向左扫描归元成一个加法产生式，eof表示总结符 end of file。   
 ## LL算法｜词法分析
1. 可以反复调用 exec() 方法来遍历字符串中的所有匹配文本。当 exec() 再也找不到匹配的文本时，它将返回 null，并把 lastIndex 属性重置为 0。  
2. `[]` 方括号用于查找某个范围内的字符, `|`表示或,`()` 表示分组功能。  
3. `yield` 迭代器关键字使生成器函数执行暂停，yield关键字后面的表达式的值返回给生成器的调用者。  
4. 迭代器都能用 `for-of` 循环
 ## LL算法｜语法分析
语法分析代码和产生式的分析过程类似：从左到右扫描，从左到右去归元合并，最后达到只剩一个单根`Expression`的状态.
 
