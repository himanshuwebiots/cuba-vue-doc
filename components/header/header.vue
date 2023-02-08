<template>
  <div class="home-section">
    <nav class="navbar navbar-expand-lg">
      <div class="container custom-container">
        <div class="main-menu">
          <nuxt-link class="navbar-brand" to="/">
            <img src="~assets/images/logo/logo.png" alt="" />
          </nuxt-link>
          <div>
            <button
              class="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fa fa-bars"> </i>
            </button>
            <div
              class="collapse navbar-collapse w-100"
              id="navbarSupportedContent"
            >
              <ul class="navbar-nav menu">
                <li class="nav-item active">
                  <a
                    class="nav-link"
                    href="https://1.envato.market/3GVzd"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    target="_blank"
                    >Purchase</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="https://pixelstrap.freshdesk.com/"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    target="_blank"
                    >Support</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="http://admin.pixelstrap.com/cuba/theme/landing-page.html"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    target="_blank"
                    >Demo</a
                  >
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    href="http://admin.pixelstrap.com/cuba/theme/landing-page.html#frameworks"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                    target="_blank"
                    >Feature
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <ul class="nav-right">
            <li>
              <div class="d-lg-none d-block">
                <a
                  class="toggle-sidebar"
                  @click.prevent="toggleSidebar"
                  href="#"
                  ><i class="fa fa-sliders"></i
                ></a>
              </div>
            </li>
            <li>
              <div class="btn-group">
                <a
                  class="decrease btn btn-doc"
                  href="#"
                  title="Decrease font size"
                  @click.prevent="setFontSize('decrease')"
                  >A-</a
                ><a
                  class="reset btn btn-doc"
                  href="#"
                  title="Default font size"
                  @click.prevent="setFontSize('reset')"
                  >A</a
                ><a
                  class="increase btn btn-doc"
                  href="#"
                  title="Increase font size"
                  @click.prevent="setFontSize('increase')"
                  >A+</a
                >
              </div>
            </li>

            <li>
              <a
                class="btn btn-dark mode"
                @click.prevent="toggleDarkMode"
                href="#"
                title="Dark"
                ><i class="fa fa-moon"></i><span>Dark</span></a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container custom-container">
      <div class="search-input">
        <h1 class="technologyText">Vue Document</h1>
        <div class="input-group mb-md-3 mb-0">
          <input
            type="text"
            @keydown.up="handleUpKey"
            @blur="handleBlur"
            @keydown.down="handleDownKey"
            @keydown.esc="handleEsc"
            @keyup.enter="handleEnterKey"
            @focus="handleAtFocus"
            v-model="searchQuery"
            class="form-control"
            placeholder="search anything here"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span class="input-group-text" id="basic-addon2"> Search </span>
          <div
            class="suggetion-box"
            id="suggetion-box"
            v-if="showSearchResults"
            :class="showSearchResults ? '' : 'd-none'"
          >
            <div class="suggestion-list" id="suggestion-list">
              <div
                class="suggetion-item"
                @click.prevent="changePath(result.subHeadingPath)"
                :class="{ selected: index === selectedItem }"
                :id="index === selectedItem ? 'selected' : ''"
                v-for="(result, index) in searchResults"
                :key="index"
              >
                <p class="">
                  <span
                    class="cursor_pointer"
                    @click.prevent="changePath(result.path)"
                  >
                    {{ result.page }}
                  </span>
                  <span v-if="result.heading">>>></span>
                  <span
                    class="cursor_pointer"
                    @click.prevent="changePath(result.headingPath)"
                    v-if="result.heading"
                  >
                    {{ result.heading }}
                  </span>
                  <span v-if="result.subHeading">>>></span>
                  <span
                    class="cursor_pointer"
                    @click.prevent="changePath(result.subHeadingPath)"
                    v-if="result.subHeading"
                  >
                    {{ result.subHeading }}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="popular-search">
          <span>Popular Search:</span>
          <ul>
            <li>
              <nuxt-link to="/installation">
                <span class="badge bg-primary">Installation</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/sidebar">
                <span class="badge bg-primary">Sidebar</span>
              </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/create_new_page">
                <span class="badge bg-primary">Create New Page</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="effect-sec">
      <img src="~assets/images/girl.png" class="img-fluid girl-img" alt="" />
    </div>
  </div>
