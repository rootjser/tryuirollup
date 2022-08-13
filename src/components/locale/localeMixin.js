import defaultLocal from "./language/cn";
import { vueLocal } from "./index";

export default {
  computed: {
    locale() {
      return vueLocal?.$data?.locale || defaultLocal;
    },
  },
};
