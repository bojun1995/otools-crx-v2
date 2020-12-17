<template>
  <div class="right_container">
    <div class="note-content">

    </div>
  </div>
</template>

<script>
export default {
  name: 'RightPart',
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

.right_container {
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  padding: 45px 25px 25px 25px;
  @include background-color('note-right-bg-color');
  @include border-top-right-radius();
  @include border-bottom-right-radius();
}

.note-content {
  @include background-color('note-left-bg-color');
  height: 100%;
  width: 100%;
}
</style>