<template>
  <div class="PayWaiting">
    <div class="LogoWrap">
      <img src="./footerLogo.png">
    </div>
    <div class="MainContent">
      <div class="TopBar">
        <svg-icon v-if="payStatus == 0" icon-class="loading" class="loadinIcon" />
        <svg-icon v-if="payStatus == 1" icon-class="queren" class="statusIcon" />
        <svg-icon v-if="payStatus == 2" icon-class="error" class="statusIcon" />
        <span>{{ payStatus == 0 ? '支付校验中' : (payStatus == 0 ? '支付成功' : '支付失败') }}</span>
      </div>
      <div class="InfoContent">
        <div class="Item">
          <span class="Label">支付类型：</span>
          <span>企业账户充值</span>
        </div>
        <div class="Item">
          <span class="Label">支付订单：</span>
          <span>ABC1234567890</span>
        </div>
        <div class="Item">
          <span class="Label">支付金额：</span>
          <span>10000.00</span>
        </div>
        <p><svg-icon icon-class="wenxintishi" style="margin-right: 10px;" />若有疑问请与客服联系，客服电话 400 888 8888</p>
        <el-button v-if="payStatus == 0" type="primary" class="loadingBt">确认支付成功</el-button>
        <el-button v-if="payStatus == 1" type="primary" class="querenBt">确认支付成功</el-button>
        <el-button v-if="payStatus == 2" type="primary" class="tryBt">尝试重新支付</el-button>
        <el-button v-if="payStatus == 2" class="cancelBt">取消</el-button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  name: 'PayWaiting',
  components: {
  },
  data() {
    return {
      payStatus: 2 // 0-校验中 1-支付成功 2-支付失败
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.PayWaiting{
  width: 100%;
  height: 100vh;
  background: #F2F2F2;
  .LogoWrap{
    width: 100%;
    height: 80px;
    background: #FFFFFF;
    img{
      height: 60px;
      margin-top: 10px;
      margin-left: 220px;
    }
  }
  .MainContent{
    padding: 40px 220px;
    .TopBar{
      width: 100%;
      height: 120px;
      line-height: 120px;
      background: #E8F0ED;
      text-align: left;
      font-size: 20px;
      padding-left: 40px;
      .loadinIcon{
        font-size: 40px;
        margin-right: 10px;
        margin-top: 38px;
        float: left;
        animation: loading 1.5s linear 0s infinite;
        -webkit-animation: loading 1.5s linear 0s infinite;
        -o-animation: loading 1.5s linear 0s infinite;
        -moz-animation: loading 1.5s linear 0s infinite;
      }
      .statusIcon{
        font-size: 45px;
        float: left;
        margin-top: 38px;
        margin-right: 10px;
      }
    }
    .InfoContent{
      width: 100%;
      height: 400px;
      padding: 40px 90px;
      background: #FFFFFF;
      .Item{
        height: 35px;
        line-height: 35px;
        color: #555555;
        font-size: 16px;
        .Label{
          margin-right: 5px;
        }
      }
      p{
        margin-top: 20px;
        font-size: 14px;
        color: #F59A23;
      }
      .el-button{
        width: 250px;
        height: 44px;
        border-radius: 0;
        border: 0px;
        margin-top: 80px;
      }
      .loadingBt{
        background: #F2F2F2;
        color: #AAAAAA;
      }
      .querenBt{
        color: #FFFFFF;
      }
      .cancelBt{
        background: #FFFFFF;
        color: #7F7F7F;
        border: 1px solid #AAAAAA;
      }
    }
  }
}
@keyframes loading {
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
}
@-webkit-keyframes loading {
  from {
      -webkit-transform: rotate(0deg);
  }
  to {
      -webkit-transform: rotate(360deg);
  }
}
@-o-keyframes loading {
  from {
    -o-transform: rotate(0deg);
  }
  to {
    -o-transform: rotate(360deg);
  }
}
@-moz-keyframes loading {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(360deg);
  }
}
</style>
