<template>
	<el-container>
		<el-header>
			<el-row :gutter="15">
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<el-input size="small" v-model="input_phone" suffix-icon="el-icon-search" placeholder="搜索流水号"></el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<el-select size="small" v-model="value" filterable placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-col>
				<el-col :span="2" :offset="16">
					<el-button plain size="small" @click="exportExcel">导出</el-button>
				</el-col>
			</el-row>
		</el-header>
		<el-header>
			<el-row :gutter="15">
				<el-col :span="24">
					<el-col :span="24" class="platBorder">
						<el-col :span="18">
							<div>平台账户余额: <span class="platOrange">123123.12</span>元</div>
						</el-col>
						<el-col :span="3">
							<el-button size="medium" type="primary">平台充值</el-button>
						</el-col>
						<el-col :span="3">
							<el-button size="medium" type="primary">平台提现</el-button>
						</el-col>
					</el-col>

				</el-col>

			</el-row>
		</el-header>
		<el-main>
			<el-table id="moneyTable" stripe style="font-size: 11px;" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
			 :header-cell-style="getRowClass" :cell-style="{'text-align':'center'}">

				<el-table-column prop="act_id" label="流水号" align="center">
				</el-table-column>
				<el-table-column prop="real_name.real" label="类型" align="center">
				</el-table-column>
				<el-table-column prop="act_states.state" label="出入帐" align="center">
				</el-table-column>
				<el-table-column prop="per_bCard" label="操作金额" align="center">
				</el-table-column>
				<el-table-column prop="act_id" label="手续费" align="center">
				</el-table-column>
				<el-table-column prop="act_id" label="操作前余额" align="center">
				</el-table-column>
				<el-table-column prop="act_id" label="操作后余额" align="center">
				</el-table-column>
				<el-table-column prop="act_states.state" label="状态" align="center">
				</el-table-column>


				<el-table-column prop="act_states.state" label="备注" align="center">
				</el-table-column>
				<el-table-column prop="reg_time" width='150' label="操作时间" align="center">
				</el-table-column>

			</el-table>
		</el-main>
		<el-footer style="margin:20px 0 10px">
			<el-row>
				<el-col style="float:right">
					<el-pagination background layout="total,prev, pager, next,sizes" :page-sizes="[5,10, 25, 50, 100]" :page-size="pagesize"
					 :total="total" :current-page="currentPage"  @size-change="handleSizeChange" @current-change="current_change">
					</el-pagination>
				</el-col>

			</el-row>

		</el-footer>
	</el-container>

