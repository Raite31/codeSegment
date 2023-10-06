<template>
	<u-form
		:model="form"
		ref="uForm"
		label-width="180rpx"
		:label-style="{ color: 'rgba(102, 102, 102, 1)' }"
	>
		<u-form-item
			class="reason"
			label="申请原因"
			prop="descs"
			label-position="top"
		>
			<u-input
				type="textarea"
				placeholder="请输入申请原因"
				v-model="form.descs"
				:clearable="false"
				maxlength="100"
			></u-input>
		</u-form-item>
	</u-form>
	<text
		style="
			position: relative;
			top: -120rpx;
			left: 580rpx;
			color: rgba(153, 153, 153, 1);
		"
	>
		{{ form.descs.length }}/100
	</text>
</template>

<script>
export default {
	data() {
		return {
			form: {
				desc: '',
			},
		};
	},
};
</script>

<style lang="scss">
.contain {
	.u-form {
		background-color: white;
		margin: 20rpx;
		border-radius: 12rpx;
		padding: 0 30rpx;
	}
	.reason {
		.u-input {
			background-color: rgba(246, 246, 246, 1);
			padding: 30rpx !important;
			border-radius: 12rpx;
			// min-height: 200rpx;
		}
	}
}
</style>
