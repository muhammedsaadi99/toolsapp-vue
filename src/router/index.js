import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/auth/login.vue'),
    beforeEnter: (to, from, next) => {
      if(!window.sessionStorage.getItem('access_token') == ''){
        next('/');
      }else{
        next();
      }       
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/auth/register.vue'),
    beforeEnter: (to, from, next) => {
      if(!window.sessionStorage.getItem('access_token') == ''){
        next('/');
      }else{
        next();
      }       
    }
  },
  {
    path: '/reset-password',
    name: 'resetPass',
    component: () => import('../views/auth/resetPass.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profileView.vue'),
    beforeEnter: (to, from, next) => {
      if(!window.sessionStorage.getItem('access_token') == ''){
        next();
      }else{
        next('/');
      }       
    }
  },
  // {
  //   path: '/create-post',
  //   name: 'create post',
  //   component: () => import('../views/CreatePost.vue'),
  //   beforeEnter: (to, from, next) => {
  //     if(!window.sessionStorage.getItem('access_token') == ''){
  //       next();
  //     }else{
  //       next('/');
  //     }       
  //   }
  // },

  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
