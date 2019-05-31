<template>
  <div id="review_app">
    <div class="title">
      <h2>提现审核</h2>
    </div>
    <div id="nav" style="display: block; width: 100%">
      <!-- 搜索框 -->
      <Search :searchOpt="searchOpt"/>
      <!-- 选择充值方式 -->
      <ReMode/>
      <!-- 选择状态 -->
      <Status/>
      <!-- 日期选择器 -->
      <DatePicke/>
      <!-- 导出按钮 el-icon-download -->
      <el-row
        style="margin-right: 0;position: absolute; top: 15px; right: 0;display: inline-block;"
      >
        <el-button plain>导出</el-button>
      </el-row>
    </div>

    <!-- 表格 -->
    <div class="wrapper" style="padding-top: 30px;display: block;">
      <div class="wrapper-content">
        <!-- <div class="title"><h2>招标管理</h2></div> -->
        <el-table
          :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
          stripe
          :header-cell-style="{color:'#333',backgroundColor:'#EBEEF5'}"
          style="width: 100%"
        >
          <el-table-column fixed prop="loan_id" label="充值单号" width="120"></el-table-column>
          <el-table-column prop="loan_money" label="用户手机" width="120"></el-table-column>
          <el-table-column prop="loan_money" label="真实姓名" width="100"></el-table-column>
          <el-table-column prop="loan_ deadline" label="用户来源" width="120"></el-table-column>
          <el-table-column prop="loan_ deadline" label="应用来源" width="100"></el-table-column>
          <el-table-column prop="loan_money" label="充值金额" width="100"></el-table-column>
          <el-table-column prop="loan_money" label="到账金额" width="100"></el-table-column>
          <el-table-column prop="loan_money" label="手续费" width="80"></el-table-column>
          <el-table-column prop="loan_money" label="充值方式" width="100"></el-table-column>
          <el-table-column prop="loan_money" label="交易流水号" width="150"></el-table-column>
          <el-table-column label="订单时间" width="160">
            <template slot-scope="scope">
              <p>{{ scope.row.loan_date | dateFormat }}</p>
            </template>
          </el-table-column>
          <el-table-column label="到账时间" width="160">
            <template slot-scope="scope">
              <p>{{ scope.row.loan_date | dateFormat }}</p>
            </template>
          </el-table-column>
          <el-table-column prop="status" label="状态" width="100"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">审核</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>

    <!-- 分页 -->
    <Pagination :total="total" :pagesize="pagesize" :currentPage="currentPage" :current_change="current_change" :handleSizeChange="handleSizeChange" />
  </div>
</template>

<script>
import Search from "./Subassembly/Search.vue";
import ReMode from "./Subassembly/ReMode";
import Status from "./Subassembly/Status";
// import Atable from "./Subassembly/Atable";
import Pagination from "./Subassembly/Pagination";
import DatePicke from "./Subassembly/DatePicke";

export default {
  name: "Withdraw",
  components: {
    Search,
    ReMode,
    Status,
    Pagination,
    DatePicke
    // Atable
  },
  methods: {
    handleClick(row) {
      console.log(row);
      window.sessionStorage.setItem("rows", JSON.stringify(row));
      console.log(this.$router);
      this.$router.push("/Reviewdetails");
    },
    current_change: function(currentPage) {
      this.currentPage = currentPage;
    },
    handleSizeChange(pagesize) {
      this.pagesize = pagesize;
    }
  },

  data() {
    return {
      tableData: [],
      currentPage: 1,
      pagesize: 5,
      total: 0,
      tableDatas: [
        {
          reId: "2017040031",
          userPhone: "13845456767",
          userName: "陈一",
          userSource: "Android注册",
          appSource: "IERFA2.0",
          reAmount: "￥1000.99",
          reHandlingFee: "￥10.99",
          arrivalAmount: "￥1000.99",
          reMode: "在线充值",
          tradingFlowNum: "1213213132132",
          orderTime: "2015-02-10 10:08:34",
          arrivalTime: "2015-02-10 11:08:34",
          status: "充值成功"
        }
      ],
      searchOpt: [
        { value: 1, label: "提现单号" },
        { value: 2, label: "用户手机" }
      ],
    };
  },
  created() {
    this.Axios.get("http://rap2api.taobao.org/app/mock/177576/borrow")
      .then(res => {
        this.tableData = res.data.datas.data;
        this.total = this.tableData.length;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
#review_app {
  margin: 0 auto;
  padding: 0;
  position: relative;
  /* border: 1px solid red; */
  /* width: 85%; */
}
#review_app > #nav {
  width: 100%;
  /* border: 1px solid rebeccapurple; */
}
</style>

