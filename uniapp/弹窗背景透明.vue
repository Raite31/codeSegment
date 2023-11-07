<template>
  <div>
    <u-popup v-model="updateShow" mode="center" class="win update-win" width="626" height="896">
      <view class="winInner" :style="{
					background: 'url(/static/new/home/win-updateWinBg.png)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: '100%',
				}">

      </view>
    </u-popup>
  </div>
</template>
<script>
export default {
  date() {
    return {
      updateShow: true,
    }
  },
}
</script>
<style lang="scss">
.win {
  /deep/.u-mode-center-box {
    background-color: rgba(0, 0, 0, 0) !important;
  }

  .winInner {
    width: 100%;
    height: 100%;
  }
}
</style>