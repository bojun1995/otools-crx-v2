<template>
  <div class="app-container-header">
    <span class="_title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'AppContainerHeader',
  props: {
    title: {
      type: String,
      default: '测试标题'
    }
  },
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

@mixin back-ground-color($val-key) {
  @include theme-control {
    background-color: get-theme-val($val-key);
  }
}

@mixin border-bottom-color($val-key) {
  @include theme-control {
    border-bottom-color: get-theme-val($val-key);
  }
}

.app-container-header {
  height: 30px;
  width: 100%;
  padding-left: 5px;
  @include back-ground-color('app-header-color');

  border-bottom: 1px solid;
  @include border-bottom-color('app-header-border-color');
}

._title {
  line-height: 30px;
  user-select: none;
}
</style>