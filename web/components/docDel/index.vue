<template>
  <div class="doc-con">
    <div class="posts" v-for="post of posts" :key="post._id">
      <PostItem :title="post.title" :link="post.link" />
      <a-button type="danger" @click="delDoc(post)">删除文章</a-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, nextTick } from "vue";
import cloudbase from "@cloudbase/js-sdk";

import PostItem from "@/components/postItem";
import { mapState } from "vuex";
import { Button, message } from "ant-design-vue";

export default defineComponent({
  name: "DocDel",
  setup() {
    let posts = ref([]);
    let cloud = ref({});
    let loginState = ref(false);
    return {
      posts,
      cloud,
      loginState,
    };
  },
  components: {
    PostItem,
    Button,
  },
  mounted() {
    nextTick(() => {
      this.posts = this.postList;
      console.log(this.posts);
    });
  },
  computed: {
    ...mapState({
      postList: (state) => state.indexStore?.data.posts.data,
    }),
  },
  methods: {
    // 登录
    async login() {
      const app = cloudbase.init({
        env: "note-16440d",
      });
      const auth = app.auth();
      await auth.anonymousAuthProvider().signIn();
      // 匿名登录成功检测登录状态isAnonymous字段为true
      const loginState = await auth.getLoginState();

      this.cloud = app;
      this.loginState = loginState.isAnonymousAuth;
    },
    // 调用云函数 删除记录，然后删除文件
    async delDatabase(item) {
      if (!this.loginState) await this.login();
      const res = await this.cloud.callFunction({
        name: 'removeFile',
        data: {
          id: item._id,
          fileID: item.fileID
        }
      }, {timeout: 300})
        if(res.result === 'ok') {
          return 'SUCCESS'
        } else {
        console.log(res)
          return res
        }
    },
    async delDoc(item) {
      const del = window.confirm("操作不可逆，是否确认？");
      const that = this;
      if (del) {
        const key = 'del'
        message.loading({ content: 'Loading...', key})
        // 后端删除信息
        that.delDatabase(item).then(res => {
          if(res === 'SUCCESS') {
            // 本地更新数组
          that.posts = that.posts.filter((cur) => cur._id !== item._id);
          nextTick(() => {});
          message.success({ content: '删除成功！', key});
        } else {
          message.error({content: res, key})
        }
        }).catch(err => {
          message.error({content: err, key})
        })
        
      }
    },
  },
});
</script>
<style>
.doc-con {
  width: 100%;
}
.posts {
  margin: 20px auto;
  display: flex;
  width: 880px;
  align-items: center;
}
</style>
