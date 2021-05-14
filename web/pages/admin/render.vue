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
      loginState: false,
      cloudApp: {},
    };
  },
  created(){
    // this.login();
  },
  methods: {
    async login(){
      console.log('login')
      const app = cloudbase.init({
        env: 'note-16440d'
      });
      const auth = app.auth();
      await auth.anonymousAuthProvider().signIn();
      // 匿名登录成功检测登录状态isAnonymous字段为true
      const loginState = await auth.getLoginState();

      this.cloudApp = app;
      this.loginState = loginState.isAnonymousAuth;
      console.log(loginState.isAnonymousAuth); // true
      
    },

    saveFile(text,html) {
      console.log(text);
      console.log(html)

    },
    async uploadImage(e, insertImage,files) {
      if(!this.loginState) await this.login()
      // const fileUrl = await this.upCloudImage(files)
      this.cloudApp
      .uploadFile({
        // 云存储的路径
        cloudPath: `images/${files[0].name}`,
        // 需要上传的文件，File 类型
        filePath: files[0]
      }).then(res => {
        // console.log(res)
        // return res.fileID
        this.cloudApp.getTempFileURL({fileList:[res.fileID]}).then(res => {
          const fileURL = res.fileList[0].tempFileURL;
            insertImage({
              url: fileURL,
              desc:'this is a image'
          })

        })
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