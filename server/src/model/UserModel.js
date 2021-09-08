const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  openid: String,
  nickname: String,
  sex: Number,
  language: String,
  city: String,
  province: String,
  country: String,
  headimgurl: String,
  privilege: [],
  timestamp: Number,
});
const Model = mongoose.model("user", schema);
module.exports = Model;
