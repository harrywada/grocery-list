const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const index = require("./routes/index");

var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/brello");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: false}));
app.use("/", index);

const port = 3000;
const server = http.createServer(app).listen(port);
console.log(`Server listening on: ${port}`);
