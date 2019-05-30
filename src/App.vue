<template>
  <div id="app">
    <NavLeft/>
    <Content/>
  </div>
</template>

<script>

  import NavLeft from "./components/nav/NavLeft";
  import Content from "./components/Content";

  export default {
    name: 'App',
    components:{
      NavLeft,
      Content,
    }
  }
</script>


<style>
  @import "./assets/css/public.css";
  *{
    margin: 0;
    padding: 0;
  }
  ul{
    list-style: none;
  }
  body{
    background-color: #f8f8f8;
  }
  #app{
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
  }
  /* iconfont字体 */
  @font-face {
    font-family: iconfont;
    src: url('./assets/iconfont.ttf');
  }
</style>
