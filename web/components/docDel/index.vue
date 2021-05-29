<template>
  <div class="doc-con">
    <div class="posts" v-for="post of posts" :key="post._id">
      <PostItem :title="post.title" :link="post.link" />
      <van-button type="warning" @click="delDoc(post)">警告按钮</van-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, nextTick } from "vue";
import cloudbase from "@cloudbase/js-sdk";
import { Toast } from 'vant'
import PostItem from "@/components/postItem";
import { mapState } from "vuex";

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
  },
  mounted() {
    nextTick(() => {
      this.posts = this.postList;
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
    // 调用云函数,通过云函数避免安全规则
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
          return res
        }
    },
    async delDoc(item) {
      const del = window.confirm("操作不可逆，是否确认？");
      const that = this;
      if (del) {
        Toast.loading({
          message:'Loading...',
          duration: 0
        })
        that.delDatabase(item).then(res => {
          if(res === 'SUCCESS') {
            // 本地更新数组
          that.posts = that.posts.filter((cur) => cur._id !== item._id);
          nextTick(() => {});
          Toast.clear()
          Toast.success('删除成功！');
        } else {
          Toast.clear()
          Toast.fail(res)
        }
        }).catch(err => {
          Toast.clear()
          Toast.fail(err)
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
  margin: 5px auto;
  display: flex;
  width: 880px;
  align-items: center;
}
</style>
