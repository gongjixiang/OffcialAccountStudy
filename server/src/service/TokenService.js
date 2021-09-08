const Model = require("../model/TokenModel");
const { getAccessToken } = require("../api/index");

module.exports = {
  /**
   * 初始化
   */
  _init() {
    Model.findOne({}, (err, doc) => {
      // 如果文档没有token记录，则向微信服务器请求获取token
      if (!doc) {
        this.commit("save");
      }
      //如果token已过时效，则更新token
      if (doc && Date.now() > doc.timestamp) {
        this.commit("update");
      }
    });
  },

  /**
   * 提交access_token
   */
  async commit(type) {
    const res = await getAccessToken();
    const { access_token, expires_in } = res.data;
    //设置提前5分钟到期
    const timestamp = Date.now() + (expires_in - 300) * 1000;
    if (type == "save") {
      Model({ access_token, timestamp }).save((err, doc) => {
        console.log("token保存成功");
        console.log(doc);
      });
    }
    if (type == "update") {
      Model.findOneAndUpdate({}, { access_token, timestamp }, (err, doc) => {
        console.log("token更新成功");
        console.log(doc);
      });
    }
  },
};
