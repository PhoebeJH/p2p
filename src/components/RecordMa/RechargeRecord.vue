<template>
  <div id="app">
    <div id="nav">
      <!-- 搜索框 -->
      <Search/>
      <!-- 选择充值方式 -->
      <ReMode/>
      <!-- 选择状态 -->
      <Status/>
    </div>

    <!-- 表格 -->
    <Atable/>
  </div>
</template>

<script>
import Search from "./Subassembly/Search.vue";
import ReMode from "./Subassembly/ReMode";
import Status from "./Subassembly/Status";
import Atable from "./Subassembly/Atable";

export default {
  name: "RechargeRecord",
  components: {
    Search,
    ReMode,
    Status,
    Atable
  },
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },

  data() {
    return {};
  }
};
</script>

<style scoped>
#app {
  margin: 0;
  padding: 0;
  width: 85%;
}
#nav {
  /* width: 100%; */
  /* border: 1px solid green; */
}

</style>
