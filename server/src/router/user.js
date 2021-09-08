const express = require("express");
const router = express.Router();
const UserService = require("../service/UserService");

router.get("/user", async (req, res) => {
  const userInfo = await UserService.getInfo(req.query.code);
  UserService.save(userInfo);
  res.redirect(`http://192.168.2.141:8888/me?openid=${userInfo.openid}`);
});

module.exports = router;
