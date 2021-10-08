const express = require("express");
const app = express();

app.use(express.static(__dirname+"/views"))

const listener = app.listen(3000, () => {
    console.log("Port: "+listener.address().port)
})
//I pledge my honor that I have abided by the Stevens Honor System - Ryan Piedrahita