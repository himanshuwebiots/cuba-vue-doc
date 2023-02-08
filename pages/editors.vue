<template>
  <div id="section-1">
    <div class="card-body">
      <h4 class="main-title">Editors</h4>

      <div>
        <h4 class="sub-title title-with-link" id="simpleEditors">
          Simple Editor
          <demoButton
            path="https://vue.pixelstrap.com/cuba/editor/simple-editor"
            supplementPath="https://npmjs.com/package/vue2-editor"
          />
        </h4>
        <div class="d-flex justify-content-center align-items-center">
          <img
            class="img-fluid mb-3 img-border img-80"
            src="~assets/images/document/vue/codeSnaps/simpleEditor.png"
            alt=""
          />
        </div>
        <h5 class="inner-sub-title"><b>Installing and usage</b></h5>
        <div class="mb-4">
          <codeBox :code="prismCodes.installSimpleEditor" />
          <div>
            <p class="inner-sub-title">Inside Your Template tag add:</p>
            <codeBox :code="prismCodes.insideTemplateSimpleEditor" />
          </div>
          <div>
            <p class="inner-sub-title">Inside Your Script tag add:</p>
            <codeBox :code="prismCodes.insideScriptSimpleEditor" />
          </div>
          <h5 class="inner-sub-title"><b>Uninstall Package</b></h5>
          <codeBox :code="prismCodes.unInstallSimpleEditor" />
        </div>
      </div>

      <div>
        <h4 class="sub-title title-with-link" id="CKEditors">
          CK Editor
          <demoButton
            path="https://vue.pixelstrap.com/cuba/editor/ck-editor"
            supplementPath="https://www.npmjs.com/package/@ckeditor/ckeditor5-vue"
          />
        </h4>
        <div class="d-flex justify-content-center align-items-center">
          <img
            class="img-fluid mb-3 img-border img-80"
            src="~assets/images/document/vue/codeSnaps/ckeditor.png"
            alt=""
          />
        </div>
        <h5 class="inner-sub-title"><b>Installing and usage</b></h5>
        <div class="mb-4">
          <codeBox :code="prismCodes.installCKEditor" />
          <div>
            <p class="inner-sub-title">Inside Your Template tag add:</p>
            <codeBox :code="prismCodes.insideTemplateCKEditor" />
          </div>
          <div>
            <p class="inner-sub-title">Inside Your Script tag add:</p>
            <codeBox :code="prismCodes.insideScriptCSEditor" />
          </div>
          <h5 class="inner-sub-title"><b>Uninstall Package</b></h5>
          <codeBox :code="prismCodes.unInstallCKEditor" />
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
    this.prismCodes = COPYDATA.editors.prismCodes;
    this.$nuxt.$emit("setContentClasses", "col-xxl-10 col-xl-9 component-col");
  },
};
</script>

<style></style>
