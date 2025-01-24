<template>
  <div class="log">
    <h1>操作日志</h1>
    <el-table :data="[]" style="width: 100%">
      <el-table-column prop="username" label="用户名" />
      <el-table-column prop="action" label="操作" />
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MonitorLog', // 修改为多单词组件名
};
</script>

<style scoped>
.log {
  padding: 20px;
}
</style> 