<template>
    <view class="contain-box">
        <scroll-view class="list" :scroll-y="true" @scrolltolower="loadData">
            // 滚动头
            <view class="top-box"></view>
            // 列表
            <view class="li">
                 <view class="item" v-for="item in 30"></view>
            </view>
            // 分页提示
            <view style="padding: 20rpx 0; position: relative; top: -154rpx;">
                <u-divider :half-width="10" border-color="rgba(187, 187, 187, 1)" color="rgba(187, 187, 187, 1)"
                    bg-color="none" v-if="loadingType == 'more'">上拉显示更多</u-divider>
                <u-divider :half-width="10" border-color="rgba(187, 187, 187, 1)" color="rgba(187, 187, 187, 1)"
                    bg-color="none" v-if="loadingType == 'noMore'">没有更多了</u-divider>
            </view>
        </scroll-view>
    </view>
</template>

<style lang="scss">
    .contain-box {
		.list {
			height: 1250rpx;
			overflow: hidden;
        }
    }
</style>