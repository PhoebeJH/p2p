<template>
  <div id="MaintainWrap">
    <div class="tilte">
      <h2>上架维护</h2>
    </div>
    <div class="content">
      <div class="from1">
        <div class="title1">
          <h4>基本信息</h4>
        </div>
        <el-form ref="from1" :model="from1" label-width="150px">
          <el-form-item label="借款名称：">
            <span>上海xx公司</span>
          </el-form-item>
          <el-form-item label="风险等级：">
            <span>较低等级</span>
          </el-form-item>
          <el-form-item label="借款方：">
            <span>上海x x x公司(13599090001)</span>
          </el-form-item>
          <el-form-item label="借款总金额：">
            <span>10000元</span>
          </el-form-item>
          <el-form-item label="年利率：">
            <span>12%</span>
          </el-form-item>
          <el-form-item label="资金用途：">
            <span>供应链周转</span>
          </el-form-item>
          <el-form-item label="借款期限：">
            <span>30天</span>
          </el-form-item>
          <el-form-item label="起息方式：">
            <span>成立计息</span>
          </el-form-item>
          <el-form-item label="还款方式：">
            <span>一次性还款</span>
          </el-form-item>
          <el-form-item label="借款管理费：">
            <span>0%</span>
          </el-form-item>
          <el-form-item label="利息管理费：">
            <span>0%</span>
          </el-form-item>
          <el-form-item label="逾期罚息利率：">
            <span>0%</span>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      from1: "",
      from2: ""
    };
  }
};
</script>

<style scoped>
.content {
  background-color: #fff;
}
</style>