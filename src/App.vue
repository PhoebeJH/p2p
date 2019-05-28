<template>
  <div id="app">
    <NavTop/>
    <Content/>

  </div>
</template>

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
