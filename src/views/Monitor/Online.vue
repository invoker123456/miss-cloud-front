<template>
    <div class="online">
      <h1>在线用户</h1>
      <el-table :data="onlineUsers" style="width: 100%">
        <el-table-column prop="username" label="用户名" />
        <el-table-column prop="ip" label="IP地址11" />
        <el-table-column prop="loginTime" label="登录时间" />
      </el-table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MonitorOnline',
    data() {
      return {
        onlineUsers: [
          { username: 'admin', ip: '192.168.1.1', loginTime: '2023-10-01 10:00:00' },
          { username: 'user1', ip: '192.168.1.2', loginTime: '2023-10-01 11:00:00' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .online {
    padding: 20px;
  }
  </style>