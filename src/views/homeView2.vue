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
        <div class="title1"><p>星火·智治</p></div>
        <div class="title2"><p>星火·共赢</p></div>
        <div class="title3"><p>星火·安居</p></div>
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
            <p @click="toggle()"><span class="active">老人</span></p>
            <p @click="toggle()"><span>居民</span></p>
          </div>
        </div>
        <div class="info" v-if="isShow">
          <div class="info-item">
            <div class="icon"></div>
            <div>
              <p class="text">平均血糖值</p>
              <p class="text2">6.1</p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon1"></div>
            <div>
              <p class="text">平均血压值</p>
              <p class="text2">120/88</p>
            </div>
          </div>
        </div>
        <div class="info" v-else>
          <div class="info-item">
            <div class="icon"></div>
            <div>
              <p class="text">平均血糖值</p>
              <p class="text2">5.1</p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon1"></div>
            <div>
              <p class="text">平均血压值</p>
              <p class="text2">115/75</p>
            </div>
          </div>
        </div>
        <div class="title2">
          <p class="index">居民用电</p>
          <div class="index-info">
            <p @click="toggleView('month')"><span class="active">月度</span></p>
            <p @click="toggleView('day')"><span>日度</span></p>
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
              <span class="text2">167</span>
              <span>次</span>
            </p>
          </div>
        </div>
        <div class="view-info">
          <div class="view-info-item">
            <p class="text">绑定总数</p>
            <p>
              <span class="text2">145</span>
              <span>个</span>
            </p>
          </div>
          <div class="view-info-item">
            <p class="text">使用总数</p>
            <p>
              <span class="text2">87</span>
              <span>个</span>
            </p>
          </div>
          <div class="view-info-item">
            <p class="text">设备正常总数</p>
            <p>
              <span class="text2">145</span>
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
            <div class="chart11" ref="chart1"></div>
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
        <div class="iframe">
          <iframe
            src="https://wmwlsq.gongshu.gov.cn/oa/3D/"
            frameborder="0"
          ></iframe>
        </div>
        <div>
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
            <div class="center-box">
              <div>
                <div class="title-item">
                  <p class="text2">会员年龄段分布</p>
                </div>
                <div class="content-item">
                  <span>20岁以下：</span>
                  <span>30%</span>
                </div>
                <div class="content-item">
                  <span>21-30岁：</span>
                  <span>33%</span>
                </div>
                <div class="content-item">
                  <span>31-50岁：</span>
                  <span>20%</span>
                </div>
                <div class="content-item">
                  <span>50岁以上：</span>
                  <span>17%</span>
                </div>
              </div>
              <div>
                <div class="title-item">
                  <p class="text2">
                    月度签到数 <span class="text-num">6721次</span>
                  </p>
                </div>

                <div class="content-item">
                  <span>50岁以下：</span>
                  <span>96%</span>
                </div>
                <div class="content-item">
                  <span>50岁以上：</span>
                  <span>4%</span>
                </div>
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
      </div>
      <div class="content-right">
        <div class="title"></div>
        <div class="title2">
          <p class="text">幼儿人脸录入总数</p>
          <p class="text2">286<span style="font-size: 15px">人</span></p>
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
          <p class="text2">108<span style="font-size: 15px">个</span></p>
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
            <video
              class="video"
              ref="video"
              controls
              controlslist="nodownload noremoteplayback noplaybackrate"
              disablePictureInPicture="true"
            ></video>
          </div>
        </div>

        <div class="title-p"></div>
        <div class="chart">
          <Chart :options="options5"></Chart>
          <div class="bottomBg"></div>
          <div class="circle">
            <p class="text1">用户总兑换次数</p>
            <p class="text1">
              <span class="text2">1287次</span>
            </p>
          </div>
        </div>
        <div class="title-bg">
          <p class="index">家长查询信息数据</p>
        </div>

        <div class="chart3" ref="chart3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Chart from "@/components/common/Chart.vue";

