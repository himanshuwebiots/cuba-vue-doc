<template>
	<div class="row">
		<div class="col-sm-12">
			<h4 class="main-title">Theme Layouts</h4>
			<h4 class="sub-title" id="pages">Pages</h4>
			<p>
				We have pre-made multiple layout using all available customization
				options. Have a look at them and choose the combinations you like. You
				can also mix few layouts yourself and create your own designs.
			</p>
			<p>
				To View these layout, we have provided layout settings on the right side
				of the page. Click on the first icon, there you will find all the
				different layouts, named by the popular cities of the world.
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<nuxt-img
					class="img-fluid mb-3 img-border img-80"
					src="/assets/images/document/vue/codeSnaps/quickOptions.png"
				/>
			</div>
			<p>Layouts changes as the classes in the below given div tag changes.</p>
			<p>&lt;div class="page-wrapper LAYOUT_CLASSES_HERE"&gt;...&lt;/div&gt;</p>
			<h4 class="sub-title title-with-link" id="dubai">
				Dubai:
				<demoButton
					:path="'https://vue.pixelstrap.com/cuba/dashboard/default?layout=Dubai'"
				/>
			</h4>
			<p>
				Starting with the "Dubai" layout, it is the default layout we have used
				in our theme. Being simple and attractive, it serves the purpose of
				providing all essential components like sidebar and header all at one
				place, visible to the user.
			</p>
			<p>
				The Classes that needs to be added the above mentioned div are
				<strong> 'page-wrapper compact-wrapper'.</strong>
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_dubai.png"
					alt=""
				/>
			</div>

			<h4 class="sub-title title-with-link" id="london">
				London:
				<demoButton
					:path="'https://vue.pixelstrap.com/cuba/dashboard/default?layout=London'"
				/>
			</h4>
			<p>
				Next comes "London" layout. Without any sidebar or header, it is a
				perfect layout when you do not want any cluster in your page. You could
				use this layout while creating dashboard pages to show some graphical
				data.
			</p>
			<p>
				The Classes that needs to be added the above mentioned div are
				<strong> 'page-wrapper only-body'.</strong>
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_london.png"
					alt=""
				/>
			</div>

			<h4 class="sub-title title-with-link" id="seoul">
				Seoul:
				<demoButton
					:path="'https://vue.pixelstrap.com/cuba/dashboard/default?layout=Seoul'"
				/>
			</h4>
			<p>
				"Seoul" layout is similar to the Dubai layout, the difference here is
				that the sidebar is detached from the side of the screen and the header.
			</p>
			<p>
				The Classes that needs to be added the above mentioned div are
				<strong> ' page-wrapper compact-wrapper modern-type'.</strong>
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_seoul.png"
					alt=""
				/>
			</div>

			<h4 class="sub-title title-with-link" id="losAngeles">
				Los Angeles:
				<demoButton
					:path="'https://vue.pixelstrap.com/cuba/dashboard/default?layout=LosAngeles'"
				/>
			</h4>
			<p>
				Here comes the implementation of <strong>Boxed Layout</strong> with "Los
				Angeles" design. By shifting sidebar to the top of the page and changing
				the amount of space that content occupies, it gives us a unique page
				layout format.
			</p>
			<p>
				The Classes that needs to be added the above mentioned div are
				<strong> 'page-wrapper horizontal-wrapper material-type'.</strong>
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_los_angeles.png"
					alt=""
				/>
			</div>

			<h4 class="sub-title title-with-link" id="paris">
				Paris:
				<demoButton
					:path="'https://vue.pixelstrap.com/cuba/dashboard/default?layout=Paris'"
				/>
			</h4>
			<p>
				After messing around with different positions to place the sidebar, in
				"Paris" Layout we mess with colors. Sidebar has been given a dark
				background color with a bright and vibrant foreground.
			</p>
			<p>
				The Classes that needs to be added the above mentioned div are
				<strong> 'page-wrapper compact-wrapper dark-sidebar'.</strong>
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_paris.png"
					alt=""
				/>
			</div>

			<h4 class="sub-title title-with-link" id="tokyo">
				Tokyo:
				<demoButton
					:path="'https://vue.pixelstrap.com/cuba/dashboard/default?layout=Tokyo'"
				/>
			</h4>
			<p>
				If you need show more space for your page content and less for the
				sidebar. This layout is the one you want to choose. We have made the
				sidebar a bit compact to provide more space for the rest of the page.
			</p>
			<p>
				The Classes that needs to be added the above mentioned div are
				<strong> 'page-wrapper compact-sidebar'.</strong>
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_tokyo.png"
					alt=""
				/>
			</div>

			<h4 class="sub-title title-with-link" id="madrid">
				Madrid:
				<demoButton
					:path="'https://vue.pixelstrap.com/cuba/dashboard/default?layout=Madrid'"
				/>
			</h4>
			<p>
				Similar to the Paris layout, "Madrid" layout comes with the dark
				sidebar. But contrast between the background and foreground color is a
				bit lower than the paris layout. This setting make it easier for the
				eyes to transition between the sidebar and page content by keeping the
				dark setting for the sidebar.
			</p>
			<p>
				The Classes that needs to be added the above mentioned div are
				<strong> 'page-wrapper compact-wrapper color-sidebar'.</strong>
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_madrid.png"
					alt=""
				/>
			</div>

			<h4 class="sub-title title-with-link" id="moscow">
				Moscow:
				<demoButton
					:path="'https://vue.pixelstrap.com/cuba/dashboard/default?layout=Moscow'"
				/>
			</h4>
			<p>
				If you liked the tokyo layout but think that "Those text below the icons
				are not looking good, I just want the icons", we have made your wish
				come true. In "Moscow" layout, we have removed all text from the visible
				sidebar and kept just the icons.
			</p>
			<p>
				The Classes that needs to be added the above mentioned div are
				<strong> 'page-wrapper compact-sidebar compact-small'.</strong>
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_mascow.png"
					alt=""
				/>
			</div>
			<h4 class="sub-title title-with-link" id="newYork">
				New York:
				<demoButton
					:path="'https://vue.pixelstrap.com/cuba/dashboard/default?layout=NewYork'"
				/>
			</h4>
			<p>
				Fan of the boxed layout but also want sidebar with it? Look no further,
				"New York" layout is made for you. Along with the boxed-layout , we made
				sure that sidebar is also visible.
			</p>
			<p>
				The Classes that needs to be added the above mentioned div are
				<strong> 'page-wrapper compact-wrapper box-layout'.</strong>
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_newyork.png"
					alt=""
				/>
			</div>
			<h4 class="sub-title title-with-link" id="singapore">
				Singapore
				<demoButton
					:path="'https://vue.pixelstrap.com/cuba/dashboard/default?layout=Singapore'"
				/>
			</h4>
			<p>
				Okay so you don't like the boxed layout, and nor you want the navigation
				links on the side. Yup, we made that combination as well. Just copy the
				classes and use it. We have also fixed the header at the top,so that the
				user won't have to scroll all the way to top for navigating to other
				pages.
			</p>
			<p>
				The Classes that needs to be added the above mentioned div are
				<strong> 'page-wrapper horizontal-wrapper enterprice-type'.</strong>
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_singapore.png"
					alt=""
				/>
			</div>
			<h4 class="sub-title title-with-link" id="rome">
				Rome:
				<demoButton
					:path="'https://vue.pixelstrap.com/cuba/dashboard/default?layout=Rome'"
				/>
			</h4>
			<p>
				With the totally different header and using the concept of the boxed
				layout, we have kept just the page content in the boxed layout, creating
				a type of 3d effect. To make the effect more convincing we have kept the
				compact sidebar with only icons visible.
			</p>
			<p>
				The Classes that needs to be added the above mentioned div are
				<strong>
					'page-wrapper compact-sidebar compact-small material-icon'.</strong
				>
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_rome.png"
					alt=""
				/>
			</div>
			<h4 class="sub-title title-with-link" id="barcelona">
				Barcelona:
				<demoButton
					:path="'https://vue.pixelstrap.com/cuba/dashboard/default?layout=Barcelona'"
				/>
			</h4>
			<p>
				If the header is in the way on scroll when you are using singapore
				layout, we have removed the fixed header in the "Barcelona" layout. If
				your page content is short then this layout will work for you.
			</p>
			<p>
				The Classes that needs to be added the above mentioned div are
				<strong>
					'page-wrapper horizontal-wrapper enterprice-type
					advance-layout'.</strong
				>
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layout_barcelona.png"
					alt=""
				/>
			</div>
			<h4 class="sub-title">Set Default Layout Setting</h4>
			<p>
				When you are done with tweaking around with the settings of the layout
				and want to make those changes as the default settings, we have given a
				configure button on the top of the theme-customizer, click on it.
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/copySettingsQuickOptions.png"
					alt=""
				/>
			</div>
			<p>copy the settings from the dialog box</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/copyLayoutSettings.png"
					alt=""
				/>
			</div>
			<p>
				And paste them in the
				<strong> src>data>theme>layout.json</strong> file
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/layoutJSON.png"
					alt=""
				/>
			</div>
			<p class="warning-block">
				<strong>Note:</strong>Please make sure to import the necessary scss
				files or else the styles won't apply.
			</p>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
