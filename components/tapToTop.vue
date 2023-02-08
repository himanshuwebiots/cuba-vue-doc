<template>
	<div class="tap-top d-block" v-if="showTapToTop" @click.prevent="toTop">
		<i class="fa-solid fa-angles-up"></i>
		<p>Top</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			showTapToTop: false,
		};
	},
	methods: {
		toTop() {
			if (this.$route.fullPath.includes("#"))
				this.$router.push(this.$route.path);
			else this.$router.push("#");
		},
		handleScroll() {
			if (window.scrollY > 500) {
				this.showTapToTop = true;
			} else {
				this.showTapToTop = false;
			}
		},
	},
	mounted() {
		document.addEventListener("scroll", this.handleScroll);
	},
	unmounted() {
		document.removeEventListener("scroll", this.handleScroll);
	},
};
</script>

<style>
</style>