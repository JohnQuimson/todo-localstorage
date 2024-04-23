import { createRouter, createWebHistory } from 'vue-router';

import AppMain from './components/AppMain.vue';
import AddTodo from './components/AddTodo.vue';

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: AppMain,
    },
    {
      path: '/addtodo',
      name: 'addtodo',
      component: AddTodo,
    },
  ],
});

export { router };
