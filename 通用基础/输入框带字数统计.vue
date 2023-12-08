<template>
	<view>
		<u-input class="textarea" type="textarea" maxlength="100" v-model="form.customDescript" />
		<text class="font-num">{{form.customDescript.length || 0}}/100</text>
	</view>
</template>

<script>
export default {
	data() {
		return {
			form: {
				customDescript: '',
			},
		};
	},
};
</script>

<style lang="scss">
.textarea {
	border-radius: 12rpx;
	background-color: rgba(246, 246, 246, 1);
	padding: 20rpx !important;
	min-height: 280rpx;
	/deep/.u-input__input {
		padding: 0;
	}
}
.font-num {
	font-size: 24rpx;
	line-height: 32rpx;
	color: rgba(153, 153, 153, 1);
	position: absolute;
	margin-top: 200rpx;
	margin-left: 550rpx;
}
</style>