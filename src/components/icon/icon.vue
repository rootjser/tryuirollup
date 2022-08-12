<script>
export default {
  props: {
    name: String,
  },
  render() {
    return <i class="'el-icon-' + name"></i>;
  },
};
</script>