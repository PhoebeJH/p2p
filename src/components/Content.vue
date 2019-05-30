<template>
    <div class="ContentBox">
        <NavTop/>
        <router-view/>
    </div>
</template>

<script>

import NavTop from "./Nav/NavTop";

export default {
    name: 'Content',
    components:{
        NavTop,
    },

    data () {
        return {
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .ContentBox{
        width: 100%;
        height: calc(100vh - 70px);
        overflow-y: auto;
    }
</style>
