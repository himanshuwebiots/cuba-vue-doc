<template>
	<div id="section-1">
		<div>
			<div id="section-1-1">
				<div class="card-header">
					<h4 class="main-title">JWT</h4>
				</div>
				<div class="card-body">
					<h6 class="sub-title" id="useOfJwt">Basically JWT use for:</h6>
					<p>Here are some scenarios where JSON Web Tokens are useful:</p>
					<h5 class="inner-sub-title" id="authorization">Authorization:</h5>
					<p>
						This is the most common scenario for using JWT. Once the user is
						logged in, each subsequent request will include the JWT, allowing
						the user to access routes, services, and resources that are
						permitted with that token. Single Sign On is a feature that widely
						uses JWT nowadays, because of its small overhead and its ability to
						be easily used across different domains.
					</p>
					<h5 class="inner-sub-title" id="informationExchange">
						Information Exchange:
					</h5>
					<p>
						JSON Web Tokens are a good way of securely transmitting information
						between parties. Because JWTs can be signed—for example, using
						public/private key pairs—you can be sure the senders are who they
						say they are. Additionally, as the signature is calculated using the
						header and the payload, you can also verify that the content hasn't
						been tampered with.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		this.$nuxt.$emit("setContentClasses", "col-xxl-10 col-xl-9 component-col");
	},
};
</script>

<style></style>
