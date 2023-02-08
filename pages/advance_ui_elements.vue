<template>
  <div class="row">
    <div class="col-sm-12">
      <h4 class="main-title">Advance UI Elements</h4>

      <div>
        <h4 class="sub-title title-with-link" id="scrollable">
          Scrollable
          <demoButton
            supplementPath="https://www.npmjs.com/package/vue-perfect-scrollbar"
            path="https://vue.pixelstrap.com/cuba/advance/scrollable"
          />
        </h4>
        <p class="pt-4 pb-2">
          This is an Vue wrapper library for the Perfect Scrollbar. To use this
          library you should get familiar with the Perfect Scrollbar
          documentation as well since this documentation only explains details
          specific to this wrapper.
        </p>
        <h5 class="inner-sub-title">Example of Scroll in both direction</h5>
        <div class="scrollable-container">
          <img
            src="~assets/images/document/vue/codeSnaps/layout_london.png"
            alt=""
          />
        </div>
        <h5 class="inner-sub-title">Example of horizontal Scroll</h5>
        <VuePerfectScrollbar class="scroll-area" v-once :settings="settings">
          <!-- /home/archana/Documents/mayur/webiots-themes-mayur/documentations/cuba_documentation_nuxt/documentation/assets/images/document/vue/codeSnaps/layout_london.png -->
          <img
            style="height: 50vh"
            src="~assets/images/document/vue/codeSnaps/layout_london.png"
            alt=""
          />
        </VuePerfectScrollbar>
        <h5 class="inner-sub-title">Installing and usage</h5>
        <div class="mb-4">
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.installVuePerfectScrollbar" />
          </div>

          <h5 class="inner-sub-title">Inside Your template tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideTemplateScrollBar" />
          </div>

          <h5 class="inner-sub-title">Inside Your script tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideScriptScrollbar" />
          </div>
          <h5 class="inner-sub-title">Uninstalling Package</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.unInstallVuePerfectScrollbar" />
          </div>
        </div>
      </div>

      <div>
        <h4 class="sub-title title-with-link" id="toaster">
          Toaster
          <demoButton
            supplementPath="https://www.npmjs.com/package/vue-toasted"
            path="https://vue.pixelstrap.com/cuba/advance/toastr"
          />
        </h4>

        <div class="col-md-12">
          <div class="card">
            <div class="card-body btn-showcase">
              <button @click.prevent="success" class="btn btn-success">
                Success
              </button>
              <button @click.prevent="info" class="btn btn-info">Info</button>
              <button @click.prevent="error" class="btn btn-danger">
                Danger
              </button>
            </div>
          </div>
        </div>

        <p class="pt-4"><b>Installing and usage</b></p>
        <div class="mb-4">
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.installtoaster" />
          </div>

          <h5 class="inner-sub-title">Inside Your template tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideTemplateToaster" />
          </div>

          <h5 class="inner-sub-title">Inside Your Script tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideScriptToaster" />
          </div>
          <h5 class="inner-sub-title">Uninstalling Package</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.unInstalltoaster" />
          </div>
        </div>
      </div>

      <div>
        <h4 class="sub-title title-with-link" id="tour">
          Tour
          <demoButton
            path="https://vue.pixelstrap.com/cuba/advance/tour"
            supplementPath="https://www.npmjs.com/package/vue-tour"
          />
        </h4>
        <h5 class="inner-sub-title">Tour Example</h5>
        <div>
          <v-tour name="myTour" :steps="steps"></v-tour>
          <button class="btn btn-success" @click.prevent="startTour">
            Start Tour
          </button>
        </div>
        <p class="pt-4"><b>Installing and usage</b></p>
        <div class="mb-4">
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.installTour" />
          </div>

          <h5 class="inner-sub-title">Inside Your template tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideTemplateTour" />
          </div>

          <h5 class="inner-sub-title">Inside Your Script tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideScriptTour" />
          </div>
          <h5 class="inner-sub-title">Uninstalling Package</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.unInstallTour" />
          </div>
        </div>
      </div>

      <div>
        <h4 class="sub-title title-with-link" id="rating">
          Rating
          <demoButton
            path="https://vue.pixelstrap.com/cuba/advance/rating"
            supplementPath="https://www.npmjs.com/package/vue-rate-it"
          />
        </h4>
        <h5 class="inner-sub-title">Examples Of Rating:</h5>
        <div class="row">
          <div class="col-sm">
            <h5 class="inner-sub-title">Image Rating</h5>
            <image-rating
              :src="vuelogo()"
              :item-size="15"
              :max-rating="10"
            ></image-rating>
          </div>
          <div class="col-sm">
            <h5 class="inner-sub-title">Heart Rating</h5>
            <heart-rating
              v-model="heartrating.rating1"
              :item-size="15"
              :spacing="3"
              :max-rating="10"
            ></heart-rating>
          </div>
        </div>
        <p class="pt-4"><b>Installing and usage</b></p>
        <div class="mb-4">
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.installRating" />
          </div>

          <h5 class="inner-sub-title">Inside Your template tags add</h5>
          <codeBox :code="prismCodes.insideTemplateRating" />

          <h5 class="inner-sub-title">Inside Your Script tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideScriptrating" />
          </div>
          <h5 class="inner-sub-title">Uninstalling Package</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.unInstallTour" />
          </div>
        </div>
      </div>

      <div>
        <h4 class="sub-title title-with-link" id="pagination">
          Pagination
          <demoButton
            path="https://vue.pixelstrap.com/cuba/advance/pagination"
            supplementPath="https://bootstrap-vue.org/docs/components/pagination-nav"
          />
        </h4>
        <img
          class="img-fluid mb-3 img-80"
          src="../assets/images/document/vue/gifs/pagination.gif"
          alt=""
        />
        <p class="pt-4"><b>Installing and usage</b></p>
        <div class="mb-4">
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.pagination" />
          </div>
        </div>
      </div>

      <div>
        <h4 class="sub-title title-with-link" id="sweetAlert">
          Sweet-Alert
          <demoButton
            path="https://vue.pixelstrap.com/cuba/advance/sweetalert"
            supplementPath="https://www.npmjs.com/package/vue-sweetalert2"
          />
        </h4>
        <div class="card-body btn-showcase">
          <b-button type="button" v-on:click="basic" variant="primary"
            >Basic</b-button
          >

          <b-button
            type="button"
            v-on:click="basic_with_title"
            variant="primary"
            >With Title Alert</b-button
          >

          <b-button
            type="button"
            v-on:click="basic_success_alert"
            variant="success"
            >Success Alert</b-button
          >

          <b-button type="button" v-on:click="basic_info_alert" variant="info"
            >Info Alert</b-button
          >
        </div>
        <p class="pt-4"><b>Installing and usage</b></p>
        <div class="mb-4">
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.installSweetAlert" />
          </div>

          <h5 class="inner-sub-title">Inside Your template tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideTemplateSweetAlert" />
          </div>

          <h5 class="inner-sub-title">Inside Your Script tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideScriptSweetAlert" />
          </div>
          <h5 class="inner-sub-title">Uninstalling Package</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.unInstallSweetAlert" />
          </div>
        </div>
      </div>

      <div>
        <h4 class="sub-title title-with-link" id="rangeSlider">
          Range Slider
          <demoButton
            path="https://vue.pixelstrap.com/cuba/advance/range-slider"
            supplementPath="https://www.npmjs.com/package/vue-slide-bar"
          />
        </h4>
        <VueSlideBar
          v-model="rangeSliderData.value"
          :min="100"
          :max="1000"
          :data="rangeSliderData.data"
          :range="rangeSliderData.range"
        ></VueSlideBar>

        <p class="pt-4"><b>Installing and usage</b></p>
        <div class="mb-4">
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.installRangeSlider" />
          </div>

          <h5 class="inner-sub-title">Inside Your template tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideTemplateRangeSlider" />
          </div>

          <h5 class="inner-sub-title">Inside Your script tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideScriptRangeSlider" />
          </div>
          <h5 class="inner-sub-title">Uninstalling Package</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.unInstallRangeSlider" />
          </div>
        </div>
      </div>

      <div>
        <h4 class="sub-title title-with-link" id="imageCropper">
          Image Cropper
          <demoButton
            path="https://vue.pixelstrap.com/cuba/advance/image-cropper"
            supplementPath="https://www.npmjs.com/package/vue-cropperjs"
          />
        </h4>
        <img
          class="img-fluid mb-3 img-80"
          src="../assets/images/document/vue/gifs/imageCropper.gif"
          alt=""
        />
        <p class="pt-4"><b>Installing and usage</b></p>
        <div class="mb-4">
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.installImageCropper" />
          </div>

          <h5 class="inner-sub-title">Inside Your template tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideTemplateImageCropper" />
          </div>

          <h5 class="inner-sub-title">Inside Your script tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideScriptImageCropper" />
          </div>
          <h5 class="inner-sub-title">Uninstalling Package</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.unInstallImageCropper" />
          </div>
        </div>
      </div>

      <div>
        <h4 class="sub-title title-with-link" id="dragAndDrop">
          Drag And Drop
          <demoButton
            path="https://vue.pixelstrap.com/cuba/advance/dragdrop"
            supplementPath="https://www.npmjs.com/package/vue2-dragula"
          />
        </h4>
        <img
          class="img-fluid mb-3 img-80"
          src="../assets/images/document/vue/gifs/dragNDrop.gif"
          alt=""
        />
        <p class="pt-4"><b>Installing and usage</b></p>
        <div class="mb-4">
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.installDragAndDrop" />
          </div>

          <h5 class="inner-sub-title">Inside Your Template tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideTemplateDragAndDrop" />
          </div>

          <h5 class="inner-sub-title">Inside Your script tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideScriptDragAndDrop" />
          </div>
          <h5 class="inner-sub-title">Uninstalling Package</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.unInstallDragAndDrop" />
          </div>
        </div>
      </div>

      <div>
        <h4 class="sub-title title-with-link" id="imageUpload">
          Image Upload
          <demoButton
            path="https://vue.pixelstrap.com/cuba/advance/upload"
            supplementPath="https://www.npmjs.com/package/vue2-dropzone"
          />
        </h4>
        <img
          class="img-fluid mb-3 img-80"
          src="../assets/images/document/vue/gifs/imageUpload.gif"
          alt=""
        />
        <p class="pt-4"><b>Installing and usage</b></p>
        <div class="mb-4">
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.installImageUpload" />
          </div>

          <h5 class="inner-sub-title">Inside Your Template tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideTemplateImageUpload" />
          </div>

          <h5 class="inner-sub-title">Inside Your script tags add</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.insideScriptImageUpload" />
          </div>
          <h5 class="inner-sub-title">Uninstalling Package</h5>
          <div class="code-box-copy mt-4">
            <codeBox :code="prismCodes.unInstallImageUpload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import VueSlideBar from "vue-slide-bar";
