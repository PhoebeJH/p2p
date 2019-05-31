<template>
  <div id="details_app">
    <div class="tilte">
      <h2>提现审核详情</h2>
    </div>
    <div class="from1">
      <div class="title1">
        <h4>
          提现信息
          <span @click="isShow = !isShow" class="show">
            收起
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </h4>
      </div>
      <el-form ref="from1" :model="from1" label-width="150px" v-if="isShow">
        <el-form-item label="提现单号：">
          <span>1231231</span>
        </el-form-item>
        <el-form-item label="用户手机号码：">
          <span>13800000001</span>
        </el-form-item>
        <el-form-item label="真实姓名：">
          <span>陈一二</span>
        </el-form-item>
        <el-form-item label="用户类型：">
          <span>理财用户</span>
        </el-form-item>
        <el-form-item label="提现银行：">
          <span>招商银行</span>
        </el-form-item>
        <el-form-item label="银行账号：">
          <span>473821747823782</span>
        </el-form-item>
        <el-form-item label="提现金额：">
          <span>¥100.00</span>
        </el-form-item>
        <el-form-item label="提现手续费：">
          <span>¥2.00(2%)</span>
        </el-form-item>
        <el-form-item label="预计到账金额：">
          <span>¥98.00</span>
        </el-form-item>
        <el-form-item label="提交时间：">
          <span>2015-02-10  10:00:00</span>
        </el-form-item>
      </el-form>
    </div>

    <div class="from2">
      <div class="title1">
        <h4>
          用户资产
          <span @click="isShow1 = !isShow1" class="show">
            收起
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </h4>
      </div>
      <el-form ref="from1" :model="from1" label-width="150px" v-if="isShow1">
        <el-form-item label="总资产：">
          <span>¥12312.00</span>
        </el-form-item>
        <el-form-item label="冻结资金：">
          <span>¥0.00</span>
        </el-form-item>
        <el-form-item label="待收利息：">
          <span>¥12.00</span>
        </el-form-item>
        <el-form-item label="可提现金额：">
          <span>¥120.00</span>
        </el-form-item>
      </el-form>
    </div>

    <div class="from2">
      <div class="title1">
        <h4>
          最近提现记录
          <span @click="isShow1 = !isShow1" class="show">
            收起
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </h4>
      </div>
      <el-form ref="from1" :model="from1" label-width="150px" v-if="isShow1">
        <el-form-item label="总资产：">
          <span>¥12312.00</span>
        </el-form-item>
        <el-form-item label="冻结资金：">
          <span>¥0.00</span>
        </el-form-item>
        <el-form-item label="待收利息：">
          <span>¥12.00</span>
        </el-form-item>
        <el-form-item label="可提现金额：">
          <span>¥120.00</span>
        </el-form-item>
      </el-form>
    </div>

    <div class="from2">
      <div class="title1">
        <h4>
          审核
          <span @click="isShow1 = !isShow1" class="show">
            收起
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </h4>
      </div>
      <el-form ref="from1" :model="from1" label-width="150px" v-if="isShow1">
        <el-form-item label="总资产：">
          <span>¥12312.00</span>
        </el-form-item>
        <el-form-item label="冻结资金：">
          <span>¥0.00</span>
        </el-form-item>
        <el-form-item label="待收利息：">
          <span>¥12.00</span>
        </el-form-item>
        <el-form-item label="可提现金额：">
          <span>¥120.00</span>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: "Reviewdetails",
  data() {
    return {
      isShow: true,
      isshow1: true,
      from1: ""
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    }
  }
};
</script>

<style scoped>
#review-main-wrap >>> a {
  text-decoration: none;
  color: #409eff;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 14px;
}
.tilte1 {
  /* padding-top:20px; */
  margin-top: 20px;
}
/* 下拉 */
h4 {
  margin-top: 20px;
}
.show {
  font-size: 14px;
  /* color: aliceblue; */
  font-weight: normal;
  margin-left: 10px;
  /* margin-top:15px; */
}
/* from1 */
.el-form {
  margin-top: 30px;
  border: 1px solid #000;
}
.el-form-item {
  display: inline-block;
  width: 49%;
}
</style>