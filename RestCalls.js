const express = require('express');
const fs = require('fs');
const app = express();
app.listen(3000);

function callFunction(req, res) {
    res.send("Hello "+req.query.name+" gud mrng");
}
function fileRead(err,output){
    console.info(output);
}
fs.readFile("RestCalls.js","UTF-8",fileRead)
app.get("/", callFunction);