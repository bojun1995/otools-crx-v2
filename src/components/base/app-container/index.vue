<template>
  <div ref="appContainer" v-draggable="dragProps" class="app-container" >
    <app-container-header ref="appHeader"></app-container-header>
    <app-container-main class="app-main"></app-container-main>
  </div>
</template>

<script>
// lib
import { Draggable } from 'draggable-vue-directive'

// comp
import AppContainerHeader from './header/index'
import AppContainerMain from './main/index'

export default {
  name: 'AppContainer',
  directives: {
    Draggable,
  },
  components: { AppContainerHeader, AppContainerMain },
  data() {
    return {
      dragProps: {
        handle: null,
        initialPosition: {},
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
      this.dragProps.initialPosition = {
        top: 100,
        left: 300
      }
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
.app-main {
  height: calc(100% - #{$app-container-header-height});
  padding: 10px;
}
</style>