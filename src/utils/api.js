import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  baseURL: '/api', // 代理的基础 URL
  timeout: 5000, // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 从本地存储中获取 token
    const token = localStorage.getItem('access_token');
    if (token) {
      // 如果 token 存在，将其添加到请求头的 Authorization 字段中
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 对响应数据做一些处理
    return response.data;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

/**
 * GET 请求
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @returns {Promise}
 */
export const get = (url, params) => {
  return service.get(url, { params });
};

/**
 * POST 请求
 * @param {string} url 请求地址
 * @param {object} data 请求体数据
 * @returns {Promise}
 */
export const post = (url, data) => {
  return service.post(url, data);
};

/**
 * PUT 请求
 * @param {string} url 请求地址
 * @param {object} data 请求体数据
 * @returns {Promise}
 */
export const put = (url, data) => {
  return service.put(url, data);
};

/**
 * DELETE 请求
 * @param {string} url 请求地址
 * @param {object} params 请求参数
 * @returns {Promise}
 */
export const del = (url, params) => {
  return service.delete(url, { params });
};

export default service; 