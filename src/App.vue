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
</style>
