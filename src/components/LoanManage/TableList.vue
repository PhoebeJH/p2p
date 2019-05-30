<template>
  <div class="wrapper">
    <!--表格-->
    <el-table
      :data="tableData"
      stripe
      :header-cell-style="{color:'#333',backgroundColor:'#EBEEF5'}"
      style="width: 100%">
      <el-table-column
        v-for="(item,index) in tableHeadData"
        :key="index"
        v-if="index == 0"
        fixed
        prop=""
        :label="item">
      </el-table-column>
      <el-table-column v-else-if="index == tableHeadData.length-1"
        fixed="right"
        :label="item"
        width="100">
        <!--<template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"><router-link to="/">修改</router-link></el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button type="text" size="small">下架</el-button>
        </template>-->
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"><router-link to="/">修改</router-link></el-button>
          <el-divider direction="vertical"></el-divider>
          <el-button type="text" size="small">下架</el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-else
        prop=""
        :label="item">
      </el-table-column>
    </el-table>
    <!--分页-->
    <Pagination></Pagination>
  </div>
</template>

<script>
  import Pagination from './Pagination/Pagination';

  export default {
    name: "TableList",
    props:[
      "tableData",
      "tableHeadData",
      "optionData"
    ],
    data() {
      return {
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
