import VueRouter from 'vue-router';
import Vue from 'vue';

import {getToken} from '@/utils/index';
import {doLogin} from '@/api/index';

// 路由组件
import IndexPage from '@/pages/Index.vue';
import FaqPage from '@/pages/Faq.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [{
    path: '/index',
    component: IndexPage
  },{
    path: '/faq',
    component: FaqPage
  },{
    path: '*',
    redirect: '/index'
  }]
})

// 导航守卫
router.beforeEach((to, from, next)=>{
  if (getToken()){
    next();
  }else{
    // 调起客户端的登陆
    doLogin();
  }
})

router.afterEach((to, from)=>{

})

export default router;
