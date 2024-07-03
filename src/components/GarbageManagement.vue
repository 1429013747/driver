<template>
  <div class="garbage-container">
    <div class="count">
      <div class="count-item">
        <p>垃圾点位</p>
        <p>11个</p>
      </div>
      <div class="count-item">
        <p>投放率</p>
        <p>99%</p>
      </div>
      <el-button
        type="primary"
        style="background-color: transparent"
        @click="showDialog = true"
        >视频监控</el-button
      >
    </div>
    <div class="draw-chart">
      <div class="box">
        <div ref="chart" class="chart"></div>
        <div class="chart-tip">
          <p>98%</p>
          <p>垃圾投放正确率</p>
        </div>
      </div>
      <div class="box">
        <div ref="chart2" class="chart"></div>
        <div class="chart-tip">
          <p>6%</p>
          <p>空桶率</p>
        </div>
      </div>
    </div>
    <div class="draw-info">
      <div class="title"></div>
      <div class="draw-info-item">
        <vue-seamless-scroll
          :data="markList"
          :class-option="seamlessScrollOption"
        >
          <el-steps direction="vertical">
            <el-step
              :title="day"
              :description="item.description"
              status="wait"
              v-for="(item, i) in markList"
              :key="i"
            ></el-step>
          </el-steps>
        </vue-seamless-scroll>
      </div>
    </div>
    <el-dialog :visible.sync="showDialog">
      <div class="video"></div>
    </el-dialog>
  </div>
</template>

<script>
import * as echarts from "echarts";
import { formatDate } from "@/utils/common.js";
export default {
  data() {
    return {
      chart: null,
      day: null,
      showDialog: false,
      markList: [
        {
          description: "凤起都市花园1点位其他垃圾通溢出",
        },
        {
          description: "凤起都市花园3点位有害垃圾通溢出",
        },
        {
          description: "凤起都市花园3点位厨余垃圾通溢出",
        },
        {
          description: "王马社区5点位余垃圾通溢出",
        },
        {
          description: "王马社区2点位余垃圾通溢出",
        },
      ],
    };
  },
  mounted() {
    this.init();
    this.day = formatDate(new Date()).month;
  },
  computed: {
    seamlessScrollOption() {
      return {
        step: 0.2, // 数值越大速度滚动越快
        limitMoveNum: 2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000, // 单步运动停止的时间(默认值1000ms)
      };
    },
  },
  methods: {
    init() {
      const chart = echarts.init(this.$refs.chart);
      const options = {
        series: [
          {
            type: "pie",
            radius: ["76%", "92%"],
            center: ["50%", "50%"],
            color: ["#4faeff", "#003a70"],
            startAngle: 230,
            endAngle: 310,
            itemStyle: {
              borderRadius: 10,
            },
            //   取消放大效果
            hoverAnimation: false,
            label: {
              show: false,
            },

            data: [{ value: 10, name: "86%" }, { value: 1 }],
          },
        ],
      };
      const chart2 = echarts.init(this.$refs.chart2);
      const options2 = {
        series: [
          {
            type: "pie",
            radius: ["76%", "92%"],
            center: ["50%", "50%"],
            color: ["#4faeff", "#003a70"],
            startAngle: 230,
            endAngle: 310,
            itemStyle: {
              borderRadius: 10,
            },
            //   取消放大效果
            hoverAnimation: false,
            label: {
              show: false,
            },

            data: [{ value: 10, name: "86%" }, { value: 1 }],
          },
        ],
      };
      chart.setOption(options);
      chart2.setOption(options2);
      window.addEventListener("resize", () => {
        chart.resize();
        chart2.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.garbage-container {
  .count {
    display: flex;
    justify-content: space-around;
    margin: 0 0.9259vh;
    .count-item {
      border: 0.1852vh solid #2d5180;
      padding: 0vh 2.4074vh;
      & p:first-child {
        margin-bottom: 0.3704vh;
      }
      p {
        font-size: 1.2963vh;
        font-weight: 600;
        background-image: -webkit-linear-gradient(#fff, #4faeff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
  .draw-chart {
    display: flex;
    margin: 0.25rem 0;
    justify-content: space-around;
    .box {
      position: relative;
      .chart {
        width: 10.1875rem;
        height: 15.5185vh;
        background: url(../assets/home/chartBg.png) no-repeat center center;
        background-size: 10.375rem 9.125rem;
      }
      .chart-tip {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        p:first-child {
          font-size: 1.25rem;
          font-weight: 600;
          background-image: -webkit-linear-gradient(#fff, #4faeff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        p:last-child {
          font-size: 0.875rem;
          color: #4faeff;
        }
      }
    }
  }
  .draw-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      width: 21.6062rem;
      height: 1.9875rem;
      background: url(../assets/home/titleBg6.png) no-repeat center/100% 100%;
    }
    .draw-info-item {
      margin: 1.25rem 0;
      height: 16.3704vh;
      width: 18.75rem;
      overflow: hidden;
      //样式穿透
      /deep/ .el-step__title {
        font-size: 0.675rem;
        color: #4faeff;
      }
      /deep/ .el-step__description {
        font-size: 0.775rem;
      }
      /deep/ .el-step__description {
        padding: 0.25rem 0.575rem;
        background: url(../assets/home/stepBg.png) no-repeat center/100% 100%;
      }
    }
  }
  /deep/ .el-dialog {
    background: #0f1722 !important;
    .video {
      background: url(@/assets/home/temp1.png) no-repeat center/100% 100%;
      width: 920px;
      height: 60vh;
    }
  }
}
</style>
