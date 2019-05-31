<template>
    <div class="ContentBox">
        <router-view/>
    </div>
</template>

<script>

export default {
    name: 'Content',
    components:{
    },

    data () {
        return {
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    @import "./../assets/css/content.css";
</style>
