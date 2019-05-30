<template>
  <el-container>
    <el-header>
      <el-row :gutter="15">
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-input
              size="mini"
              v-model="input_phone"
              suffix-icon="el-icon-search"
              placeholder="搜索姓名"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="3">
          <div class="grid-content bg-purple">
            <el-input
              size="mini"
              v-model="input_phone"
              suffix-icon="el-icon-search"
              placeholder="搜索手机/用户名"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="3">
          <el-select size="mini" v-model="value" filterable placeholder="全部状态">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="2" :offset="16">
          <el-button plain size="mini">导出</el-button>
        </el-col>
      </el-row>
    </el-header>
    <el-main>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="act_number" label="用户编号" width="120"></el-table-column>
        <el-table-column prop="per_name" label="姓名/公司名称" width="120"></el-table-column>
        <el-table-column prop="per_phone" label="手机/用户名" width="120"></el-table-column>
        <el-table-column prop="borrower_email" label="借款人邮箱" width="120"></el-table-column>
        <el-table-column prop="act_state" label="锁定状态" width="300"></el-table-column>

        <el-table-column fixed prop="reg_time" label="注册时间" width="150"></el-table-column>
        <el-table-column fixed prop="register" label="最近登录" width="150"></el-table-column>
        <el-table-column fixed prop="user_source" label="用户来源" width="150"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"><router-link to='/BorrowInfor'>查看</router-link></el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-main>
    <el-pagination
      background
      layout="total,sizes,prev, pager, next"
      :page-sizes="[10, 25, 50, 100]"
      :page-size="10"
      :total="1000"
    ></el-pagination>
  </el-container>
</template>

<script>



export default {
  name: "BorrowUser",
  components: {},
  methods: {
    handleClick(row) {
      console.log(row);
    }
  },
 

  data() {

    return {
   
      input1: "",
      input2: "",
      options: [
        {
          value: "选项1",
          label: "锁定"
        },
        {
          value: "选项2",
          label: "正常"
        }
      ],
      value: "",

    input_phone:'17765929883',
    tableData:[],
        
    }
  },
   created(){
        this.Axios.get('http://rap2api.taobao.org/app/mock/177576/user').then(
            (res)=>{
                console.log(res.data);
                this.tableData=res.data.datas.data;
                console.log(this.tableData)
            }
        ).catch(
            (error)=>{
                console.log(error);

            }
        )
    },
}
</script>

<style scoped>
</style>
        