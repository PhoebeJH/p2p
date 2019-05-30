import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import('@/components/Home/Home.vue');
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
//引入会员管理/新增借款用户
const AddUser = () => import('@/components/Member/AddUser.vue');
//引入会员管理/借款用户管理
const BorrowUser = () => import('@/components/Member/BorrowUser.vue');
//引入会员管理/投资用户管理
const InvUser = () => import('@/components/Member/InvUser.vue');
//引入会员新增用户资料
const BorrowInfor = () =>import('@/components/Member/BorrowInfor.vue')
//引入用户资金
const UserCapital=()=> import('@/components/RecordMa/UserCapital.vue');
//引入资金日志
const CapitalJournal=()=> import('@/components/RecordMa/CapitalJournal.vue');
// 引入平台资金
const Platformfunds=()=> import('@/components/RecordMa/Platformfunds.vue');


// Platformfunds

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
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
    },
    //引入会员管理/新增借款用户
    {
      path: '/AddUser',
      name: 'AddUser',
      component: AddUser,
    },
    //引入会员管理/借款用户管理
    {
      path: '/BorrowUser',
      name: 'BorrowUser',
      component: BorrowUser,
    },
    //引入会员管理/投资用户管理
    {
      path: '/InvUser',
      name: 'InvUser',
      component: InvUser,
    },
    //引入会员管理/借款用户资料
    {
      path: '/BorrowInfor',
      name: 'BorrowInfor',
      component: BorrowInfor,
    },
		//引入用户资金
		{
			path:'/UserCapital',
			name:"UserCapital",
			component:UserCapital
		},
		//引入资金日志
		{
			path:'/CapitalJournal',
			name:"CapitalJournal",
			component:CapitalJournal
		},
		//引入平台资金
		{
			path:'/Platformfunds',
			name:"Platformfunds",
			component:Platformfunds
		}
  ]
})
