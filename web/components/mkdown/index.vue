<template>
<div>
<v-md-preview :text="htmlMD"></v-md-preview>
</div>
</template>

<script lang="ts">

export default({
  name: "mkDown",
  props:{
    htmlMD: String
  },
  setup() {},
});
</script>
