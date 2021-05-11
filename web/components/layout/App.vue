<template>
  <div>
    <nav-header></nav-header>
    <main>
      <router-view></router-view>
    </main>
    <bot-footer></bot-footer>
  </div>
</template>

<script>
import NavHeader from "@/components/navHeader";
import BotFooter from "@/components/botFooter";
import {VueShowdown} from 'vue-showdown'
// import 'github-markdown-css'
import { reactive, provide } from 'vue'
export default {
  props: ['asyncData'],
  setup (props) {
    const reactiveAsyncData = reactive(props.asyncData) // asyncData.value 是 fetch.ts 的返回值，将 provide 的数据变为响应式
    const changeAsyncData = (key, value) => {
      reactiveAsyncData.key = value
    }
    provide('asyncData', reactiveAsyncData)
    provide('changeAsyncData', changeAsyncData)
  },
  components: {
    NavHeader,
    BotFooter,
  },
  created(){
    const app = window.__VUE_APP__;
    app.component('VueShowdown', VueShowdown);
}
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(233, 238, 244);
  font-size: 16px;
}
</style>
