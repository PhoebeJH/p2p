<template>
    <div class="LoginBox">
        <div class="log">
            <span class="logIcon"></span>
            <h1>神州数码互联网金融管理平台</h1>
        </div>
        <div class="input">
            <p>登录/Login</p>
            <input type="text">
            <input type="passworld" name="" id="">
            <div class="seed">
                <span class="line"></span>
                <span class="box"></span>
            </div>
            <div class="loginBtn">登录</div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'LoginBox',
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
    @import './../../../assets/css/login/LoginBox.css';
</style>
