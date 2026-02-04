let arr = [
  { name: "Jawad", skill: "web developer" },
  { name: "Omer", skill: "Full stack developer" },
];

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == `/users` && req.method == "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      let data = JSON.parse(body);
      let obj = {
        name: data.name,
        skill: data.skill,
      };
      arr.push(obj);
      res.writeHead(201, { "content-type": "application/json" });
      res.end(JSON.stringify({...obj, message: "User added" }));
    });
  } 
});

server.listen(8080, () => {
  console.log(`Server running on http://localhost:8080`);
});
