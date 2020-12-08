const fs = require('fs')
const content = fs.readFileSync('code.txt', 'utf-8')

const code = content.split('\n')

const pos = (L,R,code) => {
	for(var i=0; i<code.length-1; i++){
		var dif = R-L
		if(code[i]=='F' || code[i]=='L'){
			R-=dif/2+0.5
		}else{
			L+=dif/2+0.5
		}
	}
	if(code[code.length-1]==='B' || code[code.length-1]=='R'){
		return R

	}else{
		return L
	}
}

const ID = str => {
	const rowcode = str.substring(0,7)
	const columncode = str.substring(7,10)
	
	const rowf = 127
	const rowb = 0

	const coll = 0
	const colr = 7
	
	const row = pos(rowb, rowf, rowcode)
	const column = pos(coll, colr, columncode)

	return row*8+column 
}
const test = "FBFBBFFRLR"

var max = -999999
for(var i=0; i<code.length; i++){
	if(ID(code[i])>max){
		max = ID(code[i])
	}
}

var codes = []

for(i=0; i<code.length; i++){
	codes.push(ID(code[i]))

}
codes = codes.sort((a,b) => a-b)
var mySeat
for(i=0; i<codes.length; i++){
	if(codes[i]+2==codes[i+1]){
		mySeat = codes[i]+1
	}
}

console.log(`Part One: ${max} \nPart Two: ${mySeat}`)
