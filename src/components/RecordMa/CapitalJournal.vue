<template>
	<el-container>
		<el-header>
			<el-row :gutter="15">
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<el-input size="small" v-model="input_phone" suffix-icon="el-icon-search" placeholder="搜索用户手机号"></el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<el-input size="small" v-model="input_name" suffix-icon="el-icon-search" placeholder="搜索姓名"></el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<el-select size="small" v-model="value" filterable placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-col>
				<el-col :span="2" :offset="13">
					<el-button plain size="small" @click="exportExcel">导出</el-button>
				</el-col>


			</el-row>
		</el-header>
		<el-main>
			<el-table id="moneyTable" stripe style="font-size: 11px;" :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
			 :header-cell-style="getRowClass" :cell-style="{'text-align':'center'}">

				<el-table-column prop="personageMemberInfoName" label="姓名" align="center">
				</el-table-column>
				<el-table-column prop="personageMemberInfoPhone" width="100" label="用户手机" align="center">
				</el-table-column>
				<el-table-column prop="act_states.state" label="类型" align="center">
				</el-table-column>
				<el-table-column prop="money" label="操作金额" align="center">
				</el-table-column>
				<el-table-column prop="smallmoney" width='100' label="操作前可用金额" align="center">
				</el-table-column>
				<el-table-column prop="smallmoney" width='100' label="操作后可用金额" align="center">
				</el-table-column>
				<el-table-column prop="smallmoney" width='100' label="操作前冻结金额" align="center">
				</el-table-column>
				<el-table-column prop="maxmoney" width='100' label="操作后冻结金额" align="center">
				</el-table-column>
				<el-table-column width='100' prop="message" label="备注" align="center">
				</el-table-column>
				<el-table-column width='170' prop="moneytime" label="操作时间" align="center">
				</el-table-column>

			</el-table>
			<el-table hidden="true" id="moneyTableExport" stripe style="font-size: 11px;" :data="tableData"
			 :header-cell-style="getRowClass" :cell-style="{'text-align':'center'}">
			
				<el-table-column prop="personageMemberInfoName" label="姓名" align="center">
				</el-table-column>
				<el-table-column prop="personageMemberInfoPhone" width="100" label="用户手机" align="center">
				</el-table-column>
				<el-table-column prop="act_states.state" label="类型" align="center">
				</el-table-column>
				<el-table-column prop="money" label="操作金额" align="center">
				</el-table-column>
				<el-table-column prop="smallmoney" width='100' label="操作前可用金额" align="center">
				</el-table-column>
				<el-table-column prop="smallmoney" width='100' label="操作后可用金额" align="center">
				</el-table-column>
				<el-table-column prop="smallmoney" width='100' label="操作前冻结金额" align="center">
				</el-table-column>
				<el-table-column prop="maxmoney" width='100' label="操作后冻结金额" align="center">
				</el-table-column>
				<el-table-column width='100' prop="message" label="备注" align="center">
				</el-table-column>
				<el-table-column width='170' prop="moneytime" label="操作时间" align="center">
				</el-table-column>
			
			</el-table>
		</el-main>
		<el-footer style="margin:20px 0 10px">
			<el-row>
				<el-col>
					<el-pagination background layout="total,prev, pager, next,sizes" :page-sizes="[10, 25, 50, 100]" :page-size="pagesize"
					 :total="total" :current-page="currentPage" @size-change="handleSizeChange" @current-change="current_change">
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
		name: 'CapitalJournal',
		data() {
			// const item = {
			// 	userId: '201709091123',
			// 	name: '百事可乐',
			// 	phone: '13990722322',
			// 	total_assets: '回收本金',
			// 	total_monney:'￥20000',
			// 	balance: 0,
			// 	Freezing_amount: 0,
			// 	amount_collected: 0,
			// 	Cumulative_investment: 0,
			// 	Remarks:"[新手标] 还款，收回本金100.00元",
			// 	Accumulated_loan: '2017-01-01 12:23:33',
			// 	Accumulated_repayment: 0,
			// 	repayment_balance: 0
			// };
			return {
				tableData: [],
				total: 0, //默认数据总数
				pagesize: 10, //每页的数据条数
				currentPage: 1, //当前页
				input_phone: '',
				input_name: '',
				options: [{
					value: 0,
					label: '全部类型'
				}, {
					value: 1,
					label: '回收利息'
				}, {
					value: 2,
					label: '回收本金'
				}, {
					value: 3,
					label: '利息管理费'
				}],
				value: 0
			}
		},
		created() {
			this.total = this.tableData.length;
			this.Axios.get('http://172.16.6.64:8080/member/funds?type=1').then(
					(response) => {
						this.tableData = response.data.data;
						this.total = this.tableData.length;
						// console.log(response.data.datas.data);
					})
				.catch(function(error) {
					console.log(error);
				});
		},watch:{
			input_phone(){
				this.Axios.get('http://172.16.6.64:8080/member/funds?type=1',{
					params:{
						phone:this.input_phone
					}
				}).then(
						(response) => {
							this.tableData = response.data;
							this.total = this.tableData.length;
							// console.log(response);
						})
					.catch(function(error) {
						console.log(error);
					});
			},input_name(){
				this.Axios.get('http://172.16.6.64:8080/member/funds?type=1',{
					params:{
						name:this.input_name
					}
				}).then(
						(response) => {
							this.tableData = response.data;
							this.total = this.tableData.length;
							// console.log(response);
						})
					.catch(function(error) {
						console.log(error);
					});
			},value(){
				this.Axios.get('http://172.16.6.64:8080/member/funds?type=1',{
					params:{
						usertype:this.value
					}
				}).then(
						(response) => {
							this.tableData = response.data;
							this.total = this.tableData.length;
							// console.log(response);
						})
					.catch(function(error) {
						console.log(error);
					});
			}
		},
		methods: {
			getRowClass() {
				return 'background:#f2f2f2'
			},
			exportExcel() {
				/* generate workbook object from table */
				var wb = XLSX.utils.table_to_book(document.querySelector('#moneyTableExport'))
				/* get binary string as output */
				var wbout = XLSX.write(wb, {
					bookType: 'xlsx',
					bookSST: true,
					type: 'array'
				})
				try {
					FileSaver.saveAs(new Blob([wbout], {
						type: 'application/octet-stream'
					}), 'sheetjs.xlsx')
				} catch (e) {
					if (typeof console !== 'undefined') console.log(e, wbout)
				}
				return wbout
			},
			current_change: function(currentPage) {
				this.currentPage = currentPage;
			},
			handleSizeChange(pagesize) {
				this.pagesize = pagesize;

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
</style>
