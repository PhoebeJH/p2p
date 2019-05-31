<template>
  <div class="navLeft">
    <el-radio-group class="isCollapseIcon" v-model="isCollapse">
        <!-- <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button> -->
        <span class="collapseIcon" @click="turnOn"></span>
        <!-- <button @click="turnOn">on</button> -->
    </el-radio-group>
    <el-menu default-active="1-4-1" :unique-opened="true" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <!-- <el-submenu index="1">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">借贷管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="1-1">新增借贷</el-menu-item>
                <el-menu-item index="1-2">新标维护</el-menu-item>
                <el-menu-item index="1-3">借贷审核</el-menu-item>
                <el-menu-item index="1-4">新标上架</el-menu-item>
                <el-menu-item index="1-5">进行中标的管理</el-menu-item>
                <el-menu-item index="1-6">满标审核</el-menu-item>
                <el-menu-item index="1-7">所有借款标</el-menu-item>
                <el-menu-item index="1-8">投资记录</el-menu-item>
                <el-menu-item index="1-9">借款标类别</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

        <el-submenu index="2">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">还款管理</span>
          </template>
          <el-menu-item-group>
              <el-menu-item index="2-1">还款管理</el-menu-item>
              <el-menu-item index="2-2">还款记录</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">资金管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="3-1"><router-link to="/RechargeRecord">充值记录</router-link></el-menu-item>
                <el-menu-item index="3-2"><router-link to="/WithdrawRecord">提现记录</router-link></el-menu-item>
                <el-menu-item index="3-3"><router-link to="/WithdrawReview">提现审核</router-link></el-menu-item>
                <el-menu-item index="3-4">用户资金</el-menu-item>
                <el-menu-item index="3-5">资金日志</el-menu-item>
                <el-menu-item index="3-6">平台资金</el-menu-item>
            </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">会员管理</span>
            </template>
            <el-menu-item-group>
                <el-menu-item index="4-1">
                    <router-link to="/AddUser">新增用户</router-link>
                </el-menu-item>
                <el-menu-item index="4-2">
                    <router-link to="/InvUser">投资用户管理</router-link>
                </el-menu-item>
                <el-menu-item index="4-3">
                    <router-link to="/BorrowUser">借款用户管理</router-link>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu> -->

        <div class="setting">
            <router-link to="/"><span class="home"></span></router-link>
            <router-link to="/"><span class="message"></span></router-link>
            <!-- <span class="setIcon"></span> -->
            <router-link to="/"><span class="skin"></span></router-link>
            <router-link to="/"><span class="lock"></span></router-link>
        </div>
        <div class="userBox"> 
            <div>
                <img src="" alt="">
                <span class="userName">Sean Ngu</span>
                <span>Front end developer</span>
            </div>   
        </div>
        <div class="nullBox"></div> 
        <el-submenu v-for="(item,i) in navLeftList" :key="i" :index="i+''">
            <template slot="title">
                <div class="menuTitleBox">
                    <i :class="item.iconName"></i>
                    <span class="nemuTitle" slot="title">{{item.title}}</span>
                </div>
            </template>
            <el-menu-item-group>
                <el-menu-item 
                v-for="(childitem,childindex) in item.children" 
                :key="childindex" 
                :index="i+'-'+childindex">
                    <router-link class="routerLink" :to="childitem.url">{{childitem.title}}</router-link>
                </el-menu-item>
            </el-menu-item-group>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  name: 'NavLeft',
  data () {
    return {
        isCollapse: false,
        navLeftList:[],
    }
  },

  methods: {
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      turnOn(){
          this.isCollapse = !this.isCollapse ;
      }
  },

  created() {
      this.Axios.get("https://5cd808f00cc5100014f1e33e.mockapi.io/p2pMenu").then(
          (res) => {
            this.navLeftList = res.data.map(element => {
                    switch(element.title){
                        case "借贷管理":
                            element.iconName="jiedai";
                            break;
                        case "还款管理":
                            element.iconName="huankuan";
                            break;
                        case "资金管理":
                            element.iconName="money"
                            break;
                        case "会员管理":
                            element.iconName="vip";
                            break;
                        case "权限管理":
                            element.iconName="quanxian";
                            break;
                        default:
                            break;
                    }
                    return element;
            });
            // console.log(this.navLeftList);
            
          }
      ).catch(
          error => {
              console.log(error);
          }
      );
  },
  mounted(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "./../../assets/css/nav/navLeft.css";
</style>
