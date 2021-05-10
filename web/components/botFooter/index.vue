<template>
  <div class="bot-footer">
    <div class="footer-conten">
      <main class="fmain">
        <p class="footer-logo">FISCO BCOS</p>
        <p class="footer-slogn">
          国内企业主导研发、对外开源、安全可控的企业级金融联盟链底层平台
        </p>
        <nav class="footer-nav">
          <a href="https://www.beyondsoft.com/" target="_blank">博彦科技</a>
          <a href="https://www.huaweicloud.com/theme/241974-1-H" target="_blank">华为</a>
          <a href="http://www.sscc.com/" target="_blank">深证通</a>
          <a href="http://www.dcits.com/" target="_blank">神州信息</a>
          <a href="http://www.formssi.com/" target="_blank">四方精创</a>
          <a href="https://trustsql.qq.com/" target="_blank">腾讯</a>
          <a href="https://www.webank.com/#/home" target="_blank">微众银行</a>
          <a href="http://www.yibee.com/" target="_blank">亦笔科技</a>
          <a href="http://www.yuexiu-finance.com/kstds/1dltflsvc97kk.shtml" target="_blank">越秀金科</a>
        </nav>
      </main>
      <aside class="faside">
        <img src="/images/commedia.png" alt="微信公众号" class="fimg" />
        <p class="footer-slogn">微信扫一扫</p>
        <p class="footer-slogn">关注 FISCO 开源社区</p>
      </aside>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "BotFooter",
});
</script>

<style>
.footer-conten {
  width: 1180px;
  margin: 0 auto;
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.fmain {
  padding-bottom: 10px;
  background-color: #16181c;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.bot-footer {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: white;
  background-color: #16181c;
  box-shadow: 0 0 1px rgb(0 0 0 / 15%);
}

.footer-logo {
  font-size: 36px;
}
.footer-slogn {
  font-size: 14px;
  margin: 1em 0;
}
.footer-nav {
  display: block;
}
.footer-nav a {
  margin-right: 2em;
  color: #8f9aaa;
  font-size: 12px;
}
.faside {
  margin-top: 20px;
  width: 200px;
  text-align: center;
}
.fimg {
  width: 100px;
  height: 100px;
}
</style>