let users = {
  name: "Jawad",
  age: 18,
  email: "jawad@gmail.com",
};

const http = require("http");
const port = 8000;
const host = "localhost";

http
  .createServer((req, res) => {
    if (req.url == `/users?name=Jawad`) {
      res.writeHead(200, { "content-type": "application/json" });
      res.end(JSON.stringify(users));
    }
  })
  .listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
  });
