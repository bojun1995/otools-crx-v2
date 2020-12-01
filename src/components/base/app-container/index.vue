<template>
  <div ref="appContainer" v-draggable="dragProps" class="app-container" >
    <app-container-header ref="appHeader"></app-container-header>
  </div>
</template>

<script>
// lib
import { Draggable } from 'draggable-vue-directive'

// comp
import AppContainerHeader from './app-container-header/index'

export default {
  name: 'AppContainer',
  directives: {
    Draggable,
  },
  components: { AppContainerHeader },
  data() {
    return {
      dragProps: {
        handle: null,
        boundingRect: null,
        boundingRectMargin: {},
        onDragEnd: this.onDragEnd,
      },
      appStatus: {

      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.initDragHanlde()
  },
  methods: {
    /**
     * @description : 初始拖拽组件的hanlde
     */
    initDragHanlde() {
      this.dragProps.handle = this.$refs['appHeader']
      // this.dragProps.boundingElement = document.getElementById('desktopMain')
      // this.dragProps.boundingRectMargin = {
      //   top: 10,
      //   bottom: 10,
      //   left: 10,
      //   right: 10,
      // }
    },
    onPosChange(positionDiff, absolutePosition, event) {
      debugger
    },
    onDragEnd(positionDiff, absolutePosition, event) {
      let { top = 0, left = 0 } = absolutePosition
      if(top > 500) {
        this.dragProps.stopDragging = true
      }
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
@import "@/styles/theme/base-theme.scss";

.app-container {
  height: 70vh;
  width: 70vw;
  border-radius: #{$app-container-border-radius};

  background-color: #fff;
}
</style>