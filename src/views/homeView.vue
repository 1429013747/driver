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
          <p>{{ today.day }}</p>
          <p>{{ today.week }}</p>
          <p class="time-detailed">{{ today.time }}</p>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="content-left">
        <div class="title"></div>
        <WisdomPass></WisdomPass>
        <div class="title2"></div>
        <RidentActivity></RidentActivity>
        <div class="title3"></div>
        <PeopleDraw></PeopleDraw>
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
          <div class="flow-num">
            <div>
              <div class="flow-item">
                <p class="icon"></p>
                <div>
                  <p>楼道屏总数</p>
                  <p class="num">35</p>
                </div>
              </div>
              <div class="flow-item temp">
                <p class="icon2"></p>
                <div>
                  <p>楼道屏在线数</p>
                  <p class="num">33</p>
                </div>
              </div>
              <div class="flow-item temp2">
                <p class="icon3"></p>
                <div>
                  <p>楼道屏离线数</p>
                  <p class="num">2</p>
                </div>
              </div>
            </div>
            <div>
              <div class="flow-info">
                <p class="sign"></p>
                <p class="sign-title">信息公开</p>
              </div>
              <div class="flow-info2">
                <div class="flow-info-item">
                  <p class="flow-title">
                    <span class="info-icon"></span>
                    <span class="info-title">政策实事</span>
                  </p>
                  <p class="flow-content">
                    修订后的《国务院关于经营者集中申报标准的规定》公布
                  </p>
                </div>
              </div>
              <div class="flow-info2">
                <div class="flow-info-item">
                  <p class="flow-title">
                    <span class="info-icon"></span>
                    <span class="info-title">社区宣传</span>
                  </p>
                  <p class="flow-content">社区防灾减灾日宣传活动方案</p>
                </div>
              </div>
              <div class="flow-info2">
                <div class="flow-info-item">
                  <p class="flow-title">
                    <span class="info-icon"></span>
                    <span class="info-title">社区公告</span>
                  </p>
                  <p class="flow-content">社区专职人员拟录用人员名单</p>
                </div>
              </div>
              <div class="flow-info2">
                <div class="flow-info-item">
                  <p class="flow-title">
                    <span class="info-icon"></span>
                    <span class="info-title">活动公告</span>
                  </p>
                  <p class="flow-content">
                    活动公告活动公告活动公告活动公告活动公告活动公告活动公告活动公告活动公告
                  </p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div class="content-right">
        <div class="title"></div>
        <GarbageManagement></GarbageManagement>
        <div class="title2"></div>
        <CommunityMeet></CommunityMeet>
      </div>
    </div>
  </div>
</template>

