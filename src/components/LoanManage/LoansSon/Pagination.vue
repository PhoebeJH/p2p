<template>
  <div class="wrapper">
    <el-pagination
      background
      layout="sizes, prev, pager, next"
      :total="800"
      :page-sizes="[100, 200, 300, 400]"
    ></el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination"
};
</script>

<style scoped>
.wrapper {
  /* padding-top:20px;  */
  position: relative;
}
.el-pagination {
  position: absolute;
  bottom: -100%;
  right: -10px;
  top: 20px;
}
</style>
