<template>
  <div id="review-home">
    <h1>满标复审</h1>
    <TableList
      :tableHeadData="tableHeadData"
      :tableData="tableData"
      :optionData="optionData"
    ></TableList>
  </div>
</template>

<script>
  import TableList from '../TableList';

    export default {
        name: "TenderFullReviewHome",
      data(){
          return {
            tableHeadData:['日期','姓名','操作'],
            tableData: [{
              date: '2016-05-02',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1518 弄',
              zip: 200333
            },
              {
              date: '2016-05-04',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1517 弄',
              zip: 200333
            },
              {
              date: '2016-05-01',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1519 弄',
              zip: 200333
            },
              {
              date: '2016-05-03',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1516 弄',
              zip: 200333
            },
              {
              date: '2016-05-03',
              name: '王小虎',
              province: '上海',
              city: '普陀区',
              address: '上海市普陀区金沙江路 1516 弄',
              zip: 200333
            }],
            optionData:[
              {
                name:"修改",
                action(){
                  console.log("修改了");
                },
              },
              {
                name:"下架",
                action(){
                  console.log("下架了");
                },
              }
            ]
          }
      },
      components:{
        TableList
      }
    }
</script>

<style scoped>

</style>
