<template>
  <a-form
    layout="inline"
    :model="formState"
    @finish="handleFinish"
    @finishFailed="handleFinishFailed"
  >
    <a-form-item>
      <a-input v-model:value="formState.user" placeholder="Username">
        <template #prefix><UserOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.password" type="password" placeholder="Password">
        <template #prefix><LockOutlined style="color: rgba(0, 0, 0, 0.25)" /></template>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button
        type="primary"
        html-type="submit"
        :disabled="formState.user === '' || formState.password === ''"
        @click="valUser"
      >
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script lang="ts">
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue';
import { message } from 'ant-design-vue'
import { ValidateErrorEntity } from 'ant-design-vue/es/form/interface';
import { defineComponent, reactive, UnwrapRef } from 'vue';
interface FormState {
  user: string;
  password: string;
}
export default defineComponent({
  name: 'AdminEntry',
  setup() {
    const formState: UnwrapRef<FormState> = reactive({
      user: '',
      password: '',
    });
    const handleFinish = (values: FormState) => {
      console.log(values, formState);
    };
    const handleFinishFailed = (errors: ValidateErrorEntity<FormState>) => {
      console.log(errors);
    };
    return {
      formState,
      handleFinish,
      handleFinishFailed,
    };
  },
  methods: {
     valUser(){
       const user = this.formState.user;
       const password = this.formState.password;
      if(user === 'admin' && password === '1032419') {
        this.$emit('login','ok')
      } else {
        message.error({content:'检查密码和用户名'})
      }
    }
  },
  components: {
    UserOutlined,
    LockOutlined,
  },
});
</script>

