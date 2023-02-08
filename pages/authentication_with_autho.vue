<template>
	<div id="section-1">
		<div >
			<div id="section-1-1">
				<div class="card-header">
					<h4 class="main-title title-with-link">
						Auth0
						<demoButton
							supplementPath="https://auth0.com/docs/libraries/auth0js"
						/>
					</h4>
				</div>
				<div class="card-body">
					<h4 class="sub-title" id="useOfAuth0">Uses Of Auth0:</h4>
					<p>
						Auth0 is a flexible, drop-in solution to add authentication and
						authorization services to your applications. Your team and
						organization can avoid the cost, time, and risk that comes with
						building your own solution to authenticate and authorize users.
					</p>
					<p class="mb-4">
						You can connect any application (written in any language or on any
						stack) to Auth0 and define the identity providers you want to use
						(how you want your users to log in). Based on your app's technology,
						choose one of our <b>SDKs (or call our API), </b>and hook it up to
						your app. Now each time a user tries to authenticate, Auth0 will
						verify their identity and send the required information back to your
						app.
					</p>
					<h4 class="sub-title" id="prerequisites">Prerequisites</h4>
					<p class="mb-1">You must have the following prerequisites:</p>
					<p class="mb-1">
						Recent versions of Node.js and NPM. You can install them from their
						official website,
					</p>
					<p class="mb-4">
						Vue Cli installed <b>(npm install -g @vue/cli )</b>
					</p>
					<h6 class="inner-sub-title">
						Let's follow below step to secure your application
					</h6>
					<h6 class="inner-sub-title" id="step1">Step 1:</h6>
					<ul class="list-none">
						<li>
							<p class="mb-2">1. setup auth0 project in auth0 console.</p>
							<div class="d-flex justify-content-center align-items-center">
								<img
									class="img-fluid mb-3 img-border img-80"
									src="@/assets/images/document/auth0/1.png"
									alt=""
								/>
							</div>

							<p class="mt-2 mb-3">Click on Get Started</p>
						</li>
						<li>
							<p class="mb-2">
								2. Now Go to second option Integrate Auth0 into your application
								and click on
								<b>Create Application</b>
							</p>
							<div class="d-flex justify-content-center align-items-center">
								<img
									class="img-fluid mb-3 img-border img-80"
									src="@/assets/images/document/auth0/2.jpg"
									alt=""
								/>
							</div>
						</li>
						<li>
							<p class="mb-2">
								3. <b>Choose an application type : </b>Select Single Page Web
								Application and click on Create Button
							</p>
							<div class="d-flex justify-content-center align-items-center">
								<img
									class="img-fluid mb-3 img-border img-80"
									src="@/assets/images/document/auth0/3.jpg"
									alt=""
								/>
							</div>
						</li>
						<li>
							<p class="mb-2">4. Select Technology</p>
							<div class="d-flex justify-content-center align-items-center">
								<img
									class="img-fluid mb-3 img-border img-80"
									src="@/assets/images/document/auth0/4.png"
									alt=""
								/>
							</div>
						</li>
						<li>
							<p class="mb-2">
								5. Now go to setting tabs and show basic information about your
								auth0 application name , domain , client id and Set your
								Callback , Logout and Web Origins Url
							</p>
							<div class="d-flex justify-content-center align-items-center">
								<img
									class="img-fluid mb-3 img-border img-80"
									src="@/assets/images/document/auth0/5.png"
									alt=""
								/>
							</div>
						</li>
					</ul>
					<h6 class="inner-sub-title" id="step2">Step 2:</h6>
					<ul class="list-none mb-0">
						<li class="w-100">
							1. Installing Auth0 in Vue
							<div class="py-2 ps-3">
								<div class="code-box-copy">
									<codeBox :code="prismCodes.installAuth0" />
								</div>
							</div>
						</li>
						<p class="mb-1 mt-4">Now You can Authenticate users using auth0.</p>
						<p class="warning-block">
							<strong>Tip:</strong>Navigate to
							<span class="bold"
								>theme>src>pages>authentication>login_with_validation</span
							>
							page to refer the code.
						</p>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { highlight, languages } from "prismjs/components/prism-core";
export default {
	methods: {
		highlighter(code) {
			return highlight(code, languages.js); // languages.<insert language> to return html with markup
		},
	},
	mounted() {
		this.$nuxt.$emit("setContentClasses", "col-xxl-10 col-xl-9 component-col");
	},
	data() {
		return {
			prismCodes: {
				installAuth0: `npm install ——save auth0-js`,
			},
		};
	},
};
</script>

<style></style>
