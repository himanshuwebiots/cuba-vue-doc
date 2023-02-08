<template>
	<div id="section-1">
		<div class="card-body gulp-section">
			<h4 class="main-title title-with-link">
				Other Applications
				
			</h4>
			<p>Apart from the apps given before this page, there are other useful apps. You have a look by clicking the below given links</p>
			
			<h5 class="inner-sub-title title-with-link" id="jobSearch">Job Search
            <demoButton
					supplementPath="https://vue.pixelstrap.com/cuba/job/list"
				/></h5>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/gifs/jobSearch.png"
					alt=""
				/>
			</div>
			<h5 class="inner-sub-title title-with-link" id="Knowledgebase"><b>Knowledgebase</b>
            <demoButton
					supplementPath="https://vue.pixelstrap.com/cuba/knowledgebase"
				/></h5>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/gifs/knowledge.png"
					alt=""
				/>
			</div>
			<h5 class="inner-sub-title title-with-link" id="learningApp"><b>Learning App</b>
            <demoButton
					supplementPath="https://vue.pixelstrap.com/cuba/learning/list"
				/></h5>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/gifs/learning.gif"
					alt=""
				/>
			</div>
			<h5 class="inner-sub-title title-with-link" id="socialApp"><b>Social App</b>
            <demoButton
					supplementPath="https://vue.pixelstrap.com/cuba/pages/social-app"
				/></h5>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/gifs/socialApp.png"
					alt=""
				/>
			</div>
		</div>
	</div>
</template>

<script>
import { COPYDATA } from "@/static/data/copyData.js";
export default {
	data() {
		return {
			prismCodes: {},
		};
	},
	mounted() {
		this.prismCodes = COPYDATA.calendar.prismCodes;
		this.$nuxt.$emit("setContentClasses", "col-xxl-10 col-xl-9 component-col");
	},
};
</script>
