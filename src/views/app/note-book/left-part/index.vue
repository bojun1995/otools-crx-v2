<template>
  <div class="left_container">
    <left-head></left-head>
    <left-main></left-main>
  </div>
</template>

<script>
// comp
import LeftHead from './left-head/index'
import LeftMain from './left-main/index'

export default {
  name: 'LeftPart',
  components: { LeftHead, LeftMain },
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

.left_container {
  height: 100%;
  width: 270px;
  @include background-color('note-left-bg-color');
  @include border-top-left-radius();
  @include border-bottom-left-radius();
  display: flex;
  flex-direction: column;
}
</style>