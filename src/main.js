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

import VueSimpleMarkdown from "vue-simple-markdown";
import "vue-simple-markdown/dist/vue-simple-markdown.css";

Vue.use(VueSimpleMarkdown);
Vue.use(require("vue-moment"));

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
