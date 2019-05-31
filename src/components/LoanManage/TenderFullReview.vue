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
    width: 80%;
    margin: 0 auto;
  }
#review-main-wrap >>> a{
  text-decoration: none;
  color: #409EFF;
}
</style>
