<template>
	<div id="section-1">
		<div class="card-body gulp-section">
			<h4 class="main-title title-with-link">
				Calender
				<demoButton
					path="https://vue.pixelstrap.com/cuba/app/calendar"
					supplementPath="https://www.npmjs.com/package/vue-simple-calendar"
				/>
			</h4>
			<p>
				With a busy schedule, users might need something to keep track of the
				upcoming events. A calendar app has been provided, where users can enter
				the upcoming events and a tag will be added in the calendar. Now you
				don't have to worry whether you will remember the next scheduled
				meeting.
			</p>
			<div class="d-flex justify-content-center align-items-center">
				<img
					class="img-fluid mb-3 img-border img-80"
					src="~assets/images/document/vue/codeSnaps/calendar.png"
					alt=""
				/>
			</div>
			<h5 class="inner-sub-title"><b>Installing and usage</b></h5>
			<div class="mb-4">
				<codeBox :code="prismCodes.installSimpleCalendar" />
				<div>
					<p class="inner-sub-title">Inside Your Template tag add:</p>
					<codeBox :code="prismCodes.insideTemplateCalendar" />
				</div>
				<div>
					<p class="inner-sub-title">Inside Your Script tag add:</p>
					<codeBox :code="prismCodes.insideScriptCalendar" />
				</div>
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
