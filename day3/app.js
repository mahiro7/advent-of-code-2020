const fs = require('fs')
const content = fs.readFileSync('tob.txt','utf8')
const lines = content.split('\r')
const rowIndex = lines[0].length-1

function slope(x, y){
    var i = 0
    var t = 0
    var count = 0
    while(i < lines.length - 1){
        if((rowIndex-t) < x){
            t = t-rowIndex-1
        }
        t+=x
        i+=y
        if(lines[i][t+1]==="#"){
            count++
        }
    }
    return count
}
const result0 = slope(3,1)
const result1 = slope(1,1)*slope(3,1)*slope(5,1)*slope(7,1)*slope(1,2)
console.log(`Part one: ${result0} \nPart two: ${result1}`)