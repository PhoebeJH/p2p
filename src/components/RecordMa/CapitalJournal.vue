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
			<el-table id="moneyTable" stripe style="font-size: 11px;" :data="tableData" :header-cell-style="getRowClass" :cell-style="{'text-align':'center'}">
				
				<el-table-column prop="name" label="姓名" align="center">
				</el-table-column>
				<el-table-column prop="phone" width="100" label="用户手机" align="center">
				</el-table-column>
				<el-table-column prop="total_assets" label="类型" align="center">
				</el-table-column>
				<el-table-column prop="total_monney" label="操作金额" align="center">
				</el-table-column>
				<el-table-column prop="balance" width='100' label="操作前可用金额" align="center">
				</el-table-column>
				<el-table-column prop="Freezing_amount" width='100' label="操作后可用金额" align="center">
				</el-table-column>
				<el-table-column prop="amount_collected" width='100' label="操作前冻结金额" align="center">
				</el-table-column>
				<el-table-column prop="Cumulative_investment" width='100' label="操作后冻结金额" align="center">
				</el-table-column>
				<el-table-column width='200'  prop="Remarks" label="备注" align="center">
				</el-table-column>
				<el-table-column width='140'  prop="Accumulated_loan" label="操作时间" align="center">
				</el-table-column>
				
			</el-table>
		</el-main>
		<el-footer style="margin:20px 0 10px">
			<el-row>
				<el-col :span="5" :offset="11">
					<el-pagination
					  background
					  layout="total,prev, pager, next,sizes"
					  :pager-count="5"
					  :page-sizes="[10, 25, 50, 100]"
					  :page-size="10"
					  :total="1000">
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
			const item = {
				userId: '201709091123',
				name: '百事可乐',
				phone: '13990722322',
				total_assets: '回收本金',
				total_monney:'￥20000',
				balance: 0,
				Freezing_amount: 0,
				amount_collected: 0,
				Cumulative_investment: 0,
				Remarks:"[新手标] 还款，收回本金100.00元",
				Accumulated_loan: '2017-01-01 12:23:33',
				Accumulated_repayment: 0,
				repayment_balance: 0
			};
			return {
				tableData: Array(20).fill(item),
				input_phone: '',
				input_name: '',
				options: [{
					value: '选项1',
					label: '全部类型'
				}, {
					value: '选项2',
					label: '回收利息'
				}, {
					value: '选项3',
					label: '回收本金'
				}, {
					value: '选项4',
					label: '利息管理费'
				}],
				value: "全部类型"
			}
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
					}), 'sheetjs.xlsx')
				} catch (e) {
					if (typeof console !== 'undefined') console.log(e, wbout)
				}
				return wbout
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
