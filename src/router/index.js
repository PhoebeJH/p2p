import Vue from 'vue'
import Router from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

const Home = () => import('@/components/Home.vue');
//引入新增借款组件
const NewLoans = () => import('@/components/LoanManage/NewLoans.vue');
//引入新标维护组件
const NewStence = () => import('@/components/LoanManage/NewStence.vue');
//引入借款审核组件
const LoanAuid = () => import('@/components/LoanManage/LoanAuid.vue');
//引入标的上架组件
const BidFrame = () => import('@/components/LoanManage/BidFrame.vue');
//引入充值记录组件
const RechargeRecord = () => import('@/components/RecordMa/RechargeRecord.vue');
//引入提现记录组件
const WithdrawRecord = () => import('@/components/RecordMa/WithdrawRecord.vue');
//引入提现审核组件
const WithdrawReview = () => import('@/components/RecordMa/WithdrawReview.vue');

Vue.use(Router)
Vue.use(ElementUI)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    //新增借款页面路由
    {
      path:'/NewLoans',
      name:'NewLoans',
      component:NewLoans
    },
    //新标维护页面路由
    {
      path:'/NewStence',
      name:'NewStence',
      component:NewStence
    },
    //借款审核页面路由
    {
      path:'/LoanAuid',
      name:'LoanAuid',
      component:LoanAuid
    },
    //标的上架
    {
      path:'/BidFrame',
      name:'BidFrame',
      component:BidFrame
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
