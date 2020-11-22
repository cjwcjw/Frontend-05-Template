function stringToNumber (str,charType = 2) {
    if ([2,4,8,16].indexOf(charType) < 0 || typeof str !== 'string') {
        return 
    }
    let result = 0
    function* getNum(str) {
        let strArr = str.split('').reverse()
        for(let i = 0; i < strArr.length; i++){
            let str = strArr[i]
            if (charType === 16 && str.charCodeAt() >= 97) {
                str = `${str.charCodeAt() - 97 + 10}`
            }
            yield  Number(str * (charType ** i)) 
        }
    }
    for (let num of getNum(str)) {
        result += num 
    }
    return result

}

function numberToString (num, charType = 2) {
    if ([2,4,8,16].indexOf(charType) < 0 || typeof num !== 'number') {
        return 
    }
    let result = ''
    function* getStr(num) {
        let retain = num
        while (retain >= 1) {
            let str = Math.floor(retain) % charType
            if (charType === 16 && str >= 10) {
                str = String.fromCharCode(str  - 10 + 97)
            } 
            yield `${str}`
            retain = retain / charType 
        }
    }
    for (let str of getStr(num)) {
        result = str + result
    }
    return result 
}

console.log(numberToString(35516,16))
console.log(stringToNumber('8abc',16))