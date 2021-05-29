<template>
  <div class="article-item">
    <ContainerTwoTone />
    <span class="title" @click="gotoPage(link)">{{ title }}</span>
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
    link: {
      type: String,
    },
  },
  components:{},
  setup() {},
  methods: {
    gotoPage(link) {
      this.$router.push({
        path: `/article/${link}`
      })
    }
  }
});
</script>

<style>
.article-item {
  display: flex;
  padding: 20px;
  border-top: 1px solid #e6e6e6;
  align-items: center;
  background-color: #fff;
  margin: 6px 0;
  width: 880px;
}

.title {
  cursor: pointer;
  margin-left: 40px;
  display: block;
  word-wrap: normal;
  text-overflow: ellipsis;
  overflow: hidden;
  overflow: visible;
  font-size: 20px;
  color: #4d4f50;
  line-height: 28px;
}

</style>
