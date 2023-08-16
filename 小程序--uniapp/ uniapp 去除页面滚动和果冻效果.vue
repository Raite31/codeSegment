<template>
	<view class="page">
		<!-- 页面内容 -->
	</view>
</template>
<style>
.page {
  overflow: hidden;
  overscroll-behavior: none;
}
</style>

// 在上面的示例中，
overflow: hidden;将隐藏页面的滚动条，并禁止滚动。
overscroll-behavior: none;则会去除果冻效应，即在页面边缘滚动时不会出现弹性效果。 
// 请注意，overscroll-behavior属性可能不被所有浏览器完全支持，如果需要兼容性更好的解决方案，可以使用JavaScript来禁止页面滚动并去除果冻效应。以下是一个示例：

<template>
	<view class="page">
		<!-- 页面内容 -->
	</view>
</template>
<script>
export default {
	mounted() {
		document.body.style.overflow = 'hidden';
		document.body.style.overscrollBehavior = 'none';
	},
	beforeDestroy() {
		document.body.style.overflow = '';
		document.body.style.overscrollBehavior = '';
	},
};
</script>
