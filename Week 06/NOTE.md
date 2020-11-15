学习笔记
## 语法分类
1. 非形式语言
2. 形式语言： 0： 无限制类型；1：上下文相关类型；2：上下文无关类型；3：正则文法类型  ；  
0- 型文法（无限制文法或短语结构文法）包括所有的文法。  
1- 型文法（上下文相关文法）生成上下文相关语言。  `很<A>::= 很烦｜很累`
2- 型文法（上下文无关文法）生成上下文无关语言。  `<A>::= 烦｜累`
3- 型文法（正规文法）生成正则语言。  
3. 终结符： 最终在代码中出现的字符 `+ - * /`。
## 四则运算带括号产生式
个人理解：为了方便归元，优先级越高的产生式当成最小元单元,即括号产生式：  
`<ParenthesesExpression>
   ::= <Number> 
   |"("<AdditionExpression>")"`
## 现代语言的分类
### 用途分类：
数据描述语言（数据描述型的语言，本身没有编程能力）： json,css,html,sgml,xml,xaml,sql
编程语言：c,c#,c++,ruby,jruby,crystal,python,java,lisp,Scheme,VB,perl,golang,php,shell,js

### 表达方式：
声明式语言（只告诉你结果是怎么样的）：json,css,html,sgml,xml,xaml,sql,lisp,Scheme
命令型语言（告诉你达成这个结果，过程的命令的怎么样的）：c,c#,c++,ruby,jruby,crystal,python,java,VB,perl,golang,php,shell,js

## 编程语言的性质
### 图灵完备性 
图灵完备性：在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。  
1. 命令式-图灵机：1.goto 2.if while;能执行该2者语句就叫图灵机，就能实现图灵完备性。
2. 声明式-lambda: 递归的方式实现图灵完备性。
### 动态/静态
1. 动态：用户设备商/在线服务器；产品实际运行时 runtime
2. 静态：程序员的电脑上；产品开发时 compiletime
### 强弱类型
强类型不会默认转换类型,js输入弱类型转换。

## Number
双精度浮点类型：1个符号位（0正1负），11个指数位（二进制），52个精度位(二进制)，结果： 精度位乘以2的指数位次方

### String
1. ASCII不存在编码问题，最多只占一个字节。
2. UTF-8 默认用一个字节（8比特位）表示字符，兼容ASCII，一段ASCII编码字符，UTF-8也成立，反过来不成立。
3. UTF8补码表 ：
   ` •0xxxxxxx  
   •110xxxxx 10xxxxxx  
   •1110xxxx 10xxxxxx 10xxxxxx  
   •11110xxx 10xxxxxx 10xxxxxx 10xxxxxx  
   •111110xx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx  
   •1111110x 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx 10xxxxxx  `  
   字节位数表：
   ` •1个字节：Unicode码为 0 - 127
   •2个字节：Unicode码为 128 - 2047
   •3个字节：Unicode码为 2048 - 0xFFFF
   •4个字节：Unicode码为 65536 - 0x1FFFFF
   •5个字节：Unicode码为 0x200000 - 0x3FFFFFF
   •6个字节：Unicode码为 0x4000000 - 0x7FFFFFFF`
4. 编码规则：1.先计算字符的字节位数找出补码表。2.把字符字节数转为2进制，从前到后补充进补码表里。
