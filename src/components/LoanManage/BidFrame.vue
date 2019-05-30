<template>
  <div id="app">
    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="借款方" value="1"></el-option>
          <el-option label="借款方手机" value="2"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
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
              <el-button @click="handleClick(scope.row)" type="button" size="small">编辑</el-button>
              <el-divider direction="vertical"></el-divider>
              <el-button type="text" size="small">作废</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BidFrame",
  components: {},
  data() {
    return {
      input5: "",
      select: "",
      getLoansList:[]
    };
  }
};
</script>

<style scoped>
#app{
  width:85%;
}
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
/* table */
.wrapper {
  width: 100%;
  padding-top: 30px;
}
.wrapper-content {
  width: 100%;
  margin: 0 auto;
}
</style>