<template>
  <div class="note-book_container">
    <left-part class="left-part"></left-part>
    <right-part></right-part>
  </div>
</template>

<script>
// comp
import LeftPart from './left-part/index'
import RightPart from './right-part/index'

export default {
  name: 'NoteBook',
  components: { LeftPart, RightPart },
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
.note-book_container {
  height: 100%;
  display: flex;
}

.left-part {
  z-index: 2;
}

</style>