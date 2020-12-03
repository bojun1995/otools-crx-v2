<template>
  <div class="left_container">
    left
  </div>
</template>

<script>
export default {
  name: 'LeftPart',
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
  width: 200px;
  @include background-color('note-left-bg-color');
  @include border-top-left-radius();
  @include border-bottom-left-radius();
}
</style>