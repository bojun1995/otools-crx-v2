<template>
  <div class="desktop full-height">
    <test-btn></test-btn>
    <app-dock></app-dock>
  </div>
</template>

<script>
// comp
import TestBtn from '@/components/base/test-btn/index'
import AppDock from '@/components/base/app-dock/index'

export default {
  name: 'Desktop',
  components: { TestBtn, AppDock },
  data() {
    return {
      
    }
  },
  computed: {

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
  @include transition-duration();
  @include font-color('font-color');
  @include background-color('background-color');
}
</style>