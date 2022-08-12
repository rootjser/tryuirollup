import defaultLocal from "./cn";
import { vueLocal } from "./index";

export default {
  computed: {
    locale() {
      return vueLocal?.$data?.locale || defaultLocal;
    },
  },
};
