<u-modal
    v-model="show"
    title="确认取消置顶吗？"
    content=""
    show-confirm-button
    show-cancel-button
    @confirm="confirm"
    cancel-text="我再想想"
    confirm-text="确认取消"
    :cancel-style="{
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '12px',
        background: 'rgba(245, 245, 245, 1)',
        fontSize: '32rpx',
        fontWeight: 600,
        color: 'rgba(153, 153, 153, 1)',
        marginRight: '20rpx',
    }"
    :confirm-style="{
        borderRadius: '12rpx',
        background: 'rgba(16, 121, 225, 1)',
        fontSize: '32rpx',
        fontWeight: 600,
        color: 'rgba(255, 255, 255, 1)',
    }"
>
</u-modal>

<style lang="scss">
/deep/.u-model {
	height: 270rpx;
	padding: 50rpx 38rpx;
	.u-model-title {
		padding: 0;
		margin-bottom: 40rpx;
	}
	.u-model-content-message {
		height: 0;
		padding: 0;
	}
	.u-model-footer-button {
		height: 83rpx;
		line-height: 83rpx;
	}
	.u-border-top:after {
	    border-top-width: 0px;
	}
}
</style>
