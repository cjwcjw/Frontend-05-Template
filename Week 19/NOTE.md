学习笔记
# 发布系统的搭建
## express 项目搭建
`npx express-generator`
`npm install`
- 关注public目录的代码
## 部署到云服务器
- 默认起在 IPv6上，手动修改 /bin/www `server.listen(port,'0.0.0.0');` 监听 IPv4 3000端口。
- 云服务器安全组添加tcp 3000 input 配置。
- 云服务防火墙打开input 3000 端口 `sudo iptables -I INPUT -p tcp --dport 3000 -j ACCEPT` -I 置于配置顶层，防止冲突。
## nodejs的流
- https://nodejs.org/docs/latest-v13.x/api/stream.html#stream_class_stream_readable
    - event ‘data’
    - event ’end‘ 
    - pipe: 流之间的转化，如http流到文件流
## 多文件上传
- 压缩多文件到服务端，服务端再解压。
    - 压缩 - archiver 包
    - 解压 - unzipper 包
## github oAuth 
- https://github.com/settings/apps
 


