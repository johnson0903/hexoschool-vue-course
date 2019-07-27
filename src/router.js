import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import Login from './components/pages/Login.vue'
import Dashboard from './components/Dashboard.vue'
import Products from './components/pages/Products.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/admin',
      name: 'dashboard',
      component: Dashboard,
      children: [{
        path: 'products',
        name: 'Products',
        component: Products,
        meta: {
          requiresAuth: true
        },
      }]
    }
  ],
});
