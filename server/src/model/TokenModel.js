const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  access_token: String,
  timestamp: Number,
});

const Model = mongoose.model("access_token", schema);
module.exports = Model;
