<template>
  <div class="wisdom-container">
    <!-- <div class="wisdom">
      <div class="video-box">
        <div class="video"></div>
        <div class="text">南区车闸入口</div>
      </div>
      <div class="video-box">
        <div class="video"></div>
        <div class="text">北区车闸入口</div>
      </div>
    </div> -->
    <div class="info">
      <div class="info-item">
        <div class="info-item-icon1"></div>
        <div class="info-item-content">
          <p class="text">今日进入车辆</p>
          <p>
            <span>87</span>
            <span style="font-size: 0.675rem">辆</span>
          </p>
        </div>
      </div>
      <div class="info-item">
        <div class="info-item-icon2"></div>
        <div class="info-item-content">
          <p class="text">今日出车辆</p>
          <p>
            <span>95</span>
            <span style="font-size: 0.675rem">辆</span>
          </p>
        </div>
      </div>
      <div class="info-item">
        <div class="info-item-icon3"></div>
        <div class="info-item-content">
          <p class="text">党群服务中心今日进入</p>
          <p>
            <span>53</span>
            <span style="font-size: 0.675rem">人</span>
          </p>
        </div>
      </div>
      <div class="info-item">
        <div class="info-item-icon4"></div>
        <div class="info-item-content">
          <p class="text">党群服务中心今日出</p>
          <p>
            <span>43</span>
            <span style="font-size: 0.675rem">人</span>
          </p>
        </div>
      </div>
      <div class="info-item">
        <div class="info-item-icon3"></div>
        <div class="info-item-content">
          <p class="text">社区服务区中心今日进入</p>
          <p>
            <span>141</span>
            <span style="font-size: 0.675rem">人</span>
          </p>
        </div>
      </div>
      <div class="info-item">
        <div class="info-item-icon4"></div>
        <div class="info-item-content">
          <p class="text">社区服务区中心今日出</p>
          <p>
            <span>129</span>
            <span style="font-size: 0.675rem">人</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.wisdom-container {
  margin: 0 0.6rem;
  .wisdom {
    display: flex;
    justify-content: space-between;
    .video-box {
      flex: 0.48;
      .video {
        height: 9.2593vh;
        background: url("../assets/home/temp1.png") no-repeat center/100% 100%;
      }
      .text {
        text-align: center;
        font-size: 1rem;
        color: #fff;
        margin-top: 0.5rem;
      }
    }
  }
  .info {
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 0.3125rem;
    .info-item {
      display: flex;
      align-items: center;
      background: url("../assets/home/bg2.png") no-repeat center/100% 100%;
      width: 10.95rem;
      height: 6.0778vh;

      .info-item-icon1 {
        background: url("../assets/home/car-inter.png") no-repeat;
        width: 2.875rem;
        height: 3.7963vh;
      }
      .info-item-icon2 {
        background: url("../assets/home/car-time.png") no-repeat;
        width: 2.675rem;
        height: 3.7963vh;
      }
      .info-item-icon3 {
        background: url("../assets/home/car-p.png") no-repeat;
        width: 2.675rem;
        height: 3.7963vh;
      }
      .info-item-icon3 {
        background: url("../assets/home/car-p.png") no-repeat;
        width: 2.675rem;
        height: 3.7963vh;
      }
      .info-item-icon4 {
        background: url("../assets/home/people.png") no-repeat;
        width: 2.675rem;
        height: 5vh;
      }
      .info-item-content {
        .text {
          font-size: 0.775rem;
          letter-spacing: 0.1875rem;
          font-weight: bold;
          color: #98c7f3;
        }
        span {
          display: inline-block;
          font-weight: 400;
          font-size: 1.25rem;
          font-weight: bold;
          text-align: left;
          background-image: -webkit-linear-gradient(#fff, #4faeff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 0.25rem;
        }
      }
    }
  }
}
</style>
