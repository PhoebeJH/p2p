<template>
  <div id="app">
    <!-- 搜索框、过滤器 -->
    <search/>
    <!-- 表格 -->
    <Table/>
    <!-- 分页 -->
    <Pagination/>
  </div>
</template>

<script>
import Table from "./Child/Table";
import search from "./Child/search";
import Pagination from "./Child/Pagination";
export default {
  name: "NewLoans",
  components: {
    Table,
    search,
    Pagination
  },
  data() {
    return {};
  },
  created() {
  }
};
</script>  

<style scoped>
#app {
  width: 85%;
}
</style>