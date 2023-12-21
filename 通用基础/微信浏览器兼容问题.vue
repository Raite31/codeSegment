<!-- 在微信浏览器中，加一个元素给高度是无法撑起来的，要用margin -->
<view style="height: 0rpx"></view>
<view class="diy-fixedsearch fixed" :style="app.getPlatform() == 'H5-WX' ? {marginTop: '148rpx'} : {marginTop: '68rpx'}" >
</view>