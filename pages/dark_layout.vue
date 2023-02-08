<template>
	<div>
		<div class="card-header">
			<h4 class="main-title">Dark Layout</h4>
		</div>
		<div class="card-body p-t-0">
			<p>
				Though it is not recommended to work on the computer in the dark , but
				in case the user is working in those conditions, it is essential to
				protect the eyes from the bright light of the screen. To make sure user
				has a great experience using this site, we have provided dark mode.
			</p>
			<p>
				Toggle Dark Mode by clicking on the moon icon
				<i class="fa fa-moon"></i>in the header.
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/dark_mode_button.png"
					alt=""
				/>
			</div>
			<p></p>

			<h4 class="sub-title" id="darkLayoutApplies">
				How dark layout apply to the theme?
			</h4>
			<p>
				To toggle the between dark and light layout, we just have to make sure
				that we add <strong> "dark-only"</strong> class in the body tag when the
				dark layout is activated and remove it when it is deactivated.
			</p>
			<h6 id="layoutWithDarkOnly">
				Layout With <strong> "dark-only"</strong> class added:
			</h6>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_dubai_dark_layout.png"
					alt=""
				/>
			</div>
			<h6 id="layoutWithoutDarkOnly">
				Layout Without <strong> "dark-only"</strong> class:
			</h6>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_dubai.png"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
