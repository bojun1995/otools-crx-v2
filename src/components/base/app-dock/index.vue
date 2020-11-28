<template>
  <div class="app-dock-container">
    <div class="app-dock">
      1231
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppDock',
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

.app-dock-container {
  position: absolute;
  bottom: 0px;
  height: 70px;
  width: 100%;
  padding: 10px;
}

.app-dock {
  height: 100%;
  border: 1px solid rgb(217, 217, 217);
  border-radius: 5px;

  overflow: hidden;
  background: rgba(255, 255, 255, .3);
  z-index: 1;

  &::before {
    z-index: -1;
    margin: -30px;
    filter: blur(20px);
  }
}
</style>