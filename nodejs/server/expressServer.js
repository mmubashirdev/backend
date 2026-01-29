const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
  res.status(200).send("Response from express server");
})
app.listen(port,()=>{
  console.log(`Express Server running on http://localhost:${port}/`);
})