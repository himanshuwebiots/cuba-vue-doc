<template>
	<div>
		<div class="card-header">
			<h4 class="main-title">Sidebar Options</h4>
		</div>
		<div class="card-body p-t-0">
			There are 3 Sidebar Settings in our theme:
			<ol>
				<li>Default</li>
				<li>Bordered</li>
				<li>Icon Color</li>
			</ol>
			<p>Lets look at them one by one.</p>
			<h4 class="sub-title" id="defaultSidebar">Default Sidebar:</h4>
			<p>Shows the sidebar with default style.</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_dubai.png"
					alt=""
				/>
			</div>
			<h4 class="sub-title" id="borderedSidebar">Bordered Sidebar:</h4>
			<p>Shows the sidebar with a border below every link..</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/dubai_layout_bordered_sidebar.png"
					alt=""
				/>
			</div>
			<h4 class="sub-title" id="iconColorSidebar">Icon Color Sidebar:</h4>
			<p>Shows the sidebar with beautiful colored icons .</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_dubai_color_icons.png"
					alt=""
				/>
			</div>
			<p>
				These changes are applied by changing the value of sidebar-layout
				property in the sidebar component.
			</p>
			<p>
				If you like a particular type of sidebar and want to use that one in you
				website, then just copy the sidebar.scss file and add the necessary
				class to the sidebar-layout property in
				<strong> theme>src>components>body.vue</strong> file.
			</p>

			<ul>
				<li>sidebar-layout = 'default-sidebar' for the default sidebar.</li>
				<li>sidebar-layout = 'border-sidebar' for the bordered sidebar.</li>
				<li>
					sidebar-layout = 'iconcolor-sidebar' for the colored icons in sidebar.
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
