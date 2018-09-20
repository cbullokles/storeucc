<script>
export default {
  data : function () {
    return {}
  },
  methods : {
    handleClick(favoriteId) {
      this.$emit('save-favorite', favoriteId);
    }
  },
  props: {
    product: Object
  }
}
</script>
