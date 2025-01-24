<template>
  <div class="login-info">
    <h1>登录信息</h1>
    <el-table :data="[]" style="width: 100%">
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="ip" label="IP地址" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MonitorLoginInfo', // 修改为多单词组件名
};
</script>

<style scoped>
.login-info {
  padding: 20px;
}
</style> 