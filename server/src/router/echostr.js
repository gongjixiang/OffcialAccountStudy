const express = require("express");
const router = express.Router();

router.get("/echostr", (req, res) => {
  res.send(req.query.echostr);
});

module.exports = router;
