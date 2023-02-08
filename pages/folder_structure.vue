<template>
  <div class="row">
    <div id="folder-structure" class="col-sm-12">
      <h4 class="main-title">Vue Folder Structure</h4>
      <p>
        To make the code more re-usable we have created multiple components that
        can be reused. This makes refactoring the code effecient and saves a lot
        of time for the developers.
      </p>
      <p>
        We have used the best folder structure to keep all the common types of
        code separate from each other.
      </p>
      <div class="mt-4" id="treeBasic">
        <VJstree
          :data="folderStructure"
          show-checkbox
          multiple
          allow-batch
          whole-row
        ></VJstree>
      </div>
    </div>
    <div id="pages" class="col-12">
      <h4 class="sub-title" id="pages">Pages</h4>
      <p>
        All the pages are made according to the structure used in the sidebar,
        so that developers can find the related files easily.
      </p>
      <p>
        Inside theme folder navigate to src folder and in that goto pages
        folder. Inside this folder are the main pages that are called in the
        router to render that page.
      </p>
    </div>
    <div id="components" class="col-12">
      <h4 class="sub-title" id="components">Components</h4>
      <p>
        For all the sections that are commonly used thoughout the theme are
        converted into small components and are placed in the
        <strong>components</strong> folder.
      </p>
      <p>
        You can find components folder insider
        <strong>src</strong> folder.
      </p>
      <p class="warning-block">
        <strong>Note:</strong>
        As these components are used throughout the theme so if you make any
        changes in these components then , changes will apply to wherever that
        component has been used.
      </p>
      <p>
        <strong>For Example:</strong> Breadcrumbs are common throughout theme,
        so we have created a component for it and we call it wherever we need
        it. But now if you make any changes in the breadcrumbs component then
        all the breadcrumbs content will change as per you changes.
      </p>
    </div>
    <div id="assets" class="col-12">
      <h4 class="sub-title" id="assets">Assets</h4>
      <p>
        Navigate to <strong>src</strong> folder and the to the
        <strong>assets</strong> folder. There you can find all the assets like
        Images, scss files, fonts file etc. If you need to add any additional
        assets, we recommend you add it inside the assets folder so that the
        folder structure is maintained.
      </p>
    </div>
    <div id="json" class="col-12">
      <h4 class="sub-title" id="jsonData">JSON Data</h4>
      <p>
        To make code sorter and easily modifiable, we get the required data from
        a JSON file and loop through it. This process makes our code mode
        dynamic and more readable.
      </p>
      <p>
        For Example: There are many links in our sidebar and if we write HTML
        code for individual link then, there will be hundreds of lines of code
        and it would be dificult to make any changes in all the links at once.
        So the solution is making a JSON file , in which we define an array and
        then loop through it. To add or remove links you can make modification
        in menu.json file.
      </p>
      <p>
        Navigate to <code> theme > src > data</code> folder to find all JSON
        files.
      </p>
    </div>
  </div>
</template>

<script>
import { FOLDERSTRUCTURE } from "@/static/data/folderStructure.js";
export default {
  data() {
    return {
      folderStructure: FOLDERSTRUCTURE,
    };
  },
  computed: {
    myCustomStyles() {
      return {
        tree: {
          style: {
            height: "auto",
            maxHeight: "300px",
            overflowY: "visible",
            display: "inline-block",
            textAlign: "left",
          },
        },
        row: {
          style: {
            width: "500px",
            cursor: "pointer",
          },
          child: {
            class: "",
            style: {
              height: "35px",
            },
            active: {
              style: {
                height: "35px",
              },
            },
          },
        },
        rowIndent: {
          paddingLeft: "20px",
        },
        text: {
          // class: "" // uncomment this line to overwrite the 'capitalize' class, or add a custom class
          style: {},
          active: {
            style: {
              "font-weight": "bold",
              color: "#2ECC71",
            },
          },
        },
      };
    },
    myCustomOptions() {
      return {
        treeEvents: {
          expanded: {
            state: false,
          },
          collapsed: {
            state: false,
          },
          selected: {
            state: true,
            fn: this.mySelectedFunction,
          },
          checked: {
            state: true,
            fn: this.myCheckedFunction,
          },
        },
        events: {
          expanded: {
            state: true,
          },
          selected: {
            state: true,
          },
          checked: {
            state: true,
          },
          editableName: {
            state: true,
            calledEvent: "expanded",
          },
        },
        addNode: {
          state: true,
          fn: this.addNodeFunction,
          appearOnHover: false,
        },
        editNode: { state: false, fn: null, appearOnHover: false },
        deleteNode: {
          state: true,
          fn: this.deleteNodeFunction,
          appearOnHover: true,
        },
        showTags: true,
      };
    },
  },
};
</script>

<style></style>
