<template>
  <div class="people-container">
    <div class="content">
      <p
        :class="{ active: text === '房屋类型' }"
        @click="changeTab('房屋类型')"
      >
        房屋类型
      </p>
      <p
        :class="{ active: text === '人口分布' }"
        @click="changeTab('人口分布')"
      >
        人口分布
      </p>
      <p
        :class="{ active: text === '户籍分布' }"
        @click="changeTab('户籍分布')"
      >
        户籍分布
      </p>
      <p
        :class="{ active: text === '年龄分布' }"
        @click="changeTab('年龄分布')"
      >
        年龄分布
      </p>
    </div>
    <div class="box">
      <div class="people-drawd" ref="chart"></div>
      <!-- <div>
        <div class="people-info">
          <p class="icon"></p>
          <p class="text">商品房</p>
          <p class="text">1631</p>
        </div>
        <div class="people-info">
          <p class="icon2"></p>
          <p class="text">商品房</p>
          <p class="text">1631</p>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
import "echarts-gl";
export default {
  data() {
    return {
      option: {},
      pieData: [
        {
          name: "自住", //名称
          value: 4021, //值
          rate: "67.8%",
          itemStyle: {
            color: "#0161e6", //半透明
          },
        },
        {
          name: "出租",
          value: 1898,
          rate: "32.2%",
          itemStyle: {
            color: "#1fb4c3",
          },
        },
        {
          name: "空置",
          value: 15,
          rate: "0.2%",
          itemStyle: {
            color: "#d8be11",
          },
        },
      ],
      text: "房屋类型",
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    changeTab(val) {
      const typeObj = {
        房屋类型: [
          {
            name: "自住", //名称
            value: 4021, //值
            rate: "67.8%",
            itemStyle: {
              color: "#0161e6", //半透明
            },
          },
          {
            name: "出租",
            value: 1898,
            rate: "32.2%",
            itemStyle: {
              color: "#1fb4c3",
            },
          },
          {
            name: "空置",
            value: 15,
            rate: "0.2%",
            itemStyle: {
              color: "#d8be11",
            },
          },
        ],
        人口分布: [
          {
            name: "常住人口", //名称
            value: 11866, //值
            rate: "97%",
            itemStyle: {
              color: "#0161e6", //半透明
            },
          },
          {
            name: "流动人口",
            value: 367,
            rate: "3%",
            itemStyle: {
              color: "#1fb4c3",
            },
          },
        ],
        户籍分布: [
          {
            name: "户籍人口", //名称
            value: 11866, //值
            rate: "97%",
            itemStyle: {
              color: "#0161e6", //半透明
            },
          },
          {
            name: "外籍人口",
            value: 367,
            rate: "3%",
            itemStyle: {
              color: "#1fb4c3",
            },
          },
        ],

        // 年龄分布: [
        //   {
        //     name: "18岁以下", //名称
        //     value: 421, //值
        //     rate: "32%",
        //     itemStyle: {
        //       color: "#0161e6", //半透明
        //     },
        //   },
        //   {
        //     name: "18-30岁",
        //     value: 1500,
        //     rate: "53%",
        //     itemStyle: {
        //       color: "#1fb4c3",
        //     },
        //   },
        //   {
        //     name: "30岁以上",
        //     value: 200,
        //     rate: "14%",
        //     itemStyle: {
        //       color: "#d8be11",
        //     },
        //   },
        // ],
      };
      this.text = val;
      this.pieData = typeObj[val];
      this.pieData && this.init();
    },
    init() {
      //初始化echarts
      const myChart = echarts.init(this.$refs.chart);
      //设置图表配置项
      this.option = this.getPie3D(this.pieData, 0.8);
      //设置图表配置项
      myChart.setOption(this.option);
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    //获取配置项
    getPie3D(pieData, internalDiameterRatio) {
      const series = [];
      let sumValue = 0;
      let startValue = 0;
      let endValue = 0;
      let legendData = [];
      let legendBfb = [];
      const k = 1 - internalDiameterRatio;
      pieData.sort((a, b) => {
        return b.value - a.value;
      });
      // 为每一个饼图数据，生成一个 series-surface(参数曲面) 配置
      for (let i = 0; i < pieData.length; i++) {
        sumValue += pieData[i].value;
        const seriesItem = {
          //名称
          name:
            typeof pieData[i].name === "undefined"
              ? `series${i}`
              : pieData[i].name,
          type: "surface",
          //是否为参数曲面（是）
          parametric: true,
          //曲面图网格线（否）上面一根一根的
          wireframe: {
            show: false,
          },
          pieData: pieData[i],
          pieStatus: {
            selected: false,
            hovered: false,
            k: k,
          },

          //设置饼图在容器中的位置(目前没发现啥用)
          // center: ["50%", "100%"],
        };

        //曲面的颜色、不透明度等样式。
        if (typeof pieData[i].itemStyle != "undefined") {
          const itemStyle = {};
          typeof pieData[i].itemStyle.color != "undefined"
            ? (itemStyle.color = pieData[i].itemStyle.color)
            : null;
          typeof pieData[i].itemStyle.opacity != "undefined"
            ? (itemStyle.opacity = pieData[i].itemStyle.opacity)
            : null;
          seriesItem.itemStyle = itemStyle;
        }
        series.push(seriesItem);
      }

      // 使用上一次遍历时，计算出的数据和 sumValue，调用 getParametricEquation 函数，
      // 向每个 series-surface 传入不同的参数方程 series-surface.parametricEquation，也就是实现每一个扇形。
      legendData = [];
      legendBfb = [];
      for (let i = 0; i < series.length; i++) {
        endValue = startValue + series[i].pieData.value * 1;
        series[i].pieData.startRatio = startValue / sumValue;
        series[i].pieData.endRatio = endValue / sumValue;
        series[i].parametricEquation = this.getParametricEquation(
          series[i].pieData.startRatio,
          series[i].pieData.endRatio,
          false,
          false,
          k,
          series[i].pieData.value
        );
        startValue = endValue;
        const bfb = this.fomatFloat(series[i].pieData.value / sumValue, 4);
        legendData.push({
          name: series[i].name,
          value: bfb,
        });
        legendBfb.push({
          name: series[i].name,
          value: bfb,
        });
      }
      //(第二个参数可以设置你这个环形的高低程度)
      const boxHeight = this.getHeight3D(series, 24); //通过传参设定3d饼/环的高度
      // 准备待返回的配置项，把准备好的 legendData、series 传入。

      this.option = {
        backgroundColor: "transparent",
        //图例组件
        legend: {
          data: legendData,
          color: [
            "#8FD7FC",
            "#466BE7",
            "#F4BB29",
            "#49C384",
            "#8FD7FC",
            "#466BE7",
            "#F4BB29",
            "#49C384",
          ],
          //图例列表的布局朝向。
          orient: "vertical",
          right: 0,
          bottom: "center",
          //图例文字每项之间的间隔
          itemGap: 5,
          show: true,
          icon: "rect",
          itemHeight: 10,
          itemWidth: 10,
          textStyle: {
            //图例字体大小
            fontSize: ".75rem",
            color: "#B8DDFF",
            lineHeight: 20,
          },

          //格式化图例文本
          formatter: function (name) {
            let target, rate;
            for (let i = 0, l = pieData.length; i < l; i++) {
              if (pieData[i].name == name) {
                target = pieData[i].value;
                rate = pieData[i].rate;
              }
            }
            return `${name}   ${target}   ${rate}`;
          },
        },
        //移动上去提示的文本内容
        tooltip: {
          backgroundColor: "rgba(18, 55, 85, 0.8);",
          borderColor: "transparent",
          formatter: (params) => {
            if (
              params.seriesName !== "mouseoutSeries" &&
              params.seriesName !== "pie2d"
            ) {
              const bfb = (
                (this.option.series[params.seriesIndex].pieData.endRatio -
                  this.option.series[params.seriesIndex].pieData.startRatio) *
                100
              ).toFixed(2);
              const value =
                this.option.series[params.seriesIndex].pieData.value;
              return (
                "<div style='color:rgba(214, 243, 255, 0.9);'>" +
                `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:${params.color};"></span>` +
                `${params.seriesName}<br/>` +
                `<span style='margin-right:20px'>${value}</span>` +
                `<span >${bfb}%</span>` +
                "</div>"
              );
            }
          },
        },
        //这个可以变形
        xAxis3D: {
          min: -1,
          max: 1,
        },
        yAxis3D: {
          min: -1,
          max: 1,
        },
        zAxis3D: {
          min: -1,
          max: 1,
        },
        //此处是修改样式的重点
        grid3D: {
          show: false,
          boxHeight: boxHeight, //圆环的高度
          width: "60%",
          //这是饼图的位置
          left: 0,
          top: 0,
          viewControl: {
            //3d效果可以放大、旋转等，请自己去查看官方配置
            alpha: 20, //角度(这个很重要 调节角度 上下)
            distance: 180, //调整视角到主体的距离，类似调整zoom(这是整体大小)
            rotateSensitivity: 0, //设置为0无法旋转
            zoomSensitivity: 0, //设置为0无法缩放
            panSensitivity: 0, //设置为0无法平移
            // autoRotate: true, //自动旋转
            beta: 20, //角度(这个很重要 调节角度 左右)
          },
        },
        series: series,
      };
      return this.option;
    },
    // 生成扇形的曲面参数方程，用于 series-surface.parametricEquation
    getParametricEquation(startRatio, endRatio, isSelected, isHovered, k, h) {
      // 计算
      const midRatio = (startRatio + endRatio) / 2;
      const startRadian = startRatio * Math.PI * 2;
      const endRadian = endRatio * Math.PI * 2;
      const midRadian = midRatio * Math.PI * 2;
      // 如果只有一个扇形，则不实现选中效果。
      if (startRatio === 0 && endRatio === 1) {
        isSelected = false;
      }
      // 通过扇形内径/外径的值，换算出辅助参数 k（默认值 1/3）
      k = typeof k !== "undefined" ? k : 1 / 3;
      // 计算选中效果分别在 x 轴、y 轴方向上的位移（未选中，则位移均为 0）
      const offsetX = isSelected ? Math.cos(midRadian) * 0.1 : 0;
      const offsetY = isSelected ? Math.sin(midRadian) * 0.1 : 0;
      // 计算高亮效果的放大比例（未高亮，则比例为 1）
      const hoverRate = isHovered ? 1.05 : 1;
      // 返回曲面参数方程
      return {
        u: {
          min: -Math.PI,
          max: Math.PI * 3,
          step: Math.PI / 32,
        },
        v: {
          min: 0,
          max: Math.PI * 2,
          step: Math.PI / 20,
        },
        x: function (u, v) {
          if (u < startRadian) {
            return (
              offsetX +
              Math.cos(startRadian) * (1 + Math.cos(v) * k) * hoverRate
            );
          }
          if (u > endRadian) {
            return (
              offsetX + Math.cos(endRadian) * (1 + Math.cos(v) * k) * hoverRate
            );
          }
          return offsetX + Math.cos(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        y: function (u, v) {
          if (u < startRadian) {
            return (
              offsetY +
              Math.sin(startRadian) * (1 + Math.cos(v) * k) * hoverRate
            );
          }
          if (u > endRadian) {
            return (
              offsetY + Math.sin(endRadian) * (1 + Math.cos(v) * k) * hoverRate
            );
          }
          return offsetY + Math.sin(u) * (1 + Math.cos(v) * k) * hoverRate;
        },
        z: function (u, v) {
          if (u < -Math.PI * 0.5) {
            return Math.sin(u);
          }
          if (u > Math.PI * 2.5) {
            return Math.sin(u) * h * 0.1;
          }
          return Math.sin(v) > 0 ? 1 * h * 0.1 : -1;
        },
      };
    },
    //这是一个自定义计算的方法
    fomatFloat(num, n) {
      let f = parseFloat(num);
      if (isNaN(f)) {
        return false;
      }
      f = Math.round(num * Math.pow(10, n)) / Math.pow(10, n); // n 幂
      let s = f.toString();
      let rs = s.indexOf(".");
      //判定如果是整数，增加小数点再补0
      if (rs < 0) {
        rs = s.length;
        s += ".";
      }
      while (s.length <= rs + n) {
        s += "0";
      }
      return s;
    },
    //获取3d丙图的最高扇区的高度

    getHeight3D(series, height) {
      series.sort((a, b) => {
        return b.pieData.value - a.pieData.value;
      });
      return (height * 20) / series[0].pieData.value;
    },
  },
};
</script>

<style lang="scss" scoped>
.people-container {
  .content {
    display: flex;
    background: url(../assets/home/bg4.png) no-repeat center/100% 100%;
    p {
      margin: 0.425rem 0.25rem;
      padding: 0.1rem 0.5rem;
      font-size: 0.75rem;
      color: #a4bddd;
      border: 0.0938rem solid #044a91;
      cursor: pointer;
      &:first-child {
        margin-left: 2.98rem;
      }
    }
    .active {
      color: #4faeff;
    }
  }
  .people-drawd {
    height: 142px;
    width: 350px;
  }
  .box {
    display: flex;
    align-items: center;
    .people-info {
      display: flex;
      align-items: center;
      background: url(../assets/home/rect.png) no-repeat center/100% 100%;
      margin-bottom: 0.1875rem;
      .icon {
        width: 0.5rem;
        height: 0.5rem;
        background: #4faeff;
      }
      .icon2 {
        width: 0.5rem;
        height: 0.5rem;
        background: #e4e718;
      }
      .text {
        color: #a4bddd;
        font-weight: bold;
        letter-spacing: 0.1875rem;
        margin: 0.25rem 0.5rem;
        // 渐变
        background-image: -webkit-linear-gradient(#fff, #4faeff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: 0.25rem;
      }
    }
  }
}
</style>
