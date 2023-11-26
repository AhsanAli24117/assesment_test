<template>
  <v-container>
    <template v-for="(question, index) in questions" :key="index">
      <v-row class="w-100 ma-1">
        <v-col cols="8" style="padding: 4px;">
          <v-textarea class="miniTextarea" v-model="question.question" label="Enter your question" rows="1"
            variant="outlined" density="compact" hide-details />
        </v-col>
        <v-col style="padding: 4px;">
          <v-btn @click="removeQuestion(index)" color="error">Remove Question</v-btn>
        </v-col>
        <v-container style="padding: 8px;">
          <FormComponent :options="question.options" />
          <v-btn @click="addOption(question)" class="mt-2" color="success">Add Option</v-btn>
        </v-container>
      </v-row>
    </template>
  </v-container>
</template>

<script>
import FormComponent from './FormComponent.vue';

export default {
  components: {
    FormComponent,
  },
  props: {
    questions: Array,
  },
  methods: {
    addOption(question) {
      question.options.push({ text: '', correct: false });
    },
    removeQuestion(index) {
      this.questions.splice(index, 1);
    }
  },
};
</script>
