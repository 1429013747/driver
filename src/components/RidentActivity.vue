<template>
  <div class="rident-container">
    <div class="rident">
      <div class="rident-item">
        <p class="text">开通用户数</p>
        <p>4675人</p>
      </div>
      <div class="rident-item">
        <p class="text">占社区居民</p>
        <p>28%</p>
      </div>
      <div class="rident-item">
        <p class="text">今日活跃用户数</p>
        <p>96人</p>
      </div>
    </div>
    <div class="custom"></div>
    <div class="customChart" ref="customChart"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {};
  },

  mounted() {
    this.init();
  },
  methods: {
    init() {
      const chart = echarts.init(this.$refs.customChart);

      const opitions = {
        grid: {
          top: "5%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        color: ["#3aa0ff"],
        xAxis: {
          type: "category",
          data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: "#fff",
          },
        },
        yAxis: {
          type: "value",
          splitLine: {
            lineStyle: {
              type: "dashed",
              color: "gray",
              opacity: 0.3,
            },
          },
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
            areaStyle: {
              opacity: 0.5,
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#b6bcc1",
                },
                {
                  offset: 1,
                  color: "transparent",
                },
              ]),
            },
          },
        ],
      };
      chart.setOption(opitions);

      window.addEventListener("resize", () => {
        chart.resize();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.rident-container {
  margin: 0.2125rem 0.4375rem;
  .rident {
    display: flex;
    justify-content: space-between;

    .rident-item {
      width: 6.875rem;
      height: 4.7407vh;
      border: 0.125rem solid #27527c;
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: #98c7f3;
      text-align: center;
      .text {
        font-size: 0.875rem;
      }
    }
  }
  .custom {
    height: 2.963vh;
    margin: 1rem 0;
    background: url(../assets/home/bg3.png) no-repeat center/100% 100%;
  }
  .customChart {
    width: 21.375rem;
    height: 13.4259vh;
  }
}
</style>
