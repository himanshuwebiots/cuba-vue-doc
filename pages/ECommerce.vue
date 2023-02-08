<template>
	<div id="section-1">
		<div id="section-1-1">
			<div class="card-body">
				<h4 class="main-title title-with-link">
					ECommerce
					<demoButton
						path="https://vue.pixelstrap.com/cuba/ecommerce/product"
					/>
				</h4>
				<p>
					We have made many different applications to help you with your admin
					side work. Amongst those is an E-Commerce application
				</p>
				<div class="d-flex justify-content-center align-items-center">
					<img
						class="img-border img-fluid"
						src="@/assets/images/apps/ecommerce.gif"
						alt="img1"
					/>
				</div>
				<p>
					You can directly use complete E-commerce app to manage your E-commerce
					with ready-made functionality of Add to cart,Quick-view, and Checkout
					with Stripe as well as Paypal. Apart from that if you want to use it
					in your frontend application then you just need to change your json
					with your API data and you get complete workable E-commerce for your
					frontend.
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
