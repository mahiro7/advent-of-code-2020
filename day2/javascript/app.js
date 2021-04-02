function verifyp1(char, min, max, pswd){
    var count_char = 0
    for(var x=0; x<pswd.length; x++){
        if(pswd[x] == char){
            count_char++
        }
    }
    if((count_char<=max) && (count_char>=min)){
        return true
    }else{return false}
}

function verifyp2(char, p1, p2, pswd){
    if(((pswd[p1-1]==char) && (pswd[p2-1]!=char))||((pswd[p1-1]!=char) && (pswd[p2-1]==char))){
        return true
    }else{return false}
}

var fs = require('fs')
var content = fs.readFileSync('pswd.txt','utf8')

var lines = content.split('\n')
var count1 = 0
var count2 = 0

for(var i=0; i<lines.length; i++){
    arr.push(lines[i])
    var colon = (arr[i].search(":")) //Position int
    var hifen = (arr[i].search("-")) //Position int

    var char = lines[i][colon-1] //String

    var min = parseInt(lines[i].substring(0,hifen)) 
    var max = parseInt(lines[i].substring(hifen+1,colon-1))

    var pswd = lines[i].substring(colon+2, lines[i].length-1)

    if(verifyp1(char, min, max, pswd)==true){
        count1++
    }
    if(verifyp2(char, min, max, pswd)==true){
        count2++
    }
}

console.log(`Part One == ${count1} \n \nPart Two == ${count2}`)
