<template>
	<swiper
		:current="tabCurrentIndex"
		class="swiper-box"
		duration="300"
		:disable-touch="true"
		@change="swiperChange"
	>
	</swiper>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		// 监听tabs下方左右切换
		swiperChange(e) {
			this.tabCurrentIndex = e.detail.current;
		},
	},
};
</script>
