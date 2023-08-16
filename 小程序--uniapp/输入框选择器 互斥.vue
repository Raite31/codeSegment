<!-- ===================================== VExpertSelect.vue -->
<template>
	<el-select
		class="v-expert-select"
		v-model="state"
		popper-class="v-expert-select__popper"
		filterable
		remote
		reserve-keyword
		:remote-method="handleFetch"
		:loading="loading"
		:trigger-on-focus="false"
		style="width: 100%"
		@change="onChange"
	>
		<el-option
			v-for="item in options"
			:key="item.index"
			:label="item.label"
			:value="item.value"
			:disabled="item.disabled"
		/>
	</el-select>
</template>

<script>
import { getExpertList } from '@/api/gzxg/common';

export default {
	name: 'VExpertSelect',
	inheritAttrs: false,
	model: {
		prop: 'value',
		event: 'input',
	},
	props: {
		disabledList: {
			type: Array,
			default: () => [],
		},
		value: null,
		numberToString: Boolean,
		params: null,
	},
	data() {
		return {
			loading: false,
			state: this.value,
			options: [],
		};
	},
	watch: {
		disabledList(val) {
			// 这个已选择的数组列表有变化的话就刷新一下选项列表
			this.handleFetch();
		},
		value(val) {
			this.state = val;
		},
		state(val) {
			this.$emit('input', val);
		},
	},
	created() {
		this.handleFetch();
	},
	methods: {
		handleFetch(query) {
			console.log('e: ', this.disabledList);
			getExpertList({ [this.params.key]: query, ...this.params }).then(
				(res) => {
					this.options = res.data.list.map((item) => ({
						...item,
						label: `${item.realName}（${item.number}）`,
						value: item.userId,
						disabled: this.disabledList.includes(item.userId), //传入了disabled用于标记哪个选项不可选
					}));
				}
			);
		},
		onChange(val) {
			const data = this.options.find((item) => item.value == val);
			this.$emit('change', data);
		},
	},
};
</script>

<style>
.v-expert-select__popper {
    width: 350px;
}
</style>

<!-- ===================================== form.vue -->
<template>
	<el-form-item
		v-for="(domain, index) in ruleForm.liveExperts"
		:key="domain.key"
		:label="'邀请专家' + (index + 1) + '名称'"
	>
		<el-row :gutter="0">
			<el-col :span="11">
				<v-expert-select
					:disabledList="selectedExperts"
					v-model="domain.expertUserId"
					:params="{
						key: 'realName',
						pageNo: 1,
						pageSize: 1000,
					}"
					@change="expertChange($event, index)"
					style="width: 95%"
				/>
			</el-col>
			<el-col :span="1">
				<img
					src="@/assets/images/Frame_(2).png"
					alt=""
					@click="deleteExpert(index)"
					style="width: 16px; height: 16px"
				/>
			</el-col>
			<el-col :span="12">
				<v-ach-select
					:disabledList="domain.selectedAchs"
					v-model="achKeyword"
					:params="{
						key: 'keyword',
						pageNo: 1,
						pageSize: 1000,
						userId: ruleForm.liveExperts[index].expertUserId,
					}"
					@change="achChange($event, index)"
					style="width: 95%; float: right"
				/>
			</el-col>
			<el-col :span="24" v-if="ruleForm.liveExperts[index].achs.length">
				<ul class="inviteExpert">
					<li
						v-for="(item, index) in ruleForm.liveExperts[index].achs"
						:key="item.index"
					>
						<div>成果{{ index + 1 }}：{{ item.number }} {{ item.title }}</div>
						<img
							src="@/assets/images/Frame_(2).png"
							alt=""
							@click="deleteAch(domain, index)"
						/>
					</li>
				</ul>
			</el-col>
		</el-row>
	</el-form-item>
</template>

<script>
methods:{
  setSelectedExperts() {
    // 在this.ruleForm.liveExperts中的专家就是已经被选了的专家嘛
    this.selectedExperts = this.ruleForm.liveExperts.map(
      item => item.expertUserId
    )
    console.log('f: ', this.selectedExperts)
  },
  setSelectedAchs(index) {
    this.ruleForm.liveExperts[index].selectedAchs = this.ruleForm.liveExperts[
      index
    ].achs.map(item => item.id)
  },
  deleteExpert(index) {
    this.ruleForm.liveExperts.splice(index, 1)
    // 删除的时候也要刷新一下已选择的数组列表
    this.setSelectedExperts()
  },
  deleteAch(domain, index) {
    this.ruleForm.liveExperts[domain.expertIndex].achs.splice(index, 1)
    this.setSelectedAchs(domain.expertIndex)
  },
  expertChange(e, index) {
    this.ruleForm.liveExperts[index].achs = []
    this.ruleForm.liveExperts[index].expertNumber = e.number
    this.ruleForm.liveExperts[index].expertIndex = index
    this.ruleForm.liveExperts[index].expertUserId = e.userId
    this.ruleForm.liveExperts[index].realName = e.realName
    this.ruleForm.liveExperts[index].avatar = e.avatar
    this.ruleForm.liveExperts[index].company = e.company
    this.ruleForm.liveExperts[index].tags = e.tags.join(',')
    this.setSelectedExperts()
  },
  achChange(e, index) {
    this.ruleForm.liveExperts[index].achs.push(e)
    this.setSelectedAchs(index)
  },
}
</script>
