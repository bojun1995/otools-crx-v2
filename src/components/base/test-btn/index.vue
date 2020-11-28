<template>
  <div>
    <a-form layout="inline">
      <a-form-item label="theme">
        <a-button-group>
          <a-button @click="onThemeChange('dark-v1')">
            dark
          </a-button>
          <a-button @click="onThemeChange('light-v1')">
            light
          </a-button>
        </a-button-group>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'TestBtn',
  data() {
    return {
      
    }
  },
  computed: {},
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