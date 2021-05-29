<template>
<div class="succeedd">
  <van-button type="success" @click="gotoPage">返回主页</van-button>

</div>

</template>

<script>

export default {
  name: 'Succeed',
  methods:{
    gotoPage() {
      this.$router.push({
        path: `/`
      })
    }
  }
}
</script>

<style>
.succeedd {
  margin-top: 50px;
}
</style>