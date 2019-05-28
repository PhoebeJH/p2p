<template>
  <div id="app">
    <NavTop/>
    <Content/>

  </div>
</template>

<link type="text/css" rel="stylesheet" href="./static/layui/css/layui.css"/> 
    <script type="text/javascript" src="./static/layui/layui.js"></script>
<script>
	
  import NavTop from "./components/nav/NavTop.vue"
  import Content from "./components/Content.vue"
  export default {
    name: 'App',
    components:{
      NavTop,
      Content,
    }
  }
</script>


<style>

  body{
    margin: 0;
    padding: 0;
  }

</style>
