<template>
	<div id="section-1">
		<h4 class="main-title title-with-link">
			To-Do
			<demoButton path="https://vue.pixelstrap.com/cuba/app/todo" />
		</h4>
		<div id="section-1-1">
			<div class="card-body">
				<p>
					As an admin there are many tasks one have to keep in mind. To keep
					track of all those tasks, a to-do application has been provided. All
					the functionalities that a to-do application requires has been already
					given so the user doesn't have to download and install any other
					application.
				</p>
				<div class="d-flex justify-content-center align-items-center">
					<img
						class="img-border img-fluid"
						src="@/assets/images/apps/to-do.gif"
						alt="img1"
					/>
				</div>
				<p>
					Below link takes you to the design of the application, but it is just
					the design, data won't be stored anywhere, if you reload the page you
					will notice that changes will be gone. You can store and modify the
					todo list by storing it in the database of your liking. To make it
					easier of the developers we have already give the to-do application
					integrated with firebase-firestore.
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
