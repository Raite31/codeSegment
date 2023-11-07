<!-- pagesA -->
<script>
export default {
	onPageScroll(e) {
		// 记录当前滚动位置
		uni.setStorageSync('scrollPosition', e.scrollTop);
	},
	onShow() {
		// 获取页面滚动距离
		this.scroll = uni.getStorageSync('scroll');
		// 单用uni.pageScrollTo可能会失效，加上setTimeout就万无一失
		setTimeout(() => {
			uni.pageScrollTo({
				scrollTop: this.scroll,
				duration: 0, // 间隔时间
			});
		}, 100);
		// 一定要加这个时间
	},
	methods: {
		// pageA中点击某个按钮触发
		jump() {
			const scrollPosition = uni.getStorageSync('scrollPosition');
			uni.navigateTo({
				url:
					'/pagesC/catCard/editImage?data=' +
					list +
					'&scroll=' +
					scrollPosition,
			});
		},
	},
};
</script>


<!-- pagesB -->
<script>
export default {
	async onLoad(options) {
		this.scroll = options.scroll;
	}
	methods: {
		jump() {
			// 屏幕滚动的记录
			uni.setStorageSync('scroll', this.scroll);
			this.app.goPage(-1);
		}
	}
};
</script>
