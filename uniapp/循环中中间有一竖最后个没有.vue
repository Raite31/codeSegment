<template>
	<div>
		<text
			class="design-text"
			v-for="(item, index) in model.design_position"
			:key="index"
		>
			{{ item.name}}{{ index == model.design_position.length - 1 ? '' : ' | ' }}
		</text>
	</div>
</template>

<script>
export default {i
	data() {
		return {
			model: {
				design_position: '',
			},
		};
	},
};
</script>
