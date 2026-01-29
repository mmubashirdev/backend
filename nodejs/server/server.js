const http = require("http");

http.createServer((req,res)=>{
  res.writeHead(200, { "content-type": "text/plain" });
  res.end("http response from server");
}).listen(3000,()=>{
  console.log("server running on http://localhost:3000");
});

