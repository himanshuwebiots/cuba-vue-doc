<template>
  <div>
    <h4 class="main-title">FAQs</h4>
    <div v-for="(question, index) in questions" :key="index" :id="question.id">
      <h4 class="sub-title">Q. {{ question.question }}</h4>
      <div
        class="d-flex justify-content-center align-items-center"
        v-if="question.errorImages"
      >
        <img
          v-for="(image, index) in question.errorImages"
          :key="'b' + index"
          class="img-fluid mb-3 img-border img-80"
          :src="getImageUrl(image)"
          :alt="image"
        />
      </div>
      <p>Ans. {{ question.answer }}</p>

      <div v-if="question.codes">
        <div
          class="code-box-copy mt-4"
          v-for="(code, index) in question.codes"
          :key="'a' + index"
        >
          <p v-if="code.title">{{ code.title }}</p>
          <codeBox :code="code.code" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { MENUITEMS } from "@/static/data/sidebar.js";
export default {
  methods: {
    getImageUrl(path) {
      return require("@/assets/images/document/vue/" + path);
    },
  },

  data() {
    return {
      questions: [],
    };
  },
  created() {
    this.questions = MENUITEMS.find(
      (item) => item.title == "FAQ"
    ).children.find((item) => item.title == "Faq").headings;
  },
};
</script>

<style></style>
