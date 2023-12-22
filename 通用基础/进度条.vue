<template>
	<view class="bar-progress" :style="{width: '100%', background: 'url(/static/new/message/progress.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100% 100%'}">
		<view style="height: 100%; width: 95%; margin-left: 8rpx; display: flex; align-items: center; overflow: hidden;">
			<view class="bar-progress-inner"
				:style="{width: '100%', marginLeft: '-'+((1-cardInfo.current_ratio)*100)+'%', background: 'url(/static/new/message/progress-inner.png)', backgroundRepeat: 'no-repeat', backgroundSize: '100%'}">
				<view class="bar-progress-inner-txt">
					{{cardInfo.current}}/ {{Number(cardInfo.current_need)}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
.bar-progress {
	height: 100%;
	margin-left: -8rpx;

	display: flex;
	align-items: center;
	.bar-progress-inner {
		height: 76%;

		display: flex;
		align-items: center;
		justify-content: flex-end;

		font-size: 28rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		color: #8f2d0e;
		line-height: 44rpx;
		.bar-progress-inner-txt {
			position: absolute;
			left: 20rpx;
		}
	}
}
</style>