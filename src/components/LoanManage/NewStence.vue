<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <div class="title">
        <h2>新标维护</h2>
      </div>
      <search></search>
      <el-table
        :data="getLoansList"
        stripe
        :header-cell-style="{color:'#333',backgroundColor:'#EBEEF5'}"
        style="width: 100%"
      >
        <el-table-column fixed prop="loan_id" label="编号" width="120"></el-table-column>
        <el-table-column prop="loan_use" label="借款方" width="120"></el-table-column>
        <el-table-column prop="province" label="借款人手机" width="120"></el-table-column>
        <el-table-column prop="city" label="标名" width="120"></el-table-column>
        <el-table-column prop="address" label="担保机构" width="120"></el-table-column>
        <el-table-column prop="zip" label="类型" width="120"></el-table-column>
        <el-table-column prop="loan_money" label="借款金额" width="120"></el-table-column>
        <el-table-column prop="loan_money_rate" label="年化利率" width="120"></el-table-column>
        <el-table-column prop="payments_mode" label="还款方式" width="120"></el-table-column>
        <el-table-column prop="loan_ deadline" label="期限" width="120"></el-table-column>
        <el-table-column prop="loan_date" label="添加时间" width="150"></el-table-column>
        <el-table-column prop="state" label="状态" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" width="140">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="button" size="small">
              <router-link :to="{name:'Examine'}">编辑</router-link>
            </el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" size="small">作废</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
// import Table from "./Child/Table";
import search from "./Child/search";
import Pagination from "./Child/Pagination";
export default {
  name: "NewLoans",
  components: {
    // Table,
    search,
    Pagination
  },
  data() {
    return {
      getLoansList:[]
    };
  },
  created() {}
};
</script>  

<style scoped>
.wrapper {
  width: 100%;
  /* padding-top: 20px; */
  margin: 0 auto;
}
.wrapper-content {
  width: 100%;
  margin: 0 auto;
}
.el-table{
  margin-top: 20px;
}
.title{
  width: 100%;
  height: 40px;
  background-color: #006d75;
}
h2{
  color: #fff;
  line-height: 40px;
  margin-left:10px;

}
</style>