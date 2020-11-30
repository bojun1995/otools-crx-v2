<template>
  <div class="app-container">
    <app-container-header></app-container-header>
  </div>
</template>

<script>
// comp
import AppContainerHeader from './app-container-header/index'

export default {
  name: 'AppContainer',
  components: { AppContainerHeader },
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

.app-container {
  height: 70vh;
  width: 70vw;

  background-color: #fff;
}
</style>