</template>

<script>
import { MENUITEMS } from "@/static/data/sidebar.js";
export default {
  data() {
    return {
      searchQuery: "",
      showSearchResults: false,
      selectedItem: 2,
      searchResults: [],
    };
  },
  watch: {
    searchResults(results) {
      if (results.length == 0) {
        this.showSearchResults = false;
      }
    },

    searchQuery() {
      this.showSearchResults = true;
      this.selectedItem = 0;
      this.searchResults = [];

      MENUITEMS.forEach((item) => {
        if (item.children) {
          item.children.forEach((child) => {
            if (
              child.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            ) {
              var objToPush = {
                page: child.title,
                path: child.path,
                heading: "",
              };
              this.searchResults.push(objToPush);
            }
            if (child.headings) {
              child.headings.forEach((heading) => {
                if (
                  heading.title
                    .toLowerCase()
                    .includes(this.searchQuery.toLowerCase())
                ) {
                  var objToPush2 = {
                    page: child.title,
                    path: child.path,
                    headingPath: child.path + "#" + heading.id,
                    heading: heading.title,
                  };
                  this.searchResults.push(objToPush2);
                }
                if (heading.innerHeadings) {
                  heading.innerHeadings.forEach((subHeading) => {
                    if (
                      subHeading.title
                        .toLowerCase()
                        .includes(this.searchQuery.toLowerCase())
                    ) {
                      var objToPush3 = {
                        page: child.title,
                        path: child.path,
                        heading: heading.title,
                        headingPath: child.path + "#" + heading.id,
                        subHeading: subHeading.title,
                        subHeadingPath: child.path + "#" + subHeading.id,
                      };
                      this.searchResults.push(objToPush3);
                    }
                  });
                }
              });
            }
          });
        }
        this.searchQuery == "" && (this.searchResults = []);
      });
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.dispatch("functionalities/toggleDarkMode");
    },
    setFontSize(fontSize) {
      this.$store.dispatch("functionalities/setFontSize", {
        fontSize: fontSize,
      });
    },
    handleBlur() {
      setTimeout(() => {
        this.showSearchResults = false;
      }, 200);
    },
    handleAtFocus() {
      if (this.searchResults.length > 0) {
        this.showSearchResults = true;
      }
      document.addEventListener("keyup", function (evt) {
        if (evt.keyCode === 27) {
          this.showSearchResults = false;
        }
      });
    },
    handleEsc() {
      this.showSearchResults = false;
    },
    handleUpKey() {
      if (this.selectedItem - 1 >= 0) this.selectedItem -= 1;
      var myElement = document.getElementById("selected");
      var topPos = myElement.offsetTop;
      document.getElementById("suggestion-list").scrollTop = topPos - 70;
    },
    handleDownKey() {
      if (this.selectedItem + 1 < this.searchResults.length)
        this.selectedItem += 1;
      var myElement = document.getElementById("selected");
      var topPos = myElement.offsetTop;
      document.getElementById("suggestion-list").scrollTop = topPos;
    },
    handleEnterKey() {
      if (this.searchQuery != "") {
        if (this.searchResults[this.selectedItem].subHeadingPath) {
          this.changePath(this.searchResults[this.selectedItem].subHeadingPath);
        } else if (this.searchResults[this.selectedItem].headingPath) {
          this.changePath(this.searchResults[this.selectedItem].headingPath);
        } else {
          this.changePath(this.searchResults[this.selectedItem].path);
        }
      }
      this.searchQuery = "";
    },
    toggleSidebar() {
      this.$store.dispatch("clickEvents/toggleSidebar");
    },
    changePath(path) {
      this.$router.push(path);
      this.showSearchResults = false;
    },
  },
};
</script>

<style></style>
