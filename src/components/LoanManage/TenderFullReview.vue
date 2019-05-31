<template>
    <div id="review-main-wrap">
      <router-view></router-view>
    </div>
</template>

<script>

    export default {
        name: "TenderFullReview"
    }
</script>

<style scoped>
  #review-main-wrap{
    margin: 50px auto 0;
  }
#review-main-wrap >>> a{
  text-decoration: none;
  color: #409EFF;
}
  #review-main-wrap >>> .searchWrap{
    display: flex;
    margin-bottom: 30px;
  }
  #review-main-wrap >>> .searchWrap>div{
    flex-basis: 40%;
  }
  #review-main-wrap >>> .searchWrap  .el-select .el-input {
    width: 130px;
  }
  #review-main-wrap >>> .searchWrap  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
