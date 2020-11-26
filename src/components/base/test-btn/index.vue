<template>
  <div>
    <a-row>
      <a-col :span="24">
        <a-button-group>
          <a-button @click="onThemeChange('dark-v1')">
            dark
          </a-button>
          <a-button @click="onThemeChange('light-v1')">
            light
          </a-button>
        </a-button-group>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        hola
      </a-col>
    </a-row>
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
      this.$emit('on-theme-change', theme)
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss" scoped>
</style>