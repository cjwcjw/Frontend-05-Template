学习笔记
## 运算符优先级
1. member expression: ` a.b;a[b];foo ``string``;super.b;super['b'];new.target; new Foo() `
2. new expression: ` new Foo `
3. call expressions: ` foo();super();foo()['b'];foo().b;foo()``abc`` `
4. 右结合的结构： `**: 1**(2**3)` 
## 类型转换
### 装箱转换/boxing
1. Nubmer: new Number(1)
2. String: new String('a')
3. Boolean: new Boolean('a')
4. Symbol: new Object(Symbol("a ))
## 运行时的状态/completion record: 一个数据结构记录语句是否返回，返回了是啥等；
1. [[type]]: normal;break;continue;return; or throw
2. [[value]]: 基本类型
3. [[target]]: label
## 简单语句与复合语句
### 简单
1. expression
2. empty
3. debugger
4. throw
5. continue
6. break
7. return 
### 复合
1. block
2. if
3. switch
4. iteration(循环总称)
5. with
6. labelled
7. try
## 声明/declaration
### 类型
1. function
2. generator
3. asyncFunction
4. asyncGenerator
5. variableStatement(变量声明)
6. class
7. lexical
### 预处理
1. var 声明提升到第一行。
2. const/let 其实也会变量提升，所有声明都有预处理提升，但是其在声明之前使用会报错也叫‘暂时性死区’。
## 宏任务与微任务
1. 宏任务是需要给js引擎执行的任务，微任务是js通过promise主动发起的任务。
2. 事件循环，异步队列会不断循环的往主栈进程里塞任务，主栈进程里同步任务执行完了之后才去执行相应内容。