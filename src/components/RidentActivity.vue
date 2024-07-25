<template>
  <div class="rident-container">
    <div class="rident">
      <div class="rident-item">
        <p class="text">总用户注册数</p>
        <p>1737人</p>
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
    <div class="custom">
      <p class="custom-num temp">平台月活数量</p>
      <p class="custom-num temp">7541人</p>
    </div>
    <div class="rident">
      <div class="rident-item">
        <p class="text">空间数量</p>
        <p>6</p>
      </div>
      <div class="rident-item">
        <p class="text">商铺数量</p>
        <p>106</p>
      </div>
      <div class="rident-item">
        <p class="text">住宅小区数</p>
        <p>9</p>
      </div>
    </div>
    <div class="rident gap">
      <div class="rident-item">
        <p class="text">楼栋数</p>
        <p>104</p>
      </div>
      <div class="rident-item">
        <p class="text">单元数</p>
        <p>221</p>
      </div>
      <div class="rident-item">
        <p class="text">房屋数</p>
        <p>5934</p>
      </div>
    </div>
    <div class="custom">
      <div class="box" v-show="isShow">
        <p class="custom-num">{{ obj.title }}</p>
        <p class="custom-num">{{ obj.num }}人</p>
      </div>
      <p class="custom-num2" @click="toggle">
        <span>切换</span>
      </p>
    </div>
    <div class="chart-box">
      <div class="customChart" ref="customChart"></div>
      <div class="customChart" ref="customChart2"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {
      isShow: true,
      obj: {
        title: "人口总数",
        num: 12233,
      },
      dataChart: [
        {
          value: 56,
          name: "男性",
        },
        {
          value: 44,
          name: "女性",
        },
      ],
      dataChart2: [
        {
          value: 24,
          name: "1-18岁",
        },
        {
          value: 65,
          name: "28-59岁",
        },
        {
          value: 11,
          name: "60岁以上",
        },
      ],
    };
  },

  mounted() {
    this.init();
    this.init2();
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
      if (this.isShow) {
        this.dataChart = [
          {
            value: 56,
            name: "男性",
          },
          {
            value: 44,
            name: "女性",
          },
        ];
        this.dataChart2 = [
          {
            value: 24,
            name: "1-18岁",
          },
          {
            value: 65,
            name: "28-59岁",
          },
          {
            value: 11,
            name: "60岁以上",
          },
        ];
      } else {
        this.dataChart = [
          {
            value: 97,
            name: "常住人口",
          },
          {
            value: 3,
            name: "流动人口",
          },
        ];
        this.dataChart2 = [
          {
            value: 97,
            name: "户籍人口",
          },
          {
            value: 3,
            name: "外籍人口",
          },
        ];
      }
      this.init();
      this.init2();
    },
    init() {
      const chart = echarts.init(this.$refs.customChart);
      const opitions = {
        title: {
          text: !this.isShow ? "常住人口：11866人" : "",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: ".8125rem",
          },
        },
        color: ["#25a0ff", "#f9b2ba"],
        tooltip: {
          formatter: "{b} : {d}%",

          backgroundColor: "rgba(18, 55, 85, 0.8);",
          borderColor: "transparent",

          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          orient: "vertical",
          right: "5%",
          top: "center",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#fff",
            fontSize: ".8125rem",
          },
        },

        series: [
          {
            data: this.dataChart,
            type: "pie",
            hoverAnimation: false,
            radius: ["0%", "59%"],
            center: ["28%", "50%"],
            labelLine: {
              show: false,
            },
            label: {
              show: false,
            },
          },
        ],
      };
      chart.setOption(opitions);
      window.addEventListener("resize", () => {
        chart.resize();
      });
    },
    init2() {
      const chart = echarts.init(this.$refs.customChart2);
      const opitions = {
        title: {
          text: !this.isShow ? "户籍人口：11866人" : "",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: ".8125rem",
          },
        },
        color: ["#016dff", "#fedf14", "#1b98a5"],
        tooltip: {
          formatter: "{b} : {d}%",
          backgroundColor: "rgba(18, 55, 85, 0.8);",
          borderColor: "transparent",

          textStyle: {
            color: "#fff",
          },
        },
        legend: {
          orient: "vertical",
          right: "5%",
          top: "center",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#fff",
            fontSize: ".8125rem",
          },
        },

        series: [
          {
            data: this.dataChart2,
            type: "pie",
            hoverAnimation: false,
            radius: ["0%", "59%"],
            center: ["25%", "50%"],
            labelLine: {
              show: false,
            },
            label: {
              show: false,
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
  margin: 0.2125rem 0.4375rem 0 0.4375rem;
  .rident {
    display: flex;
    justify-content: space-between;

    .rident-item {
      width: 6.875rem;
      height: 51.1996px;
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
    height: 32.0004px;
    margin: 8px 0;
    background: url(../assets/home2/bg3.png) no-repeat center/100% 100%;
    display: flex;
    position: relative;
    align-items: center;
    .box {
      display: flex;
      .custom-num {
        width: 130px;
        text-align: right;
        line-height: 32.0004px;
        background-image: -webkit-linear-gradient(#fff, #4faeff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    .custom-num {
      width: 130px;
      text-align: right;
      line-height: 32.0004px;
      background-image: -webkit-linear-gradient(#fff, #4faeff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .custom-num2 {
      position: absolute;
      right: 0;
      width: 130px;
      text-align: center;
      background-image: -webkit-linear-gradient(#fff, #4faeff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        cursor: pointer;
        padding: 1px 4px;
        width: 50px;
        border: 2px solid #27527c;
      }
    }
    .temp {
      width: 150px;
    }
  }
  .gap {
    margin-top: 8px;
  }
  .chart-box {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;

    .customChart {
      width: 182px;
      height: 145px;
    }
  }
}
</style>
