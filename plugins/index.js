import Vue from "vue";
// import ZoomOnHover from "vue-zoom-on-hover";
import Toasted from "vue-toasted";
import { PrismEditor } from "vue-prism-editor";
import VueTour from "vue-tour";
import demoButton from "@/components/buttons/demoButton.vue";
import VueSweetalert2 from "vue-sweetalert2";
import VueScrollactive from "vue-scrollactive";

import codeBox from "@/components/codeBox.vue";
import VJstree from "vue-jstree";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles
require("vue-tour/dist/vue-tour.css");
import "sweetalert2/dist/sweetalert2.min.css";
// Vue.component("Tree", Tree);
Vue.component("prism-editor", PrismEditor);
Vue.component("codeBox", codeBox);
Vue.component("VJstree", VJstree);
Vue.component("demoButton", demoButton);
Vue.use(IconsPlugin);
Vue.use(VueScrollactive);
Vue.use(VueSweetalert2);
Vue.use(BootstrapVue);
Vue.use(Toasted, {
  iconPack: "fontawesome",
});
Vue.use(VueTour);
