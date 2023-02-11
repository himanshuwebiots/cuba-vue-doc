export const COPYDATA = {
  advanceUi: {
    prismCodes: {
      installVuePerfectScrollbar: `npm i vue3-perfect-scrollbar`,
      unInstallVuePerfectScrollbar: `npm uninstall vue3-perfect-scrollbar`,
      insideTemplateScrollBar: `     <perfect-scrollbar class="both-side-scroll scroll-demo p-0"  v-once :settings="settings3">
      <div ><img src="../../../assets/images/banner/1.jpg" alt="girl" width="800" height="600"></div>
        </perfect-scrollbar>`,
      insideScriptScrollbar: `
      export default {
        data(){
            return{
                 settings3: {
              maxScrollbarLength: 60
            },
            }
        }
    }`,
    mainScriptScrollBar:`import PerfectScrollbar from 'vue3-perfect-scrollbar'
    import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
    createApp(App).use(PerfectScrollbar)`,
      installtoaster: `npm install @meforma/vue-toaster --save `,
      unInstalltoaster: `npm uninstall @meforma/vue-toaster --save `,
      insideTemplateToaster: `
<div>
<button class="btn btn-success " type="button" @click="success" variant="success">Success</button>
</div>`,
      insideScriptToaster: `
export default {
methods:{
  success() {
    this.$toast.show(' New order has been placed ', { theme: 'outline',position: 'top-right', type: 'success', duration: 2000 });
  },
}
}`,

mainScriptToaster:`import Toaster from "@meforma/vue-toaster"
createApp(App).use(Toaster)`,
      installTour: `npm i vue3-tour`,
      unInstallTour: `npm uninstall vue3-tour`,
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

mainScriptTour:`import Vue3Tour from 'vue3-tour'
createApp(App).use(Toaster)`,
      installRating: `npm i vue3-star-ratings`,
      unInstallRating: `npm uninstall vue3-star-ratings`,
      insideTemplateRating: `  <div class="rating-container">
      <vue3-star-ratings v-model="rating" ></vue3-star-ratings>
      <pre class="mb-0 rating-pre">Rating {{rating}}</pre>   
    </div>`,
      insideScriptrating: `export default {
        data(){
          return{
            rating: "0",
             disabled: false
          }
        },`,

mainScriptRating:`import vue3StarRatings from "vue3-star-ratings";
createApp(App).component("vue3-star-ratings", vue3StarRatings)`,
      pagination: `<template>
      <div class="col-xl-6 col-md-6">
        <div class="card">
          <div class="card-header">
            <h5>Pagination</h5>
          </div>
          <div class="card-body pagination-padding">
            <nav aria-label="Page navigation example">
              <ul class="pagination pagination-primary">
                <li class="page-item"><a class="page-link" href="javascript:void(0)">Previous</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0)">1</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                <li class="page-item"><a class="page-link" href="javascript:void(0)">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
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
      installRangeSlider: `npm i vue-slider-component`,
      unInstallRangeSlider: `npm uninstall vue-slider-component`,
      insideTemplateRangeSlider: `<div>
      <VueSlider v-model="one.value" :data="one.data" :marks="true" :tooltip="'always'" :tooltip-placement="'top'" ></VueSlider>
</div>`,
      insideScriptRangeSlider: `import VueSlider from 'vue-slider-component'
      import 'vue-slider-component/theme/antd.css'
      export default {
      components:{
      VueSlider,
      },
      data(){
        return{
            one:{
          value:30,
          data:[10,20,30,40,50,60,70,80,90, 100]
        },}
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
      installDragAndDrop: `npm i vue-draggable-next`,
      unInstallDragAndDrop: `npm uninstall vue-draggable-next`,
      insideTemplateDragAndDrop: `	<div class="container-fluid"> 
      <draggable class="row" >
         <div class="col-sm-12 col-lg-6 text-start" v-for="element in cards" :key="element" >   
           <div class="card" >
             <div class="card-header" v-html="element.title"></div>
             <div class="card-body">
               <p v-text="element.description"></p>
             </div>
           </div>
         </div> 
         </draggable>
         </div>`,
      insideScriptDragAndDrop: `import { VueDraggableNext } from 'vue-draggable-next'
      export default {
        components:{
           draggable: VueDraggableNext,
        },
        data(){
          return {
            cards:[
              {
                title:'<h5>Basic Card</h5>',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
              },
              {
                title:'<h5>Flat Card</h5>',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
              },
              {
                title:'<h5>Without shadow Card</h5>',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
              },
              {
                title:'<h5><i class="icon-move me-2"></i> Icon in Heading</h5>',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
              },
              {
                title:'<h5>Card sub Title</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
              },
              {
                title:'<h5>Card sub Title</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>',
                description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.'
              }
            ]
          };
        }
      };`,
      installImageUpload: `npm i dropzone-vue`,
      unInstallImageUpload: `npm unInstall dropzone-vue`,
      insideTemplateImageUpload: `<div>
      <DropZone :maxFileSize="Number(60000000)" url="http://localhost:8080" :uploadOnDrop="true" :multipleUpload="true" :parallelUpload="2" />
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

integratingBootstrapVue1:`@import 'node_modules/bootstrap/scss/bootstrap.scss';`,
      integratingBootstrapVue: `import "bootstrap";
      import 'bootstrap/dist/js/bootstrap.bundle'`,
      installBootstrapVue: `npm install --save bootstrap`,
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
      progressBar: ` <div class="progress">
      <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-primary" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-secondary" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-success" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
    </div>`,
      alert: ` <div class="alert alert-primary dark" role="alert">
      <p>This is a info alert—check it out!</p>
    </div>
    <div class="alert alert-secondary dark" role="alert">
      <p>This is a light alert—check it out!</p>
    </div>
    <div class="alert alert-success dark" role="alert">
      <p>This is a success alert—check it out!</p>
    </div>
    <div class="alert alert-info dark" role="alert">
      <p>This is a info alert—check it out!</p>
    </div>
    <div class="alert alert-warning dark" role="alert">
      <p>This is a warning alert—check it out!</p>
    </div>
    <div class="alert alert-danger dark" role="alert">
      <p>This is a danger alert—check it out!</p>
    </div>
    <div class="alert alert-light dark" role="alert">
      <p>This is a light alert—check it out!</p>
    </div>
    <div class="alert alert-dark dark" role="alert">
      <p>This is a dark alert—check it out!</p>
    </div>`,
      popover: `  <button class="example-popover btn btn-primary" type="button"  data-container="body" data-bs-toggle="popover" data-bs-placement="top" title="Popover title" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus." >Popover on top</button>
      <button class="example-popover btn btn-primary" type="button" data-container="body" data-bs-toggle="popover" data-bs-placement="right" title="Popover title" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on right</button>
      <button class="example-popover btn btn-primary" type="button" data-container="body" data-bs-toggle="popover" data-bs-placement="bottom" title="Popover title" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on bottom</button>
      <button class="example-popover btn btn-primary" type="button" data-container="body" data-bs-toggle="popover" data-bs-placement="left" title="Popover title" data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Popover on left</button>
        
        `,
      tooltip: ` <button class="example-popover btn btn-primary" type="button" data-container="body" data-bs-toggle="tooltip" data-bs-placement="top" title="Popover title">Hover Me</button>`,
      dropdown: `<button class="dropbtn btn-primary" type="button">Dropdown Button <span><i class="icofont icofont-arrow-down"></i></span></button>
      <div class="dropdown-content"><a href="#">Action</a><a href="#">Another Action</a><a href="#">Something Else Here</a></div>`,
      tabs: `<ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item"><a class="nav-link active"  id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a></li>
      <li class="nav-item dropdown"><a class="nav-link dropdown-toggle bg-transparent border-none" :class="active? 'active show' :''" @click="isActive()" data-bs-toggle="dropdown" href="javascript:void(0)" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
        <div class="dropdown-menu" :class="active? 'show' :''"><a class="dropdown-item" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Action</a><a class="dropdown-item" href="javascript:void(0)">Another action</a><a class="dropdown-item" href="javascript:void(0)">Something else here</a><a class="dropdown-item" href="javascript:void(0)">Separated link</a></div>
      </li>
      <li class="nav-item"><a class="nav-link" id="profile-tabs" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a></li>
      <li class="nav-item"><a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Contact</a></li>
    </ul>`,
      according: `<div class="card">
      <div class="card-header">
        <h5>Basic Accordion</h5><span>Using the <a href="#">card</a> component, you can extend the default collapse behavior to create an accordion.</span>
      </div>
      <div class="card-body">
        <div class="default-according" id="accordion">
          <div class="card">
            <div class="card-header" id="headingOne">
              <h5 class="mb-0">
                <button class="btn btn-link" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Collapsible Group Item #<span>1</span></button>
              </h5>
            </div>
            <div class="collapse show" id="collapseOne" aria-labelledby="headingOne" data-bs-parent="#accordion">
              <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingTwo">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Collapsible Group Item #<span>2</span></button>
              </h5>
            </div>
            <div class="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-bs-parent="#accordion">
              <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
            </div>
          </div>
          <div class="card">
            <div class="card-header" id="headingThree">
              <h5 class="mb-0">
                <button class="btn btn-link collapsed" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Collapsible Group Item #<span>3</span></button>
              </h5>
            </div>
            <div class="collapse" id="collapseThree" aria-labelledby="headingThree" data-bs-parent="#accordion">
              <div class="card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</div>
            </div>
          </div>
        </div>
      </div>
    </div>`,
    },
  },
  forms: {
    prismCodes: {
      insideTemplateFormValidation: `<div class="card">
      <div class="card-header pb-0">
        <h5>Custom styles</h5><span>For custom Bootstrap form validation messages, you’ll need to add the <code class="text-danger">novalidate</code> boolean attribute to your <code class="text-danger">&lt;form&gt;</code>. This disables the browser default feedback tooltips, but still provides access to the form validation APIs in JavaScript. Try to submit the form below; our JavaScript will intercept the submit button and relay feedback to you.</span><span>When attempting to submit, you’ll see the <code class="text-danger">:invalid </code> and <code class="text-danger">:valid </code> styles applied to your form controls.</span>
      </div>
        <div class="card-body">
            <form class="needs-validation" novalidate="" @submit.prevent="onCustomStyleSubmit">
                <div class="row g-3">
                    <div class="col-md-4">
                        <label class="form-label">First name</label>
                        <input type="text" class="form-control" v-bind:class=" formSubmitted ? firstError ? 'is-invalid' : 'is-valid' : '' " id="name" placeholder="Your name" v-model="firstname">
                        <div class="valid-feedback" id="feedback-1" v-if="errors[0]">{{ errors[0].message }}</div>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label" for="validationCustom02">Last name</label>
                        <input class="form-control" type="text" v-bind:class=" formSubmitted ? lastError ? 'is-invalid' : 'is-valid' : '' " id="name" placeholder="Your name" v-model="lastname">
                        <div class="valid-feedback" id="feedback-1" v-if="errors[0]">{{ errors[0].message }}</div>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label class="form-label" for="validationCustomUsername">Username</label>
                        <div class="input-group"><span class="input-group-text" id="inputGroupPrepend">@</span>
                            <input class="form-control" id="validationCustomUsername" type="text" v-bind:class=" formSubmitted ? userError ? 'is-invalid' : 'is-valid' : '' " placeholder="Username" v-model="username">
                            <div class="invalid-feedback" v-if="errors[1]">{{ errors[1].message1 }}</div>
                        </div>
                    </div>
                </div>
                <div class="row g-3">
                    <div class="col-md-6">
                        <label class="form-label" for="validationCustom03">City</label>
                        <input class="form-control" id="validationCustom03" type="text" v-bind:class=" formSubmitted ? cityError ? 'is-invalid' : 'is-valid' : '' " placeholder="City" required="" v-model="city">
                        <div class="invalid-feedback" v-if="errors[1]">{{ errors[1].message2 }}</div>
                    </div>
                    <div class="col-md-3">
                        <label class="form-label" for="validationCustom04">State</label>
                        <select class="form-select" id="validationCustom04" v-bind:class=" formSubmitted ? stateError ? 'is-invalid' : 'is-valid' : '' " v-model="state" required="">
                            <option selected="" disabled="" value="">Choose...</option>
                            <option>gujarat</option>
                            <option>UP</option>
                            <option>MP</option>
                            <option>PUNJAB</option>
                        </select>
                        <div class="invalid-feedback" v-if="errors[1]">{{ errors[1].message3 }}</div>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label class="form-label" for="validationCustom05">Zip</label>
                        <input class="form-control" id="validationCustom05" type="text" v-bind:class=" formSubmitted ? zipError ? 'is-invalid' : 'is-valid' : '' " v-model="zip" placeholder="Zip" required="">
                        <div class="invalid-feedback" v-if="errors[1]">{{ errors[1].message4 }}</div>
                    </div>
                </div>
                <div class="mb-3">
                    <div class="form-check">
                        <div class="checkbox p-0">
                            <input class="form-check-input" id="invalidCheck" type="checkbox" required="">
                            <label class="form-check-label" for="invalidCheck">Agree to terms and conditions</label>
                        </div>
                        <div class="invalid-feedback">You must agree before submitting.</div>
                    </div>
                </div>
                <button class="btn btn-primary" >Submit form</button>
            </form>
        </div>
    </div>`,
      insideScriptFormValidation: `    export default {
        data() {
            return {
                errors: [],
                formSubmitted: false,
                firstname: "mark",
                firstError: false,
                lastname: "Otto",
                lastError: false,
                username: "",
                userError: false,
                city: "",
                state: "",
                zip: '',
                cityError: false,
                stateError: false,
                zipError: false,
            }
        },
        methods: {
            onCustomStyleSubmit() {
                this.formSubmitted = true;
                this.errors = [];
                if (this.firstname.length < 3 || this.firstname > 10) {
                    this.firstError = true;
    
                    this.errors.push({});
                } else {
                    this.firstError = false;
                    this.errors.push({
                        'message': 'Look good!'
                    });
                }
                if (this.lastname.length < 3 || this.lastname.length > 10) {
                    this.lastError = true;
                    this.errors.push({});
                } else {
                    this.lastError = false;
                    this.errors.push({
                        'message': 'Look good!'
                    });
                }
                if (this.username.length < 3 || this.username.length > 6) {
                    this.userError = true;
                    this.errors.push({
                        'message1': 'Please choose a username.'
                    });
                } else {
                    this.userError = false;
                }
                if (this.city.length < 3 || this.city.length > 10) {
                    this.cityError = true;
                    this.errors.push({
                        'message2': 'Please provide a valid city.'
                    });
                } else {
                    this.cityError = false;
                }
                
                if (this.state.length > 7) {
                    this.stateError = true;
                    this.errors.push({
                        'message3': 'Please select a valid state.'
                    });
                } else {
                    this.stateError = false;
                }
                if (this.zip < 8) {
                    this.zipError = true;
                    this.errors.push({
                        'message4': 'Please provide a valid zip.'
                    });
                } else {
                    this.zipError = false;
                }
            },
    
        }
    }`,
      formDisabledRadioButtons: `<div class="radio radio-primary">
      <input id="radio3" type="radio" name="radio1" value="option1" disabled="">
      <label for="radio3">Disabled</label>
    </div>
    <div class="checkbox">
    <input id="checkbox2" type="checkbox" disabled="">
    <label for="checkbox2">Disabled</label>
  </div>`,
      insideTemplateformCheckedRadioButton: `<div class="radio radio-primary">
      <input id="radio4" type="radio" name="radio1" value="option1" checked="">
      <label for="radio4">Checked</label>
    </div>
  <div class="checkbox">
    <input id="checkbox3" type="checkbox" >
    <label for="checkbox3">Checked</label>
   </div>`,
      insideScriptformCheckedRadioButton: `    export default{
    data(){
        return{
            selectedCheckBox:'check1',
            selectedRadio:'radio1'
        }
    }
}`,
      coloredRadioButtons: `    <div class="col">
      <div class="form-group m-t-15 custom-radio-ml">
        <div class="radio radio-primary">
          <input id="radio11" type="radio" name="radio1" value="option1">
          <label for="radio11">Option<span class="digits"> 1</span></label>
        </div>
        <div class="radio radio-secondary">
          <input id="radio22" type="radio" name="radio1" value="option1">
          <label for="radio22">Option<span class="digits"> 2</span></label>
        </div>
        <div class="radio radio-success">
          <input id="radio55" type="radio" name="radio1" value="option1">
          <label for="radio55">Option<span class="digits"> 3</span></label>
        </div>
        <div class="radio radio-info">
          <input id="radio33" type="radio" name="radio1" value="option1" disabled="">
          <label for="radio33">Option<span class="digits"> 4</span></label>
        </div>
        <div class="radio radio-warning">
          <input id="radio44" type="radio" name="radio1" value="option1">
          <label for="radio44">Option<span class="digits"> 5</span></label>
        </div>
        <div class="radio radio-danger">
          <input id="radio66" type="radio" name="radio1" value="option1" checked="">
          <label for="radio66">Option<span class="digits"> 6</span></label>
        </div>
      </div>
    </div>`,
      installDatePicker: `npm i @vuepic/vue-datepicker `,
      insideTemplateDatePicker: `<div>
      <Datepicker1 class="datepicker-here form-control digits" inline autoApply  v-model="date1" range data-language="en"></Datepicker1>
    </div>`,
      insideScriptDatePicker: `iimport Datepicker1 from '@vuepic/vue-datepicker';
      import '@vuepic/vue-datepicker/dist/main.css'
      export default {
        components: {
            Datepicker1, 
        },
        data() {
            return {
                startDate: new Date(),
                endDate: new Date(),
                date1: [this.startDate, this.endDate],
                multi: true,
              }},
    }`,
      installSelect2: `npm i @vueform/multiselect`,
      insideTemplateSelect2: `<div>
      <Multiselect v-model="multiValue" :options="options" mode="tags"/>
</div>`,
      insideScriptSelect2: `import Multiselect from '@vueform/multiselect'
export default {
data(){
  return{
    multiValue: null,
        options: [
          'Alabama' ,
          'Wyoming' ,
          'Coming' ,
          'Hanry Die', 
          'John Doe' 
       ],
    }
},
components: {
    Multiselect
}`,
      installTypeahead: `npm i vue3-simple-typeahead`,
      insideTemplateTypeahead: `<div>
      <vue3-simple-typeahead :items="list" class="form-control typeahead form-control" :placeholder="options.placeholder" @selectItem="selectItem" @onInput="onInput" @onBlur="onBlur" :minInputLength="options.minInputLength" />
</div>`,
mainScriptSimpleTypeahead:`import SimpleTypeahead from 'vue3-simple-typeahead';
import 'vue3-simple-typeahead/dist/vue3-simple-typeahead.css';
createApp(App).use(SimpleTypeahead)`,
      insideScriptTypeahead: `export default {
        created() {
            this.listFiltered = this.list;
        },
        data() {
            return {
                options: {
                    placeholder: 'States of USA',
                    minInputLength: 1,
                },
                list: [
                    'alabama',
                    'alaska',
                    'arizona',
                    'arkansas',
                    'california',
                    'colorado',
                    'connecticut',
                    'delaware',
                    'florida',
                    'georgia',
                    'hawaii',
                    'idaho',
                    'illinois',
                    'indiana',
                    'iowa',
                    'kansas',
                    'kentucky',
                    'louisiana',
                    'maine',
                    'maryland',
                    'massachusetts',
                    'michigan',
                    'minnesota',
                    'mississippi',
                    'missouri',
                    'montana',
                    'nebraska',
                    'nevada',
                    'new hampshire',
                    'new jersey',
                    'new mexico',
                    'new york',
                    'north carolina',
                    'north dakota',
                    'ohio',
                    'oklahoma',
                    'oregon',
                    'pennsylvania',
                    'rhode island',
                    'south carolina',
                    'south dakota',
                    'tennessee',
                    'texas',
                    'utah',
                    'vermont',
                    'virginia',
                    'washington',
                    'west virginia',
                    'wisconsin',
                    'wyoming'
                ],
                listFiltered: [],
            };
        },
        methods: {
            selectItem(item) {
                this.data.selection = item;
            },
            onInput(event) {
                this.data.selection = null;
                this.data.input = event.input;
                this.listFiltered = event.items;
            },
            onBlur(event) {
                this.data.input = event.input;
                this.listFiltered = event.items;
            },
        },
    };`,
    },
  },
  tables: {
    prismCodes: {
     
      insideScriptBoostrapVue: `  <div class="col-sm-12">
      <div class="card">
        <div class="card-header">
          <h3>Basic Table With Border Bottom Color</h3><span>Use a class<code>table</code> to any table, and <code>.border-bottom-*</code>class for Border bottom color</span>
        </div>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr class="border-bottom-primary">
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Username</th>
                <th scope="col">Designation</th>
                <th scope="col">Company</th>
                <th scope="col">Language</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-bottom-secondary">
                <th scope="row">1</th>
                <td> <img class="img-30 me-2" src="@/assets/images/user/1.jpg" alt="profile">Ram Jacob</td>
                <td>Wolfe</td>
                <td>RamJacob@twitter</td>
                <td>Developer</td>
                <td>Apple Inc.</td>
                <td> <span class="badge badge-light-danger">Php</span></td>
                <td>IND</td>
              </tr>
              <tr class="border-bottom-success">
                <th scope="row">2</th>
                <td> <img class="img-30 me-2" src="@/assets/images/user/2.jpg" alt="profile">John Deo</td>
                <td>Gummer</td>
                <td>JohnDeo@twitter	</td>
                <td>Designer</td>
                <td>Hewlett packard	</td>
                <td> <span class="badge badge-light-primary">Html</span></td>
                <td>US</td>
              </tr>
              <tr class="border-bottom-info">
                <th scope="row">3</th>
                <td> <img class="img-30 me-2" src="@/assets/images/user/3.jpg" alt="profile">Elana John</td>
                <td>Cazale	</td>
                <td>ElanaJohn@twitter</td>
                <td>Designer</td>
                <td>Microsoft</td>
                <td> <span class="badge badge-light-danger">Pug</span></td>
                <td>UK</td>
              </tr>
              <tr class="border-bottom-warning">
                <th scope="row">4</th>
                <td> <img class="img-30 me-2" src="@/assets/images/user/7.jpg" alt="">Meryl Streep</td>
                <td>Roberts</td>
                <td>MerylStreep@twitter</td>
                <td>Developer</td>
                <td>Tata Ltd.	</td>
                <td> <span class="badge badge-light-success">React</span></td>
                <td>IDN</td>
              </tr>
              <tr class="border-bottom-danger">
                <th scope="row">5</th>
                <td> <img class="img-30 me-2" src="@/assets/images/user/2.png" alt="">Emma Stone</td>
                <td>Stone</td>
                <td>EmmaStone@twitter	</td>
                <td>Developer</td>
                <td>Wipro Ltd.	</td>
                <td> <span class="badge badge-light-primary">Vue</span></td>
                <td>IRN</td>
              </tr>
              <tr class="border-bottom-light"> 
                <th scope="row">6</th>
                <td> <img class="img-30 me-2" src="@/assets/images/user/3.png" alt="">Eliana Jons</td>
                <td>Jons</td>
                <td>ElianaJons@twitter		</td>
                <td>Developer</td>
                <td>Info Ltd.		</td>
                <td> <span class="badge badge-light-success">Vue</span></td>
                <td>IRN</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
        `,
        mainScriptDataTables:`import Vue3EasyDataTable from 'vue3-easy-data-table';
        import 'vue3-easy-data-table/dist/style.css';
        createApp(App).component('EasyDataTable', Vue3EasyDataTable)`,
      installSmartTable: `npm i vue3-easy-data-table`,
      insideScriptSmartTable: `export default {
        components: {
        },
        data() {
            return {
                Headers: [{
                        text: "Name",
                        value: "name",
                        sortable: true
                    },
                    {
                        text: "Postion",
                        value: "position",
                        sortable: true
                    },
    
                    {
                        text: "Office",
                        value: "office",
                        sortable: true
                    },
                    {
                        text: "Age",
                        value: "age",
                        sortable: true
                    },
                    {
                        text: "Start Date",
                        value: "startdate",
                        sortable: true
                    },
                    {
                        text: "Salary",
                        value: "salary",
                        sortable: true
                    },
                ],
                Item: [
                    {
                        name: 'Tiger Nixon',
                        position: 'System Architect',
                        office: 'Edinburgh',
                        age: 61,
                        startdate: '2011/04/25',
                        salary: '$320,800',
                    },
                ]
            }
        }
    
    }
    `,
      insideTemplateBasicTable: `<div class="col-sm-12">
      <div class="card">
          <div class="card-header pb-0">
              <h3>Zero Configuration</h3><span>DataTables has most features enabled by default, so all you need to do to use it with your own tables is to call the construction function:<code>$().DataTable();</code>.</span><span>Searching, ordering and paging goodness will be immediately added to the table, as shown in this example.</span>
          </div>
          <div class="card-body">
              <div class="table-responsive">
                  <table class="display" id="basic-1">
                      <EasyDataTable :headers="Headers" rowsPerPage="10" :items="Item" style="width:130%;">
                      </EasyDataTable>
                  </table>
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
      insideTemplateColoredTable: `<div class="col-sm-12">
      <div class="card">
        <div class="card-header">
          <h3>Custom Table Color With Hover And Stripped</h3><span>Use class <code>table-hover, table-striped table-*table-info,table-success,table-success,table-info,table-danger,table-primary,table-secondary,table-light,table-active</code>  inside table element.</span>
        </div>
        <div class="table-responsive">
          <table class="table table-striped bg-primary hover">
            <thead class="tbl-strip-thad-bdr">
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Film Title</th>
                <th scope="col">Released</th>
                <th scope="col">Studio</th>
                <th scope="col">Budget  </th>
                <th scope="col">Domestic Gross</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Frozen	</td>
                <td>2013	</td>
                <td>Disney	</td>
                <td>$150,000,000</td>
                <td>$400,953,009</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Minions	</td>
                <td>2015	</td>
                <td>Universal	</td>
                <td>$74,000,000</td>
                <td>$336,045,770</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Zootopia	</td>
                <td>2016	</td>
                <td>Disney	</td>
                <td>$150,000,000</td>
                <td>$341,268,248</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Finding Dory		</td>
                <td>2016</td>
                <td>Disney	Pixar</td>
                <td>$175,000,000</td>
                <td>	$486,295,561</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Toy Story 3		</td>
                <td>2010</td>
                <td>Disney	Pixar</td>
                <td>$200,000,000</td>
                <td>$415,004,880</td>
              </tr>
            </tbody>
          </table>
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
mainScriptVueApexCharts:`import VueApexCharts from "vue3-apexcharts";
createApp(App).use(VueApexCharts)`,
jsonScriptVueApexCharts:`{
  "monthDataSeries1": {
      "prices": [
          8107.85,
          8128.0,
          8122.9,
          8165.5,
          8340.7,
          8423.7,
          8423.5,
          8514.3,
          8481.85,
          8487.7,
          8506.9,
          8626.2,
          8668.95,
          8602.3,
          8607.55,
          8512.9,
          8496.25,
          8600.65,
          8881.1,
          9340.85
      ],
      "dates": [
          "13 Nov 2017",
          "14 Nov 2017",
          "15 Nov 2017",
          "16 Nov 2017",
          "17 Nov 2017",
          "20 Nov 2017",
          "21 Nov 2017",
          "22 Nov 2017",
          "23 Nov 2017",
          "24 Nov 2017",
          "27 Nov 2017",
          "28 Nov 2017",
          "29 Nov 2017",
          "30 Nov 2017",
          "01 Dec 2017",
          "04 Dec 2017",
          "05 Dec 2017",
          "06 Dec 2017",
          "07 Dec 2017",
          "08 Dec 2017"
      ]
  }
  }`,
      installChartjs: `npm i vue3-apexcharts`,
      unInstallChartjs: `npm unInstall  vue3-apexcharts`,
      insideTemplateChartjs: `<apexchart
      type="area"
      height="350"
      ref="chart"
      :options="chartOptions"
      :series="series">
      <apexchart>`,
      insideScriptChartjs: `import chart from "../../../data/chart.json";
      var primary = localStorage.getItem('primary_color') || '#5c61f2';
      export default {
          data(){
              return{
                   series: [
              {
                name: "STOCK ABC",
                data: chart.monthDataSeries1.prices,
              },
            ],
             chartOptions: {
         chart: {
            height: 350,
            type: "area",
            zoom: {
              enabled: false,
            },
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: "straight",
          },
          title: {
            text: "Fundamental Analysis of Stocks",
            align: "left",
          },
          subtitle: {
            text: "Price Movements",
            align: "left",
          },
          labels: chart.monthDataSeries1.dates,
          xaxis: {
            type: "datetime",
          },
          yaxis: {
            opposite: true,
          },
          legend: {
            horizontalAlign: "left",
          },
          colors: [primary],
              }
              }
          },
           mounted() {
          this.series[0].data = chart.monthDataSeries1.prices;
        },
      } `,
      mainScriptvueChartist:`import VueApexCharts from "vue3-apexcharts";
      createApp(App).use(vueChartist)`,
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
      installGoogleMap: `npm i vue3-google-map `,
      unInstallGoogleMap: `npm unInstall vue3-google-map `,
      inslideTemplateGoogleMap: `<div>
      <GoogleMap :center="{lat:20.5937, lng:78.9629}" :zoom="12" style="width: auto; height: 500px"><GoogleMap>
</div>`,
      insideScriptGoogleMap: `import { GoogleMap } from "vue3-google-map"'
export default {
  data(){
    return{
      }
  },
  components: {
    GoogleMap
  }
}`,
      installLeafletMap: `npm i @vue-leaflet/vue-leaflet`,
      unInstallLeafletMap: `npm uninstall @vue-leaflet/vue-leaflet`,
      insideTemplateLeafletMap: `<div>
      <l-map :zoom="simple.zoom" :center="simple.center" style="height: 500px">
      <l-tile-layer :url="simple.url"><l-tile-layer>
      <l-map>
      `,
      insideScriptLeaftletMap: `
      import "leaflet/dist/leaflet.css";
      import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";
      export default {
      components:{
         LMap,
          LTileLayer
      },
      data(){
        return{
            simple:{
          zoom:5,
          center: [49.439557, 234.558105],
          url:'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        },
        }
      }
      }`,
    },
  },
  editors: {
    prismCodes: {
      mainScriptquillEditor:`import { quillEditor } from "vue3-quill";
      createApp(App).use(quillEditor)`,
      installSimpleEditor: `npm i vue3-quill`,
      unInstallSimpleEditor: `npm uninstall vue3-quill`,
      insideTemplateSimpleEditor: `<div>
      <quill-editor
      v-model:value="state.content"
      :options="state.editorOption"
      @blur="onEditorBlur($event)"
      @focus="onEditorFocus($event)"
      @ready="onEditorReady($event)"
      @change="onEditorChange($event)" />
</div>`,
      insideScriptSimpleEditor: `import { reactive } from 'vue'
      export default {
      setup() {
      const state = reactive({
      content: 'Some initial content',
      _content: '',
      editorOption: {
        placeholder: 'core',
      },
      disabled: false
      })
      
      const onEditorBlur = (quill) => {
      
      }
      const onEditorFocus = (quill) => {
      
      }
      const onEditorReady = (quill) => {
      
      }
      const onEditorChange = ({ quill, html, text }) => {
      
      state._content = html
      }
      
      setTimeout(() => {
      state.disabled = true
      }, 2000)
      
      return { state, onEditorBlur, onEditorFocus, onEditorReady, onEditorChange }
      },
      };
      `,
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
      jsonSimpleCalendar:`let eventGuid = 0
      let todayStr = new Date().toISOString().replace(/T.*$/, '') 
      
      export const INITIAL_EVENTS= [
        {
          id: createEventId(),
          title: 'All-day event',
          start: todayStr
        },
        {
          id: createEventId(),
          title: 'Timed event',
          start: todayStr + 'T12:00:00'
        },
        { 
          id: createEventId(),
            title: "event 1",
             date: "2022-09-01"
        },
      {
          id: createEventId(),
           title: "BirthDay",
            date: "2022-09-16"
      },
      { 
        id: createEventId(),
        title: "All-day event", 
        date: "2022-09-04" 
          },
      {
          id: createEventId(),
         title: "event", 
         date: "2022-09-20"
         },
      {
          id: createEventId(),
        title:"event 2",
         date:"2022-10-07"
        },
      {
          id: createEventId(),
          title:"all-day event", 
          date:"2022-10-27"
        },
      {
          id: createEventId(),
        title:"event",
        date:"2022-12-10"
              },
      {
          id: createEventId(),
          title:"event2",
          date:"2022-12-12"
        },
      {
          id: createEventId(),
          title:"event",
          date:"2022-11-1",
          start:"T12:00:00"},
        {
          id: createEventId(),
          title:"event",
          date:"2022-11-18",},
         {
          id: createEventId(),
          title:"event",
          date:"2022-11-06",
          },
          {
          id: createEventId(),
          title:"All Day event",
          date:"2022-12-06",
         },
           {
          id: createEventId(),
             title:"BirthDay Party",
             date:"2022-12-22",
           },
           {
              id: createEventId(),
             title:"4p meeting",
             date:"2022-12-11",
           },
           {
              id: createEventId(),
             title:"3:30p meeting",
             date:"2022-12-12",
           },
           {
              id: createEventId(),
             title:"Tour with our team ",
             date:"2023-01-16",
           },
           {
              id: createEventId(),
             title:"4p meeting ",
             date:"2023-01-03",
           },
           {
            id: createEventId(),
           title:"event3",
           date:"2023-01-06",
         },
           {
              id: createEventId(),
             title:"4p meeting",
             date:"2023-01-22",
           },
           {
              id: createEventId(),
             title:"event1",
             date:"2023-01-22",
           },
           {
              id: createEventId(),
             title:"3:30p meeting",
             date:"2023-01-23",
           },
           {
              id: createEventId(),
             title:"3:30p meeting",
             date:"2023-01-27",
           },
      ]
      
      export function createEventId() {
        return String(eventGuid++)
      }`,
      installSimpleCalendar: `npm i @fullcalendar/vue3`,
      insideTemplateCalendar: `<div>
      <FullCalendar :options="calendarOptions" />
</div>`,
      insideScriptCalendar: ` 
      <FullCalendar :options="calendarOptions" />
      `,
    },
  },
};
