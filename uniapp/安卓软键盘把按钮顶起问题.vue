<template>
	<div class="contain">
		<view> </view>
		<view> </view>
		<view> </view>
		<button>提交</button>
	</div>
</template>
<style lang="scss">
// 首先 不能用position: fixed，这个属性就会导致这样的问题
.contain {
	button {
		position: absolute;
		bottom: 20%;
		&::after {
			border: none;
		}
	}
}
</style>
