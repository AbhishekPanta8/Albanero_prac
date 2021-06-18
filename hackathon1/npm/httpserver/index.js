const http = require("http");
const fs = require("fs");
//The http.creatServer() method includes request and response parameters which is supplied by node.js
//The request object can be used to get information
//about the current http request e.g. url, request header and data.
//The response object can be used to send the response for a current request.
const server = http.createServer((req,res)=>{
  console.log(req.url);
  if(req.url == "/"){
    res.end("home site");    
  }
  else if(req.url == "/about"){
    res.end("about us site");
  }
  else if(req.url == "/contact"){
    //can be done this way.
    // res.write("hello its contact page");
    res.end("contact site");
  }
  else{
    //here 404 is the response status for the error and the content-type is html.
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1>404: error page!</h1>");
  }
});
// here the 8000 is the port number and 127.0.0.1 is the hostname(i.e. local host)
server.listen(8000,"127.0.0.1",()=>{
  console.log("listening to the port number 8000"); 
});
