<template>
    <div class="content_update">
        <!-- 基本信息 -->
        <div>
            <p>基本信息</p>
            <ul>
                <li>手机号:<input type="text" v-model="phone" disabled/></li>
                <li>真实姓名:<input type="text" v-model="pre_name" disabled/></li>
                <li>身份证号:<input type="text" v-model="entitle" disabled/></li>    
            </ul>
        </div>

        <!-- 银行卡信息 -->
        <div>
            <p>银行卡信息</p>
            <ul>
                <li>银行名称：<input type="text" v-model="blink" disabled/></li>
                <li>支行名称：<input type="text" v-model="pre_name" disabled/></li>
                <li>银行卡号：<input type="text" v-model="pre_name" disabled/></li>    
            </ul>
        </div>

        <!-- 操作 -->
        <div>
            <p>操作</p>
            <div>
                <span>状态</span>
                <input type="radio" name="applicationSystem" value="1" checked>正常
                <input type="radio" name="applicationSystem" value="2">锁定
            </div>
            <div class="textarea">
                <textarea name="" id="" cols="90" rows="6"></textarea>
            </div>  
        </div>

        <!-- 按钮组 -->
        <div>
            <el-button type="primary" @click="open2">确定保存</el-button>
            <el-button @click="Pathto">取消修改</el-button>
        </div>

    </div>
</template>

<script>
export default {
    name:'inv_update',
    components:{},

    created(){
        // 取invUserChild1里传过来的sessionStororage
        var json = JSON.parse(window.sessionStorage.getItem('rows'));
        // 需要的数据存放在data
        this.phone = json.per_phone;
        this.pre_name = json.per_name;
        this.entitle = json.int_entitle;
        this.blink = json.act_message
        console.log(json)
    },

    data() {
        return {
            // session闯过来需要的数据字段
            phone:"",
            pre_name:"",
            entitle:"",
            blink:""
            // 
        }
    },
    methods: {

        open2() {
            this.$confirm('您将修改此内容，确定将会永久更改?', '修改提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(
                () => {
                    this.$message({
                        type: 'success',
                        message: '保存成功!',
                    });
            })
            .catch(
                () => {
                    this.$message({
                        type: 'info',
                        message: '已取消修改'
                    });          
                });
        },
        Pathto(){
            this.$router.push('/InvUser')   
        },  
    }
}
</script>


// 样式
<style scoped>
ul{
    padding: 0;
}
li{
    list-style-type: none;
}

/* 信息页面样式 基本信息+银行卡信息+操作 */
.content_update>div{
    margin: 50px 0;
}
.content_update>div>p{
    font-family: '微软雅黑';
    font-size: 18px;
    font-weight: 500;
    color: rgba(64, 158, 255, 1);
}
.content_update>div>ul{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    margin:25px 0;
}
.content_update>div>ul input{
    margin: 0 20px;
    background: #fff;
    border: 0;
    height: 22px;
    font-weight: 500;
    width: 150px;
    text-align: left;
}
.content_update>div>ul li{
    margin: 3px 0;
}

.textarea{
    margin-top: 30px;
}



</style>
