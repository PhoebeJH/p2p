import Vue from 'vue'
import Router from 'vue-router'


const Login = () => import('@/components/Login/Login.vue');
const Loged = () => import('@/components/Loged.vue');
const Home = () => import('@/components/Home/Home.vue');
//引入新增借款组件
const NewLoans = () => import('@/components/LoanManage/NewLoans.vue');
//引入新标维护组件
const NewStence = () => import('@/components/LoanManage/NewStence.vue');
//引入借款审核组件
const LoanAuid = () => import('@/components/LoanManage/LoanAuid.vue');
const Auid = () => import('@/components/LoanManage/AuidChild/Auid.vue');
const Examine = () => import('@/components/LoanManage/AuidChild/Examine.vue');
//引入标的上架组件
const BidFrame = () => import('@/components/LoanManage/BidFrame.vue');
const BidFrameHome = () => import('@/components/LoanManage/MaintainChild/BidFrameHome.vue');
const Maintain = () => import('@/components/LoanManage/MaintainChild/Maintain.vue');
// const Checkbox = () => import('@/components/LoanManage/MaintainChild/Checkbox.vue')
//引入充值记录组件
const RechargeRecord = () => import('@/components/RecordMa/RechargeRecord.vue');
//引入提现记录组件
const WithdrawRecord = () => import('@/components/RecordMa/WithdrawRecord.vue');
//引入提现审核组件
const Withdraw = () => import('@/components/RecordMa/Withdraw.vue');
//引入提现审核组件-表单子组件
const WithdrawReview = () => import('@/components/RecordMa/WithdrawReview.vue');
//引入提现审核详情组件
const Reviewdetails = () => import('@/components/RecordMa/Reviewdetails.vue');
//进行中标的管理组件
const TenderingManage = () => import('@/components/LoanManage/TenderingManage.vue');
//满标复审组件
const TenderFullReview = () => import('@/components/LoanManage/TenderFullReview.vue');
const TenderFullReviewHome = () => import('@/components/LoanManage/TenderFullReviewChildren/TenderFullReviewHome.vue');
//进行复审操作的组件
const TenderFullReviewRedo = () => import('@/components/LoanManage/TenderFullReviewChildren/TenderFullReviewRedo.vue');
//所有借款标组件
const TenderAll = () => import('@/components/LoanManage/TenderAll.vue');
//投资记录组件
const InvestRecord = () => import('@/components/LoanManage/InvestRecord.vue');
//借款标分类组件
const TenderCategory = () => import('@/components/LoanManage/TenderCategory.vue');
//引入会员管理/新增借款用户
const AddUser = () => import('@/components/Member/AddUser.vue');
//引入会员管理/借款用户管理子
const BorrowUser = () => import('@/components/Member/BorrowUser.vue');
//引入会员管理/投资用户管理
const InvUser = () => import('@/components/Member/InvUser.vue');

//引入会员新增用户资料主要
const BorrowUserHome = () =>import('@/components/Member/BorrowUserHome.vue')
//引入会员新增用户资料子
const BorrowUserChild = () =>import('@/components/Member/child_member/BorrowUserChild.vue')

//引入会员新增用户资料
const Borrowuser = () => import('@/components/Member/BorrowUser.vue')

//引入用户资金
const UserCapital = () => import('@/components/RecordMa/UserCapital.vue');
//引入资金日志
const CapitalJournal = () => import('@/components/RecordMa/CapitalJournal.vue');
// 引入平台资金
const Platformfunds = () => import('@/components/RecordMa/Platformfunds.vue');


//引入投资用户表单子组件1
const InvUserChildren1 = () => import('@/components/Member/InvUserChild1.vue');
// 引入投资管理修改资料页面
const inv_update = () => import('@/components/Member/child_member/inv_update.vue');
// 引入投资管理密码管理
const inv_pwd = () => import('@/components/Member/child_member/inv_pwd.vue');

