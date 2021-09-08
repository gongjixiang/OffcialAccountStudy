const express = require("express");
const router = express.Router();
const echostr = require("./echostr");
const user = require("./user");
const signature = require("./signature");

router.get("", (req, res) => {
  console.log(req.query);
  res.render("index", { title: "Express", msg: "Niubi" });
});

module.exports = {
  index: router,
  echostr,
  user,
  signature,
};
