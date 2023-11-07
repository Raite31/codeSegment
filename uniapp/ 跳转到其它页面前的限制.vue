<script>
onBeforeRouteLeave(async (to) => {
	if (store.isLogin && isRefineInformation.value) {
		ElMessage({
			message: '请完善必填信息!',
			type: 'error',
		});
		return false;
	}
	return true;
});
</script>
