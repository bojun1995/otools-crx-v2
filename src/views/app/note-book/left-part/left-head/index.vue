<template>
  <div class="head_container">
    <div class="left-icon">
      <i class="el-icon-s-management"></i>
    </div>
    <div class="middle-text">
      <span class="first-row">Thinkless</span></br>
      <span class="second-row">and do more</span>
    </div>
    <div class="right-icon">
      <div class="right-icon-container">
        <i class="el-icon-edit-outline"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftHead',
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

.head_container {
  height: 50px;
  @include border-top-left-radius();
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.left-icon {
  font-size: 30px;
  line-height: 30px;
  @include font-color('note-icon-color')
}

.middle-text {
  width: 100%;
  font-size: 15px;
  line-height: 17px;
  padding-left: 10px;
  .first-row {
    font-weight: 600;
  }
}

.right-icon-container {
  width: 40px;
  height: 30px;
  text-align: center;
  border-radius: 3px;
  background-color: #ffffff;
  @include font-color('note-icon-color');
  cursor: pointer;
  &:hover {
    @include background-color('note-icon-color');
    color: #ffffff;
  }
}

.right-icon {
  font-size: 20px;
  line-height: 28px;
}
</style>