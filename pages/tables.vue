<template>
	<div class="row">
		<div class="col-sm-12">
			<h4 class="main-title">Tables</h4>
			<p>
				Apart from the forms you might also require tables to show the added
				content.
			</p>
			<p>
				We have used simple boostrap-vue tables, benifit of this is that is html
				code will reduce significantly. You can easily change the theme and
				layout of the table just by changing classes.
			</p>
			<p class="success-block mt-3">
				<strong>Tip:</strong> In our project navigate to theme>src>pages>tables
				to check out the code for tables.
			</p>
			<div>
				<h4 class="sub-title title-with-link" id="bootstrapTables">
					Bootstrap Tables
					<demoButton
						path="https://vue.pixelstrap.com/cuba/table/basic"
						supplementPath="https://www.npmjs.com/package/bootstrap-vue"
					/>
				</h4>
				<img
					class="img-fluid mb-3 img-80"
					src="../assets/images/document/vue/gifs/simpleTables.gif"
					alt=""
				/>
				<p class="pt-4"><b>Installing and usage</b></p>
				<div class="mb-4">
					<codeBox :code="prismCodes.installBootstrapVue" />
					<h5 class="inner-sub-title">Inside Your Template tags add</h5>
					<div class="code-box-copy mt-4">
						<codeBox :code="prismCodes.insideTemplateBoostrapVue" />
					</div>
					<h5 class="inner-sub-title">Inside Your script tags add</h5>
					<div class="code-box-copy mt-4">
						<codeBox :code="prismCodes.insideScriptBoostrapVue" />
					</div>
				</div>
			</div>

			<div>
				<h4 class="sub-title title-with-link" id="smartTables">
					Smart Tables
					<demoButton
						supplementPath="https://www.npmjs.com/package/vuejs-smart-table"
					/>
				</h4>
				<img
					class="img-fluid mb-3 img-80"
					src="../assets/images/document/vue/gifs/smartTable.png"
					alt=""
				/>
				<p class="pt-4"><b>Installing and usage</b></p>
				<div class="mb-4">
					<codeBox :code="prismCodes.installSmartTable" />

					<h5 class="inner-sub-title">Inside Your Template tags add</h5>
					<div class="code-box-copy mt-4">
						<codeBox :code="prismCodes.insideScriptSmartTable" />
					</div>
					<h5 class="inner-sub-title">Inside Your script tags add</h5>
					<div class="code-box-copy mt-4">
						<codeBox :code="prismCodes.insideTemplateBasicTable" />
					</div>
				</div>
			</div>

			<div>
				<div>
					<div class="card-header">
						<h4 class="main-title" id="tableVariants">Tables Variants</h4>
					</div>
					<div class="card-body p-t-0">
						<ul>
							<li>
								<h4 class="sub-title title-with-link" id="basicTable">
									Basic Table
									<demoButton
										path="https://vue.pixelstrap.com/cuba/table/basic"
									/>
								</h4>
								<p>Below is a simple table and its code:</p>
								<div>
									<img
										src="@/assets/images//document/vue/codeSnaps/simpleTable.png"
										alt=""
										class="img-fluid"
									/>
								</div>
								<div class="py-2 ps-3">
									<h5 class="inner-sub-title">Inside Your Template tags add</h5>
									<div class="code-box-copy mt-4">
										<codeBox :code="prismCodes.insideScriptBoostrapVue" />
									</div>

									<h5 class="inner-sub-title">Inside Your Script tags add</h5>
									<div class="code-box-copy mt-4">
										<codeBox :code="prismCodes.insideTemplateColoredTable" />
									</div>
								</div>
								<p>
									As you can see, it becomes very easy to create a table and
									even make it dynamic, you just have to provide and update the
									data in items object, and bootstrap-vue will create the table
									fields and rows automatically.
								</p>
							</li>

							<li>
								<h4 class="sub-title" id="coloredTable">Colored Table</h4>
								<div>
									<img
										src="@/assets/images//document/vue/codeSnaps/coloredTable.png"
										alt=""
										class="img-fluid"
									/>
								</div>
								<div class="py-2 ps-3">
									<h5 class="inner-sub-title">Inside Your Template tags add</h5>
									<div class="code-box-copy mt-4">
										<codeBox :code="prismCodes.insideTemplateColoredTable" />
									</div>

									<h5 class="inner-sub-title">Inside Your Script tags add</h5>
									<div class="code-box-copy mt-4">
										<codeBox :code="prismCodes.insideScriptColoredTable" />
									</div>
								</div>
								<p>
									From the above example you can see how you can manipulate
									colors of the table by just providing class in the items2
									object.
								</p>
							</li>
						</ul>

						<p class="alert-box alert alert-primary">
							<strong>Tip:</strong> You can also go through the official
							bootstrap-vue documentation for more information.
							<a
								href="https://bootstrap-vue.org/docs/components/table"
								target="_blank"
								>https://bootstrap-vue.org/docs/components/table</a
							>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { COPYDATA } from "@/static/data/copyData";
export default {
	data() {
		return {
			prismCodes: {},
		};
	},
	mounted() {
		this.prismCodes = COPYDATA.tables.prismCodes;
	},
};
</script>

<style></style>
