<template>
  <div class="sidebar-logo-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade">
      <router-link v-if="collapse" key="collapse" class="sidebar-logo-link" to="/">
        <img v-if="logo" src="./Logo.png" class="sidebar-logo">
        <h1 v-else class="sidebar-title">
          <span>{{ title }}</span>
          <span>{{ title2 }}</span>
        </h1>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img v-if="logo" src="./Logo.png" class="sidebar-logo">
        <h1 class="sidebar-title">
          <span>{{ title }}</span>
          <span>{{ title2 }}</span>
        </h1>
      </router-link>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'SidebarLogo',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      title: '中运卡行',
      title2: '网络货运管理系统',
      logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 120px;
  background: #555555;
  text-align: center;
  overflow: hidden;
  border-bottom: 1px solid #909399;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 45px;
      height: auto;
      vertical-align: middle;
      margin-right: 8px;
    }

    & .sidebar-title {
      display: inline-block;
      margin-top: 20px;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
      span{
        display: block;
        text-align: left;
      }
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
      margin-top: 20px;
    }
  }
}
</style>
