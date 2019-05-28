import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home.vue');
//引入充值记录组件
const RechargeRecord = () => import('@/components/RecordMa/RechargeRecord.vue');
//引入提现记录组件
const WithdrawRecord = () => import('@/components/RecordMa/WithdrawRecord.vue');
//引入提现审核组件
const WithdrawReview = () => import('@/components/RecordMa/WithdrawReview.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    //充值记录页面路由
    {
      path: '/RechargeRecord',
      name: 'RechargeRecord',
      component: RechargeRecord,
    },
    //提现记录页面路由
    {
      path: '/WithdrawRecord',
      name: 'WithdrawRecord',
      component: WithdrawRecord,
    },
    //提现审核页面路由
    {
      path: '/WithdrawReview',
      name: 'WithdrawReview',
      component: WithdrawReview,
    }
  ]
})