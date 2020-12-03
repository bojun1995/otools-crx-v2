<template>
  <div class="main_container">
    <!-- <o-note></o-note> -->
    <note-book></note-book>
  </div>
</template>

<script>
// comp
import NoteBook from '@/views/app/note-book/index'

export default {
  name: 'AppContainerMain',
  components: { NoteBook },
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

.main_container {
  height: 100%;
  padding: 10px;
}
</style>