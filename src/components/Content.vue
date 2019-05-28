<template>
    <div class="ContentBox">
        <NavLeft/>
        <router-view/>
    </div>
</template>

<script>

import NavLeft from "./Nav/NavLeft.vue";

export default {
    name: 'Content',
    components:{
        NavLeft,
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
        display: flex;
        flex-flow: row nowrap;
    }
</style>
