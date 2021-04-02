const fs = require('fs')
const content = fs.readFileSync('input.txt','utf-8')

const line = x => x.split('\r')

const group = x => x=='\n' ? true : false
var groups = ['']
var j = 0;

for(var i=0; i<line(content).length; i++){
    if(group(line(content)[i])==true){
        j++
        groups[j] = ['']
    }
    groups[j] += line(content)[i]
}

/////////////////////////////////////////////////////////



    

console.log(groups[0])
