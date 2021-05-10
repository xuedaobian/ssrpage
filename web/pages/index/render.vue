<template>
  <section class="site-content">
    <div class="subtitle">了解FISCO,从这里开始</div>
    <section class="card-ques">
      <div>
        <Card v-for="card of cardList" :key="card.cardTitle" v-bind="card"></Card>
        <!-- <Card></Card> -->
      </div>
    </section>
    <div class="subtitle">文章精选</div>
    <section class="article-wrapper">
      <nav class="article-category">
        <span
          v-for="cate of cates"
          :key="cate.id"
          :class="[choosed == cate.id ? isActive : '']"
          @click="changeCate(cate.id)"
          >{{ cate.name }}</span
        >
      </nav>
      <div class="article-list">
        <PostItem
          v-for="postInfo of postInfos"
          :key="postInfo.title"
          :="postInfo"
        ></PostItem>

      <Pagination :total="pageTotal" :curPage="curPage" @change="pageChange"></Pagination>
      </div>
    </section>
  </section>
</template>

<script>
import { defineComponent, ref, provide, nextTick } from "vue";
import { mapState } from 'vuex'
import Card from "@/components/card";
import PostItem from "@/components/postItem";
import Pagination from '@/components/pagination';

const categs = [
  { id: "all", name: "全部" },
  { id: "required", name: "学习必备" },
  { id: "features", name: "FISCO 解析" },
  { id: "tools", name: "各类工具" },
  { id: "application", name: "案例" },
  { id: "practice", name: "练习" },
];
const postInf = [
  {
    title: "111",
    time: "2021-05-02",
    author: "zmhhh",
    link: "#",
    type: 'required'
  },
  {
    title: "222",
    time: "2021-05-02",
    author: "zmhhh",
    link: "#",
    type: 'required'
  },
  {
    title: "333",
    time: "2021-05-02",
    author: "zmhhh",
    link: "#",
    type: 'required'
  },
  {
    title: "444",
    time: "2021-05-02",
    author: "zmhhh",
    link: "#",
    type: 'required'
  },
  {
    title: "555",
    time: "2021-05-02",
    author: "zmhhh",
    link: "#",
    type: 'required'
  },
  {
    title: "777",
    time: "2021-05-02",
    author: "zmhhh",
    link: "w",
    type: 'features'
  },
  {
    title: "888",
    time: "2021-05-02",
    author: "zmhhh",
    link: "w",
    type: 'tools'
  },
  {
    title: "999",
    time: "2021-05-02",
    author: "zmhhh",
    link: "w",
    type: 'application'
  },
  {
    title: "101010",
    time: "2021-05-02",
    author: "zmhhh",
    link: "w",
    type: 'practice'
  },
];

export default defineComponent({
  name: "Home",
  setup() {
    // const bcard = ref(blockCard);
    // const fcard = ref(fisco);
    let choosed = ref('all');
    const cates = ref(categs);
    const isActive = ref("isactive");
    const postInfos = ref(postInf.slice(0,4));
    let curPage = ref(1);
    let pageTotal = ref(postInf.length);

    return {
      // bcard,
      // fcard,
      choosed,
      cates,
      isActive,
      postInfos,
      curPage,
      pageTotal
    };
  },
  computed: {
    ...mapState({
      cardList: (state) => state.cardStore.data,
    }),
  },
  mounted(){
    console.log('this.cardList',this.cardList)
  },
  watch:{
    curPage(nd,od){
      this.postInfos = postInf.slice((nd-1)*4,nd*4);
    }
  },
  components: {
    Card,
    PostItem,
    Pagination
  },
  methods: {
    changeCate(id) {
      this.choosed = id;
      this.curPage = 1;

      // 更新postInfos
      nextTick(() => {
      this.postInfos = this.getPostInfo(id).slice(0,4);
      })
      // console.log(this.pageTotal)
      // 更新子组件
    },
    pageChange(idx){
      this.curPage += idx;
    },
    getPostInfo(type='all') {
      // 发起xhr请求,更新 postInf
      // postInf = 
      if(type === 'all') {
        this.pageTotal = postInf.length
        return postInf;
      }
      const temp = postInf.filter(val => val.type === type);
      this.pageTotal = temp.length;
      return temp;
      // 得到 postInf and this.postInfos两个数组
    }
  },
});
</script>

<style>
.subtitle {
  margin: 50px auto 20px auto;
  width: 1180px;
  font-size: 24px;
  line-height: 33px;
  color: #0b1e3c;
  font-weight: bold;
  text-align: left;
}
.card-ques {
  display: flex;
  flex-direction: column;
  width: 1180px;
  margin: 0 auto 0 auto;
}
.article-wrapper {
  position: relative;
  width: 1180px;
  margin: 0 auto;
}
.article-category {
  display: flex;
  width: 778px;
  padding: 0 30px;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-bottom: 1px solid #e6e6e6;
}
.article-category span.isactive,
.article-category span:hover {
  color: #3a7ff4;
  border-bottom: 2px solid #3a7ff4;
  font-weight: bold;
}
.article-category span {
  position: relative;
  display: inline-block;
  margin-right: 40px;
  height: 59px;
  color: #8f9aaa;
  font-size: 16px;
  line-height: 64px;
  text-align: center;
  transition: all 0.15s;
  cursor: pointer;
}
</style>