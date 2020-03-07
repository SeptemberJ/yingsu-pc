<template>
  <div class="ColdChain">
    <el-button type="primary" @click="getUserInfo">获取信息</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  name: 'ColdChain',
  components: {
  },
  computed: {
    ...mapGetters([
      'zRegisterInfo'
    ])
  },
  created() {
    console.log(this.zRegisterInfo)
  },
  methods: {
    getUserInfo() {
      getUserInfo(this.zRegisterInfo.id).then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
