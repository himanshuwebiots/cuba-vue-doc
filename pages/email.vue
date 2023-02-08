<template>
	<div id="section-1">
		<h4 class="main-title title-with-link">
			Email
			<demoButton path="https://vue.pixelstrap.com/cuba/app/email" />
		</h4>
		<div id="section-1-1">
			<div class="card-body">
				<p>
					To keep things professional you can add integrate the email
					application with this theme, to share the important information with
					your colleagues. We have provided a design for the email application,
					you can use it and build a fully functional e-mail application.
				</p>
				<div class="d-flex justify-content-center align-items-center">
					<img
						class="img-border img-fluid"
						src="@/assets/images/apps/email.gif"
						alt="img1"
					/>
				</div>
				<p>See the design of the email application at the below given link.</p>
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
