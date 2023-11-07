<template>
	<u-form :model="form" ref="uForm" label-width="180">
		<u-form-item label="申请城市">
			<u-input
				v-model="form.applyCity"
				disabled
				type="select"
				placeholder="请选择申请城市"
				@click="cityShow = true"
			/>
		</u-form-item>
		<u-form-item label="开始时间">
			<u-input
				v-model="form.startTime"
				disabled
				type="select"
				placeholder="请选择开始时间"
				@click="timeShow = true"
			/>
		</u-form-item>
		<u-form-item label="结束时间">
			<u-input
				v-model="form.endTime"
				disabled
				type="select"
				placeholder="请选择结束时间"
				@click="timeShow2 = true"
			/>
		</u-form-item>
	</u-form>

	<u-select
		v-model="cityShow"
		:list="cityList"
		@confirm="selectCity"
	></u-select>
	<u-picker
		mode="time"
		v-model="timeShow"
		:show-time-tag="false"
		@confirm="timeConfirm"
	>
	</u-picker>
	<u-picker
		mode="time"
		v-model="timeShow2"
		:show-time-tag="false"
		@confirm="timeConfirm2"
	>
	</u-picker>
</template>

<script>
export default {
	data() {
		return {
			startDay: 0,
			endDay: 0,

			timeShow: false,
			timeShow2: false,
		};
	},
	methods: {
		selectCity(e) {
			console.log(e[0].label);
			this.form.applyCity = e[0].label;
		},
		timeConfirm(e) {
			console.log(e);
			this.form.startTime = e.year + '-' + e.month + '-' + e.day;
			this.startDay = this.form.startTime;
		},
		timeConfirm2(e) {
			this.form.endTime = e.year + '-' + e.month + '-' + e.day;
			this.endDay = this.form.endTime;

			this.startDay = Date.parse(this.startDay);
			this.endDay = Date.parse(this.endDay);
			if (this.startDay > this.endDay) {
				return 0;
			}
			if (this.startDay == this.endDay) {
				return 1;
			}
			this.form.applyDay =
				(this.endDay - this.startDay) / (1 * 24 * 60 * 60 * 1000);
			console.log('aa: ', this.form.applyDay);
		},
	},
};
</script>
