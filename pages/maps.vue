<template>
  <div id="section-1">
    <div class="card-body">
      <h4 class="main-title">Maps</h4>

      <div>
        <h4 class="sub-title title-with-link" id="googleMaps">
          Google Maps
          <demoButton
            path="https://vue.pixelstrap.com/cuba/maps/vue-google-maps"
            supplementPath="https://www.npmjs.com/package/vue2-google-maps"
          />
        </h4>
        <img
          class="img-fluid mb-3 img-80"
          src="../assets/images/document/vue/gifs/googleMap.gif"
          alt=""
        />

        <h5 class="inner-sub-title"><b>Installing and usage</b></h5>
        <div class="mb-4">
          <codeBox :code="prismCodes.installGoogleMap" />
          <div>
            <p class="inner-sub-title">Inside Your Template tag add:</p>
            <codeBox :code="prismCodes.inslideTemplateGoogleMap" />
          </div>
          <div>
            <p class="inner-sub-title">Inside Your Script tag add:</p>
            <codeBox :code="prismCodes.insideScriptGoogleMap" />
          </div>
          <h5 class="inner-sub-title"><b>Uninstall Package</b></h5>
          <codeBox :code="prismCodes.unInstallGoogleMap" />
        </div>
      </div>

      <div>
        <h4 class="sub-title title-with-link" id="leafletMaps">
          Leaflet Maps
          <demoButton
            path="https://vue.pixelstrap.com/cuba/maps/vue-leaflet-maps"
            supplementPath="https://www.npmjs.com/package/vue2-leaflet"
          />
        </h4>
        <div class="d-flex justify-content-center align-items-center">
          <img
            class="img-fluid mb-3 img-border img-80"
            src="~assets/images/document/vue/codeSnaps/vueLeafletMap.png"
            alt=""
          />
        </div>
        <h5 class="inner-sub-title"><b>Installing and usage</b></h5>
        <div class="mb-4">
          <codeBox :code="prismCodes.installLeafletMap" />
          <div>
            <p class="inner-sub-title">Inside Your Template tag add:</p>
            <codeBox :code="prismCodes.insideTemplateLeafletMap" />
          </div>
          <div>
            <p class="inner-sub-title">Inside Your Script tag add:</p>
            <codeBox :code="prismCodes.insideScriptLeaftletMap" />
          </div>
          <h5 class="inner-sub-title"><b>Uninstall Package</b></h5>
          <codeBox :code="prismCodes.unInstallLeafletMap" />
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
    this.prismCodes = COPYDATA.maps.prismCodes;
    this.$nuxt.$emit("setContentClasses", "col-xxl-10 col-xl-9 component-col");
  },
};
</script>

<style></style>
