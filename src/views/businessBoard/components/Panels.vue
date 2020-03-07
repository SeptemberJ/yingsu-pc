<template>
  <el-row :gutter="10" class="panel-group">
    <el-col :span="4" class="card-panel-col">
      <div class="card-panel BlueBorder" @click="handleSetLineChartData('newVisitis')">
        <!-- <div class="card-panel-icon-wrapper icon-people">
          <svg-icon icon-class="peoples" class-name="card-panel-icon" />
        </div> -->
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="6" :duration="2600" class="card-panel-num" />
          <div class="card-panel-text">
            已发布
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="4" class="card-panel-col">
      <div class="card-panel BlueBorder" @click="handleSetLineChartData('messages')">
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="2" :duration="3000" class="card-panel-num" />
          <div class="card-panel-text">
            已指定
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="4" class="card-panel-col">
      <div class="card-panel BlueBorder" @click="handleSetLineChartData('purchases')">
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="1" :duration="3200" class="card-panel-num" />
          <div class="card-panel-text">
            已收到报价
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="4" class="card-panel-col">
      <div class="card-panel BlueBorder" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="1" :duration="3600" class="card-panel-num" />
          <div class="card-panel-text">
            待对方签约
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="4" class="card-panel-col">
      <div class="card-panel OrangeBorder" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="1" :duration="3600" class="card-panel-num" />
          <div class="card-panel-text">
            待装货
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="4" class="card-panel-col">
      <div class="card-panel OrangeBorder" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="1" :duration="3600" class="card-panel-num" />
          <div class="card-panel-text">
            待卸货
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="4" class="card-panel-col">
      <div class="card-panel OrangeBorder" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="1" :duration="3600" class="card-panel-num" />
          <div class="card-panel-text">
            待回单
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="4" class="card-panel-col">
      <div class="card-panel GreenBorder" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="1" :duration="3600" class="card-panel-num" />
          <div class="card-panel-text">
            待确认
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="4" class="card-panel-col">
      <div class="card-panel GreenBorder" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="1" :duration="3600" class="card-panel-num" />
          <div class="card-panel-text">
            待结算
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="4" class="card-panel-col">
      <div class="card-panel GreenBorder" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="1" :duration="3600" class="card-panel-num" />
          <div class="card-panel-text">
            待评价
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="4" class="card-panel-col">
      <div class="card-panel RedBorder" @click="handleSetLineChartData('shoppings')">
        <div class="card-panel-description">
          <count-to :start-val="0" :end-val="1" :duration="3600" class="card-panel-num" />
          <div class="card-panel-text">
            异常订单
          </div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import CountTo from 'vue-count-to'

export default {
  components: {
    CountTo
  },
  methods: {
    handleSetLineChartData(type) {
      this.$emit('handleSetLineChartData', type)
    }
  }
}
</script>

<style lang="scss" scoped>
.BlueBorder{
  border-top: 4px solid #02A7F0;
}
.GreenBorder{
  border-top: 4px solid #70B603;
}
.OrangeBorder{
  border-top: 4px solid #F59A23;
}
.RedBorder{
  border-top: 4px solid #D9001B;
}
.panel-group {
  /*margin-top: 18px;*/

  .card-panel-col {
    margin-bottom: 10px;
    /*margin-bottom: 32px;*/
  }

  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, .05);
    b/*order-color: rgba(0, 0, 0, .05);*/

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      /*float: right;*/
      font-weight: bold;
      margin: 26px 0px;
      margin-left: 0px;
      text-align: center;
      display: block;

      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 14px;
        margin-top: 12px;
        text-align: center;
        font-weight: 700;
      }

      .card-panel-num {
        font-weight: 400;
        font-size: 36px;
        color: #02A7F0;
      }
    }
  }
}

@media (max-width:550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}
</style>
