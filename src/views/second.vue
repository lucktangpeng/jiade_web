<template>
  <div class="second">
    <div>
      <!-- <device-img 
      :className="'location_1_'+ item"
      type='2f'
      :number="item"
      v-for="item in list1"
      :key="item"
      >
      </device-img>
      <device-img 
      :className="'location_2_'+ value"
      type='2f'
      :number="value"
      v-for="value in list2"
      :key="value+'location'"
      >
      </device-img>
      <device-img
        type='2f_left'
        v-for="val in list3"
        :key="val+'fdsa'"
        :className="'location_3_'+val"
        :number="28"
        >
      </device-img>
      <device-img
        type='2f_left'
        v-for="val in list4"
        :key="val+'fdsadsaf'"
        :className="'location_4_'+val"
        :number="28"
        >
      </device-img>
      <device-img
        type='2f_left'
        v-for="val in list5"
        :key="val+'fdsafdsadf'"
        :className="'location_5_'+val"
        :number="28"
        >
      </device-img> -->
      <device-img
        type="2f_left"
        v-for="item in list5"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="2f_left"
        v-for="item in list4"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <device-img
        type="2f_left"
        v-for="item in list3"
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
        type="2f"
        v-for="item in list1"
        :key="item.Device_Name"
        :className="item.className"
        :DeviceName="item.DeviceName"
      >
      </device-img>
      <!-- <device-img type='2f_left' className="location_5_1" :number="28"></device-img> -->
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
          className: "location_1_1",
          DeviceName: "zs01"
        },
        {
          className: "location_1_2",
          DeviceName: "zs02"
        },
        {
          className: "location_1_3",
          DeviceName: "zs03"
        },
        {
          className: "location_1_4",
          DeviceName: "zs04"
        },
        {
          className: "location_1_5",
          DeviceName: "zs05"
        },
        {
          className: "location_1_6",
          DeviceName: "zs06"
        },
        {
          className: "location_1_7",
          DeviceName: "zs07"
        },
        {
          className: "location_1_8",
          DeviceName: "zs08"
        },
        {
          className: "location_1_9",
          DeviceName: "zs09"
        },
        {
          className: "location_1_10",
          DeviceName: "zs10"
        },
        {
          className: "location_1_11",
          DeviceName: "zs11"
        },
        {
          className: "location_1_12",
          DeviceName: "zs12"
        },
        {
          className: "location_1_13",
          DeviceName: "zs13"
        },
        {
          className: "location_1_14",
          DeviceName: "zs14"
        },
        {
          className: "location_1_15",
          DeviceName: "zs15"
        },
        {
          className: "location_1_16",
          DeviceName: "zs16"
        },
        {
          className: "location_1_17",
          DeviceName: "zs17"
        },
        {
          className: "location_1_18",
          DeviceName: "zs18"
        },
        {
          className: "location_1_19",
          DeviceName: "zs19"
        },
        {
          className: "location_1_20",
          DeviceName: "zs20"
        },
        {
          className: "location_1_21",
          DeviceName: "zs21"
        },
        {
          className: "location_1_22",
          DeviceName: "zs22"
        },
        {
          className: "location_1_23",
          DeviceName: "zs23"
        },
        {
          className: "location_1_24",
          DeviceName: "zs24"
        }
      ] as any[],
      list2: [
        {
          className: "location_2_1",
          DeviceName: "zs25"
        },
        {
          className: "location_2_2",
          DeviceName: "zs26"
        },
        {
          className: "location_2_3",
          DeviceName: "zs27"
        },
        {
          className: "location_2_4",
          DeviceName: "zs28"
        },
        {
          className: "location_2_5",
          DeviceName: "zs29"
        },
        {
          className: "location_2_6",
          DeviceName: "zs30"
        },
        {
          className: "location_2_7",
          DeviceName: "zs31"
        },
        {
          className: "location_2_8",
          DeviceName: "zs32"
        },
        {
          className: "location_2_9",
          DeviceName: "zs33"
        },
        {
          className: "location_2_10",
          DeviceName: "zs34"
        },
        {
          className: "location_2_11",
          DeviceName: "zs35"
        },
        {
          className: "location_2_12",
          DeviceName: "zs36"
        },
        {
          className: "location_2_13",
          DeviceName: "zs37"
        },
        {
          className: "location_2_14",
          DeviceName: "zs38"
        },
        {
          className: "location_2_15",
          DeviceName: "zs39"
        },
        {
          className: "location_2_16",
          DeviceName: "zs40"
        },
        {
          className: "location_2_17",
          DeviceName: "zs41"
        },
        {
          className: "location_2_18",
          DeviceName: "zs42"
        },
        {
          className: "location_2_19",
          DeviceName: "zs43"
        },
        {
          className: "location_2_20",
          DeviceName: "zs44"
        },
        {
          className: "location_2_21",
          DeviceName: "zs45"
        },
        {
          className: "location_2_22",
          DeviceName: "zs46"
        },
        {
          className: "location_2_23",
          DeviceName: "zs47"
        },
        {
          className: "location_2_24",
          DeviceName: "zs48"
        },
        {
          className: "location_2_25",
          DeviceName: "zs49"
        },
        {
          className: "location_2_26",
          DeviceName: "zs50"
        },
        {
          className: "location_2_27",
          DeviceName: "zs51"
        }
      ] as any[],
      list3: [
        {
          className: "location_3_1",
          DeviceName: "zs59"
        },
        {
          className: "location_3_2",
          DeviceName: "zs58"
        },
        {
          className: "location_3_3",
          DeviceName: "zs57"
        },
        {
          className: "location_3_4",
          DeviceName: "zs56"
        },
        {
          className: "location_3_5",
          DeviceName: "zs55"
        },
        {
          className: "location_3_6",
          DeviceName: "zs54"
        },
        {
          className: "location_3_7",
          DeviceName: "zs53"
        },
        {
          className: "location_3_8",
          DeviceName: "zs52"
        }
      ] as any[],
      list4: [
        {
          className: "location_4_1",
          DeviceName: "zs67"
        },
        {
          className: "location_4_2",
          DeviceName: "zs66"
        },
        {
          className: "location_4_3",
          DeviceName: "zs65"
        },
        {
          className: "location_4_4",
          DeviceName: "zs64"
        },
        {
          className: "location_4_5",
          DeviceName: "zs63"
        },
        {
          className: "location_4_6",
          DeviceName: "zs62"
        },
        {
          className: "location_4_7",
          DeviceName: "zs61"
        },
        {
          className: "location_4_8",
          DeviceName: "zs60"
        }
      ] as any[],
      list5: [
        {
          className: "location_5_1",
          DeviceName: "zs75"
        },
        {
          className: "location_5_2",
          DeviceName: "zs74"
        },
        {
          className: "location_5_3",
          DeviceName: "zs73"
        },
        {
          className: "location_5_4",
          DeviceName: "zs72"
        },
        {
          className: "location_5_5",
          DeviceName: "zs71"
        },
        {
          className: "location_5_6",
          DeviceName: "zs70"
        },
        {
          className: "location_5_7",
          DeviceName: "zs69"
        },
        {
          className: "location_5_8",
          DeviceName: "zs68"
        }
      ] as any[]
    };
  },
  async created() {
    await this.$store.dispatch("GetContent");
  },
  components: {
    DeviceImg
  }
});
</script>

<style lang="scss" scoped>
.second {
  background: url("../assets/images/2f_back.png");
  // background-size: 1920 1000;
  height: 100vh;
}
</style>
