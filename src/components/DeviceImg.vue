<template>
  <div>
    <template v-if="status">
      <!-- 弹出框 -->
      <!-- 二楼 -->
      <template v-if="type === '2f'">
        <div @click="skipEdit" :class="className">
          <el-popover placement="top" width="160" trigger="hover">
            <div>
              <div style="text-align: center;padding-bottom: 5px">
                {{ Device.name }}
              </div>
              <div class="content_flex">
                <div style="width: 250px">
                  <div>产品名称: {{ Device.prd_name }}</div>
                  <div class="content_flex content_center">
                    完成率:
                    <el-progress
                      v-if="Device"
                      :text-inside="true"
                      :stroke-width="24"
                      :percentage="WanChen"
                      status="success"
                    >
                    </el-progress>
                  </div>
                </div>
                <div>
                  <div>实际数量: {{ Device.sum_qty }}</div>
                  <div>计划数量: {{ Device.qty }}</div>
                </div>
              </div>
            </div>
            <!-- 开机 -->
            <img
              slot="reference"
              v-if="Device.nState === 0"
              src="../assets/images/2f_success.png"
              width="160"
              height="92"
            />
            <!-- 警报 -->
            <img
              slot="reference"
              v-if="Device.nState === 1"
              src="../assets/images/2f_error.png"
              width="160"
              height="92"
            />
            <!-- 关机 -->
            <img
              slot="reference"
              v-if="Device.nState === 2"
              src="../assets/images/2f_down.png"
              width="160"
              height="92"
            />
          </el-popover>
        </div>
        <!-- <popup-box :Device='Device'>
          <slot>
            123
          </slot>
        </popup-box> -->
        <!-- 正常 -->
        <!-- <img
        :class="className"
        v-if="Device.nState === 0"
        v-popover:popover
        src="../assets/images/2f_success.png"
        width="160"
        height="92"
        > -->
        <!-- 警报 -->
        <img
          :class="className"
          v-if="Device.nState === 1"
          src="../assets/images/2f_success.png"
          width="160"
          height="92"
        />
        <!-- 关机 -->
        <img
          :class="className"
          v-if="Device.nState === 2"
          src="../assets/images/2f_success.png"
          width="160"
          height="92"
        />
      </template>
      <!-- 二楼 -->
      <template v-if="type === '2f_left'">
        <div @click="skipEdit" :class="className">
          <el-popover placement="top" width="160" trigger="hover">
            <div>
              <div style="text-align: center;padding-bottom: 5px">
                {{ Device.name }}
              </div>
              <div class="content_flex">
                <div style="width: 250px">
                  <div>产品名称: {{ Device.prd_name }}</div>
                  <div class="content_flex content_center">
                    完成率:
                    <el-progress
                      v-if="Device"
                      :text-inside="true"
                      :stroke-width="24"
                      :percentage="WanChen"
                      status="success"
                    >
                    </el-progress>
                  </div>
                </div>
                <div>
                  <div>实际数量: {{ Device.sum_qty }}</div>
                  <div>计划数量: {{ Device.qty }}</div>
                </div>
              </div>
            </div>
            <!-- 开机 -->
            <img
              slot="reference"
              v-if="Device.nState === 0"
              src="../assets/images/2f_success_left.png"
              width="160"
              height="92"
            />
            <!-- 警报 -->
            <img
              slot="reference"
              v-if="Device.nState === 1"
              src="../assets/images/2f_error_left.png"
              width="160"
              height="92"
            />
            <!-- 关机 -->
            <img
              slot="reference"
              v-if="Device.nState === 2"
              src="../assets/images/2f_down_left.png"
              width="160"
              height="92"
            />
          </el-popover>
        </div>
      </template>
      <!-- 一楼 -->
      <template v-if="type === '1f'">
        <div @click="skipEdit('cc')" :class="className">
          <el-popover placement="top" width="160" trigger="hover">
            <div>
              <div style="text-align: center;padding-bottom: 5px">
                {{ Device.name }}
              </div>
              <div class="content_flex">
                <div style="width: 250px">
                  <div>产品名称: {{ Device.prd_name }}</div>
                  <div class="content_flex content_center">
                    完成率:
                    <el-progress
                      v-if="Device"
                      :text-inside="true"
                      :stroke-width="24"
                      :percentage="WanChen"
                      status="success"
                    >
                    </el-progress>
                  </div>
                </div>
                <div>
                  <div>实际数量: {{ Device.sum_qty }}</div>
                  <div>计划数量: {{ Device.qty }}</div>
                </div>
              </div>
            </div>
            <!-- 开机 -->
            <img
              slot="reference"
              v-if="Device.nState === 0"
              src="../assets/images/1f_success.png"
              width="120"
              height="106"
            />
            <!-- 警报 -->
            <img
              slot="reference"
              v-if="Device.nState === 1"
              src="../assets/images/1f_error.png"
              width="120"
              height="106"
            />
            <!-- 关机 -->
            <img
              slot="reference"
              v-if="Device.nState === 2"
              src="../assets/images/1f_down.png"
              width="120"
              height="106"
            />
          </el-popover>
        </div>
      </template>

      <!-- 五楼 -->
      <template v-if="type === '5f'">
        <div @click="skipEdit('yz')" :class="className">
          <el-popover placement="top" width="160" trigger="hover">
            <div>
              <div style="text-align: center;padding-bottom: 5px">
                {{ Device.name }}
              </div>
              <div class="content_flex">
                <div style="width: 250px">
                  <div>产品名称: {{ Device.prd_name }}</div>
                  <div class="content_flex content_center">
                    完成率:
                    <el-progress
                      v-if="Device"
                      :text-inside="true"
                      :stroke-width="24"
                      :percentage="WanChen"
                      status="success"
                    >
                    </el-progress>
                  </div>
                </div>
                <div>
                  <div>实际数量: {{ Device.sum_qty }}</div>
                  <div>计划数量: {{ Device.qty }}</div>
                </div>
              </div>
            </div>
            <!-- 开机 -->
            <img
              slot="reference"
              v-if="Device.nState === 0"
              src="../assets/images/5f_success.png"
              width="100"
              height="93"
            />
            <!-- 警报 -->
            <img
              slot="reference"
              v-if="Device.nState === 1"
              src="../assets/images/5f_error.png"
              width="100"
              height="93"
            />
            <!-- 关机 -->
            <img
              slot="reference"
              v-if="Device.nState === 2"
              src="../assets/images/5f_down.png"
              width="100"
              height="93"
            />
          </el-popover>
        </div>
      </template>
    </template>
  </div>
