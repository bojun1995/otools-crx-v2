<template>
  <div class="onote_container">
    <div class="left-part">
      <left-part></left-part>
    </div>
    <div class="middle-part">
      <middle-part></middle-part>
    </div>
    <div class="right-part">
      MAIN
    </div>
  </div>
</template>

<script>
// comp
import LeftPart from './left-part/index'
import MiddlePart from './middle-part/index'

export default {
  name: 'ONote',
  components: { LeftPart, MiddlePart },
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

$left-part-width: 75px;
$middle-part-width: 200px;
$other-width: calc(#{$left-part-width} + #{$middle-part-width});

.onote_container {
  height: 100%;
  display: flex;
}

.left-part {
  height: 100%;
  width: #{$left-part-width};
}
.middle-part {
  height: 100%;
  width: #{$middle-part-width};
}
.right-part {
  height: 100%;
  width: calc(100% - #{$other-width});
}
</style>