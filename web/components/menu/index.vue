<template>
<div>
  <van-button type="primary" :disabled="pn==='add'" @click="changePage('add')">新编文章</van-button>
  <van-button type="primary" :disabled="pn==='del'" @click="changePage('del')">删除文章</van-button>
</div>

</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: "UserMenu",
  setup() {
    let pn = ref('add')
    return {
      pn
    }
  },
  methods:{
    changePage(value) {
      this.$emit('menuChange',value)
      this.pn = value==='add'?'add':'del'
    }
  }
});
</script>

