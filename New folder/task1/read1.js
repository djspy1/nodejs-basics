var fs=require("fs")
var filepath="./sampleRead.txt"
console.log("Start Reading file")
var data=fs.readFileSync(filepath) 
console.log("Done reading file") 
console.log(data.toString())   

