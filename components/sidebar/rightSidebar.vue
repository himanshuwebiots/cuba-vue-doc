<template>
  <div class="left-sidebar right-part" v-if="headings.length > 0">
    <aside>
      <ul class="list-unstyled nav-sidebar doc-nav">
        <li class="nav-item">
          <a href="#" class="title">On this page</a>
          <ul class="dropdown-nav ps-0">
            <li class="nav-item" v-for="(heading, index) in headings" :key="index">
              <nuxt-link class="nav-link" :to="currentPage + '#' + heading.id"><i class="fa fa-angle-right me-2"></i>{{ heading.title }}</nuxt-link>
              <ul class="dropdown-sub-nav" v-if="heading.innerHeadings">
                <li v-for="(subHeading, index) in heading.innerHeadings" :key="'a' + index">
                  <nuxt-link class="nav-link" :to="currentPage + '#' + subHeading.id"><i class="fa fa-angle-right me-2"></i>{{ subHeading.title }}</nuxt-link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
import { MENUITEMS } from "@/static/data/sidebar.js";
export default {
  data() {
    return {
      currentPage: "",
      headings: [],
    };
  },
  watch: {
    $route() {
      this.currentPage = this.$route.path;
      this.filterHeadings();
    },
  },
  methods: {
    filterHeadings() {
      this.headings = [];
      MENUITEMS.every((item) => {
        var continueMainLoop = true;
        item.children &&
          item.children.every((child) => {
            var continueChildLoop = true;
            if (child.path == this.$route.path && child.headings) {
              this.headings = child.headings;
              continueMainLoop = false;
              continueChildLoop = false;
            }
            return continueChildLoop;
          });
        return continueMainLoop;
      });
    },
  },
  created() {
    this.currentPage = this.$route.path;
    this.filterHeadings();
  },
};
</script>

<style></style>
