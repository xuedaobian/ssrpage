<template>
  <div>
    <div>
      <a-radio-group v-model:value="value1" button-style="solid">
        <a-radio-button value="application">application</a-radio-button>
        <a-radio-button value="conception">conception</a-radio-button>
        <a-radio-button value="required">required</a-radio-button>
        <a-radio-button value="features">features</a-radio-button>
        <a-radio-button value="tools">tools</a-radio-button>
        <a-radio-button value="other">other</a-radio-button>
      </a-radio-group>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'DocType',
  setup() {
    const value1 = ref<string>('');
    return {
      value1,
    };
  },
});
</script>

