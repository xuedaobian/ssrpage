<template>
  <div class="card">
    <div class="icon-bg">
      <img src="https://6e6f-note-16440d-1258774696.tcb.qcloud.la/assets/icon-1.png" alt="icon-1" />
    </div>
    <div class="card-title">{{cardTitle}}</div>
    <div class="card-desc">{{cardDesc}}</div>
    <a class="rank-card" :style="{ background: colors[Math.floor(Math.random()*10%6)] }" @click="gotoArticle(article1.link)">
      <p class="card-link">{{article1.title}}</p>
    </a>
    <a v-if="article2" class="rank-card" :style="{ background: colors[Math.floor(Math.random()*10%6)] }" @click="gotoArticle(article1.link)">
      <p class="card-link">{{article2.title}}</p>
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
const colorArr = [
  "#8EC0B4",
  "#88B2BE",
  "#71BDDC",
  "#7396DF",
  "#8AA0CE",
  "#868AD1",
];
export default defineComponent({
  props: {
    cardTitle: {
      type: String,
      required: true
    },
    cardDesc: String,
    article1: {
      type: Object,
      required: true
    },
    article2: {
      type: Object
    }
  },
  setup(props) {
    // console.log(props)
    const colors = ref(colorArr);

    return {
      colors
    }
  },
  name: "Card",
  methods: {
    gotoArticle(data) {
      console.log(data)
      this.$router.push({
        path:`/article/${data}`
      })
    }
  }
});
</script>

<style>
.card {
  background: #fff;
  width: 330px;
  height: 380px;
  margin-right: 20px;
  text-align: center;
  padding: 30px 20px 15px 20px;
  border: 1px solid #f0f0f0;
  background-color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  float: left;
  z-index: 1;
  border-radius: 8px;
  align-content: center;
}
.icon-bg {
  width: 80px;
  height: 80px;
  background-image: linear-gradient(-180deg, #50aeff 0%, #4185f4 100%);
  box-shadow: 0 8px 24px 0 rgb(66 132 244 / 30%);
  border-radius: 40px;
  margin: 0 auto 0 auto;
}
img {
  border: 0;
}
.card-title {
  margin-top: 15px;
  font-weight: 600;
  font-size: 22px;
  color: #0b1e3c;
  text-align: center;
}
.card-desc {
  color: #8f9aaa;
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  padding-bottom: 15px;
}
.rank-card {
    height: 96px;
    border-radius: 8px;
    display: flex;
    background: #000;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10px;
}
.card-link {
      margin: auto;
    font-size: 16px;
    line-height: 20px;
    color: white;
    padding: 0 30px 0 30px;
}
</style>