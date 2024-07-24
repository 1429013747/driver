<template>
  <div id="app" ref="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {},
  mounted() {},
  methods: {},
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
