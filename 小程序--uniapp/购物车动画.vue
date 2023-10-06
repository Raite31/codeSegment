<template>
	<!-- 动画 -->
	<view
		class="add-to-car"
		id="addToCar"
		:style="{
			transform: `translate(${xlen}px,${ylen}px)`,
			display: viewDisplay,
		}"
	>
		<image :src="baseUrl + 'xcx/animate.png'"></image>
	</view>
</template>

<script>
export default {
	data() {
		return {
			// 动画
			carPosition: {},
			couponPosition: {},
			childNodes: [],
			// 载体的显隐
			viewDisplay: 'none',
		};
	},
	onReady() {
		this.jumpEnd();
	},
	methods: {
		// ========================== 领取动画部分
		//获取终点坐标
		jumpEnd() {
			const query = uni.createSelectorQuery().in(this);
			query
				.select('#floatText')
				.boundingClientRect((data) => {
					// data就是该元素的位置信息对象
					// console.log(data);
					this.carPosition = {
						x: data.left + data.width / 2,
						y: data.top + data.height / 5,
					};
					// console.log("carPosition: ",this.carPosition)
				})
				.exec();

			// console.log(this.childNodes)
		},
		// 获取开始坐标
		jumpStart(index) {
			const query = uni.createSelectorQuery().in(this);
			setTimeout(function () {
				query
					.selectAll('.box_list')
					.boundingClientRect((res) => {
						console.log('res: ', res);
						// this.childNodes = JSON.parse(JSON.stringify(res))
						this.childNodes = res;
						console.log('childNodes: ', this.childNodes[index]);
					})
					.exec();
			}, 300);
		},
	},
};
</script>

<style lang="scss">
.add-to-car {
	position: fixed;
	z-index: 99;
	text-align: center;
	margin-left: -20rpx;
	margin-top: -20rpx;
	left: 0;
	top: 0;
	transition: 0.7s cubic-bezier(0.5, -0.5, 1, 1);
	image {
		width: 60rpx;
		height: 60rpx;
	}
}
</style>
