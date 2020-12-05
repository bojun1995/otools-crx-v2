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
  width: 100%;
  @include border-top-left-radius();
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 10px;
}

.left-icon {
  font-size: 40px;
  line-height: 40px;
  margin-top: -4px;
  @include font-color('note-icon-color')
}

.middle-text {
  width: 100%;
  font-size: 15px;
  line-height: 17px;
  padding-left: 5px;
  user-select: none;
  .first-row {
    font-weight: 600;
  }
}

.right-icon-container {
  width: 40px;
  height: 30px;
  text-align: center;
  border-radius: 3px;
  cursor: pointer;

  @include background-color('note-icon-color');
  color: #ffffff;
  &:hover {
    background-color: #ffffff;
    @include font-color('note-icon-color');
  }
}

.right-icon {
  font-size: 20px;
  line-height: 29px;
}
</style>