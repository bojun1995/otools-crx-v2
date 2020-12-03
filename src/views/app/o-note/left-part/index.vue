<template>
  <div>
    <div class="_icon">
      <a-icon type="github"/>
    </div>
    <div class="_menu_container">
      <div class="_menu">
        <div class="_menu_bg">
          <a-icon type="plus"/>
        </div>
      </div>
      <div class="_menu">
        <div class="_menu_bg">
          <a-icon type="search"/>
        </div>
      </div>
      <div class="_menu">
        <div class="_menu_bg">
          <a-icon type="book"/>
        </div>
      </div>
      <div class="_menu">
        <div class="_menu_bg">
          <a-icon type="star"/>
        </div>
      </div>
    </div>
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

$left-part-width: 75px;
$middle-part-width: 200px;
$other-width: calc(#{$left-part-width} + #{$middle-part-width});

._icon {
  text-align: center;
  line-height: calc(#{$left-part-width} - 25px);
  font-size: calc(#{$left-part-width} - 25px);
  height: calc(#{$left-part-width} - 10px);

  border-bottom: 1px solid rgb(231, 231, 231);
}

._menu_container {
  margin-top: 30px;
}

._menu {
  text-align: center;
  height: #{$left-part-width};
  line-height: #{$left-part-width};
  font-size: calc(#{$left-part-width} - 45px);
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-child {
    margin-top: 0px;
  }
}

._menu_bg {
  height: calc(#{$left-part-width} - 25px);
  width: calc(#{$left-part-width} - 25px);
  display: inherit;
  justify-content: center;
  align-items: center;
  border-radius: calc(#{$left-part-width} - 30px);
  @include transition-duration();
  &:hover {
    cursor: pointer;
    background-color: rgb(141, 141, 141);
  }
}
</style>