<template>
  <div id="section-1">
    <div class="card-body">
      <h4 class="main-title">Charts</h4>
      <div>
        <h4 class="sub-title title-with-link" id="googleCharts">
          Google Charts
          <demoButton
            path="https://vue.pixelstrap.com/cuba/chart/google"
            supplementPath="https://www.npmjs.com/package/vue-google-charts"
          />
        </h4>
        <img
          class="img-fluid mb-3 img-80"
          src="../assets/images/document/vue/gifs/googleCharts.gif"
          alt=""
        />

        <h5 class="inner-sub-title"><b>Installing and usage</b></h5>
        <div class="mb-4">
          <codeBox :code="prismCodes.installGoggleCharts" />
          <div>
            <p class="inner-sub-title">Inside Your Template tag add:</p>
            <codeBox :code="prismCodes.insideTemplateGoogleCharts" />
          </div>
          <div>
            <p class="inner-sub-title">Inside Your Script tag add:</p>
            <codeBox :code="prismCodes.insideScriptGoogleCharts" />
          </div>
          <h5 class="inner-sub-title"><b>Uninstalling package</b></h5>
          <codeBox :code="prismCodes.unInstallGoggleCharts" />
        </div>
      </div>
      <div>
        <h4 class="sub-title title-with-link" id="chartJs">
          Chart Js
          <demoButton
            path="https://vue.pixelstrap.com/cuba/chart/chartjs"
            supplementPath="https://www.npmjs.com/package/vue-chartjs"
          />
        </h4>
        <img
          class="img-fluid mb-3 img-80"
          src="../assets/images/document/vue/gifs/chartjs.gif"
          alt=""
        />

        <h5 class="inner-sub-title"><b>Installing and usage</b></h5>
        <div class="mb-4">
          <codeBox :code="prismCodes.installChartjs" />
          <div>
            <p class="inner-sub-title">Inside Your Template tag add:</p>
            <codeBox :code="prismCodes.insideTemplateChartjs" />
          </div>
          <div>
            <p class="inner-sub-title">Inside Your Script tag add:</p>
            <codeBox :code="prismCodes.insideScriptChartjs" />
          </div>
          <h5 class="inner-sub-title"><b>Uninstalling package</b></h5>
          <codeBox :code="prismCodes.unInstallChartjs" />
        </div>
      </div>
      <div>
        <h4 class="sub-title title-with-link" id="chartist">
          Chartist
          <demoButton
            path="https://vue.pixelstrap.com/cuba/chart/chartist"
            supplementPath="https://www.npmjs.com/package/vue-chartist"
          />
        </h4>
        <img
          class="img-fluid mb-3 img-80"
          src="../assets/images/document/vue/gifs/chartist.gif"
          alt=""
        />
        <h5 class="inner-sub-title"><b>Installing and usage</b></h5>
        <div class="mb-4">
          <codeBox :code="prismCodes.installChartist" />
          <div>
            <p class="inner-sub-title">Inside Your Template tag add:</p>
            <codeBox :code="prismCodes.insideTemplateChartist" />
          </div>
          <div>
            <p class="inner-sub-title">Inside Your Script tag add:</p>
            <codeBox :code="prismCodes.insideScriptChartist" />
          </div>
          <h5 class="inner-sub-title"><b>Uninstalling package</b></h5>
          <codeBox :code="prismCodes.unInstallChartist" />
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
    this.prismCodes = COPYDATA.charts.prismCodes;
    this.$nuxt.$emit("setContentClasses", "col-xxl-10 col-xl-9 component-col");
  },
};
</script>

<style></style>
