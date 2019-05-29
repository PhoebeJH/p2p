<template>
	<el-container>
		<el-header>
			<el-row :gutter="15">
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<el-input size="mini" v-model="input_phone" suffix-icon="el-icon-search" placeholder="搜索用户手机号"></el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<el-input size="mini" v-model="input_name" suffix-icon="el-icon-search" placeholder="搜索姓名"></el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<el-select size="mini" v-model="value" filterable placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-col>
				<el-col :span="2" :offset="13">
					<el-button plain size="mini">导出</el-button>
				</el-col>


			</el-row>
		</el-header>
		<el-main>
			<el-table stripe style="font-size: 10px;" :data="tableData" :header-cell-style="getRowClass" :cell-style="{'text-align':'center'}">
				
				<el-table-column prop="name" label="姓名" align="center">
				</el-table-column>
				<el-table-column prop="phone" label="用户手机" align="center">
				</el-table-column>
				<el-table-column prop="total_assets" label="类型" align="center">
				</el-table-column>
				<el-table-column prop="total_monney" label="操作金额" align="center">
				</el-table-column>
				<el-table-column prop="balance" label="操作前可用金额" align="center">
				</el-table-column>
				<el-table-column prop="Freezing_amount" label="操作后可用金额" align="center">
				</el-table-column>
				<el-table-column prop="amount_collected" label="操作前冻结金额" align="center">
				</el-table-column>
				<el-table-column prop="Cumulative_investment" label="操作后冻结金额" align="center">
				</el-table-column>
				<el-table-column prop="Remarks" label="备注" align="center">
				</el-table-column>
				<el-table-column prop="Accumulated_loan" label="操作时间" align="center">
				</el-table-column>
				
			</el-table>
			<el-pagination
  background
  layout="total,sizes,prev, pager, next"
  :page-sizes="[10, 25, 50, 100]"
  :page-size="10"
  :total="1000">
</el-pagination>
		</el-main>
	</el-container>

</template>
<script>
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
