const TokenModel = require("../model/TokenModel");
const sha1 = require("sha1");

const { getTicket } = require("../api");

module.exports = {
  signatureGenerator(res, req) {
    TokenModel.findOne({}, async (err, doc) => {
      const { access_token } = doc;
      const result = await getTicket(access_token);
      const { ticket } = result.data;
      const noncestr = "woshinibaba";
      const timestamp = Date.now();
      const url = "http://mp.weixin.qq.com?params=value";
      const signature = sha1(
        `jsapi_ticket=${ticket}&noncestr=${noncestr}&timestamp=${timestamp}&url=${url}`
      );
      data = { noncestr, timestamp, signature };
      req.send(data);
    });
  },
};
