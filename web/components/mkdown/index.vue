<template>
<div>
  <VueShowdown
  :markdown="htmlMD"
  flavor="github"
  :options="{ emoji: true }"
/>
</div>
</template>

<script lang="ts">
import { defineComponent,ref } from "vue";

export default({
  name: "mkDown",
  props:{
    htmlMD: String
  },
  setup() {},
});
</script>
