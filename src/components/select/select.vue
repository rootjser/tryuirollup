<template>
  <div>
    <select @click="onClick" :placeholder="locale.select.placeholder">
      <option>苹果</option>
      <option>桃子</option>
    </select>
  </div>
</template>

<script>
import localeMixin from "@/locale/localeMixin.js";
export default {
  mixins: [localeMixin],
  methods: {
    onClick() {
      alert("11");
    },
  },
};
</script>