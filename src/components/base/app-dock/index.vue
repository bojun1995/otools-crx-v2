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
        { id: 'el-icon-sunrise-1', sort: 0, type: 'el-icon-sunrise-1' },
        { id: 'el-icon-picture-outline-round', sort: 2, type: 'el-icon-picture-outline-round' },
        { id: 'el-icon-s-promotion', sort: 1, type: 'el-icon-s-promotion' },
        { id: 'el-icon-cpu', sort: 3, type: 'el-icon-cpu' },
        { id: 'el-icon-bank-card', sort: 4, type: 'el-icon-bank-card' },
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
  @include background-color('dock-bg-color');
  backdrop-filter: blur(10px);
}
</style>