<template>
  <ul class="pagination">
    <span
      class="item previous_page"
      :class="[curPage == 1 ? disableClass : '']"
      @click="handlePre"
      >&lt;</span
    >
    <span class="item active">{{ curPage }}</span>
    <span
      class="item next_page"
      :class="[curPage >= total / 4 ? disableClass : '']"
      @click="handleNext"
      >&gt;</span
    >
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, inject } from "vue";

export default defineComponent({
  name: "Pagination",
  props: ["total", "curPage"],
  setup() {
    const disableClass = ref("disable");
    return {
      disableClass,
    };
  },
  methods: {
    handlePre() {
      if (this.curPage === 1) return;
      this.$emit("change", -1);
    },

    handleNext() {
      if (this.curPage >= this.total / 4) return;
      this.$emit("change", 1);
    },
  },
});
</script>
<style>
.pagination {
  padding-top: 2em;
  padding-bottom: 3em;
  display: flex;
  justify-content: center;
  padding: 1em 0;
  margin-bottom: 1em;
}
.pagination .item {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border-radius: 100%;
  border: 1px solid transparent;
  color: #999b9d;
  text-decoration: none;
  text-align: center;
  line-height: 36px;
  transition: all 0.15s ease-in-out;
}
.pagination .previous_page {
  margin-right: 20px;
  color: #3a7ff4;
  background-color: #ecf2fd;
  font-weight: bold;
}
.pagination .next_page {
  margin-left: 20px;
  color: #3a7ff4;
  background-color: #ecf2fd;
  font-weight: bold;
}
.previous_page:hover,
.next_page:hover {
  cursor: pointer;
  color: #fff;
  background: #3a7ff4;
}
.pagination .disable {
  cursor: not-allowed;
}
</style>