</template>

<script lang="ts">
import { FilterContent } from "../utils/index";
import { mapState } from "vuex";
import Vue from "vue";
export default Vue.extend({
  name: "DeviceImg",
  props: {
    className: {
      type: String,
      default: ""
    },
    DeviceName: {
      type: [String, Number],
      default: null
    },
    type: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      status: false,
      Device: {} as any,
      visible: false
    };
  },
  methods: {
    filterContent() {
      console.log();
      const { status, Device } = FilterContent(this.Content, this.DeviceName);
      this.status = status;
      this.Device = Device;
      console.log(this.Device);
    },
    skipEdit(type: string) {
      if (type === "cc" || type === "yz") {
        this.$router.push({
          name: "edit",
          params: { deviceName: this.DeviceName as string },
          query: { type }
        });
      } else {
        this.$router.push({
          name: "edit",
          params: { deviceName: this.DeviceName as string }
        });
      }
    }
  },
  computed: {
    ...mapState(["Content"]),
    WanChen(): any {
      let num = 0;
      const sum = Number(
        ((this.Device.sum_qty / this.Device.qty) * 100).toFixed(2)
      );
      console.log(typeof sum, "计算后的值");
      if (typeof sum === "number") {
        num = sum;
      }
      return num;
    }
  },
  watch: {
    Content(newValue: any, oldValue: any) {
      if (newValue.data.length > 0) {
        this.filterContent();
      }
    }
  }
});
</script>

<style lang="scss" scoped>
$first_index: 8;
@for $i from 1 through $first_index {
  .location_5_#{$i} {
    position: absolute;
    left: 260px + $i * 50px;
    top: 200px + $i * 30px;
    z-index: 1 + $i;
  }
}

$first_index: 8;
@for $i from 1 through $first_index {
  .location_4_#{$i} {
    position: absolute;
    left: 125px + $i * 50px;
    top: 275px + $i * 30px;
    z-index: 1 + $i;
  }
}

$first_index: 8;
@for $i from 1 through $first_index {
  .location_3_#{$i} {
    position: absolute;
    left: -10px + $i * 50px;
    top: 350px + $i * 30px;
    z-index: 1 + $i;
  }
}

$first_index: 28;
@for $i from 1 through $first_index {
  .location_1_#{$i} {
    position: absolute;
    left: 210px + $i * 50px;
    top: 997px - $i * 29px;
    z-index: 50 - $i;
  }
}
$first_index: 28;
@for $i from 1 through $first_index {
  .location_2_#{$i} {
    position: absolute;
    left: 80px + $i * 50px;
    top: 919px - $i * 29px;
    z-index: 50 - $i;
  }
}

