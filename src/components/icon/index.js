import icon from "./icon.vue";

icon.install = function (Vue) {
  Vue.component("MyIcon", icon);
};

export default icon;
