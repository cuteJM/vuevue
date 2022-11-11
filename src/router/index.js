import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import userList from '../views/userList.vue';
import userProfile from '../views/userProfile.vue';
import loginView from '../views/loginView.vue';
import registerView from '../views/registerView.vue';
import notFound from '../views/notFound.vue';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/userList',
    name: 'userList',
    component: userList
  },
  {
    path: '/userProfile',
    name: 'userProfile',
    component: userProfile
  },
  {
    path: '/loginView',
    name: 'loginView',
    component: loginView
  },
  {
    path: '/registerView',
    name: 'registerView',
    component: registerView
  },
  {
    path: '/404',
    name: '404',
    component: notFound
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
