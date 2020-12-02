<template>
  <div class="edit">
    <div
      class="center_image zs_img"
      :class="{ zs_img: zs, cc_img: cc, yz_img: yz }"
    ></div>
    <div class="top" style="padding-bottom: 180px">
      <div class="box1">
        <div class="content">
          <span
            style="padding-bottom:10px"
            v-for="item in listName1"
            :key="item"
            >{{ item }}</span
          >
        </div>
        <div class="content">
          <span
            style="padding-bottom:10px"
            v-for="item in listValue1"
            :key="item"
            >{{ Device[item] }}</span
          >
        </div>
      </div>
      <div class="box1">
        <div class="content">
          <span
            style="padding-bottom:10px"
            v-for="item in listName2"
            :key="item"
            >{{ item }}</span
          >
        </div>
        <div class="content">
          <span
            style="padding-bottom:10px"
            v-for="item in listValue2"
            :key="item"
            >{{ Device[item] }}</span
          >
        </div>
      </div>
    </div>
    <div class="top">
      <div class="box1">
        <div class="content">
          <span
            style="padding-bottom:10px"
            v-for="item in listName3"
            :key="item"
            >{{ item }}</span
          >
        </div>
        <div class="content">
          <span
            style="padding-bottom:10px"
            v-for="item in listValue3"
            :key="item"
            >{{ Device[item] }}</span
          >
        </div>
      </div>
      <div class="box1">
        <div class="content">
          <span
            style="padding-bottom:10px"
            v-for="item in listName4"
            :key="item"
            >{{ item }}</span
          >
        </div>
        <div class="content">
          <span
            style="padding-bottom:10px"
            v-for="item in listValue4"
            :key="item"
            >{{ Device[item] }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { FilterContent } from "../utils/index";
import { mapState } from "vuex";
export default Vue.extend({
  name: "edit",
  props: {
    deviceName: {
      type: [String, Number]
    }
  },
  data() {
    return {
      Device: {},
      listName1: ["设备名称", "加工设备", "计划量", "实际量"],
      listName2: [
        "设备运行时间",
        "设备总负荷时间",
        "总产品数",
        "设备生产速度",
        "设备最大生产速度"
      ],
      listName3: [
        "注射时间",
        "保压时间",
        "冷却时间",
        "成型周期",
        "开模时间",
        "关模时间"
      ],
      listName4: ["射压", "保压", "顶针压力", "射速", "保速"],
      listValue1: ["name", "prd_name", "qty", "sum_qty"],
      listValue2: [
        "Runtime",
        "TotalTime",
        "TotalVolume",
        "CurrentSpeed",
        "DesignSpeed"
      ],
      listValue3: [
        "Inj2HoldTime",
        "HoldTime1",
        "CoolingTime",
        "CycleTime",
        "ClpOpnTime",
        "ClpClsTime"
      ],
      listValue4: [
        "InjPress1",
        "HoldPress1",
        "EjectAdvPress1",
        "InjSpeed1",
        "HoldSpeed1"
      ],
      zs: true,
      cc: false,
      yz: false
    };
  },
  created() {
    this.FilterDevice();
    if (this.$route.query.type === "cc") {
      this.cc = true;
      this.zs = false;
      this.yz = false;
    } else if (this.$route.query.type === "yz") {
      this.cc = false;
      this.zs = false;
      this.yz = true;
    } else {
      this.cc = false;
      this.zs = true;
      this.yz = false;
    }
  },
  methods: {
    async FilterDevice() {
      const { Device } = FilterContent(this.Content, this.deviceName);
      (Device as any).TotalVolume = (Device as any).TotalVolume.toFixed(2);
      (Device as any).CurrentSpeed = (Device as any).CurrentSpeed.toFixed(2);
      (Device as any).DesignSpeed = (Device as any).DesignSpeed.toFixed(2);
      this.Device = Device;
    }
  },
  computed: {
    ...mapState(["Content"])
  }
});
</script>

<style lang="scss" scoped>
.edit {
  height: 100vh;
  background: url("../assets/images/edit_back.png");
  padding: 100px 20px 100px 20px;
  color: #fff;
  .top {
    display: flex;
    justify-content: space-between;
    .box1 {
      display: flex;
      justify-content: space-between;
      padding: 70px;
      width: 503px;
      height: 280px;
      background: url("../assets/images/edit_box.png");
      .content {
        display: flex;
        flex-direction: column;
      }
    }
  }
}
.center_image {
  // width: 725px;
  width: 575px;
  height: 420px;
  // background: url("../assets/images/2f_edit.png");

  // background-size: contain;
  // background-size: 612px 446px;
  position: absolute;
  top: 325px;
  left: 680px;
}

.zs_img {
  background: url("../assets/images/2f_edit.png");
  background-size: cover;
}

.cc_img {
  background: url("../assets/images/1F.png");
  background-size: contain;
  width: 430px;
  height: 420px;
  left: 750px;
}

.yz_img {
  background: url("../assets/images/5f_edit.png");
  background-size: contain;
  width: 430px;
  height: 420px;
  left: 750px;
}
</style>
