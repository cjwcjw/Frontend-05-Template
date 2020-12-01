const http = require('http')
http.createServer(function(req,res) {
    let body = []
    req.on('error', (err) => {
        console.error(err)
    }).on('data', (chunk) => {
        body.push(chunk.toString())
    }).on('end', ()=>{
        body = Buffer.concat(body).toString();
        console.log('body', body)
        res.writeHead(200,{'Content-Type':'text/html'})
        res.end('hello world\n8')
    })
}).listen(8081)
console.log('started')