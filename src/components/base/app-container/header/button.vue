<template>
  <div class="header-button">
    <i class="el-icon-close"></i>
  </div>
</template>

<script>
export default {
  name: 'HeaderButton',
  data() {
    return {
      
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {

  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
.header-button {
  text-align: center;
  font-size: calc(#{$app-container-header-height} - 8px);
  line-height: #{$app-container-header-height};
  width: #{$app-container-header-height};
}
</style>