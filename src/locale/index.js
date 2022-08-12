import defaultLocal from "./cn";

export const vueLocal = null;

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
