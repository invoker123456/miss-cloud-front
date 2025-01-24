<template>
    <div id="layout">
      <el-header class="header">
        <div class="header-content">
          <img src="@/assets/logo.png" alt="Logo" class="logo" />
          <h1 class="app-title">Miss Cloud Front</h1>
        </div>
      </el-header>
  
      <el-container style="height: calc(100vh - 64px);">
        <el-aside class="sidebar" style="width: 200px;">
          <el-menu
            default-active="/"
            router
            class="sidebar-menu"
          >
            <el-menu-item index="/">
              <el-icon><HomeFilled /></el-icon>
              <span>首页</span>
            </el-menu-item>
            <el-submenu index="system">
              <template #title>
                <el-icon><Menu /></el-icon>
                <span>系统管理</span>
              </template>
              <el-menu-item index="/system/user">用户管理</el-menu-item>
              <el-menu-item index="/system/role">角色管理</el-menu-item>
              <el-menu-item index="/system/dept">部门管理</el-menu-item>
              <el-menu-item index="/system/post">岗位管理</el-menu-item>
            </el-submenu>
            <el-submenu index="monitor">
              <template #title>
                <el-icon><DataAnalysis /></el-icon>
                <span>监控管理</span>
              </template>
              <el-menu-item index="/monitor/online">在线用户</el-menu-item>
              <el-menu-item index="/monitor/log">操作日志</el-menu-item>
              <el-menu-item index="/monitor/login-info">登录信息</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
  
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </div>
  </template>
  
  <script setup>
  import { HomeFilled, Menu, DataAnalysis } from '@element-plus/icons-vue';
  </script>
  
  <style scoped>
  #layout {
    height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  .header {
    background-color: #409eff;
    color: white;
    display: flex;
    align-items: center;
    padding: 0 20px;
  }
  
  .header-content {
    display: flex;
    align-items: center;
  }
  
  .logo {
    width: 40px;
    height: 40px;
    margin-right: 10px;
  }
  
  .app-title {
    margin: 0;
    font-size: 20px;
  }
  
  .sidebar {
    background-color: #f5f5f5;
  }
  
  .sidebar-menu {
    height: 100%;
  }
  </style>