</template>
<script>
	import FileSaver from 'file-saver';
	import XLSX from 'xlsx';
	export default {
		name: 'Platformfunds',
		data() {
			// const item = {
			// 	userId: '201709091123',
			// 	name: '百事可乐',
			// 	phone: '13990722322',
			// 	total_assets: '现金红包',
			// 	Account: '出帐',
			// 	total_monney: '￥20000',
			// 	balance: 0,
			// 	Freezing_amount: 0,
			// 	amount_collected: 0,
			// 	Cumulative_investment: 0,
			// 	Remarks: "出入帐明细",
			// 	Accumulated_loan: '2017-01-01 12:23:33',
			// 	Accumulated_repayment: 0,
			// 	repayment_balance: 0,
			// 	state: '完成'
			// };

			return {
				// tableData: Array(20).fill(item),
				tableData:  [
      {
        "per_name": "*HT&4",
        "per_sex": "n(",
        "per_phone": 23059843866,
        "act_login": "()X*zn(zdG",
        "per_email": "8gEMqM@*hB",
        "per_password": "wMZyDqndPt",
        "sharer": "7rD[0",
        "act_message": "xBAxo%6so4",
        "per_bCard": 157186104,
        "act_id": 496660044,
        "per_number": 47690074,
        "act_states": {
          "state": "冻结"
        },
        "per_source": "lTm9w",
        "per_balance": 717607351,
        "real_name": {
          "real": "未认证"
        },
        "lend_entitle ": 231739060,
        "int_entitle ": "gI1qhvcs&FuyOLlXmuA(",
        "lend_money": 299480584,
        "int_money": 476636689,
        "reg_time": "2019-05-29T11:53:12.948Z",
        "register": "2019-05-29T11:53:12.948Z"
      },
      {
        "per_name": "pUrku",
        "per_sex": "6@",
        "per_phone": 19046972978,
        "act_login": "25B*U5!n8v",
        "per_email": "RBn^qwk3]@",
        "per_password": "T$ixD[[OQ)",
        "sharer": "PI3sV",
        "act_message": "3qN7Ol5VA&",
        "per_bCard": 254445341,
        "act_id": 619739196,
        "per_number": 725908206,
        "act_states": {
          "state": "冻结"
        },
        "per_source": "5usXy",
        "per_balance": 32826825,
        "real_name": {
          "real": "未认证"
        },
        "lend_entitle ": 292421580,
        "int_entitle ": "xnvBdcr*pzyzCn2V*iJ%",
        "lend_money": 986799203,
        "int_money": 725997730,
        "reg_time": "2019-05-29T11:53:12.948Z",
        "register": "2019-05-29T11:53:12.948Z"
      },
      {
        "per_name": "AOseJ",
        "per_sex": "c4",
        "per_phone": 27582615884,
        "act_login": "Ud5Nf#2OVO",
        "per_email": "c*v53VS!ac",
        "per_password": "XA]NTrjFTL",
        "sharer": "lG4)Z",
        "act_message": "SK9bey4r]l",
        "per_bCard": 168076728,
        "act_id": 73118050,
        "per_number": 371772188,
        "act_states": {
          "state": "冻结"
        },
        "per_source": "C]dn9",
        "per_balance": 916227014,
        "real_name": {
          "real": "未认证"
        },
        "lend_entitle ": 762531363,
        "int_entitle ": "6phuT]phZO%1N1XQ0&U3",
        "lend_money": 104403375,
        "int_money": 304102755,
        "reg_time": "2019-05-29T11:53:12.948Z",
        "register": "2019-05-29T11:53:12.948Z"
      },
      {
        "per_name": "VsZ06",
        "per_sex": "%7",
        "per_phone": 65102263180,
        "act_login": "1#YOBQQ$jC",
        "per_email": "Pc]e5bWZmS",
        "per_password": "d0HfaFZD7r",
        "sharer": "h!c^[",
        "act_message": "n@*M4)bYu#",
        "per_bCard": 13172786,
        "act_id": 701773220,
        "per_number": 674962195,
        "act_states": {
          "state": "冻结"
        },
        "per_source": "pqosA",
        "per_balance": 330365271,
        "real_name": {
          "real": "未认证"
        },
        "lend_entitle ": 7922362,
        "int_entitle ": "V%X(N#oWd^$M4Cv&*@G@",
        "lend_money": 666970222,
        "int_money": 201487227,
        "reg_time": "2019-05-29T11:53:12.948Z",
        "register": "2019-05-29T11:53:12.948Z"
      },
      {
        "per_name": "^[TC8",
        "per_sex": "%H",
        "per_phone": 17614573693,
        "act_login": "zCu*o)deF@",
        "per_email": "BVA@sZwq2D",
        "per_password": "F*KwUUAZBL",
        "sharer": "eKl(h",
        "act_message": "EIFQW6cVMx",
        "per_bCard": 293600345,
        "act_id": 277459794,
        "per_number": 500117115,
        "act_states": {
          "state": "冻结"
        },
        "per_source": "Ax*kr",
        "per_balance": 571745457,
        "real_name": {
          "real": "未认证"
        },
        "lend_entitle ": 577658428,
        "int_entitle ": "vmQHQsl(naUi5$1Qk!5y",
        "lend_money": 234941567,
        "int_money": 43306873,
        "reg_time": "2019-05-29T11:53:12.948Z",
        "register": "2019-05-29T11:53:12.948Z"
      },
      {
        "per_name": "1F073",
        "per_sex": "Q$",
        "per_phone": 29083823044,
        "act_login": ")bDVmHZn%2",
        "per_email": "kRfKiRlH!8",
        "per_password": "UeeBSiKQov",
        "sharer": "Xob3&",
        "act_message": "Sgkg*p*1*H",
        "per_bCard": 673098603,
        "act_id": 887246207,
        "per_number": 82744455,
        "act_states": {
          "state": "冻结"
        },
        "per_source": "l&usW",
        "per_balance": 755894581,
        "real_name": {
          "real": "未认证"
        },
        "lend_entitle ": 323732305,
        "int_entitle ": "#vx@9J8WUor$TYn4tbeY",
        "lend_money": 337817983,
        "int_money": 796014205,
        "reg_time": "2019-05-29T11:53:12.949Z",
        "register": "2019-05-29T11:53:12.949Z"
      },
      {
        "per_name": "]BRcL",
        "per_sex": "UD",
        "per_phone": 52836635021,
        "act_login": "ZrFZtorr)r",
        "per_email": "nQOiD#Z!Jw",
        "per_password": "AENye!62yH",
        "sharer": "4uuem",
        "act_message": "cFK9N74mOq",
        "per_bCard": 153566663,
        "act_id": 149354915,
        "per_number": 218623972,
        "act_states": {
          "state": "冻结"
        },
        "per_source": "!U*DY",
        "per_balance": 291101230,
        "real_name": {
          "real": "未认证"
        },
        "lend_entitle ": 746489792,
        "int_entitle ": "XVVP&$mZr)S@Sn$k2c7]",
        "lend_money": 428516236,
        "int_money": 742012715,
        "reg_time": "2019-05-29T11:53:12.949Z",
        "register": "2019-05-29T11:53:12.949Z"
      },
      {
        "per_name": "eV!vy",
        "per_sex": "ob",
        "per_phone": 93489783308,
        "act_login": "kCknI$zXXU",
        "per_email": "r4VOBNkyxN",
        "per_password": "#TK0q63lzM",
        "sharer": "FsGb%",
        "act_message": "HN2[A!&^fJ",
        "per_bCard": 286217481,
        "act_id": 286214409,
        "per_number": 597917459,
        "act_states": {
          "state": "冻结"
        },
        "per_source": "s#3Tw",
        "per_balance": 220307525,
        "real_name": {
          "real": "未认证"
        },
        "lend_entitle ": 777533506,
        "int_entitle ": "UmVl(Z$FWCf[0S#J6Wny",
        "lend_money": 593591978,
        "int_money": 71155166,
        "reg_time": "2019-05-29T11:53:12.949Z",
        "register": "2019-05-29T11:53:12.949Z"
      },
      {
        "per_name": "15[*p",
        "per_sex": "i1",
        "per_phone": 3580566028,
        "act_login": "c44^JP7czi",
        "per_email": "8z08GIN&gH",
        "per_password": "O5glE$rusP",
        "sharer": "%9@v)",
        "act_message": "k[@8)*JxnG",
        "per_bCard": 275030599,
        "act_id": 178665784,
        "per_number": 43136105,
        "act_states": {
          "state": "冻结"
        },
        "per_source": "DIXb2",
        "per_balance": 821867166,
        "real_name": {
          "real": "未认证"
        },
        "lend_entitle ": 986487024,
        "int_entitle ": "39DMGqsWUWy61%GP*Iu3",
        "lend_money": 71189809,
        "int_money": 31606826,
        "reg_time": "2019-05-29T11:53:12.949Z",
        "register": "2019-05-29T11:53:12.949Z"
      },
      {
        "per_name": "RGwTb",
        "per_sex": "F4",
        "per_phone": 76780104702,
        "act_login": "!o8YBu33XA",
        "per_email": "Zn#[TkiPDU",
        "per_password": "VFo6FQ(DYU",
        "sharer": "(ZCKd",
        "act_message": "y0hNj%n#(g",
        "per_bCard": 762806638,
        "act_id": 940999647,
        "per_number": 336446706,
        "act_states": {
          "state": "冻结"
        },
        "per_source": "vy!O]",
        "per_balance": 740057671,
        "real_name": {
          "real": "未认证"
        },
        "lend_entitle ": 651516990,
        "int_entitle ": "NQhl1TMI9gyyC)&w@z@6",
        "lend_money": 919208177,
        "int_money": 131306529,
        "reg_time": "2019-05-29T11:53:12.949Z",
        "register": "2019-05-29T11:53:12.949Z"
      }
    ],
				total: 0, //默认数据总数
				pagesize: 5, //每页的数据条数
				currentPage: 1, //当前页
				input_phone: '',
				input_name: '',
				options: [{
					value: '选项1',
					label: '出入帐'
				}, {
					value: '选项2',
					label: '出账'
				}, {
					value: '选项3',
					label: '入账'
				}],
				value: "出入帐"
			}
		},
		created() {
			this.total=this.tableData.length;
		// 	this.Axios.get('http://rap2api.taobao.org/app/mock/177576/user').then(
		// 			(response) => {
		// 				// this.tableData = response.data.datas.data;
		// 				this.total = this.tableData.length;
		// 				// console.log(response.data.datas.data);
		// 			})
		// 		.catch(function(error) {
		// 			console.log(error);
		// 		});
		},
		methods: {
			getRowClass() {
				return 'background:#f2f2f2'
			},
			exportExcel() {
				/* generate workbook object from table */
				var wb = XLSX.utils.table_to_book(document.querySelector('#moneyTable'))
				/* get binary string as output */
				var wbout = XLSX.write(wb, {
					bookType: 'xlsx',
					bookSST: true,
					type: 'array'
				})
				try {
					FileSaver.saveAs(new Blob([wbout], {
						type: 'application/octet-stream'
					}), 'sheet.xlsx')
				} catch (e) {
					if (typeof console !== 'undefined') console.log(e, wbout)
				}
				return wbout
			},
			current_change:function(currentPage){
				this.currentPage = currentPage;
			},handleSizeChange(pagesize){
				this.pagesize=pagesize;
				
			}
		}
	}
</script>
<style scoped>
	.el-header {
		/* background-color: #B3C0D1; */
		color: #333;
		line-height: 60px;
	}

	.el-aside {
		color: #333;
	}

	.el-table th {
		text-align: center !important;
	}

	.platBorder {
		/* width: 100%; */
		/* height:55px; */
		border: 0.3px solid #bbb;
		/* border-right:none; */
		/* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
		/* box-sizing: border-box; */
		/* background:#bbb; */
	}

	.platOrange {
		color: orange;
	}
</style>
