学习笔记
## 浏览器
作用：从url到bitmap，直接会经历解析html，生成dom树，生成cssom树，生成render树，确定浏览器位置，渲染等。
## 有限状态机
1. 每个状态都是一个机器，互相解耦的，这些机器都只能接受一类的参数。
2. 每个机器都知道下一个状态是啥。返回的是下一个状态函数!
## 七层网络模型
1. 应用 http
2. 表示 http
3. 会话 http
4. 传输 tcp
5. 网络 internet
6. 数据链路 4g/5g/wifi
7. 物理层 4g/5g/wifi
## http 
1. 一个 request 必须对应一个 response
2. request: request line : 'POST/HTTP/1.1'; headers行数不固定以空行结束: 'HOST:'/'Content-Type:'; body由Content-Type决定，一般也是kv结构。
3. response: status line : 'HTTP/1.1 200 OK'; headers行数不固定以空行结束;
