<template id="corpor">
  <div class="article-body">
    <div class="corpor-content">
      <h1>
        社区
      </h1>
      <p>
        FISCO
        BCOS是国内企业主导研发、对外开源、安全可控的企业级金融联盟链底层平台。由金融区块链合作联盟（深圳）（简称：金链盟）成立的开源工作组协作打造，工作组成员包括博彦科技、华为、深证通、神州信息、四方精创、腾讯、微众银行、亦笔科技和越秀金科等金链盟成员机构。
      </p>
      <div id="fisco-bcos">
        <h2>
          FISCO BCOS资源列表
        </h2>
        <ul class="simple">
          <li>
            <a
              class="reference external"
              href="https://github.com/FISCO-BCOS/FISCO-BCOS"
              >Github主页</a
            >
          </li>
          <li>
            <a
              class="reference external"
              href="https://fisco-bcos-documentation.readthedocs.io"
              >技术文档</a
            >
          </li>
          <li>
            <a
              class="reference external"
              href="http://mp.weixin.qq.com/mp/homepage?__biz=MzA3MTI5Njg4Mw==&amp;hid=2&amp;sn=4f6d7251fbc4a73ed600e1d6fd61efc1&amp;scene=18#wechat_redirect"
              >深度解析系列文章</a
            >
          </li>
          <li>
            <a
              class="reference external"
              href="https://mp.weixin.qq.com/s/_w_auH8X4SQQWO3lhfNrbQ"
              >贡献代码</a
            >
          </li>
          <li>
            <a
              class="reference external"
              href="https://github.com/FISCO-BCOS/FISCO-BCOS/issues"
              >反馈问题</a
            >
          </li>
          <li>
            <a
              class="reference external"
              href="https://mp.weixin.qq.com/s/cUjuWf1eGMbG3AFq60CBUA"
              >应用案例集</a
            >
          </li>
        </ul>
      </div>
      <div class="section" id="id2">
        <h2>
          加入FISCO BCOS社区
        </h2>
        <p>
          <a name="QR"></a>
          <img alt="公众号" src="/images/community1.png" />
          <img
            alt="交流群"
            src="/images/community2.png"
          />
          <img
            alt="线下活动"
            src="/images/community3.png"
          />
          <img alt="行动吧！" src="/images/community4.png" />
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { Store } from 'vuex'

export default defineComponent({
  name: 'Corporation',
  setup() {
  },
  created() {
    // console.log(this.$store)
  }
})
</script>

<style>
.corpor-content {
  width: 1180px;
  margin: 0 auto;
  text-align: left;
}
</style>