var fs = require('fs')
var content = fs.readFileSync('numbers.txt','utf8')

var lines = content.split('\n')

for(var i=0; i<lines.length; i++){
    for(var j=0; j<lines.length; j++){
        if(parseInt(lines[i])+parseInt(lines[j])==2020){
            var x0 = lines[i]
            var y0 = lines[j]
        }
        for(var k=0; k<lines.length; k++){
            if(parseInt(lines[i])+parseInt(lines[j])+parseInt(lines[k])==2020){
                var x1 = lines[i]
                var y1 = lines[j]
                var z1 = lines[k]
            }
        }
    } 
}

console.log(`Part One ===== \nNumber 1: ${x0} \nNumber 2: ${y0} \nPuzzle's Answer = ${x0*y0} \n \nPart Two ===== \nNumber 1: ${x1} \nNumber 2: ${y1} \nNumber 3: ${z1} \nPuzzle's Answer = ${x1*y1*z1}`)