<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2>登录</h2>
      <el-form :model="loginForm" @submit.prevent="handleLogin">
        <el-form-item>
          <el-input v-model="loginForm.username" placeholder="请输入用户名">
            <template #prefix>
              <el-icon>
                <User />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="loginForm.password" :type="showPassword ? 'text' : 'password'" placeholder="请输入密码">
            <template #prefix>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
            <template #suffix>
              <el-icon style="cursor: pointer;" @click="togglePasswordVisibility">
                <View v-if="showPassword" />
                <Hide v-else />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-row :gutter="10">
            <el-col :span="16">
              <el-input v-model="loginForm.code" placeholder="请输入验证码">
                <template #prefix>
                  <el-icon>
                    <Key />
                  </el-icon>
                </template>
              </el-input>
            </el-col>
            <el-col :span="8">
              <img :src="captchaImage" alt="验证码" @click="refreshCaptcha"
                style="cursor: pointer; width: 100%; height: 40px; border-radius: 4px;" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit" :loading="loading" style="width: 100%;">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { User, Lock, Key, View, Hide } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { get, post } from '@/utils/api';
import { handleResponseMessage } from '@/utils/message'; // 导入统一提示方法

const router = useRouter();

// 登录表单数据
const loginForm = reactive({
  username: '',
  password: '',
  code: '',
  uuid: '',
  rememberMe: false,
});

// 验证码图片
const captchaImage = ref('');
// 验证码加载状态
const captchaLoading = ref(false);

// 获取验证码
const fetchCaptcha = async () => {
  captchaLoading.value = true;
  try {
    const res = await get('/code');
    captchaImage.value = `data:image/png;base64,${res.img}`;
    loginForm.uuid = res.uuid;
  } catch (err) {
    console.error('验证码加载失败:', err);
    handleResponseMessage({ code: 500, msg: '获取验证码失败，请重试' });
  } finally {
    captchaLoading.value = false;
  }
};

// 刷新验证码
const refreshCaptcha = () => {
  if (captchaLoading.value) return;
  fetchCaptcha();
};

// 初始化时加载验证码
fetchCaptcha();

// 登录逻辑
const loading = ref(false);

const handleLogin = async () => {
  loading.value = true;
  try {
    // 调用登录接口
    const response = await post('/auth/login', loginForm);
    const {  code, msg, data } = response; // 从 response 中解构出 data
    const { access_token, expires_in } = data; // 从 data 中解构出需要的字段

    // 处理后端返回的提示信息
    handleResponseMessage({ code, msg });

    // 如果登录成功
    if (code === 200) {
      // 保存 token 到本地存储
      localStorage.setItem('access_token', access_token);
      localStorage.setItem('token_expires_in', expires_in);

      // 如果勾选了“记住密码”，保存用户名和密码
      if (loginForm.rememberMe) {
        localStorage.setItem('rememberedUsername', loginForm.username);
        localStorage.setItem('rememberedPassword', loginForm.password);
      } else {
        // 如果没有勾选，清除保存的密码
        localStorage.removeItem('rememberedUsername');
        localStorage.removeItem('rememberedPassword');
      }

      // 跳转到首页
      router.push('/');
    }

  } catch (err) {
    console.error('登录失败:', err);
    handleResponseMessage({ code: 500, msg: '登录失败，请检查用户名、密码和验证码' });
    refreshCaptcha();
    loading.value = false;
  }
};

// 密码可见性
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

.login-card {
  width: 400px;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.el-checkbox {
  margin-left: 0;
}

.captcha-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
}

.captcha-image {
  height: 40px;
  cursor: pointer;
}

.captcha-loading {
  font-size: 20px;
  animation: rotate 1s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.login-button {
  width: 100%;
}
</style>