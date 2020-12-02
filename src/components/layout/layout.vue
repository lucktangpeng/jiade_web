<template>
  <div>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <el-main><router-view></router-view></el-main>
    </el-container>
  </div>
</template>

<script>
import Vue from "vue";
import CommonHeader from "./components/header.vue";
export default Vue.extend({
  name: "layout",
  components: {
    CommonHeader
  }
});
</script>

<style lang="scss" scoped></style>
