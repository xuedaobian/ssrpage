<template>
  <div>
      <van-radio-group v-model="value1"  direction="horizontal" @change="changeType">
        <van-radio name="application">application</van-radio>
        <van-radio name="conception">conception</van-radio>
        <van-radio name="required">required</van-radio>
        <van-radio name="features">features</van-radio>
        <van-radio name="tools">tools</van-radio>
        <van-radio name="other">other</van-radio>
      </van-radio-group>
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
  methods:{
    changeType(name){
      console.log(name)
      this.$emit('typeChange',name)
    }
  }
});
</script>

