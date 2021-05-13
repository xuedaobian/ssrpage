<template>
  <div class="md-container">
    <mk-down :htmlMD="htmlMD" class="markdown-body"></mk-down>

    <!-- <v-md-preview :text="htmlMD"></v-md-preview> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
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
  },
  created() {
    this.htmlMD = this.asyncData.value.docsContent
  },
  mounted() {
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
