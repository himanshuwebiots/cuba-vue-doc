<template>
  <div class="row">
    <div class="col-sm-12">
      <h4 class="main-title">Installation</h4>
      <div></div>
      <p>Welcome to Vue! Vue helps you build modern web applications.</p>
      <p class="mb-4"> For getting started an Vue application you needs two things as Prerequisites. </p>
      <h4 class="sub-title" id="prerequisites">Prerequisites</h4>
      <p class="mb-4">
        Before you begin, make sure your development environment includes
        <b>Node </b>and an
        <b>npm package manager.</b>
      </p>
      <ol>
        <li>
          <h4>Node.js</h4>
          <p>Install Node.js using downloaded file</p>
          <p class="mb-4"> To check your node version, run <b>node -v </b>in a terminal/console window. </p>
        </li>
        <li>
          <h4>Npm package manager</h4>
          <p>
            Vue CLI, and Vue apps depend on features and functionality provided by libraries that are available as npm packages. To download and install npm packages, you must have an npm package
            manager.
          </p>
          <p>
            This Quick Start uses the npm client command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run <b>npm -v </b>in a
            terminal/console window.
          </p>
          <p>
            For better understanding Vue we suggest you to once go through official documentation of Vue from
            <a href="https://vuejs.org/v2/guide/" target="_blank"> <b>Vuejs.org</b></a>
          </p>
        </li>
      </ol>
    </div>
    <div class="col-sm-12">
      <h4 class="sub-title title-with-link" id="vueSetup">
        Vue setup
        <demoButton supplementPath="https://vuejs.org/v2/guide" />
      </h4>
      <div class="warning-block mb-4">
        <p> If you want Cuba theme setup then directly follow next Cuba setup section </p>
      </div>
      <h5 class="inner-sub-title" id="installingVueCli">Installing Vue CLI</h5>
      <p>
        You use the Vue CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks as it is a progressive framework for building user interfaces.
      </p>
      <p>Install the Vue CLI globally.</p>
      <p> To install the CLI using npm, open a terminal/console window and enter the following command: </p>
      <codeBox :code="prismCodes.cliInstall" />
      <h5 class="inner-sub-title" id="createInitial"> Create Initial application </h5>
      <p> Run the CLI command vue create and provide the name my-app, as shown here: </p>
      <codeBox :code="prismCodes.createApp" />

      <p> The vue create command prompts you for information about features to include in the initial app project. Accept the defaults by pressing the Enter or Return key. </p>
      <h5 class="inner-sub-title" id="serveApplication">Serve Application</h5>
      <p>Go to the workspace folder (my-app).</p>
      <codeBox :code="prismCodes.changeDirectory" />
      <p>Launch the server by using the CLI command npm start</p>
      <codeBox :code="prismCodes.runProject" />

      <h5 class="sub-title title-with-link" id="buildApplication">
        Build Application
        <demoButton supplementPath="https://cli.vuejs.org/guide/deployment.html#general-guidelines" />
      </h5>
      <p>Build you application for host on server using below command:</p>
      <codeBox :code="prismCodes.runbuild" />

      <p> It will create one dist file in your theme folder. Make zip of dist folder. so here you are ready to upload your theme on server. </p>
      <p> If you're using Apache HTTP Server, you need to create a .htaccess file in the public folder by pastng below code </p>
      <codeBox :code="prismCodes.htAccess" />
      <p>Now upload your dist folder on public folder</p>
      <h5 class="inner-sub-title" id="makingSubFolderOnServer"> Making Sub-folder on Server </h5>
      <p> By default it host on your server root, If you wish to upload on sub-folder then: </p>
      <p> Go to your theme and open vue.config.js and add your subfolder name here: </p>
      <codeBox :code="prismCodes.vueConfig" />

      <p> open route >> index.js in object of router replace base attribute with </p>
      <codeBox :code="prismCodes.basePath" />
      <codeBox :code="prismCodes.runbuild" />

      <p> Now create a .htaccess file in your subfolder folder by pastng below code </p>
      <codeBox :code="prismCodes.htAccessSubFolder" />

      <p>Now upload your dist folder in sub folder</p>
    </div>
    <div class="col-sm-12">
      <h4 class="sub-title" id="cubaSetup">Cuba setup</h4>
      <p class="mb-4"> If you have already download and install node.js and Vue CLI then ignore prerequisites accordingly. </p>
      <h5 class="inner-sub-title" id="installNode">Node.js</h5>
      <p>
        Download latest version of node.js from
        <a href="https://nodejs.org" target="_blank"><b>nodejs.org.</b></a>
      </p>
      <p>Install Node.js using downloaded file</p>
      <p class="mb-4"> To check your node version, run <b>node -v </b>in a terminal/console window. </p>
      <h5 class="inner-sub-title" id="installVueCli">Vue CLI</h5>
      <p>Install Vue CLI Using:</p>
      <codeBox :code="prismCodes.cliInstall" />

      <h5 class="inner-sub-title" id="setupCubaTheme">Setup Cuba theme by</h5>
      <ol>
        <li>Download and extract an Cuba themes from themeforest</li>
        <li>
          Extract it and then go in to theme folder.
          <codeBox :code="prismCodes.cdTheme" />
        </li>
        <li>
          Import all dependency by installing npm command
          <codeBox :code="prismCodes.npmInstall" />
        </li>
        <li>
          Now you are in stage to successfully run Cuba using below command:
          <codeBox :code="prismCodes.runProject" />
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { highlight, languages } from "prismjs/components/prism-core";
import codeBox from "@/components/codeBox.vue";
export default {
  components: { codeBox },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
  },
  data: () => ({
    prismCodes: {
      cliInstall: "npm install -g @vue/cli",
      npmInstall: "npm install",
      createApp: "vue create my-app",
      changeDirectory: "cd my-app",
      cdTheme: "cd theme",
      runProject: "npm run serve",
      runbuild: "npm run build",
      htAccess: `Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]`,
      vueConfig: `module.exports = {
baseUrl: "/cuba/",
publicPath: "/cuba/"
};`,
      basePath: `base: '/cuba/'`,
      htAccessSubFolder: `Options -MultiViews
RewriteEngine On
RewriteBase /cuba/
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QSA,L]`,
    },
  }),
};
</script>

<style></style>
