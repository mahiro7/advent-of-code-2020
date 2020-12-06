var fs = require('fs')
var content = fs.readFileSync('numbers.txt','utf8')

var arr = []
var lines = content.split('\n')

for(var i=0; i<lines.length; i++){
    arr.push(lines[i])
    for(var j=0; j<lines.length; j++){
        if(parseInt(arr[i])+parseInt(arr[j])==2020){
            var x0 = arr[i]
            var y0 = arr[j]
        }
        for(var k=0; k<lines.length; k++){
            if(parseInt(arr[i])+parseInt(arr[j])+parseInt(arr[k])==2020){
                var x1 = arr[i]
                var y1 = arr[j]
                var z1 = arr[k]
            }
        }
    } 
}

console.log(`Part One ===== \n Number 1: ${x0} \n Number 2: ${y0} \n Puzzle's Answer = ${x0*y0} \n \n Part Two ===== \n Number 1: ${x1} \n Number 2: ${y1} \n Number 3: ${z1} \n Puzzle's Answer = ${x1*y1*z1}`)