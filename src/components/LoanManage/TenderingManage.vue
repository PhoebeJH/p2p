<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <div class="title"><h2>招标管理</h2></div>
      <div class="searchWrap">
        <div>
          <el-input placeholder="请输入内容" v-model="input5" class="input-with-select">
            <el-select v-model="searchSel" slot="prepend" placeholder="请选择">
              <el-option
                v-for="item in searchOpt"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </div>
      <!--表格-->
      <el-table
        :data="tableData"
        stripe
        :header-cell-style="{color:'#333',backgroundColor:'#EBEEF5'}"
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="日期"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="province"
          label="省份"
          width="120">
        </el-table-column>
        <el-table-column
          prop="city"
          label="市区"
          width="120">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          width="300">
        </el-table-column>
        <el-table-column
          prop="zip"
          label="邮编"
          width="120">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
            <el-divider direction="vertical"></el-divider>
            <el-button type="text" size="small">下架</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!--分页-->
      <Pagination></Pagination>
    </div>
  </div>
</template>

<script>
  import Pagination from './Pagination/Pagination';

  export default {
    name: "TenderingManage",
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
        }],
        input5: "",
        searchSel: "",
        modeSel: "",
        searchOpt: [
          { value: 1, label: "借款方" },
          { value: 2, label: "借款人手机" },
        ]
      }
    },
    components:{
      Pagination
    },
    methods: {
      handleClick(row) {
        console.log(row);
      }
    }
  }
</script>

<style scoped>
  .wrapper{
    width: 100%;
    padding-top: 30px;
  }
  .wrapper-content{
    width: 90%;
    margin: 0 auto;
  }
  .searchWrap{
    display: flex;
    margin-bottom: 30px;
  }
  .searchWrap>div{
    flex-basis: 30%;
  }
  .searchWrap >>> .el-select .el-input {
    width: 130px;
  }
  .searchWrap >>> .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
