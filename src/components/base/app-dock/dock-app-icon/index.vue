<template>
  <div class="dock-app-icon_container">
    <div class="dock-app-icon_border">
      <i class="dock-app-icon" :class="type"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DockAppIcon',
  props: {
    type: {
      type: String,
      default: 'el-icon-apple'
    }
  },
  data() {
    return {
      
    }
  },
  computed: {},
  watch: {},
  created() {},
  methods: {

  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
@import "@/styles/theme/base-theme.scss";

@mixin dock-icon-border-color($val-key) {
  @include theme-control {
    border-bottom-color: get-theme-val($val-key);
  }
}

.dock-app-icon_container {
  display: inline-block;
  height: 50px;
  width: 50px;
  text-align: center;
  margin-right: 1px;
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    background-color: rgba(206, 206, 206, 0.212);
  }
}
.dock-app-icon_border {
  width: 44px;
  margin: 0 auto;
  border-bottom: 4px solid;
  @include dock-icon-border-color('dock-icon-border-color');
  transition: width 0.2s ease;
  &:hover {
    width: 50px;
  }
}
.dock-app-icon {
  font-size: 30px;
  line-height: 46px;
}
</style>