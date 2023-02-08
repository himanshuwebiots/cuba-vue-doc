<template>
  <div @mouseenter="showCopyButton(true)" @mouseleave="showCopyButton(false)">
    <div class="code-box-copy position-relative">
      <button @click.prevent="copyCode" :style="{ opacity: copyButton ? 1 : 0 }" class="code-box-copy__btn btn-clipboard float-end" title="Copy">
        <i class="fa" :class="icon"></i>
      </button>
      <PrismEditor class="my-editor" :autoStyleLineNumbers="true" :lineNumbers="lineNumbers" v-model="code" :highlight="highlighter"></PrismEditor>
    </div>
  </div>
</template>

<script>
import { PrismEditor } from "vue-prism-editor";
import "vue-prism-editor/dist/prismeditor.min.css"; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-solarizedlight.css"; // import syntax highlighting styles

export default {
  props: ["code", "lineNumbersProp"],
  data() {
    return {
      copyCount: 0,
      codeToShow: "a",
      icon: "fa-regular fa-copy",
      lineNumbers: true,
      copyButton: false,
    };
  },
  components: {
    PrismEditor,
  },
  methods: {
    showCopyButton(value) {
      this.copyButton = value;
    },
    highlighter(command) {
      return highlight(command, languages.js); // languages.<insert language> to return html with markup
    },
    copyCode() {
      this.copyCount += 1;
      this.icon = "fa-check";
      setTimeout(() => {
        this.icon = "fa-regular fa-copy";
      }, 1000);
      navigator.clipboard.writeText(this.codeToShow);
      if (this.copyCount < 4) {
        this.success("Data Has Been Copied.");
      } else this.error("Enough Bro!!! It's already copied😉");
      if (this.copyCount > 8) {
        this.copyCount = 0;
      }
    },
    success(message) {
      this.$toasted.show(message, {
        theme: "outline",
        position: "bottom-right",
        type: "success",
        duration: 2000,
      });
    },
    error(message) {
      this.$toasted.show(message, {
        theme: "outline",
        position: "bottom-right",
        type: "error",
        duration: 2000,
      });
    },
  },
  mounted() {
    this.copyCount = 0;
    this.codeToShow = this.code;
    var singleLine = false;
    if (this.code) {
      this.code.split(" ").every((item) => {
        if (item.includes("\n")) {
          singleLine = true;
          return false;
        } else return true;
      });
    }
    singleLine ? (this.lineNumbers = true) : (this.lineNumbers = false);
  },
};
</script>
<style>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}
</style>
