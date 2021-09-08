import Vue from "vue";
import App from "./App.vue";
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
import router from "./router";
import VueCookies from "vue-cookies";
Vue.use(VueCookies);
Vue.use(MintUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
