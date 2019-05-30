<template>
  <div id="app">
    <!-- 过滤器 -->
    <search/>
    <!-- 表格 -->
    <Table :getLoansList="getLoansList"></Table>
    <!-- 分页 -->
    <Pagination></Pagination>
    <!-- {{getLoansList}}  -->
  </div>
</template>

<script>
import search from "./Child/search";
import Table from "./Child/Table";
import Pagination from "./Child/Pagination";
export default {
  name: "LoanAuid",
  data(){
    return{
      getLoansList:[]
    }
  },
  components: {
    search,
    Table,
    Pagination
  },
  beforeMount() {
    this.getLoans();
  },
  methods: {
    getLoans(){
      this.Axios.get("http://rap2api.taobao.org/app/mock/177576/borrow").then(res=>{
        console.log(res)
        this.getLoansList = res.data.datas.data;
        console.log(this.getLoansList)
      }).catch(err=>{
        console.log(err)
      })
    }
  },
};
</script>

<style scoped>
#app {
  width: 85%;
}
</style>