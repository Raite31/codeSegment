<template>
  <div>
    <view class="list">
      <view class="item" v-for="(item, index) in helpList" :key="index">
        <image class="help" :src="item.url" mode="aspectFill" :class="item.checked ? 'active' : ''" @click="item.checked = !item.checked"></image>
        <view class="bottom">
          <image class="money" :src="item.money" mode="aspectFill"></image>
          {{item.value}}
        </view>
      </view>
    </view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      helpList: [
        {
          url: '/static/new/home/gift-inside.png',
          money: '/static/new/message/start.png',
          value: 100,
          checked: true,
        },
        {
          url: '/static/new/home/gift-inside.png',
          money: '/static/new/message/start.png',
          value: 100,
          checked: false,
        },
        {
          url: '/static/new/home/gift-inside.png',
          money: '/static/new/message/start.png',
          value: 100,
          checked: false,
        },
        {
          url: '/static/new/home/gift-inside.png',
          money: '/static/new/message/start.png',
          value: 100,
          checked: false,
        },
      ],
    }
  },
}
</script>
<style lang="scss">
.item {
  margin: 0 22rpx 34rpx 22rpx;
  box-sizing: border-box;

  .help {
    width: 176rpx;
    height: 176rpx;
    border-radius: 16rpx;
    margin-bottom: 16rpx;
  }

  .bottom {
    display: flex;
    align-items: center;
    justify-content: center;

    .money {
      width: 40rpx;
      height: 40rpx;
      margin-right: 15rpx;
    }
  }
}

// 最重要的是这个 要另外加样式，并且在另外的样式上用border-box
.active {
  filter: drop-shadow(0 0 0 5px black);
  border: 4rpx solid #b49aff;
  box-sizing: border-box;
}
</style>