var fs=require("fs")
var filepath="./sample.txt"
console.log("Start Reading file")
/*var data=fs.readFileSync(filepath) 1
*/
/*var data=fs.readFile(filepath,function(err,data){
	if(err){
		console.log(err)      2
	}
	console.log(data.toString())
})*/
/*console.log(data.toString())    1
*/
fs.readSync(filepath)
fs.readFile(filepath,function(err,data){
	if(err){
		console.log(err)
	}
	console.log(data.toString())
})
console.log("Done reading file")
console.log("Start writing file")
fs.writeFile('./output.txt','hello Divya',function(err,data){
if(err){
	throw err;
	console.log(err)
}
console.log
})