<template>
  <div>
    hello
  </div>
</template>

<script>
import { localData } from "../../utils";
export default {
  name: "Me",
  data() {
    return {};
  },
  mounted() {
    let openid = localData.getItem("openid") || this.$route.query.openid || "";
    if (openid) {
      alert(openid);
      localData.setItem("openid", openid);
    } else {
      location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx384d9852d02299cc&redirect_uri=http://92b6-47-57-141-50.ngrok.io/user&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect`;
    }
  },
};
</script>

<style></style>
