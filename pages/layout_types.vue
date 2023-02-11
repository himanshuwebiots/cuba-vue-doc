<template>
	<div>
		<div class="card-header">
			<h4 class="main-title">Theme Customizer</h4>
		</div>
		<div class="card-body p-t-0">
			<p>
				To make this theme according to your preferences we have provided a
				customizer bar, where you can tweak colors and layout type of the page,
				primary and secondary colors of the theme, and the layout of the
				sidebar. We have also provided a configure button from where you can
				copy the settings and paste in the layout.json file and get the
				customised layout by as the default layout.
			</p>
			<p>You can find Theme customizer on the right side of every page.</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="@/assets/images/document/vue/codeSnaps/newImages/customizer.png"
					alt=""
				/>
			</div>

			<p>
				There are multiple customizations, we will talk about all individually.
			</p>
			<h4 class="sub-title" id="layoutTypes">Layout Types:</h4>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="@/assets/images/document/vue/codeSnaps/newImages/layoutType.png"
					alt=""
				/>
			</div>
			<p>
				There are 3 layout types in our theme:
				<strong> LTR,RTL and Boxed layout</strong>.
			</p>
			<p class="warning-block">
				<strong>Info:</strong> Why RTL & LTR? Through out the world, there are
				many languages and some of them are written from right to left. So
				taking that into consideration we have given the option to change to
				Right To Left mode.
			</p>
			<ul>
				<li>
					<h5 class="inner-sub-title" id="ltr">LTR:</h5>

					<p>It will show content from left to right.</p>
					<div class="d-flex justify-content-center align-items-center">
						<img
							class="img-fluid mb-3 img-border img-80"
							src="@/assets/images/document/vue/codeSnaps/newImages/dubai.png"
							alt=""
						/>
					</div>
				</li>
				<li>
					<h5 class="inner-sub-title" id="rtl">RTL:</h5>
					<p>
						Languages like <strong> Arabic , Urdu , Persian </strong> etc.. are
						written from right to left. For the users using these languages rtl
						option is provided. .
					</p>
					<div class="d-flex justify-content-center align-items-center">
						<img
							class="img-fluid mb-3 img-border img-80"
							src="@/assets/images/document/vue/codeSnaps/newImages/rtl.png"
							alt=""
						/>
					</div>
				</li>
				<li>
					<h5 class="inner-sub-title" id="boxed">Boxed:</h5>
					<p>
						If you want to be more creative , you can integrate the boxed layout
						in your website, to attract the focus of the user on the content.
					</p>
					<div class="d-flex justify-content-center align-items-center">
						<img
							class="img-fluid mb-3 img-border img-80"
							src="@/assets/images/document/vue/codeSnaps/newImages/box.png"
							alt=""
						/>
					</div>
				</li>
			</ul>

			<p>
				To change the layout type we change the dir value in html tag through
				the click event on the theme-customizer icons. And according to the dir
				value, content style will change. Style for all the layout are given in
				the layouts folder, make sure to include those files in the folder if
				you are planning to use different layouts.
			</p>
			<ol>
				<li>dir='ltr' for the LTR layout.</li>
				<li>dir='rtl' for the RTL layout.</li>
				<li>dir='box-layout' for the Boxed-layout layout.</li>
			</ol>
			<p class="warning-block">
				<strong>Note:</strong> Make sure to import the necessary scss files or
				else the styles won't apply.
			</p>

			<h5 class="sub-title" id="setDefaultLayoutSettings">
				Set Default Layout Setting
			</h5>
			<p>
				When you are done with tweaking around with the settings of the layout
				and want to make those changes as the default settings, we have given a
				configure button on the top of the theme-customizer, click on it.
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="@/assets/images/document/vue/codeSnaps/newImages/layoutSetting.png"
					alt=""
				/>
			</div>
			<p>copy the settings from the dialogbox</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="@/assets/images/document/vue/codeSnaps/newImages/coppySetting.png"
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
					src="@/assets/images/document/vue/codeSnaps/layoutJSON.png"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
