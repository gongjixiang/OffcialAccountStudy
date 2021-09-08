import Vue from "vue";
import VueRouter from "vue-router";

import home from "../pages/home";
import explore from "../pages/explore";
import me from "../pages/me";

Vue.use(VueRouter);
export default new VueRouter({
  //  去掉地址中的哈希#
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      component: home,
    },
    {
      path: "/explore",
      component: explore,
    },
    {
      path: "/me",
      component: me,
    },
  ],
});
