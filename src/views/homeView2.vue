<template>
  <div class="container">
    <div class="header">
      <div class="header-info">
        <div class="address">长庆街道</div>
        <div class="weather">
          <p class="img"></p>
          <p>多云</p>
          <p>23 ~ 34℃</p>
        </div>
        <div class="title1"><p>星火·安居</p></div>
        <div class="title2"><p>星火·智治</p></div>
        <div class="title3"><p>星火·智治</p></div>
        <div class="title4"><p>星火·模型</p></div>
        <div class="times">
          <p>2024-01-19</p>
          <p>星期四</p>
          <p class="time-detailed">13:53:20</p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="content-left">
        <div class="title"></div>
        <div class="old-count">
          <p class="old-info">绑定老人数量</p>
          <p class="count">3965人</p>
        </div>
        <div class="title2">
          <p class="index">居民健康指数</p>
          <div class="index-info">
            <p><span class="active">老人</span></p>
            <p><span>居民</span></p>
          </div>
        </div>
        <div class="info">
          <div class="info-item">
            <div class="icon"></div>
            <div>
              <p class="text">平均血糖值</p>
              <p class="text2">300</p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon1"></div>
            <div>
              <p class="text">平均血压值</p>
              <p class="text2">89/105</p>
            </div>
          </div>
        </div>
        <div class="title2">
          <p class="index">居民用电</p>
          <div class="index-info">
            <p><span class="active">月度</span></p>
            <p><span>日度</span></p>
          </div>
        </div>
        <div class="customChart" ref="customChart"></div>
        <div class="title2">
          <p class="index">社工走访</p>
        </div>
        <div class="chart-t">
          <Chart :options="options"></Chart>
          <div class="bottomBg"></div>
          <div class="circle">
            <p class="text1">走访总次数</p>
            <p>
              <span class="text2">3.6</span>
              <span>km</span>
            </p>
          </div>
        </div>
        <div class="view-info">
          <div class="view-info-item">
            <p class="text">绑定总数</p>
            <p>
              <span class="text2">12635</span>
              <span>个</span>
            </p>
          </div>
          <div class="view-info-item">
            <p class="text">绑定总数</p>
            <p>
              <span class="text2">12635</span>
              <span>个</span>
            </p>
          </div>
          <div class="view-info-item">
            <p class="text">绑定总数</p>
            <p>
              <span class="text2">12635</span>
              <span>个</span>
            </p>
          </div>
        </div>
        <div class="title2">
          <p class="index">老人轨迹分析</p>
        </div>
        <div class="chart-t">
          <Chart :options="options2"></Chart>
          <div class="bottomBg"></div>
          <div class="circle">
            <p class="text1">老人轨迹分析</p>
            <p>
              <span class="text2">3.6</span>
              <span>km</span>
            </p>
          </div>
        </div>
        <div class="health">
          <div class="health-item">
            <div class="title">老人健康步数</div>
            <div class="customChart2" ref="customChart2"></div>
          </div>
          <div class="health-item">
            <div class="title">互动次数(月平均)</div>
            <div class="info">
              <p class="icon"></p>
              <p class="info-text">一键呼叫</p>
              <p class="num">46</p>
            </div>
            <div class="info">
              <p class="icon1"></p>
              <p class="info-text">短信发送</p>
              <p class="num">38</p>
            </div>
            <div class="info">
              <p class="icon2"></p>
              <p class="info-text">生活提醒</p>
              <p class="num">17</p>
            </div>
          </div>
        </div>
      </div>
      <div class="content-center">
        <div class="title"></div>
        <div class="center-item">
          <div>
            <div class="title-item">
              <p class="text">会员性别比例</p>
            </div>
            <div class="chart-info">
              <Chart :options="options3"></Chart>
              <div class="box">
                <div class="type">
                  <p>男性</p>
                  <p class="text">60%</p>
                </div>
                <div class="type">
                  <p>女性</p>
                  <p class="text">40%</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div class="title-item">
              <p class="text2">会员年龄段分布</p>
            </div>
            <div class="chart-info">
              <div class="chart" ref="chart"></div>
            </div>
          </div>
          <div>
            <div class="content-info">
              <div class="temp-item">
                <p>平均跑步时长</p>
                <p>36min</p>
              </div>
              <div class="temp-item2">
                <p>平均跑步距离</p>
                <p>5km</p>
              </div>
            </div>
            <div class="content-info">
              <div class="temp-item3">
                <p>日活跃度</p>
                <p>124</p>
              </div>
              <div class="temp-item3">
                <p>周活跃度</p>
                <p>785</p>
              </div>
            </div>
            <div class="content-info">
              <div class="temp-item3">
                <p>月活跃度</p>
                <p>3451</p>
              </div>
              <div class="temp-item3">
                <p>总活跃度</p>
                <p>34785</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-right">
        <div class="title"></div>
        <div class="title2">
          <p class="text">幼儿人脸录入总数</p>
          <p class="text2">16823<sapn style="font-size: 15px">人</sapn></p>
        </div>
        <div class="title-bg">
          <p class="index">家长查询信息数据</p>
        </div>
        <div class="bg">
          <p>总查询次数</p>
          <p>3389 次</p>
        </div>

        <div class="chart2" ref="chart2"></div>
        <div class="title2">
          <p class="text">摄像头总个数</p>
          <p class="text2">15167<sapn style="font-size: 15px">人</sapn></p>
        </div>

        <div class="title-bg">
          <p class="index">幼儿活动轨迹分析</p>
        </div>
        <div class="chart">
          <Chart :options="options4"></Chart>
          <div class="bottomBg"></div>
          <div class="circle">
            <p class="text1">幼儿轨迹活动分析</p>
            <p class="text1">
              <span class="text2">3106条</span>
            </p>
          </div>
        </div>
        <div class="title-bg">
          <p class="index">监控数据情况</p>
        </div>
        <div class="wisdom">
          <div class="video-box">
            <div class="video"></div>
            <div class="text">监控1</div>
          </div>
          <div class="video-box">
            <div class="video"></div>
            <div class="text">监控2</div>
          </div>
          <div class="video-box">
            <div class="video"></div>
            <div class="text">监控3</div>
          </div>
        </div>

        <div class="title-p"></div>
        <div class="chart">
          <Chart :options="options4"></Chart>
          <div class="bottomBg"></div>
          <div class="circle">
            <p class="text1">幼儿轨迹活动分析</p>
            <p class="text1">
              <span class="text2">3106条</span>
            </p>
          </div>
        </div>
        <div class="title-bg">
          <p class="index">家长查询信息数据</p>
        </div>

        <div class="chart3" ref="chart3"></div>
      </div>
      <div class="position"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import Chart from "@/components/common/Chart.vue";

