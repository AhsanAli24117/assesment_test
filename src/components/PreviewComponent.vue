<template>
  <v-container>
    <h2 class="ma-2">Preview</h2>
    <v-row v-for="(question, index) in questions" :key="index">
      <h3>{{ question.question }}</h3>
      <v-list>
        <v-list-item v-for="(option, i) in question.options" :key="i">
          <v-list-item-title>
            <v-checkbox v-model="option.correct" readonly :label="option.text" density="compact"
              hide-details></v-checkbox>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    questions: Array,
  },
};
</script>
