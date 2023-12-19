<template>
	<!-- 顶部栏 -->
	<view class="header-box">
		<view class="header-box-left">
			<u-icon class="header-icon" name="arrow-left" size="38" @click="app.goPage(-1)">
			</u-icon>
		</view>

		<!-- #ifndef H5 -->
		<view class="window-top mb40"></view>
		<!-- #endif -->

		<view class="header-box-center">
			你好你好
		</view>

		<view class="header-box-right">
			记录
		</view>
	</view>

	<view class="contain">
	</view>
</template>


<style lang="scss">
.header-box {
	display: flex;
	align-items: center;

	height: 100rpx;
	background: #fff;
	color: #000;
	padding: 0 20rpx;

	.header-box-left {
		left: 20rpx;
	}

	.header-box-center {
		flex: 1;
		text-align: center;
		font-size: 34rpx;
	}

	.header-box-right {
		font-size: 24rpx;
		font-family: PingFang SC, PingFang SC;
		font-weight: 400;
		color: rgba(0, 0, 0, 0.9);
		line-height: 28rpx;

		align-self: flex-start;
		padding-top: 35rpx;
	}
}
</style>
