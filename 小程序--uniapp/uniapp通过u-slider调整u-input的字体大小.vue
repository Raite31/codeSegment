<template>
	<view>
		<view
			class="flex_bd"
			style="border-bottom: 2rpx solid rgba(207, 207, 207, 1)"
		>
			<!-- 可以看到这里的input有:fontSize这一项，这里需要改动u-input的源码 -->
			<u-input
				:fontSize="font_size"
				v-model="data.list[switchIndex][tabCurrentIndex].text"
				placeholder="输入文字内容"
				type="text"
			/>
		</view>

		<view class="slider">
			<slider min="28" show-value @changing="sliderChange"></slider>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			// 控制文字大小
			font_size: 28,
		};
	},
	methods: {
		sliderChange(e) {
			console.log('value 发生变化：' + e.detail.value);
			this.font_size = e.detail.value;
		},
	},
};
</script>
