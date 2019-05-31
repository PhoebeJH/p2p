<template>
  <div class="wrapper">
    <el-pagination
      class="pagination-dom"
      background
      layout="sizes, prev, pager, next"
      :total="800" :page-sizes="[100, 200, 300, 400]"

    >
    </el-pagination>
  </div>
</template>

<script>
    export default {
        name: "Pagination"
    }
</script>

<style scoped>
  .el-pagination{
    position: absolute;
  }
</style>
