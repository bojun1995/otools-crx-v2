<template>
  <div class="right-button_container">
    <div class="right-button-circle_bg" :style="circleBgStyle" @mousemove="onMouseMove" @mouseleave="onMouseLeave">
      <a-icon :type="type"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightButton',
  props: {
    type: {
      type: String,
      default: 'close'
    },
    circleBgColor: {
      type: String,
      default: '#DEE1E6'
    }
  },
  data() {
    return {
      circleBgStyle: {}
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {
    /**
     * @description : 鼠标移入
     */
    onMouseMove() {
      let ret = {
        cursor: 'pointer',
        backgroundColor: this.circleBgColor
      }
      this.circleBgStyle = ret
    },
    /**
     * @description : 鼠标移出
     */
    onMouseLeave() {
      let ret = {}
      this.circleBgStyle = ret
    },
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
@import "@/styles/theme/base-theme.scss";

$circle-height: calc(#{$app-container-header-height} - 7px);

.right-button_container {
  display: inline-block;
  height: #{$app-container-header-height};
  width: #{$app-container-header-height};
  line-height: #{$app-container-header-height};
  text-align: center;
}

.right-button-circle_bg {
  margin: 0 auto;
  position: relative;
  top: 50%;
  transform: translateY(-50%);

  width: #{$circle-height};
  height: #{$circle-height};
  border-radius: #{$circle-height};
  font-size: calc(#{$circle-height} - 10px);
  line-height: #{$circle-height};
  @include transition-duration();
  // &:hover {
  //   cursor: pointer;
  //   background-color: rgb(134, 134, 134);
  // }
}
</style>