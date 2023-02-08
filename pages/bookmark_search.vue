<template>
	<div id="section-1">
		<h4 class="main-title title-with-link">
			Bookmark Search
			<demoButton path="https://vue.pixelstrap.com/cuba/app/bookmark" />
		</h4>
		<div id="section-1-1">
			<div class="card-body">
				<p>
					There will are numerous pages in this theme, and it might be a bit
					difficult to navigate arround. To solve this we have added bookmark
					app, where you can bookmark the pages you visit the most within the
					theme, and quickly access them.
				</p>
				<div class="d-flex justify-content-center align-items-center">
					<img
						class="img-border img-fluid"
						src="@/assets/images/apps/bookmark-search.gif"
						alt="img1"
					/>
				</div>
				<p>Have a look at the Bookmark app at the below given link.</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<script>
export default {
	mounted() {
		this.$nuxt.$emit("setContentClasses", "col-xxl-10 col-xl-9 component-col");
	},
};
</script>
