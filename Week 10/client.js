const net = require("net")
const { resolve } = require("path")
const parser = require("./parser.js")

class Request {
    constructor(options) {
        this.method = options.method || 'GET'
        this.host = options.host || '127.0.0.1'
        this.port = options.port || 80
        this.path = options.path || '/'
        this.body = options.body || {}
        this.headers = options.headers || {}
        if (!this.headers['Content-Type']) {
            this.headers['Content-Type'] = 'application/x-www-form-urlencoded'
        }
        if (this.headers['Content-Type'] === 'application/json') {
            this.bodyText = JSON.stringify(this.body)
        } else if (this.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            this.bodyText = Object.keys(this.body).map(key => `${key}=${encodeURIComponent(this.body[key])}`).join('&')
        }
        this.headers['Content-Length'] = this.bodyText.length
    }
    send(connection) {
        return new Promise((resolve,reject) => {
            // 逐步接受响应的解析器，和之前的状态机解析string类似
            let parser = new ResponseParser
            // 支持传入连接，防止重复的去生成。、
            if (connection) {
                connection.write(this.toString())
            } else {
                connection = net.createConnection({
                    host: this.host,
                    port: this.port,
                }, ()=>{
                    connection.write(this.toString())
                })
            }
            connection.on('data', (data)=>{
                parser.receive(data.toString());
                if (parser.isFinished) {
                    resolve(parser.response)
                    connection.end()
                }
            })
            connection.on('error', (err) =>{
                console.log(err)
                connection.end()
            })
        })
    }
    toString(){
        // 处理请求报文
        return `${this.method} /${this.path} HTTP/1.1 
        \r
        ${Object.keys(this.headers).map(key => `${key}: ${this.headers[key]}`).join('\r\n')}
        \r\r
        ${this.bodyText}`
    }

}
class ResponseParser {
    constructor(){
        this.WATTING_STATUS_LINE = 0
        this.WATTING_STATUS_LINE_END = 1
        this.WATTING_HEADER_NAME = 2
        this.WATTING_HEADER_SPACE = 3
        this.WATTING_HEADER_VALUE = 4
        this.WATTING_HEADER_LINE_END = 5
        this.WATTING_HEADER_BLOCK_END = 6
        this.WATTING_BODY = 7

        this.current =  this.WATTING_STATUS_LINE
        this.statusLine = ""
        this.hearders = {}
        this.hearderName = ""
        this.hearderValue = ""
        this.bodyParser = null

    }
    receive(string) {
        // 解析response字符
        for(let i = 0; i < string.length; i++){
            this.receiveChar(string.charAt(i))
        }
    }
    receiveChar(char) {
        if (this.current === this.WATTING_STATUS_LINE) {
            if (char === '\r') {
                this.current = this.WATTING_STATUS_END
            } else {
                this.statusLine += char
            }
        } else if (this.current === this.WATTING_STATUS_LINE_END) {
            if (char === '\n') {
                this.current = this.WATTING_HEADER_NAME
            }
        } else if (this.current === this.WATTING_HEADER_NAME) {
            if (char === ':') {
                this.current = WATTING_HEADER_SPACE
            } else if (char === '\r') {
                this.current = WATTING_HEADER_BLOCK_END
                // 解析chunked body
                if (this.headers['Transfer-Encoding'] === 'chunked') {
                    this.bodyParser = new TrunkedBodyParser()
                }
            } else {
                this.hearderName += char
            }
        } else if (this.current === this.WATTING_HEADER_SPACE) {
            if (char === ' ') {
                this.current = this.WATTING_HEADER_VALUE
            }
        } else if (this.current === this.WATTING_HEADER_VALUE) {
            if (char === '\r') {
                this.current = this.WATTING_HEADER_LINE_END
                this,headers[this.hearderName] = this.hearderValue
                this.hearderName = ""
                this.hearderValue = ""
            } else {
                this.hearderValue += char
            }
        } else if (this.current === this.WATTING_HEADER_LINE_END) {
            if(char === '\n') {
                this.current = this.WATTING_HEADER_NAME
            }
        } else if (this.current === this.WATTING_HEADER_LINE_END) {
            if(char === '\n') {
                this.current = this.WATTING_HEADER_NAME
            }
        } else if (this.current === this.WATTING_HEADER_BLOCK_END) {
            if(char === '\n') {
                this.current = this.WATTING_BODY
            }
        } else if (this.current === this.WATTING_BODY) {
            console.log(char)
        }
    }
}

class TrunkedBodyParser {
    constructor() {
        this.WATTING_LENGTH = 0
        this.WATTING_LENGTH_LINE_END = 1
        this.READING_TRUNK = 2
        this.WATTING_NEW_LINE = 3
        this.WATTING_NEW_LINE_END = 4
        this.length = 0
        this.content = []
        this.isFinished = false
        this.current = this.WATTING_LENGTH
    }
    receiveChar(char) {
        if(this.current === this.WATTING_LENGTH) {
            if (char === '\r') {
                if (this.length === 0) {
                    this.isFinished = true
                }
                this.current = this.WATTING_LENGTH_LINE_END
            } else {
                this.length *= 16
                this.length += parseInt(char, 16)
            }
        } else if (this.current === this.WATTING_LENGTH_LINE_END) {
            if (char === '\n') {
                this.current = this.READING_TRUNK
            }
        } else if (this.current === this.READING_TRUNK) {
            this.content.push(char)
            this.length --
            if (this.length === 0 ) {
                this.current = this.WATTING_NEW_LINE
            }
        } else if (this.current === this.WATTING_NEW_LINE) {
            if (char === '/r') {
                this.current = this.WATTING_NEW_LINE_END
            }
        } else if (this.current === this.WATTING_NEW_LINE) {
            if (char === '/n') {
                this.current = this.WATTING_NEW_LINE
            }
        }
    }

}
void async function (){
    let request = new Request({
        method: 'POST',
        port: 8081,
        body: {name: 'heheh'},
    })
    let response = await request.send()
    let dom = parser.parseHTML(response.body)
}()