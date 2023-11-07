<template>
	<div class="list">
		<header />
		<div class="list_container">
			<div class="container_body">
				<template v-if="loading">
					<el-skeleton style="width: 640px" animated class="skeleton">
						<template #template>
							<el-skeleton-item
								variant="image"
								style="width: 640px; height: 160px"
							/>
							<div style="padding: 14px">
								<el-skeleton-item variant="text" animated />
							</div>
						</template>
					</el-skeleton>
				</template>
				<template v-if="!loading">
					<div class="listArea">
						<div class="switchButton">
							<el-button @click="getData(1)">专家人气榜</el-button>
							<el-button @click="getData(2)">专家活跃榜</el-button>
						</div>
						<List :data="lists" />
					</div>
				</template>
			</div>
		</div>
		<footer />
	</div>
</template>

<style lang="scss">
.list_container {
  min-width: 1200px;
  background: #f3f7ff url('@/assets/images/liveStreaming/bg.png') 100% 100% no-repeat;
  .container_body {
    width: 100%;
    background: #f3f7ff url('@/assets/images/liveStreaming/bg.png') 100% 100% no-repeat;
    background-position: top center;
    padding-bottom: 60px;
    min-height: 1000px;
    .listArea {
      width: 848px;
      min-height: 652px;
      margin: 0 auto;
      padding-top: 188px;
    }
  }
}
</style>
