<template>
  <div>
    <prism-editor class="my-editor" v-model="code" :highlight="highlighter" line-numbers></prism-editor>
  </div>
</template>

<script>
import { highlight, languages } from "prismjs/components/prism-core";

export default {
  components: {},
  data: () => ({ code: 'console.log("Hello World")' }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js); // languages.<insert language> to return html with markup
    },
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
