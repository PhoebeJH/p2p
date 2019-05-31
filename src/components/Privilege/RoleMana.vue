
<template>
  <div>
    <h1>ROle</h1>
    <!-- top -->
    <nav>
      <div>
        <ul>
          <li></li>
        </ul>
      </div>
    </nav>

    <!-- 内容 -->
    <section>
      <div class="container">
        <div>
          <ul>
            <li>菜单yi</li>
            <li>菜单ei</li>
            <li>菜单si</li>
            <li>菜单ti</li>
          </ul>
          <p>+ 增加角色</p>
        </div>

        <div>
          <ul>
            <h3>客户</h3>
            <li>
              <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
            </li>
          </ul>

          <div>
            <el-checkbox
              :indeterminate="isIndeterminate"
              v-model="checkAll"
              @change="handleCheckAllChange"
            >全选</el-checkbox>
            <div style="margin: 15px 0;"></div>
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
              <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


 <script>
const cityOptions = ["查看", "编辑", "删除", "新增"];
export default {
  data() {
    return {
      value: true,

      checkAll: false,
      checkedCities: ["查看", "编辑"],
      cities: cityOptions,
      isIndeterminate: true
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>

<style lang="less" scoped>
@import url(./less/UserMana.less);
</style>




