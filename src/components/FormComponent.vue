<template>
  <div>
    <v-row v-for="(option, index) in options" :key="index">
      <v-col cols="6">
        <v-text-field class="miniInput" v-model="option.text" label="Enter option text" variant="outlined"
          density="compact" hide-details></v-text-field>
      </v-col>
      <v-col cols="1">
        <v-checkbox v-model="option.correct" density="compact" hide-details></v-checkbox>
      </v-col>
      <v-col>
        <v-btn @click="removeOption(index)" color="error">Remove</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
  },
  methods: {
    removeOption(index) {
      this.options.splice(index, 1);
    },
  },
};
</script>
