var fs = require('fs')
var content = fs.readFileSync('tob.txt','utf8')
var lines = content.split('\r')

var t = 0
var i = 0
var count = 0
var rowIndex = lines[0].length-1

while(i < lines.length - 1){
    if((rowIndex-t) < 3){
        t = t-rowIndex-1
    }
    t+=3
    i++
    if(lines[i][t+1]==="#"){
        count++
    }
}
console.log(count)