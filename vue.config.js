const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.0.150.141:8080', // 后端 API 地址
        changeOrigin: true, // 允许跨域
        pathRewrite: {
          '^/api': '', // 去掉路径中的 /api
        },
      },
    },
  },
})
