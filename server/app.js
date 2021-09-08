const express = require("express");
const app = express();

const mongoose = require("mongoose");
const TokenService = require("./src/service/TokenService");
const routes = require("./src/router");

// 建立连接
mongoose.connect("mongodb://127.0.0.1/wechat");
mongoose.connection.once("open", () => {
  console.log("mongodb连接成功");
});
mongoose.connection.once("close", () => {
  console.log("mongodb连接断开");
});

app.set("views", __dirname + "/views");
app.set("view engine", "html");
app.engine(".html", require("ejs").__express);


for (let i in routes) {
  app.use(routes[i]);
}

TokenService._init();
setInterval(() => {
  TokenService._init();
}, (7200 - 300) * 1000);

app.listen(8081, () => console.log("luanch successfully!"));
