<template>
  <el-button :type="btnType" @click="fun">{{btnText}}</el-button>
</template>

<script>
    export default {
        name: "Button",
      props:["btnType","btnText","funName"],
      methods:{
        fun(){
            this.$emit(this.funName);
        }
      },
      data(){
          return {

          }
      }
    }
</script>

<style scoped>
  .el-button{
    width: 120px;
    height: 45px;
  }
  .el-button:hover{
    box-shadow: 2px 2px 5px #adadad;
  }
</style>
