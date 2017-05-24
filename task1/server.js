var EventEmitter=require("events").EventEmitter;
var emitter =new EventEmitter();
var fs=require("fs");
var path=require("path");
var filePath=path.join(_dirname,"sample.txt")
//var filepsth=_dirname+"/sample.txt"
emitter.on("start_reading",function (filepsth) {
	console.log("statrt reading the file....!")
	fs.readFile(filePath,"utf-8",function(err,data){/*raeding file*/
		if (err) {
			emitter.emit("error",err)    /*if anty error is there it will display */
		}
	emitter.emit("print_content",data)/*invoke the event*/
	})
})
emitter.on("print_content"function(){
	console.log(data)
	emitter.emit("done","reading file is successful")
})
emitter.on("error",function(message){
	console.log("There is an error")
	console.log("Error Details" +message);
	console.log("could not read ")
})
emitter.on("done",function(message){
	console.log(message)
})
emitter.emit("start_reading",filepsth);