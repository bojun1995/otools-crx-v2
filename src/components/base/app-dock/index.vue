<template>
  <div class="app-dock-container">
    <div class="app-dock">
      <dock-app-icon v-for="(item, idx) in cp_openAppList" :key="idx" :type="item.type">
      </dock-app-icon>
    </div>
  </div>
</template>

<script>
// comp
import DockAppIcon from './dock-app-icon/index'

export default {
  name: 'AppDock',
  components: { DockAppIcon },
  data() {
    return {
      openAppList: [
        { id: 'github', sort: 0, type: 'github' },
        { id: 'control', sort: 2, type: 'control' },
        { id: 'compass', sort: 1, type: 'compass' },
        { id: 'compass', sort: 3, type: 'code' },
      ]
    }
  },
  computed: {
    /**
     * @description : 按sort排序
     */
    cp_openAppList() {
      let ret = []
      ret = this.openAppList.sort((a, b) => {
        let { sort: sort_a = 0 } = a
        let { sort: sort_b = 0 } = b
        return sort_a - sort_b
      })
      return ret
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

// 背景色
@mixin dock-bg-color($val-key) {
  @include theme-control {
    background-color: get-theme-val($val-key)
  }
}

.app-dock-container {
  position: absolute;
  bottom: 0px;
  height: $dock-height;
  width: 100%;
  text-align: center;
}

.app-dock {
  height: 100%;
  overflow: hidden;
  z-index: 1;
  @include dock-bg-color('dock-bg-color');
  @include transition-duration();
  backdrop-filter: blur(10px);
}
</style>