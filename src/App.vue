<template>
  <v-app>
    <v-main class="d-flex flex-column justify-space-between">
      <v-row class="ma-4">
        <v-col cols="6">
          <QuestionWidget :questions="questions" />
          <v-btn @click="addQuestion" color="primary">Add Question</v-btn>
        </v-col>
        <v-col cols="6">
          <PreviewComponent :questions="questions" />
        </v-col>
      </v-row>

      <v-btn @click="saveWorksheet" class="" color="success">Save Worksheet</v-btn>
    </v-main>
  </v-app>
</template>

<script>
import QuestionWidget from './components/QuestionWidget.vue';
import PreviewComponent from './components/PreviewComponent.vue';
import ApiService from './ApiService.js';

export default {
  components: {
    QuestionWidget,
    PreviewComponent,
  },
  data() {
    return {
      questions: [],
    };
  },
  mounted() {
    // this.fetchWorksheet();
  },
  methods: {
    addQuestion() {
      const question = {
        question: '',
        options: [],
      }
      this.questions.push(question);
    },
    fetchWorksheet() {
      ApiService.getWorksheet()
        .then((response) => {
          this.questions = response.data;
        })
        .catch((error) => {
          console.error('Error fetching worksheet:', error);
        });
    },
    saveWorksheet() {
      ApiService.saveWorksheet(this.questions)
        .then(() => {
          console.log('Worksheet saved successfully.');
        })
        .catch((error) => {
          console.error('Error saving worksheet:', error);
        });
    },
  },
};
</script>

<style lang="scss">
.miniInput {
  .v-field__input {
    font-size: 13px;
  }
}

.miniTextarea {
  .v-field__input {
    font-size: 13px;
  }
}
</style>
./ApiService.js
