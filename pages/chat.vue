<template>
	<div id="section-1">
		<div id="section-1-1">
			<div class="card-body">
				<h4 class="main-title title-with-link">
					Chat
					<demoButton path="https://vue.pixelstrap.com/cuba/app/chat" />
				</h4>
				<p>
					Another application provided with in this theme is chat application.
					Here we have provided design to create your own chat application. We
					have kept in mind all basic necessities of the chat application and
					have created design according to it. You can integrate this design
					with your backend and make this application fully functional.
				</p>
				<div class="d-flex justify-content-center align-items-center">
					<img
						class="img-border img-fluid"
						src="@/assets/images/apps/chats.gif"
						alt="img1"
					/>
				</div>
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
