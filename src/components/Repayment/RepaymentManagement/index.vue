<template>
  <div>
    <RepaymentToolbar :search="search" />
    <RepaymentTable :data="tableData" />
  </div>
</template>

<script>
import RepaymentTable from "./components/RepaymentManagementTable";
import RepaymentToolbar from "./components/RepaymentManagementToolbar";
import { fetchRest } from "@/api";

export default {
  data() {
    return {
      search: {
        name: "",
        province: ""
      },

      loading: false,

      tableData: []
    };
  },
  watch: {
    search: {
      deep: true,
      immediate: true,
      handler: "fetchData"
    }
  },
  methods: {
    async fetchData() {
      this.loading = true;
      try {
        const { data } = await fetchRest();
        this.tableData = data;
      } catch (error) {
        // ...处理错误
      }
      this.loading = false;
    }
  },
  components: {
    RepaymentTable,
    RepaymentToolbar
  }
};
</script>