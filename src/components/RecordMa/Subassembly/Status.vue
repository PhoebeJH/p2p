<template>

    <div style="margin-top: 15px; margin-left: 20px;display: inline-block;">
        <!-- 状态 -->
        <el-select v-model="statusSel" placeholder="请选择" class="selectWidth">
            <el-option
                v-for="item in statusOpt"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            ></el-option>
        </el-select>
    </div>

</template>

<script>
export default {
    name: "Status",
    data () {
      return {
        statusSel: "",
        statusOpt: [
          { value: 1, label: "全部状态" },
          { value: 2, label: "充值成功" },
          { value: 3, label: "充值失败" },
          { value: 4, label: "充值处理中" },
          { value: 5, label: "银行转账" },
        ],
      }
    }
};
</script>

<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>