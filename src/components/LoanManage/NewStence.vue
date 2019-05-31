<template>
  <div id="StenceWarp">
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
#StenceWarp {
  width: 100%;
  margin:0 auto;
}
</style>