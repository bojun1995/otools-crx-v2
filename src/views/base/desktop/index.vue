<template>
  <div class="desktop desktop_bg full-height" :style="desktop_style">
    <div class="desktop-main">
      <test-btn></test-btn>
      <app-container></app-container>
    </div>
    <app-dock></app-dock>
  </div>
</template>

<script>
// comp
import TestBtn from '@/components/base/test-btn/index'
import AppDock from '@/components/base/app-dock/index'
import AppContainer from '@/components/base/app-container/index'

export default {
  name: 'Desktop',
  components: { TestBtn, AppDock, AppContainer },
  data() {
    return {
      desktop_style: {
        backgroundImage: 'url('+ require('@/assets/img/sekiro.png') +')',
        // backgroundImage: 'url('+ require('@/assets/img/rocket.jpg') +')',
      }
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
}

.desktop-main {
  height: calc(100vh - #{$dock-height});
  width: 100%;
}

.desktop_bg {
  background-repeat: repeat-x;
  background-position: top;
  background-size: auto 100%;
  background-size: cover;
}
</style>