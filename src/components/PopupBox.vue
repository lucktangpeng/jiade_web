<template>
  <div class="className" v-if="value">
    <el-popover
      placement="top-start"
      title="标题"
      width="200"
      trigger="hover"
      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    >
      <slot></slot>
    </el-popover>
    <!-- <el-popover placement="top" width="160" trigger="hover">
      <div>
        <div style="text-align: center;padding-bottom: 5px">
          {{ value.name }}
        </div>
        <div class="content_flex">
          <div style="width: 250px">
            <div>产品名称: {{ value.prd_name }}</div>
            <div class="content_flex content_center">
              完成率:
              <el-progress
                :text-inside="true"
                :stroke-width="24"
                :percentage="WanChen"
                status="success"
              >
              </el-progress>
            </div>
          </div>
          <div>
            <div>实际数量: {{ value.sum_qty }}</div>
            <div>计划数量: {{ value.qty }}</div>
          </div>
        </div>
      </div>
      <slot>
          dsadasd
      </slot>
    </el-popover> -->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PopupBox",
  props: {
    value: {
      type: Object
    }
  },
  computed: {
    WanChen(): any {
      if (this.value.length > 0) {
        return Number(((this.value.sum_qty / this.value.qty) * 100).toFixed(2));
      } else {
        return 0;
      }
    }
  }
});
</script>

<style scoped>
.content_flex {
  display: flex;
  justify-content: space-between;
}
.content_center {
  align-items: center;
}

.el-progress {
  width: 80%;
}

::v-deep .el-popover {
  max-width: 500px !important;
  width: 500px !important;
}
div#el-popover-8332 {
  width: 500px;
}
</style>
