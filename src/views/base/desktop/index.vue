<template>
  <div class="temp-bg full-height">

    <test-btn></test-btn>
  </div>
</template>

<script>
// comp
import TestBtn from '@/components/base/test-btn/index'

export default {
  name: 'Desktop',
  components: { TestBtn },
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
.temp-bg {
  background-color: $gray;
  color: #FFFFFF;
}
</style>