<template>
	<div>
		<div class="card-header">
			<h4 class="main-title">Create New Page</h4>
		</div>
		<div class="card-body p-t-0">
			<p>Here We will see how to create a new page.</p>
			<p>
				First we will create a folder inside
				<span class="bold"> src>pages</span>. We recommend creating files
				according to the structure you make in the navigation bar, this makes
				managing and accessing the files easier.
			</p>
			<p>
				For Example: we need to create a page inside some category and give the
				link in the navigation bar. Our link looks something like this:.
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border"
					style="width: 60%"
					src="@/assets/images/document/vue/codeSnaps/createPageNavBar.png"
					width="100px"
					alt=""
				/>
			</div>
			<p>
				Now According to our sidebar we have make the folder structure. We will
				create "parent" folder inside <span class="bold"> src>pages</span>. And
				inside parent folder we create childlink1.vue and childlink2.vue files.
			</p>

			Now that we have created our files, we need to create routes to render
			those pages.
			<p class="alert-box alert alert-primary mt-4">
				<strong>Tip:</strong>
				You can find information on creating routes in our
				<a href="routingVue.html">Guide to Routing</a>
			</p>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
