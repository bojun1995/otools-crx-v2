<template>
  <div>
    <el-button-group>
      <el-button type="primary" size="default" @click="onThemeChange('dark-v1')">dark</el-button>
      <el-button type="primary" size="default" @click="onThemeChange('light-v1')">light</el-button>
    </el-button-group>
  </div>
</template>

<script>
export default {
  name: 'TestBtn',
  data() {
    return {
      
    }
  },
  computed: {
    cp_theme() {
      let ret = ''
      let { THEME = '' } = this.$store.state.BASE
      if(null !== THEME) {
        ret = THEME
      }
      return ret
    }
  },
  watch: {},
  created() {},
  methods: {
    onThemeChange(theme) {
      this.$store.commit('CHANGE_THEME', theme)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
</style>