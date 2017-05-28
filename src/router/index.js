import Vue from 'vue';
import Router from 'vue-router';
// import Hello from '@/components/Hello';
import Base from '@/components/common/Base';

Vue.use(Router);

export default new Router({
  hashbang: false,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'App',
      component: Base,
    },
  ],
});
