/*function Person(firstName,lastName){

	this.firstName=firstName;
	this.lastName=lastName;
}
var divya=new Person("Divya","Deepu");
console.log(divya);*/

/*how to acces modues here i am trying to use httppackage in my file*/
var http = require("http");
/*call back function*/
var server=http.createServer(function(request,response){
response.writeHead(200,{'content-type':'text'})
response.end("Hello World")
});
server.listen(3000,function(){
	console.log("server is listening at 3000")
})