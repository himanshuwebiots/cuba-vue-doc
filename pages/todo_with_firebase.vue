<template>
	<div id="section-1">
		<h4 class="main-title title-with-link">To-Do with Firebase
			<demoButton path="https://vue.pixelstrap.com/cuba/app/firebase-todo" />
			
		</h4>
		<div id="section-1-1">
			<div class="card-body">
				<p>
					Although you can you your own database to integrate it with the to-do
					application, but to reduce this hassle of integrating a database we
					have already integrated it with the firebase-firestore. You just have
					to provide proper credentials to setup the firebase and the
					application will be fully functional.
				</p>
				<div class="d-flex justify-content-center align-items-center">
					<img
						class="img-border img-fluid"
						src="@/assets/images/apps/to-do-firebase.gif"
						alt="img1"
					/>
				</div>
				<p>
					Have a look at the integrated to-do application with the below given
					link. In this application you will notice that when you reload the
					page, all the data will be retained.
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
