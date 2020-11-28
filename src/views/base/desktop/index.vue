<template>
  <div class="desktop full-height">
    <test-btn></test-btn>
    <span>{{ cp_theme }}</span>
  </div>
</template>

<script>
// comp
import TestBtn from '@/components/base/test-btn/index'
import { mapState } from 'vuex'

export default {
  name: 'Desktop',
  components: { TestBtn },
  data() {
    return {
      themeName: 'dark-v1',
    }
  },
  computed: {
    cp_theme() {
      let { state: { BASE: { THEME = '' } = {} } } = this.$store
      return THEME
    }
  },
  watch: {},
  created() {},
  methods: {

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