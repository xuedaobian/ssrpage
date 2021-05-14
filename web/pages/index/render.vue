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
  { id: "features", name: "features" },
  { id: "required", name: "required" },
  { id: "tools", name: "tools" },
  { id: "application", name: "application" },
  { id: "practice", name: "practice" },
  { id: "conception", name: "conception" },
  { id: "other", name: "other"}
];

export default defineComponent({
  name: "Home",
  setup() {
    let choosed = ref('features');
    const cates = ref(categs);
    const isActive = ref("isactive");
    let postInfos = ref([]);
    let curPage = ref(1);
    let pageTotal = ref(postInfos.length);

    return {
      postInfos,
      choosed,
      cates,
      isActive,
      curPage,
      pageTotal
    };
  },
  computed: {
    ...mapState({
      cardList: (state) => state.indexStore.data.cards.data,
      postList: (state) => state.indexStore.data.posts.data,
    }),
  },
  mounted(){
    // console.log('this.cardList',this.cardList)
    nextTick(() => {
      this.postInfos = this.postList;
      })
  },
  watch:{
    curPage(nd,od){
      this.postInfos = this.postInfos.slice((nd-1)*5,nd*5);
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
        this.postInfos = this.postList.filter(val => val.type === id);
        this.pageTotal = this.postInfos.length
      })
      // console.log(this.pageTotal)
      // 更新子组件
    },
    pageChange(idx){
      this.curPage += idx;
    },
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