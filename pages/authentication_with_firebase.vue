<template>
	<div id="section-1">
		<div>
			<div id="section-1-1">
				<div class="card-header">
					<h4 class="main-title title-with-link">
						Authentication With Firebase
						<demoButton
							supplementPath="https://vuejs.org/v2/examples/firebase.html"
						/>
					</h4>
				</div>
				<div class="card-body">
					<h4 class="sub-title" id="useOfFirebase">
						Basically Firebase is used for:
					</h4>
					<ul>
						<li>Email and password authentication with Firebase,</li>
						<li>
							Social authentication with Facebook and Google, Twitter etc..
						</li>
						<li>Manage Complete Database on Cloud</li>
						<li>Hosting</li>
						<li>Password recovery,</li>
						<li>Verification emails,</li>
						<li>
							Storing and accessing the authentication state using the browser's
							localStorage
						</li>
					</ul>
					<p>
						There are also many other use of firebase that you can find from
						reference which we have attach below.
					</p>
					<h4 class="sub-title" id="prerequisites">Prerequisites:</h4>
					<p class="mb-1">You must have the following prerequisites:</p>
					<ul>
						<li>
							Recent versions of Node.js and NPM. You can install them from
							their official website,
						</li>
						<li>Vue Cli installed<b>(npm install -g @vue/cli)</b></li>
					</ul>
					<h5 class="inner-sub-title">
						Let's follow below step to secure your application
					</h5>

					<h6 class="inner-sub-title" id="step1">Step 1:</h6>
					<ul class="list-none">
						<li>
							<p class="mb-2">1. setup firebase project in firebase console.</p>
							<img
								class="img-fluid img-border"
								src="@/assets/images/document/firebase/1.png"
								alt=""
							/>
							<p class="mt-2 mb-3">click on Get Started button</p>
						</li>
						<li>
							<p class="mb-2">2. Add new project</p>
							<img
								class="img-fluid img-border mb-3"
								src="@/assets/images/document/firebase/2.png"
								alt=""
							/>
							<p class="mt-2 mb-2">create new project</p>
							<img
								class="img-fluid img-border mb-2"
								src="@/assets/images/document/firebase/3.png"
								alt=""
							/>
							<p class="mb-3">
								Accept the controler-terms and click on Create Project
							</p>
						</li>
						<li>
							<p class="mb-3">3. Go to Develop > Authentication</p>
						</li>
						<li>
							<p class="mb-3">4. Get config object for your web app</p>
							<p class="mb-2 ps-4">
								To get the config object for a Firebase Web App:
							</p>
							<ul class="list-none">
								<li>
									<p class="mb-2">
										>> Click the Settings icon, then select Project settings.
									</p>
									<img
										class="img-fluid img-border mb-3"
										src="@/assets/images/document/firebase/24.png"
										alt=""
									/>
								</li>
								<li>
									<p class="mb-2">>> Go to the web app</p>
									<img
										class="img-fluid img-border mb-3"
										src="@/assets/images/document/firebase/19.png"
										alt=""
									/>
								</li>
								<li>
									<p class="mb-2">
										>> In Your apps card, select the nickname of the app for
										which you need a config object.
									</p>
									<img
										class="img-fluid img-border mb-3"
										src="@/assets/images/document/firebase/20.png"
										alt=""
									/>
								</li>
								<li>
									<p class="mb-2">
										>> Select Config from the Firebase SDK snippet pane.
									</p>
									<img
										class="img-fluid img-border"
										src="@/assets/images/document/firebase/21.png"
										alt=""
									/><img
										class="img-fluid img-border mb-3 mt-3"
										src="@/assets/images/document/firebase/22.png"
										alt=""
									/><img
										class="img-fluid img-border mb-3"
										src="@/assets/images/document/firebase/23.png"
										alt=""
									/>
								</li>
								<li>
									<p class="mb-2">
										>> Copy the config object snippet, then add it to your app's
										HTML.
									</p>
									<img
										class="img-fluid img-border"
										src="@/assets/images/document/firebase/4.png"
										alt=""
									/>
									<p class="mt-2">copy config add on config.txt</p>
								</li>
							</ul>
						</li>
						<li>
							<p class="mb-2">
								5. Next, you'll need to enable Email authentication from the
								authentication > Sign-in method tab:
							</p>
							<img
								class="img-fluid img-border mb-3"
								src="@/assets/images/document/firebase/5.png"
								alt=""
							/>
						</li>
						<li>
							<p class="mb-2">6. go to sign in method</p>
							<img
								class="img-fluid img-border mb-3"
								src="@/assets/images/document/firebase/6.png"
								alt=""
							/>
							<p class="mb-2">Make disble toggle to enable, and save changes</p>
							<img
								class="img-fluid img-border mb-3"
								src="@/assets/images/document/firebase/7.png"
								alt=""
							/><img
								class="img-fluid img-border mb-3"
								src="@/assets/images/document/firebase/25.png"
								alt=""
							/>
						</li>
						<li>
							<p class="mb-2">
								7. Go to the authentication > Users tab then click on the Add
								user button and genarate email and password:
							</p>
							<img
								class="img-fluid img-border mb-3"
								src="@/assets/images/document/firebase/8.png"
								alt=""
							/><img
								class="img-fluid img-border mb-3"
								src="@/assets/images/document/firebase/11.png"
								alt=""
							/>
						</li>
					</ul>
					<h6 class="inner-sub-title" id="step2">Step 2:</h6>
					<ul class="list-none mb-0">
						<li>
							1. Installing Firebase in Vue
							<div class="py-2 ps-3">
								<div class="code-box-copy">
									<codeBox :code="prismCodes.installFirebase" />
								</div>
							</div>
						</li>
						<li>
							<p>
								2. Go to main.js file and import firebase and in config object
								you can just paste your firebase credential for your app.
							</p>
							<img
								class="img-fluid img-border mb-3"
								src="@/assets/images/document/firebase/firebase1.jpg"
								alt=""
							/>
						</li>
						<li>
							<p>
								3. In Routing index.js place following code for restricated use
								to open a admin theme without login
							</p>
							<img
								class="img-fluid img-border mb-3"
								src="@/assets/images/document/firebase/auth.png"
								alt=""
							/>
						</li>
						<li>
							<p>
								4. Generate components in auth folder called Login and Register
								and use firebase in Login and Register component according to
								your needs.
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div>
			<div id="section-1-2">
				<div class="card-header" id="removeFirebase">
					<h4 class="mb-0">How to remove the firebase from cuba theme ?</h4>
				</div>
				<div class="card-body">
					<ul class="list-none">
						<li>
							<p class="mb-2">
								1. Remove Import statement and configuration of firebase from
								your
								<b>main.js</b>
							</p>
							<img
								class="img-fluid img-border mb-4"
								src="@/assets/images/document/firebase/firebase1.jpg"
								alt=""
							/>
						</li>
						<li>
							<p class="mb-2">
								2. Remove code from <b>route >> index.js </b>which is for
								restricating user to directly use dashboard without login
							</p>
							<div class="py-2 ps-3">
								<div class="code-box-copy">
									<codeBox :code="prismCodes.removeFirebase" />
								</div>
							</div>
						</li>
						<li>
							<p class="mb-0">
								3. Remove all methods called Google, Facebook and others which
								is created for that particular social media login and just use
								simple login page, and on click of login just redirect to
								dashboard.And if you don't want to use login also just remove
								complete auth folder
							</p>
						</li>
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
	data() {
		return {
			prismCodes: {
				installFirebase: `npm install ——save firebase`,
				removeFirebase: `router.beforeEach((to, from, next) => {
firebase.auth().onAuthStateChanged(() => {
    if(to.meta.title)
    document.title = to.meta.title;
    const CurrentUser = firebase.auth().currentUser;
    const path = ['/auth/login','/auth/register'];
    if (path.includes(to.path) || to.path || CurrentUser && Userauth.isAuthenticated()){
    return next();
    }
    next('/auth/login')
  });
});`,
			},
		};
	},
	mounted() {
		this.$nuxt.$emit("setContentClasses", "col-xxl-10 col-xl-9 component-col");
	},
};
</script>

<style></style>
