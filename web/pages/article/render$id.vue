<template>
  <div>
    <mk-down :htmlMD="htmlMD"></mk-down>
    <h1>{{ card?'ok':'no' }}</h1>
  </div>
</template>

<script>
import { ref } from "vue";
import { mapState } from "vuex";
import mkDown from "@/components/mkDown";
export default {
  setup() {
    const htmlMD = ref("# ddd");
    return {
      htmlMD,
    };
  },
  components: {
    mkDown,
  },
  computed: {
    ...mapState({
      card: (state) => state.indexStore.data.cards,
    }),
  },
  mounted() {
    // console.log(this.card)
  }
};
</script>
