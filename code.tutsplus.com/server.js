var http=require("http");
var server=http.createServer(function(request,response){
response.writeHead(200,{'Content-Type':'text'})
response.end("gud luck divya")
});
server.listen(8888,function(){
	console.log("server listening at 8888")
});