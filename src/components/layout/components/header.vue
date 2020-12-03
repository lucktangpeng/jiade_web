<template>
  <div class="header">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      text-color="#fff"
      active-text-color="#ffd04b"
      router
    >
      <el-menu-item index="/">1F</el-menu-item>
      <el-menu-item index="/second">2F</el-menu-item>
      <el-menu-item index="/fifth_one">5F 1</el-menu-item>
      <!-- <el-menu-item index="/fifth_two">5F 2</el-menu-item> -->
    </el-menu>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "CommonHeader",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key: any, keyPath: any) {
      console.log(key, keyPath);
    }
  }
});
</script>

<style lang="scss" scoped>
.el-menu {
  background-image: url("../../../assets/images/header.png");
  display: flex;
  flex-direction: row-reverse;
}
.header {
  background: pink;
}
</style>
