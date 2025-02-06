<template>
  <div class="common-toolbar">
    <!-- 顶部左边按钮  33-->
    <div class="left-buttons">
      <el-button type="primary" @click="handleAdd">新增</el-button>
      <el-button @click="handleEdit">修改</el-button>
      <el-button @click="handleDelete">删除</el-button>
      <el-button @click="handleImport">导入</el-button>
      <el-button @click="handleExport">导出</el-button>
    </div>
    <!-- 顶部右边按钮 -->
    <div class="right-buttons">
      <el-input v-model="searchText" placeholder="搜索" class="search-input" />
      <el-button @click="handleRefresh">刷新</el-button>
      <el-button @click="handleShowColumns">显示列</el-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 搜索文本
const searchText = ref('');

// 新增按钮点击事件
const handleAdd = () => {
  console.log('新增');
};

// 修改按钮点击事件
const handleEdit = () => {
  console.log('修改');
};

// 删除按钮点击事件
const handleDelete = () => {
  console.log('删除');
};

// 导入按钮点击事件
const handleImport = () => {
  console.log('导入');
};

// 导出按钮点击事件
const handleExport = () => {
  console.log('导出');
};

// 刷新按钮点击事件
const handleRefresh = () => {
  console.log('刷新');
};

// 显示列按钮点击事件
const handleShowColumns = () => {
  console.log('显示列');
};
</script>

<style scoped>
.common-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.left-buttons {
  display: flex;
}

.right-buttons {
  display: flex;
  align-items: center;
}

.search-input {
  width: 200px;
  margin-right: 10px;
}
</style>