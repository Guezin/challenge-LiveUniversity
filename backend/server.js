const express = require("express");
const bodyParser = require("body-parser");
const { resolve } = require("path");

const routes = require("./http/routes");

const server = express();

server.set("views", "./frontend/views");
server.set("view engine", "ejs");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(express.static("frontend/public"));
server.use("/css", express.static(resolve(__dirname, "public", "css")));
server.use("/js", express.static(resolve(__dirname, "public", "js")));
server.use("/", routes);

server.listen(1995, () => console.log("Listening on port 1995"));
