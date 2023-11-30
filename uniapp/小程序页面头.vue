<template>
    <!-- 顶部栏 -->
    <view
        class="header-box"
        style="padding: 0 20rpx; position: relative"
    >
        <view style="position: absolute; left: 20rpx">
            <u-icon
                class="ml24 mr254 mt40 header-icon"
                name="arrow-left"
                size="38"
                @click="app.goPage(-1)"
            >
            </u-icon>
        </view>
        <!-- #ifndef H5 -->
        <view class="window-top mb40"></view>
        <!-- #endif -->
        <view
            class="fs34 text-center"
            style="width: 100%; text-align: center"
        >
            {{ app.langReplace('确认订单') }}
        </view>
    </view>

    <view class="contain">
    </view>
</template>


<style lang="scss">
.header-box {
	display: flex;
	height: 100rpx;
	background: #fff;
	color: #000;
	.header-icon{
		margin-top: 35rpx !important;
	}
	.text-center{
		padding: 30rpx;
	}
}
.contain{
    position: relative;
    top: -1200rpx;
}
</style>
