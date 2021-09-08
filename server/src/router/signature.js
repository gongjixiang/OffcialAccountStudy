const express = require("express");
const router = express.Router();
const WechatService = require("../service/WechatServive");
router.get("/signature", (req, res) => {
  WechatService.signatureGenerator(req, res);
});

module.exports = router;
