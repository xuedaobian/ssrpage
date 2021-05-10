<template>
  <div class="article-item">
    <img src="/images/article1.png" alt="" class="post-cover" />
    <div class="article-info">
      <a :href="link" class="title">{{ title }}</a>
      <div class="meta">
        <span>{{ author }}</span>
        &nbsp;&nbsp;
        <time>{{ time }}</time>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostItem",
  props: {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    link: {
      type: String,
    },
  },
  setup() {},
});
</script>

<style>
.article-list {
  width: 778px;
  padding: 0 30px 0 30px;
  margin-bottom: 4em;
  background-color: #fff;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.article-item {
  display: flex;
  padding: 30px 0;
  border-top: 1px solid #e6e6e6;
}
.post-cover {
  width: 150px;
  min-width: 150px;
  height: 100px;
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(143, 154, 170, 0.3);
  border-radius: 8px;
}
.article-info {
  display: flex;
  flex-direction: column;
  margin-left: 1.3em;
}
.article-info .title {
  display: block;
  word-wrap: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: visible;
  font-size: 20px;
  color: #4d4f50;
  font-weight: bold;
  padding-top: 4px;
  line-height: 28px;
}
.article-info .meta {
  color: #8f9aaa;
  font-size: 13px;
  display: flex;
  align-items: flex-end;
  height: 100%;
}
</style>
