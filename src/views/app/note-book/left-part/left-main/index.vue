<template>
  <div class="left-main">
    <el-scrollbar class="scrollbar">
      <div class="test"></div>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'LeftMain',
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
@import "@/styles/theme/base-theme.scss";

.left-main {
  height: calc(100% - 70px);
}

.scrollbar {
  height: 100%;
}

.test {
  height: 1000px;
}
</style>