// Platformfunds
// 引入还款管理
const RepaymentManagement = () => import('@/components/Repayment/RepaymentManagement');
// 引入还款记录
const RepaymentHistory = () => import('@/components/Repayment/RepaymentHistory');
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/Login',
      name: 'Loged',
      component: Loged,
      children:[
        {
          path: '/Home',
          name: 'Home',
          component: Home,
        },
        //新增借款页面路由
        {
          path: '/NewLoans',
          name: 'NewLoans',
          component: NewLoans
        },
        //新标维护页面路由
        {
          path: '/NewStence',
          name: 'NewStence',
          component: NewStence
        },
        //借款审核页面路由
        {
          path: '/LoanAuid',
          name: 'LoanAuid',
          redirect:'/Auid',
          component: LoanAuid,
          children: [{
            path: "/Auid",
            name: "Auid",
            component: Auid,

          }, {
            path: "Examine",
            name: "Examine",
            component: Examine,
          }]
        },
        //标的上架
        {
          path: '/BidFrame',
          name: 'BidFrame',
          redirect: '/BidFrameHome',
          component: BidFrame,
          children: [{
            path: '/BidFrameHome',
            name: 'BidFrameHome',
            component: BidFrameHome,
          },
            {
              path: 'Maintain',
              name: 'Maintain',
              component: Maintain,
            }
          ]
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
          redirect: '/Withdraw',
          component: WithdrawReview,
          children: [{
            path: '/Withdraw',
            name: 'Withdraw',
            component: Withdraw,
          },
            { // 提现审核详情子路由
              path: 'Reviewdetails',
              name: 'Reviewdetails',
              component: Reviewdetails,
            }
          ]
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
          redirect: '/TenderFullReviewHome',
          component: TenderFullReview,
          children: [
            {
              path: '/TenderFullReviewHome',
              name: 'TenderFullReviewHome',
              component: TenderFullReviewHome,
            },
            {
              path: '/TenderFullReviewRedo',
              name: 'TenderFullReviewRedo',
              component: TenderFullReviewRedo,
            }
          ]
        },
        //所有借款标路由
        {
          path: '/TenderAll',
          name: 'TenderAll',
          component: TenderAll
        },
        //投资记录路由
        {
          path: '/InvestRecord',
          name: 'InvestRecord',
          component: InvestRecord
        },
        //借款标分类路由
        {
          path: '/TenderCategory',
          name: 'TenderCategory',
          component: TenderCategory,
        },
        //引入会员管理/新增借款用户
        {
          path: '/AddUser',
          name: 'AddUser',
          component: AddUser,
        },
        //引git会员管理/借款用户管理
        {
          path: '/BorrowUserHome',
          name: 'BorrowUserHome',
          component: BorrowUserHome,
          children: [
            {
              path: '',
              name: 'BorrowUser',
              component: BorrowUser,
            },
            {
              path: '',
              name: 'BorrowUser',
              component: BorrowUser,
            },

            {
              path: 'BorrowUserChild',
              name: 'BorrowUserChild',
              component: BorrowUserChild,
            }]
        },

        //引入会员管理/投资用户管理+子路由修改用户管理

        {
          path: '/InvUser',
          name: 'InvUser',
          redirect: '/InvUserChildren1',
          component: InvUser,
          children: [{
            path: '/InvUserChildren1',
            name: 'InvUserChildren1',
            component: InvUserChildren1,
          }, {
            path: '/inv_update',
            name: 'inv_update',
            component: inv_update,
          },
            {
              path: '/inv_pwd',
              name: 'inv_pwd',
              component: inv_pwd

            }
          ]
        },


        //引入用户资金
        {
          path: '/UserCapital',
          name: "UserCapital",
          component: UserCapital
        },

        //引入资金日志
        {
          path: '/CapitalJournal',
          name: "CapitalJournal",
          component: CapitalJournal
        },
        //引入平台资金
        {
          path: '/Platformfunds',
          name: "Platformfunds",
          component: Platformfunds
        },
        // 还款管理路由
        {
          path: '/RepaymentManagement',
          component:RepaymentManagement,
        },
        // 还款记录路由
        {
          path: '/RepaymentHistory',
          component:RepaymentHistory,
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login,
    }
  ]
})
