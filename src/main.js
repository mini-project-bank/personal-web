import Vue from "vue";
import App from "./App.vue";
// tailwind
import "tailwindcss/tailwind.css";
// Router
import router from "./router";
// Hilight js
import VueHighlightJS from "vue-highlightjs";

// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
