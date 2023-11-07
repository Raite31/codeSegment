<template>
	<div class="download">
		<div class="download_container">
			<div class="download_body">
				<div class="text_top">
					<div class="top_1">专家驿站小程序1.0</div>
					<div class="top_2">更多精彩直播，请扫码使用专家驿站微信小程序！</div>
				</div>
				<div class="text_right_top">
					<div>
						<div class="right_top_1">扫描二维码下载</div>
						<div class="right_top_2">已发布在微信小程序平台</div>
					</div>
				</div>
				<div class="text_right_bottom">
					<div class="right_bottom_1">
						<img src="@/assets/images/liveStreaming/Rectangle_264(1).png" />
						<span>高清专家直播免费观看！</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.download {
    .download_container {
        min-width: 1200px;
        background: url('@/assets/images/liveStreaming/downloadBg.png') 100% 100%;
        .download_body {
            width: 100%;
            background: url('@/assets/images/liveStreaming/downloadBg.png') 100% 100% no-repeat;
            background-position: top center;
            height: 800px;
            .text_top {
                width: 800px;
                padding-top: 80px;
                margin: 0 auto;

                text-align: center;
            }
            .text_right_top {
                width: 324px;
                margin-top: 100px;
                margin-left: 54%;

                display: flex;
                align-items: center;
            }
            .text_right_bottom {
                width: 358px;
                margin-top: 100px;
                margin-left: 54%;

                display: flex;
                flex-direction: column;
                align-items: center;
            }

        }
    }
}
</style>
