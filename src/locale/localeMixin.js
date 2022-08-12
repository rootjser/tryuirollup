import defaultLocal from "./cn";

export default {
  computed: {
    locale() {
      return vueLocal?.$data?.locale || defaultLocal;
    },
  },
};
