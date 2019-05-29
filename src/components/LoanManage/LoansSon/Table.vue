<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <!-- <div class="title">
        <h2>招标管理</h2>
      </div> -->
      <el-table
        :data="tableData"
        stripe
        :header-cell-style="{color:'#333',backgroundColor:'#EBEEF5'}"
        style="width: 100%"
      >
        <el-table-column fixed prop="date" label="编号" width="120"></el-table-column>
          <el-table-column prop="name" label="借款方" width="120"></el-table-column>
          <el-table-column prop="province" label="借款人手机" width="120"></el-table-column>
          <el-table-column prop="city" label="标名" width="120"></el-table-column>
          <el-table-column prop="address" label="担保机构" width="120"></el-table-column>
          <el-table-column prop="zip" label="类型" width="120"></el-table-column>
          <el-table-column prop="zip" label="借款金额" width="120"></el-table-column>
          <el-table-column prop="zip" label="年化利率" width="120"></el-table-column>
          <el-table-column prop="zip" label="还款方式" width="120"></el-table-column>
          <el-table-column prop="zip" label="期限" width="120"></el-table-column>
          <el-table-column prop="zip" label="添加时间" width="150"></el-table-column>
          <el-table-column prop="state" label="状态" width="120"></el-table-column>
          <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" size="small">作废</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页-->
      <!--<Pagination></Pagination>-->
    </div>
  </div>
</template>

<script>
// import Pagination from './Pagination/Pagination';

export default {
  name: "TenderingManage",
  components: {
    // Pagination
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区",
          zip: 200333,
          state:"新标待审核"
        }
      ]
    };
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
