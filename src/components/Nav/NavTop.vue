<template>
  <ul class="navTop">
    <li>
      <span class="lock"></span>
    </li>
    <li>
      <input type="text" placeholder="业务搜索">
      <span class="search"></span>
    </li>
    <li>
      <span class="message"></span>
      <span class="line"></span>
      <span class="name">Mike Greene</span>
      <span class="headerImg"></span>
      <span class="el-icon-arrow-down"></span>
      <span class="line"></span>
      <span class="fullScreen"></span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavTop',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* @import url(); */
  @import "./../../assets/css/nav/navTop.css"
  /* .navTop{
    width: 100%;
    height: 60px;
    display: flex;
    border-bottom: 1px solid #eee;
    flex-flow: row nowrap;
    justify-content: space-between;
    background-color: #fff;
  }
  .navTop>li{
    margin: 0 10px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
  .navTop>li>span{
    margin: 0 15px;
  }
  .search::before{
    color:#222;
  } */
</style>
