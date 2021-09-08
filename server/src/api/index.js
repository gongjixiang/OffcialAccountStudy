const axios = require("axios").default;
const { weChatDomain, appId, appSecret } = require("../config");
module.exports = {
  getAccessToken() {
    return axios.get(
      `https://${weChatDomain}/cgi-bin/token?grant_type=client_credential&appid=${appId}&secret=${appSecret}`
    );
  },
  getAuthToken(code) {
    return axios.get(
      `https://${weChatDomain}/sns/oauth2/access_token?appid=${appId}&secret=${appSecret}&code=${code}&grant_type=authorization_code`
    );
  },
  getUserInfo(token, openid) {
    return axios.get(
      `https://${weChatDomain}/sns/userinfo?access_token=${token}&openid=${openid}`
    );
  },
  getTicket(token) {
    return axios.get(
      `https://${weChatDomain}/cgi-bin/ticket/getticket?access_token=${token}&type=jsapi`
    );
  },
};
