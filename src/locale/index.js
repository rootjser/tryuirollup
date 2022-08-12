import defaultLocal from "./cn";

export const vueLocal = null;

export default install = (Vue) => {
  if (vueLocal) return;
  vueLocal = new Vue({
    data() {
      return {
        locale: defaultLocal,
      };
    },
  });
};

export const use = (l) => {
  vueLocal.$data.locale = l || defaultLocal;
};
