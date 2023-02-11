<template>
	<div>
		<div class="card-header">
			<h4 class="main-title">Sidebar Type</h4>
		</div>
		<div class="card-body p-t-0">
			There are 2 Sidebar Type in our theme:
			<ol>
				<li>Vertical</li>
				<li>Horizontal</li>
				<!-- <li>Icon Color</li> -->
			</ol>
			<p>Lets look at them one by one.</p>
			<h4 class="sub-title" id="defaultSidebar">Vertical Sidebar:</h4>
			<p>Shows the vertical sidebar </p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_dubai.png"
					alt=""
				/>

			</div>
			<p>
				The Classes that needs to be added to below mentioned div are
				<strong> 'compact-wrapper'.</strong>
			</p>
			<h4 class="sub-title" id="borderedSidebar">Horizontal Sidebar:</h4>
			<p>Shows the Horizontal sidebar</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/dubai_layout_bordered_sidebar.png"
					alt=""
				/>
			</div>
			<p>
				The Classes that needs to be added to below mentioned div are
				<strong> 'horizonatl-wrapper'.</strong>
			</p>
			<!-- <h4 class="sub-title" id="iconColorSidebar">Icon Color Sidebar:</h4>
			<p>Shows the sidebar with beautiful colored icons .</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_dubai_color_icons.png"
					alt=""
				/>
			</div> -->
			<p>
				These changes are applied by changing the classes in the below given div tag changes.
			</p>
			<code>

				&lt;div class="page-wrapper LAYOUT_CLASSES_HERE"&gt;...&lt;/div&gt;
			</code>

		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
