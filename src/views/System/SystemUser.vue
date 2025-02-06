<template>
  <div class="user-management-container">
    <el-table :data="userList" style="width: 100%">
      <el-table-column prop="userName" label="用户名" width="180" />
      <el-table-column prop="nickName" label="昵称" width="180" />
      <el-table-column prop="email" label="邮箱" width="180" />
      <el-table-column prop="phonenumber" label="手机号" width="180" />
      <el-table-column prop="dept.deptName" label="部门" width="180" />
      <el-table-column prop="status" label="状态" width="180">
        <template #default="scope">
          <el-tag :type="scope.row.status === '0' ? 'success' : 'danger'">
            {{ scope.row.status === '0' ? '正常' : '停用' }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="180">
        <template #default="scope">
          <el-button type="text" @click="handleEdit(scope.row)">编辑</el-button>
          <el-button type="text" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import api from '@/utils/api'; // 导入封装的 axios 实例

// 用户列表数据
const userList = ref([]);

// 获取用户列表
const fetchUserList = async () => {
  try {
    const response = await api.get('/user/list');
    userList.value = response.data; // 假设后端返回的数据直接是用户列表
  } catch (err) {
    console.error('获取用户列表失败:', err);
  }
};

// 编辑用户
const handleEdit = (user) => {
  console.log('编辑用户:', user);
  // 跳转到编辑页面或打开编辑对话框
};

// 删除用户
const handleDelete = (user) => {
  console.log('删除用户:', user);
  // 调用删除接口
};

// 初始化时加载用户列表
onMounted(() => {
  fetchUserList();
});
</script>

<style scoped>
.user-management-container {
  padding: 20px;
}
</style>