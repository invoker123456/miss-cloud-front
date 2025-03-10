import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import Home from '../views/Home.vue';
import User from '../views/System/SystemUser.vue';
import Role from '../views/System/SystemRole.vue';
import Dept from '../views/System/SystemDept.vue';
import Post from '../views/System/SystemPost.vue';
import Online from '../views/Monitor/Online.vue';
import Log from '../views/Monitor/Log.vue';
import LoginInfo from '../views/Monitor/LoginInfo.vue';

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/system/user',
        name: 'User',
        component: User,
      },
      {
        path: '/system/role',
        name: 'Role',
        component: Role,
      },
      {
        path: '/system/dept',
        name: 'Dept',
        component: Dept,
      },
      {
        path: '/system/post',
        name: 'Post',
        component: Post,
      },
      {
        path: '/monitor/online',
        name: 'Online',
        component: Online,
      },
      {
        path: '/monitor/log',
        name: 'Log',
        component: Log,
      },
      {
        path: '/monitor/login-info',
        name: 'LoginInfo',
        component: LoginInfo,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;