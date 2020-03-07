<template>
  <div class="Wallet">
    <div class="Wrap">
      <div class="AvailableBalance">
        <h5>可用余额</h5>
        <div class="TopSumary">
          <div class="TotalBalance"><span class="IntegralPart">5000.</span><span class="FractionalPart">00</span> <span class="Yuan">元</span></div>
          <div class="OptionBlock">
            <div class="Bt Recharge" @click="Recharge">充值</div>
            <div class="Bt CashWithdrawal">提现</div>
          </div>
          <div class="RightOptions">
            <span>对公转账汇款查询</span>
            <span class="MiddleBt">冻结余额详情</span>
            <span>费用预警</span>
          </div>
        </div>
      </div>
    </div>
    <div class="BalanceDetail">
      <div class="DetailItem">
        <span>总计余额</span>
        <span>7000.00 元</span>
      </div>
      <div class="DetailItem Symbol"> = </div>
      <div class="DetailItem">
        <span>可用余额</span>
        <span>5000.00 元</span>
      </div>
      <div class="DetailItem Symbol"> + </div>
      <div class="DetailItem">
        <span>冻结余额</span>
        <span>2000.00 元</span>
      </div>
    </div>
    <div class="Others">
      <el-row>
        <el-col :span="8">
          <div class="OthersItem" style="border-left:0;padding-left:0;">
            <div>对公账户</div>
            <div><span class="Number">0</span><span>个</span></div>
            <div>去认证企业对公账户</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="OthersItem">
            <div>优惠券</div>
            <div><span class="Number">0</span><span>张</span></div>
            <div>去使用优惠券</div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="OthersItem">
            <div>积分</div>
            <div><span class="Number">0</span><span>分</span></div>
            <div>去兑换积分</div>
          </div>
        </el-col>
      </el-row>
    </div>
    <myDialog :dialog-visible="dialogVisible" title="对公账户充值汇款" @closeDialog="closeDialog">
      <div class="MainContent">
        <div class="InnerWrap">
          <div class="TopBlock" />
          <div class="TabBlock">
            <div class="Tabs">
              <span :class="{'active': tabIdx == 0}" @click="changeTab(0)">在线充值</span>
              <span :class="{'active': tabIdx == 1}" @click="changeTab(1)">对公汇款</span>
            </div>
            <div class="Bts">
              <span>充值记录</span>
              <span>对公汇款查询</span>
            </div>
          </div>
          <div class="MainBlock">
            <!-- 在线充值 -->
            <div v-if="tabIdx == 0">
              <div v-if="payStep == 0" class="RechargeOnline">
                <el-form ref="form" :model="formOnline" label-position="left" label-width="100px" size="mini">
                  <el-form-item label="充值账户">
                    <span>上海AAA国际贸易有限公司</span>
                  </el-form-item>
                  <el-form-item label="可用余额">
                    <span>{{ formOnline.availableBalance }} 元</span><span class="TipsTxt">（充值金额消费后才能开具发票）</span>
                  </el-form-item>
                  <el-form-item label="充值金额">
                    <el-input v-model="formOnline.rechargeNumber" placeholder="请输入充值金额" style="width: 250px;margin-right: 10px;" @keyup.native="proving" />元
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="toChoosePayWay">立即充值</el-button>
                    <!-- <el-button v-waves type="primary">立即充值</el-button> -->
                    <!-- <a class="pan-btn blue-btn">立即充值</a> -->
                  </el-form-item>
                </el-form>
              </div>
              <div v-if="payStep == 1" class="ChoosePayWay">
                <el-form ref="form" :model="formOnline" label-position="left" label-width="100px" size="mini">
                  <el-form-item label="支付账号">
                    <span>{{ formOnline.payAccount }}</span>
                  </el-form-item>
                  <el-form-item label="支付订单">
                    <span>{{ formOnline.payOrderNo }}</span>
                  </el-form-item>
                  <el-form-item label="支付订单">
                    <span class="PayNumber">{{ formOnline.rechargeNumber }}</span>
                  </el-form-item>
                  <el-form-item label="支付方式">
                    <div>
                      <div class="InternetBank"><svg-icon icon-class="payCard" style="font-size: 30px;float: left;" /><span>企业网银</span></div>
                      <span class="Tips">推荐使用微软IE浏览器</span>
                    </div>
                  </el-form-item>
                  <el-form-item label="支付方式">
                    <div class="Banks">
                      <div v-for="(Bank, idx) in banks" :key="idx" :class="[Bank.name == formOnline.bankName ? 'BankCardItem active' : 'BankCardItem']" @click="chooseBank(Bank.name)">
                        <img src="./logo.png">
                        <span>{{ Bank.name }}</span>
                      </div>
                    </div>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="surePay">立即支付</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
            <!-- 对公汇款 -->
            <div v-else>
              <div v-if="payStep == 0" class="RechargeOnline">
                <el-form ref="form" :model="formRemittance" label-position="left" label-width="100px" size="mini">
                  <el-form-item label="充值账户">
                    <span>上海AAA国际贸易有限公司</span>
                  </el-form-item>
                  <el-form-item label="可用余额">
                    <span>{{ formRemittance.availableBalance }} 元</span><span class="TipsTxt">（充值金额消费后才能开具发票）</span>
                  </el-form-item>
                  <el-form-item label="充值金额">
                    <el-input v-model="formRemittance.rechargeNumber" placeholder="请输入充值金额" style="width: 250px;margin-right: 10px;" @keyup.native="proving" />元
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="toChoosePayWay">立即充值</el-button>
                    <!-- <el-button v-waves type="primary">立即充值</el-button> -->
                    <!-- <a class="pan-btn blue-btn">立即充值</a> -->
                  </el-form-item>
                </el-form>
              </div>
              <div v-if="payStep == 1" class="ChoosePayWay">
                <el-form ref="form" :model="formRemittance" label-position="left" label-width="100px" size="mini">
                  <el-form-item label="支付账号">
                    <span>{{ formRemittance.payAccount }}</span>
                  </el-form-item>
                  <el-form-item label="支付订单">
                    <span>{{ formRemittance.payOrderNo }}</span>
                  </el-form-item>
                  <el-form-item label="支付订单">
                    <span class="PayNumber">{{ formRemittance.rechargeNumber }}</span>
                  </el-form-item>
                  <el-form-item label="支付方式">
                    <div>
                      <div class="InternetBank"><svg-icon icon-class="payCard" style="font-size: 30px;float: left;" /><span>企业网银</span></div>
                      <span class="Tips">推荐使用微软IE浏览器</span>
                    </div>
                  </el-form-item>
                  <el-form-item label="支付方式">
                    <div class="Banks">
                      <div v-for="(Bank, idx) in banks" :key="idx" :class="[Bank.name == formRemittance.bankName ? 'BankCardItem active' : 'BankCardItem']" @click="chooseBank(Bank.name)">
                        <img src="./logo.png">
                        <span>{{ Bank.name }}</span>
                      </div>
                    </div>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="surePay">立即支付</el-button>
                  </el-form-item>
                </el-form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </myDialog>
    <!-- 支付跳转 -->
    <div v-if="dialogVisibleRecharge" class="PayBlock" />
    <!-- <myDialog :dialog-visible="dialogVisibleRecharge" title="等待" @closeDialog="closeDialog">
      <div style="width: 100%;height: 300px;background: pink;">loading</div>
    </myDialog> -->
  </div>
