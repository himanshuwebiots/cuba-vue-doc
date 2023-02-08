export const MENUITEMS = [
  {
    title: "Getting Started",
    children: [
      {
        title: "Getting Started",
        path: "/getting_started",
        headings: [
          { title: "Getting Started", id: "gettingStarted" },
          { title: "Folder Structure", id: "folderStructure" },
          { title: "Installation Guide", id: "installationGuide" },
          { title: "Theme Layout", id: "themeLayout" },
          { title: "Theme Customizer", id: "themeCustomizer" },
          { title: "sidebar", id: "sidebar" },
          { title: "Dark Layout", id: "darkLayout" },
          { title: "SCSS Structure", id: "scssStructure" },
          { title: "Creating New Page", id: "creatingNewPage" },
          { title: "Routing Guide", id: "routingGuide" },
          { title: "Vuex Guide", id: "vuexGuide" },
          { title: "Loader", id: "loader" },
          { title: "Multi Language", id: "multiLanguage" },
          { title: "Authentication System", id: "authenticationSystem" },
          { title: "Components", id: "components" },
          { title: "Apps", id: "apps" },
        ],
      },
      {
        title: "Folder Structure",
        path: "/folder_structure",
        headings: [
          { title: "Pages", id: "pages" },
          { title: "Components", id: "components" },
          { title: "Assets", id: "assets" },
          { title: "JSON Data", id: "jsonData" },
        ],
      },
      {
        title: "Installation",
        path: "/installation",
        headings: [
          { title: "Prerequisites", id: "prerequisites" },
          {
            title: "Vue Setup",
            id: "vueSetup",
            innerHeadings: [
              { title: "Installing Vue Cli", id: "installingVueCli" },
              { title: "Create Initial Application", id: "createInitial" },
              { title: "Serve Application", id: "serveApplication" },
            ],
          },
          {
            title: "Build Application",
            id: "buildApplication",
            innerHeadings: [
              {
                title: "Making Sub-folder on Server",
                id: "makingSubFolderOnServer",
              },
            ],
          },
          {
            title: "Cuba Setup",
            id: "cubaSetup",
            innerHeadings: [
              { title: "Install Node", id: "installNode" },
              {
                title: "Install Vue CLI",
                id: "installVueCli",
              },
              {
                title: "Setup Cuba Theme",
                id: "setupCubaTheme",
              },
            ],
          },
        ],
      },
      {
        title: "Theme Layouts",
        path: "/theme_layouts",
        headings: [
          { title: "Pages", id: "pages" },
          { title: "Dubai", id: "dubai" },
          { title: "London", id: "london" },
          { title: "Seoul", id: "seoul" },
          { title: "Los Angeles", id: "losAngeles" },
          { title: "Paris", id: "paris" },
          { title: "Tokyo", id: "tokyo" },
          { title: "Madrid", id: "madrid" },
          { title: "Moscow", id: "moscow" },
          { title: "New York", id: "newYork" },
          { title: "Singapore", id: "singapore" },
          { title: "Rome", id: "rome" },
          { title: "Barcelona", id: "barcelona" },
        ],
      },
      {
        title: "Layout Types",
        path: "/layout_types",
        headings: [
          {
            title: "Layout Types",
            id: "layoutTypes",
          },
          {
            title: "LTR",
            id: "ltr",
          },
          {
            title: "RTL",
            id: "rtl",
          },
          {
            title: "Boxed ",
            id: "boxed",
          },
          {
            title: "Set Default Layout Settings ",
            id: "setDefaultLayoutSettings",
          },
        ],
      },
      {
        title: "Sidebar Options",
        path: "/sidebar_options",
        headings: [
          {
            title: "Default Sidebar",
            id: "defaultSidebar",
          },
          {
            title: "Bordered Sidebar",
            id: "borderedSidebar",
          },
          {
            title: "Icon Color Sidebar",
            id: "iconColorSidebar",
          },
        ],
      },
      {
        title: "Unlimited Colors",
        path: "/unlimited_colors",
        headings: [{ title: "Variables To Change", id: "variablesToChange" }],
      },
      {
        title: "Mix Layout",
        path: "/mix_layout",
        headings: [
          {
            title: "Types Of Layout options",
            id: "typesOfLayoutOptions",
            innerHeadings: [
              { title: "Light Layout With Light Sidebar", id: "lightLight" },
              { title: "Light Layout With Dark Sidebar", id: "lightDark" },
              { title: "Dark Layout With Dark Sidebar", id: "darkDark" },
            ],
          },
        ],
      },
      {
        title: "Sidebar",
        path: "/sidebar",
        headings: [
          {
            title: "Add Links in Sidebar",
            id: "addLinksInSidebar",
            innerHeadings: [
              { title: "Add Links With Sublinks", id: "linksWithSublinks" },
              {
                title: "Add Links Without Sublinks",
                id: "linksWithoutSublinks",
              },
            ],
          },
          {
            title: "Remove Links from Sidebar",
            id: "removeLinksFromSidebar",
          },
        ],
      },
      {
        title: "Dark Layout",
        path: "/dark_layout",
        headings: [
          {
            title: "How Dark Layout Applies",
            id: "darkLayoutApplies",
            innerHeadings: [
              { title: "With Dark-Only Class", id: "layoutWithDarkOnly" },
              { title: "Without Dark-only Class", id: "layoutWithoutDarkOnly" },
            ],
          },
        ],
      },
      {
        title: "SCSS Structure",
        path: "/scss_structure",
        headings: [
          {
            title: "Explanation",
            id: "explanation",
          },
          {
            title: "Base Folder",
            id: "baseFolder",
            innerHeadings: [
              {
                title: "reset.scss",
                id: "resetscss",
              },
              {
                title: "typography.scss",
                id: "typographyscss",
              },
            ],
          },
          {
            title: "Components Folder",
            id: "componentsFolder",
          },
          {
            title: "Layout Folder",
            id: "layoutFolder",
          },
          {
            title: "Pages Folder",
            id: "pagesFolder",
          },
          {
            title: "Theme Folder",
            id: "themeFolder",
          },
          {
            title: "Utils Folder",
            id: "utilsFolder",
          },
          {
            title: "Vendors Folder",
            id: "vendorsFolder",
          },
        ],
      },
      { title: "Create New Page", path: "/create_new_page" },
      {
        title: "Routing",
        path: "/routing",
        headings: [
          {
            title: "Router File Path",
            id: "routerPath",
          },
          {
            title: "Making Routes",
            id: "makingRoutes",
          },
          {
            title: "More Detail On Routing",
            id: "detailOnRouting",
          },
          {
            title: "Create Route Without Layout",
            id: "routeWithoutLayout",
          },
          {
            title: "Create Route With Layout",
            id: "routeWithLayout",
          },
        ],
      },
      {
        title: "Vuex",
        path: "/vuex",
        headings: [
          {
            title: "Vuex Setup",
            id: "vuexSetup",
          },
          {
            title: "State",
            id: "vuexState",
          },
          {
            title: "Getters",
            id: "vuexGetters",
          },
          {
            title: "Actions",
            id: "vuexActions",
          },
          {
            title: "Mutations",
            id: "vuexMutations",
          },
          {
            title: "Todo Module",
            id: "todoModule",
          },
          {
            title: "Router/index.js With Todo Module",
            id: "mainVuexFileWithTodoModule",
          },
          {
            title: "Router Dispatch",
            id: "routerDispatch",
          },
        ],
      },
      {
        title: "Loader",
        path: "/loader",
        headings: [
          {
            title: "Toggle Loader",
            id: "toggleLoader",
          },
        ],
      },
      {
        title: "Multi Language",
        path: "/multi_language",
        headings: [
          {
            title: "How Does Multi-language functionality work?",
            id: "howDoesItWork",
            innerHeadings: [
              {
                title: "Install i18n",
                id: "installI18n",
              },
              {
                title: "Add I18n in main.js",
                id: "addI18nInMain",
              },
              {
                title: "Create Json",
                id: "createJSON",
              },
              {
                title: "Import Translation Files in main.js",
                id: "importTranslation",
              },
              {
                title: "Set Selected Language in localStorage",
                id: "setInLocalStorage",
              },
              {
                title: "Initialize i18n and integrate in vue.",
                id: "initializei18n",
              },
              {
                title: "Using in i18n project",
                id: "usingInProject",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "Components",
    children: [
      {
        title: "Basic UI Elements",
        path: "/basic_ui_elements",
        headings: [
          { title: "Installing Bootstrap-Vue", id: "installingBootstrapVue" },
          { title: "Buttons", id: "buttons" },
          { title: "Tags & pills", id: "tagsAndPills" },
          { title: "Progress Bar", id: "progressBar" },
          { title: "Alert", id: "alert" },
          { title: "Popover", id: "popover" },
          { title: "Tooltip", id: "tooltip" },
          { title: "Dropdown", id: "dropdown" },
          { title: "Tabs", id: "tabs" },
          { title: "According", id: "according" },
        ],
      },
      {
        title: "advance UI Elements",
        path: "/advance_ui_elements",
        headings: [
          { title: "Scrollable", id: "scrollable" },
          { title: "Toaster", id: "toaster" },
          { title: "Tour", id: "tour" },
          { title: "Rating", id: "rating" },
          { title: "Pagination", id: "pagination" },
          { title: "Sweet-Alert", id: "sweetAlert" },
          { title: "Range Slider", id: "rangeSlider" },
          { title: "Image Cropper", id: "imageCropper" },
          { title: "Drag And Drop", id: "dragAndDrop" },
          { title: "Image Upload", id: "imageUpload" },
        ],
      },
      {
        title: "Forms",
        path: "/forms",
        headings: [
          { title: "Form validation", id: "formValidation" },
          {
            title: "Form Inputs",
            id: "formInputs",
          },
          { title: "Radio Buttons and Checkboxes", id: "radioAndCheck" },
          { title: "Colored Radio Buttons", id: "coloredRadioButtons" },
          { title: "Date Picker", id: "datePicker" },
          { title: "Select 2", id: "select2" },
          { title: "Typeahead", id: "typeahead" },
        ],
      },
      {
        title: "Tables",
        path: "/tables",
        headings: [
          { title: "Bootstrap tables", id: "bootstrapTables" },
          { title: "Smart tables", id: "smartTables" },
          {
            title: "Table Variant",
            id: "tableVariants",
            innerHeadings: [
              { title: "Basic Table", id: "basicTable" },
              { title: "Colored Table", id: "coloredTable" },
            ],
          },
        ],
      },
      {
        title: "Charts",
        path: "/charts",
        headings: [
          { title: "Google Charts", id: "googleCharts" },
          { title: "Chart Js", id: "chartJs" },
          { title: "Chartist", id: "chartist" },
        ],
      },
      {
        title: "maps",
        path: "/maps",
        headings: [
          { title: "Google Maps", id: "googleMaps" },
          { title: "Leaflet Maps", id: "leafletMaps" },
        ],
      },
      {
        title: "Editors",
        path: "/editors",
        headings: [
          { title: "Simple Editors", id: "simpleEditors" },
          { title: "CK Editors", id: "CKEditors" },
        ],
      },
    ],
  },
  {
    title: "Useful Apps",
    children: [
      { title: "E-commerce", path: "/ECommerce" },
      { title: "Chat", path: "/chat" },
      { title: "Gallery", path: "/gallery" },
      { title: "To-Do", path: "/todo" },
      { title: "To-Do with Firebase", path: "/todo_with_firebase" },
      { title: "Email", path: "/email" },
      { title: "Bookmark Search", path: "/bookmark_search" },
      { title: "Calender", path: "/calender" },
      {
        title: "Other Apps",
        path: "/otherApps",
        headings: [
          { title: "Job Search", id: "jobSearch" },
          { title: "Knowledgebase", id: "Knowledgebase" },
          { title: "Learning App", id: "learningApp" },
          { title: "Social App", id: "socialApp" },
        ],
      },
    ],
  },
  {
    title: "Integration",
    children: [
      {
        title: "Authenticaton With Firebase",
        path: "/authentication_with_firebase",
        headings: [
          { title: "Use of Firebase", id: "useOfFirebase" },
          { title: "Prerequisites", id: "prerequisites" },
          { title: "Step 1: Setup Firebase", id: "step1" },
          { title: "Step 2: Integrate In Vue", id: "step2" },
          { title: "How To Remove Firebase", id: "removeFirebase" },
        ],
      },
      {
        title: "Authenticaton With JWT",
        path: "/authentication_with_jwt",
        headings: [
          {
            title: "Use Of Jwt",
            id: "useOfJwt",
            innerHeadings: [
              { title: "Authorization", id: "authorization" },
              { title: "Information Exchange", id: "informationExchange" },
            ],
          },
        ],
      },
      {
        title: "Authenticaton With auth0",
        path: "/authentication_with_autho",
        headings: [
          { title: "Uses of Auth0", id: "useOfAuth0" },
          { title: "Prerequisites", id: "prerequisites" },
          { title: "Setting Up Auth 0", id: "step1" },
          { title: "Integrating Auth 0 in vue", id: "step2" },
        ],
      },
    ],
  },
  {
    title: "Credits",
    children: [{ title: "Credits", path: "/credits" }],
  },
  {
    title: "FAQ",
    children: [
      {
        title: "Faq",
        path: "/faq",
        headings: [
          {
            title: "Npm Install",
            id: "npmInstall",
            question:
              "When you first Receive the theme, and you run npm run dev directly, you will face this error.",
            errorImages: ["errors/npmInstallError.png"],
            answer:
              "Run npm install first to install all the dependencies and then run the command npm run dev.",
            codes: [
              { title: "", code: "npm install" },
              {
                title: "",
                code: "npm run dev",
              },
            ],
          },
          {
            title: "Cannot Install And Use dependencies.",
            id: "noDependencies",
            question: "Facing Issues while installing and using dependencies ?",
            answer:
              "If you are facing this issues, then you might be running the older version of node, we recommend that you upgrade your node version and try running the project again.",
          },
          {
            title: "Facing Issue of Watchers limit reached",
            id: "watchDependencies",
            question:
              "If you faces System limit for number of file watchers reached, watch like error",
            answer: "Try the below given command",
            codes: [
              {
                title: "",
                code: "sudo sysctl fs.inotify.max_user_watches=524288",
              },
            ],
          },

          {
            title: "compatible with vue3?",
            question: "Why we haven't updated to Vue3 yet?",
            id: "notUpdatedToVue3",
            answer:
              "We have used bootstrap-vue in our cuba theme which is only compatible with Vue 2.x versions. Currently bootstrap-vue does not provide support for vue 3, making it difficult to upgrade the theme to vue3. ",
          },
          {
            title: "Heap out of memory",
            id: "headOutOfMemory",
            question: "Getting the error -> Heap out of memory?",
            answer:
              "Run the following command in the terminal. Use the first command if you are a linux user and second command if you are windows user.",
            codes: [
              {
                title: "For Linux",
                code: "NODE_OPTIONS=--max_old_space_size=4096 ",
              },
              {
                title: "For Windows",
                code: "set NODE_OPTIONS=--max_old_space_size=4096 npm run build ",
              },
            ],
          },
          {
            title: "Cache Releated issues?",
            id: "cacheIssues",
            question: "facing Issues with cache?",
            answer: "Follow the below Given Setps",
            codes: [
              {
                title: "Run this command first",
                code: "npm cache clean --force",
              },
              {
                title: "If still you are facing the same issue:",
                code: `remove node_module and
package-lock and
run npm i again `,
              },
            ],
          },
        ],
      },
    ],
  },
];
