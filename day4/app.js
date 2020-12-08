const fs = require('fs')
const content = fs.readFileSync('pass.txt','utf-8')
const lines = content.split('\r');

const str = x => x=='\n' ? true : false
var pass = []
var j = 0

for(var i=0; i<lines.length; i++){
    if(str(lines[i])==true){
        j++
    }
    pass[j] += lines[i] 
}

for(i=0; i<pass.length; i++){
    pass[i] = pass[i].replace(undefined, '')
}

/////////////////////////////////

var count =0
var real =0
const fields = ['byr','iyr','eyr','hgt','ecl','pid','hcl']

    for(var x=0; x<pass.length; x++){
        for(j=0; j<pass[x].length; j++){
            for (i=0; i<fields.length; i++){

            if((pass[x][j]+pass[x][j+1]+pass[x][j+2])==fields[i]){ 
                count++
            }
        }
    }
    console.log('\n')
    if(count===7){
        real++
    }
    count=0
}

console.log(real)
