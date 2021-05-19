<template>
  <a-result
    status="success"
    title="文章上传成功!"
    sub-title="文章已存入对象存储，链接已存至云数据库"
  >
    <template #extra>
      <a-button key="console" type="primary" @click="gotoPage">Back Home</a-button>
    </template>
  </a-result>
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

