import Vue from "vue";
import App from "./App.vue";
import { button, select } from "tryuirollup";

Vue.config.productionTip = false;
Vue.use(button);
Vue.use(select);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
