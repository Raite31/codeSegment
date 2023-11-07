<template>
    <!-- 顶部栏 -->
    <view
        class="header-box"
        style="color: #fff; padding: 0 20rpx; position: relative"
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
	height: 300rpx;
	background: linear-gradient(
		161.12deg,
		rgba(252, 91, 123, 1) 0%,
		rgba(255, 66, 97, 1) 100%
	);
	color: #ffffff;
	.header-icon{
		margin-top: 65rpx !important;
	}
	.text-center{
		padding: 60rpx;
	}
}
.contain{
    position: relative;
    top: -1200rpx;
}
</style>