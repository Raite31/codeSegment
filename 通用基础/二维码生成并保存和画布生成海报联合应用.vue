<template >
	<div class="contain">
		<vue-qr class="qr-code" :correctLevel="QRCODE.correctLevel" :autoColor="QRCODE.autoColor" :colorDark="QRCODE.colorDark" :text="QRCODE.qrText" :logoSrc="QRCODE.icon_url"
			:logoScale="QRCODE.logoScale" :logoCornerRadius="QRCODE.logoCornerRadius" :size="QRCODE.size" :callback="getQr" />

		<!-- 两个按钮 -->
		<view class="button-box">
			<view class="left" @click="savaImg1">
				微信
			</view>
			<view class="right" @click="savaImg2">
				本地
				<image src="/static/new/home/download.png" mode="aspectFill" style="width: 44rpx; height: 44rpx; margin-left: 8rpx;"></image>
			</view>
		</view>

		<!-- 画布 让他飞到页面画面外，这里我们只需要画布生成的图生成连接即可 -->
		<view class="" style="position: absolute; z-index: -99; opacity: 0; top: -9999999rpx; left: -999999rpx;">
			<canvas canvas-id="wechatCanvas" id="wechatCanvas" class="wechatCanvas"></canvas>
			<canvas canvas-id="localCanvas" id="localCanvas" class="localCanvas"></canvas>

		</view>
	</div>
</template>

<script>
import vueQr from 'vue-qr';
export default {
	components: {
		vueQr,
	},
	data() {
		return {
			wechatImg: '', // 微信分享图
			localImg: '', // 本地分享图
			qrCode: '', // 生成的二维码图

			// 二维码参数
			QRCODE: {
				correctLevel: 3, // 容错级别
				autoColor: false, // 背景色
				colorDark: '#000000', // 二维码实点颜色
				qrText: 'https://blog.csdn.net/2201_75870706?type=blog', // 二维码内容
				icon_url: '/static/new/home/gift-inside.png', // icon
				logoScale: 0.4, // 用于计算LOGO大小，不能过大
				logoCornerRadius: 50, // logo圆角半径
				size: 300, // 二维码大小，包含外边距
			},
		};
	},
	methods: {
		loadInfo() {
			// 获取数据
		},
		// 生成二维码的时候获取二维码图片
		getQr(dataUrl, id) {
			// console.log("dataUrl: ", dataUrl ,id)
			this.qrCode = dataUrl;
		},

		// 保存画布生成的海报
		// 微信分享
		savaImg1() {
			const ctx = uni.createCanvasContext('wechatCanvas');

			// 画布中图片的渲染（调参：位置 大小）
			ctx.drawImage(
				'/static/new/home/wechat-preview.png',
				0,
				0,
				338,
				338
			);
			ctx.drawImage(this.qrCode, 185, 110, 130, 130);
			ctx.drawImage('/static/new/message/check.png', 204, 265, 21, 21);

			// 画布中文字的渲染
			ctx.setFontSize(17);
			ctx.fillText('“N5M56”', 226, 275);

			ctx.setFillStyle('rgba(0, 0, 0, 0.60)');
			ctx.setFontSize(8);
			ctx.fillText('填写我的邀请码', 238, 290);

			ctx.setFontSize(8);
			ctx.fillText('可获得新手礼包免费聊天', 207, 305);

			// 开始画布渲染
			ctx.draw(true, () => {
				setTimeout(function () {
					uni.canvasToTempFilePath({
						canvasId: 'wechatCanvas',
						fileType: 'png',
						x: 0,
						y: 0,
						width: 676,
						destWidth: 676,
						height: 676,
						// 成功后，存下生成图片的连接
						success: function (res) {
							console.log('res: ', res.tempFilePath);
							this.wechatImg = res.tempFilePath;
						},
						fail: function (error) {
							console.log('error: ', error);
						},
					});
				});
			});
		},

		savaImg2() {
			const ctx = uni.createCanvasContext('localCanvas');

			ctx.drawImage('/static/new/home/share-local2.png', 0, 0, 375, 812);
			ctx.drawImage(this.qrCode, 105, 486, 165, 165);
			ctx.drawImage('/static/new/message/check.png', 219, 246, 24, 24);

			ctx.setFontSize(17);
			ctx.fillText('“N5M56”', 250, 260);

			ctx.setFillStyle('rgba(0, 0, 0, 0.60)');
			ctx.setFontSize(8);
			ctx.fillText('填写我的邀请码', 260, 275);

			ctx.setFontSize(8);
			ctx.fillText('可获得新手礼包免费聊天', 229, 290);

			ctx.draw(true, () => {
				setTimeout(function () {
					uni.canvasToTempFilePath({
						canvasId: 'localCanvas',
						fileType: 'png',
						x: 0,
						y: 0,
						width: 770,
						destWidth: 770,
						height: 1800,
						success: function (res) {
							console.log('res: ', res.tempFilePath);
							this.localImg = res.tempFilePath;
						},
						fail: function (error) {
							console.log('error: ', error);
						},
					});
				});
			});
		},
	},
};
</script>

<style lang="scss">
.contain {
	.qr-code {
		width: 330rpx;
		height: 330rpx;
		border: 4px solid rgba(96, 100, 195, 1);
		border-radius: 20rpx;

		margin-bottom: 32rpx;
	}
}
.wechatCanvas {
	width: 656rpx;
	height: 656rpx;
}
.localCanvas {
	width: 720rpx;
	height: 1624rpx;
}
</style>