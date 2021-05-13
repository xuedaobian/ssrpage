<template>
  <div clsss="de-class">
    <v-md-editor
      v-model="text"
      height="600px"
      :disabled-menus="[]"
      @save="saveFile"
      @upload-image="uploadImage"
    ></v-md-editor>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import cloudbase from '@cloudbase/js-sdk';



export default {
  data() {
    return {
      text: "",
    };
  },
  created(){

  },
  methods: {
    async login(files){
      console.log('login')
      const app = cloudbase.init({
        env: 'note-16440d'
      });

      const auth = app.auth();
      await auth.anonymousAuthProvider().signIn();
      // 匿名登录成功检测登录状态isAnonymous字段为true
      const loginState = await auth.getLoginState();
      console.log(loginState.isAnonymousAuth); // true
      return await app
      .uploadFile({
        // 云存储的路径
        cloudPath: `images/${files[0].name}`,
        // 需要上传的文件，File 类型
        filePath: files[0]
      }).fileID
    },
    saveFile(text) {
      console.log(text);

    },
    async uploadImage(e, insertImage,files) {
      const fileUri = await this.login(files)
      console.log(fileUrl)
      insertImage({
        url: fileUri,
        desc:''
      })
    },
  },
};
</script>
<style scoped>
.de-class {
  width: 1180px;
}
</style>