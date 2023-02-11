<template>
  <div class="row">
    <div class="col-sm-12" id="gettingStarted">
      <h4 class="main-title">Getting Started</h4>
    </div>
    <div class="col-sm-12">
      <div class="alert-box alert alert-primary">
        <p class="mt-0">
          Cuba Vue Admin Theme is pure Vue theme, Yes! you read correct, it's
          <b>No Jquery</b> Vue admin theme including all feature and
          functionality with ease of integration for your project. Cuba theme
          documentaition will help you to understand Vue from scratch for making
          your own perfect real time dream application.
        </p>
        <p>
          Follow the documentation carefully to solve your issues in minutes.
          Apart from that if you don't find solution of you problem in here then
          you can raise a support ticket for your issue at
          <a href="https://pixelstrap.freshdesk.com" target="_blank">
            <b>pixelstrap.freshdesk.com</b></a
          >
        </p>
        <h4 class="ul-title">Dependancies in our theme</h4>
        <ul class="mb-0">
          <li>Vue Cli 5</li>
          <li>Bootstrap-5</li>
          <li>SASS</li>
        </ul>
      </div>

      <div class="gulp-section">
        <div class="p-t-0">
          <p>
            This Documentation will guide you through all the concepts used in
            the theme and hopefully answer all your queries. Below are the
            things that you are going to find in this documentation.
          </p>
            <nuxt-link to="/folder_structure" id="folderStructure">
              <h4 class="sub-title">Folder Structure:</h4>
            </nuxt-link>
          <p>
            Before starting any project, it is very important to set a folder
            structure. It helps us organize our code neatly and makes it easier
            for the future developers to modify anything in the theme.
          </p>
            <nuxt-link to="/installation" id="installationGuide">
              <h4 class="sub-title">Installation Guide:</h4>
            </nuxt-link>
          <p>
            To make sure that you can setup your project smoothly, we have
            provided an Installation guide for you to follow. This Installation
            guide contains everything from installing node till running your
            project. Do not miss any steps while creating a new project or else
            you might have to start over again.
          </p>
          <p>
            Make sure that you go through the explanation of folder structure
            used in our theme, it will become easier for you to make any
            modifications. If you want , you could follow our folder structure
            in your project , that way if you encounter any difficulties in your
            project , you can refer our theme.
          </p>

            <nuxt-link to="/theme_layouts" id="themeLayout">
              <h4 class="sub-title">Theme Layouts:</h4>
            </nuxt-link>
          <p>
            With multiple customization options , we can create many different
            page layouts. Its upto your imagination , how you use the options
            and implement them in your website. But to give you a starting point
            , we have used all the available customization options and made a
            few different layouts. You can use them to get some inspiration for
            you own website or use them as they are.
          </p>
            <nuxt-link to="/theme_layouts" id="themeCustomizer">
              <h4 class="sub-title">Theme Customizer:</h4>
            </nuxt-link>
          <p>
            To make your theme look unique and as per you taste, we have
            provided theme customizer, through which you can make changes
            according to your preference within the theme. And we have also
            provided a guide on how the customizer works. You can refer it to
            make your own custom changes.
            There are 4 different parts of the theme customizer:
            <ol>
              <li><a href="/layout_types">Layout Types</a></li>
              <li><a href="/sidebar_options">Sidebar Options</a></li>
              <li><a href="/unlimited_colors">Unlimited Colors</a></li>
              <li><a href="/mix_layout">Mixed Layout</a></li>
            </ol>
          </p>
            <nuxt-link to="/sidebar">
              <h4 class="sub-title" id="sidebar">Sidebar:</h4>
            </nuxt-link>
          <p>
            To navigate through the website, a sidebar is must. But with
            increasing page , number of lines required to display all the links
            in sidebar increases rapidly. To make it shorter we have used
            looping concepts. You can refer our guide to sidebar to learn more
            about how our code logic works.
          </p>
            <nuxt-link to="/dark_layout" id="darkLayout">
              <h4 class="sub-title">Dark Layout:</h4>
            </nuxt-link>
          <p>
            It is essential for us to maintain good user experience, and even when they are browsing through your website at night, that experience should not be ruined just because your website is too bright. To make sure our user gets the best experience at any time of the day, we have added the dark mode. Go through our Guide to dark layout to know more about it.
          </p>
            <nuxt-link to="/scss_structure" id="scssStructure">
              <h4 class="sub-title">SCSS Structure:</h4>
            </nuxt-link>
          <p>
            When the theme is this big, there is a vast amount of style written.
            To organize such amount of code , a proper folder structure becomes
            necessary. This way it becomes easier for us to find and modify
            styles of a component without much hassle. You could refer to our
            explanation on the scss folder structure and use it in your project
            to keep your styles more managed.
          </p>
            <nuxt-link to="/create_new_page" id="creatingNewPage">
              <h4 class="sub-title">Creating New Page:</h4>
            </nuxt-link>
          <p>
            When you have completed setting up your project, you might require to add more pages. A short guide on how to create new pages have been given in this documentation. You can refer it and start adding your own pages.
          </p>  
            <nuxt-link to="/routing" id="routingGuide">
              <h4 class="sub-title">Routing Guide:</h4>
            </nuxt-link>
          <p>
            One of the most important things in any Vue site is routing. Without
            it your website cannot run. It is responsible for creating paths for
            our website pages and attaching components to show to those paths.
            An extensive guide has been made on this topic, go through it and
            follow the given steps to make you own routes.
          </p>
            <nuxt-link to="/vuex" id="vuexGuide">
              <h4 class="sub-title">Vuex Guide:</h4>
            </nuxt-link>
          <p>
            There are multiple elements in this website that are dependent on
            each other, when the state of one element or component changes then
            according to that other component might have to change as well. For
            that we can keep emiting event till we reach the common parent
            components and pass props through it. But when having multiple
            levels of parent child relationship this process becomes very
            difficult to implement. To tackle this problem Vuex has been
            provided. To know more about it refer our
            <nuxt-link to="/vuex"><span> vuex Guide.</span></nuxt-link>
          </p>
            <nuxt-link to="/loader" id="loader">
              <h4 class="sub-title">Loader:</h4>
            </nuxt-link>
          <p>
            Content of the website takes some time to load the content when some
            they are fetching the data from an api or loading a vast amount of
            styles. This delay can become a reason for user's bad experience
            with your website. To avoid this we have added a loader. When the
            content is loading in the background we could just show loader to
            indicate that our content is still loading. Have a look at our
            loader guide to see how we have implemented loader logic in our
            theme.
          </p>
            <nuxt-link to="/multi_language" id="multiLanguage">
              <h4 class="sub-title">Multi Language Guide:</h4>
            </nuxt-link>
          <p>
            We will have many users accross the world, and they  will be comfortable reading through your website if the language used is their native language. Multiple languages functionality has been provided so according to the users you can implement options for many different languages.
          </p>
          
          
            <nuxt-link to="/authentication_with_firebase" id="authenticationSystem">
              <h4 class="sub-title">Authentication System:</h4>
            </nuxt-link>
          <p>
            As this is an admin site , some tpe of authentication system is a
            must, or else someone who doesn't need to know the details may look
            into you site. We have provided few different options for the
            Authentication System. To use it or remove it from the site , have a
            look at our guide to Authentication.
          </p>
            <nuxt-link to="/basic_ui_elements" id="components">
              <h4 class="sub-title">Components:</h4>
            </nuxt-link>
          <p>
            A good practise while coding is to
            <span> Never Repeat Your Code</span>. Which means once you write
            some lines of code, you should avoid writing same lines of code
            somewhere else. Make those lines of code in such a way that you can
            you it multiple times throughout your website. We have created such
            components and given a detialed explaination about them. Make sure
            to go throught it.
          </p>
            <nuxt-link to="/ECommerce" id="apps">
              <h4 class="sub-title">Apps:</h4>
            </nuxt-link>
          <p>
            To manage admin side functionalities we have created a few different
            apps like
            <span>Chat Application , To-Do application, Email Application</span>
            etc... To find out what other applications we have provided , see
            our Apps Guide.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: "IndexPage",
};
</script>
