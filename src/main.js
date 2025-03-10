import { createApp } from 'vue';
import App from './App.vue';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as Icons from '@element-plus/icons-vue';
import router from './router';

const app = createApp(App);
app.use(ElementPlus);
app.use(router);

// 全局注册图标
for (const [key, component] of Object.entries(Icons)) {
    app.component(key, component);
}

app.mount('#app');
