import select from "./select.vue";
import locale from "../locale/index";

select.install = function (Vue) {
  Vue.use(locale);
  Vue.component("MySelect", select);
};

export default select;
