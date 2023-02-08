<template>
  <div class="btn-groups">
    <nuxt-link :to="previousPage" v-if="previousPage != ''" class="badge badge-left navigate-button badge-primary-light">
      <i class="fa fa-arrow-left px-2"></i>
      Previous
    </nuxt-link>
    <nuxt-link :to="nextPage" v-if="nextPage != ''" class="badge badge-right navigate-button badge-primary-light">
      Next
      <i class="fa fa-arrow-right px-2"></i>
    </nuxt-link>
  </div>
</template>

<script>
import { MENUITEMS } from "@/static/data/sidebar.js";
export default {
  data() {
    return {
      pagePaths: [],
      previousPage: "",
      nextPage: "",
    };
  },
  methods: {
    setPages(currentPath) {
      var currentPageIndex = this.pagePaths.findIndex((path) => path === currentPath);
      if (currentPageIndex - 1 < 0) {
        this.previousPage = "";
      } else {
        this.previousPage = this.pagePaths[currentPageIndex - 1];
      }

      if (currentPageIndex + 1 > this.pagePaths.length - 1) {
        this.nextPage = "";
      } else {
        this.nextPage = this.pagePaths[currentPageIndex + 1];
      }
    },
  },
  watch: {
    $route(route) {
      this.setPages(route.path);
    },
  },
  mounted() {
    MENUITEMS.forEach((item) => {
      if (item.children) {
        item.children.forEach((child) => {
          if (child.path) {
            this.pagePaths.push(child.path);
          }
        });
      }
    });
    this.setPages(this.$route.path);
  },
};
</script>

<style></style>
