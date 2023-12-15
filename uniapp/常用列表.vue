<template>
	<view class="record-list">
		<view class="record-item" v-for="(item, index) in recordList" :key="index">
			<view class="record-item-top">
				<view class="id">订单号：{{item.order_id}}</view>
				<view class="status" :style="item.status == '未核销' ? 'color: rgba(249, 56, 48, 1)' : ''">{{item.status}}</view>
			</view>
			<view class="record-item-bottom">
				<image :src="item.img" mode="" style="width: 150rpx; height: 150rpx; border-radius: 10rpx; margin-right: 20rpx;"></image>
				<view class="record-item-bottom-right">
					<view class="name">{{item.name}}</view>
					<view class="num">
						数量：{{item.num}}单位
					</view>
					<view class="time">
						时间：{{item.time}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			recordList: [
				{
					id: 0,
					order_id: '2222345633378',
					status: '状态',
					img: '/static/new/card-bg.png',
					name: '端午节费事啊了就烦死啦分数',
					num: 1,
					gift: 3,
					time: '2024-5-22 17:00:00',
				},
			],
		};
	},
};
</script>
<style lang="scss">
.record-list {
	.record-item {
		background-color: white;

		margin-bottom: 20rpx;
		border-radius: 12rpx;
		padding: 20rpx 30rpx;

		.record-item-top {
			display: flex;
			align-items: center;
			justify-content: space-between;

			padding-bottom: 20rpx;
			margin-bottom: 20rpx;
			border-bottom: 1px solid rgba(238, 238, 238, 1);

			font-size: 28rpx;
			line-height: 40rpx;
			color: rgba(102, 102, 102, 1);

			.status {
				color: rgba(153, 153, 153, 1);
			}
		}

		.record-item-bottom {
			display: flex;

			.record-item-bottom-right {
				flex: 1;

				.name {
					font-size: 28rpx;
					font-weight: 600;
					line-height: 40rpx;
					color: rgba(51, 51, 51, 1);

					margin-bottom: 25rpx;

					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 1;
					-webkit-box-orient: vertical;
				}
				.num {
					margin-bottom: 15rpx;
				}

				.num,
				.time {
					font-size: 24rpx;
					line-height: 34rpx;
					color: rgba(153, 153, 153, 1);
				}
			}
		}
	}
}
</style>