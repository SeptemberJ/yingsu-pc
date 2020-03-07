<template>
  <div class="General">
    <div class="searchBar">
      <el-form :inline="true" :model="formSearch" size="small" class="demo-form-inline">
        <el-form-item label="发布日期：">
          <el-date-picker
            v-model="formSearch.releaseDate"
            style="width: 240px;"
            type="daterange"
            format="yyyy-MM-dd"
            value-format="yyyy-MM-dd"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          />
          <!--  -->
        </el-form-item>
        <el-form-item label="发货人：">
          <el-input v-model="formSearch.fpeople" placeholder="" style="width: 130px;" />
        </el-form-item>
        <el-form-item label="提货人：">
          <el-input v-model="formSearch.tpeople" placeholder="" style="width: 130px;" />
        </el-form-item>
        <el-form-item label="收货人：">
          <el-input v-model="formSearch.speople" placeholder="" style="width: 130px;" />
        </el-form-item>
        <el-form-item label="订单号：">
          <el-input v-model="formSearch.orderNo" placeholder="" style="width: 169px;" />
        </el-form-item>
        <el-form-item label="发布状态：">
          <el-select v-model="formSearch.status" placeholder="请选择" style="width: 118px;">
            <el-option
              v-for="item in options_status"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="发货地：">
          <el-select v-model="formSearch.fprovince" placeholder="请选择" style="width: 118px;">
            <el-option
              v-for="item in options_fprovince"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-select v-model="formSearch.fcity" placeholder="请选择" style="width: 118px;">
            <el-option
              v-for="item in options_fcity"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-select v-model="formSearch.farea" placeholder="请选择" style="width: 118px;">
            <el-option
              v-for="item in options_farea"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-input v-model="formSearch.faddr" placeholder="请填写发货详细地址门牌号" style="width: 190px;" />
        </el-form-item>
        <el-form-item label="收货地：">
          <el-select v-model="formSearch.sprovince" placeholder="请选择" style="width: 118px;">
            <el-option
              v-for="item in options_sprovince"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-select v-model="formSearch.scity" placeholder="请选择" style="width: 118px;">
            <el-option
              v-for="item in options_scity"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-select v-model="formSearch.sarea" placeholder="请选择" style="width: 118px;">
            <el-option
              v-for="item in options_sarea"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
          <el-input v-model="formSearch.saddr" placeholder="请填写收货详细地址门牌号" style="width: 190px;" />
        </el-form-item>
        <el-button type="primary" icon="el-icon-search" size="small" style="width: 100px;">查询</el-button>
      </el-form>
    </div>
    <div class="OptionsBar">
      <el-button type="primary" size="small" @click="addOrder">新建普货发货</el-button>
    </div>
    <!-- add -->
    <myDialog :dialog-visible="dialogVisible" title="新建普货发布" @closeDialog="closeDialog">
      <div class="MianContent">
        <div class="ColumTitBar">基本信息
          <span>(红色为必填项)</span>
          <div class="Bt">下载普货导入模板</div>
          <div class="Bt">导入普货发货计划</div>
        </div>
        <el-form :inline="true" :model="formOrder" label-position="top" size="small" class="demo-form-inline" style="margin-top: 10px;">
          <el-form-item label="装货日期" class="RequireLabel">
            <el-date-picker
              v-model="formOrder.zhDate"
              style="width: 160px;"
              type="date"
              placeholder="请选择装货日期"
              value-format="yyyy-MM-dd"
              :picker-options="startDateDisabled"
            />
          </el-form-item>
          <el-form-item label="装货时段" class="RequireLabel">
            <el-select v-model="formOrder.zhStage" placeholder="请选择" style="width: 118px;">
              <el-option
                v-for="item in stageOptionsZH"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="装货时间" class="RequireLabel">
            <el-select v-model="formOrder.zhTime" placeholder="请选择" style="width: 118px;">
              <el-option
                v-for="item in timeOptionsZH"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="卸货日期">
            <el-date-picker
              v-model="formOrder.xhDate"
              style="width: 160px;"
              type="date"
              placeholder="请选择卸货日期"
              value-format="yyyy-MM-dd"
              :picker-options="startDateDisabled"
            />
          </el-form-item>
          <el-form-item label="卸货时段">
            <el-select v-model="formOrder.xhStage" placeholder="请选择" style="width: 118px;">
              <el-option
                v-for="item in stageOptionsXH"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </el-form-item>
          <el-form-item label="卸货时间">
            <el-select v-model="formOrder.xhTime" placeholder="请选择" style="width: 118px;">
              <el-option
                v-for="item in timeOptionsXH"
                :key="item"
                :label="item"
                :value="item"
              />
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </myDialog>
  </div>
</template>
<script>

