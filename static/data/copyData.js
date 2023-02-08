export const COPYDATA = {
  advanceUi: {
    prismCodes: {
      installVuePerfectScrollbar: `npm i vue-perfect-scrollbar`,
      unInstallVuePerfectScrollbar: `npm uninstall vue-perfect-scrollbar`,
      insideTemplateScrollBar: `<div>

<VuePerfectScrollbar class="scroll-area" v-once :settings="settings">


    <img src="../@/assets/images/banner/3.jpg" alt="girl" width="800" height="600"

</VuePerfectScrollbar>
</div>`,
      insideScriptScrollbar: `
import VuePerfectScrollbar from "vue-perfect-scrollbar";
      export default {
   data() {
  return {
    settings: {
      maxScrollbarLength: 60
    },
  }
},
components: {
  VuePerfectScrollbar
}
}`,
      installtoaster: `npm install vue-toasted --save `,
      unInstalltoaster: `npm uninstall vue-toasted --save `,
      insideTemplateToaster: `
<div>
    <b-button @click="success" variant="success">Success</b-button>
</div>`,
      insideScriptToaster: `
export default {
methods:{
    success()
    {
       this.$toasted.show(" New order has been placed ", {theme: 'outline',position: "top-right", type: 'success', duration: 2000});
    }
}
}`,
      installTour: `npm i vue-tour`,
      unInstallTour: `npm uninstall vue-tour`,
      insideTemplateTour: `<div>
    <v-tour name="myTour" :steps="steps" :options="tourOptions"></v-tour>
</div>`,
      insideScriptTour: `
export default {
       data () {
          return {
              tourOptions: {
                  useKeyboardNavigation: true,
                  labels: {
                    buttonSkip: 'Skip',
                    buttonPrevious: 'Back',
                    buttonNext: 'Next',
                    buttonStop: 'Done'
                }
              },
              steps: [
                {
                    target: '#profile-tour',
                    content: 'This is Profile image'
                },
                {
                    target: '#update-profile-tour',
                    content: 'Change Profile image here'
                }
              ]
          }
      },
      mounted: function () {
          this.$tours['myTour'].start()
      }
}`,
      installRating: `npm i vue-rate-it`,
      insideTemplateRating: `<div>
    <image-rating :src="rectanglerating()" :item-size="12" :max-rating="10"></image-rating>
</div>`,
      insideScriptrating: `import {ImageRating} from 'vue-rate-it';

export default {
  components: {
      ImageRating
  },
   methods:{
    vuelogo(){
        var vuelogo = require('../@/assets/images/vuelogo.png');
      return vuelogo;
    }
   }
}`,
      pagination: `<template>
<div>
  <b-pagination-nav
      :number-of-pages="3"
      base-url="#"
      first-text="First"
      prev-text="Prev"
      next-text="Next"
      last-text="Last"
      >
</b-pagination-nav>
</div>
</template>`,
      installSweetAlert: `npm i vue-sweetalert2`,
      unInstallSweetAlert: `npm uninstall vue-sweetalert2`,
      insideTemplateSweetAlert: `<div>
    <b-button type="button" v-on:click="basic" variant="primary">Basic</b-button>
</div>`,
      insideScriptSweetAlert: `export default {
  methods:{
  basic:function(){
      this.$swal({
          title:'Hello world!'
      });
    }
  }
}`,
      installRangeSlider: `npm i vue-slide-bar`,
      unInstallRangeSlider: `npm uninstall vue-slide-bar`,
      insideTemplateRangeSlider: `<div>
    <VueSlideBar v-model="one.value" :min="1" :max="100" :range="one.range" ></VueSlideBar>
</div>`,
      insideScriptRangeSlider: `import VueSlideBar from 'vue-slide-bar'

export default {
data () {
return {
one:{
value:5,
range:[
{
label: '10'
},
{
label: '100'
},
]
}
      }
  }
}`,
      installImageCropper: `npm i vue-cropperjs`,
      unInstallImageCropper: `npm uninstall vue-cropperjs`,
      insideTemplateImageCropper: `<div>
 <vue-cropper ref='cropper'  :crop="cropImage"> </vue-cropper>
</div>
`,
      insideScriptImageCropper: `import VueCropper from 'vue-cropperjs';
import 'cropperjs/dist/cropper.css';

export default {
  data () {
return {
one:{
value:5,
range:[
{
label: '10'
},
{
label: '100'
},
]
}
      }
  }
},
components: {
      VueCropper,
},
mounted(){
  this.imageData = this.$refs.cropper.getData();
},`,
      installDragAndDrop: `npm i vue2-dragula`,
      unInstallDragAndDrop: `npm uninstall vue2-dragula`,
      insideTemplateDragAndDrop: `<div>
  <div class="pull-left " v-dragula="colOne" service="my-third" drake="a">
        <div v-for="text in colOne" :key="text">{{text}}</div>
</div>
  <div class="pull-right" v-dragula="colTwo" service="my-third" drake="a">
        <div v-for="text in colTwo" :key="text">{{text}}</div>
</div>
</div>`,
      insideScriptDragAndDrop: `import { Vue2Dragula } from 'vue2-dragula'
export default {
  data () {
return {
   one: [
              'Lorem ipsum dolor sit amet, consectetur',
              'sed do eiusmod tempor incididunt ut labore et dolore magna.',
              'Ut enim ad minim veniam, quis nostrud exercitation',
              'ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          ],
          two: [
              'Duis aute irure dolor in reprehenderit in voluptate velit esse',
              'cillum dolore eu fugiat nulla pariatur.',
              'Excepteur sint occaecat cupidatat non proident,',
              'sunt in culpa qui officia deserunt mollit anim id est laborum.'
          ],
      }
  }
},
components: {
      Vue2Dragula
},
mounted(){
  this.imageData = this.$refs.cropper.getData();
},`,
      installImageUpload: `npm i vue2-dropzone`,
      unInstallImageUpload: `npm unInstall vue2-dropzone`,
      insideTemplateImageUpload: `<div>
     <vue-dropzone id="singledropzone" :options="singledropzoneOptions" class="dropzone digits">                                
  </vue-dropzone>
</div>`,
      insideScriptImageUpload: `
import vue2Dropzone from 'vue2-dropzone'
export default {
  data () {
return {
singledropzoneOptions:{
                url:"http://localhost:8080",
                thumbnailWidth: 150,
              maxFiles:1,
              maxFilesize: 2,
                addRemoveLinks: true,
                dictDefaultMessage:"<i class='icon-cloud-up'></i><h6>Drop files here or click to upload.</h6><span>(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>"
         },
      }
  }
},
components: {
  vueDropzone: vue2Dropzone
}`,
    },
  },
  basicUi: {
    prismCodes: {
      integratingBootstrapVue: `import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-vue/dist/bootstrap.css";
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);`,
      installBootstrapVue: `npm install --save bootstrap-vue`,
      uiButtons: `<button type="button" class="btn btn-primary">Primary Button</button>
<button type="button" class="btn btn-secondary">Secondary Button</button>
<button type="button" class="btn btn-success">Success Button</button>
<button type="button" class="btn btn-info">Info Button</button>
<button type="button" class="btn btn-warning">Warning Button</button>
<button type="button" class="btn btn-danger">Danger Button</button>
<button type="button" class="btn btn-light">Light Button</button>`,
      tagsNPills: `<span class="badge badge-primary">Primary</span>
<span class="badge badge-secondary">Secondary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-info">Info</span>
<span class="badge badge-warning text-dark">Warning</span>
<span class="badge badge-danger">Danger</span>
<span class="badge badge-light text-dark">Light</span>
<span class="badge badge-dark">Dark</span>  `,
      progressBar: `<div class="progress">
<b-progress :value="0" :max="100"></b-progress>
</div>
<div class="progress">
<b-progress :value="25" :max="100" variant="primary"></b-progress>
</div>
<div class="progress">
<b-progress :value="50" :max="100" variant="secondary"></b-progress>
</div>
<div class="progress">
<b-progress :value="75" :max="100" variant="success"></b-progress>
</div>
<div class="progress">
<b-progress :value="100" :max="100" variant="info"></b-progress>
</div>`,
      alert: `<b-alert show variant="primary" class="alert alert-primary">
<p>This is a info alert—check it out!</p>
</b-alert>
<b-alert show variant="secondary" class="alert alert-secondary">
<p>This is a light alert—check it out!</p>
</b-alert>
<b-alert show variant="success" class="alert alert-success">
<p>This is a success alert—check it out!</p>
</b-alert>
<b-alert show variant="info" class="alert alert-info">
<p>This is a danger alert—check it out!</p>
</b-alert>
<b-alert show variant="warning" class="alert alert-warning">
<p>This is a secondary alert—check it out!</p>
</b-alert>
<b-alert show variant="danger" class="alert alert-danger">
<p>This is a warning alert—check it out!</p>
</b-alert>
<b-alert show variant="light" class="alert alert-light">
<p>This is a light alert—check it out!</p>
</b-alert>
<b-alert show variant="dark" class="alert alert-dark">
<p>This is a dark alert—check it out!</p>
</b-alert>`,
      popover: `<b-button id="popover-target-1"> Left Popover </b-button>

<b-popover target="popover-target-1" triggers="hover" placement="left">
<template #title>Popover Title</template>
I am left popover <b>component</b> !
</b-popover>
        
        `,
      tooltip: `<b-button v-b-tooltip.hover title="Hover title" variant="primary" >Hover Me</b-button>`,
      dropdown: `<b-dropdown text="Dropdown Button" menu-class="dropdown-content" variant="primary" >
<b-dropdown-item>Action</b-dropdown-item>
<b-dropdown-item>Another Action</b-dropdown-item>
<b-dropdown-item>Something Else Here</b-dropdown-item>
</b-dropdown>`,
      tabs: `<b-tabs>
<b-tab title="Home" active>
<p class="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
</b-tab>
<b-tab title="Profile">
<p class="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
</b-tab>
<b-tab title="Contact">
<p class="mb-0 m-t-30">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
</b-tab>`,
      according: `<b-card no-body class="mb-1">
<b-card-header header-tag="div" class="bg-primary">
<h5 class="mb-0">
<b-button v-b-toggle.primary_icon_open_close_1 ><i class="fa fa-briefcase"></i> Collapsible Group Item #<span class="digits">1</span></b-button>
</h5>
</b-card-header>
<b-collapse id="primary_icon_open_close_1" visible accordion="my-accordion-icon-open-close" role="tabpanel">
<b-card-body>
<b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
</b-card-body>
</b-collapse>
</b-card>

<b-card no-body class="mb-1">
<b-card-header header-tag="div" class="bg-primary">
<h5 class="mb-0">
<b-button v-b-toggle.primary_icon_open_close_2 ><i class="fa fa-support"></i> Collapsible Group Item #<span class="digits">2</span></b-button>
</h5>
</b-card-header>
<b-collapse id="primary_icon_open_close_2" accordion="my-accordion-icon-open-close" role="tabpanel">
<b-card-body>
<b-card-text>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</b-card-text>
</b-card-body>
</b-collapse>
</b-card>`,
    },
  },
  forms: {
    prismCodes: {
      insideTemplateFormValidation: `<b-form>
  <div class="custom-control custom-checkbox mb-3 pl-0">
      <b-form-checkbox id="supported_checkbox" name="supported_checkbox" v-model="supported_form.checkbox" :state="supported_checkbox_state" >
          Check this custom checkbox
      </b-form-checkbox>
      <b-form-invalid-feedback :state="supported_checkbox_state">Example invalid feedback text</b-form-invalid-feedback>
  </div>

  <div class="custom-control custom-radio mb-3 pl-0">
      <b-form-radio-group v-model="supported_form.radio" stacked :options="supported_form_radio_options" :state="supported_radio_state" name="supported_radio_validation">
          <b-form-invalid-feedback :state="supported_radio_state">More example invalid feedback text</b-form-invalid-feedback>
      </b-form-radio-group>
  </div>

  <div class="form-group">
      <b-form-select v-model="supported_form.selected" :options="supported_form_select_options" :state="supported_select_state"></b-form-select>
      <b-form-invalid-feedback :state="supported_select_state">Example invalid custom select feedback</b-form-invalid-feedback>
  </div>

  <div class="custom-file">
      <b-form-file v-model="supported_form.file" :state="supported_file_state" placeholder="Choose file..." drop-placeholder="Drop file here..."></b-form-file>
      <b-form-invalid-feedback :state="supported_file_state">Example invalid custom select feedback</b-form-invalid-feedback>
  </div>
</b-form>`,
      insideScriptFormValidation: `    export default {

    data() {
        return {
            supported_form: {
                checkbox: false,
                radio: null,
                selected: null,
                file: null
            },
            supported_form_radio_options: [
                { text: 'Toggle this custom radio', value: 'first' },
                { text: 'Or toggle this other custom radio', value: 'second' }
            ],
            supported_form_select_options: [
                { value: null, text: 'Open this select menu' },
                { value: '1', text: 'One' },
                { value: '2', text: 'Two' },
                { value: '3', text: 'Three' },
            ],
        };
    },
    computed: {
        supported_checkbox_state() {
            return this.supported_form.checkbox;
        },
        supported_radio_state() {
            return Boolean(this.supported_form.radio);
        },
        supported_select_state() {
            if (this.supported_form.selected == null) {
                return false;
            } else {
                return true;
            }
        },
        supported_file_state() {
            if (this.supported_form.file === null) {
                return false;
            } else {
                return true;
            }
        },
    },
};`,
      formDisabledRadioButtons: `<div class="radio radio-primary">
      <b-form-radio name="radio1" value="disabled" disabled>Disabled</b-form-radio>
  </div>
  <div class="checkbox">
      <b-form-checkbox name="checkbox2" disabled>Disabled</b-form-checkbox>
  </div>`,
      insideTemplateformCheckedRadioButton: `<div class="radio radio-primary">
      <b-form-radio v-model="selectedRadio" name="radio1" value="radio1" >Checked</b-form-radio >
  </div>
  <div class="checkbox">
      <b-form-checkbox name="checkbox3" v-model="selectedRadio" value="check1">Checked</b-form-checkbox>
  </div>`,
      insideScriptformCheckedRadioButton: `    export default{
    data(){
        return{
            selectedCheckBox:'check1',
            selectedRadio:'radio1'
        }
    }
}`,
      coloredRadioButtons: `<div class="radio radio-primary">
  <b-form-radio name="radio2" value="option1">Option 1</b-form-radio>
</div>

<div class="radio radio-secondary">
  <b-form-radio name="radio2" value="option2">Option 2</b-form-radio>
</div>

<div class="radio radio-success">
  <b-form-radio name="radio2" value="option3">Option 3</b-form-radio>
</div>

<div class="radio radio-info">
  <b-form-radio name="radio2" value="option4" disabled>Option 4</b-form-radio>
</div>

<div class="radio radio-warning">
  <b-form-radio name="radio2" value="option5">Option 5</b-form-radio>
</div>

<div class="radio radio-danger">
  <b-form-radio name="radio2" value="option6" v-model="selected"
     `,
      installDatePicker: `npm i vuejs-datepicker `,
      insideTemplateDatePicker: `<div>
            <datepicker input-class="datepicker-here form-control digits" :format="format" ></datepicker>
    </div>`,
      insideScriptDatePicker: `import Datepicker from 'vuejs-datepicker';
export default {
data(){
  return{
        format: "MM/dd/yyyy",
        format2: "MMMM yyyy",
        disabledDates:{
            days: [6, 0],
        },
    }
},
components: {
    Datepicker
}`,
      installSelect2: `npm i vue-multiselect`,
      insideTemplateSelect2: `<div>
<multiselect v-model="singleValue" :options="options" label="name" :searchable="false" :close-on-select="false" :show-labels="false" placeholder="Pick a value"></multiselect>
</div>`,
      insideScriptSelect2: `import Multiselect from 'vue-multiselect'
export default {
data(){
  return{
        singleValue:""
    }
},
components: {
    Multiselect
}`,
      installTypeahead: `npm i vue-bootstrap-typeahead`,
      insideTemplateTypeahead: `<div>
    <vue-bootstrap-typeahead
    v-model="query"
    inputClass="typeahead"
    :data="countries"
    placeholder="State of USA"
    />
</div>`,
      insideScriptTypeahead: `import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
export default {
data(){
    return{
            query: "",
            countries: [
                "alabama", "alaska", "arizona", "arkansas", "california", "colorado", "connecticut", "delaware", "florida", "georgia", "hawaii", "idaho", "illinois", "indiana", "iowa", "kansas", "kentucky", "louisiana", "maine", "maryland", "massachusetts", "michigan", "minnesota", "mississippi", "missouri", "montana", "nebraska", "nevada", "new hampshire", "new jersey", "new mexico", "new york", "north carolina", "north dakota", "ohio", "oklahoma", "oregon", "pennsylvania", "rhode island", "south carolina", "south dakota", "tennessee", "texas", "utah", "vermont", "virginia", "washington", "west virginia", "wisconsin", "wyoming"
        ]   
    }
},
components: {
    VueBootstrapTypeahead
}`,
    },
  },
  tables: {
    prismCodes: {
      installBootstrapVue: `npm i bootstrap-vue`,
      insideTemplateBoostrapVue: `<div>
        <b-table striped hover :items="items"></b-table>
</div>`,
      insideScriptBoostrapVue: `import BootstrapVue from 'bootstrap-vue' 
export default {
data(){
return{
    items: [
                    { no:1, first_name:'Alexander', last_name:'Orton', username:'@mdorton', role:'Admin', country:'USA' },
                    { no:2, first_name:'John Deo', last_name:'Deo', username:'@johndeo', role:'User', country:'USA' },
                    { no:3, first_name:'Randy Orton', last_name:'the Bird', username:'@twitter', role:'admin', country:'UK' },
                    { no:4, first_name:'Randy Mark', last_name:'Ottandy', username:'@mdothe', role:'user', country:'AUS' },
                    { no:5, first_name:'Ram Jacob', last_name:'Thornton', username:'@twitter', role:'admin', country:'IND' }
        ]
}
},
components: {
BootstrapVue
}
        `,
      installSmartTable: `npm i vuejs-smart-table`,
      insideScriptSmartTable: `import SmartTable from 'vuejs-smart-table'
data(){
return{
}
},
components: {
SmartTable
}`,
      insideTemplateBasicTable: `<div class="container-fluid">
<div class="row">
<div class="col-md-12">
    <div class="card">
        <div class="card-header">
            <h5>Basic Table</h5><span>Use a class<code>table</code> to any table.</span>
        </div>
        <div class="table-responsive  mb-0">
            <b-table striped hover :items="items"></b-table>
        </div>
    </div>
</div>
</div>
</div>`,
      insideScriptBasicTable: `export default {
data(){
return{
    items: [
      { no:1, first_name:'Alexander', last_name:'Orton', username:'@mdorton', role:'Admin', country:'USA' },
      { no:2, first_name:'John Deo', last_name:'Deo', username:'@johndeo', role:'User', country:'USA' },
      { no:3, first_name:'Randy Orton', last_name:'the Bird', username:'@twitter', role:'admin', country:'UK' },
      { no:4, first_name:'Randy Mark', last_name:'Ottandy', username:'@mdothe', role:'user', country:'AUS' },
      { no:5, first_name:'Ram Jacob', last_name:'Thornton', username:'@twitter', role:'admin', country:'IND' }
    ],
};
}
};`,
      insideTemplateColoredTable: `<div class="container-fluid">
<div class="row">
<div class="col-md-12">
    <div class="card">
        <div class="card-header">
            <h5>Contextual classes</h5>
        </div>
        <div class="table-responsive mb-0">
            <b-table :items="items2"></b-table>
        </div>
    </div>
</div>
</div>
</div>`,
      insideScriptColoredTable: `    export default {
data(){
return{
  items2: [
            { class:'table-primary', heading:'Cell', _rowVariant: 'primary' },
            { class:'table-secondary', heading:'Cell', _rowVariant: 'secondary' },
            { class:'table-success', heading:'Cell', _rowVariant: 'success' },
            { class:'table-info', heading:'Cell', _rowVariant: 'info' },
            { class:'table-warning', heading:'Cell', _rowVariant: 'warning' },
            { class:'table-danger', heading:'Cell', _rowVariant: 'danger' },
            { class:'table-light', heading:'Cell', _rowVariant: 'light' },
            { class:'table-active', heading:'Cell', _rowVariant: 'active' },
          ],
    };
}
};`,
    },
  },
  charts: {
    prismCodes: {
      installGoggleCharts: `npm i vue-google-charts `,
      unInstallGoggleCharts: `npm unInstall vue-google-charts `,
      insideTemplateGoogleCharts: `<div>
    <GChart class="chart-overflow" id="pie-chart1" type="PieChart" :data="pie_chart.chartData_1"/>
</div>`,
      insideScriptGoogleCharts: `import { GChart } from 'vue-google-charts'
data(){
    return{
        chartsLib: null, 
        pie_chart: {
        chartData_1: [
            ['Task', 'Hours per Day'],
                ['Work',     5],
                ['Eat',      10],
            ['Commute',  15],
            ['Watch TV', 20],
            ['Sleep',    25]
        ]
        }
    }
},
components: {
    GChart
}`,
      installChartjs: `npm i vue-chartjs`,
      unInstallChartjs: `npm unInstall vue-chartjs`,
      insideTemplateChartjs: `<div>
    <Bar class="chart-height"/>
</div>`,
      insideScriptChartjs: `import { Bar } from 'vue-chartjs'
export default {
  data(){
    return{
      }
  },
  components: {
      Bar
  },
  mounted () {
    this.renderChart({
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [
        {
          label: 'GitHub Commits',
          backgroundColor: '#f87979',
            data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
        }
      ]
    })
  }
}`,
      installChartist: `npm i vue-chartist`,
      unInstallChartist: `npm uninstall vue-chartist`,
      insideTemplateChartist: `<div>
<chartist
  class="ct-6 flot-chart-container"
  ratio="ct-major-second"
  type="Line"
  :data="chart1.data"
  :options="chart1.options">
</chartist>
</div>`,
      insideScriptChartist: `import * as Chartist from 'chartist';
export default {
data(){
  return{
      chart1 : {
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          series: [
                [12, 9, 7, 8, 5, 4, 6, 2, 3, 3, 4, 6],
                [4,  5, 3, 7, 3, 5, 5, 3, 4, 4, 5, 5],
                [5,  3, 4, 5, 6, 3, 3, 4, 5, 6, 3, 4],
                [3,  4, 5, 6, 7, 6, 4, 5, 6, 7, 6, 3]
          ]
        },
        options: {
            low: 0,
            showArea: false,
            fullWidth: true,
        }
      },
}
},
components: {
    Chartist
}
}`,
    },
  },
  maps: {
    prismCodes: {
      installGoogleMap: `npm i vue2-google-maps `,
      unInstallGoogleMap: `npm unInstall vue2-google-maps `,
      inslideTemplateGoogleMap: `<div>
    <GmapMap :center="{lat:20.5937, lng:78.9629}" :zoom="12" style="width: auto; height: 500px">
    </GmapMap>
</div>`,
      insideScriptGoogleMap: `import * as VueGoogleMaps from 'vue2-google-maps'
export default {
  data(){
    return{
      }
  },
  components: {
      VueGoogleMaps
  }
}`,
      installLeafletMap: `npm i vue2-leaflet`,
      unInstallLeafletMap: `npm uninstall vue2-leaflet`,
      insideTemplateLeafletMap: `<div>
<l-map :zoom="simple.zoom" :center="simple.center" style="height: 500px">
        <l-tile-layer :url="simple.url"></l-tile-layer>
</l-map>`,
      insideScriptLeaftletMap: `
import { LMap } from 'vue2-leaflet'
export default {
  data(){
    return{
          simple:{
                zoom:5,
                  center: [49.439557, 234.558105],
                  url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
            }
      }
  },
  components: {
      LMap
  }
}`,
    },
  },
  editors: {
    prismCodes: {
      installSimpleEditor: `npm i vue2-editor`,
      unInstallSimpleEditor: `npm uninstall vue2-editor`,
      insideTemplateSimpleEditor: `<div>
    <vue-editor v-model="content"></vue-editor>
</div>`,
      insideScriptSimpleEditor: `import { VueEditor } from "vue2-editor";
export default {
    data(){
    return{
            content: "<h1>Some initial content</h1>"
        }
    },
    components: {
        VueEditor
    }
}`,
      installCKEditor: `npm i @ckeditor/ckeditor5-vue`,
      unInstallCKEditor: `npm uninstall @ckeditor/ckeditor5-vue`,
      insideTemplateCKEditor: `<div>
      <ckeditor :editor="editor"  v-model="editorData"></ckeditor>
 </div>`,
      insideScriptCSEditor: `import CKEditor from '@ckeditor/ckeditor5-vue';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
data(){
    return{
        editor: ClassicEditor,
        editorData: '<p>Lorem Ipsum is simply dummy text</p>',
    }
},
components: {
        ckeditor: CKEditor.component
}
}`,
    },
  },
  calendar: {
    prismCodes: {
      installSimpleCalendar: `npm i vue-simple-calendar`,
      insideTemplateCalendar: `<div>
<calendar-view :show-date="showDate"
      class="theme-default holiday-us-traditional holiday-us-official">
      <calendar-view-header slot="header" slot-scope="t" :header-props="t.headerProps" @input="setShowDate" />
  </calendar-view>
</div>`,
      insideScriptCalendar: ` 
import { CalendarView, CalendarViewHeader, CalendarMathMixin} from "vue-simple-calendar";
  
import Datepicker from 'vuejs-datepicker';
  
export default {
  data(){
    return{
        showDate: new Date()
      }
  },
  components: {
    CalendarView,
    CalendarViewHeader,
    Datepicker
  },
  methods: {
  setShowDate(d) {
    this.showDate = d;
    }
  }
}`,
    },
  },
};
