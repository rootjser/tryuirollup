import defaultLocal from "./language/cn";

export let vueLocal = null;

const install = (Vue) => {
  if (vueLocal) return;
  vueLocal = new Vue({
    data() {
      return {
        locale: defaultLocal,
      };
    },
  });
};

const use = (l) => {
  vueLocal.$data.locale = l || defaultLocal;
};

export default {
  install,
  use,
};
