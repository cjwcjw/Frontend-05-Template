function encodeUTF8 (string) {
    let byteSite = [0, 128,2048,65536,0x200000,0x4000000]
    let UTF8Codes = []
    for (let str of string) {
        let charCode = str.charCodeAt(0)
        let byteNum = 0 
        for(let i = 0; i < byteSite.length; i++) {
            if ( charCode >= byteSite[i] && byteSite[i + 1] > charCode ) {
                byteNum = i + 1
                break
            }
        }
        //确定补位码
        let UTF8Code = new Array(byteNum).fill('10xxxxxx')
        UTF8Code[0] = byteNum === 1 ? '0xxxxxxx' : new Array(byteNum - 1).fill('1').join('') + UTF8Code[0].substring(0, UTF8Code[0].length - (byteNum - 1))
        UTF8Code = UTF8Code.join('')
        // 转为二进制
        let binaryCharCode = charCode.toString(2)
        if (binaryCharCode.length !== (UTF8Code.length - UTF8Code.replace(/x/g, '').length) ) {
            binaryCharCode = new Array((UTF8Code.length - UTF8Code.replace(/x/g, '').length) - binaryCharCode.length).fill('0').join('')  + binaryCharCode
        }
        // 开始补位
        for (let b of binaryCharCode) {
            for (let c = 0; c < UTF8Code.length; c++) {
                if (UTF8Code[c] === 'x') {
                    UTF8Code = UTF8Code.substring(0, c) + b + UTF8Code.substring(c + 1)
                    break 
                }
            }
        }
        console.log(str, UTF8Code) 
        UTF8Codes.push(UTF8Code)
    }
    return UTF8Codes
}