export default {
  components: {
    Chart,
  },
  data() {
    return {
      options: {
        data: [
          {
            name: "高龄70+",
            value: 10,
          },
          {
            name: "瘫痪", //名称
            value: 15, //值
          },
          {
            name: "独居",
            value: 27,
          },
          {
            name: "重症",
            value: 10,
          },
        ],
        width: "18.75rem",
        height: "13.6vh",
        chartHeight: 18,
        legend: true,
        alpha: 20,
        beta: 30,
        grid3D: {
          width: "51%",
        },
      },
      options2: {
        data: [
          {
            name: "活动室", //名称
            value: 15, //值
          },
          {
            name: "公园",
            value: 27,
          },
          {
            name: "医院",
            value: 10,
          },
          {
            name: "超市",
            value: 60,
          },
        ],
        width: "18.75rem",
        height: "13.6vh",
        legend: true,
        chartHeight: 18,
        alpha: 20,
        beta: 30,
        grid3D: {
          width: "51%",
        },
      },
      options4: {
        data: [
          {
            name: "公园", //名称
            value: 15, //值
          },
          {
            name: "幼儿园",
            value: 27,
          },
          {
            name: "医院",
            value: 10,
          },
          {
            name: "超市",
            value: 60,
          },
        ],
        width: "18.75rem",
        legend: true,
        height: "11.6vh",
        chartHeight: 18,
        alpha: 20,
        beta: 30,
        grid3D: {
          width: "51%",
        },
      },
      options3: {
        data: [
          {
            name: "男性", //名称
            value: 15, //值
          },
          {
            name: "女性",
            value: 27,
          },
        ],
        width: "18.75rem",
        legend: false,
        height: "13.6vh",
        chartHeight: 40,
        alpha: 20,
        beta: 30,
        grid3D: {
          width: "51%",
        },
      },
    };
  },
  mounted() {
    this.init();
    this.init2();
    this.init3();
    this.init4();
    this.init5();
  },
  methods: {
    init() {
      const chart = echarts.init(this.$refs.customChart);

      const opitions = {
        grid: {
          top: "6%",
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
            type: "bar",
            barWidth: "30%",
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
    init2() {
      const chart = echarts.init(this.$refs.customChart2);

      const opitions = {
        grid: {
          top: "6%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        color: ["#3aa0ff"],
        xAxis: {
          type: "category",
          data: ["一", "二", "三", "四", "五", "六", "日"],
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
            data: [650, 630, 524, 518, 535, 647, 660],
            type: "line",
            barWidth: "30%",
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
    init3() {
      const chart = echarts.init(this.$refs.chart);

      const opitions = {
        legend: {
          top: "center",
          right: "29px",
          orient: "vertical",
          textStyle: {
            color: "#fff",
          },
          formatter: (val) => {
            return val;
          },
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            padAngle: 5,
            itemStyle: {
              borderRadius: 5,
            },
            left: -100,
            label: {
              show: false,
              position: "center",
            },

            labelLine: {
              show: false,
            },
            data: [
              { value: 735, name: "31-50岁" },
              { value: 580, name: "21-30岁" },
              { value: 484, name: "20岁以下" },
              { value: 300, name: "50岁以上" },
            ],
          },
        ],
      };
      chart.setOption(opitions);
      window.addEventListener("resize", () => {
        chart.resize();
      });
    },
    init4() {
      const chart = echarts.init(this.$refs.chart2);

      const opitions = {
        grid: {
          top: "6%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        color: ["#3aa0ff"],
        xAxis: {
          type: "category",
          data: ["一", "二", "三", "四", "五", "六", "日"],
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
            data: [650, 630, 524, 518, 535, 647, 660],
            type: "line",
            barWidth: "30%",
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
    init5() {
      const chart = echarts.init(this.$refs.chart3);

      const opitions = {
        grid: {
          top: "6%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        color: ["#3aa0ff"],
        xAxis: {
          type: "category",
          data: ["一", "二", "三", "四", "五", "六", "日"],
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
            data: [650, 630, 524, 518, 535, 647, 660],
            type: "line",
            barWidth: "30%",
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
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  color: #ffffff;
  background: url(../assets/home/bg.png) no-repeat center/100% 100%;
  .header {
    display: flex;
    justify-content: space-between;
    height: 9.067vh;
    width: 120rem;
    background: url(../assets/home/header.png) no-repeat center/100% 100%;
    .header-info {
      display: flex;
      margin: 1.825rem 2.375rem;
      position: relative;
      width: 100%;
      .address {
        width: 6.75rem;
        height: 4.06vh;
        line-height: 4.06vh;

        padding-right: 0.8rem;
        background: url(../assets/home/position.png) no-repeat center/100% 100%;
        font-weight: bold;
        font-size: 1.125rem;
        text-align: right;
      }
      .weather {
        display: flex;
        align-items: center;
        p {
          margin: 0;
        }
        .img {
          width: 2.5rem;
          height: 3.7037vh;
          background: url(../assets/home/yun.png) no-repeat center center;
        }
      }
      .title1 {
        position: absolute;
        top: -1.5rem;
        left: 23.6rem;
        background: url(../assets/home/shape1.png) no-repeat center/100% 100%;
        width: 10.5rem;
        height: 7.5vh;
        p {
          font-weight: bold;
          opacity: 0.5;
          font-size: 1rem;
          text-align: center;
          line-height: 6.9444vh;
          box-shadow: 0 0.125rem 0.0625rem 0 #00000052;
          transform: rotate(5deg);
        }
      }
      .title2 {
        position: absolute;
        top: -1rem;
        left: 31rem;
        background: url(../assets/home/shape2.png) no-repeat center/100% 100%;
        width: 10.5rem;
        height: 7.8704vh;
        p {
          font-weight: bold;
          opacity: 0.5;
          font-size: 1rem;
          text-align: center;
          padding-right: 1rem;
          line-height: 7.4259vh;
          box-shadow: 0 0.125rem 0.0625rem 0 #00000052;
          transform: rotate(5deg);
        }
      }
      .title3 {
        position: absolute;

        top: -1.1rem;
        right: 31rem;
        background: url(../assets/home/active-shape.png) no-repeat center/100%
          100%;
        width: 10.5rem;
        height: 7.8704vh;
        p {
          font-weight: bold;
          font-size: 1rem;
          text-align: center;
          line-height: 7.3815vh;
          color: #ffffff;
          box-shadow: 0 0.125rem 0.0625rem 0 #00000052;
          transform: rotate(-7deg);
        }
      }
      .title4 {
        position: absolute;
        top: -1.5rem;
        right: 23.9rem;

        background: url(../assets/home/shape4.png) no-repeat center/100% 100%;
        width: 9.9375rem;
        height: 7.5389vh;
        p {
          font-weight: bold;
          opacity: 0.5;
          font-size: 1rem;
          text-align: center;
          line-height: 6.9667vh;
          box-shadow: 0 0.125rem 0.0625rem 0 #00000052;
          transform: rotate(-5deg);
        }
      }
      .times {
        position: absolute;
        right: 0;
        top: 0.43rem;
        width: 18rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p {
          font-size: 1rem;
          text-align: left;
          color: #bfdcf4;
        }
        .time-detailed {
          font-weight: bold;
          font-size: 1.25rem;
          text-align: left;
          color: #ffffff;
          letter-spacing: 0.125rem;
        }
      }
    }
  }
  .main {
    display: flex;
    margin: 0 2.5625rem;
    justify-content: space-between;
    position: relative;
    .content-left {
      display: flex;
      flex-direction: column;
      width: 23.875rem;
      align-items: center;
      // height: 88vh;
      .title {
        width: 22.875rem;
        height: 4.6296vh;
        background: url(../assets/home2/titleBg1.png) no-repeat center/100% 100%;
      }
      .old-count {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 21.1875rem;
        height: 6.0185vh;
        background: url(../assets/home2/old.png) no-repeat center/100% 100%;
        .old-info {
          width: 10.125rem;
          text-align: right;
        }
        p {
          font-weight: bold;
          background-image: -webkit-linear-gradient(#fff, #4faeff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .count {
          font-size: 1.25rem;
        }
      }
      .title2 {
        display: flex;

        justify-content: space-between;
        align-items: center;
        width: 21.5625rem;
        height: 2.8704vh;
        background: url(../assets/home2/titleBg2.png) no-repeat center/100% 100%;
        .index {
          font-weight: bold;
          font-size: 0.875rem;
          text-align: left;
          width: 8.5rem;
          line-height: 2.8704vh;
          padding-left: 50px;
          background-image: -webkit-linear-gradient(#fff, #4faeff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .index-info {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-right: 1.25rem;
          p {
            font-size: 0.875rem;
            background: url(../assets/home2/bg.png) no-repeat center/100% 100%;
            background-image: -webkit-linear-gradient(#bdadad, #848b92);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            border: 1px solid #4faeff;
            padding: 1px 5px;
            margin-left: 10px;
            cursor: pointer;
            .active {
              background-image: -webkit-linear-gradient(#ffffff, #1d90f5);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
      }
      .customChart {
        margin: 4px 0;
        width: 21.375rem;
        height: 10.4259vh;
      }
      .info {
        display: flex;
        margin: 10px 0px;
        .info-item {
          display: flex;
          align-items: center;
          text-align: left;
          width: 160px;
          margin-right: 6px;
          height: 4.6296vh;
          background: url(../assets/home2/bg1.png) no-repeat center/100% 100%;
          .icon {
            width: 50px;
            height: 50px;
            background: url(../assets/home2/icon.png) no-repeat center/100% 100%;
          }
          .icon1 {
            width: 50px;
            height: 50px;
            background: url(../assets/home2/icon1.png) no-repeat center/100%
              100%;
          }
          .text {
            font-size: 14px;
            text-align: left;
            color: #98c7f3;
            letter-spacing: 3px;
          }
          .text2 {
            font-size: 18px;
            text-align: left;
            font-weight: bold;
            letter-spacing: 3px;
            background-image: -webkit-linear-gradient(#fff, #4faeff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
        }
      }
      .chart-t {
        margin-top: 6px;
        position: relative;
        z-index: 20;
        .bottomBg {
          width: 145px;
          height: 7vh;
          background: url(../assets/home2/bottom.png) no-repeat center/100% 100%;
          position: absolute;
          top: 58px;
          left: 5px;
          z-index: -1;
        }
        .circle {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          width: 70px;
          height: 70px;
          top: 0px;
          left: 40px;
          border-radius: 40px;
          box-shadow: inset 0 0 10px 1px rgba(255, 255, 255, 0.5);
          .text1 {
            font-weight: 700;
            font-size: 12px;
            white-space: nowrap;
          }
          .text2 {
            font-weight: 700;
            font-size: 20px;
            text-align: center;
            letter-spacing: 4px;
          }
        }
      }
      .view-info {
        display: flex;
        width: 88%;
        margin: 0 30px 10px 30px;
        justify-content: space-between;
        .view-info-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
          text-align: center;
          border: 1.5px solid #284772;
          width: 105px;
          height: 4.4444vh;
          background-image: -webkit-linear-gradient(#fff, #4faeff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          .text {
            font-size: 14px;
            letter-spacing: 3px;
          }
          .text2 {
            font-size: 18px;
            font-weight: bold;
          }
        }
      }
      .health {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 30px;
        width: 88%;
        .health-item {
          background-image: -webkit-linear-gradient(#fff, #4faeff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          .title {
            margin-bottom: 6px;
            width: 160px;
            height: 3.0556vh;
            background: url(../assets/home2/bg2.png) no-repeat center/100% 100%;
            font-weight: bold;
            font-size: 0.875rem;
            text-align: left;
            width: 7rem;
            line-height: 2.8704vh;
            padding-left: 3.125rem;
          }
          .customChart2 {
            width: 160px;
            height: 9.1111vh;
          }
          .info {
            display: flex;
            justify-content: center;
            justify-content: space-between;
            margin: 0.8vh;
            .icon {
              width: 20px;
              height: 20px;
              background: url(../assets/home2/call.png) no-repeat center/100%
                100%;
            }
            .icon1 {
              width: 20px;
              height: 20px;
              background: url(../assets/home2/email.png) no-repeat center/100%
                100%;
            }
            .icon2 {
              width: 20px;
              height: 20px;
              background: url(../assets/home2/tip.png) no-repeat center/100%
                100%;
            }
            .num {
              font-size: 18px;
              font-weight: bold;
            }
          }
        }
      }
    }
    .content-center {
      align-self: flex-end;
      .title {
        width: 1031px;
        height: 4.0741vh;
        background: url(../assets/home2/titleBg3.png) no-repeat center/100% 100%;
        margin-bottom: 0.5556vh;
      }
      .center-item {
        display: flex;
        justify-content: space-between;
        .title-item {
          width: 323px;
          height: 3.0556vh;
          background: url(../assets/home2/bg3.png) no-repeat center/100% 100%;

          .text {
            width: 144px;
            line-height: 3.0556vh;
            text-align: right;
          }
          .text2 {
            width: 144px;
            line-height: 3.0556vh;
            padding-left: 48px;
          }
        }
        .chart-info {
          position: relative;
          .box {
            position: absolute;
            z-index: 2;
            right: 0;
            top: 0.9259vh;
            .type {
              display: flex;
              align-items: center;
              margin-bottom: 4px;
              width: 176px;
              padding-right: 10px;
              height: 4.9074vh;
              background: url(../assets/home2/bg4.png) no-repeat center/100%
                100%;
              p {
                width: 156px;
                text-align: right;
                background-image: -webkit-linear-gradient(#fff, #4faeff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
              .text {
                font-size: 20px;
                font-weight: bold;
              }
            }
          }
          .chart {
            width: 323px;
            height: 14.1111vh;
          }
        }
        .content-info {
          display: flex;
          align-items: center;
          .temp-item {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            width: 145px;
            height: 5.2778vh;
            background: url(../assets/home2/icon2.png) no-repeat center/100%
              100%;
          }
          .temp-item2 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            width: 145px;
            height: 5.2778vh;
            background: url(../assets/home2/icon3.png) no-repeat center/100%
              100%;
          }
          .temp-item3 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            width: 145px;
            height: 5.2778vh;
            background: url(../assets/home2/icon4.png) no-repeat center/100%
              100%;
          }
          p {
            font-size: 14px;
            width: 90px;
            font-weight: bold;
            background-image: -webkit-linear-gradient(#fff, #4faeff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
    }
    .content-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        width: 366px;
        height: 3.9815vh;
        background: url(../assets/home2/titleBg4.png) no-repeat center/100% 100%;
      }
      .title2 {
        width: 339px;
        height: 5vh;
        background: url(../assets/home2/titleBg5.png) no-repeat center/100% 100%;
        display: flex;
        align-items: center;
        text-align: center;
        justify-content: flex-end;
        .text {
          margin-right: 75px;
          font-weight: bold;
          background-image: -webkit-linear-gradient(#fff, #4faeff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .text2 {
          font-size: 20px;
          font-weight: bold;
          background-image: -webkit-linear-gradient(#fff, #4faeff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .title-bg {
        display: flex;

        justify-content: space-between;
        align-items: center;
        width: 21.5625rem;
        margin-bottom: 0.4vh;
        height: 2.8704vh;
        background: url(../assets/home2/titleBg2.png) no-repeat center/100% 100%;
        .index {
          font-weight: bold;
          font-size: 0.875rem;
          text-align: left;
          width: 8.5rem;
          line-height: 2.8704vh;
          padding-left: 50px;
          background-image: -webkit-linear-gradient(#fff, #4faeff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .bg {
        width: 325px;
        height: 2.963vh;
        background: url(../assets/home2/bg5.png) no-repeat center/100% 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        font-weight: bold;
        p {
          background-image: -webkit-linear-gradient(#fff, #4faeff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .chart2 {
        width: 21.375rem;
        height: 10.4259vh;
      }
      .chart {
        margin-top: 6px;
        position: relative;
        z-index: 20;
        .bottomBg {
          width: 145px;
          height: 7vh;
          background: url(../assets/home2/bottom.png) no-repeat center/100% 100%;
          position: absolute;
          top: 40px;
          left: 5px;
          z-index: -1;
        }
        .circle {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          position: absolute;
          width: 70px;
          height: 70px;
          top: 0px;
          left: 40px;
          border-radius: 40px;
          box-shadow: inset 0 0 10px 1px rgba(255, 255, 255, 0.5);
          .text1 {
            font-weight: 700;
            font-size: 12px;
            white-space: nowrap;
          }
          .text2 {
            font-weight: 700;
            font-size: 18px;
            text-align: center;
          }
        }
      }
      .wisdom {
        display: flex;
        justify-content: space-between;
        width: 95%;
        .video-box {
          .video {
            height: 6.3889vh;
            width: 110px;
            background: url("../assets/home2/video.png") no-repeat center/100%
              100%;
          }
          .text {
            text-align: center;
            font-size: 12px;
            color: #fff;
            margin-top: 0.3407vh;
          }
        }
      }
      .title-p {
        width: 366px;
        height: 3.9815vh;
        background: url(../assets/home2/titleBg6.png) no-repeat center/100% 100%;
        margin-bottom: 0.259vh;
      }
      .chart3 {
        width: 21.375rem;
        height: 10.4259vh;
      }
    }
    .position {
      position: absolute;
      width: 130px;
      height: 11.8519vh;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: url(../assets/home2/position.png) no-repeat center/100% 100%;
    }
  }
}
</style>
