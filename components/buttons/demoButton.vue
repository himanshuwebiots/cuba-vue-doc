<template>
	<div :class="parentClasses">
		<a
			class="badge badge-primary-light"
			v-if="supplementPath"
			:href="supplementPath"
			target="_blank"
			>Official Link <i class="fa-solid fa-arrow-up-right-from-square"></i
		></a>
		<a
			class="badge badge-primary-light"
			v-if="path"
			:href="path"
			target="_blank"
			>Preview Link <i class="fa-solid fa-arrow-up-right-from-square"></i
		></a>
	</div>
</template>

<script>
export default {
	props: ["path", "parentClasses", "supplementPath"],
};
</script>

<style></style>