import { COPYDATA } from "@/static/data/copyData.js";
import { highlight, languages } from "prismjs/components/prism-core";
import { ImageRating } from "vue-rate-it";
import { HeartRating } from "vue-rate-it";
export default {
  components: { VuePerfectScrollbar, ImageRating, HeartRating, VueSlideBar },
  methods: {
    basic: function () {
      this.$swal({
        title: "Hello world!",
      });
    },
    basic_with_title: function () {
      this.$swal({
        title: "Here's the title",
        text: "...and here's the text!",
      });
    },
    basic_success_alert: function () {
      this.$swal({
        title: "Good job!",
        text: "You clicked the button!",
        type: "info",
      });
    },
    basic_info_alert: function () {
      this.$swal({
        text: " Click on either the button or outside the modal.",
        confirmButtonColor: "#4466f2",
      }).then((result) => {
        if (result.value) {
          this.$swal({
            text: "The returned value is:" + result.value,
          });
        } else {
          this.$swal({
            text: "The returned value is:" + result.value,
          });
        }
      });
    },
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },

    success() {
      this.$toasted.show(" New order has been placed ", {
        theme: "outline",
        position: "bottom-right",
        type: "success",
        duration: 2000,
      });
    },
    info() {
      this.$toasted.show(" New order has been placed ", {
        theme: "outline",
        position: "bottom-right",
        type: "info",
        duration: 2000,
      });
    },
    error() {
      this.$toasted.show(" New order has been placed ", {
        theme: "outline",
        position: "bottom-right",
        type: "error",
        duration: 2000,
      });
    },
    startTour() {
      this.$tours["myTour"].start();
    },
    vuelogo() {
      var vuelogo = require("@/assets/images/document/vue/vuelogo.png");
      return vuelogo;
    },
  },

  data() {
    return {
      prismCodes: COPYDATA.advanceUi.prismCodes,
      rangeSliderData: {
        value: 500,
        data: [
          10, 50, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650,
          700, 750, 800, 850, 900, 950, 1000,
        ],
        range: [
          {
            label: "10",
          },
          {
            label: "50",
            isHide: true,
          },
          {
            label: "100",
            isHide: true,
          },
          {
            label: "150",
            isHide: true,
          },
          {
            label: "200",
            isHide: true,
          },
          {
            label: "250",
          },
          {
            label: "300",
            isHide: true,
          },
          {
            label: "350",
            isHide: true,
          },
          {
            label: "400",
            isHide: true,
          },
          {
            label: "450",
            isHide: true,
          },
          {
            label: "500",
          },
          {
            label: "550",
            isHide: true,
          },
          {
            label: "600",
            isHide: true,
          },
          {
            label: "650",
            isHide: true,
          },
          {
            label: "700",
            isHide: true,
          },
          {
            label: "750",
          },
          {
            label: "800",
            isHide: true,
          },
          {
            label: "850",
            isHide: true,
          },
          {
            label: "900",
            isHide: true,
          },
          {
            label: "950",
            isHide: true,
          },
          {
            label: "1000",
          },
        ],
      },
      heartrating: {
        rating1: 0,
      },
      imagerating: {},
      steps: [
        {
          target: "#scrollable", // We're using document.querySelector() under the hood
          header: {
            title: "Get Started",
          },
          content: `Welcome`,
        },
        {
          target: "#toaster",
          content: "To the",
        },
        {
          target: "#tour",
          content: "Documentation",
          params: {
            placement: "top", // Any valid Popper.js placement. See https://popper.js.org/popper-documentation.html#Popper.placements
          },
        },
      ],
      settings: {
        maxScrollbarLength: 60,
      },
    };
  },
};
</script>

<style></style>
