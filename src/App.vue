<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  mounted() {
    this.resize();
  },
  methods: {
    resize() {
      //  设置到HTML上
      document.documentElement.style.fontSize = this.fontSize(16) + "px";
      window.addEventListener("resize", this.resize);
    },
    fontSize(res) {
      const clientWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      if (!clientWidth) return;
      // 此处的3840 为设计稿的宽度，记得修改！
      const fontSize = clientWidth / 1920;
      return res * fontSize;
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  width: 6px;
  height: 7px;
  background-color: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(23, 144, 255, 0.8);
}
</style>
