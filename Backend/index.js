const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
     if (req.url === "/") {
          fs.readFile("index.html", (err, data) => {
               if (err) {
                    res.end("File not found");
               } else {
                    res.end(data);
               }
          });
     } else {
          res.writeHead(404);
          res.end("Page not found");
     }
}).listen(5000);