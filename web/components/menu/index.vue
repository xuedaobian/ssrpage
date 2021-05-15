<template>
  <a-menu v-model:selectedKeys="current" mode="horizontal">
    <a-menu-item key="add">
      <mail-outlined />
      新增文章
    </a-menu-item>
    <a-menu-item key="del">
      删除文章
    </a-menu-item>
  </a-menu>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
export default defineComponent({
  name: "UserMenu",
  setup() {
    const current = ref<string[]>(['add']);
    return {
      current,
    };
  },
  components: {
    MailOutlined,
    AppstoreOutlined,
    SettingOutlined,
  },
});
</script>