</template>
<script>
import MyDialog from '@/components/MyDialog'
import { toDecimal2 } from '@/utils/index'
// import waves from '@/directive/waves/index.js'
export default {
  name: 'Wallet',
  components: {
    MyDialog
    // MDinput
  },
  // directives: {
  //   waves
  // },
  data() {
    return {
      dialogVisible: false,
      dialogVisibleRecharge: false,
      wid: '',
      tabIdx: 0,
      payStep: 0, // 0-输入金额 1-选择支付方式 2-等待支付返回
      formOnline: {
        availableBalance: '5000.00',
        rechargeNumber: '',
        payAccount: '13888888888',
        payOrderNo: '20200225010000444423006963496348',
        bankName: ''
      },
      formRemittance: {
        availableBalance: '5000.00',
        rechargeNumber: '',
        payAccount: '13888888888',
        payOrderNo: '20200225010000444423006963496348',
        bankName: ''
      },
      banks: [
        { name: '工商银行' },
        { name: '农业银行' },
        { name: '招商银行' },
        { name: '交通银行' },
        { name: '建设银行' },
        { name: '浦发银行' },
        { name: '光大银行' },
        { name: '兴业银行' },
        { name: '中国银行' },
        { name: '平安银行' }
      ]
    }
  },
  created() {
  },
  methods: {
    Recharge() {
      this.dialogVisible = true
    },
    initForm() {
      this.formOnline.rechargeNumber = ''
      this.formOnline.bankName = ''
      this.formRemittance.rechargeNumber = ''
      this.formRemittance.bankName = ''
    },
    changeTab(type) {
      this.tabIdx = type
      this.payStep = 0
      this.initForm()
    },
    closeDialog() {
      this.tabIdx = 0
      this.payStep = 0
      this.initForm()
      setTimeout(() => { this.dialogVisible = false }, 600)
    },
    toChoosePayWay() {
      if (this.tabIdx === 0) {
        // 是否超过可用余额
        if (!this.formOnline.rechargeNumber) {
          this.$message({
            message: '请先输入充值金额！',
            type: 'warning'
          })
          return false
        }
        if (Number(this.formOnline.availableBalance) < Number(this.formOnline.rechargeNumber)) {
          this.$message({
            message: '充值金额不能大于您的可用余额！',
            type: 'warning'
          })
          return false
        }
        this.payStep = 1
        this.formOnline.rechargeNumber = toDecimal2(this.formOnline.rechargeNumber)
      } else {
        // 是否超过可用余额
        if (!this.formRemittance.rechargeNumber) {
          this.$message({
            message: '请先输入充值金额！',
            type: 'warning'
          })
          return false
        }
        if (Number(this.formRemittance.availableBalance) < Number(this.formRemittance.rechargeNumber)) {
          this.$message({
            message: '充值金额不能大于您的可用余额！',
            type: 'warning'
          })
          return false
        }
        this.payStep = 1
        this.formRemittance.rechargeNumber = toDecimal2(this.formRemittance.rechargeNumber)
      }
    },
    chooseBank(bankName) {
      if (this.tabIdx === 0) {
        this.formOnline.bankName = bankName
      } else {
        this.formRemittance.bankName = bankName
      }
    },
    surePay() {
      if (this.tabIdx === 0) {
        if (!this.formOnline.bankName) {
          this.$message({
            message: '请选择支付方式！',
            type: 'warning'
          })
        } else {
          // online pay
        }
      } else {
        if (!this.formRemittance.bankName) {
          this.$message({
            message: '请选择支付方式！',
            type: 'warning'
          })
        } else {
          // remittance pay
        }
      }
    },
    proving() {
      const reg = /^(?!(0[0-9]{0,}$))[0-9]{1,}[.]{0,}[0-9]{0,}$/
      if (this.tabIdx === 0) {
        if (!reg.test(this.formOnline.rechargeNumber)) {
          this.formOnline.rechargeNumber = ''
        }
      } else {
        if (!reg.test(this.formRemittance.rechargeNumber)) {
          this.formRemittance.rechargeNumber = ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  $primaryBlue: #2196F3;
  $sideWidth: 180px;
  .Wallet{
    width: 100%;
    .Wrap{
      width: 100%;
      border-bottom: 1px solid #DFDFDF;
      background: #ffffff;
    }
    .AvailableBalance{
      padding: 20px 40px;
      h5{
        font-size: 16px;
        font-weight: 700;
        color: #555555;
      }
      .TopSumary{
        height: 80px;
        line-height: 80px;
        .TotalBalance{
          display: inline-block;
          float: left;
          .IntegralPart{
            font-size: 36px;
            color: $primaryBlue;
          }
          .FractionalPart{
            font-size: 28px;
            color: $primaryBlue;
          }
          .Yuan{
            font-size: 28px;
            color: #555555;
          }
        }
        .OptionBlock{
          display: inline-block;
          float: left;
          margin-left: 40px;
          .Bt{
            width: 100px;
            height: 34px;
            line-height: 34px;
            font-size: 14px;
            text-align: center;
            display: inline-block;
            float: left;
            margin-top: 23px;
            cursor: pointer;
          }
          .Recharge{
            background: $primaryBlue;
            color: #FFFFFF;
          }
          .CashWithdrawal{
            border: 1px solid #AAAAAA;
            color: #7F7F7F;
            margin-left: 20px;
          }
        }
        .RightOptions{
          float:left;
          display: inline-block;
          margin-left: 40px;
          padding-top: 10px;
          font-size: 14px;
          color: $primaryBlue;
          span{
            cursor: pointer;
          }
          .MiddleBt::before{
            content: '';
            width: 1px;
            height: 14px;
            background: #AAAAAA;
            display: inline-block;
            margin-left: 10px;
            margin-right: 10px;
          }
          .MiddleBt::after{
            content: '';
            width: 1px;
            height: 14px;
            background: #AAAAAA;
            display: inline-block;
            margin-left: 10px;
            margin-right: 10px;
          }
        }
      }
    }
    .BalanceDetail{
      height: 80px;
      padding: 15px 40px;
      background: #FFFFFF;
      .DetailItem{
        width: 100px;
        height: 50px;
        float: left;
        display: inline-block;
        color: #333333;
        span{
          width: 100%;
          height: 25px;
          text-align: left;
          font-size: 14px;
          float: left;
        }
      }
      .Symbol{
        width: 50px;
        font-size: 28px;
        color: #7F7F7F;
        text-align: center;
        line-height: 50px;
        margin-right: 25px;
      }
    }
    .Others{
      padding: 20px 40px;
      height: 140px;
      background: #FFFFFF;
      margin-top: 20px;
      .OthersItem{
        width: 100%;
        height: 100px;
        font-size: 14px;
        color: #555555;
        border-left: 2px solid #DFDFDF;
        padding-left: 20px;
        div{
          width: 100%;
          height: 60px;
          display: block;
          .Number{
            height: 60px;
            font-size: 28px;
            line-height: 60px;
            margin-right: 10px;
          }
          &:first-of-type{
            height: 20px;
            line-height: 20px;
          }
          &:last-of-type{
            height: 20px;
            line-height: 20px;
            color: $primaryBlue;
            cursor: pointer;
            font-size: 12px;
          }
        }
      }
    }
    .MainContent{
      width: 100%;
      height: 100%;
      .TipsTxt{
        color: #F59A23;
      }
      .InnerWrap{
        height: 100%;
        padding: 10px 20px;
        .TopBlock{
          width: 100%;
          height: 100px;
          margin: 10px auto 20px auto;
          background: #E8F0FE;
          border: 1px solid #02a7f0;
        }
        .TabBlock{
          width: 100%;
          height: 60px;
          margin: 20px auto;
          background: #FFFFFF;
          .Tabs{
            float: left;
            & span{
              height: 50px;
              line-height: 70px;
              text-align: center;
              float: left;
              color: #7F7F7F;
              margin-left: 20px;
              cursor: pointer;
            }
            & .active{
              color: #000000;
              border-bottom: 2px solid #000000;
            }
          }
          .Bts{
            float: right;
            height: 60px;
            & span{
              width: 120px;
              height: 34px;
              display: inline-block;
              border: 1px solid #D7D7D7;
              color: #7F7F7F;
              font-size: 13px;
              margin: 13px 20px 13px 0;
              text-align: center;
              line-height: 34px;
              cursor: pointer;
            }
          }
        }
        .MainBlock{
          padding: 20px;
          margin: 20px auto 10px auto;
          background: #FFFFFF;
          color: #333333;
          .el-button{
            border-radius: 0px;
            width: 250px;
            height: 44px;
            font-size: 13px;
          }
          .ChoosePayWay{
            .PayNumber{
              color: #2196F3;
              font-size: 25px;
              &::before{
                content: '￥';
                font-size: 18px;
                color: #2196F3;
              }
            }
            .InternetBank{
              width: 134px;
              height: 36px;
              line-height: 36px;
              border: 1px solid #D7D7D7;
              border-radius: 3px;
              font-size: 12px;
              float: left;
              padding: 0 20px;
              margin-right: 15px;
              border: 2px solid #2196f3;
              span{
                height: 100%;
                float: left;
                line-height: 32px;
                margin-left: 4px;
              }
            }
            .Tips{
              color: #F59A23;
              font-size: 12px;
              position: absolute;
              top: 50%;
              transform: translateY(-26%);
            }
            .Banks{
              width: 864px; /* (134 + 10) * 6*/
              .BankCardItem{
                width: 134px;
                height: 36px;
                line-height: 36px;
                border: 2px solid #D7D7D7;
                border-radius: 3px;
                font-size: 12px;
                float: left;
                padding: 0 20px;
                margin-right: 10px;
                margin-bottom: 10px;
                cursor: pointer;
                img{
                  width: 26px;
                  height: 26px;
                  margin: 3px 10px 3px auto;
                  float: left;
                }
                span{
                  height: 100%;
                  float: left;
                  line-height: 34px;
                }
              }
              .active{
                border: 2px solid #2196f3;
              }
            }
          }
        }
      }
    }
    .PayBlock{
      width: 100%;
      height: 100vh;
      background: pink;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>

