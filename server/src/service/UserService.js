const Model = require("../model/UserModel");
const { getAuthToken, getUserInfo } = require("../api");

module.exports = {
  async getInfo(code) {
    const result = await getAuthToken(code);
    const { access_token, openid } = result.data;
    const userInfo = await getUserInfo(access_token, openid);
    return userInfo.data;
  },

  save(user) {
    Model(user).save((err, doc) => {
      console.log("user saved");
      console.log(doc);
    });
  },

  update(openid, data) {
    Model.findOneAndUpdate(openid, data, (err, doc) => {
      console.log("user updated");
      console.log(doc);
    });
  },
};
