<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <!-- <div class="title">
        <h2>招标管理</h2>
      </div>-->
      <el-table
        :data="getLoansList"
        stripe
        :header-cell-style="{color:'#333',backgroundColor:'#EBEEF5'}"
        style="width: 100%"
      >
        <el-table-column
          fixed
          prop="loan_id"
          label="编号"
          width="120"
        ></el-table-column>
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
            <el-button @click="handleClick(scope.row)" type="button" size="small">编辑</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" size="small">作废</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Table",
  components: {
    // Pagination
  },
  props: ["getLoansList"],
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
  computed: {},
  data() {
    return {
      tableData: []
    };
  },
  beforeMount() {
    // this.tableData = this.getLoansList;
    // console.log("xxx")
    // console.log(this.tableData)
    // for (let i = 0; i < this.getLoansList.length; i++) {
    //   this.tableData.push(this.getLoansList[i].data);
    // }
  }
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  padding-top: 30px;
}
.wrapper-content {
  width: 100%;
  margin: 0 auto;
}
</style>
