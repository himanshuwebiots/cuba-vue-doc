<template>
	<div>
		<div class="card-header">
			<h4 class="main-title">Sidebar Icon</h4>
		</div>
		<div class="card-body p-t-0">
			There are 2 Sidebar Icon in our theme:
			<ol>
				<li>Stroke Icon</li>
				<li>Fill Icon</li>
				<!-- <li>Icon Color</li> -->
			</ol>
			<p>Lets look at them one by one.</p>
			<h4 class="sub-title" id="strokeIcon">Stroke Icon:</h4>
			<p>Shows the Stroke Icons  </p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/newImages/dubai.png"
					alt=""
				/>

			</div>
			<p>
				To have all the sidebar icons to be stroke add <code>sidebar-layout </code>= <strong> 'stroke-svg'</strong> attribute in below mentioned div
				
			</p>
			<h4 class="sub-title" id="fillIcon">Fill Icon:</h4>
			<p>Shows the  Fill Icon</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/newImages/fillIcon.png"
					alt=""
				/>
			</div>
			<p>
				To have all the sidebar icons to be fill add <code>sidebar-layout </code>= <strong> 'fill-svg'</strong> attribute in below mentioned div
				
			</p>

			<p>
				These changes are applied by changing the attribute in the below given div .
			</p>
			<code>

				&lt;div class="sidebar-wrapper close_icon" sidebar-layout="ATTRIBUTE_VLAUE" &gt;...&lt;/div&gt;
			</code>

		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