// 一楼的注塑机

$first_index: 12;
@for $i from 1 through $first_index {
  .location1_1_#{$i} {
    position: absolute;
    left: -30px + $i * 59px;
    top: 449px - $i * 34px;
    z-index: 50 - $i;
  }
}
$first_index: 12;
@for $i from 1 through $first_index {
  .location2_1_#{$i} {
    position: absolute;
    left: 105px + $i * 59px;
    top: 529px - $i * 34px;
    z-index: 50 - $i;
  }
}

// 1f 冲床

$first_index: 6;
@for $i from 1 through $first_index {
  .location3_1_#{$i} {
    position: absolute;
    left: 875px + $i * 82px;
    top: 299px - $i * 48px;
    z-index: 50 - $i;
  }
}

$first_index: 6;
@for $i from 1 through $first_index {
  .location3_1_#{$i} {
    position: absolute;
    left: 875px + $i * 82px;
    top: 299px - $i * 48px;
    z-index: 50 - $i;
  }
}

$first_index: 6;
@for $i from 1 through $first_index {
  .location3_2_#{$i} {
    position: absolute;
    left: 968px + $i * 82px;
    top: 358px - $i * 48px;
    z-index: 50 - $i;
  }
}

$first_index: 6;
@for $i from 1 through $first_index {
  .location3_3_#{$i} {
    position: absolute;
    left: 1031px + $i * 82px;
    top: 398px - $i * 48px;
    z-index: 50 - $i;
  }
}

$first_index: 6;
@for $i from 1 through $first_index {
  .location3_4_#{$i} {
    position: absolute;
    left: 1113px + $i * 82px;
    top: 448px - $i * 48px;
    z-index: 50 - $i;
  }
}

$first_index: 6;
@for $i from 1 through $first_index {
  .location3_4_#{$i} {
    position: absolute;
    left: 1113px + $i * 82px;
    top: 448px - $i * 48px;
    z-index: 50 - $i;
  }
}

$first_index: 6;
@for $i from 1 through $first_index {
  .location3_5_#{$i} {
    position: absolute;
    left: 1176px + $i * 82px;
    top: 488px - $i * 48px;
    z-index: 50 - $i;
  }
}

// // -63
// // -40
.location3_6_1 {
  position: absolute;
  left: 554px;
  top: 790px;
  z-index: 10;
}
$first_index: 9;
@for $i from 1 through $first_index {
  .location3_6_#{$i} {
    position: absolute;
    left: 472px + $i * 120px;
    top: 838px - $i * 70px;
    z-index: 10 - $i;
  }
}

$first_index: 9;
@for $i from 1 through $first_index {
  .location3_7_#{$i} {
    position: absolute;
    left: 622px + $i * 120px;
    top: 938px - $i * 70px;
    z-index: 10 - $i;
  }
}
$first_index: 9;
@for $i from 1 through $first_index {
  .location3_8_#{$i} {
    position: absolute;
    // left: 685px + $i * 82px;
    // top: 978px - $i * 48px;
    left: 685px + $i * 120px;
    top: 978px - $i * 70px;
    z-index: 10 - $i;
  }
}

$first_index: 9;
@for $i from 1 through $first_index {
  .location3_9_#{$i} {
    position: absolute;
    left: 748px + $i * 120px;
    top: 1018px - $i * 70px;
    z-index: 50 - $i;
  }
}

// 五楼
.location5_2_1 {
  position: absolute;
  left: 438px;
  top: 580px;
  z-index: 50;
}
.location5_3_1 {
  position: absolute;
  left: 380px;
  top: 730px;
  z-index: 49;
}

$first_index: 16;
@for $i from 1 through $first_index {
  .location5_1_#{$i} {
    position: absolute;
    left: 326px + $i * 63px;
    top: 586px - $i * 36px;
    z-index: 50 - $i;
  }
}
$first_index: 16;
@for $i from 1 through $first_index {
  .location5_2_#{$i} {
    position: absolute;
    left: 375px + $i * 63px;
    top: 616px - $i * 36px;
    z-index: 100 - $i;
  }
}

$first_index: 16;
@for $i from 1 through $first_index {
  .location5_3_#{$i} {
    position: absolute;
    left: 317px + $i * 63px;
    top: 766px - $i * 36px;
    z-index: 100 - $i;
  }
}
$first_index: 16;
@for $i from 1 through $first_index {
  .location5_4_#{$i} {
    position: absolute;
    left: 366px + $i * 63px;
    top: 796px - $i * 36px;
    z-index: 150 - $i;
  }
}

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
