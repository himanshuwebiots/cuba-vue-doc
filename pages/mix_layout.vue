<template>
	<div>
		<div class="card-header">
			<h4 class="main-title">Mixed Layout</h4>
		</div>
		<div class="card-body p-t-0">
			<p>
				Using the dark/light mode functionalities, we have created a few mixed
				layout modes.
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="@/assets/images/document/vue/codeSnaps/mixLayout.png"
					alt=""
				/>
			</div>
			<p id="typesOfLayoutOptions">In mix layout we have provided 3 options:</p>
			<ol>
				<li>Light Layout With Light Sidebar:</li>
				<li>Light Layout With dark sidebar</li>
				<li>Dark Layout With Dark Sidebar</li>
			</ol>
			<p>
				For applying the changes we change the value of the class property of
				the <strong> body</strong> tag.
			</p>
			<ul>
				<li id="lightLight">
					For
					<strong>Light Layout With Light Sidebar: </strong>
					class='light-only'
					<div class="d-flex justify-content-center align-items-center">
						<img
							class="img-fluid mb-3 img-border img-80"
							src="@/assets/images/document/vue/codeSnaps/layout_dubai.png"
							alt=""
						/>
					</div>
				</li>
				<li id="lightDark">
					For
					<strong>Light Layout With Dark Sidebar: </strong>
					class='dark-sidebar'
					<div class="d-flex justify-content-center align-items-center">
						<img
							class="img-fluid mb-3 img-border img-80"
							src="@/assets/images/document/vue/codeSnaps/layout_dubai_dark_sidebar.png"
							alt=""
						/>
					</div>
				</li>
				<li id="darkDark">
					For
					<strong>Dark Layout With Dark Sidebar: </strong>
					class='dark-only'
					<div class="d-flex justify-content-center align-items-center">
						<img
							class="img-fluid mb-3 img-border img-80"
							src="@/assets/images/document/vue/codeSnaps/layout_dubai_dark_layout.png"
							alt=""
						/>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
