<template>
    <div class="Home">
        <div class="homeSearch">
            <Search/>
        </div>
        <div class="homeNumberShow">
            <NumberShow title="注册用户(人)" number="9317" newNumber="3人" iconName="people"/>
            <NumberShow title="投资总额(万元)" number="4356.08" newNumber="1.10万元" iconName="touziNumber"/>
            <NumberShow title="借款总额(万元)" number="5356.08" newNumber="1.10万元" iconName="daikuanNumber"/>
            <NumberShow title="用户累计收益(万元)" number="4356.08" newNumber="1.10万元" iconName="shouyi"/>
        </div>
        <div class="homeNeedDo">
            <NeedDo/>
        </div>
    </div>
</template>

<script>

import Search from "./children/Search";
import NumberShow from "./children/NumberShow";
import NeedDo from "./children/NeedDo";

export default {
    name: 'Home',
    components:{
        Search,
        NumberShow,
        NeedDo,
    },

    data () {
        return {
            
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    @import "./../../assets/css/home/home.css";
</style>
