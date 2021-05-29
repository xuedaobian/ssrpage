<template>
  <div class="ad-login">
    <van-form @submit="onSubmit">
      <van-field
        v-model="state.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          提交
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      username: "",
      password: "",
    });
    // const onSubmit = (values) => {
    //   if(values['密码']==='1032419' && values['用户名']==='admin') {
    //     this.$emit('login','ok')
    //   } else {
    //     window.alert('密码错误')
    //   }
    // };
    return {
      state,
      // onSubmit,
    };
  },
  methods: {
    onSubmit(values){
      if(values['密码']==='1032419' && values['用户名']==='admin') {
        this.$emit('login','ok')
      } else {
        window.alert('密码错误');
      }
    }
  }
};
</script>

<style>
.ad-login {
  margin: 0 auto;
  width: 880px;
}
</style>