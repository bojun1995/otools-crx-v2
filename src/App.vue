<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// utils
import { initDefaultTheme } from '@/utils/theme/index'

export default {
  created() {
    // 初始化主题设置
    initDefaultTheme()
  },
}
</script>
<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
</style>