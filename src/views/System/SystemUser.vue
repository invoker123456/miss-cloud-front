<template>
  <div class="user-management-container">
    <!-- 引入通用工具栏 -->
    <CommonToolbar :selectedRows="selectedRows"/>

    <el-table :data="userList" style="width: 100%" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column prop="userName" label="用户名" width="180"/>
      <el-table-column prop="nickName" label="昵称" width="180"/>
      <el-table-column prop="email" label="邮箱" width="180"/>
      <el-table-column prop="phonenumber" label="手机号" width="180"/>
      <el-table-column prop="dept.deptName" label="部门" width="180"/>
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
import {onMounted, ref} from 'vue';
import {get} from '@/utils/api'; // 导入封装的 axios 实例
import CommonToolbar from '@/components/CommonToolbar.vue'; // 引入通用工具栏组件

// 用户列表数据
const userList = ref([]);
// 选中的行
const selectedRows = ref([]);

// 获取用户列表
const fetchUserList = async () => {
  try {
    const response = await get('/system/user/list');
    // 假设后端返回的数据结构是 { code, msg, data }
    if (response.code === 200) {
      userList.value = response.rows; // 将用户列表数据绑定到 userList
    } else {
      console.error('获取用户列表失败:', response.msg);
    }
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

// 监听选中行的变化
const handleSelectionChange = (val) => {
  selectedRows.value = val;
};

</script>

<style scoped>
.user-management-container {
  padding: 20px;
}
</style>