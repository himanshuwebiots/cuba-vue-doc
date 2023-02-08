<template>
  <div>
    <a
      href="javascript:void(0)"
      class="sidebar-overlay"
      :class="showOverlay ? 'show' : 'd-none'"
      @click.prevent="closeOverlay"
    ></a>
    <header1 />
    <div class="container custom-container">
      <div class="document-main">
        <sidebar />
        <div class="content" :class="[contentClasses, fontSize]">
          <Nuxt />
          <navigation_buttons />
          <thankyou v-if="$route.path === '/faq'" />
        </div>
        <rightSidebar />
      </div>
    </div>
    <footer1 />
    <tapToTop />
  </div>
</template>

<script>
import header1 from "@/components/header/header.vue";
import footer1 from "@/components/footer/footer1.vue";
import sidebar from "@/components/sidebar/sidebar.vue";
import rightSidebar from "@/components/sidebar/rightSidebar.vue";
import tapToTop from "@/components/tapToTop.vue";
import thankyou from "@/components/thankyou.vue";

import navigation_buttons from "@/components/buttons/navigation_buttons.vue";

export default {
  components: {
    header1,
    sidebar,
    rightSidebar,
    footer1,
    tapToTop,
    navigation_buttons,
    thankyou,
  },
  data() {
    return {
      contentClasses: "",
      isDataComming: false,
    };
  },
  methods: {
    closeOverlay() {
      this.$store.dispatch("clickEvents/closeOverlay");
    },
  },
  watch: {
    $route() {
      this.contentClasses = "";
    },
  },
  created() {
    this.$nuxt.$on("setContentClasses", (data) => {
      this.contentClasses = data;
    });
  },
  computed: {
    showOverlay() {
      return this.$store.state.clickEvents.overlay;
    },
    fontSize() {
      return this.$store.state.functionalities.fontSizeClasses;
    },
  },
};
</script>

<style></style>
