<template>
  <div id="MaintainWrap">
    <div class="tilte">
      <h2>上架维护</h2>
    </div>
    <div class="from1">
      <div class="title1">
        <h4>
          基本信息
          <span @click="isShow = !isShow" class="show">
            收起
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </h4>
      </div>
      <el-form ref="from1" :model="from1" label-width="150px" v-if="isShow">
        <el-form-item label="借款名称：">
          <span>上海xx公司</span>
        </el-form-item>
        <el-form-item label="风险等级：">
          <span>较低等级</span>
        </el-form-item>
        <el-form-item label="借款方：">
          <span>上海x x x公司(13599090001)</span>
        </el-form-item>
        <el-form-item label="借款总金额：">
          <span>10000元</span>
        </el-form-item>
        <el-form-item label="年利率：">
          <span>12%</span>
        </el-form-item>
        <el-form-item label="资金用途：">
          <span>供应链周转</span>
        </el-form-item>
        <el-form-item label="借款期限：">
          <span>30天</span>
        </el-form-item>
        <el-form-item label="起息方式：">
          <span>成立计息</span>
        </el-form-item>
        <el-form-item label="还款方式：">
          <span>一次性还款</span>
        </el-form-item>
        <el-form-item label="借款管理费：">
          <span>0%</span>
        </el-form-item>
        <el-form-item label="利息管理费：">
          <span>0%</span>
        </el-form-item>
        <el-form-item label="逾期罚息利率：">
          <span>0%</span>
        </el-form-item>
      </el-form>
    </div>

    <div class="from2">
      <div class="title1">
        <h4>
          担保信息
          <span class="show">
            收起
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </h4>
      </div>
      <el-form ref="from2" :model="from2" label-width="150px">
        <el-form-item label="是否担保：">
          <span>是</span>
        </el-form-item>
        <el-form-item label="担保机构：">
          <span>上海泽润典当</span>
        </el-form-item>
        <el-form-item label="是否抵押：">
          <span>否</span>
        </el-form-item>
      </el-form>
    </div>

    <div class="from3">
      <div class="title1">
        <h4>
          借款资料
          <span class="show">
            收起
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </h4>
      </div>
      <el-form ref="from2" :model="from2" label-width="150px">
        <el-form-item label="是否担保：">
          <img
            src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
            width="200"
            height="100"
            alt
          >
        </el-form-item>
      </el-form>
    </div>

    <!-- 标的信息 -->
    <div class="from4">
      <div class="title1">
        <h4>
          标的信息
          <span class="show">
            收起
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
        </h4>
      </div>
      <el-form ref="from2" :model="from2" label-width="150px">
        <el-form-item label="*标名：">
          <el-input v-model="input" :disabled="true"></el-input>
        </el-form-item>
        <el-form-item label="*标的类型：">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="*最低起投金额：">
          <el-input placeholder="请输入0-99999的整数" v-model="input1"></el-input>
        </el-form-item>
        <!--递增金额：-->
        <el-form-item label="*递增金额：">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in option"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <!-- *最大可投金额： -->
        <el-form-item label="*最大可投金额：">
          <el-input placeholder="请输入>=最小可投且<=借款总额的正整数" v-model="input1"></el-input>
        </el-form-item>
        <!-- *募集时间： -->
        <el-form-item label="*募集时间：">
          <div class="block">
            <!-- <span class="demonstration"></span> -->
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </el-form-item>
        <!-- *上架时间： -->
        <el-form-item label="*上架时间：">
          <div class="block">
            <!-- <span class="demonstration"></span> -->
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </el-form-item>
        <!-- *开售时间： -->
        <el-form-item label="*开售时间：">
          <div class="block">
            <!-- <span class="demonstration"></span> -->
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </div>
        </el-form-item>
        <!-- *投资计息方式： -->
        <el-form-item label="*投资计息方式：">
          <el-radio v-model="radio" label="1">成交日</el-radio>
          <el-radio v-model="radio" label="2">T+1</el-radio>
          <el-radio v-model="radio" label="3">T+2</el-radio>
          <el-radio v-model="radio" label="4">成立计息</el-radio>
        </el-form-item>
      </el-form>
    </div>

    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  name: "Maintain",
  data() {
    return {
      isShow: true,
      // isshow1: true,
      from1: "",
      from2: "",
      input: "新手1号",
      input1: "",
      value1: "",
      radio: "1",
      options: [
        {
          value: "选项1",
          label: "车贷宝"
        },
        {
          value: "选项2",
          label: "房贷宝"
        },
        {
          value: "选项3",
          label: "新手标"
        },
        {
          value: "选项4",
          label: "供应链金融"
        }
      ],
      option: [
        {
          value: "选项1",
          label: "100元"
        },
        {
          value: "选项2",
          label: "200元"
        },
        {
          value: "选项3",
          label: "500元"
        },
        {
          value: "选项4",
          label: "1000元"
        }
      ]
    };
  },
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
    }
  }
};
</script>

<style scoped>
#review-main-wrap >>> a {
  text-decoration: none;
  color: #409eff;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 14px;
}
.tilte1 {
  /* padding-top:20px; */
  margin-top: 20px;
}
/* 下拉 */
h4 {
  margin-top: 20px;
}
.show {
  font-size: 14px;
  /* color: aliceblue; */
  font-weight: normal;
  margin-left: 10px;
  /* margin-top:15px; */
}
/* from1 */
.el-form {
  margin-top: 30px;
  border: 1px solid #000;
}
.el-form-item {
  display: inline-block;
  width: 49%;
}
</style>