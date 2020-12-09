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
  padding: 10px;
  @include background-color('note-right-bg-color');
  @include border-top-right-radius();
  @include border-bottom-right-radius();
}

.note-content {
  background-color: #fff;
  height: 100%;
  width: 100%;
}
</style>