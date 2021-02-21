let http = require('http')
let fs = require('fs')
let archiver = require('archiver')
let child_process = require("child_process")
let querystring = require('querystring')

// 1.打开  https://github.com/login/oauth/authorize
child_process.exec(`open https://github.com/login/oauth/authorize?client_id=Iv1.2d9decba01f862a4`)

// 3.创建server,接受token,后点击发布
http.createServer(function(request, response){
    let query = querystring.parse(request.url.match(/^\/\?([\s\S]+)$/)[1])
    publish(query.token)
    response.end('publish success !')
}).listen(8083)

function publish(token) {

    fs.stat("./sample.html", (err,stats) => {
        let request = http.request({
            hostname: "127.0.0.1",
            port: 8082,
            method: "POST",
            path: "/publish?token=" + token,
            headers: {
                'Content-Type': 'application/octet-stream'
            }
        }, response => {
            console.log(response)
        })
        
        // let file = fs.createReadStream("./sample.html")

        const archive = archiver('zip', {
            zlib: { level: 9 } // Sets the compression level.
        });

        archive.directory('./sample/', false)

        archive.finalize()

        archive.pipe(request)
        // file.pipe(request)
        
        // file.on('end', () => request.end())
    })
}





// // file.on('data', chunk => {
// //     console.log(chunk.toString())
// //     request.write(chunk)
// // })

// // file.on('end', chunk => {
// //     console.log("read finished")
// //     request.end(chunk) // 可最后一次写数据
// // })