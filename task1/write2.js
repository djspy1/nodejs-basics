var fs=require("fs")
var filepath="./writeInput.txt"
console.log("Start Reading a file")
console.log("Start writing  a file")
var data=fs.readFile(filepath,function(err,data){
			if(err){
				console.log(err)      
			}
			fs.writeFile('writeOutput.txt',data,function(err){
		    if(err){
			throw err;
			console.log(err)
		}
})

})

console.log("Done writing a file")