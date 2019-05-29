<template>
  <div id="app">
    <!-- 搜索框、过滤器 -->
    <searchSon/>
    <!-- 表格 -->
    <Table/>
    <!-- 分页 -->
    <Pagination/>
  </div>
</template>

<script>
import Table from "./LoansSon/Table";
import searchSon from "./LoansSon/searchSon";
import Pagination from "./LoansSon/Pagination";
export default {
  name: "NewLoans",
  components: {
    Table,
    searchSon,
    Pagination
  },
  data() {
    return {};
  },
  getNewsList() {
    this.axios
      .get("http://rap2api.taobao.org/app/mock/177576/borrow")
      .then(response => {
        console.log(data)
        // this.newsList = response.data.data;
      })
      .catch(response => {
        console.log(response);
      });
  }
};
</script>  

<style scoped>
#app {
  width: 85%;
}
</style>