<template>
  <div class="garbage-container">
    <div class="count">
      <div class="count-item">
        <p>垃圾点位</p>
        <p>11个</p>
      </div>
      <div class="count-item">
        <p>垃圾点位</p>
        <p>8211个</p>
      </div>
      <div class="count-item">
        <p>垃圾点位</p>
        <p>114个</p>
      </div>
    </div>
    <div class="draw-chart">
      <div class="box">
        <div ref="chart" class="chart"></div>
        <div class="chart-tip">
          <p>86%</p>
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
        <el-steps direction="vertical" :active="1">
          <el-step
            title="2024-01-25"
            description="其他垃圾桶垃圾溢出"
            status="wait"
          ></el-step>
          <el-step
            title="2024-01-25"
            description="厨余垃圾桶垃圾溢出"
            status="wait"
          ></el-step>
          <el-step
            title="2024-01-25"
            description="有害垃圾桶垃圾溢出"
            status="wait"
          ></el-step>
        </el-steps>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  data() {
    return {
      chart: null,
    };
  },
  mounted() {
    this.init();
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
    justify-content: space-between;
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
      //样式穿透

      /deep/ .el-step__title {
        font-size: 0.875rem;
        color: #4faeff;
      }
      /deep/ .el-step__description {
        font-size: 1.15rem;
      }
      /deep/ .el-step__description {
        padding: 0.25rem 0.575rem;
        background: url(../assets/home/stepBg.png) no-repeat center/100% 100%;
      }
    }
  }
}
</style>
