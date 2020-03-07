<template>
  <div class="CurPageBar">
    <svg-icon :icon-class="curIconClass" /> {{ levelList[levelList.length - 1].meta.title }}
    <span><screenfull id="screenfull" class="right-menu-item hover-effect" /></span>
  </div>
</template>
<script>

import Screenfull from '@/components/Screenfull'
export default {
  name: 'CUrePageBar',
  components: {
    Screenfull
  },
  data() {
    return {
      levelList: null,
      curIconClass: ''
    }
  },
  watch: {
    $route(route) {
      if (route.path.startsWith('/redirect/')) {
        return
      }
      this.getCurPage()
    }
  },
  created() {
    this.getCurPage()
  },
  methods: {
    getCurPage() {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.title)
      const first = matched[0]
      if (!this.isDashboard(first)) {
        matched = [{ path: '/dashboard', meta: { title: '业务看板' }}].concat(matched)
      }
      this.levelList = matched.filter(item => item.meta && item.meta.title && item.meta.breadcrumb !== false)
      this.curIconClass = this.levelList[this.levelList.length - 1].name || 'kanban'
      // console.log(this.levelList)
    },
    isDashboard(route) {
      const name = route && route.name
      if (!name) {
        return false
      }
      return name.trim().toLocaleLowerCase() === '业务看板'.toLocaleLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.CurPageBar{
  width: 100%;
  height: 40px;
  background: #D0DADF;
  font-size: 14px;
  font-weight: 700;
  line-height: 40px;
  padding-left: 20px;
  span{
    font-size: 20px;
    padding-right:10px;
    height:100%;
    float:right;
    color: #555555;
    cursor: pointer;
  }
}
</style>
