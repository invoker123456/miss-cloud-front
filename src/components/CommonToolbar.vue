<template>
  <div class="common-toolbar">
    <!-- 顶部左边按钮 -->
    <div class="left-buttons">
      <el-button type="primary" :icon="Plus" @click="handleAdd">新增</el-button>
      <el-button type="success" :icon="Edit" :disabled="isDisabled" @click="handleEdit">修改</el-button>
      <el-button type="danger" :icon="Delete" :disabled="isDisabled" @click="handleDelete">删除</el-button>
      <el-button type="warning" :icon="Upload" @click="handleImport">导入</el-button>
      <el-button type="info" :icon="Download" @click="handleExport">导出</el-button>
    </div>
    <!-- 顶部右边按钮 -->
    <div class="right-buttons">
      <el-button :icon="Search" circle/>
      <el-button :icon="Refresh" @click="handleRefresh" circle/>
      <el-button :icon="Menu" @click="handleShowColumns" circle/>
    </div>
  </div>
</template>


<script setup>
import { computed } from 'vue';
import { defineProps, defineEmits } from 'vue'; // 导入 defineProps 和 defineEmits
import {Delete, Download, Edit, Menu, Plus, Refresh, Search, Upload} from '@element-plus/icons-vue';

// 接收父组件传递的 selectedRows
const props = defineProps({
  selectedRows: {
    type: Array,
    default: () => [],
  },
});

// 定义事件发射器
const emit = defineEmits(['edit', 'delete']);

// 计算属性，根据 selectedRows 的长度来决定按钮是否禁用
const isDisabled = computed(() => {
  return props.selectedRows.length === 0;
});

// 新增按钮点击事件
const handleAdd = () => {
  console.log('新增');
};

// 编辑按钮点击事件
const handleEdit = () => {
  console.log('编辑按钮被点击');
  // 调用父组件的编辑方法
  emit('edit', props.selectedRows);
};

// 删除按钮点击事件
const handleDelete = () => {
  console.log('删除按钮被点击');
  // 调用父组件的删除方法
  emit('delete', props.selectedRows);
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