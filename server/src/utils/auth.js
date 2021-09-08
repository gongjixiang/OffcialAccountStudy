const { token } = require("../config");
const sha1 = require("sha1");
module.exports = {
  checkSignature(params) {
    const { signature, timestamp, nonce } = params;
    let str = [token, timestamp, nonce].sort().join("");
    str = sha1(str);
    return str == signature;
  },
};
