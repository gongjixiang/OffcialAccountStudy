<template>
  <div>
    <mt-button @click.prevent.native="invokeWxApi">wx.config</mt-button>
    <input type="file" accept="image/*">
  </div>
</template>

<script>
import wx from "weixin-js-sdk";
import axios from "axios";
export default {
  name: "Explore",
  methods: {
    invokeWxApi() {
      axios.get("http://localhost:8081/signature").then((res) => {
        const { timestamp, noncestr, signature } = res.data;
        wx.config({
          debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
          appId: "wx384d9852d02299cc", // 公众号的唯一标识
          timestamp,
          nonceStr: noncestr,
          signature,
          jsApiList: ["chooseImage"], //需要使用的JS接口列表
        });
        wx.ready(() => {
          wx.chooseImage({
            count: 1, // 默认9
            sizeType: ["original", "compressed"], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ["album", "camera"], // 可以指定来源是相册还是相机，默认二者都有
            success: function(res) {
              var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
              alert(localIds);
            },
          });
        });
        wx.error(function(res) {
          alert(res);
          // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
        });
      });
    },
  },
};
</script>

<style></style>
