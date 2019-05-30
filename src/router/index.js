import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const Home = () => import('@/components/Home.vue');
//引入充值记录组件
const RechargeRecord = () => import('@/components/RecordMa/RechargeRecord.vue');
//引入提现记录组件
const WithdrawRecord = () => import('@/components/RecordMa/WithdrawRecord.vue');
//引入提现审核组件
const WithdrawReview = () => import('@/components/RecordMa/WithdrawReview.vue');
//进行中标的管理组件
const TenderingManage = () => import('@/components/LoanManage/TenderingManage.vue');
//满标复审组件
const TenderFullReview = () => import('@/components/LoanManage/TenderFullReview.vue');
const TenderFullReviewHome = () => import('@/components/LoanManage/TenderFullReviewChildren/TenderFullReviewHome.vue');

Vue.use(Router)
Vue.use(ElementUI)

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
    },
    //进行中标的管理路由
    {
      path: '/TenderingManage',
      name: 'TenderingManage',
      component: TenderingManage,
    },
    //满标复审路由
    {
      path: '/TenderFullReview',
      name: 'TenderFullReview',
      component: TenderFullReview,
      children:[
        {
          path: '/',
          name: 'TenderFullReviewHome',
          component: TenderFullReviewHome,
        }
      ]
    }
  ]
})
