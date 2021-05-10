<template>
  <div id="navbar-wrapper">
    <div class="titles">
      <img src="/images/logo.png" class="icon" alt="网站logo" />
      <span class="title-a"><router-link to="/">首页</router-link></span>
      <span class="title-a"
        ><a href="https://123eth.org/" target="_blank">网址导航</a></span
      >
      <span class="title-a"
        ><router-link to="/community">社区</router-link></span
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavHeader",
});
</script>

<style>
#navbar-wrapper {
  width: 100%;
  height: 65px;
  margin-bottom: 2em;
  background: rgba(255, 255, 255, 0.97);
  box-shadow: 0 0 1px rgb(0 0 0 / 15%);
  font-size: 20px;
  line-height: 65px;
}
.titles {
  width: 1180px;
  margin: 0 auto;
  display: flex;
  justify-content: left;
  align-items: center;
}
.title-a {
  margin-left: 77px;
  color: #8f9aaa;
}
.icon {
  width: 140px;
  height: 36px;
}
a {
  text-decoration: none;
}
a:link,
a:visited {
  color: #8f9aaa;
}
a:hover,
a:active {
  color: #3a7ff4;
  font-weight: bold;
}
</style>