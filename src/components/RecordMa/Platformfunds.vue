<template>
	<el-container>
		<el-header>
			<el-row :gutter="15">
				<el-col :span="3">
					<div class="grid-content bg-purple">
						<el-input size="mini" v-model="input_phone" suffix-icon="el-icon-search" placeholder="搜索流水号"></el-input>
					</div>
				</el-col>
				<el-col :span="3">
					<el-select size="mini" v-model="value" filterable placeholder="请选择">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</el-col>
				<el-col
				  
				 :span="2" :offset="16">
					<el-button plain size="mini">导出</el-button>
				</el-col>
			</el-row>
		</el-header>
		<el-header>
			<el-row :gutter="15"  class="boxshadow">
				<el-col   :span="19">
					<div>平台账户余额: 123123.12元</div>
				</el-col>
				<el-col :span="2">
					<el-button size="mini" type="success">平台充值</el-button>
				</el-col>
				<el-col :span="2">
					<el-button size="mini" type="success">平台提现</el-button>
				</el-col>
			</el-row>
		</el-header>
		<el-main>
			<el-table stripe style="font-size: 10px;" :data="tableData" :header-cell-style="getRowClass" :cell-style="{'text-align':'center'}">
				
				<el-table-column prop="name" label="流水号" align="center">
				</el-table-column>
				<el-table-column prop="total_assets" label="类型" align="center">
				</el-table-column>
				<el-table-column prop="Account" label="出入帐" align="center">
				</el-table-column>
				<el-table-column prop="total_monney" label="操作金额" align="center">
				</el-table-column>
					<el-table-column prop="amount_collected" label="手续费" align="center">
				</el-table-column>
				<el-table-column prop="balance" label="操作前余额" align="center">
				</el-table-column>
				<el-table-column prop="Freezing_amount" label="操作后余额" align="center">
				</el-table-column>
				<el-table-column prop="state" label="状态" align="center">
				</el-table-column>
			

				<el-table-column prop="Remarks" label="备注" align="center">
				</el-table-column>
				<el-table-column prop="Accumulated_loan" width='140' label="操作时间" align="center">
				</el-table-column>
				
			</el-table>
		</el-main>
		<el-footer style="margin:20px 0 10px">
			<el-row>
				<el-col :span="5" :offset="12">
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
		name: 'Platformfunds',
		data() {
			const item = {
				userId: '201709091123',
				name: '百事可乐',
				phone: '13990722322',
				total_assets: '现金红包',
				Account :'出帐',
				total_monney:'￥20000',
				balance: 0,
				Freezing_amount: 0,
				amount_collected: 0,
				Cumulative_investment: 0,
				Remarks:"出入帐明细",
				Accumulated_loan: '2017-01-01 12:23:33',
				Accumulated_repayment: 0,
				repayment_balance: 0,
				state:'完成'
			};
			return {
				tableData: Array(20).fill(item),
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
	.boxshadow{
		/* width: 100%; */
		/* height:55px; */
		/* border: 0.3px solid #bbb; */
		box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
		box-sizing: border-box;
	}
</style>
