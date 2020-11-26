<template>
  <div class="desktop full-height" :data-theme="themeName">
    <test-btn @on-theme-change="onThemeChange"></test-btn>
  </div>
</template>

<script>
// comp
import TestBtn from '@/components/base/test-btn/index'
 
export default {
  name: 'Desktop',
  components: { TestBtn },
  data() {
    return {
      themeName: 'dark-v1',
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    onThemeChange(theme) {
      this.themeName = theme
      window.document.documentElement.setAttribute("data-theme", theme)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
@import "@/styles/theme/base-theme.scss";

.desktop {
  transition-duration: $transition-time;
  font-size: 100px;
  @include font-color("font-color");
  @include background-color("back-color");
}
</style>