import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import scroll from "vue-seamless-scroll";
Vue.use(scroll);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import "./utils/rem.js"; //在main.js中引入rem.js

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
