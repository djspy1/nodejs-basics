var fs=require("fs")
var filepath="./deleteInput.txt"
console.log("Start Reading a file")
console.log("Start Deleting  a file")
var data=fs.unlink(filepath,function(err,data){
			if(err){
				console.log(err)      
			}
			
})
console.log("Done Deleting a file")

/*
once we run node deleteEx on Node.js cmd prompt 
deleteInput.txt will got deleted
so we are unable to see that file under task1 folder
*/