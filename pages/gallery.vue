<template>
	<div id="section-1">
		<h4 class="main-title title-with-link">
			Gallery
			<demoButton path="https://vue.pixelstrap.com/cuba/gallery/grid-gallery" />
		</h4>
		<div id="section-1-1">
			<div class="card-body">
				<p>
					There will be many situations where you want to use the images, and to
					present the images in more elegant manner, we have created a gallery
					application. You can use it to display images or use the effects used
					in the gallery application and implement in those places where you are
					using the images.
				</p>
				<div class="d-flex justify-content-center align-items-center">
					<img
						class="img-border img-fluid"
						src="@/assets/images/apps/gallery.gif"
						alt="img1"
					/>
				</div>
				<p>
					There are many different options provided in the gallery application,
					you can check them out by following the link give beside title.
				</p>
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
