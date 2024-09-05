const http = require("http");

http.createServer((req,res)=>{
     if(req.url === "/"){
          res.write("Welcome To Home Route");
     }
     if(req.url === "/about"){
          res.write("Welcome To About Page");
     }
     if(req.url === "/contact"){
          res.write("Welcome To Contact Page");
     }
     res.end(); 
}).listen(8080);