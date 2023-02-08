<template>
  <div class="row">
    <div class="col-sm-12">
      <h4 class="main-title">Routing in Vue</h4>
      <p>
        Routing is one of the most important aspects of VueJs, without it you
        cannot render any of you pages. When you install vue, it asks you if you
        want to include the router so that you do not have to build it from
        scratch. We recommend choosing the routing option while creating a vue
        project.
      </p>
      <p id="routerPath">You can find router file on the following path:</p>
      <p><code> theme >> src >> router >> index.js </code></p>
      <p>
        Below Given is an example of the type of code that you will write to
        create paths for your router.
      </p>
      <div class="d-flex justify-content-center align-items-center flex-column">
        <img
          class="img-fluid mb-3 img-border img-70"
          src="@/assets/images/document/vue/codeSnaps/routerIndex.png"
          alt=""
        />
        <span><code>Image: router/index.js</code> </span>
      </div>
      <h4 class="sub-title" id="makingRoutes">Making Routes</h4>
      <p>
        If you selected using router while creating the vue project then you
        will already have a boiler plate code in the router/index.js file. If
        not then you have to run the command
      </p>

      <div class="code-box-copy mt-4">
        <codeBox :code="prismCodes.installVueRouter" />
      </div>
      <p>
        and then create a folder named <code>router</code> and in that folder
        create a file named <code>index.js. </code> After that write the above
        code in that file and you are good to go.
      </p>
      <p>To create routes we first import the components we need to render.</p>
      <p><span class="bold">For Example:</span></p>
      <p>
        If we want to create a path for the home page then we will first import
        home.vue as show in the above image .
      </p>
      <p>Scroll a bit to see the image.</p>
      <p>
        Then inside the routes folder create an object which will contain the
        keys: path and component. In path you will write the path at which the
        component should be shown. Here we need to render home page on base path
        so we have provided <code> '/' </code> in the path which will redirect
        to root url. But in case of about page we have provided
        <code>'/about'</code> in the path key, which means when we go to the
        'BASE_URL/about' path then the browser will show the about page.
        BASE_URL here can be either you localhost path if you are on the
        delopment server of the path you have given while deploying your
        website.
      </p>
      <p>
        Then in the component key we will provide the component that we want to
        render on the give path. We have imported Home component above the
        routes.
      </p>
      <p class="warning-block">
        <code>Note:</code>
        Make sure that all paths are unique there are no dublicate paths or
        routes wont work and errors will be thrown.
      </p>
      <p>This was the basics of vue-routing</p>
    </div>
    <div class="col-sm-12">
      <h4 class="sub-title" id="detailOnRouting">More Detail on routing</h4>
      <p>
        To make use of layouts in our theme we have used routing a bit
        differently.
      </p>
      <p>
        There are many pages which have similar page layout, so we made a
        default layout in the body.vue component and pass all other components
        through the Body component.
      </p>
      <div class="d-flex justify-content-center align-items-center flex-column">
        <img
          class="img-fluid mb-3 img-border img-50"
          src="@/assets/images/document/vue/codeSnaps/advRouter.png"
          alt=""
        />
        <span><code>Image: router/index.js</code> </span>
      </div>
      <p class="mt-4">
        Here When we write component:Body, it means that we are providing layout
        for the components that are being passed in children array. And the meta
        tag here can be used to modify properties in the head tag of html page.
        Here we have used it to defined title of the page.
      </p>
      <p>
        Below are the code snippets you can use to create your own routes. You
        can paste them inside routes array and modify it according to your
        needs.
      </p>
      <h4 class="sub-title" id="routeWithoutLayout">
        To create route without layout:
      </h4>
      <div class="code-box-copy">
        <codeBox :code="prismCodes.routeWOLayout" />
      </div>

      <h4 class="sub-title" id="routeWithLayout">
        To create route with layout:
      </h4>
      <div class="code-box-copy">
        <codeBox :code="prismCodes.routeWLayout" />
      </div>

      <p class="warning-block mt-4">
        <code>Note:</code>
        Make sure to include
        <code> &lt;router-view /&gt;</code> tag inside the layout_component.
      </p>
    </div>
  </div>
</template>

<script>
import { highlight, languages } from "prismjs/components/prism-core";
export default {
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
  },
  data() {
    return {
      prismCodes: {
        installVueRouter: `npm install vue-router`,
        routeWOLayout: `{
    path: "/path_to_redirect",
    name: "unique_name",
    component: imported_component,
    meta: {
        title: "page_title",
    },
}`,
        routeWLayout: `
{
    path: '/parent_path',
    component: layout_component,
    children:[
        {
        path:'/parent_path/path_to_redirect',
        name:'unique_name_1',
        component:component1,
        meta: {
            title:title_of_page,
            }
        },
        {
        path:'/parent_path/path_to_redirect1',
        name:'unique_name_2',
        component:component2,
        meta: {
        title: title_of_page,
            }
        }
    ]
}`,
      },
    };
  },
};
</script>

<style></style>
