<template>
  <div class="fifth_one">
    <div>
      <!-- <device-img
        type="5f"
        className="location5_1_1"
        DeviceName="yz13"
      >
      </device-img> -->
      <!-- <device-img
        type="5f"
        className="location5_4_1"
        DeviceName="yz14"
      >
      </device-img> -->
      <device-img
        type="5f"
        v-for="item in list1"
        :key="item.DeviceName"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="5f"
        v-for="item in list2"
        :key="item.DeviceName"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="5f"
        v-for="item in list3"
        :key="item.DeviceName"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="5f"
        v-for="item in list4"
        :key="item.DeviceName"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DeviceImg from "../components/DeviceImg.vue";
export default Vue.extend({
  name: "fifth",
  data() {
    return {
      list1: [
        {
          className: "location5_1_1",
          DeviceName: "yz01"
        },
        {
          className: "location5_1_2",
          DeviceName: "yz01"
        },
        {
          className: "location5_1_3",
          DeviceName: "yz03"
        },
        {
          className: "location5_1_4",
          DeviceName: "yz04"
        },
        {
          className: "location5_1_5",
          DeviceName: "yz05"
        },
        {
          className: "location5_1_6",
          DeviceName: "yz06"
        },
        {
          className: "location5_1_7",
          DeviceName: "yz07"
        },
        {
          className: "location5_1_8",
          DeviceName: "yz08"
        },
        {
          className: "location5_1_9",
          DeviceName: "yz09"
        },
        {
          className: "location5_1_10",
          DeviceName: "yz10"
        },
        {
          className: "location5_1_11",
          DeviceName: "yz11"
        },
        {
          className: "location5_1_12",
          DeviceName: "yz12"
        },
        {
          className: "location5_1_13",
          DeviceName: "yz13"
        }
      ],
      list2: [
        {
          className: "location5_2_1",
          DeviceName: "yz14"
        },
        {
          className: "location5_2_2",
          DeviceName: "yz15"
        },
        {
          className: "location5_2_3",
          DeviceName: "yz16"
        },
        {
          className: "location5_2_4",
          DeviceName: "yz17"
        },
        {
          className: "location5_2_5",
          DeviceName: "yz18"
        },
        {
          className: "location5_2_6",
          DeviceName: "yz19"
        },
        {
          className: "location5_2_7",
          DeviceName: "yz20"
        },
        {
          className: "location5_2_8",
          DeviceName: "yz21"
        },
        {
          className: "location5_2_9",
          DeviceName: "yz22"
        },
        {
          className: "location5_2_10",
          DeviceName: "yz23"
        },
        {
          className: "location5_2_11",
          DeviceName: "yz24"
        },
        {
          className: "location5_2_12",
          DeviceName: "yz25"
        },
        {
          className: "location5_2_13",
          DeviceName: "yz26"
        }
      ],
      list3: [
        {
          className: "location5_3_1",
          DeviceName: "yz27"
        },
        {
          className: "location5_3_2",
          DeviceName: "yz28"
        },
        {
          className: "location5_3_3",
          DeviceName: "yz29"
        },
        {
          className: "location5_3_4",
          DeviceName: "yz30"
        },
        {
          className: "location5_3_5",
          DeviceName: "yz31"
        },
        {
          className: "location5_3_6",
          DeviceName: "yz32"
        },
        {
          className: "location5_3_7",
          DeviceName: "yz33"
        },
        {
          className: "location5_3_8",
          DeviceName: "yz34"
        },
        {
          className: "location5_3_9",
          DeviceName: "yz35"
        },
        {
          className: "location5_3_10",
          DeviceName: "yz36"
        },
        {
          className: "location5_3_11",
          DeviceName: "yz37"
        },
        {
          className: "location5_3_12",
          DeviceName: "yz38"
        },
        {
          className: "location5_3_13",
          DeviceName: "yz39"
        },
        {
          className: "location5_3_14",
          DeviceName: "yz40"
        },
        {
          className: "location5_3_15",
          DeviceName: "yz41"
        },
        {
          className: "location5_3_16",
          DeviceName: "yz42"
        }
      ],
      list4: [
        {
          className: "location5_4_1",
          DeviceName: "yz01"
        },
        {
          className: "location5_4_2",
          DeviceName: "yz44"
        },
        {
          className: "location5_4_3",
          DeviceName: "yz45"
        },
        {
          className: "location5_4_4",
          DeviceName: "yz46"
        }
      ]
    };
  },
  components: {
    DeviceImg
  },
  async created() {
    await this.$store.dispatch("GetContent");
  }
});
</script>

<style lang="scss" scoped>
.fifth_one {
  background: url("../assets/images/5f_back_one.png");
  height: 100vh;
}
</style>
