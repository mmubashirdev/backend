const express = require("express");
const app = express();
const port = 8000;
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.post("/", (req, res) => {
  res.send("Post request route handling");
});
app.use((req, res) => {
  res.status(404).send("404 - Page not found");
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
