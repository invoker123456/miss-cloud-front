import { ElMessage } from 'element-plus';

// 成功提示
export const showSuccessMessage = (message) => {
  ElMessage({
    message,
    type: 'success',
    showClose: true, // 可关闭
    duration: 3000, // 显示时长
  });
};

// 错误提示
export const showErrorMessage = (message) => {
  ElMessage({
    message,
    type: 'error',
    showClose: true, // 可关闭
    duration: 3000, // 显示时长
  });
};

// 根据后端返回的 code 和 msg 显示提示
export const handleResponseMessage = (response) => {
  const { code, msg } = response;
  if (code === 200) {
    showSuccessMessage(msg || '操作成功');
  } else {
    showErrorMessage(msg || '操作失败，请重试');
  }
};