import * as echarts from "echarts";
import Hls from "hls.js";
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
      options5: {
        data: [
          {
            name: "肥皂", //名称
            value: 47, //值
          },
          {
            name: "长柄锅刷",
            value: 15,
          },
          {
            name: "洁厕液",
            value: 15,
          },
          {
            name: "口罩",
            value: 23,
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
      isShow: true,
      isShow2: true,
      dataList: {
        data: [150, 230, 224, 218, 135, 147, 260],
        name: "月度",
      },
    };
  },
  mounted() {
    this.init();

    this.init2();

    this.init3();

    this.init4();
    this.init5();
    const hls = new Hls();
    hls.loadSource(
      "https://wangmawlsq.cn:1443/mls/openUrl/dsKtI6A/live.m3u8?params=eyJwcm90b2NvbCI6Imhsc3MiLCJpbmRleENvZGUiOiI4M2FkNjU0YWQ1OTA0ZDQ3OTFkZTNlMWYxMmM4MTgxYSIsIm5ldFpvbmVDb2RlIjoiMSJ9"
    );
    hls.attachMedia(this.$refs.video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      this.$refs.videoRef.play();
    });
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    toggleView(item) {
      if (item === "month") {
        this.dataList = {
          data: [150, 230, 224, 218, 135, 147, 260],
          name: "月度",
        };
      } else {
        this.dataList = {
          data: [50, 90, 74, 48, 55, 57, 130],
          name: "日度",
        };
      }
      this.init();
    },
    init() {
      const chart = echarts.init(this.$refs.customChart);
      const options = {
        grid: {
          top: "6%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        color: ["#3aa0ff"],
        tooltip: {
          show: true,
          formatter: "<div>{a}</div><div>{b}： {c} 度</div>",
        },
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
            name: this.dataList.name,
            data: this.dataList.data,
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
      chart.setOption(options);
      window.addEventListener("resize", () => {
        chart.resize();
      });
    },
    init2() {
      const chart = echarts.init(this.$refs.chart1);
      const options = {
        grid: {
          top: "6%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          formatter: "<p>{a}</p><p>周{b}： {c} 步</p>",
          position: ["30%", "-50%"],
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
            name: "步数",
            data: [650, 630, 524, 518, 535, 647, 660],
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

      chart.setOption(options, true);
      window.addEventListener("resize", () => {
        chart.resize();
      });
    },
    init3() {
      const chart = echarts.init(this.$refs.chart2);

      const options = {
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
      chart.setOption(options);
      window.addEventListener("resize", () => {
        chart.resize();
      });
    },
    init4() {
      const chart = echarts.init(this.$refs.chart2);
      const options = {
        grid: {
          top: "6%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        color: ["#3aa0ff"],
        tooltip: {
          trigger: "axis",
          formatter: "<p>周{b}： {c} 次</p>",
        },
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
      chart.setOption(options);
      window.addEventListener("resize", () => {
        chart.resize();
      });
    },
    init5() {
      const chart = echarts.init(this.$refs.chart3);

      const options = {
        grid: {
          top: "6%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        color: ["#3aa0ff"],
        tooltip: {
          trigger: "axis",
          formatter: "<p>周{b}： {c} 条</p>",
        },
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
      chart.setOption(options);
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
      overflow: hidden;
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
          top: 3.225rem;
          left: 0.2125rem;
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
      .chart11 {
        width: 160px;
        height: 9.1111vh;
      }
      .health {
        display: flex;
        justify-content: space-between;
        margin: 0 30px;
        width: 88%;
        .health-item {
          // background-image: -webkit-linear-gradient(#fff, #4faeff);
          // -webkit-background-clip: text;
          // -webkit-text-fill-color: transparent;
          .title {
            margin-bottom: 6px;
            height: 3.0556vh;
            background: url(../assets/home2/bg2.png) no-repeat center/100% 100%;
            font-weight: bold;
            font-size: 0.875rem;
            text-align: left;
            width: 7rem;
            line-height: 2.8704vh;
            padding-left: 3.125rem;
          }

          .info {
            display: flex;
            justify-content: center;
            justify-content: space-between;
            margin: 0.4vh;
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
      overflow: hidden;
      .iframe {
        width: 64.8125rem;
        height: 67vh;
        margin-bottom: 0.9259vh;
        iframe {
          width: 100%;
          height: 100%;
        }
      }
      .title {
        width: 1031px;
        height: 4.0741vh;
        background: url(../assets/home2/titleBg3.png) no-repeat center/100% 100%;
        margin-bottom: 0.5556vh;
      }
      .center-item {
        display: flex;
        justify-content: space-between;

        .center-box {
          display: flex;
          justify-content: space-between;
          .title-item {
            width: 180px;
            height: 3.0556vh;
            margin-right: 6px;
            background: url(../assets/home2/bg3.png) no-repeat left/cover;

            .text2 {
              line-height: 3.0556vh;
              padding-left: 36px;
              .text-num {
                padding-left: 4px;
                line-height: 3.1556vh;
                background-image: -webkit-linear-gradient(#fff, #4faeff);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }
            }
          }
          .content-item {
            background-image: -webkit-linear-gradient(#fff, #4faeff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            padding: 4px 25px;
            margin: 0 15px;
            font-weight: bold;
            font-size: 14px;
            border-bottom: 1px solid #284772;
            height: 2.037vh;
          }
          .content-item:nth-of-type(2)::before {
            // 添加一个方块
            display: inline-block;
            content: "";
            width: 10px;
            margin-right: 4px;
            height: 10px;
            background: rgb(83, 226, 92);
          }
          .content-item:nth-of-type(3)::before {
            // 添加一个方块
            display: inline-block;
            content: "";
            width: 10px;
            margin-right: 4px;
            height: 10px;
            background: rgb(26, 190, 205);
          }
          .content-item:nth-of-type(4)::before {
            // 添加一个方块
            display: inline-block;
            content: "";
            width: 10px;
            margin-right: 4px;
            height: 10px;
            background: rgb(243, 186, 0);
          }
          .content-item:nth-of-type(5)::before {
            // 添加一个方块
            display: inline-block;
            content: "";
            width: 10px;
            margin-right: 4px;
            height: 10px;
            background: rgb(182, 210, 25);
          }
        }
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
      overflow: hidden;
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
        justify-content: space-between;
        .text {
          margin-left: 70px;
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
        justify-content: center;
        width: 95%;
        .video-box {
          .video {
            mix-blend-mode: screen;
            display: block;
            height: 7vh;
            width: 11.875rem;
            // background: url("../assets/home2/video.png") no-repeat center/100%
            //   100%;
            //全屏按钮
            // &::-webkit-media-controls-fullscreen-button {
            //   display: none;
            // }
            //播放按钮
            &::-webkit-media-controls-play-button {
              display: none;
            }
            //进度条
            &::-webkit-media-controls-timeline {
              display: none;
            }
            //观看的当前时间
            &::-webkit-media-controls-current-time-display {
              display: none;
            }
            //剩余时间
            &::-webkit-media-controls-time-remaining-display {
              display: none;
            }
            //音量按钮
            &::-webkit-media-controls-mute-button {
              display: none;
            }
            &::-webkit-media-controls-toggle-closed-captions-button {
              display: none;
            }
            //音量的控制条
            &::-webkit-media-controls-volume-slider {
              display: none;
            }
            //所有控件
            // &::-webkit-media-controls-enclosure {
            //   display: none;
            // }
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
