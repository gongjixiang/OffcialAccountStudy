module.exports = {
  devServer: {
    // 自动打开浏览器
    open: true,
    host: "192.168.2.141",
    // 端口
    port: 8888,
    // https
    https: false,
    // 热更新
    hotOnly: false,
    // 使用代理
    proxy: {
      "/code": {
        // 目标代理服务器地址
        target:
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx384d9852d02299cc&redirect_uri=http://3446-47-57-138-191.ngrok.io/user&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect",
      },
    },
  },
};
