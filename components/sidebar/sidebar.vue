<template>
  <div class="left-sidebar" id="left_sidebar" :class="{ open: isSidebarOpen }">
    <aside>
      <ul class="list-unstyled nav-sidebar doc-nav">
        <li class="nav-item" v-for="(section, index) in menuitems" :key="index">
          <div class="title"> <nuxt-img src="/assets/images/document/vue.png" alt="" />{{ section.title }} </div>
          <ul class="dropdown-nav">
            <li class="nav-item" v-for="(link, index) in section.children" :key="'a' + index">
              <nuxt-link class="nav-link" :id="link.path === active.path ? 'active_link' : ''" :to="link.path"
                >{{ link.title }}
                {{ $route.path == link.path ? setCurrent(link) : "" }}
              </nuxt-link>
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
  props: {},
  watch: {
    $route() {
      this.$store.dispatch("clickEvents/closeOverlay");
    },
  },
  methods: {
    setCurrent(active) {
      this.active = active;
      this.$store.dispatch("functionalities/setCurrentpage", {
        currentPage: active,
      });
    },
  },
  computed: {
    isSidebarOpen() {
      return this.$store.state.clickEvents.clickEvents.sidebar;
    },
  },
  data() {
    return {
      activeLink: "",
      active: {},
      menuitems: MENUITEMS,
    };
  },
};
</script>

<style></style>
