<template>
  <Succeed v-if="succeed"></Succeed>

  <div v-else>
    <div class="choose-doc">
      <div class="title-con">
        文章标题：
        <input
          type="text"
          placeholder="请输入文章标题"
          id="title-in"
          required
          v-model="title"
        />
      </div>
      <div class="type-con">
        选择文章类型:
        <label
          ><input
            name="docType"
            type="radio"
            class="type-radio"
            value="application"
            v-model="type"
          />application
        </label>
        <label
          ><input
            name="docType"
            type="radio"
            class="type-radio"
            value="conception"
            v-model="type"
          />conception
        </label>
        <label
          ><input
            name="docType"
            type="radio"
            class="type-radio"
            value="required"
            v-model="type"
          />required
        </label>
        <label
          ><input
            name="docType"
            type="radio"
            class="type-radio"
            value="features"
            v-model="type"
          />features
        </label>
        <label
          ><input
            name="docType"
            type="radio"
            class="type-radio"
            value="tools"
            v-model="type"
          />tools
        </label>
        <label
          ><input
            name="docType"
            type="radio"
            class="type-radio"
            value="other"
            v-model="type"
          />other
        </label>
      </div>
    </div>

    <div clsss="de-class">
      <v-md-editor
        v-model="text"
        height="500px"
        :disabled-menus="[]"
        @save="saveFile"
        @upload-image="uploadImage"
      ></v-md-editor>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import cloudbase from "@cloudbase/js-sdk";
import Succeed from '@/components/succeed'
export default {
  data() {
    return {
      text: "",
      loginState: false,
      cloudApp: {},
      title: "",
      type: "",
      link: "",
      succeed: false
    };
  },
  created() {
    // this.login();
  },
  components:{
    Succeed
  },
  methods: {
    async login() {
      console.log("login");
      const app = cloudbase.init({
        env: "note-16440d",
      });
      const auth = app.auth();
      await auth.anonymousAuthProvider().signIn();
      // 匿名登录成功检测登录状态isAnonymous字段为true
      const loginState = await auth.getLoginState();

      this.cloudApp = app;
      this.loginState = loginState.isAnonymousAuth;
      console.log(loginState.isAnonymousAuth); // true
    },
    // 上传md文件到云存储
    async upMDFile(text) {
      const fileName = this.title;
      const blob = new Blob([text]);
      const file = new File([blob], `${fileName}.md`, { type: blob.type });

      if (!this.loginState) await this.login();
      const cpath = `mkdown/${this.type}/${file.name}`;
      this.cloudApp
        .uploadFile({
          cloudPath: cpath,
          filePath: file,
        })
        .then((res) => {
          console.log(res);
        });
      this.link = this.type + "$" + encodeURI(fileName);
      console.log(this.link);
      await this.addPost();
    },
    // 上传文件记录到云数据库
    async addPost() {
      if (!this.loginState) await this.login();
      const res = await this.cloudApp.callFunction({
        name: "addMDFile",
        data: {
          title: this.title,
          type: this.type,
          link: this.link,
        },
      });
      console.log("addpost", res);
      if(res.result._id) {
        this.succeed = true
      }
    },
    // 点击保存触发
    saveFile(text, html) {
      if (!this.type || !this.title) {
        window.alert("文章标题与文章类型均为必需");
        return;
      }
      console.log(text);
      console.log(html);
      this.upMDFile(text);
      // this.addPost();
    },
    // 插入图片触发
    async uploadImage(e, insertImage, files) {
      if (!this.loginState) await this.login();
      // const fileUrl = await this.upCloudImage(files)
      this.cloudApp
        .uploadFile({
          // 云存储的路径
          cloudPath: `images/${files[0].name}`,
          // 需要上传的文件，File 类型
          filePath: files[0],
        })
        .then((res) => {
          this.cloudApp
            .getTempFileURL({ fileList: [res.fileID] })
            .then((res) => {
              const fileURL = res.fileList[0].tempFileURL;
              insertImage({
                url: fileURL,
                desc: "this is a image",
              });
            });
        });
    },
  },
};
</script>
<style scoped>
.de-class {
  width: 1180px;
}
.choose-doc {
  font-size: 18px;
}
#title-in {
  outline-style: none;
  border: 1px solid #ccc;
  border-radius: 3px;
  padding: 14px 14px;
  width: 880px;
  font-size: 24px;
  margin: 20px 0 30px 0;
}
.type-con {
  margin-bottom: 20px;
}
.type-radio {
  margin-left: 10px;
}
</style>