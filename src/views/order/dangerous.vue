<template>
  <div class="Dangerous">
    危化发货
    <div v-permission="['editor']" class="permission-alert">
      has
      <el-tag class="permission-tag" size="small">editor</el-tag> authority
    </div>
    <div v-permission="['delete']" class="permission-alert">
      has
      <el-tag class="permission-tag" size="small">delete</el-tag> authority
    </div>
  </div>
</template>
<script>

import permission from '@/directive/permission/index.js' // 权限判断指令
export default {
  name: 'Dangerous',
  components: {
  },
  directives: { permission },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.Dangerous{
  padding: 20px 40px;
}
</style>
