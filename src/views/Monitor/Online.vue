<template>
    <div class="online">
      <h1>在线用户</h1>
      <el-table :data="[]" style="width: 100%">
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="ip" label="IP地址" />
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MonitorOnline',
  };
  </script>
  
  <style scoped>
  .online {
    padding: 20px;
  }
  </style>