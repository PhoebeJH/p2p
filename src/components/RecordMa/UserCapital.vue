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
				<el-table-column prop="userId" label="用户ID" align="center">
				</el-table-column>
				<el-table-column prop="name" label="姓名" align="center">
				</el-table-column>
				<el-table-column prop="phone" label="用户手机" align="center">
				</el-table-column>
				<el-table-column prop="total_assets" label="总资产" align="center">
				</el-table-column>
				<el-table-column prop="balance" label="可用余额" align="center">
				</el-table-column>
				<el-table-column prop="Freezing_amount" label="冻结金额" align="center">
				</el-table-column>
				<el-table-column prop="amount_collected" label="待收金额" align="center">
				</el-table-column>
				<el-table-column prop="Cumulative_investment" label="累计投资" align="center">
				</el-table-column>
				<el-table-column prop="Cumulative_investment_re" label="累计投资收益" align="center">
				</el-table-column>
				<el-table-column prop="Accumulated_loan" label="累计借款" align="center">
				</el-table-column>
				<el-table-column prop="Accumulated_repayment" label="累计还款" align="center">
				</el-table-column>
				<el-table-column prop="repayment_balance" label="借还款差额" align="center">
				</el-table-column>
				
			</el-table>
		</el-main>
		<el-footer style="margin:20px 0 10px">
			<el-row>
				<el-col :span="5" :offset="13">
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
	export default {
		name: 'UserCapital',
		data() {
			const item = {
				userId: '201709091123',
				name: '企业1号',
				phone: '13800009999',
				total_assets: 300,
				balance: 0,
				Freezing_amount: 0,
				amount_collected: 0,
				Cumulative_investment: 0,
				Cumulative_investment_re: 200,
				Accumulated_loan: 0,
				Accumulated_repayment: 0,
				repayment_balance: 0
			};
			return {
				tableData: Array(20).fill(item),
				input_phone: '',
				input_name: '',
				options: [{
					value: '选项1',
					label: '全部用户'
				}, {
					value: '选项2',
					label: '投资用户'
				}, {
					value: '选项3',
					label: '借款用户'
				}],
				value: "全部用户"
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