<script>
import WisdomPass from "@/components/WisdomPass.vue";
import RidentActivity from "@/components/RidentActivity.vue";
import PeopleDraw from "@/components/PeopleDraw.vue";
import GarbageManagement from "@/components/GarbageManagement.vue";
import CommunityMeet from "@/components/CommunityMeets.vue";
import { formatDate } from "@/utils/common.js";
export default {
  components: {
    WisdomPass,
    RidentActivity,
    PeopleDraw,
    GarbageManagement,
    CommunityMeet,
  },
  data() {
    return {
      today: {
        day: "",
        week: "",
        time: "",
      },
    };
  },
  mounted() {
    const temp = formatDate(new Date()); // 获取时间
    this.today.day = temp.month;
    this.today.time = temp.dateTime;
    this.today.week = temp.date;

    this.timer = setInterval(() => {
      const temp = formatDate(new Date()); // 获取时间
      this.today.day = temp.month;
      this.today.time = temp.dateTime;
      this.today.week = temp.date;
    }, 1000);
  },
  methods: {},
  beforeDestroy() {
    clearInterval(this.timer);
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
        height: 5.0625rem;
        p {
          font-weight: bold;
          opacity: 0.5;
          font-size: 1rem;
          text-align: center;
          line-height: 4.7025rem;
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
        height: 5.3125rem;
        p {
          font-weight: bold;
          opacity: 0.5;
          font-size: 1rem;
          text-align: center;
          padding-right: 1rem;
          line-height: 5.0125rem;
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
    margin: 0 1.5625rem;
    justify-content: space-between;
    position: relative;
    .content-left {
      display: flex;
      flex-direction: column;
      width: 23.575rem;
      overflow: hidden;
      justify-content: space-between;
      height: 88vh;
      .title {
        width: 22.875rem;
        height: 4.6296vh;
        background: url(../assets/home/titleBg.png) no-repeat center/100% 100%;
      }
      .title2 {
        width: 22.875rem;
        margin-top: 0.3rem;
        height: 4.6296vh;
        background: url(../assets/home/titleBg2.png) no-repeat center/100% 100%;
      }
      .title3 {
        width: 22.875rem;
        margin-top: 0.3rem;
        height: 4.6296vh;
        background: url(../assets/home/titleBg3.png) no-repeat center/100% 100%;
      }
    }
    .content-center {
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
        width: 64.8125rem;
        height: 4.5296vh;
        background: url(../assets/home/titleBg4.png) no-repeat center/100% 100%;
      }
      .flow-num {
        display: flex;

        .flow-item {
          display: flex;
          width: 11.4375rem;
          padding: 0.25rem;
          margin-bottom: 0.4rem;
          background: url(../assets/home/bg5.png) no-repeat center/100% 100%;
          .icon {
            width: 2.5rem;
            height: 2.5rem;
            background: url(../assets/home/icon1.png) no-repeat center/100% 100%;
          }
          .icon2 {
            width: 2.5rem;
            height: 2.5rem;
            background: url(../assets/home/icon2.png) no-repeat center/100% 100%;
          }
          .icon3 {
            width: 2.5rem;
            height: 2.5rem;
            background: url(../assets/home/icon3.png) no-repeat center/100% 100%;
          }
          p {
            font-size: 0.875rem;
            color: #ffffff;
            letter-spacing: 0.1875rem;
          }
          .num {
            font-weight: bold;
            font-size: 1.0625rem;
            color: #ffffff;
          }
        }
        .temp {
          background: url(../assets/home/bg6.png) no-repeat center/100% 100%;
        }
        .temp2 {
          background: url(../assets/home/bg7.png) no-repeat center/100% 100%;
        }
        .flow-info {
          display: flex;
          margin-left: 1.23rem;
          align-items: center;
          .sign {
            width: 1.5rem;
            height: 1.5rem;
            background: url(../assets/home/sign.png) no-repeat center/100% 100%;
          }
          .sign-title {
            font-size: 0.875rem;
            color: #ffffff;
            letter-spacing: 0.1875rem;
            font-weight: bold;
            margin-left: 0.5rem;
          }
        }
        .flow-info2 {
          margin-left: 1.23rem;
          background: #416ba14b;
          margin-top: 0.225rem;
          width: 45.9375rem;
          padding: 0.425rem 2rem;
          .flow-info-item {
            display: flex;
            align-items: center;
            .flow-title {
              display: flex;
              align-items: center;
              margin-right: 3.4rem;
              font-size: 0.775rem;
              .info-icon {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 1rem;
                background: #2c9dfd;
                margin-right: 0.35rem;
              }
              .info-title {
                font-weight: bold;
                color: #ffffff;
                letter-spacing: 0.1rem;
              }
            }
            .flow-content {
              font-size: 0.75rem;
              text-align: left;
              color: #ffffff;
              letter-spacing: 0.1875rem;
              width: 35.9375rem;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
    .content-right {
      width: 26rem;
      .title {
        width: 24.875rem;
        height: 3.6296vh;
        background: url(../assets/home/titleBg5.png) no-repeat center/100% 100%;
      }
      .title2 {
        width: 24.875rem;
        height: 3.6296vh;
        background: url(../assets/home/titleBg8.png) no-repeat center/100% 100%;
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