import MyDialog from '@/components/MyDialog'
import { formatToString } from '@/utils'
export default {
  name: 'General',
  components: {
    MyDialog
  },
  data() {
    return {
      dialogVisible: false,
      options_status: [
        { label: '全部', value: '全部' },
        { label: '已有报价', value: '已有报价' },
        { label: '待对方签约', value: '待对方签约' },
        { label: '已成交', value: '已成交' },
        { label: '已取消', value: '已取消' }
      ],
      options_fprovince: [{ label: '--省--', value: '--省--' }, { label: '上海', value: '上海' }],
      options_fcity: [{ label: '--市--', value: '--市--' }, { label: '上海市', value: '上海市' }],
      options_farea: [{ label: '--区/县--', value: '--区/县--' }],
      options_sprovince: [{ label: '--省--', value: '--省--' }, { label: '上海', value: '上海' }],
      options_scity: [{ label: '--市--', value: '--市--' }, { label: '上海市', value: '上海市' }],
      options_sarea: [{ label: '--区/县--', value: '--区/县--' }],
      formSearch: {
        releaseDate: '',
        fpeople: '',
        tpeople: '',
        speople: '',
        orderNo: '',
        status: '全部',
        fprovince: '',
        fcity: '',
        farea: '',
        faddr: '',
        sprovince: '',
        scity: '',
        sarea: '',
        saddr: ''
      },
      formOrder: {
        zhDate: '',
        zhStage: '',
        zhTime: '',
        xhDate: '',
        xhStage: '',
        xhTime: ''
      },
      startDateDisabled: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7
        }
      },
      stageOptionsZH: [],
      timeOptionsZH: [],
      beforeDawnZH: [1, 2, 3, 4, 5, 6],
      morningZH: [7, 8, 9, 10, 11, 12],
      afternoonZH: [13, 14, 15, 16, 17, 18],
      nightZH: [19, 20, 21, 22, 23, 24],
      stageOptionsXH: [],
      timeOptionsXH: [],
      beforeDawnXH: [1, 2, 3, 4, 5, 6],
      morningXH: [7, 8, 9, 10, 11, 12],
      afternoonXH: [13, 14, 15, 16, 17, 18],
      nightXH: [19, 20, 21, 22, 23, 24]
    }
  },
  watch: {
    'formOrder.zhDate': function(value) {
      this.initStageOptions(value, 'zh')
    },
    'formOrder.zhStage': function(value) {
      this.initTimeOption(value, 'zh')
    },
    'formOrder.xhDate': function(value) {
      this.initStageOptions(value, 'xh')
    },
    'formOrder.xhStage': function(value) {
      this.initTimeOption(value, 'xh')
    }
  },
  created() {
    const start = new Date()
    this.formOrder.releaseDate = [start, new Date(start.getTime() + 3600 * 1000 * 24 * 6)]
  },
  methods: {
    initStageOptions(value, pro) {
      this.formOrder[pro + 'Stage'] = ''
      this.formOrder[pro + 'Time'] = ''
      const CurDate = new Date()
      const CurHour = CurDate.getHours()
      const CurDateSrting = formatToString(CurDate, 'Simple', '-')
      if (CurDateSrting !== value) { // 今天往后的日期
        this['stageOptions' + pro.toUpperCase()] = [
          { label: '全天', value: '全天' },
          { label: '凌晨', value: '凌晨' },
          { label: '上午', value: '上午' },
          { label: '下午', value: '下午' },
          { label: '晚上', value: '晚上' }
        ]
      } else { // 今天
        if (CurHour < 1) { // 所有时间段都可以
          this['stageOptions' + pro.toUpperCase()] = [
            { label: '全天', value: '全天' },
            { label: '凌晨', value: '凌晨' },
            { label: '上午', value: '上午' },
            { label: '下午', value: '下午' },
            { label: '晚上', value: '晚上' }
          ]
        } else if (CurHour >= 1 && CurHour < 6) {
          this['stageOptions' + pro.toUpperCase()] = [
            { label: '凌晨', value: '凌晨' },
            { label: '上午', value: '上午' },
            { label: '下午', value: '下午' },
            { label: '晚上', value: '晚上' }
          ]
        } else if (CurHour >= 6 && CurHour < 12) {
          this['stageOptions' + pro.toUpperCase()] = [
            { label: '上午', value: '上午' },
            { label: '下午', value: '下午' },
            { label: '晚上', value: '晚上' }
          ]
        } else if (CurHour >= 12 && CurHour < 18) {
          this['stageOptions' + pro.toUpperCase()] = [
            { label: '下午', value: '下午' },
            { label: '晚上', value: '晚上' }
          ]
        } else {
          this['stageOptions' + pro.toUpperCase()] = [
            { label: '晚上', value: '晚上' }
          ]
        }
      }
    },
    initTimeOption(value, pro) {
      this.formOrder[pro + 'Time'] = ''
      const CurDate = new Date()
      const CurHour = CurDate.getHours()
      const CurDateSrting = formatToString(CurDate, 'Simple', '-')
      if (CurDateSrting !== this.formOrder[pro + 'Date']) { // 今天往后的日期
        switch (value) {
          case '全天':
            this['timeOptions' + pro.toUpperCase()] = ['都可以']
            break
          case '凌晨':
            this['timeOptions' + pro.toUpperCase()] = ['都可以', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00']
            break
          case '上午':
            this['timeOptions' + pro.toUpperCase()] = ['都可以', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00']
            break
          case '下午':
            this['timeOptions' + pro.toUpperCase()] = ['都可以', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
            break
          case '晚上':
            this['timeOptions' + pro.toUpperCase()] = ['都可以', '19:00', '20:00', '21:00', '22:00', '23:00']
            break
        }
      } else { // 今天
        switch (value) {
          case '全天':
            this['timeOptions' + pro.toUpperCase()] = ['都可以']
            break
          case '凌晨':
            this['timeOptions' + pro.toUpperCase()] = []
            if (CurHour < 1) {
              this['timeOptions' + pro.toUpperCase()].push('都可以')
              this['beforeDawn' + pro.toUpperCase()].map(item => {
                this['timeOptions' + pro.toUpperCase()].push(this.formatHour(item))
              })
            } else {
              this['beforeDawn' + pro.toUpperCase()].map(item => {
                if (item > CurHour) {
                  this['timeOptions' + pro.toUpperCase()].push(this.formatHour(item))
                }
              })
            }
            break
          case '上午':
            this['timeOptions' + pro.toUpperCase()] = []
            if (CurHour < 7) {
              this['timeOptions' + pro.toUpperCase()].push('都可以')
              this['morning' + pro.toUpperCase()].map(item => {
                this['timeOptions' + pro.toUpperCase()].push(this.formatHour(item))
              })
            } else {
              this['morning' + pro.toUpperCase()].map(item => {
                if (item > CurHour) {
                  this['timeOptions' + pro.toUpperCase()].push(this.formatHour(item))
                }
              })
            }
            break
          case '下午':
            this['timeOptions' + pro.toUpperCase()] = []
            if (CurHour < 13) {
              this['timeOptions' + pro.toUpperCase()].push('都可以')
              this['afternoon' + pro.toUpperCase()].map(item => {
                this['timeOptions' + pro.toUpperCase()].push(this.formatHour(item))
              })
            } else {
              this['afternoon' + pro.toUpperCase()].map(item => {
                if (item > CurHour) {
                  this['timeOptions' + pro.toUpperCase()].push(this.formatHour(item))
                }
              })
            }
            break
          case '晚上':
            this['timeOptions' + pro.toUpperCase()] = []
            if (CurHour < 19) {
              this['timeOptions' + pro.toUpperCase()].push('都可以')
              this['night' + pro.toUpperCase()].map(item => {
                this['timeOptions' + pro.toUpperCase()].push(this.formatHour(item))
              })
            } else {
              this['night' + pro.toUpperCase()].map(item => {
                if (item > CurHour) {
                  this['timeOptions' + pro.toUpperCase()].push(this.formatHour(item))
                }
              })
            }
            break
        }
      }
    },
    formatHour(num) {
      if (parseInt(num) < 10) {
        num = '0' + num
      }
      return num + ':00'
    },
    addOrder() {
      this.dialogVisible = true
    },
    closeDialog() {
      setTimeout(() => { this.dialogVisible = false }, 600)
    }
  }
}
</script>

<style lang="scss" scoped>
.General{
  background: #FFFFFF;
  .searchBar{
   padding: 10px 20px;
  }
  .OptionsBar{
    height: 50px;
    line-height: 50px;
    border-top: 1px solid #D7D7D7;
    border-bottm: 1px solid #D7D7D7;
    padding: 0 20px;
  }
  .MianContent{
    background: #FFFFFF;
    padding: 0 40px 10px 40px;
    .ColumTitBar{
      width: 100%;
      height: 45px;
      line-height: 45px;
      font-weight: bold;
      border-bottom: 1px solid #D7D7D7;
      &::before{
        content: '';
        width: 8px;
        height: 24px;
        margin-top: 9px;
        margin-right: 5px;
       background: #2196F3;
        float: left;
      }
      span{
        font-weight: 400;
        color: #e84335;
        padding-left: 10px;
      }
      .Bt{
        width: 120px;
        height: 30px;
        font-size: 13px;
        color: #7F7F7F;
        font-weight: 400;
        display: inline-block;
        float: right;
        text-align: center;
        line-height: 30px;
        border: 1px solid #7F7F7F;
        border-radius: 3px;
        margin-left: 10px;
        margin-top: 7px;
        cursor: pointer;
      }
    }
  }}
</style>
