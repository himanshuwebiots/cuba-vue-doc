<template>
	<div class="row">
		<div class="col-sm-12">
			<h4 class="main-title">Basic UI Elements</h4>
			<h4 class="sub-title title-with-link" id="installingBootstrapVue">
				Installing Bootstrap-Vue
				<demoButton supplementPath="https://bootstrap-vue.org/docs" />
			</h4>
			<p>
				We have use bootstrap-vue to design most of the components, make sure
				you install it and integrate with the project.
			</p>
			<p>step 1:</p>
			<p>
				<codeBox :code="prismCodes.installBootstrapVue" />
			</p>
			<p>step 2:</p>
			<p>
				In your plugins/index.js file all the following code:
				<codeBox :code="prismCodes.integratingBootstrapVue" />
			</p>
			<p>And you are all set to use bootstrap-vue in your project.</p>
			<div>
				<h4 class="sub-title title-with-link" id="buttons">
					Buttons
					<demoButton path="https://vue.pixelstrap.com/cuba/buttons/default" />
				</h4>
				<div class="fluid-container py-4">
					<button
						class="btn btn-primary mb-2"
						type="button"
						data-original-title=""
						title=""
					>
						Primary
					</button>
					<button
						class="btn btn-secondary mb-2"
						type="button"
						data-original-title=""
						title=""
					>
						Secondary
					</button>
					<button
						class="btn btn-success mb-2"
						type="button"
						data-original-title=""
						title=""
					>
						Success
					</button>
					<button
						class="btn btn-info mb-2"
						type="button"
						data-original-title=""
						title=""
					>
						Info
					</button>
					<button
						class="btn btn-warning mb-2"
						type="button"
						data-original-title=""
						title=""
					>
						Warning
					</button>
					<button
						class="btn btn-danger mb-2"
						type="button"
						data-original-title=""
						title=""
					>
						Danger
					</button>
					<div class="code-box-copy">
						<codeBox :code="prismCodes.uiButtons" />
					</div>
				</div>
				<p class="mb-2">
					To use another types button you have to link the related css file
					according to types of buttons in a head tag
				</p>
			</div>
			<div>
				<h4 class="sub-title title-with-link" id="tagsAndPills">
					Tags & Pills
					<demoButton path="https://vue.pixelstrap.com/cuba/uikits/tag-pills" />
				</h4>
				<div class="fluid-container py-4">
					<span class="badge badge-primary">Primary</span
					><span class="badge badge-secondary">Secondary</span
					><span class="badge badge-success">Success</span
					><span class="badge badge-info">Info</span
					><span class="badge badge-warning text-dark">Warning</span
					><span class="badge badge-danger">Danger</span
					><span class="badge badge-light text-dark">Light</span
					><span class="badge badge-dark tag-pills-sm-mb">Dark</span>
					<div class="code-box-copy mt-4">
						<codeBox :code="prismCodes.tagsNPills" />
					</div>
				</div>
			</div>
			<div>
				<h4 class="sub-title title-with-link" id="progressBar">
					Progress Bar
					<demoButton
						path="https://vue.pixelstrap.com/cuba/uikits/progress-bar"
					/>
				</h4>
				<div class="fluid-container py-4">
					<div class="progress mb-2">
						<div
							class="progress-bar"
							role="progressbar"
							aria-valuenow="0"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
					<div class="progress mb-2">
						<div
							class="progress-bar bg-primary"
							role="progressbar"
							style="width: 25%"
							aria-valuenow="25"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
					<div class="progress mb-2">
						<div
							class="progress-bar bg-secondary"
							role="progressbar"
							style="width: 50%"
							aria-valuenow="50"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
					<div class="progress mb-2">
						<div
							class="progress-bar bg-success"
							role="progressbar"
							style="width: 75%"
							aria-valuenow="75"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
					<div class="progress">
						<div
							class="progress-bar bg-info"
							role="progressbar"
							style="width: 100%"
							aria-valuenow="100"
							aria-valuemin="0"
							aria-valuemax="100"
						></div>
					</div>
					<div class="code-box-copy mt-4">
						<codeBox :code="prismCodes.progressBar" />
					</div>
				</div>
			</div>
			<div>
				<h4 class="sub-title title-with-link" id="alert">
					Alert
					<demoButton path="https://vue.pixelstrap.com/cuba/uikits/alert" />
				</h4>
				<div class="fluid-container py-4">
					<div class="alert alert-primary" role="alert">
						This is a info alert&mdash;check it out!
					</div>
					<div class="alert alert-secondary" role="alert">
						This is a light alert&mdash;check it out!
					</div>
					<div class="alert alert-success" role="alert">
						This is a success alert&mdash;check it out!
					</div>
					<div class="alert alert-info" role="alert">
						This is a danger alert&mdash;check it out!
					</div>
					<div class="alert alert-warning" role="alert">
						This is a secondary alert&mdash;check it out!
					</div>
					<div class="alert alert-danger" role="alert">
						This is a warning alert&mdash;check it out!
					</div>
					<div class="alert alert-light" role="alert">
						This is a dark alert&mdash;check it out!
					</div>
					<div class="alert alert-dark" role="alert">
						This is a dark alert&mdash;check it out!
					</div>
					<div class="code-box-copy mt-4">
						<codeBox :code="prismCodes.alert" />
					</div>
				</div>
			</div>
			<div>
				<h4 class="sub-title title-with-link" id="popover">
					Popover
					<demoButton path="https://vue.pixelstrap.com/cuba/uikits/popover" />
				</h4>

				<div class="fluid-container py-4">
					<b-button id="popover-target-1"> Left Popover </b-button>
					<b-button id="popover-target-2"> Top Popover </b-button>
					<b-button id="popover-target-3"> Bottom Popover </b-button>
					<b-button id="popover-target-4"> Right Popover </b-button>
					<b-popover
						target="popover-target-1"
						triggers="hover"
						placement="left"
					>
						<template #title>Popover Title</template>
						I am left popover <b>component</b> !
					</b-popover>
					<b-popover target="popover-target-2" triggers="hover" placement="top">
						<template #title>Popover Title</template>
						I am top popover <b>component</b> content!
					</b-popover>
					<b-popover
						target="popover-target-3"
						triggers="hover"
						placement="bottom"
					>
						<template #title>Popover Title</template>
						I am bottom popover <b>component</b> content!
					</b-popover>
					<b-popover
						target="popover-target-4"
						triggers="hover"
						placement="right"
					>
						<template #title>Popover Title</template>
						I am right popover <b>component</b> content!
					</b-popover>
					<div class="code-box-copy mt-4">
						<codeBox :code="prismCodes.popover" />
					</div>
				</div>

				<h4 class="sub-title title-with-link" id="tooltip">
					Tooltip
					<demoButton path="https://vue.pixelstrap.com/cuba/uikits/tooltip" />
				</h4>
				<div class="card-body btn-showcase">
					<b-button id="direction-tooltip-top" variant="primary"
						>Tooltip on top</b-button
					>
					<b-tooltip
						target="direction-tooltip-top"
						triggers="hover"
						placement="top"
						>Tooltip on top</b-tooltip
					>

					<b-button id="direction-tooltip-right" variant="primary"
						>Tooltip on right</b-button
					>
					<b-tooltip
						target="direction-tooltip-right"
						triggers="hover"
						placement="right"
						>Tooltip on right</b-tooltip
					>

					<b-button id="direction-tooltip-bottom" variant="primary"
						>Tooltip on bottom</b-button
					>
					<b-tooltip
						target="direction-tooltip-bottom"
						triggers="hover"
						placement="bottom"
						>Tooltip on bottom</b-tooltip
					>

					<b-button id="direction-tooltip-left" variant="primary"
						>Tooltip on left</b-button
					>
					<b-tooltip
						target="direction-tooltip-left"
						triggers="hover"
						placement="left"
						>Tooltip on left</b-tooltip
					>
				</div>
				<div class="fluid-container py-4">
					<div class="code-box-copy mt-4">
						<codeBox :code="prismCodes.tooltip" />
					</div>
				</div>

				<h4 class="sub-title title-with-link" id="dropdown">
					Dropdown
					<demoButton path="https://vue.pixelstrap.com/cuba/uikits/dropdown" />
				</h4>

				<div class="fluid-container py-4">
					<div class="dropdown-basic">
						<div class="dropdown">
							<button
								class="dropbtn btn-primary"
								type="button"
								data-original-title=""
								title=""
							>
								Dropdown Button<span
									><i class="icofont icofont-arrow-down"></i
								></span>
							</button>
							<div class="dropdown-content">
								<a href="#" data-original-title="" title="">Action</a
								><a href="#" data-original-title="" title="">Another Action</a
								><a href="#" data-original-title="" title=""
									>Something Else Here</a
								>
							</div>
						</div>
					</div>
					<div class="code-box-copy mt-4">
						<codeBox :code="prismCodes.dropdown" />
					</div>
				</div>

				<h4 class="sub-title title-with-link" id="tabs">
					Tabs
					<demoButton path="https://vue.pixelstrap.com/cuba/cards/tabbed" />
				</h4>

				<div class="fluid-container py-4">
					<ul class="nav nav-tabs" id="myTab3" role="tablist">
						<li class="nav-item">
							<a
								class="nav-link active"
								id="home-tab"
								data-bs-toggle="tab"
								href="#home"
								role="tab"
								aria-controls="home"
								aria-selected="true"
								data-original-title=""
								title=""
								>Home
							</a>
						</li>
						<li class="nav-item dropdown">
							<a
								class="nav-link dropdown-toggle"
								data-bs-toggle="dropdown"
								href="#"
								role="button"
								aria-haspopup="true"
								aria-expanded="false"
								data-original-title=""
								title=""
								>Dropdown</a
							>
							<div class="dropdown-menu">
								<a
									class="dropdown-item"
									id="profile-tab"
									data-bs-toggle="tab"
									href="#profile"
									role="tab"
									aria-controls="profile"
									aria-selected="false"
									data-original-title=""
									title=""
									>Action</a
								><a
									class="dropdown-item"
									href="#"
									data-original-title=""
									title=""
									>Another action</a
								><a
									class="dropdown-item"
									href="#"
									data-original-title=""
									title=""
									>Something else here</a
								>
								<div class="dropdown-divider"></div>
								<a
									class="dropdown-item"
									href="#"
									data-original-title=""
									title=""
									>Separated link</a
								>
							</div>
						</li>
						<li class="nav-item">
							<a
								class="nav-link"
								id="profile-tabs"
								data-bs-toggle="tab"
								href="#profile"
								role="tab"
								aria-controls="profile"
								aria-selected="false"
								data-original-title=""
								title=""
								>Profile</a
							>
						</li>
						<li class="nav-item">
							<a
								class="nav-link"
								id="contact-tab"
								data-bs-toggle="tab"
								href="#contact"
								role="tab"
								aria-controls="contact"
								aria-selected="false"
								data-original-title=""
								title=""
								>Contact</a
							>
						</li>
					</ul>
					<div class="tab-content" id="myTabContent3">
						<div
							class="tab-pane fade show active"
							id="home"
							role="tabpanel"
							aria-labelledby="home-tab"
						>
							<p class="mb-0 mt-3">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry&apos;s standard
								dummy text ever since the 1500s, when an unknown printer took a
								galley of type and scrambled it to make a type specimen book. It
								has survived not only five centuries, but also the leap into
								electronic typesetting,remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages,and more recently with desktop
								publishing software like Aldus PageMaker including versions of
								Lorem Ipsum
							</p>
						</div>
						<div
							class="tab-pane fade"
							id="profile"
							role="tabpanel"
							aria-labelledby="profile-tab"
						>
							<p class="mb-0 mt-3">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry&apos;s standard
								dummy text ever since the 1500s, when an unknown printer took a
								galley of type and scrambled it to make a type specimen book. It
								has survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages, and more recently with desktop
								publishing software like Aldus PageMaker including versions of
								Lorem Ipsum
							</p>
						</div>
						<div
							class="tab-pane fade"
							id="contact"
							role="tabpanel"
							aria-labelledby="contact-tab"
						>
							<p class="mb-0 mt-3">
								Lorem Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry&apos;s standard
								dummy text ever since the 1500s, when an unknown printer took a
								galley of type and scrambled it to make a type specimen book. It
								has survived not only five centuries, but also the leap into
								electronic typesetting,remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets
								containing Lorem Ipsum passages,and more recently with desktop
								publishing software like Aldus PageMaker including versions of
								Lorem Ipsum
							</p>
						</div>
					</div>
					<div class="code-box-copy mt-4">
						<codeBox :code="prismCodes.tabs" />
					</div>
				</div>

				<h4 class="sub-title title-with-link" id="according">
					According
					<demoButton path="https://vue.pixelstrap.com/cuba/uikits/accordion" />
				</h4>

				<div class="fluid-container py-4">
					<div class="default-according" id="accordion">
						<div class="card">
							<div class="card-header" id="headingOne">
								<h6 class="mb-0">
									<button
										class="btn btn-link"
										data-bs-toggle="collapse"
										data-bs-target="#collapseOne"
										aria-expanded="true"
										aria-controls="collapseOne"
										data-original-title=""
										title=""
									>
										Collapsible Group Item #<span class="digits">1</span>
									</button>
								</h6>
							</div>
							<div
								class="collapse show"
								id="collapseOne"
								aria-labelledby="headingOne"
								data-bs-parent="#accordion"
							>
								<div class="card-body">
									Anim pariatur cliche reprehenderit, enim eiusmod high life
									accusamus terry richardson ad squid. 3 wolf moon officia
									aute,non cupidatat skateboard dolor brunch. Food truck quinoa
									nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
									aliqua put a bird on it squid single-origin coffee nulla
									assumenda shoreditch et.
								</div>
							</div>
						</div>
						<div class="card">
							<div class="card-header" id="headingTwo">
								<h6 class="mb-0">
									<button
										class="btn btn-link collapsed"
										data-bs-toggle="collapse"
										data-bs-target="#collapseTwo"
										aria-expanded="false"
										aria-controls="collapseTwo"
										data-original-title=""
										title=""
									>
										Collapsible Group Item #<span class="digits">2</span>
									</button>
								</h6>
							</div>
							<div
								class="collapse"
								id="collapseTwo"
								aria-labelledby="headingTwo"
								data-bs-parent="#accordion"
							>
								<div class="card-body">
									Anim pariatur cliche reprehenderit, enim eiusmod high life
									accusamus terry richardson ad squid. 3 wolf moon officia
									aute,non cupidatat skateboard dolor brunch. Food truck quinoa
									nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
									aliqua put a bird on it squid single-origin coffee nulla
									assumenda shoreditch et.
								</div>
							</div>
						</div>
						<div class="card">
							<div class="card-header" id="headingThree">
								<h6 class="mb-0">
									<button
										class="btn btn-link collapsed"
										data-bs-toggle="collapse"
										data-bs-target="#collapseThree"
										aria-expanded="false"
										aria-controls="collapseThree"
										data-original-title=""
										title=""
									>
										Collapsible Group Item #<span class="digits">3</span>
									</button>
								</h6>
							</div>
							<div
								class="collapse"
								id="collapseThree"
								aria-labelledby="headingThree"
								data-bs-parent="#accordion"
							>
								<div class="card-body">
									Anim pariatur cliche reprehenderit, enim eiusmod high life
									accusamus terry richardson ad squid. 3 wolf moon officia
									aute,non cupidatat skateboard dolor brunch. Food truck quinoa
									nesciunt laborum eiusmod. Brunch 3 wolf moon aliqua put a bird
									on it squid single-origin coffee nulla assumenda shoreditch
									et.
								</div>
							</div>
						</div>
					</div>
					<div class="code-box-copy mt-4">
						<codeBox :code="prismCodes.according" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { highlight, languages } from "prismjs/components/prism-core";
import { COPYDATA } from "@/static/data/copyData.js";
export default {
	methods: {
		highlighter(code) {
			return highlight(code, languages.js); // languages.<insert language> to return html with markup
		},
	},

	data() {
		return {
			prismCodes: COPYDATA.basicUi.prismCodes,
		};
	},
};
</script>

<style></style>