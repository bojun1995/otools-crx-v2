<template>
  <div>
    <div class="_icon">
      <a-icon type="github"/>
    </div>
    <div class="_menu_container">
      <div class="_menu">
        <a-icon type="plus"/>
      </div>
      <div class="_menu">
        <a-icon type="search"/>
      </div>
      <div class="_menu">
        <a-icon type="book"/>
      </div>
      <div class="_menu">
        <a-icon type="star"/>
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
  height: calc(#{$left-part-width} - 15px);
  line-height: calc(#{$left-part-width} - 40px);
  font-size: calc(#{$left-part-width} - 40px);
  margin-top: 15px;
  &:first-child {
    margin-top: 0px;
  }
}
</style>