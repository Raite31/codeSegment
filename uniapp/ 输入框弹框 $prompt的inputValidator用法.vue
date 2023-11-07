<script>
const promptRes = await this.$prompt('请输入原因', '提示', {
	confirmButtonText: '确定',
	cancelButtonText: '取消',
	inputValidator: (value) => {
		if (!value.trim()) {
			return '内容不能为空';
		}
		if (value.length > 40) {
			return '内容不能超过40个字符';
		}
		return true;
	},
});
</script>
