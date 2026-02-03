let users = [
  {
    id: 1,
    name: "Jawad",
    age: 18,
    email: "jawad@gmail.com",
  },
  {
    id: 2,
    name: "Mubashir",
    age: 22,
    email: "mubashir@gmail.com",
  },
];

const http = require("http");
const { stringify } = require("querystring");
const port = 8000;
const host = "localhost";

http
  .createServer((req, res) => {
    if (req.method == `GET`) {
      if (req.url == `/users`) {
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(users));
      } else if (req.url.startsWith(`/users/`)) {
        let arr = req.url.split("/");
        let id = arr[2];
        let user = null;
        for (let i = 0; i < users.length; i++) {
          if (users[i].id == id) {
            user = users[i];
            break;
          }
        }
        if (!user) {
          res.writeHead(404, { "content-type": "text/plain" });
          return res.end("Cannot find user");
        }
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(user));
      }
    } else if (req.method == "POST" && req.url == "/users") {
      let body = "";
      let data = "";
      req.on("data", (chunks) => {
        body += chunks.toString();
      });
      req.on("end", () => {
        data = JSON.parse(body);
        let userExists = false;
        for (let i = 0; i < users.length; i++) {
          if (users[i].email == data.email) {
            userExists = true;
            break;
          }
        }
        if (userExists) {
          res.writeHead(409, { "content-type": "text/plain" });
          res.end("Error: User with this email alreay exists");
        } else {
          let obj = {
            id: users.length+1,
            name: data.name,
            age: data.age,
            email: data.email,
          };
          users.push(obj);
          res.writeHead(201, { "content-type": "application/json" });
          res.end(JSON.stringify(obj));
         
        }
      });
    } else {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("no such route");
    }
  })
  .listen(port, host, () => {
    console.log(`Server running on http://${host}:${port}`);
  });
