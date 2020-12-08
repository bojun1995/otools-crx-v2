<template>
  <div class="app-container_header">
    <header-button></header-button>
  </div>
</template>

<script>
// comp
import HeaderButton from './button'

export default {
  name: 'AppContainerHeader',
  components: { HeaderButton },
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

.app-container_header {
  display: flex;
  box-sizing: border-box;
  flex-direction: row-reverse;
  @include border-top-left-radius();
  @include border-top-right-radius();
  &:hover {
    @include background-color('note-left-bg-color');
  }
}
</style>