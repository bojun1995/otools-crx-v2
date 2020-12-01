<template>
  <div class="app-container-header">
    <span class="header_title">{{ title }}</span>
    <div class="right-button_container">
      <right-button type="close" circleBgColor="#E06C75"></right-button>
      <right-button type="border"></right-button>
      <right-button type="minus"></right-button>
    </div>
  </div>
</template>

<script>
// comp
import RightButton from './right-button'

export default {
  name: 'AppContainerHeader',
  components: { RightButton },
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
  height: #{$app-container-header-height};
  width: 100%;
  border-top-left-radius: #{$app-container-border-radius};
  border-top-right-radius: #{$app-container-border-radius};
  padding-left: 5px;
  @include back-ground-color('app-header-color');

  border-bottom: 1px solid;
  @include border-bottom-color('app-header-border-color');
}

.header_title {
  line-height: #{$app-container-header-height};
  user-select: none;
}

.right-button_container {
  float: right;
}
</style>