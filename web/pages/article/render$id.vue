<template>
  <div class="md-container">
    <mk-down :htmlMD="htmlMD" class="markdown-body"></mk-down>
  </div>
</template>

<script>
import { defineComponent } from "vue";
// import { mapState } from "vuex";
import mkDown from "@/components/mkDown";
import 'github-markdown-css/github-markdown.css'
export default defineComponent({
  inject: ['asyncData'],

  data() {
    return {
      htmlMD: ''
    }
  },
  components: {
    mkDown,
  },
  computed: {
    // ...mapState({
    //   card: (state) => state.indexStore.data.cards,
    // }),
  },
  created() {
    this.htmlMD = this.asyncData.value.docsContent
  },
  mounted() {
    // console.log(this.card)
  }
});
</script>

<style>
.md-container {
  width: 1180px;
  margin: 0 auto;
  text-align: left;
}

</style>
