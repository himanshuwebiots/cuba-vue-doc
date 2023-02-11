<template>
  <div>
    <div class="card-header">
      <h4 class="main-title">Forms</h4>
    </div>
    <div class="card-body p-t-0">
      <p>
        This theme being an admin theme, we believe you will have many pages
        that requires forms to submit or update the data. For that purpose forms
        are necessary. We have given avast amount of forms with different
        combinations of inputs to choose from.
      </p>
      <p>
        Here we have given a brief explanation and examples of different type of
        forms and form functionalities.
      </p>
      <p class="warning-block">
        <strong>Note:</strong>
        We have used <strong> bootstrap-vue</strong> for forms and form
        validation, make sure you install this package as well with the command
        <strong>npm install bootstrap-vue </strong>
      </p>

      <h4 class="sub-title title-with-link" id="formValidation">
        Form Validation:
        <demoButton path="https://vue.pixelstrap.com/cuba/form/validation" />
      </h4>

      <p>
        Without proper validations, user might enter data which are not
        according to out required format. To make sure user understands what a
        valid data is, we must provide proper validation messages to convey to
        the user what necessary conditions are to enter the data.
      </p>
      <p><strong>For Example:</strong></p>
      <p>Below is an image of invalid form and its code snippet.</p>
      <img
        class="img-fluid mb-3 img-80"
        src="../assets/images/document/vue/gifs/formValidation2.gif"
        alt=""
      />

      <div class="py-2 ps-3">
        <div>
          <h5 class="inner-sub-title">Inside Your Template tag add:</h5>
          <codeBox :code="prismCodes.insideTemplateFormValidation" />
        </div>
        <div>
          <h5 class="inner-sub-title">Inside Your Script tag add:</h5>
          <codeBox :code="prismCodes.insideScriptFormValidation" />
        </div>
      </div>
    </div>

    <div class="card-body p-t-0">
      <h4 class="sub-title" id="formInputs">Form Inputs:</h4>
      <h5 class="inner-sub-title title-with-link">
        Radio Buttons and Checkboxes:
        <demoButton
          path="https://vue.pixelstrap.com/cuba/form/checkbox-radio"
        />
      </h5>
      <p>
        There are many different types of radio buttons and checkboxes provided
        in the theme. Here we will show you a few customization options for
        radio buttons and checkboxes.
      </p>
      <ul>
        <li>
          Disabled Radio buttons and check boxes:
          <p></p>
          <div>
            <img
              class="img-fluid"
              src="~assets/images/document/vue/codeSnaps/disabledRadioButton.png"
              alt=""
            />
            <img
              class="img-fluid"
              src="~assets/images/document/vue/codeSnaps/disabledCheckbox.png"
              alt=""
            />
          </div>
          <div class="py-2 ps-3">
            <codeBox :code="prismCodes.formDisabledRadioButtons" />
          </div>
        </li>
        <li>
          <h5 class="inner-sub-title" id="radioAndCheck">
            Checked Radio buttons and Checkboxes:
          </h5>
          <p></p>
          <div>
            <img
              class="img-fluid"
              src="~assets/images/document/vue/codeSnaps/checkedRadio.png"
              alt=""
            />
            <img
              class="img-fluid"
              src="~assets/images/document/vue/codeSnaps/checkedCheckbox.png"
              alt=""
            />
          </div>
          <div class="py-2 ps-3">
            <div>
              <h5 class="inner-sub-title">Inside Your Template tag add:</h5>
              <codeBox
                :code="prismCodes.insideTemplateformCheckedRadioButton"
              />
            </div>
            <div>
              <h5 class="inner-sub-title">Inside Your Script tag add:</h5>
              <codeBox :code="prismCodes.insideScriptformCheckedRadioButton" />
            </div>
          </div>
        </li>
        <li>
          <h5 class="inner-sub-title" id="coloredRadioButtons">
            Colored Radio buttons:
          </h5>

          <div>
            <img
              class="img-fluid"
              src="~assets/images/document/vue/codeSnaps/radioColor1.png"
              alt=""
            />
            <img
              class="img-fluid"
              src="~assets/images/document/vue/codeSnaps/radioColor2.png"
              alt=""
            />
            <img
              class="img-fluid"
              src="~assets/images/document/vue/codeSnaps/radioColor3.png"
              alt=""
            />
            <img
              class="img-fluid"
              src="~assets/images/document/vue/codeSnaps/radioColor4.png"
              alt=""
            />
            <img
              class="img-fluid"
              src="~assets/images/document/vue/codeSnaps/radioColor5.png"
              alt=""
            />
            <img
              class="img-fluid"
              src="~assets/images/document/vue/codeSnaps/radioColor6.png"
              alt=""
            />
          </div>
          <div class="py-2 ps-3">
            <codeBox :code="prismCodes.coloredRadioButtons" />
          </div>
        </li>
        <li>
          <h5 class="inner-sub-title title-with-link" id="datePicker">
            Date Picker:
            <demoButton
              path="https://vue.pixelstrap.com/cuba/form/datepicker"
              supplementPath="https://www.npmjs.com/package/vuejs-datepicker"
            />
          </h5>
          <img
            class="img-fluid mb-3 img-80"
            src="../assets/images/document/vue/gifs/datepicker.gif"
            alt=""
          />
          <p class="pt-4"><b>Installing and usage</b></p>
          <div class="mb-4">
            <codeBox :code="prismCodes.installDatePicker" />
            <div>
              <h5 class="inner-sub-title">Inside Your Template tag add:</h5>
              <codeBox :code="prismCodes.insideTemplateDatePicker" />
            </div>
            <div>
              <h5 class="inner-sub-title">Inside Your Script tag add:</h5>
              <codeBox :code="prismCodes.insideScriptDatePicker" />
            </div>
          </div>
        </li>
        <li>
          <h5 class="inner-sub-title title-with-link" id="select2">
            Select 2:
            <demoButton
              path="https://vue.pixelstrap.com/cuba/form/select2"
              supplementPath="https://www.npmjs.com/package/vue-multiselect"
            />
          </h5>
          <img
            class="img-fluid mb-3 img-80"
            src="../assets/images/document/vue/gifs/select2.gif"
            alt=""
          />
          <p class="pt-4"><b>Installing and usage</b></p>
          <div class="mb-4">
            <codeBox :code="prismCodes.installSelect2" />
            <div>
              <h5 class="inner-sub-title">Inside Your Template tag add:</h5>
              <codeBox :code="prismCodes.insideTemplateSelect2" />
            </div>
            <div>
              <h5 class="inner-sub-title">Inside Your Script tag add:</h5>
              <codeBox :code="prismCodes.insideScriptSelect2" />
            </div>
          </div>
        </li>
        <li>
          <h5 class="inner-sub-title title-with-link" id="typeahead">
            Typeahead:
            <demoButton
              path="https://vue.pixelstrap.com/cuba/form/typeahead"
              supplementPath="https://www.npmjs.com/package/vue-bootstrap-typeahead"
            />
          </h5>
          <img
            class="img-fluid mb-3 img-80"
            src="../assets/images/document/vue/gifs/typehead.gif"
            alt=""
          />
          <p class="pt-4"><b>Installing and usage</b></p>
          <div class="mb-4">
            <codeBox :code="prismCodes.installTypeahead" />
            <div>
              <h5 class="inner-sub-title">Add this to main.js</h5>
              <codeBox :code="prismCodes.mainScriptSimpleTypeahead" />
            </div>
            <div>
              <h5 class="inner-sub-title">Inside Your Template tag add:</h5>
              <codeBox :code="prismCodes.insideTemplateTypeahead" />
            </div>
            <div>
              <h5 class="inner-sub-title">Inside Your Script tag add:</h5>
              <codeBox :code="prismCodes.insideScriptTypeahead" />
            </div>
          </div>
        </li>
      </ul>

      <p class="warning-block mt-3">
        <strong>Tip:</strong> Appart from these form inputs there are many
        different form inputs within the forms link. In our project you can
        navigate to <strong>theme>src>pages>forms</strong> and<strong>
          theme>src>pages>form_widgets</strong
        >
        folder to see the code for different forms and its components.
      </p>
    </div>
  </div>
</template>

<script>
import { COPYDATA } from "@/static/data/copyData.js";
export default {
  data() {
    return {
      prismCodes: COPYDATA.forms.prismCodes,
    };
  },
};
</script>

<style></style>
