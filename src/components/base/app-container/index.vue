<template>
  <div class="app-container_bg">
    <div ref="appContainer" v-draggable="dragProps" class="app-container" >
      <app-container-header ref="header" class="drag-header"></app-container-header>
      <app-container-main></app-container-main>
    </div>
  </div>
</template>

<script>
// lib
import { Draggable } from 'draggable-vue-directive'

// comp
import AppContainerMain from './main/index'
import AppContainerHeader from './header/index'

export default {
  name: 'AppContainer',
  directives: {
    Draggable,
  },
  components: { AppContainerMain, AppContainerHeader },
  data() {
    return {
      dragProps: {
        handle: null,
        initialPosition: {},
        resetInitialPos: true,
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
      this.dragProps.handle = this.$refs.header
      this.dragProps.initialPosition = {
        top: 100,
        left: 300
      }
    },
    onDragEnd(positionDiff, absolutePosition, event) {
      let { top = 0, left = 0 } = absolutePosition
      // console.log(`top:${top}, left:${left}`)
    }
  },
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
@import "@/styles/theme/base-theme.scss";

@mixin background-color($val-key) {
  @include theme-control {
    background-color: get-theme-val($val-key);
  }
}

.app-container_bg {
  height: 100%;
}

.app-container {
  height: 70vh;
  width: 70vw;
  border-radius: #{$app-container-border-radius};
}

.drag-header {
  position: absolute;
  height: #{$app-container-header-height};
  width: 100%;
}
</style>