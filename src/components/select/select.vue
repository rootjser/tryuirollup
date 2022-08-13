<template>
  <div>
    {{ locale.select.placeholder }}
    <select @click="onClick">
      <option>苹果</option>
      <option>桃子</option>
    </select>
  </div>
</template>

<script>
import localMixin from "../locale/localeMixin.js";
export default {
  mixins: [localMixin],
  methods: {
    onClick() {
      alert("11");
    },
  },
};
</script>