<template>
  <div id="MaintainWrap">
    <div class="tilte">
      <h2>上架维护</h2>
    </div>
    <div class="from1">
      <div class="title1">
        <h4>基本信息</h4>
      </div>
      <!-- <el-from ref="from1" :model="from1" label-width="150px">
        <el-from-item label="借款名称">
          <span>上海xx公司</span>
        </el-from-item>
      </el-from> -->
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Maintain",
  data() {
    return {
      from1:""
    }
  },
};
</script>

<style scoped>
#review-main-wrap >>> a {
  text-decoration: none;
  color: #409eff;
}
</style>