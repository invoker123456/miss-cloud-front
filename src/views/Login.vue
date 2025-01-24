<template>
    <div class="login-container">
      <el-card class="login-card">
        <h2>登录</h2>
        <el-form :model="loginForm" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="loginForm.username" />
          </el-form-item>
          <el-form-item label="密码">
            <el-input type="password" v-model="loginForm.password" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleLogin">登录</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginPage',
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
      };
    },
    methods: {
      handleLogin() {
        // 调用登录接口
        this.$router.push('/');
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  .login-card {
    width: 400px;
    padding: 20px;
  }
  </style>