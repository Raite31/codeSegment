<template>
	<view class="bottom">
		<view>
			<u-tabs-swiper
				ref="uTabs"
				:list="listBottom"
				:current="currentBottom"
				@change="tabsChange"
				:is-scroll="false"
				swiperWidth="750"
			></u-tabs-swiper>
		</view>
		<swiper
			:current="swiperCurrent"
			@transition="transition"
			@animationfinish="animationfinish"
		>
			<swiper-item class="swiper-item">
				<scroll-view
					scroll-y
					style="height: calc(100vh - 680rpx); width: 100%"
					@scrolltolower="onreachBottom"
				>
					<view class="list">
						<view
							class="item"
							v-for="(item, index) in data[current].timeScoreList"
						>
							<view class="item-left">
								{{ item.score }}
							</view>
							<view class="item-right">
								{{ item.time }}
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
			<swiper-item class="swiper-item">
				<scroll-view
					scroll-y
					style="height: calc(100vh - 680rpx); width: 100%"
					@scrolltolower="onreachBottom"
				>
					<view class="list">
						<view
							class="item"
							v-for="(item, index) in data[current].storeScoreList"
						>
							<view class="item-left">
								<view class="left-top">
									{{ item.score }}
								</view>
								<view class="left-bottom">
									{{ item.time }}
								</view>
							</view>
							<view class="item-right">
								{{ item.value }}
							</view>
						</view>
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<style lang="scss">
.bottom {
	uni-swiper {
		height: calc(100vh - 680rpx) !important;
	}

	.swiper-item {
		.list {
			margin: 20rpx;
			background-color: white;
			border-radius: 12rpx;
			padding: 0 30rpx;

			.item {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 40rpx 0;
			}
		}
	}
}
</style>
