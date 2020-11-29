<template>
  <div class="dock-app-icon_container">
    <div class="dock-app-icon_border">
      <a-icon :type="type" class="dock-app-icon"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DockAppIcon',
  props: {
    type: {
      type: String,
      default: 'github'
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

.dock-app-icon_container {
  display: inline-block;
  height: 50px;
  width: 50px;
  text-align: center;
  padding-top: 8px;
  margin-right: 1px;
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    background-color: rgba(206, 206, 206, 0.212);
  }
}
.dock-app-icon_border {
  height: 100%;
  width: 44px;
  margin: 0 auto;
  border-bottom: 4px solid rgb(57, 201, 153);
  @include transition-duration(0.1s);
  &:hover {
    width: 50px;
  }
}
.dock-app-icon {
  font-size: 30px;
  line-height: 30px;
}
</style>