<template>
  <div>
    <mk-down :htmlMD="htmlMD"></mk-down>
    <!-- <h1>{{ card?'ok':'no' }}</h1> -->
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import mkDown from "@/components/mkDown";

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
    ...mapState({
      card: (state) => state.indexStore.data.cards,
    }),
  },
  created() {
    this.htmlMD = this.asyncData.value.docsContent.data
  },
  mounted() {
    // console.log(this.card)
  }
});
</script>
