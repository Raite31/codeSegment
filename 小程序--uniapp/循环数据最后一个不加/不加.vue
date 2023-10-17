<template>
	<view class="flex fh space-between" @click="designShow = true">
		<view class="">
			<text
				class="design-text"
				v-for="(item, index) in model.design_position"
				:key="index"
			>
				{{ item.name }}
				{{ index == model.design_position.length - 1 ? '' : ' | ' }}
			</text>
		</view>
		<u-icon name="arrow-right" color="rgba(153, 153, 153, 1)"></u-icon>
	</view>
</template>
