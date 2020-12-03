<template>
  <div>
    <a-menu :default-selected-keys="['1']" :open-keys.sync="openKeys" mode="inline">
      <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail" /><span>Navigation One</span></span>
        <a-menu-item key="1">
          Option 1
        </a-menu-item>
        <a-menu-item key="2">
          Option 2
        </a-menu-item>
        <a-menu-item key="3">
          Option 3
        </a-menu-item>
        <a-menu-item key="4">
          Option 4
        </a-menu-item>
      </a-sub-menu>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: 'MiddlePart',
  data() {
    return {
      openKeys: ['1']
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
</style>