<template>
  <div class="first">
    <div>
      <device-img
        type="2f"
        v-for="item in list1"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="2f"
        v-for="item in list2"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="1f"
        v-for="item in list3"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="1f"
        v-for="item in list4"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="1f"
        v-for="item in list5"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="1f"
        v-for="item in list6"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="1f"
        v-for="item in list7"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="1f"
        v-for="item in list8"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="1f"
        v-for="item in list9"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="1f"
        v-for="item in list10"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="1f"
        v-for="item in list11"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <!-- 
      <device-img 
      type='1f'
      className="location3_6_1"
      DeviceName="cc11"
      >
      </device-img> -->
      <!-- <device-img 
      type='1f'
      className="location3_5_1"
      DeviceName="cc11"
      >
      </device-img> -->
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DeviceImg from "../components/DeviceImg.vue";
export default Vue.extend({
  name: "home",
  data() {
    return {
      list1: [
        {
          className: "location1_1_1",
          DeviceName: "zs76"
        },
        {
          className: "location1_1_2",
          DeviceName: "zs77"
        },
        {
          className: "location1_1_3",
          DeviceName: "zs78"
        },
        {
          className: "location1_1_4",
          DeviceName: "zs79"
        },
        {
          className: "location1_1_5",
          DeviceName: "zs80"
        },
        {
          className: "location1_1_6",
          DeviceName: "zs81"
        },
        {
          className: "location1_1_7",
          DeviceName: "zs82"
        },
        {
          className: "location1_1_8",
          DeviceName: "zs83"
        },
        {
          className: "location1_1_9",
          DeviceName: "zs84"
        },
        {
          className: "location1_1_10",
          DeviceName: "zs85"
        },
        {
          className: "location1_1_11",
          DeviceName: "zs86"
        }
      ],
      list2: [
        {
          className: "location2_1_2",
          DeviceName: "zs95"
        },
        {
          className: "location2_1_3",
          DeviceName: "zs94"
        },
        {
          className: "location2_1_4",
          DeviceName: "zs93"
        },
        {
          className: "location2_1_5",
          DeviceName: "zs92"
        },
        {
          className: "location2_1_6",
          DeviceName: "zs91"
        },
        {
          className: "location2_1_8",
          DeviceName: "zs90"
        },
        {
          className: "location2_1_9",
          DeviceName: "zs89"
        },
        {
          className: "location2_1_10",
          DeviceName: "zs88"
        },
        {
          className: "location2_1_11",
          DeviceName: "zs87"
        }
      ],
      list3: [
        {
          className: "location3_1_1",
          DeviceName: "cc01"
        },
        {
          className: "location3_1_2",
          DeviceName: "cc02"
        },
        {
          className: "location3_1_3",
          DeviceName: "cc03"
        },
        {
          className: "location3_1_4",
          DeviceName: "cc04"
        },
        {
          className: "location3_1_5",
          DeviceName: "cc05"
        }
      ],
      list4: [
        {
          className: "location3_2_1",
          DeviceName: "cc10"
        },
        {
          className: "location3_2_2",
          DeviceName: "cc09"
        },
        {
          className: "location3_2_3",
          DeviceName: "cc08"
        },
        {
          className: "location3_2_4",
          DeviceName: "cc07"
        },
        {
          className: "location3_2_5",
          DeviceName: "cc06"
        }
      ],
      list5: [
        {
          className: "location3_3_1",
          DeviceName: "cc11"
        },
        {
          className: "location3_3_2",
          DeviceName: "cc12"
        },
        {
          className: "location3_3_3",
          DeviceName: "cc13"
        },
        {
          className: "location3_3_4",
          DeviceName: "cc14"
        },
        {
          className: "location3_3_5",
          DeviceName: "cc15"
        }
      ],
      list6: [
        {
          className: "location3_4_1",
          DeviceName: "cc19"
        },
        {
          className: "location3_4_2",
          DeviceName: "cc18"
        },
        {
          className: "location3_4_3",
          DeviceName: "cc17"
        },
        {
          className: "location3_4_4",
          DeviceName: "cc16"
        }
      ],
      list7: [
        {
          className: "location3_5_1",
          DeviceName: "cc24"
        },
        {
          className: "location3_5_2",
          DeviceName: "cc25"
        },
        {
          className: "location3_5_3",
          DeviceName: "cc26"
        },
        {
          className: "location3_5_4",
          DeviceName: "cc27"
        }
      ],
      list8: [
        {
          className: "location3_6_1",
          DeviceName: "cc20"
        },
        {
          className: "location3_6_2",
          DeviceName: "cc21"
        },
        {
          className: "location3_6_3",
          DeviceName: "cc22"
        },
        {
          className: "location3_6_4",
          DeviceName: "cc23"
        }
      ],
      list9: [
        {
          className: "location3_7_1",
          DeviceName: "cc41"
        },
        {
          className: "location3_7_2",
          DeviceName: "cc40"
        },
        {
          className: "location3_7_3",
          DeviceName: "cc39"
        },
        {
          className: "location3_7_4",
          DeviceName: "cc38"
        },
        {
          className: "location3_7_5",
          DeviceName: "cc37"
        },
        {
          className: "location3_7_6",
          DeviceName: "cc36"
        },
        {
          className: "location3_7_7",
          DeviceName: "cc34"
        },
        {
          className: "location3_7_8",
          DeviceName: "cc33"
        },
        {
          className: "location3_7_9",
          DeviceName: "cc32"
        }
      ],
      list10: [
        {
          className: "location3_8_1",
          DeviceName: "cc42"
        },
        {
          className: "location3_8_2",
          DeviceName: "cc43"
        },
        {
          className: "location3_8_3",
          DeviceName: "cc44"
        },
        {
          className: "location3_8_4",
          DeviceName: "cc45"
        },
        {
          className: "location3_8_5",
          DeviceName: "cc46"
        },
        {
          className: "location3_8_6",
          DeviceName: "cc47"
        },
        {
          className: "location3_8_7",
          DeviceName: "cc48"
        },
        {
          className: "location3_8_8",
          DeviceName: "cc49"
        },
        {
          className: "location3_8_9",
          DeviceName: "cc50"
        }
      ],
      list11: [
        {
          className: "location3_9_1",
          DeviceName: "cc60"
        },
        {
          className: "location3_9_2",
          DeviceName: "cc59"
        },
        {
          className: "location3_9_3",
          DeviceName: "cc58"
        },
        {
          className: "location3_9_4",
          DeviceName: "cc57"
        },
        {
          className: "location3_9_5",
          DeviceName: "cc56"
        },
        {
          className: "location3_9_6",
          DeviceName: "cc55"
        },
        {
          className: "location3_9_7",
          DeviceName: "cc54"
        },
        {
          className: "location3_9_8",
          DeviceName: "cc53"
        },
        {
          className: "location3_9_9",
          DeviceName: "cc52"
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
.first {
  background: url("../assets/images/1f_back.png");
  height: 100vh;
}
</style>
