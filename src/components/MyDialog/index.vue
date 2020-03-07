<template>
  <div v-show="dialogVisible" class="myDialog myDialog-fade-enter-active">
    <div class="myDialogInner">
      <div class="myDialogHeader">
        <span>{{ title }}</span>
        <svg-icon icon-class="close" @click="closeDialog" />
      </div>
      <vue-scroll :ops="ops" class="myDialogBody" style="height:calc(100% - 50px);">
        <slot />
      </vue-scroll>
    </div>
  </div>
  <!-- <div v-show="dialogVisible" class="myDialog myDialog-fade-enter-active">
    <vue-scroll :ops="ops" style="height:calc(100vh - 130px);overflow:hidden;">
      <div class="myDialogInner">
        <div class="myDialogHeader">
          <span>{{ title }}</span>
          <svg-icon icon-class="close" @click="closeDialog" />
        </div>
        <div class="myDialogBody">
          <slot />
        </div>
      </div>
    </vue-scroll>
  </div> -->
</template>

<script>
export default {
  name: 'MyDialog',
  props: {
    dialogVisible: {
      required: true,
      type: Boolean
    },
    title: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {
          background: '#01a99a',
          opacity: 0,
          size: '10px',
          specifyBorderRadius: false,
          gutterOfEnds: null, // 轨道距 x 和 y 轴两端的距离
          gutterOfSide: '0', // 距离容器的距离
          keepShow: false, // 是否即使 bar 不存在的情况下也保持显示
          border: 'none' // 边框
        },
        bar: {
          hoverStyle: true,
          onlyShowBarOnScroll: true, // 是否只有滚动的时候才显示滚动条
          background: 'gray' // 颜色
        }
      }
    }
  },
  watch: {
    dialogVisible(val) {
      if (!val) {
        const myDialog = document.getElementsByClassName('myDialog')[0]
        myDialog.setAttribute('class', 'myDialog myDialog-fade-enter-active')
      }
    }
  },
  methods: {
    closeDialog() {
      const myDialog = document.getElementsByClassName('myDialog')[0]
      myDialog.setAttribute('class', 'myDialog myDialog-fade-leave-active')
      this.$emit('closeDialog')
    }
  }
}
</script>
<style lang="scss" scoped>
  .myDialog{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh - 130px);
    background: rgba(85, 85, 85, .5);
    .myDialogInner{
      width: calc(100% - 20px);
      height: calc(100vh - 150px); /* 150 = navbar + tags-view + curPageBar + padding * 2 = 50 + 40 + 40 + 20  */
      margin: 10px;
      background: #F2F2F2;
      position: absolute;
      .myDialogHeader{
        height: 35px;
        line-height: 35px;
        font-size: 14px;
        color: #555555;
        background: #FFFFFF;
        border-bottom: 1px solid #DFDFDF;
        padding-left: 20px;
        .svg-icon{
          width: 25px;
          height: 25px;
          margin-top: 5px;
          margin-right: 10px;
          float: right;
          cursor: pointer;
        }
      }
      .myDialogBody{
      }
    }
    /*.myDialogInner::-webkit-scrollbar {
      width: 4px;
    }
    .myDialogInner::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      background: rgba(0,0,0,0.2);
    }
    .myDialogInner::-webkit-scrollbar-track {
      -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
      border-radius: 0;
      background: rgba(0,0,0,0.1);
    }*/
  }
  .myDialog-fade-enter-active{
    -webkit-animation: dialog-fade-in .6s;
    -o-animation: dialog-fade-in .6s;
    -moz-animation: dialog-fade-in .6s;
    animation: dialog-fade-in .6s;
    animation-fill-mode: forwards;
  }
  .myDialog-fade-leave-active{
    -webkit-animation: dialog-fade-out .6s;
    -o-animation: dialog-fade-out .6s;
    -moz-animation: dialog-fade-out .6s;
    animation: dialog-fade-out .6s;
    animation-fill-mode: forwards;
  }
  @keyframes dialog-fade-in {
    0% {
      transform: translate3d(0, -100%, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }
  @keyframes dialog-fade-out {
    0% {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
    100% {
      transform: translate3d(0, -100%, 0);
      opacity: 0;
    }
  }
</style>
