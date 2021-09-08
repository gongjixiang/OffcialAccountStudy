<template>
  <div id="app">
    <router-view></router-view>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="a" @click.prevent.native="go('/home')">
        首页
      </mt-tab-item>
      <mt-tab-item id="b" @click.prevent.native="go('/explore')">
        发现
      </mt-tab-item>
      <mt-tab-item id="c" @click.prevent.native="go('/me')">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      active: "tab-1",
      selected: "a",
    };
  },
  methods: {
    go(path) {
      this.$router.replace(path);
    },
    handleClick() {
      this.$toast("Hello world!");
    },
  },
};
</script>

<style></style>
