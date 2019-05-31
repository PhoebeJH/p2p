<template>
  <div id="review-home">
    <h1>满标复审</h1>



    <el-table
      :data="tableData"
      style="width: 100%"
      :header-cell-style="{color:'#333',backgroundColor:'#EBEEF5'}"
    >
      <el-table-column
        fixed
        prop="date"
        label="借款编号"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="借款方"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="借款人手机"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="标名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="借款金额"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="年化利率"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="还款方式"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="期限"
        width="90">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="上架时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="开售时间"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="已投金额"
        width="120">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="投资进度"
        width="80">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="状态"
        width="80">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small">下架</el-button>
        </template>
      </el-table-column>
    </el-table>

    <Pagination></Pagination>

  </div>
</template>

<script>
  import Pagination from '../Pagination/Pagination';

    export default {
        name: "TenderFullReviewHome",
      components:{
        Pagination
      },
      methods: {
        handleClick(row) {
          console.log(row);
        },
      },
      data() {
        return {
          tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          }, {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333
          }, {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
          }, {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
          }]
        }
      }
    }
</script>

<style scoped>

#review-home{
  position: relative;
}
#review-home >>> .pagination-dom{
    right: 0;
    bottom: -15%;
}
</style>
